(() => {
  const equationsData = [
  {
    "id": "d2-electric-potential-energy-booklet",
    "groupLabel": "Booklet",
    "quantity": "Electric potential energy",
    "note": "Potential energy between two point charges",
    "renderLatex": "E_{\\mathrm{p}} = k\\frac{q_{1}q_{2}}{r}",
    "latex": "E_{\\mathrm{p}} = k\\frac{q_{1}q_{2}}{r}",
    "text": "E_p = kq₁q₂/r"
  },
  {
    "id": "d2-electric-potential-booklet",
    "groupLabel": "Booklet",
    "quantity": "Electric potential",
    "note": "Potential around a point charge",
    "renderLatex": "V_{\\mathrm{e}} = \\frac{kQ}{r}",
    "latex": "V_{\\mathrm{e}} = \\frac{kQ}{r}",
    "text": "V_e = kQ/r"
  },
  {
    "id": "d2-electric-field-gradient-booklet",
    "groupLabel": "Booklet",
    "quantity": "Field from potential gradient",
    "note": "Electric field strength as the negative gradient of potential",
    "renderLatex": "E = -\\frac{\\Delta V_{\\mathrm{e}}}{\\Delta r}",
    "latex": "E = -\\frac{\\Delta V_{\\mathrm{e}}}{\\Delta r}",
    "text": "E = -ΔV_e/Δr"
  },
  {
    "id": "d2-work-potential-difference-booklet",
    "groupLabel": "Booklet",
    "quantity": "Work and potential difference",
    "note": "Work done when moving a charge through a potential difference",
    "renderLatex": "W = q\\Delta V_{\\mathrm{e}}",
    "latex": "W = q\\Delta V_{\\mathrm{e}}",
    "text": "W = qΔV_e"
  },
  {
    "id": "d2-coulomb-force-booklet",
    "groupLabel": "Booklet",
    "quantity": "Coulomb's law",
    "note": "Force between two point charges",
    "renderLatex": "F = k\\frac{q_{1}q_{2}}{r^{2}}, \\qquad k = \\frac{1}{4\\pi\\varepsilon_{0}}",
    "latex": "F = k\\frac{q_{1}q_{2}}{r^{2}}, \\qquad k = \\frac{1}{4\\pi\\varepsilon_{0}}",
    "text": "F = kq₁q₂/r², k = 1/(4πε₀)"
  },
  {
    "id": "d2-electric-field-strength-booklet",
    "groupLabel": "Booklet",
    "quantity": "Electric field strength",
    "note": "Force per unit charge",
    "renderLatex": "E = \\frac{F}{q}",
    "latex": "E = \\frac{F}{q}",
    "text": "E = F/q"
  },
  {
    "id": "d2-uniform-field-booklet",
    "groupLabel": "Booklet",
    "quantity": "Uniform electric field",
    "note": "Potential gradient between parallel plates",
    "renderLatex": "E = \\frac{V}{d}",
    "latex": "E = \\frac{V}{d}",
    "text": "E = V/d"
  },
  {
    "id": "d2-point-charge-field-added",
    "groupLabel": "Added",
    "quantity": "Field around a point charge",
    "note": "Inverse-square electric field",
    "renderLatex": "E = \\frac{kQ}{r^{2}}",
    "latex": "E = \\frac{kQ}{r^{2}}",
    "text": "E = kQ/r²"
  },
  {
    "id": "d2-force-in-electric-field-added",
    "groupLabel": "Added",
    "quantity": "Force in an electric field",
    "note": "Useful rearrangement of field strength",
    "renderLatex": "F = qE",
    "latex": "F = qE",
    "text": "F = qE"
  },
  {
    "id": "d2-potential-from-energy-added",
    "groupLabel": "Added",
    "quantity": "Potential from potential energy",
    "note": "Potential energy per unit charge",
    "renderLatex": "V_{\\mathrm{e}} = \\frac{E_{\\mathrm{p}}}{q}",
    "latex": "V_{\\mathrm{e}} = \\frac{E_{\\mathrm{p}}}{q}",
    "text": "V_e = E_p/q"
  },
  {
    "id": "d2-potential-difference-point-charge-added",
    "groupLabel": "Added",
    "quantity": "Potential difference between two radii",
    "note": "Difference in electric potential around a point charge",
    "renderLatex": "\\Delta V_{\\mathrm{e}} = kQ\\left(\\frac{1}{r_{2}} - \\frac{1}{r_{1}}\\right)",
    "latex": "\\Delta V_{\\mathrm{e}} = kQ\\left(\\frac{1}{r_{2}} - \\frac{1}{r_{1}}\\right)",
    "text": "ΔV_e = kQ(1/r₂ - 1/r₁)"
  },
  {
    "id": "d2-work-field-distance-added",
    "groupLabel": "Added",
    "quantity": "Work in a uniform field",
    "note": "Work done moving a charge through a distance parallel to the field",
    "renderLatex": "W = Fd = qEd",
    "latex": "W = Fd = qEd",
    "text": "W = Fd = qEd"
  },
  {
    "id": "d2-potential-difference-uniform-field-added",
    "groupLabel": "Added",
    "quantity": "Potential difference in a uniform field",
    "note": "Potential difference across a plate separation",
    "renderLatex": "V = Ed",
    "latex": "V = Ed",
    "text": "V = Ed"
  },
  {
    "id": "d2-electric-constant-added",
    "groupLabel": "Added",
    "quantity": "Coulomb constant",
    "note": "Useful constant form",
    "renderLatex": "k = \\frac{1}{4\\pi\\varepsilon_{0}}",
    "latex": "k = \\frac{1}{4\\pi\\varepsilon_{0}}",
    "text": "k = 1/(4πε₀)"
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
        ns: "d2-electric-and-magnetic-fields-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "E = -\\frac{\\Delta V_{\\mathrm{e}}}{\\Delta r}",
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
