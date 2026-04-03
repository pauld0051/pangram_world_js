(() => {
  const equationsData = [
    {
      id: "b1-density-booklet",
      groupLabel: "Booklet",
      quantity: "Density",
      note: "Mass per unit volume",
      renderLatex: "\\rho = \\frac{m}{V}",
      latex: "\\rho = \\frac{m}{V}",
      text: "ρ = m/V",
    },
    {
      id: "b1-mean-kinetic-energy-booklet",
      groupLabel: "Booklet",
      quantity: "Mean translational kinetic energy",
      note: "Average kinetic energy of a particle",
      renderLatex: "\\overline{E}_{k} = \\frac{3}{2}k_{B}T",
      latex: "\\overline{E}_{k} = \\frac{3}{2}k_{B}T",
      text: "Ē_k = 3/2 k_B T",
    },
    {
      id: "b1-specific-heat-booklet",
      groupLabel: "Booklet",
      quantity: "Thermal energy change",
      note: "Specific heat capacity equation",
      renderLatex: "Q = mc\\Delta T",
      latex: "Q = mc\\Delta T",
      text: "Q = mcΔT",
    },
    {
      id: "b1-latent-heat-booklet",
      groupLabel: "Booklet",
      quantity: "Latent heat",
      note: "Phase change energy",
      renderLatex: "Q = mL",
      latex: "Q = mL",
      text: "Q = mL",
    },
    {
      id: "b1-conduction-booklet",
      groupLabel: "Booklet",
      quantity: "Thermal conduction rate",
      note: "Rate of heat transfer by conduction",
      renderLatex:
        "\\frac{\\Delta Q}{\\Delta t} = kA\\frac{\\Delta T}{\\Delta x}",
      latex: "\\frac{\\Delta Q}{\\Delta t} = kA\\frac{\\Delta T}{\\Delta x}",
      text: "ΔQ/Δt = kAΔT/Δx",
    },
    {
      id: "b1-stefan-boltzmann-booklet",
      groupLabel: "Booklet",
      quantity: "Luminosity of a black body",
      note: "Stefan-Boltzmann law in booklet form",
      renderLatex: "L = \\sigma AT^{4}",
      latex: "L = \\sigma AT^{4}",
      text: "L = σAT⁴",
    },
    {
      id: "b1-brightness-booklet",
      groupLabel: "Booklet",
      quantity: "Brightness",
      note: "Intensity at distance d from a source",
      renderLatex: "b = \\frac{L}{4\\pi d^{2}}",
      latex: "b = \\frac{L}{4\\pi d^{2}}",
      text: "b = L/4πd²",
    },
    {
      id: "b1-wien-booklet",
      groupLabel: "Booklet",
      quantity: "Wien's displacement law",
      note: "Peak wavelength and temperature",
      renderLatex: "\\lambda_{\\max}T = 2.9 \\times 10^{-3}\\ \\mathrm{m\\,K}",
      latex: "\\lambda_{\\max}T = 2.9 \\times 10^{-3}\\ \\mathrm{m\\,K}",
      text: "λ_max T = 2.9 × 10⁻³ m K",
    },
    {
      id: "b1-first-law-added",
      groupLabel: "Added",
      quantity: "First law of thermodynamics",
      note: "Using the sign convention from the older sheet",
      renderLatex: "Q = \\Delta U + W",
      latex: "Q = \\Delta U + W",
      text: "Q = ΔU + W",
    },
    {
      id: "b1-ideal-gas-law-added",
      groupLabel: "Added",
      quantity: "Ideal gas law",
      note: "Useful classroom helper",
      renderLatex: "pV = nRT",
      latex: "pV = nRT",
      text: "pV = nRT",
    },
    {
      id: "b1-particle-ideal-gas-added",
      groupLabel: "Added",
      quantity: "Ideal gas law in particle form",
      note: "Useful classroom helper",
      renderLatex: "pV = Nk_{B}T",
      latex: "pV = Nk_{B}T",
      text: "pV = Nk_B T",
    },
    {
      id: "b1-internal-energy-added",
      groupLabel: "Added",
      quantity: "Internal energy of a monatomic ideal gas",
      note: "Useful classroom helper",
      renderLatex: "U = \\frac{3}{2}nRT",
      latex: "U = \\frac{3}{2}nRT",
      text: "U = 3/2 nRT",
    },
    {
      id: "b1-internal-energy-change-added",
      groupLabel: "Added",
      quantity: "Change in internal energy of a monatomic ideal gas",
      note: "Useful classroom helper",
      renderLatex: "\\Delta U = \\frac{3}{2}nR\\Delta T",
      latex: "\\Delta U = \\frac{3}{2}nR\\Delta T",
      text: "ΔU = 3/2 nRΔT",
    },
    {
      id: "b1-entropy-change-added",
      groupLabel: "Added",
      quantity: "Entropy change",
      note: "For a reversible transfer at temperature T",
      renderLatex: "\\Delta S = \\frac{\\Delta Q}{T}",
      latex: "\\Delta S = \\frac{\\Delta Q}{T}",
      text: "ΔS = ΔQ/T",
    },
    {
      id: "b1-adiabatic-monatomic-added",
      groupLabel: "Added",
      quantity: "Adiabatic process for a monatomic gas",
      note: "Useful classroom helper",
      renderLatex: "pV^{5/3} = \\text{constant}",
      latex: "pV^{5/3} = \\text{constant}",
      text: "pV^(5/3) = constant",
    },
    {
      id: "b1-constant-pressure-work-added",
      groupLabel: "Added",
      quantity: "Work done at constant pressure",
      note: "Useful classroom helper",
      renderLatex: "W = p\\Delta V",
      latex: "W = p\\Delta V",
      text: "W = pΔV",
    },
    {
      id: "b1-general-work-added",
      groupLabel: "Added",
      quantity: "General work done by a gas",
      note: "Useful classroom helper",
      renderLatex: "W = \\int p\\,dV",
      latex: "W = \\int p\\,dV",
      text: "W = ∫p dV",
    },
    {
      id: "b1-efficiency-added",
      groupLabel: "Added",
      quantity: "Efficiency",
      note: "General energy efficiency",
      renderLatex:
        "\\eta = \\frac{\\text{useful work done}}{\\text{energy input}}",
      latex: "\\eta = \\frac{\\text{useful work done}}{\\text{energy input}}",
      text: "η = useful work done/energy input",
    },
    {
      id: "b1-carnot-efficiency-added",
      groupLabel: "Added",
      quantity: "Carnot efficiency",
      note: "Maximum theoretical heat engine efficiency",
      renderLatex:
        "\\eta_{\\text{Carnot}} = 1 - \\frac{T_{\\text{cold}}}{T_{\\text{hot}}}",
      latex:
        "\\eta_{\\text{Carnot}} = 1 - \\frac{T_{\\text{cold}}}{T_{\\text{hot}}}",
      text: "η_Carnot = 1 - T_cold/T_hot",
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
        ns: "b1-thermal-energy-transfers-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "Q = mc\\Delta T",
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
