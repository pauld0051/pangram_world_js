
const cards = [
  {
    "id": "linear",
    "family": "linear",
    "title": "Direct proportion",
    "relationship": "y ∝ x",
    "equation": "y = kx",
    "shape": "Straight line through the origin",
    "linearise": "Plot y against x",
    "straight_line": "y = kx",
    "gradient": "gradient = k",
    "intercept": "intercept = 0",
    "examples": [
      "V = IR",
      "F = kx",
      "p = ρgh for fixed ρ and g"
    ],
    "x_label": "x",
    "y_label": "y",
    "orig_type": "line_origin",
    "lin_type": "line_origin"
  },
  {
    "id": "quadratic",
    "family": "power",
    "title": "Quadratic",
    "relationship": "y ∝ x²",
    "equation": "y = kx²",
    "shape": "Upward curve through the origin",
    "linearise": "Plot y against x²",
    "straight_line": "y = k(x²)",
    "gradient": "gradient = k",
    "intercept": "intercept = 0",
    "examples": [
      "s = ½at²",
      "Eₖ = ½mv²",
      "a = ω²r for fixed ω"
    ],
    "x_label": "x²",
    "y_label": "y",
    "orig_type": "quadratic",
    "lin_type": "line_origin"
  },
  {
    "id": "sqrt",
    "family": "power",
    "title": "Square-root",
    "relationship": "y ∝ √x",
    "equation": "y = k√x",
    "shape": "Rises quickly, then flattens",
    "linearise": "Plot y² against x",
    "straight_line": "y² = k²x",
    "gradient": "gradient = k²",
    "intercept": "intercept = 0",
    "examples": [
      "v = √(F/μ) so v² ∝ F",
      "T ∝ √l so T² ∝ l"
    ],
    "x_label": "x",
    "y_label": "y²",
    "orig_type": "sqrt",
    "lin_type": "line_origin"
  },
  {
    "id": "inverse",
    "family": "inverse",
    "title": "Inverse",
    "relationship": "y ∝ 1/x",
    "equation": "y = k/x",
    "shape": "Decreasing hyperbola",
    "linearise": "Plot y against 1/x",
    "straight_line": "y = k(1/x)",
    "gradient": "gradient = k",
    "intercept": "intercept = 0",
    "examples": [
      "p ∝ 1/V",
      "T = 1/f"
    ],
    "x_label": "1/x",
    "y_label": "y",
    "orig_type": "inverse",
    "lin_type": "line_origin"
  },
  {
    "id": "inverse_square",
    "family": "inverse",
    "title": "Inverse-square",
    "relationship": "y ∝ 1/x²",
    "equation": "y = k/x²",
    "shape": "Steeply falling curve",
    "linearise": "Plot y against 1/x²",
    "straight_line": "y = k(1/x²)",
    "gradient": "gradient = k",
    "intercept": "intercept = 0",
    "examples": [
      "g ∝ 1/r²",
      "E ∝ 1/r²",
      "I ∝ 1/r²"
    ],
    "x_label": "1/x²",
    "y_label": "y",
    "orig_type": "inverse_square",
    "lin_type": "line_origin"
  },
  {
    "id": "offset_linear",
    "family": "linear",
    "title": "Linear with intercept",
    "relationship": "y = a + bx",
    "equation": "y = a + bx",
    "shape": "Straight line not through the origin",
    "linearise": "Plot y against x",
    "straight_line": "y = a + bx",
    "gradient": "gradient = b",
    "intercept": "intercept = a",
    "examples": [
      "ε = ε₀ + Ir",
      "distance = initial position + vt"
    ],
    "x_label": "x",
    "y_label": "y",
    "orig_type": "line_intercept",
    "lin_type": "line_intercept"
  },
  {
    "id": "exp_growth",
    "family": "exponential",
    "title": "Exponential growth",
    "relationship": "y ∝ e^(kx)",
    "equation": "y = Ae^(kx)",
    "shape": "Slow at first, then rises rapidly",
    "linearise": "Plot ln y against x",
    "straight_line": "ln y = ln A + kx",
    "gradient": "gradient = k",
    "intercept": "intercept = ln A",
    "examples": [
      "Idealised population growth"
    ],
    "x_label": "x",
    "y_label": "ln y",
    "orig_type": "exp_growth",
    "lin_type": "line_intercept"
  },
  {
    "id": "exp_decay",
    "family": "exponential",
    "title": "Exponential decay",
    "relationship": "y ∝ e^(-kx)",
    "equation": "y = Ae^(-kx)",
    "shape": "Falls quickly, then levels off",
    "linearise": "Plot ln y against x",
    "straight_line": "ln y = ln A - kx",
    "gradient": "gradient = -k",
    "intercept": "intercept = ln A",
    "examples": [
      "A = A₀e^(-λt)",
      "I = I₀e^(-μx)",
      "Q = Q₀e^(-t/RC)"
    ],
    "x_label": "x",
    "y_label": "ln y",
    "orig_type": "exp_decay",
    "lin_type": "line_negative"
  },
  {
    "id": "power_law",
    "family": "log",
    "title": "General power law",
    "relationship": "y ∝ xⁿ",
    "equation": "y = Axⁿ",
    "shape": "Depends on n",
    "linearise": "Plot ln y against ln x",
    "straight_line": "ln y = ln A + n ln x",
    "gradient": "gradient = n",
    "intercept": "intercept = ln A",
    "examples": [
      "T ∝ l^(1/2)",
      "I ∝ A²",
      "many scaling laws"
    ],
    "x_label": "ln x",
    "y_label": "ln y",
    "orig_type": "power_generic",
    "lin_type": "line_intercept"
  }
];

