(() => {
  const equationsData = [
    {
      id: "a4-torque-booklet",
      groupLabel: "Booklet",
      quantity: "Torque",
      note: "Torque from a force at an angle",
      renderLatex: "\\tau = Fr\\sin\\theta",
      latex: "\\tau = Fr\\sin\\theta",
      text: "τ = Fr sinθ",
    },
    {
      id: "a4-angular-displacement-average-booklet",
      groupLabel: "Booklet",
      quantity: "Angular displacement from average angular velocity",
      note: "Official A.4 data booklet form",
      renderLatex: "\\Delta \\theta = \\frac{\\omega_{f} + \\omega_{i}}{2} t",
      latex: "\\Delta \\theta = \\frac{\\omega_{f} + \\omega_{i}}{2} t",
      text: "Δθ = [(ω_f + ω_i)/2]t",
    },
    {
      id: "a4-angular-velocity-booklet",
      groupLabel: "Booklet",
      quantity: "Angular velocity after time t",
      note: "Official A.4 data booklet form",
      renderLatex: "\\omega_{f} = \\omega_{i} + \\alpha t",
      latex: "\\omega_{f} = \\omega_{i} + \\alpha t",
      text: "ω_f = ω_i + αt",
    },
    {
      id: "a4-angular-displacement-booklet",
      groupLabel: "Booklet",
      quantity: "Angular displacement with constant angular acceleration",
      note: "Official A.4 data booklet form",
      renderLatex:
        "\\Delta \\theta = \\omega_{i} t + \\frac{1}{2}\\alpha t^{2}",
      latex: "\\Delta \\theta = \\omega_{i} t + \\frac{1}{2}\\alpha t^{2}",
      text: "Δθ = ω_i t + ½αt²",
    },
    {
      id: "a4-angular-velocity-displacement-booklet",
      groupLabel: "Booklet",
      quantity: "Angular velocity-displacement relation",
      note: "Official A.4 data booklet form",
      renderLatex: "\\omega_{f}^{2} = \\omega_{i}^{2} + 2\\alpha\\Delta\\theta",
      latex: "\\omega_{f}^{2} = \\omega_{i}^{2} + 2\\alpha\\Delta\\theta",
      text: "ω_f² = ω_i² + 2αΔθ",
    },
    {
      id: "a4-moment-of-inertia-booklet",
      groupLabel: "Booklet",
      quantity: "Moment of inertia",
      note: "Discrete mass model",
      renderLatex: "I = \\sum mr^{2}",
      latex: "I = \\sum mr^{2}",
      text: "I = Σmr²",
    },
    {
      id: "a4-rotational-newtons-second-law-booklet",
      groupLabel: "Booklet",
      quantity: "Rotational Newton's second law",
      note: "Torque and angular acceleration",
      renderLatex: "\\tau = I\\alpha",
      latex: "\\tau = I\\alpha",
      text: "τ = Iα",
    },
    {
      id: "a4-angular-momentum-booklet",
      groupLabel: "Booklet",
      quantity: "Angular momentum",
      note: "Rigid body form",
      renderLatex: "L = I\\omega",
      latex: "L = I\\omega",
      text: "L = Iω",
    },
    {
      id: "a4-angular-impulse-booklet",
      groupLabel: "Booklet",
      quantity: "Angular impulse",
      note: "Torque over a time interval",
      renderLatex: "\\Delta L = \\tau \\Delta t",
      latex: "\\Delta L = \\tau \\Delta t",
      text: "ΔL = τΔt",
    },
    {
      id: "a4-angular-momentum-change-booklet",
      groupLabel: "Booklet",
      quantity: "Change in angular momentum",
      note: "General form",
      renderLatex: "\\Delta L = \\Delta(I\\omega)",
      latex: "\\Delta L = \\Delta(I\\omega)",
      text: "ΔL = Δ(Iω)",
    },
    {
      id: "a4-rotational-kinetic-energy-booklet",
      groupLabel: "Booklet",
      quantity: "Rotational kinetic energy",
      note: "Energy of a rotating rigid body",
      renderLatex: "E_{k} = \\frac{1}{2}I\\omega^{2} = \\frac{L^{2}}{2I}",
      latex: "E_{k} = \\frac{1}{2}I\\omega^{2} = \\frac{L^{2}}{2I}",
      text: "E_k = ½Iω² = L²/2I",
    },
    {
      id: "a4-angular-acceleration-added",
      groupLabel: "Added",
      quantity: "Average angular acceleration",
      note: "Useful classroom helper",
      renderLatex: "\\alpha = \\frac{\\Delta \\omega}{\\Delta t}",
      latex: "\\alpha = \\frac{\\Delta \\omega}{\\Delta t}",
      text: "α = Δω/Δt",
    },
    {
      id: "a4-average-angular-velocity-added",
      groupLabel: "Added",
      quantity: "Average angular velocity",
      note: "Useful classroom helper",
      renderLatex: "\\omega = \\frac{\\Delta \\theta}{\\Delta t}",
      latex: "\\omega = \\frac{\\Delta \\theta}{\\Delta t}",
      text: "ω = Δθ/Δt",
    },
    {
      id: "a4-angular-momentum-conservation-added",
      groupLabel: "Added",
      quantity: "Conservation of angular momentum",
      note: "Useful classroom helper when external torque is negligible",
      renderLatex: "I_{i}\\omega_{i} = I_{f}\\omega_{f}",
      latex: "I_{i}\\omega_{i} = I_{f}\\omega_{f}",
      text: "I_iω_i = I_fω_f",
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
        ns: "a4-rigid-body-mechanics-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "\\tau = I\\alpha",
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
