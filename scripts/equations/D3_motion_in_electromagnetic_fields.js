(() => {
  const equationsData = [
  {
    "id": "d3-force-on-charge-booklet",
    "groupLabel": "Booklet",
    "quantity": "Force on a moving charge",
    "note": "Magnetic force on a charged particle",
    "renderLatex": "F = qvB\\sin\\theta",
    "latex": "F = qvB\\sin\\theta",
    "text": "F = qvB sinθ"
  },
  {
    "id": "d3-force-on-conductor-booklet",
    "groupLabel": "Booklet",
    "quantity": "Force on a current-carrying conductor",
    "note": "Magnetic force on a wire in a field",
    "renderLatex": "F = BIL\\sin\\theta",
    "latex": "F = BIL\\sin\\theta",
    "text": "F = BIL sinθ"
  },
  {
    "id": "d3-force-per-length-booklet",
    "groupLabel": "Booklet",
    "quantity": "Force per unit length between wires",
    "note": "Parallel current-carrying wires",
    "renderLatex": "\\frac{F}{L} = \\mu_{0}\\frac{I_{1}I_{2}}{2\\pi r}",
    "latex": "\\frac{F}{L} = \\mu_{0}\\frac{I_{1}I_{2}}{2\\pi r}",
    "text": "F/L = μ₀I₁I₂/(2πr)"
  },
  {
    "id": "d3-magnetic-flux-density-particle-added",
    "groupLabel": "Added",
    "quantity": "Magnetic flux density from particle force",
    "note": "Useful rearrangement of the magnetic force equation",
    "renderLatex": "B = \\frac{F}{qv\\sin\\theta}",
    "latex": "B = \\frac{F}{qv\\sin\\theta}",
    "text": "B = F/(qv sinθ)"
  },
  {
    "id": "d3-magnetic-flux-density-conductor-added",
    "groupLabel": "Added",
    "quantity": "Magnetic flux density from wire force",
    "note": "Useful rearrangement for conductors",
    "renderLatex": "B = \\frac{F}{IL\\sin\\theta}",
    "latex": "B = \\frac{F}{IL\\sin\\theta}",
    "text": "B = F/(IL sinθ)"
  },
  {
    "id": "d3-velocity-selector-balance-added",
    "groupLabel": "Added",
    "quantity": "Velocity selector balance",
    "note": "Electric and magnetic forces balance for undeflected motion",
    "renderLatex": "qE = qvB",
    "latex": "qE = qvB",
    "text": "qE = qvB"
  },
  {
    "id": "d3-velocity-selector-speed-added",
    "groupLabel": "Added",
    "quantity": "Velocity selector speed",
    "note": "Selected speed in crossed electric and magnetic fields",
    "renderLatex": "v = \\frac{E}{B}",
    "latex": "v = \\frac{E}{B}",
    "text": "v = E/B"
  },
  {
    "id": "d3-circular-motion-balance-added",
    "groupLabel": "Added",
    "quantity": "Circular motion in a magnetic field",
    "note": "Magnetic force provides centripetal force",
    "renderLatex": "qvB = \\frac{mv^{2}}{r}",
    "latex": "qvB = \\frac{mv^{2}}{r}",
    "text": "qvB = mv²/r"
  },
  {
    "id": "d3-radius-in-field-added",
    "groupLabel": "Added",
    "quantity": "Radius of circular path",
    "note": "Charged particle moving perpendicular to a magnetic field",
    "renderLatex": "r = \\frac{mv}{qB}",
    "latex": "r = \\frac{mv}{qB}",
    "text": "r = mv/(qB)"
  },
  {
    "id": "d3-period-in-field-added",
    "groupLabel": "Added",
    "quantity": "Time period in a magnetic field",
    "note": "Cyclotron period for uniform circular motion",
    "renderLatex": "T = \\frac{2\\pi m}{qB}",
    "latex": "T = \\frac{2\\pi m}{qB}",
    "text": "T = 2πm/(qB)"
  },
  {
    "id": "d3-frequency-in-field-added",
    "groupLabel": "Added",
    "quantity": "Cyclotron frequency",
    "note": "Frequency of circular motion in a magnetic field",
    "renderLatex": "f = \\frac{qB}{2\\pi m}",
    "latex": "f = \\frac{qB}{2\\pi m}",
    "text": "f = qB/(2πm)"
  },
  {
    "id": "d3-angular-frequency-in-field-added",
    "groupLabel": "Added",
    "quantity": "Cyclotron angular frequency",
    "note": "Angular speed of circular motion in a magnetic field",
    "renderLatex": "\\omega = \\frac{qB}{m}",
    "latex": "\\omega = \\frac{qB}{m}",
    "text": "ω = qB/m"
  },
  {
    "id": "d3-particle-accelerated-through-pd-added",
    "groupLabel": "Added",
    "quantity": "Particle accelerated through a potential difference",
    "note": "Electrical energy converted to kinetic energy",
    "renderLatex": "qV = \\frac{1}{2}mv^{2}",
    "latex": "qV = \\frac{1}{2}mv^{2}",
    "text": "qV = 1/2 mv²"
  },
  {
    "id": "d3-speed-after-potential-difference-added",
    "groupLabel": "Added",
    "quantity": "Speed after acceleration through a potential difference",
    "note": "Useful particle-motion helper",
    "renderLatex": "v = \\sqrt{\\frac{2qV}{m}}",
    "latex": "v = \\sqrt{\\frac{2qV}{m}}",
    "text": "v = √(2qV/m)"
  },
  {
    "id": "d3-specific-charge-added",
    "groupLabel": "Added",
    "quantity": "Specific charge from circular deflection",
    "note": "Charge-to-mass ratio using accelerating potential and magnetic field",
    "renderLatex": "\\frac{q}{m} = \\frac{2V}{B^{2}r^{2}}",
    "latex": "\\frac{q}{m} = \\frac{2V}{B^{2}r^{2}}",
    "text": "q/m = 2V/(B²r²)"
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
        ns: "d3-motion-in-electromagnetic-fields-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "F = qvB\\sin\\theta",
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
