(() => {
  const templateCache = new Map();

  const SIZE_MAP = {
    tiny: { previewFontSize: "0.9rem" },
    small: { previewFontSize: "1.15rem" },
    normal: { previewFontSize: "1.55rem" },
    large: { previewFontSize: "2rem" },
    "very-large": { previewFontSize: "2.6rem" },
    huge: { previewFontSize: "3.3rem" },
    massive: { previewFontSize: "4.2rem" },
  };

  const BACKGROUND_MAP = {
    transparent: null,
    white: "#ffffff",
    "light-grey": "#f3f4f6",
    "pale-yellow": "#fef9c3",
    "pale-blue": "#dbeafe",
    "pale-green": "#dcfce7",
    black: "#000000",
    magenta: "#ff00ff",
  };

  async function fetchTemplate(templatePath) {
    if (templateCache.has(templatePath)) {
      return templateCache.get(templatePath);
    }

    const response = await fetch(templatePath);
    if (!response.ok) {
      throw new Error(`Template could not be loaded: ${templatePath}`);
    }

    const source = await response.text();
    templateCache.set(templatePath, source);
    return source;
  }

  function cleanErrorMessage(error) {
    if (!error || !error.message) {
      return "Unknown error.";
    }
    return error.message.replace(/\s+/g, " ").trim();
  }

  function looksLikeLatex(input) {
    return /\\[a-zA-Z]+|[{}`]/.test(input);
  }

  function normaliseBasicInput(input) {
    return input
      .replace(/\r\n/g, "\n")
      .replace(/\u2212/g, "-")
      .replace(/–|—/g, "-")
      .replace(/×/g, " \\times ")
      .replace(/÷/g, " / ")
      .replace(/≤/g, " \\le ")
      .replace(/≥/g, " \\ge ")
      .replace(/≠/g, " \\neq ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function replaceUnicodeFractions(input) {
    const fractionMap = {
      "½": "\\frac{1}{2}",
      "⅓": "\\frac{1}{3}",
      "⅔": "\\frac{2}{3}",
      "¼": "\\frac{1}{4}",
      "¾": "\\frac{3}{4}",
      "⅕": "\\frac{1}{5}",
      "⅖": "\\frac{2}{5}",
      "⅗": "\\frac{3}{5}",
      "⅘": "\\frac{4}{5}",
      "⅙": "\\frac{1}{6}",
      "⅚": "\\frac{5}{6}",
      "⅐": "\\frac{1}{7}",
      "⅛": "\\frac{1}{8}",
      "⅜": "\\frac{3}{8}",
      "⅝": "\\frac{5}{8}",
      "⅞": "\\frac{7}{8}",
      "⅑": "\\frac{1}{9}",
      "⅒": "\\frac{1}{10}",
    };

    return input.replace(
      /[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅐⅛⅜⅝⅞⅑⅒]/g,
      (match) => fractionMap[match] || match,
    );
  }

  function replaceGreekWords(input) {
    const greekWords = [
      "alpha",
      "beta",
      "gamma",
      "delta",
      "epsilon",
      "varepsilon",
      "zeta",
      "eta",
      "theta",
      "vartheta",
      "iota",
      "kappa",
      "lambda",
      "mu",
      "nu",
      "xi",
      "pi",
      "varpi",
      "rho",
      "varrho",
      "sigma",
      "varsigma",
      "tau",
      "upsilon",
      "phi",
      "varphi",
      "chi",
      "psi",
      "omega",
      "Gamma",
      "Delta",
      "Theta",
      "Lambda",
      "Xi",
      "Pi",
      "Sigma",
      "Upsilon",
      "Phi",
      "Psi",
      "Omega",
    ];

    let output = input;
    greekWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "g");
      output = output.replace(regex, `\\${word}`);
    });

    return output;
  }

  function replaceFunctionWords(input) {
    return input.replace(
      /\b(sin|cos|tan|csc|sec|cot|log|ln|exp|max|min)\b/g,
      "\\$1",
    );
  }

  function replaceSimpleSqrt(input) {
    let output = input;
    let previous = "";

    while (output !== previous) {
      previous = output;
      output = output.replace(/sqrt\(([^()]+)\)/g, "\\sqrt{$1}");
    }

    return output;
  }

  function wrapSimpleSuperscriptsAndSubscripts(input) {
    let output = input;
    output = output.replace(/([A-Za-z0-9)\]}])\^([A-Za-z0-9]+)/g, "$1^{$2}");
    output = output.replace(/([A-Za-z0-9)\]}])_([A-Za-z0-9]+)/g, "$1_{$2}");
    return output;
  }

  function replaceSimpleFractions(input) {
    let output = input;
    let previous = "";

    const patterns = [
      [/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, "\\frac{$1}{$2}"],
      [
        /\(([^()]+)\)\s*\/\s*([A-Za-z0-9]+(?:\^\{[^}]+\}|\^[A-Za-z0-9]+|_\{[^}]+\}|_[A-Za-z0-9]+)?)/g,
        "\\frac{$1}{$2}",
      ],
      [
        /([A-Za-z0-9]+(?:\^\{[^}]+\}|\^[A-Za-z0-9]+|_\{[^}]+\}|_[A-Za-z0-9]+)?)\s*\/\s*\(([^()]+)\)/g,
        "\\frac{$1}{$2}",
      ],
      [
        /([A-Za-z0-9]+(?:\^\{[^}]+\}|\^[A-Za-z0-9]+|_\{[^}]+\}|_[A-Za-z0-9]+)?)\s*\/\s*([A-Za-z0-9]+(?:\^\{[^}]+\}|\^[A-Za-z0-9]+|_\{[^}]+\}|_[A-Za-z0-9]+)?)/g,
        "\\frac{$1}{$2}",
      ],
    ];

    while (output !== previous) {
      previous = output;
      patterns.forEach(([regex, replacement]) => {
        output = output.replace(regex, replacement);
      });
    }

    return output;
  }

  function convertPlainTextToLatex(input) {
    let output = normaliseBasicInput(input);
    output = replaceUnicodeFractions(output);
    output = replaceGreekWords(output);
    output = replaceFunctionWords(output);
    output = replaceSimpleSqrt(output);
    output = wrapSimpleSuperscriptsAndSubscripts(output);
    output = replaceSimpleFractions(output);
    return output.trim();
  }

  function resolveToLatex(rawInput) {
    const trimmed = rawInput.trim();

    if (!trimmed) {
      return { latex: "", converted: false };
    }

    if (looksLikeLatex(trimmed)) {
      return { latex: trimmed, converted: false };
    }

    return {
      latex: convertPlainTextToLatex(trimmed),
      converted: true,
    };
  }

  function hasUnsupportedEnvironment(input) {
    return /\\begin\{(align|align\*|document|tikzpicture)\}/.test(input);
  }

  function createSafeFileName(latex) {
    const base = latex
      .replace(/\\[a-zA-Z]+/g, "")
      .replace(/[{}[\]^_]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 40)
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return base ? `equation-${base}.png` : "equation.png";
  }

  async function copyTextToClipboard(text, fallbackElement) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    fallbackElement.focus();
    fallbackElement.select();
    document.execCommand("copy");
  }

  window.createLatexGenerator = async function createLatexGenerator(
    config = {},
  ) {
    const settings = {
      mountId: "",
      templatePath: "partials/latex_generator_partial.html",
      ns: "latex-inline",
      title: "Quick LaTeX generator",
      subtitle:
        "Render a clean equation PNG, then copy the raw LaTeX if needed.",
      placeholder: "s = ut + \\frac{1}{2}at^2",
      initialLatex: "",
      ...config,
    };

    if (!settings.mountId) {
      throw new Error("createLatexGenerator: mountId is required.");
    }

    if (typeof Handlebars === "undefined") {
      throw new Error("Handlebars is not loaded.");
    }

    const mount = document.getElementById(settings.mountId);
    if (!mount) {
      throw new Error(
        `createLatexGenerator: mount element not found: ${settings.mountId}`,
      );
    }

    const templateSource = await fetchTemplate(settings.templatePath);
    const template = Handlebars.compile(templateSource);

    mount.innerHTML = template({
      ns: settings.ns,
      title: settings.title,
      subtitle: settings.subtitle,
      placeholder: settings.placeholder,
    });

    const byId = (suffix) =>
      document.getElementById(`${settings.ns}-${suffix}`);

    const latexInput = byId("latexInput");
    const backgroundSelect = byId("backgroundSelect");
    const renderSizeSelect = byId("renderSizeSelect");
    const colourSelect = byId("colourSelect");
    const renderButton = byId("renderButton");
    const copyLatexButton = byId("copyLatexButton");
    const copyPngButton = byId("copyPngButton");
    const downloadPngButton = byId("downloadPngButton");
    const clearButton = byId("clearButton");
    const previewStage = byId("previewStage");
    const previewPlaceholder = byId("previewPlaceholder");
    const renderSurface = byId("renderSurface");
    const resolvedLatexOutput = byId("resolvedLatexOutput");
    const status = byId("status");
    const copyNote = byId("copyNote");

    let lastRenderedLatex = "";

    function setStatus(message, isError = false) {
      status.textContent = message;
      status.style.color = isError ? "#b42318" : "";
    }

    function setCopyNote(message, isError = false) {
      copyNote.textContent = message;
      copyNote.style.color = isError ? "#b42318" : "";
    }

    function setActionButtons(enabled) {
      copyLatexButton.disabled = !enabled;
      copyPngButton.disabled = !enabled;
      downloadPngButton.disabled = !enabled;
    }

    function getSelectedBackgroundColour() {
      return BACKGROUND_MAP[backgroundSelect.value] || null;
    }

    function updatePreviewBackground() {
      const selectedBackgroundColour = getSelectedBackgroundColour();

      previewStage.dataset.background = backgroundSelect.value;

      if (backgroundSelect.value === "transparent") {
        previewStage.style.background = "";
        previewStage.style.backgroundColor = "";
        previewStage.style.backgroundImage = "";
        previewStage.style.backgroundSize = "";
        previewStage.style.backgroundPosition = "";
        renderSurface.style.background = "transparent";
        renderSurface.style.boxShadow = "none";
        return;
      }

      previewStage.style.background = selectedBackgroundColour;
      previewStage.style.backgroundColor = selectedBackgroundColour;
      previewStage.style.backgroundImage = "none";
      previewStage.style.backgroundSize = "";
      previewStage.style.backgroundPosition = "";
      renderSurface.style.background = "transparent";
      renderSurface.style.boxShadow = "none";
    }

    function updatePreviewColour() {
      renderSurface.style.color = colourSelect.value;
    }

    function updatePreviewSize() {
      const sizeKey = renderSizeSelect.value;
      const sizeConfig = SIZE_MAP[sizeKey] || SIZE_MAP.normal;
      renderSurface.style.fontSize = sizeConfig.previewFontSize;
    }

    function clearPreview() {
      renderSurface.innerHTML = "";
      previewStage.classList.remove("has-preview");
      previewPlaceholder.style.display = "block";
    }

    function showPreview() {
      previewStage.classList.add("has-preview");
      previewPlaceholder.style.display = "none";
    }

    function maybeShowVisibilityNote() {
      if (!lastRenderedLatex || !renderSurface.innerHTML.trim()) {
        return;
      }

      const selectedColour = colourSelect.value.toLowerCase();
      const selectedBackgroundColour = getSelectedBackgroundColour();

      if (!selectedBackgroundColour) {
        if (selectedColour === "#ffffff") {
          setCopyNote(
            "White text on a transparent PNG may disappear on light backgrounds.",
            true,
          );
          return;
        }

        if (selectedColour === "#1f1f1f" || selectedColour === "#000000") {
          setCopyNote(
            "Dark text on a transparent PNG may disappear on dark backgrounds.",
            true,
          );
          return;
        }

        setCopyNote("");
        return;
      }

      if (selectedColour === selectedBackgroundColour.toLowerCase()) {
        setCopyNote(
          "The selected text colour matches the background and may look invisible.",
          true,
        );
        return;
      }

      setCopyNote("");
    }

    function getExportOptions() {
      const selectedBackgroundColour = getSelectedBackgroundColour();

      return {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: selectedBackgroundColour || undefined,
        style: {
          color: colourSelect.value,
        },
      };
    }

    function renderEquation(inputOverride) {
      const rawInput =
        typeof inputOverride === "string"
          ? inputOverride.trim()
          : latexInput.value.trim();

      if (!rawInput) {
        clearPreview();
        resolvedLatexOutput.value = "";
        lastRenderedLatex = "";
        setStatus("Please enter an equation first.", true);
        setCopyNote("");
        setActionButtons(false);
        return;
      }

      if (typeof katex === "undefined") {
        setStatus("KaTeX is not loaded.", true);
        return;
      }

      const { latex, converted } = resolveToLatex(rawInput);

      if (hasUnsupportedEnvironment(latex)) {
        clearPreview();
        resolvedLatexOutput.value = latex;
        lastRenderedLatex = "";
        setActionButtons(false);
        setCopyNote("");
        setStatus(
          "That LaTeX environment is not supported here. Use equation snippets or \\begin{aligned}...\\end{aligned}.",
          true,
        );
        return;
      }

      if (!latex) {
        clearPreview();
        resolvedLatexOutput.value = "";
        lastRenderedLatex = "";
        setStatus(
          "That input could not be resolved into renderable LaTeX.",
          true,
        );
        setCopyNote("");
        setActionButtons(false);
        return;
      }

      updatePreviewBackground();
      updatePreviewColour();
      updatePreviewSize();

      try {
        renderSurface.innerHTML = "";

        katex.render(latex, renderSurface, {
          throwOnError: true,
          displayMode: true,
          strict: "ignore",
          trust: false,
          output: "html",
        });

        showPreview();
        resolvedLatexOutput.value = latex;
        lastRenderedLatex = latex;
        setActionButtons(true);
        maybeShowVisibilityNote();

        if (converted && latex !== rawInput) {
          setStatus(
            "Rendered successfully. Plain-text input was converted into LaTeX first.",
          );
        } else {
          setStatus("Rendered successfully.");
        }
      } catch (error) {
        clearPreview();
        resolvedLatexOutput.value = latex;
        lastRenderedLatex = "";
        setActionButtons(false);
        setCopyNote("");
        setStatus(`Render failed: ${cleanErrorMessage(error)}`, true);
      }
    }

    function clearAll() {
      latexInput.value = "";
      resolvedLatexOutput.value = "";
      lastRenderedLatex = "";
      clearPreview();
      updatePreviewBackground();
      updatePreviewColour();
      updatePreviewSize();
      setStatus("Enter LaTeX, then render.");
      setCopyNote("");
      setActionButtons(false);
    }

    async function copyResolvedLatex() {
      const textToCopy = resolvedLatexOutput.value.trim();

      if (!textToCopy) {
        setCopyNote("There is no LaTeX to copy yet.", true);
        return;
      }

      try {
        await copyTextToClipboard(textToCopy, resolvedLatexOutput);
        setCopyNote("LaTeX copied to clipboard.");
      } catch (error) {
        setCopyNote("Copy failed. Your browser is being difficult.", true);
      }
    }

    async function copyPreviewPngToClipboard() {
      if (!lastRenderedLatex || !renderSurface.innerHTML.trim()) {
        setCopyNote("Render an equation before copying the PNG.", true);
        return;
      }

      if (typeof htmlToImage === "undefined") {
        setCopyNote("html-to-image is not loaded.", true);
        return;
      }

      if (
        !navigator.clipboard ||
        !navigator.clipboard.write ||
        typeof ClipboardItem === "undefined"
      ) {
        setCopyNote(
          "PNG copy is not supported in this browser. Use Download PNG instead.",
          true,
        );
        return;
      }

      try {
        const pngBlob = await htmlToImage.toBlob(
          renderSurface,
          getExportOptions(),
        );

        if (!pngBlob) {
          throw new Error("PNG blob could not be created.");
        }

        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": pngBlob,
          }),
        ]);

        setCopyNote("PNG copied to clipboard.");
      } catch (error) {
        setCopyNote(`PNG copy failed: ${cleanErrorMessage(error)}`, true);
      }
    }

    async function downloadPng() {
      if (!lastRenderedLatex || !renderSurface.innerHTML.trim()) {
        setStatus("Render an equation before downloading a PNG.", true);
        return;
      }

      if (typeof htmlToImage === "undefined") {
        setStatus("html-to-image is not loaded.", true);
        return;
      }

      try {
        setStatus("Generating PNG...");

        const dataUrl = await htmlToImage.toPng(
          renderSurface,
          getExportOptions(),
        );

        const downloadLink = document.createElement("a");
        downloadLink.href = dataUrl;
        downloadLink.download = createSafeFileName(lastRenderedLatex);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();

        setStatus("PNG generated and download started.");
      } catch (error) {
        setStatus(`PNG export failed: ${cleanErrorMessage(error)}`, true);
      }
    }

    renderButton.addEventListener("click", () => renderEquation());
    clearButton.addEventListener("click", clearAll);
    copyLatexButton.addEventListener("click", copyResolvedLatex);
    copyPngButton.addEventListener("click", copyPreviewPngToClipboard);
    downloadPngButton.addEventListener("click", downloadPng);
    resolvedLatexOutput.addEventListener("click", copyResolvedLatex);
    previewStage.addEventListener("click", copyPreviewPngToClipboard);

    backgroundSelect.addEventListener("change", () => {
      updatePreviewBackground();
      maybeShowVisibilityNote();
    });

    colourSelect.addEventListener("change", () => {
      updatePreviewColour();
      maybeShowVisibilityNote();
    });

    renderSizeSelect.addEventListener("change", updatePreviewSize);

    latexInput.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        renderEquation();
      }
    });

    previewStage.title = "Click to copy PNG";
    resolvedLatexOutput.title = "Click to copy LaTeX";
    previewStage.style.cursor = "pointer";
    resolvedLatexOutput.style.cursor = "pointer";

    updatePreviewBackground();
    updatePreviewColour();
    updatePreviewSize();
    setActionButtons(false);
    setStatus("Enter LaTeX, then render.");
    setCopyNote("");

    if (settings.initialLatex) {
      latexInput.value = settings.initialLatex;
      renderEquation(settings.initialLatex);
    }

    return {
      renderEquation,
      clearAll,
      copyResolvedLatex,
      copyPreviewPngToClipboard,
      downloadPng,
      setInput(value, autoRender = false) {
        latexInput.value = value;
        if (autoRender) {
          renderEquation(value);
        }
      },
      getResolvedLatex() {
        return resolvedLatexOutput.value.trim();
      },
    };
  };
})();
