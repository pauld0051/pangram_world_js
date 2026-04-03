(() => {
  const equationsData = [
  {
    "id": "e5-parsec-booklet",
    "groupLabel": "Booklet",
    "quantity": "Parsec and parallax",
    "note": "Distance in parsecs from parallax in arc-seconds",
    "renderLatex": "d(\\mathrm{parsec}) = \\frac{1}{p(\\mathrm{arc\\text{-}second})}",
    "latex": "d(\\mathrm{parsec}) = \\frac{1}{p(\\mathrm{arc\\text{-}second})}",
    "text": "d(parsec) = 1/p(arc-second)"
  },
  {
    "id": "e5-stefan-boltzmann-added",
    "groupLabel": "Added",
    "quantity": "Stellar luminosity",
    "note": "Stefan-Boltzmann law",
    "renderLatex": "L = \\sigma A T^{4}",
    "latex": "L = \\sigma A T^{4}",
    "text": "L = σAT⁴"
  },
  {
    "id": "e5-sphere-area-added",
    "groupLabel": "Added",
    "quantity": "Surface area of a star",
    "note": "Area of a spherical star",
    "renderLatex": "A = 4\\pi R^{2}",
    "latex": "A = 4\\pi R^{2}",
    "text": "A = 4πR²"
  },
  {
    "id": "e5-luminosity-radius-added",
    "groupLabel": "Added",
    "quantity": "Luminosity in radius form",
    "note": "Stefan-Boltzmann law for a spherical star",
    "renderLatex": "L = 4\\pi R^{2}\\sigma T^{4}",
    "latex": "L = 4\\pi R^{2}\\sigma T^{4}",
    "text": "L = 4πR²σT⁴"
  },
  {
    "id": "e5-apparent-brightness-added",
    "groupLabel": "Added",
    "quantity": "Apparent brightness",
    "note": "Inverse-square relation for brightness",
    "renderLatex": "b = \\frac{L}{4\\pi d^{2}}",
    "latex": "b = \\frac{L}{4\\pi d^{2}}",
    "text": "b = L/(4πd²)"
  },
  {
    "id": "e5-wien-booklet-old-added",
    "groupLabel": "Added",
    "quantity": "Wien's displacement law",
    "note": "Peak wavelength and surface temperature",
    "renderLatex": "\\lambda_{\\max}T = 2.9\\times10^{-3}\\ \\mathrm{m\\,K}",
    "latex": "\\lambda_{\\max}T = 2.9\\times10^{-3}\\ \\mathrm{m\\,K}",
    "text": "λ_max T = 2.9×10^-3 mK"
  },
  {
    "id": "e5-mass-luminosity-added",
    "groupLabel": "Added",
    "quantity": "Mass-luminosity relation",
    "note": "Approximate main-sequence relation",
    "renderLatex": "L \\propto M^{3.5}",
    "latex": "L \\propto M^{3.5}",
    "text": "L ∝ M^3.5"
  },
  {
    "id": "e5-luminosity-relative-added",
    "groupLabel": "Added",
    "quantity": "Relative luminosity",
    "note": "Useful comparison with the Sun",
    "renderLatex": "\\frac{L}{L_{\\odot}} = \\left(\\frac{R}{R_{\\odot}}\\right)^{2}\\left(\\frac{T}{T_{\\odot}}\\right)^{4}",
    "latex": "\\frac{L}{L_{\\odot}} = \\left(\\frac{R}{R_{\\odot}}\\right)^{2}\\left(\\frac{T}{T_{\\odot}}\\right)^{4}",
    "text": "L/L☉ = (R/R☉)²(T/T☉)^4"
  },
  {
    "id": "e5-redshift-approx-added",
    "groupLabel": "Added",
    "quantity": "Redshift",
    "note": "Small-speed approximation",
    "renderLatex": "z = \\frac{\\Delta\\lambda}{\\lambda_{0}} \\approx \\frac{v}{c}",
    "latex": "z = \\frac{\\Delta\\lambda}{\\lambda_{0}} \\approx \\frac{v}{c}",
    "text": "z = Δλ/λ₀ ≈ v/c"
  },
  {
    "id": "e5-scale-factor-redshift-added",
    "groupLabel": "Added",
    "quantity": "Redshift and scale factor",
    "note": "Cosmological redshift relation",
    "renderLatex": "z = \\frac{R}{R_{0}} - 1",
    "latex": "z = \\frac{R}{R_{0}} - 1",
    "text": "z = R/R₀ - 1"
  },
  {
    "id": "e5-hubble-law-added",
    "groupLabel": "Added",
    "quantity": "Hubble's law",
    "note": "Recession speed and distance",
    "renderLatex": "v = H_{0}d",
    "latex": "v = H_{0}d",
    "text": "v = H₀d"
  },
  {
    "id": "e5-age-universe-added",
    "groupLabel": "Added",
    "quantity": "Age of the universe estimate",
    "note": "Approximation from the Hubble constant",
    "renderLatex": "T \\approx \\frac{1}{H_{0}}",
    "latex": "T \\approx \\frac{1}{H_{0}}",
    "text": "T ≈ 1/H₀"
  },
  {
    "id": "e5-escape-speed-added",
    "groupLabel": "Added",
    "quantity": "Escape speed",
    "note": "Useful stellar-gravity helper",
    "renderLatex": "v = \\sqrt{\\frac{4\\pi G\\rho}{3}}\\,r",
    "latex": "v = \\sqrt{\\frac{4\\pi G\\rho}{3}}\\,r",
    "text": "v = √(4πGρ/3) r"
  },
  {
    "id": "e5-critical-density-added",
    "groupLabel": "Added",
    "quantity": "Critical density",
    "note": "Density for a flat universe",
    "renderLatex": "\\rho_{\\mathrm{c}} = \\frac{3H^{2}}{8\\pi G}",
    "latex": "\\rho_{\\mathrm{c}} = \\frac{3H^{2}}{8\\pi G}",
    "text": "ρ_c = 3H²/(8πG)"
  },
  {
    "id": "e5-fusion-mass-energy-added",
    "groupLabel": "Added",
    "quantity": "Fusion energy from mass defect",
    "note": "Energy released in fusion",
    "renderLatex": "\\Delta E = \\Delta mc^{2}",
    "latex": "\\Delta E = \\Delta mc^{2}",
    "text": "ΔE = Δmc²"
  },
  {
    "id": "e5-radiation-flux-added",
    "groupLabel": "Added",
    "quantity": "Radiative flux",
    "note": "Power per unit area from a black-body surface",
    "renderLatex": "j^{\\star} = \\sigma T^{4}",
    "latex": "j^{\\star} = \\sigma T^{4}",
    "text": "j* = σT⁴"
  },
  {
    "id": "e5-distance-modulus-added",
    "groupLabel": "Added",
    "quantity": "Distance modulus",
    "note": "Useful astronomy helper",
    "renderLatex": "m - M = 5\\log_{10}\\left(\\frac{d}{10}\\right)",
    "latex": "m - M = 5\\log_{10}\\left(\\frac{d}{10}\\right)",
    "text": "m - M = 5log10(d/10)"
  }
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
        ns: "e5-fusion-and-stars-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "d(\\mathrm{parsec}) = \\frac{1}{p(\\mathrm{arc\\text{-}second})}",
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
