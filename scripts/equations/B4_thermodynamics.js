(() => {
  const equationsData = [
    {
      id: "b4-first-law-booklet",
      groupLabel: "Booklet",
      quantity: "First law of thermodynamics",
      note: "Heat added equals change in internal energy plus work done by the gas",
      renderLatex: "Q = \\Delta U + W",
      latex: "Q = \\Delta U + W",
      text: "Q = ΔU + W",
    },
    {
      id: "b4-work-booklet",
      groupLabel: "Booklet",
      quantity: "Work done at constant pressure",
      note: "Pressure-volume work for an isobaric process",
      renderLatex: "W = P\\Delta V",
      latex: "W = P\\Delta V",
      text: "W = PΔV",
    },
    {
      id: "b4-internal-energy-change-booklet",
      groupLabel: "Booklet",
      quantity: "Change in internal energy of a monatomic ideal gas",
      note: "Macroscopic and microscopic forms",
      renderLatex: "\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}Nk_{\\mathrm{B}}\\Delta T",
      latex: "\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}Nk_{\\mathrm{B}}\\Delta T",
      text: "ΔU = (3/2)nRΔT = (3/2)Nk_BΔT",
    },
    {
      id: "b4-entropy-change-booklet",
      groupLabel: "Booklet",
      quantity: "Entropy change",
      note: "For a reversible transfer at absolute temperature T",
      renderLatex: "\\Delta S = \\frac{\\Delta Q}{T}",
      latex: "\\Delta S = \\frac{\\Delta Q}{T}",
      text: "ΔS = ΔQ/T",
    },
    {
      id: "b4-boltzmann-entropy-booklet",
      groupLabel: "Booklet",
      quantity: "Statistical definition of entropy",
      note: "Boltzmann relation",
      renderLatex: "S = k_{\\mathrm{B}} \\ln \\Omega",
      latex: "S = k_{\\mathrm{B}} \\ln \\Omega",
      text: "S = k_B lnΩ",
    },
    {
      id: "b4-adiabatic-booklet",
      groupLabel: "Booklet",
      quantity: "Adiabatic relation for a monatomic gas",
      note: "Booklet form with γ = 5/3",
      renderLatex: "PV^{5/3} = \\text{constant}",
      latex: "PV^{5/3} = \\text{constant}",
      text: "PV^(5/3) = constant",
    },
    {
      id: "b4-efficiency-booklet",
      groupLabel: "Booklet",
      quantity: "Thermal efficiency",
      note: "Useful work output divided by input energy",
      renderLatex: "\\eta = \\frac{\\text{useful work}}{\\text{input energy}}",
      latex: "\\eta = \\frac{\\text{useful work}}{\\text{input energy}}",
      text: "η = useful work/input energy",
    },
    {
      id: "b4-carnot-booklet",
      groupLabel: "Booklet",
      quantity: "Carnot efficiency",
      note: "Maximum possible efficiency between two reservoirs",
      renderLatex: "\\eta_{\\mathrm{Carnot}} = 1 - \\frac{T_{\\mathrm{c}}}{T_{\\mathrm{h}}}",
      latex: "\\eta_{\\mathrm{Carnot}} = 1 - \\frac{T_{\\mathrm{c}}}{T_{\\mathrm{h}}}",
      text: "η_Carnot = 1 - T_c/T_h",
    },
    {
      id: "b4-internal-energy-added",
      groupLabel: "Added",
      quantity: "Internal energy of a monatomic ideal gas",
      note: "Direct temperature form",
      renderLatex: "U = \\frac{3}{2}nRT = \\frac{3}{2}Nk_{\\mathrm{B}}T",
      latex: "U = \\frac{3}{2}nRT = \\frac{3}{2}Nk_{\\mathrm{B}}T",
      text: "U = (3/2)nRT = (3/2)Nk_B T",
    },
    {
      id: "b4-general-first-law-added",
      groupLabel: "Added",
      quantity: "Rearranged first law",
      note: "Useful when solving for internal-energy change",
      renderLatex: "\\Delta U = Q - W",
      latex: "\\Delta U = Q - W",
      text: "ΔU = Q - W",
    },
    {
      id: "b4-pv-integral-added",
      groupLabel: "Added",
      quantity: "General pressure-volume work",
      note: "Area under a p-V graph",
      renderLatex: "W = \\int P \\, dV",
      latex: "W = \\int P \\, dV",
      text: "W = ∫P dV",
    },
    {
      id: "b4-heat-capacity-added",
      groupLabel: "Added",
      quantity: "Heat capacity",
      note: "Thermal energy needed for a temperature rise",
      renderLatex: "Q = C\\Delta T",
      latex: "Q = C\\Delta T",
      text: "Q = CΔT",
    },
    {
      id: "b4-specific-heat-added",
      groupLabel: "Added",
      quantity: "Specific heat capacity",
      note: "Useful thermal-physics helper often paired with thermodynamics",
      renderLatex: "Q = mc\\Delta T",
      latex: "Q = mc\\Delta T",
      text: "Q = mcΔT",
    },
    {
      id: "b4-latent-heat-added",
      groupLabel: "Added",
      quantity: "Latent heat",
      note: "Energy for a change of state",
      renderLatex: "Q = mL",
      latex: "Q = mL",
      text: "Q = mL",
    },
    {
      id: "b4-molar-internal-added",
      groupLabel: "Added",
      quantity: "Internal-energy change using molar heat capacity",
      note: "Constant-volume form",
      renderLatex: "\\Delta U = nC_{V}\\Delta T",
      latex: "\\Delta U = nC_{V}\\Delta T",
      text: "ΔU = nC_VΔT",
    },
    {
      id: "b4-enthalpy-added",
      groupLabel: "Added",
      quantity: "Enthalpy change",
      note: "Constant-pressure heating form",
      renderLatex: "\\Delta H = nC_{P}\\Delta T",
      latex: "\\Delta H = nC_{P}\\Delta T",
      text: "ΔH = nC_PΔT",
    },
    {
      id: "b4-cp-cv-added",
      groupLabel: "Added",
      quantity: "Mayer's relation",
      note: "For an ideal gas",
      renderLatex: "C_{P} - C_{V} = R",
      latex: "C_{P} - C_{V} = R",
      text: "C_P - C_V = R",
    },
    {
      id: "b4-gamma-added",
      groupLabel: "Added",
      quantity: "Heat-capacity ratio",
      note: "Defines the adiabatic index",
      renderLatex: "\\gamma = \\frac{C_{P}}{C_{V}}",
      latex: "\\gamma = \\frac{C_{P}}{C_{V}}",
      text: "γ = C_P/C_V",
    },
    {
      id: "b4-general-adiabatic-added",
      groupLabel: "Added",
      quantity: "General adiabatic relation",
      note: "Applies for an ideal gas with adiabatic index γ",
      renderLatex: "PV^{\\gamma} = \\text{constant}",
      latex: "PV^{\\gamma} = \\text{constant}",
      text: "PV^γ = constant",
    },
    {
      id: "b4-tv-added",
      groupLabel: "Added",
      quantity: "Adiabatic temperature-volume relation",
      note: "Another handy form of the adiabatic law",
      renderLatex: "TV^{\\gamma - 1} = \\text{constant}",
      latex: "TV^{\\gamma - 1} = \\text{constant}",
      text: "TV^(γ - 1) = constant",
    },
    {
      id: "b4-tp-added",
      groupLabel: "Added",
      quantity: "Adiabatic temperature-pressure relation",
      note: "Useful when volume is not given",
      renderLatex: "T^{\\gamma}P^{1 - \\gamma} = \\text{constant}",
      latex: "T^{\\gamma}P^{1 - \\gamma} = \\text{constant}",
      text: "T^γ P^(1 - γ) = constant",
    },
    {
      id: "b4-isothermal-work-added",
      groupLabel: "Added",
      quantity: "Work done in an isothermal expansion",
      note: "Ideal gas at constant temperature",
      renderLatex: "W = nRT \\ln\\!\\left(\\frac{V_{2}}{V_{1}}\\right)",
      latex: "W = nRT \\ln\\!\\left(\\frac{V_{2}}{V_{1}}\\right)",
      text: "W = nRT ln(V₂/V₁)",
    },
    {
      id: "b4-entropy-boltzmann-change-added",
      groupLabel: "Added",
      quantity: "Entropy change from microstates",
      note: "Difference form from Boltzmann's relation",
      renderLatex: "\\Delta S = k_{\\mathrm{B}} \\ln\\!\\left(\\frac{\\Omega_{2}}{\\Omega_{1}}\\right)",
      latex: "\\Delta S = k_{\\mathrm{B}} \\ln\\!\\left(\\frac{\\Omega_{2}}{\\Omega_{1}}\\right)",
      text: "ΔS = k_B ln(Ω₂/Ω₁)",
    },
    {
      id: "b4-efficiency-q-added",
      groupLabel: "Added",
      quantity: "Engine efficiency from heat flows",
      note: "Hot reservoir input and waste heat output",
      renderLatex: "\\eta = 1 - \\frac{Q_{\\mathrm{out}}}{Q_{\\mathrm{in}}}",
      latex: "\\eta = 1 - \\frac{Q_{\\mathrm{out}}}{Q_{\\mathrm{in}}}",
      text: "η = 1 - Q_out/Q_in",
    },
    {
      id: "b4-cop-fridge-added",
      groupLabel: "Added",
      quantity: "Coefficient of performance of a refrigerator",
      note: "Not always on the sheet, but very useful",
      renderLatex: "\\text{COP}_{\\mathrm{fridge}} = \\frac{Q_{\\mathrm{cold}}}{W}",
      latex: "\\text{COP}_{\\mathrm{fridge}} = \\frac{Q_{\\mathrm{cold}}}{W}",
      text: "COP_fridge = Q_cold/W",
    },
    {
      id: "b4-cop-heat-pump-added",
      groupLabel: "Added",
      quantity: "Coefficient of performance of a heat pump",
      note: "Heating-output form",
      renderLatex: "\\text{COP}_{\\mathrm{heat\\ pump}} = \\frac{Q_{\\mathrm{hot}}}{W}",
      latex: "\\text{COP}_{\\mathrm{heat\\ pump}} = \\frac{Q_{\\mathrm{hot}}}{W}",
      text: "COP_heat pump = Q_hot/W",
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
        ns: "b4-thermodynamics-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "Q = \\Delta U + W",
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
