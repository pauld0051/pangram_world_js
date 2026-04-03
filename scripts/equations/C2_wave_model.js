(() => {
  const equationsData = [
    {
      id: "c2-wave-speed-booklet",
      groupLabel: "Booklet",
      quantity: "Wave speed",
      note: "Speed, frequency, wavelength, and period relation",
      renderLatex: "v = f\\lambda = \\frac{\\lambda}{T}",
      latex: "v = f\\lambda = \\frac{\\lambda}{T}",
      text: "v = fλ = λ/T",
    },

    {
      id: "c2-period-added",
      groupLabel: "Added",
      quantity: "Period",
      note: "Time for one complete oscillation",
      renderLatex: "T = \\frac{1}{f}",
      latex: "T = \\frac{1}{f}",
      text: "T = 1/f",
    },
    {
      id: "c2-frequency-added",
      groupLabel: "Added",
      quantity: "Frequency",
      note: "Inverse of the period",
      renderLatex: "f = \\frac{1}{T}",
      latex: "f = \\frac{1}{T}",
      text: "f = 1/T",
    },
    {
      id: "c2-angular-frequency-added",
      groupLabel: "Added",
      quantity: "Angular frequency",
      note: "Useful oscillation helper",
      renderLatex: "\\omega = 2\\pi f = \\frac{2\\pi}{T}",
      latex: "\\omega = 2\\pi f = \\frac{2\\pi}{T}",
      text: "ω = 2πf = 2π/T",
    },
    {
      id: "c2-intensity-amplitude-added",
      groupLabel: "Added",
      quantity: "Intensity and amplitude",
      note: "Intensity is proportional to amplitude squared",
      renderLatex: "I \\propto A^{2}",
      latex: "I \\propto A^{2}",
      text: "I ∝ A²",
    },
    {
      id: "c2-inverse-square-added",
      groupLabel: "Added",
      quantity: "Inverse-square spreading",
      note: "Intensity from a point source falls with distance squared",
      renderLatex: "I \\propto x^{-2}",
      latex: "I \\propto x^{-2}",
      text: "I ∝ x^-2",
    },
    {
      id: "c2-polarization-added",
      groupLabel: "Added",
      quantity: "Polarization intensity",
      note: "Malus's law",
      renderLatex: "I = I_{0}\\cos^{2}\\theta",
      latex: "I = I_{0}\\cos^{2}\\theta",
      text: "I = I₀ cos²θ",
    },
    {
      id: "c2-refraction-added",
      groupLabel: "Added",
      quantity: "Wave refraction",
      note: "Equivalent refractive-index and wave-speed forms",
      renderLatex:
        "\\frac{n_{1}}{n_{2}} = \\frac{\\sin\\theta_{2}}{\\sin\\theta_{1}} = \\frac{v_{2}}{v_{1}}",
      latex:
        "\\frac{n_{1}}{n_{2}} = \\frac{\\sin\\theta_{2}}{\\sin\\theta_{1}} = \\frac{v_{2}}{v_{1}}",
      text: "n₁/n₂ = sinθ₂/sinθ₁ = v₂/v₁",
    },
    {
      id: "c2-diffraction-slit-added",
      groupLabel: "Added",
      quantity: "Double-slit fringe spacing",
      note: "Small-angle double-slit relation",
      renderLatex: "s = \\frac{\\lambda D}{d}",
      latex: "s = \\frac{\\lambda D}{d}",
      text: "s = λD/d",
    },
    {
      id: "c2-constructive-interference-added",
      groupLabel: "Added",
      quantity: "Constructive interference",
      note: "Path difference for bright fringes",
      renderLatex: "\\text{path difference} = n\\lambda",
      latex: "\\text{path difference} = n\\lambda",
      text: "path difference = nλ",
    },
    {
      id: "c2-destructive-interference-added",
      groupLabel: "Added",
      quantity: "Destructive interference",
      note: "Path difference for dark fringes",
      renderLatex:
        "\\text{path difference} = \\left(n + \\frac{1}{2}\\right)\\lambda",
      latex:
        "\\text{path difference} = \\left(n + \\frac{1}{2}\\right)\\lambda",
      text: "path difference = (n + 1/2)λ",
    },
    {
      id: "c2-phase-difference-added",
      groupLabel: "Added",
      quantity: "Phase difference",
      note: "Phase-path relationship",
      renderLatex: "\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x",
      latex: "\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x",
      text: "Δφ = (2π/λ)Δx",
    },
    {
      id: "c2-standing-wave-speed-added",
      groupLabel: "Added",
      quantity: "String wave speed",
      note: "Wave speed on a stretched string",
      renderLatex: "v = \\sqrt{\\frac{F}{\\mu}}",
      latex: "v = \\sqrt{\\frac{F}{\\mu}}",
      text: "v = √(F/μ)",
    },
    {
      id: "c2-string-harmonics-wavelength-added",
      groupLabel: "Added",
      quantity: "String harmonics, wavelength",
      note: "String fixed at both ends",
      renderLatex: "\\lambda_{n} = \\frac{2L}{n}",
      latex: "\\lambda_{n} = \\frac{2L}{n}",
      text: "λ_n = 2L/n",
    },
    {
      id: "c2-string-harmonics-frequency-added",
      groupLabel: "Added",
      quantity: "String harmonics, frequency",
      note: "All positive integer harmonics allowed",
      renderLatex: "f_{n} = \\frac{nv}{2L}",
      latex: "f_{n} = \\frac{nv}{2L}",
      text: "f_n = nv/(2L)",
    },
    {
      id: "c2-string-fundamental-added",
      groupLabel: "Added",
      quantity: "String fundamental",
      note: "First harmonic on a stretched string",
      renderLatex: "f_{1} = \\frac{v}{2L}",
      latex: "f_{1} = \\frac{v}{2L}",
      text: "f₁ = v/(2L)",
    },
    {
      id: "c2-open-pipe-wavelength-added",
      groupLabel: "Added",
      quantity: "Open pipe harmonics, wavelength",
      note: "Pipe open at both ends",
      renderLatex: "\\lambda_{n} = \\frac{2L}{n}",
      latex: "\\lambda_{n} = \\frac{2L}{n}",
      text: "λ_n = 2L/n",
    },
    {
      id: "c2-open-pipe-frequency-added",
      groupLabel: "Added",
      quantity: "Open pipe harmonics, frequency",
      note: "All positive integer harmonics allowed",
      renderLatex: "f_{n} = \\frac{nv}{2L}",
      latex: "f_{n} = \\frac{nv}{2L}",
      text: "f_n = nv/(2L)",
    },
    {
      id: "c2-open-pipe-fundamental-added",
      groupLabel: "Added",
      quantity: "Open pipe fundamental",
      note: "First harmonic in an open pipe",
      renderLatex: "f_{1} = \\frac{v}{2L}",
      latex: "f_{1} = \\frac{v}{2L}",
      text: "f₁ = v/(2L)",
    },
    {
      id: "c2-closed-pipe-wavelength-added",
      groupLabel: "Added",
      quantity: "Closed pipe harmonics, wavelength",
      note: "Pipe closed at one end, odd harmonics only",
      renderLatex: "\\lambda_{n} = \\frac{4L}{n} \\quad (n = 1, 3, 5, \\dots)",
      latex: "\\lambda_{n} = \\frac{4L}{n} \\quad (n = 1, 3, 5, \\dots)",
      text: "λ_n = 4L/n, n = 1, 3, 5, ...",
    },
    {
      id: "c2-closed-pipe-frequency-added",
      groupLabel: "Added",
      quantity: "Closed pipe harmonics, frequency",
      note: "Only odd harmonics are present",
      renderLatex: "f_{n} = \\frac{nv}{4L} \\quad (n = 1, 3, 5, \\dots)",
      latex: "f_{n} = \\frac{nv}{4L} \\quad (n = 1, 3, 5, \\dots)",
      text: "f_n = nv/(4L), n = 1, 3, 5, ...",
    },
    {
      id: "c2-closed-pipe-fundamental-added",
      groupLabel: "Added",
      quantity: "Closed pipe fundamental",
      note: "First allowed mode in a pipe closed at one end",
      renderLatex: "f_{1} = \\frac{v}{4L}",
      latex: "f_{1} = \\frac{v}{4L}",
      text: "f₁ = v/(4L)",
    },
    {
      id: "c2-nth-harmonic-added",
      groupLabel: "Added",
      quantity: "Harmonic order",
      note: "Useful link between harmonic number and frequency",
      renderLatex: "f_{n} = n f_{1}",
      latex: "f_{n} = n f_{1}",
      text: "f_n = nf₁",
    },
    {
      id: "c2-beat-frequency-added",
      groupLabel: "Added",
      quantity: "Beat frequency",
      note: "Useful superposition helper",
      renderLatex: "f_{\\text{beat}} = |f_{1} - f_{2}|",
      latex: "f_{\\text{beat}} = |f_{1} - f_{2}|",
      text: "f_beat = |f₁ - f₂|",
    },
  ];

  const state = {
    generator: null,
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function createToast() {
    let toast = document.getElementById("copyToast");

    if (!toast) {
      toast = document.createElement("div");
      toast.id = "copyToast";
      toast.className = "copy-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    return toast;
  }

  function showToast(message) {
    const toast = createToast();
    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }

  async function copyText(value, successMessage) {
    const fallback = document.createElement("textarea");
    fallback.value = value;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    fallback.style.pointerEvents = "none";
    document.body.appendChild(fallback);

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        fallback.focus();
        fallback.select();
        document.execCommand("copy");
      }

      showToast(successMessage);
      return true;
    } catch (error) {
      showToast("Copy failed");
      return false;
    } finally {
      fallback.remove();
    }
  }

  function renderLatex(target, latex, displayMode = true) {
    target.innerHTML = "";

    if (!window.katex) {
      target.textContent = latex;
      return;
    }

    try {
      window.katex.render(latex, target, {
        throwOnError: false,
        displayMode,
        strict: "ignore",
      });
    } catch (error) {
      target.textContent = latex;
      console.error("KaTeX render error for:", latex, error);
    }
  }

  function cardMarkup(item) {
    return `
      <div class="col-12 col-md-6 col-xl-4 col-xxl-3" data-card-id="${item.id}">
        <article class="card shadow-sm border-0 h-100">
          <div class="card-body p-4 d-flex flex-column gap-3">
            <div>
              <span class="results-pill mb-2">${escapeHtml(item.groupLabel)}</span>
              <h3 class="h5 mt-2 mb-1">${escapeHtml(item.quantity)}</h3>
              <p class="quantity-note mb-0">${escapeHtml(item.note)}</p>
            </div>

            <div class="selected-render justify-content-center">
              <div
                class="d-inline-flex align-items-center justify-content-center px-3 py-2"
                data-render-target="${item.id}"
                style="background: transparent; min-width: 0; min-height: 0;"
              ></div>
            </div>

            <div class="copy-actions mt-auto pt-1">
              <button type="button" class="copy-chip" data-copy-type="latex" data-id="${item.id}">
                Copy LaTeX
              </button>
              <button type="button" class="copy-chip" data-copy-type="social" data-id="${item.id}">
                Copy social text
              </button>
              <button type="button" class="copy-chip" data-load-generator="${item.id}">
                Load into generator
              </button>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  function renderCards() {
    const grid = document.getElementById("equationsGrid");
    if (!grid) return;

    grid.innerHTML = equationsData.map(cardMarkup).join("");

    equationsData.forEach((item) => {
      const target = grid.querySelector(`[data-render-target="${item.id}"]`);
      if (target) {
        renderLatex(target, item.renderLatex, true);
      }
    });
  }

  async function handleCopyAction(copyType, itemId) {
    const item = equationsData.find((entry) => entry.id === itemId);
    if (!item) return;

    if (copyType === "latex") {
      await copyText(item.latex, "LaTeX copied");
      return;
    }

    if (copyType === "social") {
      await copyText(item.text, "Social text copied");
    }
  }

  function bindGridEvents() {
    const grid = document.getElementById("equationsGrid");
    if (!grid) return;

    grid.addEventListener("click", async (event) => {
      const copyButton = event.target.closest("[data-copy-type]");
      if (copyButton) {
        await handleCopyAction(
          copyButton.dataset.copyType,
          copyButton.dataset.id,
        );
        return;
      }

      const loadButton = event.target.closest("[data-load-generator]");
      if (loadButton) {
        const item = equationsData.find(
          (entry) => entry.id === loadButton.dataset.loadGenerator,
        );

        if (!item) return;

        if (
          !state.generator ||
          typeof state.generator.setInput !== "function"
        ) {
          showToast("Generator not ready");
          return;
        }

        state.generator.setInput(item.latex, true);

        const generatorMount = document.getElementById("latexGeneratorMount");
        const generatorCard =
          generatorMount?.closest(".latex-inline-card") || generatorMount;

        if (generatorCard) {
          generatorCard.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        showToast("Loaded into generator");
      }
    });
  }

  async function mountGenerator() {
    if (typeof window.createLatexGenerator !== "function") {
      console.error("createLatexGenerator is not available.");
      showToast("Generator failed to load");
      return;
    }

    try {
      state.generator = await window.createLatexGenerator({
        mountId: "latexGeneratorMount",
        templatePath: "partials/latex_generator_partial.html",
        ns: "c2-wave-model-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "v = f\\lambda = \\frac{\\lambda}{T}",
      });
    } catch (error) {
      console.error(error);
      showToast("Generator failed to load");
    }
  }

  function init() {
    renderCards();
    bindGridEvents();
    mountGenerator();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
