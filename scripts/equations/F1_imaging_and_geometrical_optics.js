(() => {
  const equationsData = [
  {
    "id": "f1-thin-lens-booklet",
    "groupLabel": "Booklet",
    "quantity": "Thin lens equation",
    "note": "Object distance, image distance, and focal length",
    "renderLatex": "\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}",
    "latex": "\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}",
    "text": "1/f = 1/v + 1/u"
  },
  {
    "id": "f1-lens-power-booklet",
    "groupLabel": "Booklet",
    "quantity": "Power of a lens",
    "note": "Lens power in inverse metres",
    "renderLatex": "P = \\frac{1}{f}",
    "latex": "P = \\frac{1}{f}",
    "text": "P = 1/f"
  },
  {
    "id": "f1-linear-magnification-booklet",
    "groupLabel": "Booklet",
    "quantity": "Linear magnification",
    "note": "Image height compared with object height",
    "renderLatex": "m = \\frac{h_{\\mathrm{i}}}{h_{\\mathrm{o}}} = -\\frac{v}{u}",
    "latex": "m = \\frac{h_{\\mathrm{i}}}{h_{\\mathrm{o}}} = -\\frac{v}{u}",
    "text": "m = hᵢ/hₒ = -v/u"
  },
  {
    "id": "f1-angular-magnification-booklet",
    "groupLabel": "Booklet",
    "quantity": "Angular magnification",
    "note": "Image angle compared with object angle",
    "renderLatex": "M = \\frac{\\theta_{\\mathrm{i}}}{\\theta_{\\mathrm{o}}}",
    "latex": "M = \\frac{\\theta_{\\mathrm{i}}}{\\theta_{\\mathrm{o}}}",
    "text": "M = θᵢ/θₒ"
  },
  {
    "id": "f1-magnifying-glass-booklet",
    "groupLabel": "Booklet",
    "quantity": "Simple magnifier magnification",
    "note": "Near-point and infinity forms",
    "renderLatex": "M_{\\mathrm{near\\ point}} = \\frac{D}{f} + 1;\\quad M_{\\mathrm{infinity}} = \\frac{D}{f}",
    "latex": "M_{\\mathrm{near\\ point}} = \\frac{D}{f} + 1;\\quad M_{\\mathrm{infinity}} = \\frac{D}{f}",
    "text": "M_near point = D/f + 1; M_infinity = D/f"
  },
  {
    "id": "f1-optical-instrument-booklet",
    "groupLabel": "Booklet",
    "quantity": "Optical instrument magnification",
    "note": "Objective and eyepiece focal lengths",
    "renderLatex": "M = \\frac{f_{\\mathrm{o}}}{f_{\\mathrm{e}}}",
    "latex": "M = \\frac{f_{\\mathrm{o}}}{f_{\\mathrm{e}}}",
    "text": "M = fₒ/fₑ"
  },
  {
    "id": "f1-critical-angle-booklet",
    "groupLabel": "Booklet",
    "quantity": "Critical angle relation",
    "note": "For total internal reflection in fibre optics",
    "renderLatex": "n = \\frac{1}{\\sin c}",
    "latex": "n = \\frac{1}{\\sin c}",
    "text": "n = 1/sin c"
  },
  {
    "id": "f1-fibre-attenuation-booklet",
    "groupLabel": "Booklet",
    "quantity": "Fibre attenuation",
    "note": "Attenuation in decibels",
    "renderLatex": "\\mathrm{attenuation} = 10\\log_{10}\\!\\left(\\frac{I}{I_{0}}\\right)",
    "latex": "\\mathrm{attenuation} = 10\\log_{10}\\!\\left(\\frac{I}{I_{0}}\\right)",
    "text": "attenuation = 10log10(I/I₀)"
  },
  {
    "id": "f1-intensity-level-booklet",
    "groupLabel": "Booklet",
    "quantity": "Intensity level",
    "note": "Sound or imaging intensity level in decibels",
    "renderLatex": "L_{I} = 10\\log_{10}\\!\\left(\\frac{I_{1}}{I_{0}}\\right)",
    "latex": "L_{I} = 10\\log_{10}\\!\\left(\\frac{I_{1}}{I_{0}}\\right)",
    "text": "L_I = 10log10(I₁/I₀)"
  },
  {
    "id": "f1-xray-attenuation-booklet",
    "groupLabel": "Booklet",
    "quantity": "Exponential attenuation",
    "note": "Beam intensity through matter",
    "renderLatex": "I = I_{0}e^{-\\mu x}",
    "latex": "I = I_{0}e^{-\\mu x}",
    "text": "I = I₀e^(-μx)"
  },
  {
    "id": "f1-half-value-thickness-booklet",
    "groupLabel": "Booklet",
    "quantity": "Half-value thickness",
    "note": "Relation between attenuation coefficient and half-value thickness",
    "renderLatex": "\\mu x_{1/2} = \\ln 2",
    "latex": "\\mu x_{1/2} = \\ln 2",
    "text": "μx_1/2 = ln2"
  },
  {
    "id": "f1-acoustic-impedance-booklet",
    "groupLabel": "Booklet",
    "quantity": "Acoustic impedance",
    "note": "Medium property used in ultrasound imaging",
    "renderLatex": "Z = \\rho c",
    "latex": "Z = \\rho c",
    "text": "Z = ρc"
  },
  {
    "id": "f1-snell-added",
    "groupLabel": "Added",
    "quantity": "Snell's law",
    "note": "Refraction at a boundary",
    "renderLatex": "n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}",
    "latex": "n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}",
    "text": "n₁sinθ₁ = n₂sinθ₂"
  },
  {
    "id": "f1-refractive-index-added",
    "groupLabel": "Added",
    "quantity": "Refractive index",
    "note": "Speed of light in vacuum divided by speed in a medium",
    "renderLatex": "n = \\frac{c}{v}",
    "latex": "n = \\frac{c}{v}",
    "text": "n = c/v"
  },
  {
    "id": "f1-lens-power-dioptre-added",
    "groupLabel": "Added",
    "quantity": "Lens power in dioptres",
    "note": "Power with explicit units",
    "renderLatex": "P(\\mathrm{D}) = \\frac{1}{f(\\mathrm{m})}",
    "latex": "P(\\mathrm{D}) = \\frac{1}{f(\\mathrm{m})}",
    "text": "P(D) = 1/f(m)"
  },
  {
    "id": "f1-combined-lens-power-added",
    "groupLabel": "Added",
    "quantity": "Combined lens powers",
    "note": "Thin lenses in contact",
    "renderLatex": "P_{\\mathrm{total}} = P_{1} + P_{2}",
    "latex": "P_{\\mathrm{total}} = P_{1} + P_{2}",
    "text": "P_total = P₁ + P₂"
  },
  {
    "id": "f1-combined-focal-length-added",
    "groupLabel": "Added",
    "quantity": "Combined focal length",
    "note": "Thin lenses in contact",
    "renderLatex": "\\frac{1}{f_{\\mathrm{total}}} = \\frac{1}{f_{1}} + \\frac{1}{f_{2}}",
    "latex": "\\frac{1}{f_{\\mathrm{total}}} = \\frac{1}{f_{1}} + \\frac{1}{f_{2}}",
    "text": "1/f_total = 1/f₁ + 1/f₂"
  },
  {
    "id": "f1-transmission-fraction-added",
    "groupLabel": "Added",
    "quantity": "Transmission fraction",
    "note": "Fraction of intensity transmitted through matter",
    "renderLatex": "\\frac{I}{I_{0}} = e^{-\\mu x}",
    "latex": "\\frac{I}{I_{0}} = e^{-\\mu x}",
    "text": "I/I₀ = e^(-μx)"
  },
  {
    "id": "f1-attenuation-coefficient-added",
    "groupLabel": "Added",
    "quantity": "Attenuation coefficient",
    "note": "Coefficient written using half-value thickness",
    "renderLatex": "\\mu = \\frac{\\ln 2}{x_{1/2}}",
    "latex": "\\mu = \\frac{\\ln 2}{x_{1/2}}",
    "text": "μ = ln2/x_1/2"
  },
  {
    "id": "f1-acoustic-reflection-added",
    "groupLabel": "Added",
    "quantity": "Acoustic reflection coefficient",
    "note": "Fraction of intensity reflected at a boundary",
    "renderLatex": "R = \\left(\\frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}\\right)^{2}",
    "latex": "R = \\left(\\frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}\\right)^{2}",
    "text": "R = [(Z₂ - Z₁)/(Z₂ + Z₁)]²"
  },
  {
    "id": "f1-acoustic-transmission-added",
    "groupLabel": "Added",
    "quantity": "Acoustic transmission coefficient",
    "note": "Fraction of intensity transmitted at a boundary",
    "renderLatex": "T = 1 - R",
    "latex": "T = 1 - R",
    "text": "T = 1 - R"
  },
  {
    "id": "f1-rayleigh-added",
    "groupLabel": "Added",
    "quantity": "Rayleigh criterion",
    "note": "Minimum angular resolution for a circular aperture",
    "renderLatex": "\\theta = 1.22\\frac{\\lambda}{b}",
    "latex": "\\theta = 1.22\\frac{\\lambda}{b}",
    "text": "θ = 1.22λ/b"
  },
  {
    "id": "f1-single-slit-added",
    "groupLabel": "Added",
    "quantity": "Single-slit diffraction minimum",
    "note": "Approximate first-minimum condition",
    "renderLatex": "\\theta = \\frac{\\lambda}{b}",
    "latex": "\\theta = \\frac{\\lambda}{b}",
    "text": "θ = λ/b"
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
      </div>
    `;
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
        ns: "f1-imaging-and-geometrical-optics-generator",
        title: "Quick LaTeX generator",
        subtitle: "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}",
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
