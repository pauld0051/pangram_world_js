(() => {
  const equationsData = [
  {
    "id": "d4-flux-booklet",
    "groupLabel": "Booklet",
    "quantity": "Magnetic flux",
    "note": "Flux through an area in a magnetic field",
    "renderLatex": "\\Phi = BA\\cos\\theta",
    "latex": "\\Phi = BA\\cos\\theta",
    "text": "Φ = BA cosθ"
  },
  {
    "id": "d4-faraday-booklet",
    "groupLabel": "Booklet",
    "quantity": "Faraday's law",
    "note": "Induced emf from changing flux",
    "renderLatex": "\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t}",
    "latex": "\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t}",
    "text": "ε = -NΔΦ/Δt"
  },
  {
    "id": "d4-motional-emf-booklet",
    "groupLabel": "Booklet",
    "quantity": "Motional emf",
    "note": "Conductor moving across a magnetic field",
    "renderLatex": "\\varepsilon = Bv\\ell",
    "latex": "\\varepsilon = Bv\\ell",
    "text": "ε = Bvℓ"
  },
  {
    "id": "d4-motional-emf-coil-booklet",
    "groupLabel": "Booklet",
    "quantity": "Motional emf with N turns",
    "note": "Coil with multiple turns moving in a magnetic field",
    "renderLatex": "\\varepsilon = Bv\\ell N",
    "latex": "\\varepsilon = Bv\\ell N",
    "text": "ε = BvℓN"
  },
  {
    "id": "d4-flux-linkage-added",
    "groupLabel": "Added",
    "quantity": "Flux linkage",
    "note": "Magnetic flux linked by a coil",
    "renderLatex": "N\\Phi",
    "latex": "N\\Phi",
    "text": "NΦ"
  },
  {
    "id": "d4-faraday-flux-linkage-added",
    "groupLabel": "Added",
    "quantity": "Faraday's law, flux-linkage form",
    "note": "Induced emf from changing flux linkage",
    "renderLatex": "\\varepsilon = -\\frac{\\Delta(N\\Phi)}{\\Delta t}",
    "latex": "\\varepsilon = -\\frac{\\Delta(N\\Phi)}{\\Delta t}",
    "text": "ε = -Δ(NΦ)/Δt"
  },
  {
    "id": "d4-average-emf-added",
    "groupLabel": "Added",
    "quantity": "Average induced emf",
    "note": "Average emf during a flux change",
    "renderLatex": "\\varepsilon_{\\mathrm{avg}} = -N\\frac{\\Delta\\Phi}{\\Delta t}",
    "latex": "\\varepsilon_{\\mathrm{avg}} = -N\\frac{\\Delta\\Phi}{\\Delta t}",
    "text": "ε_avg = -NΔΦ/Δt"
  },
  {
    "id": "d4-rotating-coil-flux-added",
    "groupLabel": "Added",
    "quantity": "Flux in a rotating coil",
    "note": "Magnetic flux through a rotating coil",
    "renderLatex": "\\Phi = BA\\cos(\\omega t)",
    "latex": "\\Phi = BA\\cos(\\omega t)",
    "text": "Φ = BA cos(ωt)"
  },
  {
    "id": "d4-generator-emf-added",
    "groupLabel": "Added",
    "quantity": "Rotating-coil generator emf",
    "note": "Instantaneous emf from a rotating coil",
    "renderLatex": "\\varepsilon = NBA\\omega\\sin(\\omega t)",
    "latex": "\\varepsilon = NBA\\omega\\sin(\\omega t)",
    "text": "ε = NBAω sin(ωt)"
  },
  {
    "id": "d4-generator-max-emf-added",
    "groupLabel": "Added",
    "quantity": "Maximum generator emf",
    "note": "Peak emf from a rotating coil",
    "renderLatex": "\\varepsilon_{\\max} = NBA\\omega",
    "latex": "\\varepsilon_{\\max} = NBA\\omega",
    "text": "ε_max = NBAω"
  },
  {
    "id": "d4-angular-frequency-added",
    "groupLabel": "Added",
    "quantity": "Angular frequency",
    "note": "Useful rotation helper",
    "renderLatex": "\\omega = 2\\pi f",
    "latex": "\\omega = 2\\pi f",
    "text": "ω = 2πf"
  },
  {
    "id": "d4-transformer-ratio-voltage-added",
    "groupLabel": "Added",
    "quantity": "Transformer ratio",
    "note": "Voltage and turns ratio for an ideal transformer",
    "renderLatex": "\\frac{V_{\\mathrm{p}}}{V_{\\mathrm{s}}} = \\frac{N_{\\mathrm{p}}}{N_{\\mathrm{s}}}",
    "latex": "\\frac{V_{\\mathrm{p}}}{V_{\\mathrm{s}}} = \\frac{N_{\\mathrm{p}}}{N_{\\mathrm{s}}}",
    "text": "V_p/V_s = N_p/N_s"
  },
  {
    "id": "d4-transformer-ratio-current-added",
    "groupLabel": "Added",
    "quantity": "Transformer current ratio",
    "note": "Current ratio for an ideal transformer",
    "renderLatex": "\\frac{I_{\\mathrm{p}}}{I_{\\mathrm{s}}} = \\frac{N_{\\mathrm{s}}}{N_{\\mathrm{p}}}",
    "latex": "\\frac{I_{\\mathrm{p}}}{I_{\\mathrm{s}}} = \\frac{N_{\\mathrm{s}}}{N_{\\mathrm{p}}}",
    "text": "I_p/I_s = N_s/N_p"
  },
  {
    "id": "d4-transformer-power-added",
    "groupLabel": "Added",
    "quantity": "Ideal transformer power",
    "note": "Input power equals output power",
    "renderLatex": "V_{\\mathrm{p}}I_{\\mathrm{p}} = V_{\\mathrm{s}}I_{\\mathrm{s}}",
    "latex": "V_{\\mathrm{p}}I_{\\mathrm{p}} = V_{\\mathrm{s}}I_{\\mathrm{s}}",
    "text": "V_pI_p = V_sI_s"
  },
  {
    "id": "d4-transformer-efficiency-added",
    "groupLabel": "Added",
    "quantity": "Transformer efficiency",
    "note": "Useful non-ideal transformer relation",
    "renderLatex": "\\eta = \\frac{V_{\\mathrm{s}}I_{\\mathrm{s}}}{V_{\\mathrm{p}}I_{\\mathrm{p}}}",
    "latex": "\\eta = \\frac{V_{\\mathrm{s}}I_{\\mathrm{s}}}{V_{\\mathrm{p}}I_{\\mathrm{p}}}",
    "text": "η = V_sI_s/(V_pI_p)"
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
        ns: "d4-induction-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "Φ = BA\\cos\\theta",
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