const families = [
  { id: "all", label: "All" },
  { id: "linear", label: "Linear" },
  { id: "power", label: "Power" },
  { id: "inverse", label: "Inverse" },
  { id: "exponential", label: "Exponential" },
  { id: "log", label: "Log plots" },
];

let activeFamily = "all";

function svgTemplate(pathD, xLabel, yLabel, extra = "") {
  return `
    <svg class="graph-svg" viewBox="0 0 220 170" role="img" aria-label="Graph sketch">
      <rect x="0" y="0" width="220" height="170" fill="#fff"></rect>
      <line x1="38" y1="140" x2="200" y2="140" stroke="#5d6574" stroke-width="2"/>
      <line x1="38" y1="140" x2="38" y2="18" stroke="#5d6574" stroke-width="2"/>
      <text x="195" y="157" font-size="12" fill="#5d6574" text-anchor="end">${xLabel}</text>
      <text x="20" y="24" font-size="12" fill="#5d6574">${yLabel}</text>
      <path d="${pathD}" fill="none" stroke="#7b2d39" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      ${extra}
    </svg>
  `;
}

function graphPath(type) {
  switch (type) {
    case "line_origin": return "M 42 136 L 188 32";
    case "line_intercept": return "M 42 112 L 188 40";
    case "line_negative": return "M 42 40 L 188 128";
    case "quadratic": return "M 44 136 C 72 134, 96 126, 120 108 C 146 88, 166 62, 188 28";
    case "cubic": return "M 44 136 C 86 134, 110 122, 132 96 C 150 74, 166 48, 188 20";
    case "sqrt": return "M 44 136 C 64 92, 96 62, 140 42 C 162 32, 176 28, 188 24";
    case "inverse": return "M 48 30 C 72 54, 96 78, 118 96 C 144 116, 166 126, 188 132";
    case "inverse_square": return "M 46 18 C 66 58, 92 92, 126 116 C 150 128, 170 134, 188 137";
    case "exp_growth": return "M 44 132 C 90 132, 122 128, 144 114 C 164 100, 178 72, 188 22";
    case "exp_decay": return "M 44 24 C 74 42, 102 68, 132 98 C 156 118, 172 128, 188 134";
    case "power_generic": return "M 44 128 C 78 112, 108 90, 134 70 C 158 52, 174 40, 188 30";
    default: return "M 42 136 L 188 32";
  }
}

function renderGraph(type, xLabel, yLabel) {
  const extras = type === "line_intercept"
    ? '<line x1="38" y1="112" x2="200" y2="112" stroke="#7b2d39" stroke-dasharray="4 4" opacity="0.25"/>'
    : '';
  return svgTemplate(graphPath(type), xLabel, yLabel, extras);
}

function cardHtml(card) {
  const originalX = "x";
  const originalY = "y";
  return `
    <div class="col-12 col-md-6 col-xl-4">
      <article class="card graph-card shadow-sm h-100">
        <div class="card-body">
          <span class="graph-tag">${card.family}</span>
          <h3>${card.title}</h3>
          <div class="relationship-line">${card.relationship}</div>
          <div class="equation-line">${card.equation}</div>

          <div class="mini-graphs">
            <div class="mini-graph-card">
              <div class="mini-graph-title">Original graph</div>
              ${renderGraph(card.orig_type, originalX, originalY)}
            </div>
            <div class="mini-graph-card">
              <div class="mini-graph-title">Linearised plot</div>
              ${renderGraph(card.lin_type, card.x_label, card.y_label)}
            </div>
          </div>

          <div class="graph-details">
            <div class="graph-detail">
              <span class="label">Shape</span>
              <div class="value">${card.shape}</div>
            </div>
            <div class="graph-detail">
              <span class="label">Linearise by plotting</span>
              <div class="value">${card.linearise}</div>
            </div>
            <div class="graph-detail">
              <span class="label">Straight-line form</span>
              <div class="value">${card.straight_line}</div>
            </div>
            <div class="graph-detail">
              <span class="label">Gradient and intercept</span>
              <div class="value">${card.gradient}; ${card.intercept}</div>
            </div>
            <div class="graph-detail">
              <span class="label">Physics examples</span>
              <ul class="example-list">${card.examples.map(ex => `<li>${ex}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderFilters() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;
  bar.innerHTML = families.map(f => `
    <button class="filter-chip ${f.id === activeFamily ? "active" : ""}" data-family="${f.id}">
      ${f.label}
    </button>
  `).join("");
}

function renderCards() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;
  const visible = activeFamily === "all" ? cards : cards.filter(card => card.family === activeFamily);
  grid.innerHTML = visible.map(cardHtml).join("");
}

function bindEvents() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;
  bar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-family]");
    if (!button) return;
    activeFamily = button.dataset.family;
    renderFilters();
    renderCards();
  });
}

function init() {
  renderFilters();
  renderCards();
  bindEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
