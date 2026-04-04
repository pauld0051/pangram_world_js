(() => {
  const equationsData = [
  {
    "id": "f2-dose",
    "groupLabel": "Added",
    "quantity": "Absorbed dose",
    "note": "Energy absorbed per unit mass",
    "renderLatex": "D = \\frac{E}{m}",
    "latex": "D = \\frac{E}{m}",
    "text": "D = E/m"
  },
  {
    "id": "f2-equivalent-dose",
    "groupLabel": "Added",
    "quantity": "Equivalent dose",
    "note": "Absorbed dose times radiation weighting factor",
    "renderLatex": "H = D\\,w_{\\mathrm{R}}",
    "latex": "H = D\\,w_{\\mathrm{R}}",
    "text": "H = Dw_R"
  },
  {
    "id": "f2-effective-dose",
    "groupLabel": "Added",
    "quantity": "Effective dose",
    "note": "Equivalent dose times tissue weighting factor",
    "renderLatex": "E_{\\mathrm{eff}} = H\\,w_{\\mathrm{T}}",
    "latex": "E_{\\mathrm{eff}} = H\\,w_{\\mathrm{T}}",
    "text": "E_eff = Hw_T"
  },
  {
    "id": "f2-effective-dose-sum",
    "groupLabel": "Added",
    "quantity": "Effective dose, summed tissues",
    "note": "General form",
    "renderLatex": "E_{\\mathrm{eff}} = \\sum w_{\\mathrm{T}}H_{\\mathrm{T}}",
    "latex": "E_{\\mathrm{eff}} = \\sum w_{\\mathrm{T}}H_{\\mathrm{T}}",
    "text": "E_eff = Σw_TH_T"
  },
  {
    "id": "f2-attenuation",
    "groupLabel": "Added",
    "quantity": "Exponential attenuation",
    "note": "Beam intensity through matter",
    "renderLatex": "I = I_{0}e^{-\\mu x}",
    "latex": "I = I_{0}e^{-\\mu x}",
    "text": "I = I₀e^(-μx)"
  },
  {
    "id": "f2-transmission",
    "groupLabel": "Added",
    "quantity": "Transmission fraction",
    "note": "Fraction transmitted",
    "renderLatex": "\\frac{I}{I_{0}} = e^{-\\mu x}",
    "latex": "\\frac{I}{I_{0}} = e^{-\\mu x}",
    "text": "I/I₀ = e^(-μx)"
  },
  {
    "id": "f2-half-value",
    "groupLabel": "Added",
    "quantity": "Half-value thickness",
    "note": "Relation to attenuation coefficient",
    "renderLatex": "\\mu x_{1/2} = \\ln 2",
    "latex": "\\mu x_{1/2} = \\ln 2",
    "text": "μx_1/2 = ln2"
  },
  {
    "id": "f2-mu",
    "groupLabel": "Added",
    "quantity": "Attenuation coefficient",
    "note": "Written using half-value thickness",
    "renderLatex": "\\mu = \\frac{\\ln 2}{x_{1/2}}",
    "latex": "\\mu = \\frac{\\ln 2}{x_{1/2}}",
    "text": "μ = ln2/x_1/2"
  },
  {
    "id": "f2-intensity-level",
    "groupLabel": "Added",
    "quantity": "Intensity level",
    "note": "Level in decibels",
    "renderLatex": "L_{I} = 10\\log_{10}\\!\\left(\\frac{I_{1}}{I_{0}}\\right)",
    "latex": "L_{I} = 10\\log_{10}\\!\\left(\\frac{I_{1}}{I_{0}}\\right)",
    "text": "L_I = 10log10(I₁/I₀)"
  },
  {
    "id": "f2-impedance",
    "groupLabel": "Added",
    "quantity": "Acoustic impedance",
    "note": "Ultrasound medium property",
    "renderLatex": "Z = \\rho c",
    "latex": "Z = \\rho c",
    "text": "Z = ρc"
  },
  {
    "id": "f2-reflection",
    "groupLabel": "Added",
    "quantity": "Acoustic reflection coefficient",
    "note": "Fraction reflected at boundary",
    "renderLatex": "R = \\left(\\frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}\\right)^{2}",
    "latex": "R = \\left(\\frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}\\right)^{2}",
    "text": "R = [(Z₂ - Z₁)/(Z₂ + Z₁)]²"
  },
  {
    "id": "f2-transmission-coeff",
    "groupLabel": "Added",
    "quantity": "Acoustic transmission coefficient",
    "note": "Fraction transmitted at boundary",
    "renderLatex": "T = 1 - R",
    "latex": "T = 1 - R",
    "text": "T = 1 - R"
  },
  {
    "id": "f2-pulse-echo",
    "groupLabel": "Added",
    "quantity": "Pulse-echo distance",
    "note": "Distance to reflector",
    "renderLatex": "d = \\frac{ct}{2}",
    "latex": "d = \\frac{ct}{2}",
    "text": "d = ct/2"
  },
  {
    "id": "f2-wave-speed",
    "groupLabel": "Added",
    "quantity": "Wave speed in tissue",
    "note": "Basic imaging wave relation",
    "renderLatex": "c = f\\lambda",
    "latex": "c = f\\lambda",
    "text": "c = fλ"
  },
  {
    "id": "f2-doppler",
    "groupLabel": "Added",
    "quantity": "Ultrasound Doppler shift",
    "note": "Reflected-wave form for moving blood",
    "renderLatex": "\\Delta f = \\frac{2fv\\cos\\theta}{c}",
    "latex": "\\Delta f = \\frac{2fv\\cos\\theta}{c}",
    "text": "Δf = 2fv cosθ / c"
  },
  {
    "id": "f2-blood-speed",
    "groupLabel": "Added",
    "quantity": "Blood speed from Doppler shift",
    "note": "Rearranged Doppler equation",
    "renderLatex": "v = \\frac{c\\,\\Delta f}{2f\\cos\\theta}",
    "latex": "v = \\frac{c\\,\\Delta f}{2f\\cos\\theta}",
    "text": "v = cΔf/(2f cosθ)"
  },
  {
    "id": "f2-rayleigh",
    "groupLabel": "Added",
    "quantity": "Rayleigh criterion",
    "note": "Minimum angular resolution",
    "renderLatex": "\\theta = 1.22\\frac{\\lambda}{b}",
    "latex": "\\theta = 1.22\\frac{\\lambda}{b}",
    "text": "θ = 1.22λ/b"
  },
  {
    "id": "f2-radiotracer-activity",
    "groupLabel": "Added",
    "quantity": "Radiotracer activity",
    "note": "Useful in nuclear medicine",
    "renderLatex": "A = A_{0}e^{-\\lambda t}",
    "latex": "A = A_{0}e^{-\\lambda t}",
    "text": "A = A₀e^(-λt)"
  },
  {
    "id": "f2-decay-constant",
    "groupLabel": "Added",
    "quantity": "Decay constant and half-life",
    "note": "For radiotracers",
    "renderLatex": "\\lambda = \\frac{\\ln 2}{T_{1/2}}",
    "latex": "\\lambda = \\frac{\\ln 2}{T_{1/2}}",
    "text": "λ = ln2/T_1/2"
  },
  {
    "id": "f2-effective-half-life",
    "groupLabel": "Added",
    "quantity": "Effective half-life",
    "note": "Physical and biological half-lives combined",
    "renderLatex": "\\frac{1}{T_{\\mathrm{eff}}} = \\frac{1}{T_{\\mathrm{phys}}} + \\frac{1}{T_{\\mathrm{bio}}}",
    "latex": "\\frac{1}{T_{\\mathrm{eff}}} = \\frac{1}{T_{\\mathrm{phys}}} + \\frac{1}{T_{\\mathrm{bio}}}",
    "text": "1/T_eff = 1/T_phys + 1/T_bio"
  },
  {
    "id": "f2-larmor",
    "groupLabel": "Added",
    "quantity": "Larmor frequency",
    "note": "MRI precession relation",
    "renderLatex": "f = \\frac{\\gamma B}{2\\pi}",
    "latex": "f = \\frac{\\gamma B}{2\\pi}",
    "text": "f = γB/(2π)"
  }
];
  const state = { generator: null };

  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
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
        fallback.focus(); fallback.select(); document.execCommand("copy");
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
    if (!window.katex) { target.textContent = latex; return; }
    try {
      window.katex.render(latex, target, { throwOnError: false, displayMode, strict: "ignore" });
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
        ns: "f2-medical-physics-generator",
        title: "Quick LaTeX generator",
        subtitle: "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "I = I_{0}e^{-\\mu x}",
      });
    } catch (error) {
      console.error(error);
      showToast("Generator failed to load");
    }
  }
  function init() { renderCards(); bindGridEvents(); mountGenerator(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
