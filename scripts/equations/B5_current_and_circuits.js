(() => {
  const equationsData = [
    {
      id: "b5-current-booklet",
      groupLabel: "Booklet",
      quantity: "Electric current",
      note: "Rate of flow of charge",
      renderLatex: "I = \\frac{\\Delta q}{\\Delta t}",
      latex: "I = \\frac{\\Delta q}{\\Delta t}",
      text: "I = Δq/Δt",
    },
    {
      id: "b5-potential-difference-booklet",
      groupLabel: "Booklet",
      quantity: "Potential difference",
      note: "Work done per unit charge",
      renderLatex: "V = \\frac{W}{q}",
      latex: "V = \\frac{W}{q}",
      text: "V = W/q",
    },
    {
      id: "b5-resistance-booklet",
      groupLabel: "Booklet",
      quantity: "Resistance",
      note: "Potential difference divided by current",
      renderLatex: "R = \\frac{V}{I}",
      latex: "R = \\frac{V}{I}",
      text: "R = V/I",
    },
    {
      id: "b5-resistivity-booklet",
      groupLabel: "Booklet",
      quantity: "Resistivity",
      note: "Material property from resistance, area, and length",
      renderLatex: "\\rho = \\frac{RA}{L}",
      latex: "\\rho = \\frac{RA}{L}",
      text: "ρ = RA/L",
    },
    {
      id: "b5-power-booklet",
      groupLabel: "Booklet",
      quantity: "Electrical power",
      note: "Equivalent power forms",
      renderLatex: "P = IV = I^{2}R = \\frac{V^{2}}{R}",
      latex: "P = IV = I^{2}R = \\frac{V^{2}}{R}",
      text: "P = IV = I²R = V²/R",
    },
    {
      id: "b5-series-current-booklet",
      groupLabel: "Booklet",
      quantity: "Series circuits, current",
      note: "Current is the same in each component",
      renderLatex: "I = I_{1} = I_{2} = \\cdots",
      latex: "I = I_{1} = I_{2} = \\cdots",
      text: "I = I₁ = I₂ = ...",
    },
    {
      id: "b5-series-voltage-booklet",
      groupLabel: "Booklet",
      quantity: "Series circuits, potential difference",
      note: "Voltages add in series",
      renderLatex: "V = V_{1} + V_{2} + \\cdots",
      latex: "V = V_{1} + V_{2} + \\cdots",
      text: "V = V₁ + V₂ + ...",
    },
    {
      id: "b5-series-resistance-booklet",
      groupLabel: "Booklet",
      quantity: "Series circuits, total resistance",
      note: "Resistances add directly in series",
      renderLatex: "R_{\\mathrm{s}} = R_{1} + R_{2} + \\cdots",
      latex: "R_{\\mathrm{s}} = R_{1} + R_{2} + \\cdots",
      text: "R_s = R₁ + R₂ + ...",
    },
    {
      id: "b5-parallel-current-booklet",
      groupLabel: "Booklet",
      quantity: "Parallel circuits, current",
      note: "Currents add at a junction",
      renderLatex: "I = I_{1} + I_{2} + \\cdots",
      latex: "I = I_{1} + I_{2} + \\cdots",
      text: "I = I₁ + I₂ + ...",
    },
    {
      id: "b5-parallel-voltage-booklet",
      groupLabel: "Booklet",
      quantity: "Parallel circuits, potential difference",
      note: "Potential difference is the same across branches",
      renderLatex: "V = V_{1} = V_{2} = \\cdots",
      latex: "V = V_{1} = V_{2} = \\cdots",
      text: "V = V₁ = V₂ = ...",
    },
    {
      id: "b5-parallel-resistance-booklet",
      groupLabel: "Booklet",
      quantity: "Parallel circuits, total resistance",
      note: "Reciprocal form for equivalent resistance",
      renderLatex: "\\frac{1}{R_{\\mathrm{p}}} = \\frac{1}{R_{1}} + \\frac{1}{R_{2}} + \\cdots",
      latex: "\\frac{1}{R_{\\mathrm{p}}} = \\frac{1}{R_{1}} + \\frac{1}{R_{2}} + \\cdots",
      text: "1/R_p = 1/R₁ + 1/R₂ + ...",
    },
    {
      id: "b5-emf-booklet",
      groupLabel: "Booklet",
      quantity: "Cell with internal resistance",
      note: "Electromotive force for a circuit containing external and internal resistance",
      renderLatex: "\\varepsilon = I(R + r)",
      latex: "\\varepsilon = I(R + r)",
      text: "ε = I(R + r)",
    },

    {
      id: "b5-charge-added",
      groupLabel: "Added",
      quantity: "Charge transferred",
      note: "For constant current over time",
      renderLatex: "q = It",
      latex: "q = It",
      text: "q = It",
    },
    {
      id: "b5-ohms-law-added",
      groupLabel: "Added",
      quantity: "Ohm's law",
      note: "Useful rearrangement of resistance",
      renderLatex: "V = IR",
      latex: "V = IR",
      text: "V = IR",
    },
    {
      id: "b5-electrical-energy-added",
      groupLabel: "Added",
      quantity: "Electrical energy transferred",
      note: "Common energy forms in circuits",
      renderLatex: "W = Vq = Pt",
      latex: "W = Vq = Pt",
      text: "W = Vq = Pt",
    },
    {
      id: "b5-heating-energy-added",
      groupLabel: "Added",
      quantity: "Heating effect of current",
      note: "Equivalent energy forms over a time interval",
      renderLatex: "E = IVt = I^{2}Rt = \\frac{V^{2}}{R}t",
      latex: "E = IVt = I^{2}Rt = \\frac{V^{2}}{R}t",
      text: "E = IVt = I²Rt = (V²/R)t",
    },
    {
      id: "b5-kirchhoff-junction-added",
      groupLabel: "Added",
      quantity: "Kirchhoff's first law",
      note: "Current conservation at a junction",
      renderLatex: "\\sum I = 0",
      latex: "\\sum I = 0",
      text: "ΣI = 0",
    },
    {
      id: "b5-kirchhoff-loop-added",
      groupLabel: "Added",
      quantity: "Kirchhoff's second law",
      note: "Potential differences around a closed loop",
      renderLatex: "\\sum V = 0",
      latex: "\\sum V = 0",
      text: "ΣV = 0",
    },
    {
      id: "b5-resistance-form-added",
      groupLabel: "Added",
      quantity: "Resistance from resistivity",
      note: "Useful rearrangement for a uniform conductor",
      renderLatex: "R = \\rho\\frac{L}{A}",
      latex: "R = \\rho\\frac{L}{A}",
      text: "R = ρL/A",
    },
    {
      id: "b5-conductivity-added",
      groupLabel: "Added",
      quantity: "Conductivity",
      note: "Inverse of resistivity",
      renderLatex: "\\sigma = \\frac{1}{\\rho}",
      latex: "\\sigma = \\frac{1}{\\rho}",
      text: "σ = 1/ρ",
    },
    {
      id: "b5-current-density-added",
      groupLabel: "Added",
      quantity: "Current density",
      note: "Current per cross-sectional area",
      renderLatex: "J = \\frac{I}{A}",
      latex: "J = \\frac{I}{A}",
      text: "J = I/A",
    },
    {
      id: "b5-drift-current-added",
      groupLabel: "Added",
      quantity: "Current in a conductor",
      note: "Microscopic current form",
      renderLatex: "I = nAv_{\\mathrm{d}}q",
      latex: "I = nAv_{\\mathrm{d}}q",
      text: "I = nAv_dq",
    },
    {
      id: "b5-drift-current-density-added",
      groupLabel: "Added",
      quantity: "Current density from drift speed",
      note: "Microscopic current-density form",
      renderLatex: "J = nqv_{\\mathrm{d}}",
      latex: "J = nqv_{\\mathrm{d}}",
      text: "J = nqv_d",
    },
    {
      id: "b5-terminal-pd-added",
      groupLabel: "Added",
      quantity: "Terminal potential difference",
      note: "Cell delivering current to a circuit",
      renderLatex: "V = \\varepsilon - Ir",
      latex: "V = \\varepsilon - Ir",
      text: "V = ε - Ir",
    },
    {
      id: "b5-emf-rearranged-added",
      groupLabel: "Added",
      quantity: "Electromotive force rearranged",
      note: "Useful form for a discharging cell",
      renderLatex: "\\varepsilon = V + Ir",
      latex: "\\varepsilon = V + Ir",
      text: "ε = V + Ir",
    },
    {
      id: "b5-cells-series-added",
      groupLabel: "Added",
      quantity: "Cells in series, total emf",
      note: "For cells connected in series",
      renderLatex: "\\varepsilon_{\\mathrm{total}} = \\varepsilon_{1} + \\varepsilon_{2} + \\cdots",
      latex: "\\varepsilon_{\\mathrm{total}} = \\varepsilon_{1} + \\varepsilon_{2} + \\cdots",
      text: "ε_total = ε₁ + ε₂ + ...",
    },
    {
      id: "b5-internal-series-added",
      groupLabel: "Added",
      quantity: "Cells in series, total internal resistance",
      note: "Internal resistances add in series",
      renderLatex: "r_{\\mathrm{total}} = r_{1} + r_{2} + \\cdots",
      latex: "r_{\\mathrm{total}} = r_{1} + r_{2} + \\cdots",
      text: "r_total = r₁ + r₂ + ...",
    },
    {
      id: "b5-irms-added",
      groupLabel: "Added",
      quantity: "RMS current",
      note: "Sinusoidal alternating current",
      renderLatex: "I_{\\mathrm{rms}} = \\frac{I_{0}}{\\sqrt{2}}",
      latex: "I_{\\mathrm{rms}} = \\frac{I_{0}}{\\sqrt{2}}",
      text: "I_rms = I₀/√2",
    },
    {
      id: "b5-vrms-added",
      groupLabel: "Added",
      quantity: "RMS potential difference",
      note: "Sinusoidal alternating voltage",
      renderLatex: "V_{\\mathrm{rms}} = \\frac{V_{0}}{\\sqrt{2}}",
      latex: "V_{\\mathrm{rms}} = \\frac{V_{0}}{\\sqrt{2}}",
      text: "V_rms = V₀/√2",
    },
    {
      id: "b5-average-power-added",
      groupLabel: "Added",
      quantity: "Average AC power",
      note: "For a resistive load",
      renderLatex: "\\overline{P} = V_{\\mathrm{rms}}I_{\\mathrm{rms}} = I_{\\mathrm{rms}}^{2}R = \\frac{V_{\\mathrm{rms}}^{2}}{R} = \\frac{1}{2}I_{0}V_{0}",
      latex: "\\overline{P} = V_{\\mathrm{rms}}I_{\\mathrm{rms}} = I_{\\mathrm{rms}}^{2}R = \\frac{V_{\\mathrm{rms}}^{2}}{R} = \\frac{1}{2}I_{0}V_{0}",
      text: "P̄ = V_rms I_rms = I_rms²R = V_rms²/R = (1/2)I₀V₀",
    },
    {
      id: "b5-capacitance-added",
      groupLabel: "Added",
      quantity: "Capacitance",
      note: "Charge stored per unit potential difference",
      renderLatex: "C = \\frac{q}{V}",
      latex: "C = \\frac{q}{V}",
      text: "C = q/V",
    },
    {
      id: "b5-capacitors-parallel-added",
      groupLabel: "Added",
      quantity: "Capacitors in parallel",
      note: "Capacitances add directly in parallel",
      renderLatex: "C_{\\mathrm{parallel}} = C_{1} + C_{2} + \\cdots",
      latex: "C_{\\mathrm{parallel}} = C_{1} + C_{2} + \\cdots",
      text: "C_parallel = C₁ + C₂ + ...",
    },
    {
      id: "b5-capacitors-series-added",
      groupLabel: "Added",
      quantity: "Capacitors in series",
      note: "Reciprocal form for equivalent capacitance",
      renderLatex: "\\frac{1}{C_{\\mathrm{series}}} = \\frac{1}{C_{1}} + \\frac{1}{C_{2}} + \\cdots",
      latex: "\\frac{1}{C_{\\mathrm{series}}} = \\frac{1}{C_{1}} + \\frac{1}{C_{2}} + \\cdots",
      text: "1/C_series = 1/C₁ + 1/C₂ + ...",
    },
    {
      id: "b5-parallel-plate-added",
      groupLabel: "Added",
      quantity: "Parallel-plate capacitor",
      note: "Capacitance of a parallel-plate capacitor",
      renderLatex: "C = \\varepsilon\\frac{A}{d}",
      latex: "C = \\varepsilon\\frac{A}{d}",
      text: "C = εA/d",
    },
    {
      id: "b5-capacitor-energy-added",
      groupLabel: "Added",
      quantity: "Energy stored in a capacitor",
      note: "Equivalent capacitor-energy forms",
      renderLatex: "E = \\frac{1}{2}CV^{2} = \\frac{1}{2}QV = \\frac{Q^{2}}{2C}",
      latex: "E = \\frac{1}{2}CV^{2} = \\frac{1}{2}QV = \\frac{Q^{2}}{2C}",
      text: "E = (1/2)CV² = (1/2)QV = Q²/(2C)",
    },
    {
      id: "b5-time-constant-added",
      groupLabel: "Added",
      quantity: "RC time constant",
      note: "Characteristic time for charging and discharging",
      renderLatex: "\\tau = RC",
      latex: "\\tau = RC",
      text: "τ = RC",
    },
    {
      id: "b5-rc-charge-added",
      groupLabel: "Added",
      quantity: "Capacitor charge in discharge",
      note: "Exponential discharge of charge",
      renderLatex: "q = q_{0}e^{-t/\\tau}",
      latex: "q = q_{0}e^{-t/\\tau}",
      text: "q = q₀e^(-t/τ)",
    },
    {
      id: "b5-rc-current-added",
      groupLabel: "Added",
      quantity: "Current in discharge",
      note: "Exponential decay of discharge current",
      renderLatex: "I = I_{0}e^{-t/\\tau}",
      latex: "I = I_{0}e^{-t/\\tau}",
      text: "I = I₀e^(-t/τ)",
    },
    {
      id: "b5-rc-voltage-added",
      groupLabel: "Added",
      quantity: "Capacitor voltage in discharge",
      note: "Exponential decay of capacitor voltage",
      renderLatex: "V = V_{0}e^{-t/\\tau}",
      latex: "V = V_{0}e^{-t/\\tau}",
      text: "V = V₀e^(-t/τ)",
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
        ns: "b5-current-and-circuits-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "P = IV = I^{2}R = \\frac{V^{2}}{R}",
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
