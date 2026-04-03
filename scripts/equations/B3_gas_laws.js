(() => {
  const equationsData = [
    {
      id: "b3-pressure-booklet",
      groupLabel: "Booklet",
      quantity: "Pressure",
      note: "Force per unit area",
      renderLatex: "P = \\frac{F}{A}",
      latex: "P = \\frac{F}{A}",
      text: "P = F/A",
    },
    {
      id: "b3-amount-booklet",
      groupLabel: "Booklet",
      quantity: "Amount of substance",
      note: "Relates particles to moles",
      renderLatex: "n = \\frac{N}{N_{\\mathrm{A}}}",
      latex: "n = \\frac{N}{N_{\\mathrm{A}}}",
      text: "n = N/Nₐ",
    },
    {
      id: "b3-pv-over-t-booklet",
      groupLabel: "Booklet",
      quantity: "Combined proportional form",
      note: "For a fixed mass of ideal gas",
      renderLatex: "\\frac{PV}{T} = \\text{constant}",
      latex: "\\frac{PV}{T} = \\text{constant}",
      text: "PV/T = constant",
    },
    {
      id: "b3-ideal-gas-booklet",
      groupLabel: "Booklet",
      quantity: "Ideal gas equation",
      note: "Macroscopic and microscopic forms",
      renderLatex: "PV = nRT = Nk_{\\mathrm{B}}T",
      latex: "PV = nRT = Nk_{\\mathrm{B}}T",
      text: "PV = nRT = Nk_B T",
    },
    {
      id: "b3-kinetic-pressure-booklet",
      groupLabel: "Booklet",
      quantity: "Kinetic-theory pressure form",
      note: "Pressure related to density and molecular speed",
      renderLatex: "P = \\frac{1}{3} \\rho v^{2}",
      latex: "P = \\frac{1}{3} \\rho v^{2}",
      text: "P = (1/3)ρv²",
    },
    {
      id: "b3-internal-energy-booklet",
      groupLabel: "Booklet",
      quantity: "Internal energy of a monatomic ideal gas",
      note: "Booklet form",
      renderLatex: "U = \\frac{3}{2}nRT = \\frac{3}{2}Nk_{\\mathrm{B}}T",
      latex: "U = \\frac{3}{2}nRT = \\frac{3}{2}Nk_{\\mathrm{B}}T",
      text: "U = (3/2)nRT = (3/2)Nk_B T",
    },
    {
      id: "b3-mean-kinetic-energy-added",
      groupLabel: "Added",
      quantity: "Average translational kinetic energy",
      note: "Handy microscopic form from modelling a gas",
      renderLatex: "\\overline{E}_{\\mathrm{K}} = \\frac{3}{2}k_{\\mathrm{B}}T = \\frac{3}{2}\\frac{R}{N_{\\mathrm{A}}}T",
      latex: "\\overline{E}_{\\mathrm{K}} = \\frac{3}{2}k_{\\mathrm{B}}T = \\frac{3}{2}\\frac{R}{N_{\\mathrm{A}}}T",
      text: "Ēₖ = (3/2)kᴮT = (3/2)(R/Nₐ)T",
    },
    {
      id: "b3-boyle-added",
      groupLabel: "Added",
      quantity: "Boyle's law",
      note: "Constant temperature, fixed amount of gas",
      renderLatex: "P_{1}V_{1} = P_{2}V_{2}",
      latex: "P_{1}V_{1} = P_{2}V_{2}",
      text: "P₁V₁ = P₂V₂",
    },
    {
      id: "b3-charles-added",
      groupLabel: "Added",
      quantity: "Charles' law",
      note: "Constant pressure, fixed amount of gas",
      renderLatex: "\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}",
      latex: "\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}",
      text: "V₁/T₁ = V₂/T₂",
    },
    {
      id: "b3-gay-lussac-added",
      groupLabel: "Added",
      quantity: "Gay-Lussac's law",
      note: "Constant volume, fixed amount of gas",
      renderLatex: "\\frac{P_{1}}{T_{1}} = \\frac{P_{2}}{T_{2}}",
      latex: "\\frac{P_{1}}{T_{1}} = \\frac{P_{2}}{T_{2}}",
      text: "P₁/T₁ = P₂/T₂",
    },
    {
      id: "b3-avogadro-added",
      groupLabel: "Added",
      quantity: "Avogadro's law",
      note: "Constant temperature and pressure",
      renderLatex: "\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}",
      latex: "\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}",
      text: "V₁/n₁ = V₂/n₂",
    },
    {
      id: "b3-combined-added",
      groupLabel: "Added",
      quantity: "Combined gas law",
      note: "Fixed amount of gas between two states",
      renderLatex: "\\frac{P_{1}V_{1}}{T_{1}} = \\frac{P_{2}V_{2}}{T_{2}}",
      latex: "\\frac{P_{1}V_{1}}{T_{1}} = \\frac{P_{2}V_{2}}{T_{2}}",
      text: "P₁V₁/T₁ = P₂V₂/T₂",
    },
    {
      id: "b3-density-form-added",
      groupLabel: "Added",
      quantity: "Ideal gas density form",
      note: "Useful when mass density and molar mass are involved",
      renderLatex: "\\rho = \\frac{PM}{RT}",
      latex: "\\rho = \\frac{PM}{RT}",
      text: "ρ = PM/RT",
    },
    {
      id: "b3-particle-density-added",
      groupLabel: "Added",
      quantity: "Pressure from number density",
      note: "Microscopic ideal gas form",
      renderLatex: "P = n_{\\text{particles}}k_{\\mathrm{B}}T",
      latex: "P = n_{\\text{particles}}k_{\\mathrm{B}}T",
      text: "P = n_particles kᴮT",
    },
    {
      id: "b3-internal-energy-change-added",
      groupLabel: "Added",
      quantity: "Change in internal energy",
      note: "Monatomic ideal gas",
      renderLatex: "\\Delta U = \\frac{3}{2}nR\\Delta T",
      latex: "\\Delta U = \\frac{3}{2}nR\\Delta T",
      text: "ΔU = (3/2)nRΔT",
    },
    {
      id: "b3-rms-speed-added",
      groupLabel: "Added",
      quantity: "Root-mean-square speed",
      note: "Useful kinetic-theory helper",
      renderLatex: "v_{\\mathrm{rms}} = \\sqrt{\\frac{3RT}{M}}",
      latex: "v_{\\mathrm{rms}} = \\sqrt{\\frac{3RT}{M}}",
      text: "v_rms = √(3RT/M)",
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
        ns: "b3-gas-laws-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "\\frac{P_{1}V_{1}}{T_{1}} = \\frac{P_{2}V_{2}}{T_{2}}",
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
