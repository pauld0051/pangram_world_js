(() => {
  const equationsData = [
    {
      id: "d1-gravitational-force-booklet",
      groupLabel: "Booklet",
      quantity: "Universal gravitation",
      note: "Force between two point masses",
      renderLatex: "F = G\\frac{m_{1}m_{2}}{r^{2}}",
      latex: "F = G\\frac{m_{1}m_{2}}{r^{2}}",
      text: "F = Gm₁m₂/r²",
    },
    {
      id: "d1-field-strength-booklet",
      groupLabel: "Booklet",
      quantity: "Gravitational field strength",
      note: "Field strength around a spherical mass",
      renderLatex: "g = \\frac{F}{m} = G\\frac{M}{r^{2}}",
      latex: "g = \\frac{F}{m} = G\\frac{M}{r^{2}}",
      text: "g = F/m = GM/r²",
    },

    {
      id: "d1-potential-energy-added",
      groupLabel: "Booklet",
      quantity: "Gravitational potential energy",
      note: "Zero taken at infinity",
      renderLatex: "E_{\\mathrm{p}} = -G\\frac{m_{1}m_{2}}{r}",
      latex: "E_{\\mathrm{p}} = -G\\frac{m_{1}m_{2}}{r}",
      text: "E_p = -Gm₁m₂/r",
    },
    {
      id: "d1-gravitational-potential-added",
      groupLabel: "Booklet",
      quantity: "Gravitational potential",
      note: "Potential per unit mass",
      renderLatex: "V_{\\mathrm{g}} = -G\\frac{M}{r}",
      latex: "V_{\\mathrm{g}} = -G\\frac{M}{r}",
      text: "V_g = -GM/r",
    },
    {
      id: "d1-potential-from-energy-added",
      groupLabel: "Booklet",
      quantity: "Potential from potential energy",
      note: "Potential energy per unit mass",
      renderLatex: "V_{\\mathrm{g}} = \\frac{E_{\\mathrm{p}}}{m}",
      latex: "V_{\\mathrm{g}} = \\frac{E_{\\mathrm{p}}}{m}",
      text: "V_g = E_p/m",
    },
    {
      id: "d1-field-potential-gradient-added",
      groupLabel: "Booklet",
      quantity: "Field from potential gradient",
      note: "Field strength as the negative gradient of potential",
      renderLatex: "g = -\\frac{\\Delta V_{\\mathrm{g}}}{\\Delta r}",
      latex: "g = -\\frac{\\Delta V_{\\mathrm{g}}}{\\Delta r}",
      text: "g = -ΔV_g/Δr",
    },
    {
      id: "d1-work-potential-added",
      groupLabel: "Added",
      quantity: "Work and potential difference",
      note: "Work done when moving a mass through a potential difference",
      renderLatex: "W = m\\Delta V_{\\mathrm{g}}",
      latex: "W = m\\Delta V_{\\mathrm{g}}",
      text: "W = mΔV_g",
    },
    {
      id: "d1-potential-difference-added",
      groupLabel: "Booklet",
      quantity: "Potential difference between two radii",
      note: "Difference in gravitational potential",
      renderLatex: "\\Delta V_{\\mathrm{g}} = GM\\left(\\frac{1}{r_{2}} - \\frac{1}{r_{1}}\\right)",
      latex: "\\Delta V_{\\mathrm{g}} = GM\\left(\\frac{1}{r_{2}} - \\frac{1}{r_{1}}\\right)",
      text: "ΔV_g = GM(1/r₂ - 1/r₁)",
    },
    {
      id: "d1-escape-speed-added",
      groupLabel: "Booklet",
      quantity: "Escape speed",
      note: "Minimum speed needed to escape a spherical mass",
      renderLatex: "v_{\\mathrm{esc}} = \\sqrt{\\frac{2GM}{r}}",
      latex: "v_{\\mathrm{esc}} = \\sqrt{\\frac{2GM}{r}}",
      text: "v_esc = √(2GM/r)",
    },
    {
      id: "d1-orbital-speed-added",
      groupLabel: "Booklet",
      quantity: "Orbital speed",
      note: "Speed for a circular orbit",
      renderLatex: "v_{\\mathrm{orbital}} = \\sqrt{\\frac{GM}{r}}",
      latex: "v_{\\mathrm{orbital}} = \\sqrt{\\frac{GM}{r}}",
      text: "v_orbital = √(GM/r)",
    },
    {
      id: "d1-orbital-period-added",
      groupLabel: "Added",
      quantity: "Orbital period",
      note: "Period of a circular orbit",
      renderLatex: "T = 2\\pi\\sqrt{\\frac{r^{3}}{GM}}",
      latex: "T = 2\\pi\\sqrt{\\frac{r^{3}}{GM}}",
      text: "T = 2π√(r³/GM)",
    },
    {
      id: "d1-angular-speed-orbit-added",
      groupLabel: "Added",
      quantity: "Orbital angular speed",
      note: "Angular speed in a circular orbit",
      renderLatex: "\\omega = \\sqrt{\\frac{GM}{r^{3}}}",
      latex: "\\omega = \\sqrt{\\frac{GM}{r^{3}}}",
      text: "ω = √(GM/r³)",
    },
    {
      id: "d1-kepler-third-law-added",
      groupLabel: "Added",
      quantity: "Kepler's third law",
      note: "For circular or nearly circular orbits around the same central mass",
      renderLatex: "T^{2} = \\frac{4\\pi^{2}}{GM}r^{3}",
      latex: "T^{2} = \\frac{4\\pi^{2}}{GM}r^{3}",
      text: "T² = (4π²/GM)r³",
    },
    {
      id: "d1-total-energy-orbit-added",
      groupLabel: "Added",
      quantity: "Total energy in circular orbit",
      note: "Kinetic plus potential energy",
      renderLatex: "E_{\\mathrm{T}} = -\\frac{GMm}{2r}",
      latex: "E_{\\mathrm{T}} = -\\frac{GMm}{2r}",
      text: "E_T = -GMm/(2r)",
    },
    {
      id: "d1-kinetic-energy-orbit-added",
      groupLabel: "Added",
      quantity: "Orbital kinetic energy",
      note: "Kinetic energy in a circular orbit",
      renderLatex: "E_{\\mathrm{k}} = \\frac{GMm}{2r}",
      latex: "E_{\\mathrm{k}} = \\frac{GMm}{2r}",
      text: "E_k = GMm/(2r)",
    },
    {
      id: "d1-force-centripetal-added",
      groupLabel: "Added",
      quantity: "Gravitation provides centripetal force",
      note: "Useful orbit relation",
      renderLatex: "G\\frac{Mm}{r^{2}} = \\frac{mv^{2}}{r}",
      latex: "G\\frac{Mm}{r^{2}} = \\frac{mv^{2}}{r}",
      text: "GMm/r² = mv²/r",
    },
    {
      id: "d1-near-surface-potential-energy-added",
      groupLabel: "Added",
      quantity: "Near-surface potential energy",
      note: "Uniform-field approximation near a planet's surface",
      renderLatex: "E_{\\mathrm{p}} = mgh",
      latex: "E_{\\mathrm{p}} = mgh",
      text: "E_p = mgh",
    },
    {
      id: "d1-near-surface-potential-difference-added",
      groupLabel: "Added",
      quantity: "Near-surface potential difference",
      note: "Uniform-field approximation near a planet's surface",
      renderLatex: "\\Delta V_{\\mathrm{g}} = g\\Delta h",
      latex: "\\Delta V_{\\mathrm{g}} = g\\Delta h",
      text: "ΔV_g = gΔh",
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
        ns: "d1-gravitational-fields-generator",
        title: "Quick LaTeX generator",
        subtitle:
          "Render a clean equation PNG, then copy the raw LaTeX if needed.",
        placeholder: "g = \\frac{F}{m} = G\\frac{M}{r^{2}}",
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
