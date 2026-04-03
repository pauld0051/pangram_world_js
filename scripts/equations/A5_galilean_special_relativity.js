(() => {
  const equationsData = [
    {
      id: "a5-galilean-position-booklet",
      groupLabel: "Booklet",
      quantity: "Galilean position transformation",
      note: "Classical transformation between inertial frames",
      renderLatex: "x' = x - vt",
      latex: "x' = x - vt",
      text: "x' = x - vt",
    },
    {
      id: "a5-galilean-time-booklet",
      groupLabel: "Booklet",
      quantity: "Galilean time transformation",
      note: "Time is unchanged in Galilean relativity",
      renderLatex: "t' = t",
      latex: "t' = t",
      text: "t' = t",
    },
    {
      id: "a5-galilean-velocity-booklet",
      groupLabel: "Booklet",
      quantity: "Galilean velocity transformation",
      note: "Classical relative velocity",
      renderLatex: "u' = u - v",
      latex: "u' = u - v",
      text: "u' = u - v",
    },
    {
      id: "a5-lorentz-factor-booklet",
      groupLabel: "Booklet",
      quantity: "Lorentz factor",
      note: "Used throughout special relativity",
      renderLatex: "\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^{2}}{c^{2}}}}",
      latex: "\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^{2}}{c^{2}}}}",
      text: "γ = 1/√(1 - v²/c²)",
    },
    {
      id: "a5-lorentz-position-booklet",
      groupLabel: "Booklet",
      quantity: "Lorentz position transformation",
      note: "Special relativity transformation for position",
      renderLatex: "x' = \\gamma(x - vt)",
      latex: "x' = \\gamma(x - vt)",
      text: "x' = γ(x - vt)",
    },
    {
      id: "a5-lorentz-time-booklet",
      groupLabel: "Booklet",
      quantity: "Lorentz time transformation",
      note: "Special relativity transformation for time",
      renderLatex: "t' = \\gamma\\left(t - \\frac{vx}{c^{2}}\\right)",
      latex: "t' = \\gamma\\left(t - \\frac{vx}{c^{2}}\\right)",
      text: "t' = γ(t - vx/c²)",
    },
    {
      id: "a5-relativistic-velocity-booklet",
      groupLabel: "Booklet",
      quantity: "Relativistic velocity transformation",
      note: "Velocity addition in special relativity",
      renderLatex: "u' = \\frac{u - v}{1 - \\frac{uv}{c^{2}}}",
      latex: "u' = \\frac{u - v}{1 - \\frac{uv}{c^{2}}}",
      text: "u' = (u - v)/(1 - uv/c²)",
    },
    {
      id: "a5-spacetime-interval-booklet",
      groupLabel: "Booklet",
      quantity: "Spacetime interval",
      note: "Invariant interval in one spatial dimension",
      renderLatex: "(\\Delta s)^{2} = (c\\Delta t)^{2} - \\Delta x^{2}",
      latex: "(\\Delta s)^{2} = (c\\Delta t)^{2} - \\Delta x^{2}",
      text: "(Δs)² = (cΔt)² - Δx²",
    },
    {
      id: "a5-time-dilation-booklet",
      groupLabel: "Booklet",
      quantity: "Time dilation",
      note: "Moving clocks run slow",
      renderLatex: "\\Delta t = \\gamma\\Delta t_{0}",
      latex: "\\Delta t = \\gamma\\Delta t_{0}",
      text: "Δt = γΔt₀",
    },
    {
      id: "a5-length-contraction-booklet",
      groupLabel: "Booklet",
      quantity: "Length contraction",
      note: "Moving lengths are contracted",
      renderLatex: "L = \\frac{L_{0}}{\\gamma}",
      latex: "L = \\frac{L_{0}}{\\gamma}",
      text: "L = L₀/γ",
    },
    {
      id: "a5-spacetime-angle-booklet",
      groupLabel: "Booklet",
      quantity: "Spacetime diagram angle",
      note: "Useful for spacetime diagrams",
      renderLatex: "\\tan\\theta = \\frac{v}{c}",
      latex: "\\tan\\theta = \\frac{v}{c}",
      text: "tanθ = v/c",
    },
    {
      id: "a5-lorentz-displacement-added",
      groupLabel: "Added",
      quantity: "Lorentz displacement interval",
      note: "Useful classroom helper",
      renderLatex: "\\Delta x' = \\gamma(\\Delta x - v\\Delta t)",
      latex: "\\Delta x' = \\gamma(\\Delta x - v\\Delta t)",
      text: "Δx' = γ(Δx - vΔt)",
    },
    {
      id: "a5-lorentz-time-interval-added",
      groupLabel: "Added",
      quantity: "Lorentz time interval",
      note: "Useful classroom helper",
      renderLatex:
        "\\Delta t' = \\gamma\\left(\\Delta t - \\frac{v\\Delta x}{c^{2}}\\right)",
      latex:
        "\\Delta t' = \\gamma\\left(\\Delta t - \\frac{v\\Delta x}{c^{2}}\\right)",
      text: "Δt' = γ(Δt - vΔx/c²)",
    },
    {
      id: "a5-interval-invariant-added",
      groupLabel: "Added",
      quantity: "Invariant interval form",
      note: "Useful classroom helper",
      renderLatex: "(ct')^{2} - (x')^{2} = (ct)^{2} - x^{2}",
      latex: "(ct')^{2} - (x')^{2} = (ct)^{2} - x^{2}",
      text: "(ct')² - (x')² = (ct)² - x²",
    },
    {
      id: "a5-total-energy-added",
      groupLabel: "Added",
      quantity: "Relativistic total energy",
      note: "HL classroom helper",
      renderLatex: "E = \\gamma m_{0}c^{2}",
      latex: "E = \\gamma m_{0}c^{2}",
      text: "E = γm₀c²",
    },
    {
      id: "a5-rest-energy-added",
      groupLabel: "Added",
      quantity: "Rest energy",
      note: "HL classroom helper",
      renderLatex: "E_{0} = m_{0}c^{2}",
      latex: "E_{0} = m_{0}c^{2}",
      text: "E₀ = m₀c²",
    },
    {
      id: "a5-relativistic-kinetic-energy-added",
      groupLabel: "Added",
      quantity: "Relativistic kinetic energy",
      note: "HL classroom helper",
      renderLatex: "E_{k} = (\\gamma - 1)m_{0}c^{2}",
      latex: "E_{k} = (\\gamma - 1)m_{0}c^{2}",
      text: "E_k = (γ - 1)m₀c²",
    },
    {
      id: "a5-relativistic-momentum-added",
      groupLabel: "Added",
      quantity: "Relativistic momentum",
      note: "HL classroom helper",
      renderLatex: "p = \\gamma m_{0}v",
      latex: "p = \\gamma m_{0}v",
      text: "p = γm₀v",
    },
    {
      id: "a5-energy-momentum-added",
      groupLabel: "Added",
      quantity: "Energy-momentum relation",
      note: "HL classroom helper",
      renderLatex: "E^{2} = p^{2}c^{2} + m_{0}^{2}c^{4}",
      latex: "E^{2} = p^{2}c^{2} + m_{0}^{2}c^{4}",
      text: "E² = p²c² + m₀²c⁴",
    },
    {
      id: "a5-electric-work-added",
      groupLabel: "Added",
      quantity: "Electric work and kinetic energy",
      note: "HL classroom helper",
      renderLatex: "qV = \\Delta E_{k}",
      latex: "qV = \\Delta E_{k}",
      text: "qV = ΔE_k",
    },
    {
      id: "a5-gravitational-redshift-added",
      groupLabel: "Added",
      quantity: "Gravitational redshift",
      note: "HL classroom helper",
      renderLatex: "\\frac{\\Delta f}{f} = \\frac{g\\Delta h}{c^{2}}",
      latex: "\\frac{\\Delta f}{f} = \\frac{g\\Delta h}{c^{2}}",
      text: "Δf/f = gΔh/c²",
    },
    {
      id: "a5-schwarzschild-radius-added",
      groupLabel: "Added",
      quantity: "Schwarzschild radius",
      note: "HL classroom helper",
      renderLatex: "R_{s} = \\frac{2GM}{c^{2}}",
      latex: "R_{s} = \\frac{2GM}{c^{2}}",
      text: "R_s = 2GM/c²",
    },
    {
      id: "a5-gravitational-time-dilation-added",
      groupLabel: "Added",
      quantity: "Gravitational time dilation",
      note: "HL classroom helper",
      renderLatex:
        "\\Delta t = \\frac{\\Delta t_{0}}{\\sqrt{1 - \\frac{R_{s}}{r}}}",
      latex: "\\Delta t = \\frac{\\Delta t_{0}}{\\sqrt{1 - \\frac{R_{s}}{r}}}",
      text: "Δt = Δt₀/√(1 - R_s/r)",
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
        ns: "a5-galilean-special-relativity-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "t' = \\gamma\\left(t - \\frac{vx}{c^{2}}\\right)",
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
