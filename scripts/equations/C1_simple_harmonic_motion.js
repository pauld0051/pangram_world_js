(() => {
  const equationsData = [
    {
      id: "c1-acceleration-booklet",
      groupLabel: "Booklet",
      quantity: "SHM acceleration",
      note: "Acceleration is proportional to displacement and directed toward equilibrium",
      renderLatex: "a = -\\omega^{2}x",
      latex: "a = -\\omega^{2}x",
      text: "a = -ω²x",
    },
    {
      id: "c1-period-angular-frequency-booklet",
      groupLabel: "Booklet",
      quantity: "Period, frequency, and angular frequency",
      note: "Equivalent forms for the period of oscillation",
      renderLatex: "T = \\frac{1}{f} = \\frac{2\\pi}{\\omega}",
      latex: "T = \\frac{1}{f} = \\frac{2\\pi}{\\omega}",
      text: "T = 1/f = 2π/ω",
    },
    {
      id: "c1-spring-period-booklet",
      groupLabel: "Booklet",
      quantity: "Mass-spring period",
      note: "Ideal mass-spring oscillator",
      renderLatex: "T = 2\\pi\\sqrt{\\frac{m}{k}}",
      latex: "T = 2\\pi\\sqrt{\\frac{m}{k}}",
      text: "T = 2π√(m/k)",
    },
    {
      id: "c1-pendulum-period-booklet",
      groupLabel: "Booklet",
      quantity: "Simple pendulum period",
      note: "Small-angle approximation",
      renderLatex: "T = 2\\pi\\sqrt{\\frac{l}{g}}",
      latex: "T = 2\\pi\\sqrt{\\frac{l}{g}}",
      text: "T = 2π√(l/g)",
    },

    {
      id: "c1-angular-frequency-added",
      groupLabel: "Added",
      quantity: "Angular frequency",
      note: "Useful rearrangement of the period relation",
      renderLatex: "\\omega = 2\\pi f = \\frac{2\\pi}{T}",
      latex: "\\omega = 2\\pi f = \\frac{2\\pi}{T}",
      text: "ω = 2πf = 2π/T",
    },
    {
      id: "c1-frequency-added",
      groupLabel: "Added",
      quantity: "Frequency",
      note: "Inverse of the period",
      renderLatex: "f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}",
      latex: "f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}",
      text: "f = 1/T = ω/2π",
    },
    {
      id: "c1-displacement-sine-added",
      groupLabel: "Added",
      quantity: "Displacement, sine form",
      note: "General SHM displacement with phase constant",
      renderLatex: "x = x_{0}\\sin(\\omega t + \\phi)",
      latex: "x = x_{0}\\sin(\\omega t + \\phi)",
      text: "x = x₀ sin(ωt + φ)",
    },
    {
      id: "c1-displacement-cosine-added",
      groupLabel: "Added",
      quantity: "Displacement, cosine form",
      note: "Equivalent SHM form depending on initial conditions",
      renderLatex: "x = x_{0}\\cos(\\omega t + \\phi)",
      latex: "x = x_{0}\\cos(\\omega t + \\phi)",
      text: "x = x₀ cos(ωt + φ)",
    },
    {
      id: "c1-velocity-sine-based-added",
      groupLabel: "Added",
      quantity: "Velocity from sine displacement",
      note: "Derivative of the sine displacement form",
      renderLatex: "v = \\omega x_{0}\\cos(\\omega t + \\phi)",
      latex: "v = \\omega x_{0}\\cos(\\omega t + \\phi)",
      text: "v = ωx₀ cos(ωt + φ)",
    },
    {
      id: "c1-velocity-cosine-based-added",
      groupLabel: "Added",
      quantity: "Velocity from cosine displacement",
      note: "Derivative of the cosine displacement form",
      renderLatex: "v = -\\omega x_{0}\\sin(\\omega t + \\phi)",
      latex: "v = -\\omega x_{0}\\sin(\\omega t + \\phi)",
      text: "v = -ωx₀ sin(ωt + φ)",
    },
    {
      id: "c1-velocity-position-added",
      groupLabel: "Added",
      quantity: "Velocity-position relation",
      note: "Speed as a function of displacement",
      renderLatex: "v = \\pm\\omega\\sqrt{x_{0}^{2} - x^{2}}",
      latex: "v = \\pm\\omega\\sqrt{x_{0}^{2} - x^{2}}",
      text: "v = ±ω√(x₀² - x²)",
    },
    {
      id: "c1-maximum-speed-added",
      groupLabel: "Added",
      quantity: "Maximum speed",
      note: "Occurs at the equilibrium position",
      renderLatex: "v_{\\max} = \\omega x_{0}",
      latex: "v_{\\max} = \\omega x_{0}",
      text: "v_max = ωx₀",
    },
    {
      id: "c1-maximum-acceleration-added",
      groupLabel: "Added",
      quantity: "Maximum acceleration",
      note: "Occurs at maximum displacement",
      renderLatex: "a_{\\max} = \\omega^{2}x_{0}",
      latex: "a_{\\max} = \\omega^{2}x_{0}",
      text: "a_max = ω²x₀",
    },
    {
      id: "c1-restoring-force-added",
      groupLabel: "Added",
      quantity: "Restoring force",
      note: "Hooke-law form for SHM about equilibrium",
      renderLatex: "F = -kx = -m\\omega^{2}x",
      latex: "F = -kx = -m\\omega^{2}x",
      text: "F = -kx = -mω²x",
    },
    {
      id: "c1-spring-angular-frequency-added",
      groupLabel: "Added",
      quantity: "Mass-spring angular frequency",
      note: "Useful spring-oscillator form",
      renderLatex: "\\omega = \\sqrt{\\frac{k}{m}}",
      latex: "\\omega = \\sqrt{\\frac{k}{m}}",
      text: "ω = √(k/m)",
    },
    {
      id: "c1-pendulum-angular-frequency-added",
      groupLabel: "Added",
      quantity: "Pendulum angular frequency",
      note: "Small-angle approximation",
      renderLatex: "\\omega = \\sqrt{\\frac{g}{l}}",
      latex: "\\omega = \\sqrt{\\frac{g}{l}}",
      text: "ω = √(g/l)",
    },
    {
      id: "c1-total-energy-added",
      groupLabel: "Added",
      quantity: "Total energy in SHM",
      note: "Constant mechanical energy of the oscillator",
      renderLatex:
        "E_{\\mathrm{T}} = \\frac{1}{2}m\\omega^{2}x_{0}^{2} = \\frac{1}{2}kx_{0}^{2}",
      latex:
        "E_{\\mathrm{T}} = \\frac{1}{2}m\\omega^{2}x_{0}^{2} = \\frac{1}{2}kx_{0}^{2}",
      text: "E_T = 1/2 mω²x₀² = 1/2 kx₀²",
    },
    {
      id: "c1-potential-energy-added",
      groupLabel: "Added",
      quantity: "Potential energy in SHM",
      note: "Elastic or restoring potential energy at displacement x",
      renderLatex:
        "E_{\\mathrm{p}} = \\frac{1}{2}m\\omega^{2}x^{2} = \\frac{1}{2}kx^{2}",
      latex:
        "E_{\\mathrm{p}} = \\frac{1}{2}m\\omega^{2}x^{2} = \\frac{1}{2}kx^{2}",
      text: "E_p = 1/2 mω²x² = 1/2 kx²",
    },
    {
      id: "c1-kinetic-energy-added",
      groupLabel: "Added",
      quantity: "Kinetic energy in SHM",
      note: "Mechanical energy minus potential energy",
      renderLatex:
        "E_{\\mathrm{k}} = \\frac{1}{2}m\\omega^{2}(x_{0}^{2} - x^{2})",
      latex: "E_{\\mathrm{k}} = \\frac{1}{2}m\\omega^{2}(x_{0}^{2} - x^{2})",
      text: "E_k = 1/2 mω²(x₀² - x²)",
    },
    {
      id: "c1-quality-factor-cycle-added",
      groupLabel: "Added",
      quantity: "Quality factor",
      note: "Energy stored compared with energy dissipated per cycle",
      renderLatex:
        "Q = 2\\pi\\frac{\\text{energy stored}}{\\text{energy dissipated per cycle}}",
      latex:
        "Q = 2\\pi\\frac{\\text{energy stored}}{\\text{energy dissipated per cycle}}",
      text: "Q = 2π(energy stored)/(energy dissipated per cycle)",
    },
    {
      id: "c1-quality-factor-power-added",
      groupLabel: "Added",
      quantity: "Quality factor, power form",
      note: "Resonance helper using power loss",
      renderLatex:
        "Q = 2\\pi f_{0}\\frac{\\text{energy stored}}{\\text{power loss}}",
      latex: "Q = 2\\pi f_{0}\\frac{\\text{energy stored}}{\\text{power loss}}",
      text: "Q = 2πf₀(energy stored)/(power loss)",
    },
    {
      id: "c1-quality-factor-bandwidth-added",
      groupLabel: "Added",
      quantity: "Quality factor, bandwidth form",
      note: "Common resonance relation",
      renderLatex: "Q = \\frac{f_{0}}{\\Delta f}",
      latex: "Q = \\frac{f_{0}}{\\Delta f}",
      text: "Q = f₀/Δf",
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
        ns: "c1-simple-harmonic-motion-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "x = x_{0}\\sin(\\omega t + \\phi)",
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
