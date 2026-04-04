(() => {
  const equationsData = [
  {
    "id": "f4-ohm",
    "groupLabel": "Added",
    "quantity": "Ohm's law",
    "note": "Current through a resistor",
    "renderLatex": "V = IR",
    "latex": "V = IR",
    "text": "V = IR"
  },
  {
    "id": "f4-power",
    "groupLabel": "Added",
    "quantity": "Electrical power",
    "note": "Common power relations",
    "renderLatex": "P = IV = I^{2}R = \\frac{V^{2}}{R}",
    "latex": "P = IV = I^{2}R = \\frac{V^{2}}{R}",
    "text": "P = IV = I²R = V²/R"
  },
  {
    "id": "f4-potential-divider",
    "groupLabel": "Added",
    "quantity": "Potential divider",
    "note": "Output voltage across one resistor",
    "renderLatex": "V_{\\mathrm{out}} = V_{\\mathrm{in}}\\frac{R_{2}}{R_{1}+R_{2}}",
    "latex": "V_{\\mathrm{out}} = V_{\\mathrm{in}}\\frac{R_{2}}{R_{1}+R_{2}}",
    "text": "V_out = V_in R₂/(R₁ + R₂)"
  },
  {
    "id": "f4-ldr-divider",
    "groupLabel": "Added",
    "quantity": "LDR divider output",
    "note": "Output taken across the LDR",
    "renderLatex": "V_{\\mathrm{out}} = V_{\\mathrm{in}}\\frac{R_{\\mathrm{LDR}}}{R + R_{\\mathrm{LDR}}}",
    "latex": "V_{\\mathrm{out}} = V_{\\mathrm{in}}\\frac{R_{\\mathrm{LDR}}}{R + R_{\\mathrm{LDR}}}",
    "text": "V_out = V_in R_LDR/(R + R_LDR)"
  },
  {
    "id": "f4-thermistor-divider",
    "groupLabel": "Added",
    "quantity": "Thermistor divider output",
    "note": "Output taken across the thermistor",
    "renderLatex": "V_{\\mathrm{out}} = V_{\\mathrm{in}}\\frac{R_{\\mathrm{T}}}{R + R_{\\mathrm{T}}}",
    "latex": "V_{\\mathrm{out}} = V_{\\mathrm{in}}\\frac{R_{\\mathrm{T}}}{R + R_{\\mathrm{T}}}",
    "text": "V_out = V_in R_T/(R + R_T)"
  },
  {
    "id": "f4-led-resistor",
    "groupLabel": "Added",
    "quantity": "LED series resistor",
    "note": "Current-limiting resistor",
    "renderLatex": "R = \\frac{V_{\\mathrm{s}} - V_{\\mathrm{LED}}}{I}",
    "latex": "R = \\frac{V_{\\mathrm{s}} - V_{\\mathrm{LED}}}{I}",
    "text": "R = (V_s - V_LED)/I"
  },
  {
    "id": "f4-diode-shockley",
    "groupLabel": "Added",
    "quantity": "Diode equation",
    "note": "Shockley form",
    "renderLatex": "I = I_{\\mathrm{s}}\\!\\left(e^{V/(nV_{\\mathrm{T}})} - 1\\right)",
    "latex": "I = I_{\\mathrm{s}}\\!\\left(e^{V/(nV_{\\mathrm{T}})} - 1\\right)",
    "text": "I = I_s(e^(V/nV_T) - 1)"
  },
  {
    "id": "f4-thermistor-beta",
    "groupLabel": "Added",
    "quantity": "Thermistor resistance",
    "note": "Beta-model form",
    "renderLatex": "R = R_{0}e^{\\beta(1/T - 1/T_{0})}",
    "latex": "R = R_{0}e^{\\beta(1/T - 1/T_{0})}",
    "text": "R = R₀e^β(1/T - 1/T₀)"
  },
  {
    "id": "f4-transistor-gain",
    "groupLabel": "Added",
    "quantity": "Transistor current gain",
    "note": "BJT relation",
    "renderLatex": "I_{\\mathrm{C}} = \\beta I_{\\mathrm{B}}",
    "latex": "I_{\\mathrm{C}} = \\beta I_{\\mathrm{B}}",
    "text": "I_C = βI_B"
  },
  {
    "id": "f4-transistor-emitter",
    "groupLabel": "Added",
    "quantity": "Transistor current sum",
    "note": "Emitter current relation",
    "renderLatex": "I_{\\mathrm{E}} = I_{\\mathrm{B}} + I_{\\mathrm{C}}",
    "latex": "I_{\\mathrm{E}} = I_{\\mathrm{B}} + I_{\\mathrm{C}}",
    "text": "I_E = I_B + I_C"
  },
  {
    "id": "f4-transistor-output",
    "groupLabel": "Added",
    "quantity": "Common-emitter output",
    "note": "Collector resistor form",
    "renderLatex": "V_{\\mathrm{out}} = V_{\\mathrm{CC}} - I_{\\mathrm{C}}R_{\\mathrm{C}}",
    "latex": "V_{\\mathrm{out}} = V_{\\mathrm{CC}} - I_{\\mathrm{C}}R_{\\mathrm{C}}",
    "text": "V_out = V_CC - I_CR_C"
  },
  {
    "id": "f4-capacitor-charge",
    "groupLabel": "Added",
    "quantity": "Capacitor charge",
    "note": "Charge stored on a capacitor",
    "renderLatex": "Q = CV",
    "latex": "Q = CV",
    "text": "Q = CV"
    },
  {
  "id": "f4-v-rms",
  "groupLabel": "Added",
  "quantity": "RMS voltage",
  "note": "Root-mean-square voltage for a sinusoidal AC supply",
  "renderLatex": "V_{\\mathrm{rms}} = \\frac{V_{0}}{\\sqrt{2}}",
  "latex": "V_{\\mathrm{rms}} = \\frac{V_{0}}{\\sqrt{2}}",
  "text": "V_rms = V₀/√2"
},
{
  "id": "f4-i-rms",
  "groupLabel": "Added",
  "quantity": "RMS current",
  "note": "Root-mean-square current for a sinusoidal AC supply",
  "renderLatex": "I_{\\mathrm{rms}} = \\frac{I_{0}}{\\sqrt{2}}",
  "latex": "I_{\\mathrm{rms}} = \\frac{I_{0}}{\\sqrt{2}}",
  "text": "I_rms = I₀/√2"
},
{
  "id": "f4-average-ac-power",
  "groupLabel": "Added",
  "quantity": "Average AC power",
  "note": "Average power in an AC circuit",
  "renderLatex": "P = V_{\\mathrm{rms}} I_{\\mathrm{rms}}",
  "latex": "P = V_{\\mathrm{rms}} I_{\\mathrm{rms}}",
  "text": "P = V_rms I_rms"
},
{
  "id": "f4-impedance",
  "groupLabel": "Added",
  "quantity": "Impedance",
  "note": "AC equivalent of resistance",
  "renderLatex": "Z = \\frac{V_{\\mathrm{rms}}}{I_{\\mathrm{rms}}}",
  "latex": "Z = \\frac{V_{\\mathrm{rms}}}{I_{\\mathrm{rms}}}",
  "text": "Z = V_rms/I_rms"
},
{
  "id": "f4-inductive-reactance",
  "groupLabel": "Added",
  "quantity": "Inductive reactance",
  "note": "Reactance of an inductor in AC",
  "renderLatex": "X_{L} = \\omega L = 2\\pi fL",
  "latex": "X_{L} = \\omega L = 2\\pi fL",
  "text": "X_L = ωL = 2πfL"
},
{
  "id": "f4-capacitive-reactance",
  "groupLabel": "Added",
  "quantity": "Capacitive reactance",
  "note": "Reactance of a capacitor in AC",
  "renderLatex": "X_{C} = \\frac{1}{\\omega C} = \\frac{1}{2\\pi fC}",
  "latex": "X_{C} = \\frac{1}{\\omega C} = \\frac{1}{2\\pi fC}",
  "text": "X_C = 1/ωC = 1/(2πfC)"
},
{
  "id": "f4-impedance-rlc",
  "groupLabel": "Added",
  "quantity": "Impedance in an RLC circuit",
  "note": "Magnitude of impedance",
  "renderLatex": "Z = \\sqrt{R^{2} + (X_{L} - X_{C})^{2}}",
  "latex": "Z = \\sqrt{R^{2} + (X_{L} - X_{C})^{2}}",
  "text": "Z = √(R² + (X_L - X_C)²)"
},
{
  "id": "f4-resonance",
  "groupLabel": "Added",
  "quantity": "Resonant frequency",
  "note": "Frequency at which inductive and capacitive reactances are equal",
  "renderLatex": "f_{0} = \\frac{1}{2\\pi\\sqrt{LC}}",
  "latex": "f_{0} = \\frac{1}{2\\pi\\sqrt{LC}}",
  "text": "f₀ = 1/(2π√LC)"
},
  {
    "id": "f4-logic-not",
    "groupLabel": "Added",
    "quantity": "NOT gate",
    "note": "Boolean algebra form",
    "renderLatex": "Y = \\overline{A}",
    "latex": "Y = \\overline{A}",
    "text": "Y = NOT A"
  },
  {
    "id": "f4-logic-and",
    "groupLabel": "Added",
    "quantity": "AND gate",
    "note": "Boolean algebra form",
    "renderLatex": "Y = A\\cdot B",
    "latex": "Y = A\\cdot B",
    "text": "Y = A AND B"
  },
  {
    "id": "f4-logic-or",
    "groupLabel": "Added",
    "quantity": "OR gate",
    "note": "Boolean algebra form",
    "renderLatex": "Y = A + B",
    "latex": "Y = A + B",
    "text": "Y = A OR B"
  },
  {
    "id": "f4-logic-xor",
    "groupLabel": "Added",
    "quantity": "XOR gate",
    "note": "Boolean algebra form",
    "renderLatex": "Y = \\overline{A}B + A\\overline{B}",
    "latex": "Y = \\overline{A}B + A\\overline{B}",
    "text": "Y = A XOR B"
  },
  {
    "id": "f4-logic-nand",
    "groupLabel": "Added",
    "quantity": "NAND gate",
    "note": "Boolean algebra form",
    "renderLatex": "Y = \\overline{A\\cdot B}",
    "latex": "Y = \\overline{A\\cdot B}",
    "text": "Y = A NAND B"
  },
  {
    "id": "f4-logic-nor",
    "groupLabel": "Added",
    "quantity": "NOR gate",
    "note": "Boolean algebra form",
    "renderLatex": "Y = \\overline{A + B}",
    "latex": "Y = \\overline{A + B}",
    "text": "Y = A NOR B"
  },
  {
    "id": "f4-logic-xnor",
    "groupLabel": "Added",
    "quantity": "XNOR gate",
    "note": "Boolean algebra form",
    "renderLatex": "Y = AB + \\overline{A}\\,\\overline{B}",
    "latex": "Y = AB + \\overline{A}\\,\\overline{B}",
    "text": "Y = A XNOR B"
  },
  {
    "id": "f4-resistivity",
    "groupLabel": "Added",
    "quantity": "Resistivity",
    "note": "Useful semiconductor link",
    "renderLatex": "R = \\rho \\frac{L}{A}",
    "latex": "R = \\rho \\frac{L}{A}",
    "text": "R = ρL/A"
  },
  {
    "id": "f4-conductivity",
    "groupLabel": "Added",
    "quantity": "Conductivity",
    "note": "Reciprocal of resistivity",
    "renderLatex": "\\sigma = \\frac{1}{\\rho}",
    "latex": "\\sigma = \\frac{1}{\\rho}",
    "text": "σ = 1/ρ"
  }
];

  const state = { generator: null };

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
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
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
              <div class="d-inline-flex align-items-center justify-content-center px-3 py-2" data-render-target="${item.id}" style="background: transparent; min-width: 0; min-height: 0;"></div>
            </div>
            <div class="copy-actions mt-auto pt-1">
              <button type="button" class="copy-chip" data-copy-type="latex" data-id="${item.id}">Copy LaTeX</button>
              <button type="button" class="copy-chip" data-copy-type="social" data-id="${item.id}">Copy social text</button>
              <button type="button" class="copy-chip" data-load-generator="${item.id}">Load into generator</button>
            </div>
          </div>
        </article>
      </div>`;
  }

  function renderCards() {
    const grid = document.getElementById("equationsGrid");
    if (!grid) return;
    grid.innerHTML = equationsData.map(cardMarkup).join("");
    equationsData.forEach((item) => {
      const target = grid.querySelector(`[data-render-target="${item.id}"]`);
      if (target) renderLatex(target, item.renderLatex, true);
    });
  }

  async function handleCopyAction(copyType, itemId) {
    const item = equationsData.find((entry) => entry.id === itemId);
    if (!item) return;
    if (copyType === "latex") return await copyText(item.latex, "LaTeX copied");
    if (copyType === "social") return await copyText(item.text, "Social text copied");
  }

  function bindGridEvents() {
    const grid = document.getElementById("equationsGrid");
    if (!grid) return;
    grid.addEventListener("click", async (event) => {
      const copyButton = event.target.closest("[data-copy-type]");
      if (copyButton) {
        await handleCopyAction(copyButton.dataset.copyType, copyButton.dataset.id);
        return;
      }
      const loadButton = event.target.closest("[data-load-generator]");
      if (loadButton) {
        const item = equationsData.find((entry) => entry.id === loadButton.dataset.loadGenerator);
        if (!item) return;
        if (!state.generator || typeof state.generator.setInput !== "function") {
          showToast("Generator not ready");
          return;
        }
        state.generator.setInput(item.latex, true);
        const generatorMount = document.getElementById("latexGeneratorMount");
        const generatorCard = generatorMount?.closest(".latex-inline-card") || generatorMount;
        if (generatorCard) generatorCard.scrollIntoView({ behavior: "smooth", block: "start" });
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
        ns: "f4-electronics-and-semiconductors-generator",
        title: "Quick LaTeX generator",
        subtitle: "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "V_{\\mathrm{out}} = V_{\\mathrm{in}}\\frac{R_{2}}{R_{1}+R_{2}}",
      });
    } catch (error) {
      console.error(error);
      showToast("Generator failed to load");
    }
  }

  function init() { renderCards(); bindGridEvents(); mountGenerator(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
