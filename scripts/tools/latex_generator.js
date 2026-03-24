document.addEventListener("DOMContentLoaded", () => {
  const latexInput = document.getElementById("latexInput");
  const backgroundSelect = document.getElementById("backgroundSelect");
  const renderSizeSelect = document.getElementById("renderSizeSelect");
  const colourSelect = document.getElementById("colourSelect");
  const renderLatexButton = document.getElementById("renderLatexButton");
  const clearLatexButton = document.getElementById("clearLatexButton");
  const latexPreviewStage = document.getElementById("latexPreviewStage");
  const latexPreviewPlaceholder = document.getElementById(
    "latexPreviewPlaceholder",
  );
  const latexRenderSurface = document.getElementById("latexRenderSurface");
  const resolvedLatexOutput = document.getElementById("resolvedLatexOutput");
  const latexStatus = document.getElementById("latexStatus");
  const copyResolvedLatexButton = document.getElementById(
    "copyResolvedLatexButton",
  );
  const downloadPngButton = document.getElementById("downloadPngButton");
  const latexCopyNote = document.getElementById("latexCopyNote");
  const exampleButtons = document.querySelectorAll(".latex-example-button");

  if (
    !latexInput ||
    !backgroundSelect ||
    !colourSelect ||
    !renderSizeSelect ||
    !renderLatexButton ||
    !clearLatexButton ||
    !latexPreviewStage ||
    !latexPreviewPlaceholder ||
    !latexRenderSurface ||
    !resolvedLatexOutput ||
    !latexStatus ||
    !copyResolvedLatexButton ||
    !downloadPngButton ||
    !latexCopyNote
  ) {
    console.error(
      "LaTeX generator: one or more required elements are missing.",
    );
    return;
  }

  const SIZE_MAP = {
    small: {
      previewFontSize: "1.15rem",
      exportFontSize: "1.15rem",
      exportPadding: "12px 16px",
    },
    normal: {
      previewFontSize: "1.55rem",
      exportFontSize: "1.55rem",
      exportPadding: "16px 20px",
    },
    large: {
      previewFontSize: "2rem",
      exportFontSize: "2rem",
      exportPadding: "20px 24px",
    },
    "very-large": {
      previewFontSize: "2.6rem",
      exportFontSize: "2.6rem",
      exportPadding: "24px 30px",
    },
    huge: {
      previewFontSize: "3.3rem",
      exportFontSize: "3.3rem",
      exportPadding: "28px 36px",
    },
    tiny: {
      previewFontSize: "0.9rem",
      exportFontSize: "0.9rem",
      exportPadding: "10px 14px",
    },
    massive: {
      previewFontSize: "4.2rem",
      exportFontSize: "4.2rem",
      exportPadding: "32px 40px",
    },
    };
    
    const BACKGROUND_MAP = {
      transparent: null,
      white: "#ffffff",
      "light-grey": "#f3f4f6",
      "pale-yellow": "#fef9c3",
      "pale-blue": "#dbeafe",
      "pale-green": "#dcfce7",
      black: "#000000",
    };

  let lastRenderedLatex = "";

  latexPreviewStage.title = "Click to copy PNG";
  resolvedLatexOutput.title = "Click to copy LaTeX";
  latexPreviewStage.style.cursor = "pointer";
  resolvedLatexOutput.style.cursor = "pointer";

    setStatus(
      'Enter an equation, choose a background, colour, and size, then click "Render PNG".',
    );
    setCopyNote("");
    updatePreviewBackground();
    updatePreviewColour();
    updatePreviewSize();
    setActionButtons(false);

  renderLatexButton.addEventListener("click", renderEquation);
  clearLatexButton.addEventListener("click", clearAll);
  copyResolvedLatexButton.addEventListener("click", copyResolvedLatex);
  downloadPngButton.addEventListener("click", downloadPng);

  resolvedLatexOutput.addEventListener("click", copyResolvedLatex);
  latexPreviewStage.addEventListener("click", copyPreviewPngToClipboard);

    backgroundSelect.addEventListener("change", () => {
      updatePreviewBackground();
      maybeShowVisibilityNote();
    });

    colourSelect.addEventListener("change", () => {
      updatePreviewColour();
      maybeShowVisibilityNote();
    });

    renderSizeSelect.addEventListener("change", () => {
      updatePreviewSize();
    });
  
  latexInput.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      renderEquation();
    }
  });

  exampleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const example = button.dataset.example || "";
      latexInput.value = example;
      renderEquation();
    });
  });

  function setStatus(message, isError = false) {
    latexStatus.textContent = message;
    latexStatus.style.color = isError ? "#b42318" : "";
  }

  function setCopyNote(message, isError = false) {
    latexCopyNote.textContent = message;
    latexCopyNote.style.color = isError ? "#b42318" : "";
  }

  function setActionButtons(enabled) {
    copyResolvedLatexButton.disabled = !enabled;
    downloadPngButton.disabled = !enabled;
    }
    
      function getSelectedBackgroundColour() {
        return BACKGROUND_MAP[backgroundSelect.value] || null;
      }

      function updatePreviewBackground() {
        const selectedBackgroundColour = getSelectedBackgroundColour();

        latexPreviewStage.dataset.background = backgroundSelect.value;

        if (backgroundSelect.value === "transparent") {
          latexPreviewStage.style.background = "";
          latexPreviewStage.style.backgroundColor = "";
          latexPreviewStage.style.backgroundImage = "";
          latexPreviewStage.style.backgroundSize = "";
          latexPreviewStage.style.backgroundPosition = "";
          latexRenderSurface.style.background = "transparent";
          latexRenderSurface.style.boxShadow = "none";
          return;
        }

        latexPreviewStage.style.background = selectedBackgroundColour;
        latexPreviewStage.style.backgroundColor = selectedBackgroundColour;
        latexPreviewStage.style.backgroundImage = "none";
        latexPreviewStage.style.backgroundSize = "";
        latexPreviewStage.style.backgroundPosition = "";
        latexRenderSurface.style.background = "transparent";
        latexRenderSurface.style.boxShadow = "none";
      }

      function updatePreviewColour() {
        latexRenderSurface.style.color = colourSelect.value;
      }

      function updatePreviewSize() {
        const sizeKey = renderSizeSelect.value;
        const sizeConfig = SIZE_MAP[sizeKey] || SIZE_MAP.normal;
        latexRenderSurface.style.fontSize = sizeConfig.previewFontSize;
      }

  function clearPreview() {
    latexRenderSurface.innerHTML = "";
    latexPreviewStage.classList.remove("has-preview");
    latexPreviewPlaceholder.style.display = "block";
  }

  function showPreview() {
    latexPreviewStage.classList.add("has-preview");
    latexPreviewPlaceholder.style.display = "none";
    }
    
        function maybeShowVisibilityNote() {
          if (!lastRenderedLatex || !latexRenderSurface.innerHTML.trim()) {
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

    function clearAll() {
      latexInput.value = "";
      resolvedLatexOutput.value = "";
      lastRenderedLatex = "";
      clearPreview();
      updatePreviewColour();
      setStatus(
        'Enter an equation, choose a background, colour, and size, then click "Render PNG".',
      );
      setCopyNote("");
      setActionButtons(false);
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
      return {
        latex: "",
        converted: false,
      };
    }

    if (looksLikeLatex(trimmed)) {
      return {
        latex: trimmed,
        converted: false,
      };
    }

    return {
      latex: convertPlainTextToLatex(trimmed),
      converted: true,
    };
    }
    
      function hasUnsupportedEnvironment(input) {
        return /\\begin\{(align|align\*|document|tikzpicture)\}/.test(input);
      }

  function renderEquation() {
    const rawInput = latexInput.value.trim();

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
      setStatus(
        "KaTeX is not loaded. Add the KaTeX script and stylesheet to the page first.",
        true,
      );
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
            "That LaTeX environment is not supported here. Try equation snippets or use \\begin{aligned}...\\end{aligned} instead of \\begin{align}...\\end{align}.",
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
      latexRenderSurface.innerHTML = "";

      katex.render(latex, latexRenderSurface, {
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
      setCopyNote("");

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

  function cleanErrorMessage(error) {
    if (!error || !error.message) {
      return "Unknown error.";
    }

    return error.message.replace(/\s+/g, " ").trim();
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    resolvedLatexOutput.focus();
    resolvedLatexOutput.select();
    document.execCommand("copy");
  }

  async function copyResolvedLatex() {
    const textToCopy = resolvedLatexOutput.value.trim();

    if (!textToCopy) {
      setCopyNote("There is no LaTeX to copy yet.", true);
      return;
    }

    try {
      await copyTextToClipboard(textToCopy);
      setCopyNote("LaTeX copied to clipboard.");
    } catch (error) {
      setCopyNote("Copy failed. Your browser is being difficult.", true);
    }
  }

    async function copyPreviewPngToClipboard() {
      if (!lastRenderedLatex || !latexRenderSurface.innerHTML.trim()) {
        setCopyNote("Render an equation before copying the PNG.", true);
        return;
      }

      if (typeof htmlToImage === "undefined") {
        setCopyNote(
          "The image export library is not loaded. Add html-to-image first.",
          true,
        );
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
          latexRenderSurface,
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

        if (backgroundSelect.value === "transparent") {
          setCopyNote(
            "Transparent PNG copied to clipboard. It may look blank on dark backgrounds.",
          );
        } else {
          setCopyNote("PNG copied to clipboard.");
        }
      } catch (error) {
        setCopyNote(`PNG copy failed: ${cleanErrorMessage(error)}`, true);
      }
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

  function createSafeFileName() {
    const base = lastRenderedLatex
      .replace(/\\[a-zA-Z]+/g, "")
      .replace(/[{}[\]^_]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 40)
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return base ? `equation-${base}.png` : "equation.png";
  }

  async function downloadPng() {
    if (!lastRenderedLatex || !latexRenderSurface.innerHTML.trim()) {
      setStatus("Render an equation before downloading a PNG.", true);
      return;
    }

    if (typeof htmlToImage === "undefined") {
      setStatus(
        "The html-to-image library is not loaded. Add it to the page before using PNG export.",
        true,
      );
      return;
    }

    try {
      setStatus("Generating PNG...");

      const dataUrl = await htmlToImage.toPng(
        latexRenderSurface,
        getExportOptions(),
      );

      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = createSafeFileName();
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();

      if (backgroundSelect.value === "transparent") {
        setStatus(
          "PNG generated and download started. Transparent PNGs may look blank on dark backgrounds.",
        );
      } else {
        setStatus("PNG generated and download started.");
      }
    } catch (error) {
      setStatus(`PNG export failed: ${cleanErrorMessage(error)}`, true);
    }
  }
});