(() => {
  const equationsData = [
  {
    "id": "e1-photon-energy-booklet",
    "groupLabel": "Booklet",
    "quantity": "Photon energy",
    "note": "Energy of a photon",
    "renderLatex": "E = hf",
    "latex": "E = hf",
    "text": "E = hf"
  },
  {
    "id": "e1-nuclear-radius-booklet",
    "groupLabel": "Booklet",
    "quantity": "Nuclear radius",
    "note": "Radius of a nucleus",
    "renderLatex": "R = R_{0}A^{1/3}",
    "latex": "R = R_{0}A^{1/3}",
    "text": "R = R₀A^(1/3)"
  },
  {
    "id": "e1-hydrogen-energy-booklet",
    "groupLabel": "Booklet",
    "quantity": "Hydrogen energy levels",
    "note": "Bohr-model energy for the hydrogen atom",
    "renderLatex": "E = -\\frac{13.6}{n^{2}}\\ \\mathrm{eV}",
    "latex": "E = -\\frac{13.6}{n^{2}}\\ \\mathrm{eV}",
    "text": "E = -13.6/n² eV"
  },
  {
    "id": "e1-bohr-angular-momentum-booklet",
    "groupLabel": "Booklet",
    "quantity": "Bohr angular momentum",
    "note": "Quantization condition in the Bohr model",
    "renderLatex": "mvr = \\frac{nh}{2\\pi}",
    "latex": "mvr = \\frac{nh}{2\\pi}",
    "text": "mvr = nh/(2π)"
  },
  {
    "id": "e1-photon-energy-wavelength-added",
    "groupLabel": "Added",
    "quantity": "Photon energy and wavelength",
    "note": "Photon energy written using wavelength",
    "renderLatex": "E = \\frac{hc}{\\lambda}",
    "latex": "E = \\frac{hc}{\\lambda}",
    "text": "E = hc/λ"
  },
  {
    "id": "e1-wave-speed-added",
    "groupLabel": "Added",
    "quantity": "Wave-speed relation for light",
    "note": "Frequency and wavelength relation",
    "renderLatex": "c = f\\lambda",
    "latex": "c = f\\lambda",
    "text": "c = fλ"
  },
  {
    "id": "e1-photoelectric-equation-added",
    "groupLabel": "Added",
    "quantity": "Photoelectric equation",
    "note": "Maximum kinetic energy of emitted photoelectrons",
    "renderLatex": "E_{\\max} = hf - \\Phi",
    "latex": "E_{\\max} = hf - \\Phi",
    "text": "E_max = hf - Φ"
  },
  {
    "id": "e1-stopping-potential-added",
    "groupLabel": "Added",
    "quantity": "Stopping potential",
    "note": "Photoelectric equation written with stopping potential",
    "renderLatex": "eV_{\\mathrm{s}} = hf - \\Phi",
    "latex": "eV_{\\mathrm{s}} = hf - \\Phi",
    "text": "eV_s = hf - Φ"
  },
  {
    "id": "e1-threshold-frequency-added",
    "groupLabel": "Added",
    "quantity": "Threshold frequency",
    "note": "Minimum frequency needed for emission",
    "renderLatex": "f_{0} = \\frac{\\Phi}{h}",
    "latex": "f_{0} = \\frac{\\Phi}{h}",
    "text": "f₀ = Φ/h"
  },
  {
    "id": "e1-threshold-wavelength-added",
    "groupLabel": "Added",
    "quantity": "Threshold wavelength",
    "note": "Maximum wavelength that can eject electrons",
    "renderLatex": "\\lambda_{0} = \\frac{hc}{\\Phi}",
    "latex": "\\lambda_{0} = \\frac{hc}{\\Phi}",
    "text": "λ₀ = hc/Φ"
  },
  {
    "id": "e1-photon-momentum-added",
    "groupLabel": "Added",
    "quantity": "Photon momentum",
    "note": "Momentum of a photon",
    "renderLatex": "p = \\frac{h}{\\lambda} = \\frac{E}{c}",
    "latex": "p = \\frac{h}{\\lambda} = \\frac{E}{c}",
    "text": "p = h/λ = E/c"
  },
  {
    "id": "e1-de-broglie-added",
    "groupLabel": "Added",
    "quantity": "de Broglie wavelength",
    "note": "Matter-wave relation",
    "renderLatex": "\\lambda = \\frac{h}{p}",
    "latex": "\\lambda = \\frac{h}{p}",
    "text": "λ = h/p"
  },
  {
    "id": "e1-de-broglie-kinetic-added",
    "groupLabel": "Added",
    "quantity": "de Broglie wavelength from kinetic energy",
    "note": "Useful non-relativistic particle form",
    "renderLatex": "\\lambda = \\frac{h}{\\sqrt{2mE_{\\mathrm{k}}}}",
    "latex": "\\lambda = \\frac{h}{\\sqrt{2mE_{\\mathrm{k}}}}",
    "text": "λ = h/√(2mE_k)"
  },
  {
    "id": "e1-bohr-radius-added",
    "groupLabel": "Added",
    "quantity": "Bohr orbit radius",
    "note": "Radius of the nth Bohr orbit",
    "renderLatex": "r_{n} = a_{0}n^{2}",
    "latex": "r_{n} = a_{0}n^{2}",
    "text": "r_n = a₀n²"
  },
  {
    "id": "e1-energy-transition-added",
    "groupLabel": "Added",
    "quantity": "Energy transition in hydrogen",
    "note": "Photon energy emitted or absorbed in a transition",
    "renderLatex": "\\Delta E = 13.6\\left(\\frac{1}{n_{\\mathrm{f}}^{2}} - \\frac{1}{n_{\\mathrm{i}}^{2}}\\right)\\mathrm{eV}",
    "latex": "\\Delta E = 13.6\\left(\\frac{1}{n_{\\mathrm{f}}^{2}} - \\frac{1}{n_{\\mathrm{i}}^{2}}\\right)\\mathrm{eV}",
    "text": "ΔE = 13.6(1/n_f² - 1/n_i²) eV"
  },
  {
    "id": "e1-rydberg-added",
    "groupLabel": "Added",
    "quantity": "Rydberg equation",
    "note": "Wavelengths in the hydrogen spectrum",
    "renderLatex": "\\frac{1}{\\lambda} = R_{\\mathrm{H}}\\left(\\frac{1}{n_{\\mathrm{f}}^{2}} - \\frac{1}{n_{\\mathrm{i}}^{2}}\\right)",
    "latex": "\\frac{1}{\\lambda} = R_{\\mathrm{H}}\\left(\\frac{1}{n_{\\mathrm{f}}^{2}} - \\frac{1}{n_{\\mathrm{i}}^{2}}\\right)",
    "text": "1/λ = R_H(1/n_f² - 1/n_i²)"
  },
  {
    "id": "e1-standing-wave-bohr-added",
    "groupLabel": "Added",
    "quantity": "Bohr standing-wave condition",
    "note": "Circumference equals an integer number of wavelengths",
    "renderLatex": "2\\pi r = n\\lambda",
    "latex": "2\\pi r = n\\lambda",
    "text": "2πr = nλ"
  },
  {
    "id": "e1-probability-density-added",
    "groupLabel": "Added",
    "quantity": "Probability density",
    "note": "Probability of finding a particle in a small volume",
    "renderLatex": "P(r) = |\\Psi|^{2}\\Delta V",
    "latex": "P(r) = |\\Psi|^{2}\\Delta V",
    "text": "P(r) = |Ψ|²ΔV"
  },
  {
    "id": "e1-position-momentum-uncertainty-added",
    "groupLabel": "Added",
    "quantity": "Position-momentum uncertainty",
    "note": "Heisenberg uncertainty principle",
    "renderLatex": "\\Delta x \\Delta p \\geq \\frac{h}{4\\pi}",
    "latex": "\\Delta x \\Delta p \\geq \\frac{h}{4\\pi}",
    "text": "ΔxΔp ≥ h/(4π)"
  },
  {
    "id": "e1-energy-time-uncertainty-added",
    "groupLabel": "Added",
    "quantity": "Energy-time uncertainty",
    "note": "Heisenberg uncertainty principle",
    "renderLatex": "\\Delta E \\Delta t \\geq \\frac{h}{4\\pi}",
    "latex": "\\Delta E \\Delta t \\geq \\frac{h}{4\\pi}",
    "text": "ΔEΔt ≥ h/(4π)"
  },
  {
    "id": "e1-nuclear-density-added",
    "groupLabel": "Added",
    "quantity": "Nuclear density",
    "note": "Mass density of a nucleus using the nuclear-radius model",
    "renderLatex": "\\rho = \\frac{Am_{\\mathrm{nucleon}}}{\\frac{4}{3}\\pi R^{3}}",
    "latex": "\\rho = \\frac{Am_{\\mathrm{nucleon}}}{\\frac{4}{3}\\pi R^{3}}",
    "text": "ρ = Am_nucleon/((4/3)πR³)"
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
        ns: "e1-structure-of-the-atom-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "E = hf",
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
