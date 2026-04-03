(() => {
  const equationsData = [
    {
      id: "a3-work-booklet",
      groupLabel: "Booklet",
      quantity: "Work done",
      note: "Work by a constant force at an angle",
      renderLatex: "W = Fs\\cos\\theta",
      latex: "W = Fs\\cos\\theta",
      text: "W = Fs cosθ",
    },
    {
      id: "a3-kinetic-energy-booklet",
      groupLabel: "Booklet",
      quantity: "Kinetic energy",
      note: "Official A.3 data booklet form",
      renderLatex: "E_{k} = \\frac{1}{2}mv^{2} = \\frac{p^{2}}{2m}",
      latex: "E_{k} = \\frac{1}{2}mv^{2} = \\frac{p^{2}}{2m}",
      text: "E_k = ½mv² = p²/2m",
    },
    {
      id: "a3-gravitational-potential-change-booklet",
      groupLabel: "Booklet",
      quantity: "Change in gravitational potential energy",
      note: "Near Earth's surface",
      renderLatex: "\\Delta E_{p} = mg\\Delta h",
      latex: "\\Delta E_{p} = mg\\Delta h",
      text: "ΔE_p = mgΔh",
    },
    {
      id: "a3-elastic-potential-energy-booklet",
      groupLabel: "Booklet",
      quantity: "Elastic potential energy",
      note: "Energy stored in a spring",
      renderLatex: "E_{H} = \\frac{1}{2}k\\Delta x^{2}",
      latex: "E_{H} = \\frac{1}{2}k\\Delta x^{2}",
      text: "E_H = ½kΔx²",
    },
    {
      id: "a3-power-booklet",
      groupLabel: "Booklet",
      quantity: "Power",
      note: "Rate of doing work",
      renderLatex: "P = \\frac{\\Delta W}{\\Delta t} = Fv",
      latex: "P = \\frac{\\Delta W}{\\Delta t} = Fv",
      text: "P = ΔW/Δt = Fv",
    },
    {
      id: "a3-efficiency-booklet",
      groupLabel: "Booklet",
      quantity: "Efficiency",
      note: "Energy and power forms",
      renderLatex:
        "\\eta = \\frac{E_{\\text{output}}}{E_{\\text{input}}} = \\frac{P_{\\text{output}}}{P_{\\text{input}}}",
      latex:
        "\\eta = \\frac{E_{\\text{output}}}{E_{\\text{input}}} = \\frac{P_{\\text{output}}}{P_{\\text{input}}}",
      text: "η = E_output/E_input = P_output/P_input",
    },
    {
      id: "a3-gravitational-potential-energy-added",
      groupLabel: "Added",
      quantity: "Gravitational potential energy",
      note: "Useful classroom helper near Earth's surface",
      renderLatex: "E_{p} = mgh",
      latex: "E_{p} = mgh",
      text: "E_p = mgh",
    },
    {
      id: "a3-average-power-added",
      groupLabel: "Added",
      quantity: "Average power",
      note: "Useful classroom helper",
      renderLatex: "P = \\frac{E}{t}",
      latex: "P = \\frac{E}{t}",
      text: "P = E/t",
    },
    {
      id: "a3-efficiency-percent-added",
      groupLabel: "Added",
      quantity: "Efficiency as a percentage",
      note: "Useful classroom helper",
      renderLatex:
        "\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%",
      latex:
        "\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%",
      text: "efficiency = (useful output/total input) × 100%",
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
        ns: "a3-work-energy-power-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "P = \\frac{\\Delta W}{\\Delta t} = Fv",
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
