(() => {
  const equationsData = [
    {
      id: "c3-refraction-booklet",
      groupLabel: "Booklet",
      quantity: "Refraction relation",
      note: "Index, angle, and wave-speed forms",
      renderLatex:
        "\\frac{n_{1}}{n_{2}} = \\frac{\\sin \\theta_{2}}{\\sin \\theta_{1}} = \\frac{v_{2}}{v_{1}}",
      latex:
        "\\frac{n_{1}}{n_{2}} = \\frac{\\sin \\theta_{2}}{\\sin \\theta_{1}} = \\frac{v_{2}}{v_{1}}",
      text: "n₁/n₂ = sinθ₂/sinθ₁ = v₂/v₁",
    },
    {
      id: "c3-constructive-booklet",
      groupLabel: "Booklet",
      quantity: "Constructive interference",
      note: "Path-difference condition for maxima",
      renderLatex: "\\text{path difference} = n\\lambda",
      latex: "\\text{path difference} = n\\lambda",
      text: "path difference = nλ",
    },
    {
      id: "c3-destructive-booklet",
      groupLabel: "Booklet",
      quantity: "Destructive interference",
      note: "Path-difference condition for minima",
      renderLatex:
        "\\text{path difference} = \\left(n + \\frac{1}{2}\\right)\\lambda",
      latex:
        "\\text{path difference} = \\left(n + \\frac{1}{2}\\right)\\lambda",
      text: "path difference = (n + 1/2)λ",
    },
    {
      id: "c3-fringe-spacing-booklet",
      groupLabel: "Booklet",
      quantity: "Double-slit fringe spacing",
      note: "Young double-slit approximation",
      renderLatex: "s = \\frac{\\lambda D}{d}",
      latex: "s = \\frac{\\lambda D}{d}",
      text: "s = λD/d",
    },
    {
      id: "c3-diffraction-grating-added",
      groupLabel: "Booklet",
      quantity: "Diffraction grating",
      note: "Principal maxima for order n",
      renderLatex: "d \\sin \\theta = n\\lambda",
      latex: "d \\sin \\theta = n\\lambda",
      text: "d sinθ = nλ",
    },
    {
      id: "c3-wave-speed-added",
      groupLabel: "Added",
      quantity: "Wave speed",
      note: "Useful link between speed, frequency, wavelength, and period",
      renderLatex: "v = f\\lambda = \\frac{\\lambda}{T}",
      latex: "v = f\\lambda = \\frac{\\lambda}{T}",
      text: "v = fλ = λ/T",
    },
    {
      id: "c3-period-added",
      groupLabel: "Added",
      quantity: "Period and frequency",
      note: "Oscillation basics used across wave topics",
      renderLatex: "T = \\frac{1}{f}",
      latex: "T = \\frac{1}{f}",
      text: "T = 1/f",
    },
    {
      id: "c3-phase-difference-distance-added",
      groupLabel: "Added",
      quantity: "Phase difference from path difference",
      note: "Useful for interference work",
      renderLatex: "\\Delta \\phi = 2\\pi \\frac{\\Delta x}{\\lambda}",
      latex: "\\Delta \\phi = 2\\pi \\frac{\\Delta x}{\\lambda}",
      text: "Δφ = 2πΔx/λ",
    },
    {
      id: "c3-phase-difference-time-added",
      groupLabel: "Added",
      quantity: "Phase difference from time difference",
      note: "Time-based equivalent form",
      renderLatex: "\\Delta \\phi = 2\\pi \\frac{\\Delta t}{T}",
      latex: "\\Delta \\phi = 2\\pi \\frac{\\Delta t}{T}",
      text: "Δφ = 2πΔt/T",
    },
    {
      id: "c3-refraction-index-speed-added",
      groupLabel: "Added",
      quantity: "Refractive index and speed",
      note: "Common rearrangement for wave speed in a medium",
      renderLatex: "n = \\frac{c}{v}",
      latex: "n = \\frac{c}{v}",
      text: "n = c/v",
    },
    {
      id: "c3-refraction-wavelength-added",
      groupLabel: "Added",
      quantity: "Refraction wavelength relation",
      note: "Frequency stays constant across a boundary",
      renderLatex: "\\frac{n_{1}}{n_{2}} = \\frac{\\lambda_{2}}{\\lambda_{1}}",
      latex: "\\frac{n_{1}}{n_{2}} = \\frac{\\lambda_{2}}{\\lambda_{1}}",
      text: "n₁/n₂ = λ₂/λ₁",
    },
    {
      id: "c3-young-path-difference-added",
      groupLabel: "Added",
      quantity: "Young path-difference form",
      note: "Useful small-angle approximation",
      renderLatex: "\\delta = d \\sin \\theta \\approx d\\frac{x}{D}",
      latex: "\\delta = d \\sin \\theta \\approx d\\frac{x}{D}",
      text: "δ = d sinθ ≈ dx/D",
    },
    {
      id: "c3-grating-lines-added",
      groupLabel: "Added",
      quantity: "Grating spacing from line density",
      note: "Useful when gratings are quoted in lines per metre",
      renderLatex: "d = \\frac{1}{N}",
      latex: "d = \\frac{1}{N}",
      text: "d = 1/N",
    },
    {
      id: "c3-single-slit-minima-added",
      groupLabel: "Added",
      quantity: "Single-slit diffraction minima",
      note: "Dark fringes for a slit of width a",
      renderLatex: "a \\sin \\theta = n\\lambda",
      latex: "a \\sin \\theta = n\\lambda",
      text: "a sinθ = nλ",
    },
    {
      id: "c3-resolution-rayleigh-added",
      groupLabel: "Added",
      quantity: "Rayleigh criterion",
      note: "Minimum angular separation for a circular aperture",
      renderLatex: "\\theta \\approx 1.22\\frac{\\lambda}{D}",
      latex: "\\theta \\approx 1.22\\frac{\\lambda}{D}",
      text: "θ ≈ 1.22λ/D",
    },
    {
      id: "c3-single-slit-minimum-added",
      groupLabel: "Added",
      quantity: "Single-slit diffraction minimum",
      note: "First minimum for a slit of width b",
      renderLatex: "\\theta = \\frac{\\lambda}{b}",
      latex: "\\theta = \\frac{\\lambda}{b}",
      text: "θ = λ/b",
    },
    {
      id: "c3-malus-added",
      groupLabel: "Added",
      quantity: "Malus's law",
      note: "Intensity after a polariser-analyser pair",
      renderLatex: "I = I_{0}\\cos^{2}\\theta",
      latex: "I = I_{0}\\cos^{2}\\theta",
      text: "I = I₀ cos²θ",
    },
    {
      id: "c3-intensity-amplitude-added",
      groupLabel: "Added",
      quantity: "Intensity and amplitude",
      note: "Intensity is proportional to amplitude squared",
      renderLatex: "I \\propto A^{2}",
      latex: "I \\propto A^{2}",
      text: "I ∝ A²",
    },
    {
      id: "c3-inverse-square-added",
      groupLabel: "Added",
      quantity: "Inverse-square spreading",
      note: "Intensity from a point source",
      renderLatex: "I \\propto x^{-2}",
      latex: "I \\propto x^{-2}",
      text: "I ∝ x⁻²",
    },
    {
      id: "c3-beat-frequency-added",
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
      .replace(/\"/g, "&quot;")
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

        if (!state.generator || typeof state.generator.setInput !== "function") {
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
        ns: "c3-wave-phenomena-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "d \\sin \\theta = n\\lambda",
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
