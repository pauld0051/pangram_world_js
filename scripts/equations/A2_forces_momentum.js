(() => {
  const equationsData = [
    {
      id: "a2-static-friction-booklet",
      groupLabel: "Booklet",
      quantity: "Static friction condition",
      note: "Static friction does not exceed this limit",
      renderLatex: "F_{f} \\le \\mu_{s} F_{N}",
      latex: "F_{f} \\le \\mu_{s} F_{N}",
      text: "F_f ≤ μ_s F_N",
    },
    {
      id: "a2-kinetic-friction-booklet",
      groupLabel: "Booklet",
      quantity: "Kinetic friction",
      note: "Friction during sliding motion",
      renderLatex: "F_{f} = \\mu_{d} F_{N}",
      latex: "F_{f} = \\mu_{d} F_{N}",
      text: "F_f = μ_d F_N",
    },
    {
      id: "a2-hookes-law-booklet",
      groupLabel: "Booklet",
      quantity: "Hooke's law",
      note: "Restoring force of a spring",
      renderLatex: "F_{H} = -kx",
      latex: "F_{H} = -kx",
      text: "F_H = -kx",
    },
    {
      id: "a2-stokes-law-booklet",
      groupLabel: "Booklet",
      quantity: "Stokes' law drag",
      note: "Small sphere in viscous flow",
      renderLatex: "F_{d} = 6\\pi\\eta rv",
      latex: "F_{d} = 6\\pi\\eta rv",
      text: "F_d = 6πηrv",
    },
    {
      id: "a2-buoyancy-booklet",
      groupLabel: "Booklet",
      quantity: "Buoyant force",
      note: "Upthrust in a fluid",
      renderLatex: "F_{b} = \\rho Vg",
      latex: "F_{b} = \\rho Vg",
      text: "F_b = ρVg",
    },
    {
      id: "a2-weight-booklet",
      groupLabel: "Booklet",
      quantity: "Weight",
      note: "Gravitational force near Earth's surface",
      renderLatex: "F_{g} = mg",
      latex: "F_{g} = mg",
      text: "F_g = mg",
    },
    {
      id: "a2-momentum-booklet",
      groupLabel: "Booklet",
      quantity: "Linear momentum",
      note: "Momentum of a moving object",
      renderLatex: "p = mv",
      latex: "p = mv",
      text: "p = mv",
    },
    {
      id: "a2-impulse-booklet",
      groupLabel: "Booklet",
      quantity: "Impulse",
      note: "Constant force over a time interval",
      renderLatex: "J = F\\Delta t",
      latex: "J = F\\Delta t",
      text: "J = FΔt",
    },
    {
      id: "a2-newtons-second-law-booklet",
      groupLabel: "Booklet",
      quantity: "Newton's second law",
      note: "Official A.2 data booklet form",
      renderLatex: "F = ma = \\frac{\\Delta p}{\\Delta t}",
      latex: "F = ma = \\frac{\\Delta p}{\\Delta t}",
      text: "F = ma = Δp/Δt",
    },
    {
      id: "a2-centripetal-acceleration-booklet",
      groupLabel: "Booklet",
      quantity: "Centripetal acceleration",
      note: "Uniform circular motion",
      renderLatex:
        "a = \\frac{v^{2}}{r} = \\omega^{2}r = \\frac{4\\pi^{2}r}{T^{2}}",
      latex: "a = \\frac{v^{2}}{r} = \\omega^{2}r = \\frac{4\\pi^{2}r}{T^{2}}",
      text: "a = v²/r = ω²r = 4π²r/T²",
    },
    {
      id: "a2-circular-speed-booklet",
      groupLabel: "Booklet",
      quantity: "Circular motion speed",
      note: "Speed in uniform circular motion",
      renderLatex: "v = \\frac{2\\pi r}{T} = \\omega r",
      latex: "v = \\frac{2\\pi r}{T} = \\omega r",
      text: "v = 2πr/T = ωr",
    },
    {
      id: "a2-max-static-friction-added",
      groupLabel: "Added",
      quantity: "Maximum static friction",
      note: "Useful classroom helper",
      renderLatex: "F_{f,\\max} = \\mu_{s} F_{N}",
      latex: "F_{f,\\max} = \\mu_{s} F_{N}",
      text: "F_f,max = μ_s F_N",
    },
    {
      id: "a2-impulse-momentum-added",
      groupLabel: "Added",
      quantity: "Impulse-momentum theorem",
      note: "Useful classroom helper",
      renderLatex: "J = \\Delta p",
      latex: "J = \\Delta p",
      text: "J = Δp",
    },
    {
      id: "a2-centripetal-force-added",
      groupLabel: "Added",
      quantity: "Centripetal force",
      note: "Useful classroom helper",
      renderLatex: "F_{c} = \\frac{mv^{2}}{r} = m\\omega^{2}r",
      latex: "F_{c} = \\frac{mv^{2}}{r} = m\\omega^{2}r",
      text: "F_c = mv²/r = mω²r",
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
        ns: "a2-forces-momentum-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "F = ma = \\frac{\\Delta p}{\\Delta t}",
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
