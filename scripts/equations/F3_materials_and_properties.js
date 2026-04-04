(() => {
  const equationsData = [
  {
    "id": "f3-density",
    "groupLabel": "Added",
    "quantity": "Density",
    "note": "Mass per unit volume",
    "renderLatex": "\\rho = \\frac{m}{V}",
    "latex": "\\rho = \\frac{m}{V}",
    "text": "ρ = m/V"
  },
  {
    "id": "f3-pressure",
    "groupLabel": "Added",
    "quantity": "Pressure",
    "note": "Force per unit area",
    "renderLatex": "p = \\frac{F}{A}",
    "latex": "p = \\frac{F}{A}",
    "text": "p = F/A"
  },
  {
    "id": "f3-hydrostatic",
    "groupLabel": "Added",
    "quantity": "Hydrostatic pressure",
    "note": "Pressure at depth in a liquid",
    "renderLatex": "p = \\rho gh",
    "latex": "p = \\rho gh",
    "text": "p = ρgh"
  },
  {
    "id": "f3-upthrust",
    "groupLabel": "Added",
    "quantity": "Upthrust",
    "note": "Weight of displaced fluid",
    "renderLatex": "F_{\\mathrm{b}} = \\rho gV",
    "latex": "F_{\\mathrm{b}} = \\rho gV",
    "text": "F_b = ρgV"
  },
  {
    "id": "f3-hooke",
    "groupLabel": "Added",
    "quantity": "Hooke's law",
    "note": "Force proportional to extension",
    "renderLatex": "F = kx",
    "latex": "F = kx",
    "text": "F = kx"
  },
  {
    "id": "f3-elastic-potential",
    "groupLabel": "Added",
    "quantity": "Elastic potential energy",
    "note": "Energy stored in a spring",
    "renderLatex": "E_{\\mathrm{p}} = \\frac{1}{2}kx^{2}",
    "latex": "E_{\\mathrm{p}} = \\frac{1}{2}kx^{2}",
    "text": "E_p = 1/2 kx²"
  },
  {
    "id": "f3-stress",
    "groupLabel": "Added",
    "quantity": "Stress",
    "note": "Force per unit cross-sectional area",
    "renderLatex": "\\sigma = \\frac{F}{A}",
    "latex": "\\sigma = \\frac{F}{A}",
    "text": "σ = F/A"
  },
  {
    "id": "f3-strain",
    "groupLabel": "Added",
    "quantity": "Strain",
    "note": "Fractional extension",
    "renderLatex": "\\varepsilon = \\frac{\\Delta L}{L}",
    "latex": "\\varepsilon = \\frac{\\Delta L}{L}",
    "text": "ε = ΔL/L"
  },
  {
    "id": "f3-young",
    "groupLabel": "Added",
    "quantity": "Young modulus",
    "note": "Stress divided by strain",
    "renderLatex": "E = \\frac{\\sigma}{\\varepsilon} = \\frac{FL}{A\\Delta L}",
    "latex": "E = \\frac{\\sigma}{\\varepsilon} = \\frac{FL}{A\\Delta L}",
    "text": "E = σ/ε = FL/(AΔL)"
  },
  {
    "id": "f3-spring-series",
    "groupLabel": "Added",
    "quantity": "Springs in series",
    "note": "Equivalent spring constant",
    "renderLatex": "\\frac{1}{k_{\\mathrm{eq}}} = \\frac{1}{k_{1}} + \\frac{1}{k_{2}} + \\cdots",
    "latex": "\\frac{1}{k_{\\mathrm{eq}}} = \\frac{1}{k_{1}} + \\frac{1}{k_{2}} + \\cdots",
    "text": "1/k_eq = 1/k₁ + 1/k₂ + ..."
  },
  {
    "id": "f3-spring-parallel",
    "groupLabel": "Added",
    "quantity": "Springs in parallel",
    "note": "Equivalent spring constant",
    "renderLatex": "k_{\\mathrm{eq}} = k_{1} + k_{2} + \\cdots",
    "latex": "k_{\\mathrm{eq}} = k_{1} + k_{2} + \\cdots",
    "text": "k_eq = k₁ + k₂ + ..."
  },
  {
    "id": "f3-moment",
    "groupLabel": "Added",
    "quantity": "Moment of a force",
    "note": "Turning effect about a pivot",
    "renderLatex": "\\tau = Fr_{\\perp} = Fr\\sin\\theta",
    "latex": "\\tau = Fr_{\\perp} = Fr\\sin\\theta",
    "text": "τ = Fr⊥ = Fr sinθ"
  },
  {
    "id": "f3-equilibrium-force",
    "groupLabel": "Added",
    "quantity": "Translational equilibrium",
    "note": "Resultant force is zero",
    "renderLatex": "\\sum F = 0",
    "latex": "\\sum F = 0",
    "text": "ΣF = 0"
  },
  {
    "id": "f3-equilibrium-moment",
    "groupLabel": "Added",
    "quantity": "Rotational equilibrium",
    "note": "Resultant moment is zero",
    "renderLatex": "\\sum \\tau = 0",
    "latex": "\\sum \\tau = 0",
    "text": "Στ = 0"
  },
  {
    "id": "f3-floating",
    "groupLabel": "Added",
    "quantity": "Floating condition",
    "note": "Weight equals upthrust",
    "renderLatex": "mg = \\rho gV_{\\mathrm{displaced}}",
    "latex": "mg = \\rho gV_{\\mathrm{displaced}}",
    "text": "mg = ρgV_displaced"
  },
  {
    "id": "f3-stokes",
    "groupLabel": "Added",
    "quantity": "Stokes drag",
    "note": "Drag on a sphere in a viscous fluid",
    "renderLatex": "F_{\\mathrm{d}} = 6\\pi \\eta rv",
    "latex": "F_{\\mathrm{d}} = 6\\pi \\eta rv",
    "text": "F_d = 6πηrv"
  },
  {
    "id": "f3-terminal",
    "groupLabel": "Added",
    "quantity": "Terminal speed condition",
    "note": "Forces balance at terminal speed",
    "renderLatex": "mg = F_{\\mathrm{b}} + F_{\\mathrm{d}}",
    "latex": "mg = F_{\\mathrm{b}} + F_{\\mathrm{d}}",
    "text": "mg = F_b + F_d"
  },
  {
    "id": "f3-viscosity",
    "groupLabel": "Added",
    "quantity": "Dynamic viscosity from Stokes law",
    "note": "Rearranged form",
    "renderLatex": "\\eta = \\frac{F_{\\mathrm{d}}}{6\\pi rv}",
    "latex": "\\eta = \\frac{F_{\\mathrm{d}}}{6\\pi rv}",
    "text": "η = F_d/(6πrv)"
  },
  {
    "id": "f3-bulk-modulus",
    "groupLabel": "Added",
    "quantity": "Bulk modulus",
    "note": "Pressure change over fractional volume change",
    "renderLatex": "B = -\\frac{\\Delta p}{\\Delta V/V}",
    "latex": "B = -\\frac{\\Delta p}{\\Delta V/V}",
    "text": "B = -Δp/(ΔV/V)"
  },
  {
    "id": "f3-shear-stress",
    "groupLabel": "Added",
    "quantity": "Shear stress",
    "note": "Tangential force per unit area",
    "renderLatex": "\\tau_{\\mathrm{s}} = \\frac{F}{A}",
    "latex": "\\tau_{\\mathrm{s}} = \\frac{F}{A}",
    "text": "τ_s = F/A"
  },
  {
    "id": "f3-shear-strain",
    "groupLabel": "Added",
    "quantity": "Shear strain",
    "note": "Angular distortion for small angles",
    "renderLatex": "\\gamma = \\frac{\\Delta x}{h}",
    "latex": "\\gamma = \\frac{\\Delta x}{h}",
    "text": "γ = Δx/h"
  },
  {
    "id": "f3-power-fluid",
    "groupLabel": "Added",
    "quantity": "Power in fluid flow",
    "note": "Pressure difference times volume flow rate",
    "renderLatex": "P = \\Delta p\\,Q",
    "latex": "P = \\Delta p\\,Q",
    "text": "P = ΔpQ"
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
        ns: "f3-materials-and-properties-generator",
        title: "Quick LaTeX generator",
        subtitle: "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "E = \\frac{\\sigma}{\\varepsilon} = \\frac{FL}{A\\Delta L}",
      });
    } catch (error) {
      console.error(error);
      showToast("Generator failed to load");
    }
  }

  function init() { renderCards(); bindGridEvents(); mountGenerator(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
