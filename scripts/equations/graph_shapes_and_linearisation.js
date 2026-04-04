const cards = [
  {
    id: "linear",
    family: "linear",
    title: "Direct proportion",
    relationship: "y ∝ x",
    equation: "y = kx",
    shape: "Straight line through the origin",
    linearise: "Plot y against x",
    straight_line: "y = kx",
    gradient: "gradient = k",
    intercept: "intercept = 0",
    examples: ["V = IR", "F = kx", "p = ρgh for fixed ρ and g"],
    x_label: "x",
    y_label: "y",
    orig_type: "line_origin",
    lin_type: "line_origin",
  },
  {
    id: "quadratic",
    family: "power",
    title: "Quadratic",
    relationship: "y ∝ x²",
    equation: "y = kx²",
    shape: "Upward curve through the origin",
    linearise: "Plot y against x²",
    straight_line: "y = k(x²)",
    gradient: "gradient = k",
    intercept: "intercept = 0",
    examples: ["s = ½at²", "Eₖ = ½mv²", "a = ω²r for fixed ω"],
    x_label: "x²",
    y_label: "y",
    orig_type: "quadratic",
    lin_type: "line_origin",
  },
  {
    id: "sqrt",
    family: "power",
    title: "Square-root",
    relationship: "y ∝ √x",
    equation: "y = k√x",
    shape: "Rises quickly, then flattens",
    linearise: "Plot y² against x",
    straight_line: "y² = k²x",
    gradient: "gradient = k²",
    intercept: "intercept = 0",
    examples: ["v = √(F/μ) so v² ∝ F", "T ∝ √l so T² ∝ l"],
    x_label: "x",
    y_label: "y²",
    orig_type: "sqrt",
    lin_type: "line_origin",
  },
  {
    id: "inverse",
    family: "inverse",
    title: "Inverse",
    relationship: "y ∝ 1/x",
    equation: "y = k/x",
    shape: "Decreasing hyperbola",
    linearise: "Plot y against 1/x",
    straight_line: "y = k(1/x)",
    gradient: "gradient = k",
    intercept: "intercept = 0",
    examples: ["p ∝ 1/V", "T = 1/f"],
    x_label: "1/x",
    y_label: "y",
    orig_type: "inverse",
    lin_type: "line_origin",
  },
  {
    id: "inverse_square",
    family: "inverse",
    title: "Inverse-square",
    relationship: "y ∝ 1/x²",
    equation: "y = k/x²",
    shape: "Steeply falling curve",
    linearise: "Plot y against 1/x²",
    straight_line: "y = k(1/x²)",
    gradient: "gradient = k",
    intercept: "intercept = 0",
    examples: ["g ∝ 1/r²", "E ∝ 1/r²", "I ∝ 1/r²"],
    x_label: "1/x²",
    y_label: "y",
    orig_type: "inverse_square",
    lin_type: "line_origin",
  },
  {
    id: "offset_linear",
    family: "linear",
    title: "Linear with intercept",
    relationship: "y = a + bx",
    equation: "y = a + bx",
    shape: "Straight line not through the origin",
    linearise: "Plot y against x",
    straight_line: "y = a + bx",
    gradient: "gradient = b",
    intercept: "intercept = a",
    examples: ["ε = ε₀ + Ir", "distance = initial position + vt"],
    x_label: "x",
    y_label: "y",
    orig_type: "line_intercept",
    lin_type: "line_intercept",
  },
  {
    id: "exp_growth",
    family: "exponential",
    title: "Exponential growth",
    relationship: "y ∝ e<sup>kx</sup>",
    equation: "y = Ae<sup>kx</sup>",
    shape: "Slow at first, then rises rapidly",
    linearise: "Plot ln y against x",
    straight_line: "ln y = ln A + kx",
    gradient: "gradient = k",
    intercept: "intercept = ln A",
    examples: ["Idealised population growth"],
    x_label: "x",
    y_label: "ln y",
    orig_type: "exp_growth",
    lin_type: "line_intercept",
  },
  {
    id: "exp_decay",
    family: "exponential",
    title: "Exponential decay",
    relationship: "y ∝ e<sup>−kx</sup>",
    equation: "y = Ae<sup>−kx</sup>",
    shape: "Falls quickly, then levels off",
    linearise: "Plot ln y against x",
    straight_line: "ln y = ln A - kx",
    gradient: "gradient = -k",
    intercept: "intercept = ln A",
    examples: [
      "A = A₀e<sup>−λt</sup>",
      "I = I₀e<sup>−μx</sup>",
      "Q = Q₀e<sup>−t/RC</sup>",
    ],
    x_label: "x",
    y_label: "ln y",
    orig_type: "exp_decay",
    lin_type: "line_negative",
  },
  {
    id: "power_law",
    family: "log",
    title: "General power law",
    relationship: "y ∝ xⁿ",
    equation: "y = Axⁿ",
    shape: "Depends on n. Negative n gives inverse-type curves.",
    linearise: "Plot ln y against ln x",
    straight_line: "ln y = ln A + n ln x",
    gradient: "gradient = n",
    intercept: "intercept = ln A",
    examples: ["T ∝ l<sup>1/2</sup>", "I ∝ A²", "F ∝ r<sup>−2</sup>"],
    x_label: "ln x",
    y_label: "ln y",
    orig_type: "power_family",
    lin_type: "line_intercept",
  },
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

const GRAPH = {
  left: 42,
  right: 188,
  top: 24,
  bottom: 136,
  axis: "#5d6574",
  curve: "#8b2f3d",
};

function svgTemplate(inner, xLabel, yLabel) {
  return `
    <svg class="graph-svg" viewBox="0 0 220 170" role="img" aria-label="Graph sketch">
      <rect x="0" y="0" width="220" height="170" fill="#fff"></rect>
      <line x1="38" y1="140" x2="200" y2="140" stroke="${GRAPH.axis}" stroke-width="2"/>
      <line x1="38" y1="140" x2="38" y2="18" stroke="${GRAPH.axis}" stroke-width="2"/>
      <text x="195" y="157" font-size="12" fill="${GRAPH.axis}" text-anchor="end">${xLabel}</text>
      <text x="20" y="24" font-size="12" fill="${GRAPH.axis}">${yLabel}</text>
      ${inner}
    </svg>
  `;
}

function plotPath(pathD, options = {}) {
  const {
    stroke = GRAPH.curve,
    width = 4,
    opacity = 1,
    dasharray = "",
  } = options;

  return `
    <path
      d="${pathD}"
      fill="none"
      stroke="${stroke}"
      stroke-width="${width}"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="${opacity}"
      ${dasharray ? `stroke-dasharray="${dasharray}"` : ""}
    />
  `;
}

function graphText(x, y, text, options = {}) {
  const {
    size = 9,
    anchor = "end",
    fill = "#7c8799",
    weight = "400",
  } = options;

  return `
    <text
      x="${x}"
      y="${y}"
      font-size="${size}"
      fill="${fill}"
      font-weight="${weight}"
      text-anchor="${anchor}"
    >
      ${text}
    </text>
  `;
}

function makeLinePath(x1, y1, x2, y2) {
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

function makeFunctionPath(fn, options = {}) {
  const {
    xMin = 0,
    xMax = 1,
    samples = 120,
    left = GRAPH.left,
    right = GRAPH.right,
    top = GRAPH.top,
    bottom = GRAPH.bottom,
    yMin = null,
    yMax = null,
  } = options;

  const points = [];

  for (let i = 0; i < samples; i += 1) {
    const t = i / (samples - 1);
    const x = xMin + (xMax - xMin) * t;
    const y = fn(x);

    if (Number.isFinite(y)) {
      points.push({ x, y });
    }
  }

  if (!points.length) {
    return makeLinePath(left, bottom, right, top);
  }

  const minY = yMin ?? Math.min(...points.map((p) => p.y));
  const maxY = yMax ?? Math.max(...points.map((p) => p.y));
  const yRange = Math.max(maxY - minY, 1e-9);
  const xRange = Math.max(xMax - xMin, 1e-9);

  return points
    .map((p, index) => {
      const sx = left + ((p.x - xMin) / xRange) * (right - left);
      const sy = bottom - ((p.y - minY) / yRange) * (bottom - top);
      return `${index === 0 ? "M" : "L"} ${sx.toFixed(2)} ${sy.toFixed(2)}`;
    })
    .join(" ");
}

function renderRepresentativePowerFamily() {
  const sqrtPath = makeFunctionPath((x) => Math.sqrt(x), {
    xMin: 0,
    xMax: 1,
    yMin: 0,
    yMax: 1,
  });

  const linearPath = makeFunctionPath((x) => x, {
    xMin: 0,
    xMax: 1,
    yMin: 0,
    yMax: 1,
  });

  const quadraticPath = makeFunctionPath((x) => x * x, {
    xMin: 0,
    xMax: 1,
    yMin: 0,
    yMax: 1,
  });

  return `
    ${plotPath(sqrtPath, { opacity: 0.45 })}
    ${plotPath(linearPath, { opacity: 0.7 })}
    ${plotPath(quadraticPath, { opacity: 1 })}
    ${graphText(186, 32, "depends on n", { size: 8.5, fill: "#7c8799" })}
  `;
}

function renderGraph(type, xLabel, yLabel) {
  let inner = "";

  switch (type) {
    case "line_origin":
      inner = plotPath(makeLinePath(42, 136, 188, 32));
      break;

    case "line_intercept":
      inner =
        plotPath(makeLinePath(42, 112, 188, 40)) +
        plotPath(makeLinePath(38, 112, 200, 112), {
          stroke: GRAPH.curve,
          width: 1.4,
          opacity: 0.25,
          dasharray: "4 4",
        });
      break;

    case "line_negative":
      inner = plotPath(makeLinePath(42, 40, 188, 128));
      break;

    case "quadratic":
      inner = plotPath(makeFunctionPath((x) => x * x));
      break;

    case "cubic":
      inner = plotPath(makeFunctionPath((x) => x * x * x));
      break;

    case "sqrt":
      inner = plotPath(makeFunctionPath((x) => Math.sqrt(x)));
      break;

    case "inverse":
      inner = plotPath(
        makeFunctionPath((x) => 1 / x, {
          xMin: 0.18,
          xMax: 1,
        }),
      );
      break;

    case "inverse_square":
      inner = plotPath(
        makeFunctionPath((x) => 1 / (x * x), {
          xMin: 0.22,
          xMax: 1,
        }),
      );
      break;

    case "exp_growth":
      inner = plotPath(makeFunctionPath((x) => Math.exp(4 * x)));
      break;

    case "exp_decay":
      inner = plotPath(makeFunctionPath((x) => Math.exp(-4 * x)));
      break;

    case "power_family":
      inner = renderRepresentativePowerFamily();
      break;

    default:
      inner = plotPath(makeLinePath(42, 136, 188, 32));
      break;
  }

  return svgTemplate(inner, xLabel, yLabel);
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
              <ul class="example-list">${card.examples.map((ex) => `<li>${ex}</li>`).join("")}</ul>
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

  bar.innerHTML = families
    .map(
      (family) => `
        <button class="filter-chip ${family.id === activeFamily ? "active" : ""}" data-family="${family.id}">
          ${family.label}
        </button>
      `,
    )
    .join("");
}

function renderCards() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  const visibleCards =
    activeFamily === "all"
      ? cards
      : cards.filter((card) => card.family === activeFamily);

  grid.innerHTML = visibleCards.map(cardHtml).join("");
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
