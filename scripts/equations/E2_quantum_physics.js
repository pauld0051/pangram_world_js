(() => {
  const equationsData = [
  {
    "id": "e2-photoelectric-booklet",
    "groupLabel": "Booklet",
    "quantity": "Photoelectric equation",
    "note": "Maximum kinetic energy of an emitted photoelectron",
    "renderLatex": "E_{\\max} = hf - \\Phi",
    "latex": "E_{\\max} = hf - \\Phi",
    "text": "E_max = hf - Φ"
  },
  {
    "id": "e2-de-broglie-booklet",
    "groupLabel": "Booklet",
    "quantity": "de Broglie wavelength",
    "note": "Matter-wave relation",
    "renderLatex": "\\lambda = \\frac{h}{p}",
    "latex": "\\lambda = \\frac{h}{p}",
    "text": "λ = h/p"
  },
  {
    "id": "e2-compton-booklet",
    "groupLabel": "Booklet",
    "quantity": "Compton shift",
    "note": "Change in wavelength after photon scattering",
    "renderLatex": "\\lambda_{\\mathrm{f}} - \\lambda_{\\mathrm{i}} = \\Delta\\lambda = \\frac{h}{m_{\\mathrm{e}}c}(1 - \\cos\\theta)",
    "latex": "\\lambda_{\\mathrm{f}} - \\lambda_{\\mathrm{i}} = \\Delta\\lambda = \\frac{h}{m_{\\mathrm{e}}c}(1 - \\cos\\theta)",
    "text": "λ_f - λ_i = Δλ = [h/(m_ec)](1 - cosθ)"
  },
  {
    "id": "e2-photon-energy-added",
    "groupLabel": "Added",
    "quantity": "Photon energy",
    "note": "Energy of a photon",
    "renderLatex": "E = hf",
    "latex": "E = hf",
    "text": "E = hf"
  },
  {
    "id": "e2-photon-energy-wavelength-added",
    "groupLabel": "Added",
    "quantity": "Photon energy and wavelength",
    "note": "Photon energy written using wavelength",
    "renderLatex": "E = \\frac{hc}{\\lambda}",
    "latex": "E = \\frac{hc}{\\lambda}",
    "text": "E = hc/λ"
  },
  {
    "id": "e2-wave-speed-light-added",
    "groupLabel": "Added",
    "quantity": "Wave-speed relation for light",
    "note": "Frequency and wavelength relation",
    "renderLatex": "c = f\\lambda",
    "latex": "c = f\\lambda",
    "text": "c = fλ"
  },
  {
    "id": "e2-stopping-potential-added",
    "groupLabel": "Added",
    "quantity": "Stopping potential",
    "note": "Photoelectric equation written with stopping potential",
    "renderLatex": "eV_{\\mathrm{s}} = hf - \\Phi",
    "latex": "eV_{\\mathrm{s}} = hf - \\Phi",
    "text": "eV_s = hf - Φ"
  },
  {
    "id": "e2-threshold-frequency-added",
    "groupLabel": "Added",
    "quantity": "Threshold frequency",
    "note": "Minimum frequency needed for emission",
    "renderLatex": "f_{0} = \\frac{\\Phi}{h}",
    "latex": "f_{0} = \\frac{\\Phi}{h}",
    "text": "f₀ = Φ/h"
  },
  {
    "id": "e2-threshold-wavelength-added",
    "groupLabel": "Added",
    "quantity": "Threshold wavelength",
    "note": "Maximum wavelength that can eject electrons",
    "renderLatex": "\\lambda_{0} = \\frac{hc}{\\Phi}",
    "latex": "\\lambda_{0} = \\frac{hc}{\\Phi}",
    "text": "λ₀ = hc/Φ"
  },
  {
    "id": "e2-photon-momentum-added",
    "groupLabel": "Added",
    "quantity": "Photon momentum",
    "note": "Momentum of a photon",
    "renderLatex": "p = \\frac{h}{\\lambda} = \\frac{E}{c}",
    "latex": "p = \\frac{h}{\\lambda} = \\frac{E}{c}",
    "text": "p = h/λ = E/c"
  },
  {
    "id": "e2-de-broglie-kinetic-added",
    "groupLabel": "Added",
    "quantity": "de Broglie wavelength from kinetic energy",
    "note": "Useful non-relativistic particle form",
    "renderLatex": "\\lambda = \\frac{h}{\\sqrt{2mE_{\\mathrm{k}}}}",
    "latex": "\\lambda = \\frac{h}{\\sqrt{2mE_{\\mathrm{k}}}}",
    "text": "λ = h/√(2mE_k)"
  },
  {
    "id": "e2-mass-energy-added",
    "groupLabel": "Added",
    "quantity": "Mass-energy equivalence",
    "note": "Rest-energy relation",
    "renderLatex": "\\Delta E = \\Delta mc^{2}",
    "latex": "\\Delta E = \\Delta mc^{2}",
    "text": "ΔE = Δmc²"
  },
  {
    "id": "e2-pair-production-threshold-added",
    "groupLabel": "Added",
    "quantity": "Pair production threshold",
    "note": "Minimum photon energy to create an electron-positron pair",
    "renderLatex": "E_{\\min} = 2m_{\\mathrm{e}}c^{2}",
    "latex": "E_{\\min} = 2m_{\\mathrm{e}}c^{2}",
    "text": "E_min = 2m_ec²"
  },
  {
    "id": "e2-annihilation-photon-energy-added",
    "groupLabel": "Added",
    "quantity": "Annihilation photon energy",
    "note": "Energy of each photon for electron-positron annihilation at rest",
    "renderLatex": "E = m_{\\mathrm{e}}c^{2}",
    "latex": "E = m_{\\mathrm{e}}c^{2}",
    "text": "E = m_ec²"
  },
  {
    "id": "e2-compton-wavelength-added",
    "groupLabel": "Added",
    "quantity": "Electron Compton wavelength",
    "note": "Useful constant in Compton scattering",
    "renderLatex": "\\lambda_{\\mathrm{C}} = \\frac{h}{m_{\\mathrm{e}}c}",
    "latex": "\\lambda_{\\mathrm{C}} = \\frac{h}{m_{\\mathrm{e}}c}",
    "text": "λ_C = h/(m_ec)"
  },
  {
    "id": "e2-position-momentum-uncertainty-added",
    "groupLabel": "Added",
    "quantity": "Position-momentum uncertainty",
    "note": "Heisenberg uncertainty principle",
    "renderLatex": "\\Delta x\\Delta p \\geq \\frac{h}{4\\pi}",
    "latex": "\\Delta x\\Delta p \\geq \\frac{h}{4\\pi}",
    "text": "ΔxΔp ≥ h/(4π)"
  },
  {
    "id": "e2-energy-time-uncertainty-added",
    "groupLabel": "Added",
    "quantity": "Energy-time uncertainty",
    "note": "Heisenberg uncertainty principle",
    "renderLatex": "\\Delta E\\Delta t \\geq \\frac{h}{4\\pi}",
    "latex": "\\Delta E\\Delta t \\geq \\frac{h}{4\\pi}",
    "text": "ΔEΔt ≥ h/(4π)"
  },
  {
    "id": "e2-quark-charge-up-added",
    "groupLabel": "Added",
    "quantity": "Up-type quark charge",
    "note": "Applies to u, c, and t quarks",
    "renderLatex": "q = +\\frac{2}{3}e",
    "latex": "q = +\\frac{2}{3}e",
    "text": "q = +2/3 e"
  },
  {
    "id": "e2-quark-charge-down-added",
    "groupLabel": "Added",
    "quantity": "Down-type quark charge",
    "note": "Applies to d, s, and b quarks",
    "renderLatex": "q = -\\frac{1}{3}e",
    "latex": "q = -\\frac{1}{3}e",
    "text": "q = -1/3 e"
  },
  {
    "id": "e2-quark-baryon-number-added",
    "groupLabel": "Added",
    "quantity": "Quark baryon number",
    "note": "Baryon number of a quark",
    "renderLatex": "B = \\frac{1}{3}",
    "latex": "B = \\frac{1}{3}",
    "text": "B = 1/3"
  },
  {
    "id": "e2-antiquark-baryon-number-added",
    "groupLabel": "Added",
    "quantity": "Antiquark baryon number",
    "note": "Baryon number of an antiquark",
    "renderLatex": "B = -\\frac{1}{3}",
    "latex": "B = -\\frac{1}{3}",
    "text": "B = -1/3"
  },
  {
    "id": "e2-strangeness-added",
    "groupLabel": "Added",
    "quantity": "Strangeness of the strange quark",
    "note": "All other quarks have strangeness zero",
    "renderLatex": "S = -1",
    "latex": "S = -1",
    "text": "S = -1"
  },
  {
    "id": "e2-lepton-number-added",
    "groupLabel": "Added",
    "quantity": "Lepton number",
    "note": "All leptons have lepton number +1 and antileptons have -1",
    "renderLatex": "L = +1,\\qquad \\bar{L} = -1",
    "latex": "L = +1,\\qquad \\bar{L} = -1",
    "text": "L = +1, anti-L = -1"
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
        ns: "e2-quantum-physics-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "\\lambda_{\\mathrm{f}} - \\lambda_{\\mathrm{i}} = \\Delta\\lambda = \\frac{h}{m_{\\mathrm{e}}c}(1 - \\cos\\theta)",
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
