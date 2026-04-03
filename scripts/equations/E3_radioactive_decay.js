(() => {
  const equationsData = [
  {
    "id": "e3-mass-energy-booklet",
    "groupLabel": "Booklet",
    "quantity": "Mass-energy equivalence",
    "note": "Energy associated with mass",
    "renderLatex": "E = mc^{2}",
    "latex": "E = mc^{2}",
    "text": "E = mc²"
  },
  {
    "id": "e3-number-undecayed-booklet",
    "groupLabel": "Booklet",
    "quantity": "Number of undecayed nuclei",
    "note": "Exponential decay law",
    "renderLatex": "N = N_{0}e^{-\\lambda t}",
    "latex": "N = N_{0}e^{-\\lambda t}",
    "text": "N = N₀e^(-λt)"
  },
  {
    "id": "e3-activity-booklet",
    "groupLabel": "Booklet",
    "quantity": "Activity",
    "note": "Activity in terms of decay constant and number of nuclei",
    "renderLatex": "A = \\lambda N = \\lambda N_{0}e^{-\\lambda t}",
    "latex": "A = \\lambda N = \\lambda N_{0}e^{-\\lambda t}",
    "text": "A = λN = λN₀e^(-λt)"
  },
  {
    "id": "e3-half-life-booklet",
    "groupLabel": "Booklet",
    "quantity": "Half-life",
    "note": "Relation between half-life and decay constant",
    "renderLatex": "T_{1/2} = \\frac{\\ln 2}{\\lambda}",
    "latex": "T_{1/2} = \\frac{\\ln 2}{\\lambda}",
    "text": "T_1/2 = ln2/λ"
  },
  {
    "id": "e3-decay-constant-added",
    "groupLabel": "Added",
    "quantity": "Decay constant",
    "note": "Decay constant written using half-life",
    "renderLatex": "\\lambda = \\frac{\\ln 2}{T_{1/2}}",
    "latex": "\\lambda = \\frac{\\ln 2}{T_{1/2}}",
    "text": "λ = ln2/T_1/2"
  },
  {
    "id": "e3-number-half-life-form-added",
    "groupLabel": "Added",
    "quantity": "Decay law, half-life form",
    "note": "Number of undecayed nuclei using half-life directly",
    "renderLatex": "N = N_{0}\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}",
    "latex": "N = N_{0}\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}",
    "text": "N = N₀(1/2)^(t/T_1/2)"
  },
  {
    "id": "e3-activity-half-life-form-added",
    "groupLabel": "Added",
    "quantity": "Activity, half-life form",
    "note": "Activity using half-life directly",
    "renderLatex": "A = A_{0}\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}",
    "latex": "A = A_{0}\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}",
    "text": "A = A₀(1/2)^(t/T_1/2)"
  },
  {
    "id": "e3-initial-activity-added",
    "groupLabel": "Added",
    "quantity": "Initial activity",
    "note": "Activity at time zero",
    "renderLatex": "A_{0} = \\lambda N_{0}",
    "latex": "A_{0} = \\lambda N_{0}",
    "text": "A₀ = λN₀"
  },
  {
    "id": "e3-activity-exponential-added",
    "groupLabel": "Added",
    "quantity": "Activity, exponential form",
    "note": "Activity written from the initial activity",
    "renderLatex": "A = A_{0}e^{-\\lambda t}",
    "latex": "A = A_{0}e^{-\\lambda t}",
    "text": "A = A₀e^(-λt)"
  },
  {
    "id": "e3-count-rate-added",
    "groupLabel": "Added",
    "quantity": "Count rate",
    "note": "Measured counts per unit time",
    "renderLatex": "R = \\frac{\\Delta N}{\\Delta t}",
    "latex": "R = \\frac{\\Delta N}{\\Delta t}",
    "text": "R = ΔN/Δt"
  },
  {
    "id": "e3-net-count-rate-added",
    "groupLabel": "Added",
    "quantity": "Net count rate",
    "note": "Measured count rate corrected for background",
    "renderLatex": "R_{\\mathrm{net}} = R_{\\mathrm{measured}} - R_{\\mathrm{background}}",
    "latex": "R_{\\mathrm{net}} = R_{\\mathrm{measured}} - R_{\\mathrm{background}}",
    "text": "R_net = R_measured - R_background"
  },
  {
    "id": "e3-small-interval-decays-added",
    "groupLabel": "Added",
    "quantity": "Decays in a short time interval",
    "note": "Approximate number of decays in a short interval",
    "renderLatex": "\\Delta N \\approx A\\Delta t",
    "latex": "\\Delta N \\approx A\\Delta t",
    "text": "ΔN ≈ AΔt"
  },
  {
    "id": "e3-mass-defect-added",
    "groupLabel": "Added",
    "quantity": "Energy from mass defect",
    "note": "Energy released from a change in mass",
    "renderLatex": "\\Delta E = \\Delta mc^{2}",
    "latex": "\\Delta E = \\Delta mc^{2}",
    "text": "ΔE = Δmc²"
  },
  {
    "id": "e3-binding-energy-added",
    "groupLabel": "Added",
    "quantity": "Binding energy from mass defect",
    "note": "Nuclear binding energy",
    "renderLatex": "E_{\\mathrm{b}} = \\Delta mc^{2}",
    "latex": "E_{\\mathrm{b}} = \\Delta mc^{2}",
    "text": "E_b = Δmc²"
  },
  {
    "id": "e3-binding-energy-per-nucleon-added",
    "groupLabel": "Added",
    "quantity": "Binding energy per nucleon",
    "note": "Average binding energy per nucleon",
    "renderLatex": "\\frac{E_{\\mathrm{b}}}{A}",
    "latex": "\\frac{E_{\\mathrm{b}}}{A}",
    "text": "E_b/A"
  },
  {
    "id": "e3-atomic-mass-unit-conversion-added",
    "groupLabel": "Added",
    "quantity": "Atomic mass unit energy conversion",
    "note": "Useful mass-defect conversion",
    "renderLatex": "1\\ \\mathrm{u} = 931.5\\ \\mathrm{MeV}/c^{2}",
    "latex": "1\\ \\mathrm{u} = 931.5\\ \\mathrm{MeV}/c^{2}",
    "text": "1 u = 931.5 MeV/c²"
  },
  {
    "id": "e3-activity-unit-added",
    "groupLabel": "Added",
    "quantity": "Activity unit",
    "note": "One becquerel is one decay per second",
    "renderLatex": "1\\ \\mathrm{Bq} = 1\\ \\mathrm{s}^{-1}",
    "latex": "1\\ \\mathrm{Bq} = 1\\ \\mathrm{s}^{-1}",
    "text": "1 Bq = 1 s^-1"
  },
  {
    "id": "e3-absorbed-dose-added",
    "groupLabel": "Added",
    "quantity": "Absorbed dose",
    "note": "Energy absorbed per unit mass",
    "renderLatex": "D = \\frac{E}{m}",
    "latex": "D = \\frac{E}{m}",
    "text": "D = E/m"
  },
  {
    "id": "e3-dose-equivalent-added",
    "groupLabel": "Added",
    "quantity": "Equivalent dose",
    "note": "Absorbed dose times radiation weighting factor",
    "renderLatex": "H = D w_{\\mathrm{R}}",
    "latex": "H = D w_{\\mathrm{R}}",
    "text": "H = Dw_R"
  },
  {
    "id": "e3-effective-dose-added",
    "groupLabel": "Added",
    "quantity": "Effective dose",
    "note": "Equivalent dose times tissue weighting factor",
    "renderLatex": "E_{\\mathrm{eff}} = H w_{\\mathrm{T}}",
    "latex": "E_{\\mathrm{eff}} = H w_{\\mathrm{T}}",
    "text": "E_eff = Hw_T"
  },
  {
    "id": "e3-nuclear-radius-added",
    "groupLabel": "Added",
    "quantity": "Nuclear radius",
    "note": "Older-course helper often used with nuclear ideas",
    "renderLatex": "R = R_{0}A^{1/3}",
    "latex": "R = R_{0}A^{1/3}",
    "text": "R = R₀A^(1/3)"
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
        ns: "e3-radioactive-decay-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "A = \\lambda N = \\lambda N_{0}e^{-\\lambda t}",
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
