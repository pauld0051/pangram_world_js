(() => {
  const equationsData = [
    {
      id: "c5-booklet",
      groupLabel: "Booklet",
      quantity: "Small-speed Doppler approximation",
      note: "Useful for speeds much smaller than the wave speed",
      renderLatex: "\\frac{\\Delta f}{f} = \\frac{\\Delta \\lambda}{\\lambda} \\approx \\frac{v}{c}",
      latex: "\\frac{\\Delta f}{f} = \\frac{\\Delta \\lambda}{\\lambda} \\approx \\frac{v}{c}",
      text: "Δf/f = Δλ/λ ≈ v/c",
    },

    {
      id: "c5-moving-source-added",
      groupLabel: "Added",
      quantity: "Moving source",
      note: "Classical Doppler effect for a moving source and stationary observer",
      renderLatex: "f' = f\\left(\\frac{v}{v \\pm u_{s}}\\right)",
      latex: "f' = f\\left(\\frac{v}{v \\pm u_{s}}\\right)",
      text: "f′ = f(v/(v ± u_s))",
    },
    {
      id: "c5-moving-observer-added",
      groupLabel: "Added",
      quantity: "Moving observer",
      note: "Classical Doppler effect for a moving observer and stationary source",
      renderLatex: "f' = f\\left(\\frac{v \\pm u_{o}}{v}\\right)",
      latex: "f' = f\\left(\\frac{v \\pm u_{o}}{v}\\right)",
      text: "f′ = f((v ± u_o)/v)",
    },
    {
      id: "c5-general-sound-added",
      groupLabel: "Added",
      quantity: "General sound Doppler form",
      note: "Combined moving observer and moving source form",
      renderLatex: "f' = f\\left(\\frac{v \\pm u_{o}}{v \\mp u_{s}}\\right)",
      latex: "f' = f\\left(\\frac{v \\pm u_{o}}{v \\mp u_{s}}\\right)",
      text: "f′ = f((v ± u_o)/(v ∓ u_s))",
    },
    {
      id: "c5-observed-wavelength-added",
      groupLabel: "Added",
      quantity: "Observed wavelength shift",
      note: "Wavelength changes when the source moves through the medium",
      renderLatex: "\\lambda' = \\frac{v \\pm u_{s}}{f}",
      latex: "\\lambda' = \\frac{v \\pm u_{s}}{f}",
      text: "λ′ = (v ± u_s)/f",
    },
    {
      id: "c5-redshift-definition-added",
      groupLabel: "Added",
      quantity: "Redshift parameter",
      note: "Definition used in astronomy",
      renderLatex: "z = \\frac{\\Delta \\lambda}{\\lambda_{0}} = \\frac{\\lambda_{\\mathrm{obs}} - \\lambda_{0}}{\\lambda_{0}}",
      latex: "z = \\frac{\\Delta \\lambda}{\\lambda_{0}} = \\frac{\\lambda_{\\mathrm{obs}} - \\lambda_{0}}{\\lambda_{0}}",
      text: "z = Δλ/λ₀ = (λ_obs - λ₀)/λ₀",
    },
    {
      id: "c5-redshift-wavelength-added",
      groupLabel: "Added",
      quantity: "Observed wavelength from redshift",
      note: "Useful rearrangement of the redshift definition",
      renderLatex: "\\lambda_{\\mathrm{obs}} = \\lambda_{0}(1 + z)",
      latex: "\\lambda_{\\mathrm{obs}} = \\lambda_{0}(1 + z)",
      text: "λ_obs = λ₀(1 + z)",
    },
    {
      id: "c5-redshift-frequency-added",
      groupLabel: "Added",
      quantity: "Observed frequency from redshift",
      note: "Frequency version of the astronomical redshift relation",
      renderLatex: "f_{\\mathrm{obs}} = \\frac{f_{0}}{1 + z}",
      latex: "f_{\\mathrm{obs}} = \\frac{f_{0}}{1 + z}",
      text: "f_obs = f₀/(1 + z)",
    },
    {
      id: "c5-small-z-added",
      groupLabel: "Added",
      quantity: "Small-speed redshift approximation",
      note: "For non-relativistic recession or approach speeds",
      renderLatex: "z \\approx \\frac{v}{c}",
      latex: "z \\approx \\frac{v}{c}",
      text: "z ≈ v/c",
    },
    {
      id: "c5-recession-speed-added",
      groupLabel: "Added",
      quantity: "Speed from small redshift",
      note: "Useful astronomy rearrangement when z is small",
      renderLatex: "v \\approx zc",
      latex: "v \\approx zc",
      text: "v ≈ zc",
    },
    {
      id: "c5-blueshift-sign-added",
      groupLabel: "Added",
      quantity: "Blueshift sign convention",
      note: "Approaching sources have shorter observed wavelength",
      renderLatex: "z < 0",
      latex: "z < 0",
      text: "z < 0",
    },
    {
      id: "c5-redshift-sign-added",
      groupLabel: "Added",
      quantity: "Redshift sign convention",
      note: "Receding sources have longer observed wavelength",
      renderLatex: "z > 0",
      latex: "z > 0",
      text: "z > 0",
    },
    {
      id: "c5-relativistic-wavelength-added",
      groupLabel: "Added",
      quantity: "Relativistic redshift",
      note: "Longitudinal relativistic Doppler effect for light",
      renderLatex: "1 + z = \\sqrt{\\frac{1 + \\beta}{1 - \\beta}}",
      latex: "1 + z = \\sqrt{\\frac{1 + \\beta}{1 - \\beta}}",
      text: "1 + z = √((1 + β)/(1 - β))",
    },
    {
      id: "c5-relativistic-frequency-added",
      groupLabel: "Added",
      quantity: "Relativistic frequency shift",
      note: "Longitudinal relativistic Doppler effect for light",
      renderLatex: "f_{\\mathrm{obs}} = f_{0}\\sqrt{\\frac{1 - \\beta}{1 + \\beta}}",
      latex: "f_{\\mathrm{obs}} = f_{0}\\sqrt{\\frac{1 - \\beta}{1 + \\beta}}",
      text: "f_obs = f₀√((1 - β)/(1 + β))",
    },
    {
      id: "c5-beta-added",
      groupLabel: "Added",
      quantity: "Beta parameter",
      note: "Useful shorthand in relativistic Doppler equations",
      renderLatex: "\\beta = \\frac{v}{c}",
      latex: "\\beta = \\frac{v}{c}",
      text: "β = v/c",
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
        ns: "c5-doppler-effect-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "\\frac{\\Delta f}{f} = \\frac{\\Delta \\lambda}{\\lambda} \\approx \\frac{v}{c}",
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
