(() => {
  const equationsData = [
    {
      id: "b2-emissivity-booklet",
      groupLabel: "Booklet",
      quantity: "Emissivity",
      note: "Power radiated per unit area relative to a black body",
      renderLatex: "\\varepsilon = \\frac{\\text{power radiated per unit area}}{\\sigma T^{4}}",
      latex: "\\varepsilon = \\frac{\\text{power radiated per unit area}}{\\sigma T^{4}}",
      text: "emissivity = (power radiated per unit area)/(σT⁴)",
    },
    {
      id: "b2-albedo-booklet",
      groupLabel: "Booklet",
      quantity: "Albedo",
      note: "Fraction of incident power that is scattered",
      renderLatex: "\\text{albedo} = \\frac{\\text{total scattered power}}{\\text{total incident power}}",
      latex: "\\text{albedo} = \\frac{\\text{total scattered power}}{\\text{total incident power}}",
      text: "albedo = total scattered power/total incident power",
    },
    {
      id: "b2-radiated-flux-added",
      groupLabel: "Added",
      quantity: "Radiated power per unit area",
      note: "Stefan-Boltzmann form with emissivity",
      renderLatex: "j^{\\star} = \\varepsilon \\sigma T^{4}",
      latex: "j^{\\star} = \\varepsilon \\sigma T^{4}",
      text: "j* = εσT⁴",
    },
    {
      id: "b2-total-radiated-power-added",
      groupLabel: "Added",
      quantity: "Total thermal power radiated",
      note: "Emission from a surface of area A",
      renderLatex: "P = \\varepsilon \\sigma A T^{4}",
      latex: "P = \\varepsilon \\sigma A T^{4}",
      text: "P = εσAT⁴",
    },
    {
      id: "b2-incident-solar-power-added",
      groupLabel: "Added",
      quantity: "Incident solar power on a planet",
      note: "Uses the cross-sectional area of the planet",
      renderLatex: "P_{\\text{in}} = S\\pi R^{2}",
      latex: "P_{\\text{in}} = S\\pi R^{2}",
      text: "P_in = SπR²",
    },
    {
      id: "b2-absorbed-solar-power-added",
      groupLabel: "Added",
      quantity: "Absorbed solar power",
      note: "Includes the effect of albedo",
      renderLatex: "P_{\\text{abs}} = (1 - \\alpha)S\\pi R^{2}",
      latex: "P_{\\text{abs}} = (1 - \\alpha)S\\pi R^{2}",
      text: "P_abs = (1 - α)SπR²",
    },
    {
      id: "b2-average-absorbed-flux-added",
      groupLabel: "Added",
      quantity: "Average absorbed solar flux",
      note: "Globally averaged over the whole planet",
      renderLatex: "\\frac{(1 - \\alpha)S}{4}",
      latex: "\\frac{(1 - \\alpha)S}{4}",
      text: "(1 - α)S/4",
    },
    {
      id: "b2-equilibrium-balance-added",
      groupLabel: "Added",
      quantity: "Planetary energy balance",
      note: "Absorbed solar power equals emitted thermal power",
      renderLatex: "(1 - \\alpha)S\\pi R^{2} = 4\\pi R^{2}\\varepsilon\\sigma T^{4}",
      latex: "(1 - \\alpha)S\\pi R^{2} = 4\\pi R^{2}\\varepsilon\\sigma T^{4}",
      text: "(1 - α)SπR² = 4πR²εσT⁴",
    },
    {
      id: "b2-equilibrium-flux-added",
      groupLabel: "Added",
      quantity: "Equilibrium flux form",
      note: "Energy balance per unit area",
      renderLatex: "\\frac{(1 - \\alpha)S}{4} = \\varepsilon\\sigma T^{4}",
      latex: "\\frac{(1 - \\alpha)S}{4} = \\varepsilon\\sigma T^{4}",
      text: "(1 - α)S/4 = εσT⁴",
    },
    {
      id: "b2-equilibrium-temperature-added",
      groupLabel: "Added",
      quantity: "Equilibrium temperature",
      note: "Useful classroom helper",
      renderLatex: "T = \\left(\\frac{(1 - \\alpha)S}{4\\varepsilon\\sigma}\\right)^{1/4}",
      latex: "T = \\left(\\frac{(1 - \\alpha)S}{4\\varepsilon\\sigma}\\right)^{1/4}",
      text: "T = [((1 - α)S)/(4εσ)]^(1/4)",
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
        ns: "b2-greenhouse-effect-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "\\frac{(1 - \\alpha)S}{4} = \\varepsilon\\sigma T^{4}",
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
