const symbolsData = [
  {
    "id": "cell",
    "name": "Cell",
    "note": "Single-cell power source",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "cell power source battery circuit booklet ib"
  },
  {
    "id": "battery",
    "name": "Battery",
    "note": "Multiple-cell power source",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "battery power source circuit booklet ib"
  },
  {
    "id": "ac_supply",
    "name": "AC supply",
    "note": "Included in the 2016 booklet",
    "sources": [
      "legacy"
    ],
    "tags": "ac alternating current supply source legacy 2016"
  },
  {
    "id": "switch",
    "name": "Switch",
    "note": "Open switch symbol",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "switch open circuit booklet ib"
  },
  {
    "id": "voltmeter",
    "name": "Voltmeter",
    "note": "Measures potential difference",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "voltmeter voltage potential difference meter booklet ib"
  },
  {
    "id": "ammeter",
    "name": "Ammeter",
    "note": "Measures current",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "ammeter current meter booklet ib"
  },
  {
    "id": "resistor",
    "name": "Resistor",
    "note": "Fixed resistor",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "resistor fixed resistance booklet ib"
  },
  {
    "id": "variable_resistor",
    "name": "Variable resistor",
    "note": "Adjustable resistance",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "variable resistor rheostat booklet ib"
  },
  {
    "id": "ldr",
    "name": "Light-dependent resistor (LDR)",
    "note": "Resistance changes with light level",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "ldr light dependent resistor photoresistor booklet ib"
  },
  {
    "id": "thermistor",
    "name": "Thermistor",
    "note": "Resistance changes with temperature",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "thermistor temperature resistor booklet ib"
  },
  {
    "id": "potentiometer",
    "name": "Potentiometer",
    "note": "Sliding or tapping contact on a resistor",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "potentiometer variable potential divider booklet ib"
  },
  {
    "id": "lamp",
    "name": "Lamp",
    "note": "Filament lamp symbol",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "lamp bulb filament booklet ib"
  },
  {
    "id": "led",
    "name": "Light-emitting diode (LED)",
    "note": "Included in the 2025 booklet",
    "sources": [
      "current"
    ],
    "tags": "led light emitting diode booklet current 2025"
  },
  {
    "id": "transformer",
    "name": "Transformer",
    "note": "Included in the 2016 booklet",
    "sources": [
      "legacy"
    ],
    "tags": "transformer legacy 2016 booklet"
  },
  {
    "id": "heating_element",
    "name": "Heating element",
    "note": "Resistive heater symbol",
    "sources": [
      "current",
      "legacy"
    ],
    "tags": "heating element heater booklet ib"
  },
  {
    "id": "motor",
    "name": "Motor",
    "note": "Included in the 2025 booklet",
    "sources": [
      "current"
    ],
    "tags": "motor current 2025 booklet"
  },
  {
    "id": "earth",
    "name": "Earth (ground)",
    "note": "Included in the 2025 booklet",
    "sources": [
      "current"
    ],
    "tags": "earth ground current 2025 booklet"
  },
  {
    "id": "diode",
    "name": "Diode",
    "note": "Included in the 2016 booklet",
    "sources": [
      "legacy"
    ],
    "tags": "diode legacy 2016 booklet"
  },
  {
    "id": "capacitor",
    "name": "Capacitor",
    "note": "Included in the 2016 booklet",
    "sources": [
      "legacy"
    ],
    "tags": "capacitor legacy 2016 booklet"
  },
  {
    "id": "fuse",
    "name": "Fuse",
    "note": "Common extra symbol",
    "sources": [
      "added"
    ],
    "tags": "fuse protection added extra"
  },
  {
    "id": "inductor",
    "name": "Inductor",
    "note": "Common extra symbol",
    "sources": [
      "added"
    ],
    "tags": "inductor coil choke added extra"
  },
  {
    "id": "variable_capacitor",
    "name": "Variable capacitor",
    "note": "Common extra symbol",
    "sources": [
      "added"
    ],
    "tags": "variable capacitor added extra"
  },
  {
    "id": "buzzer",
    "name": "Buzzer",
    "note": "Common extra symbol",
    "sources": [
      "added"
    ],
    "tags": "buzzer sound alarm added extra"
  },
  {
    "id": "loudspeaker",
    "name": "Loudspeaker",
    "note": "Common extra symbol",
    "sources": [
      "added"
    ],
    "tags": "loudspeaker speaker sound audio added extra"
  },
  {
    "id": "microphone",
    "name": "Microphone",
    "note": "Common extra symbol",
    "sources": [
      "added"
    ],
    "tags": "microphone audio input added extra"
  }
];

const state = {
  filter: "all",
  search: "",
  selectedId: "cell",
};

const elements = {
  searchInput: document.getElementById("searchSymbols"),
  resultsCount: document.getElementById("resultsCount"),
  symbolsGrid: document.getElementById("symbolsGrid"),
  selectedName: document.getElementById("selectedName"),
  selectedNote: document.getElementById("selectedNote"),
  selectedRender: document.getElementById("selectedRender"),
  selectedSourceBadges: document.getElementById("selectedSourceBadges"),
  copyToast: document.getElementById("copyToast"),
  downloadSelectedBtn: document.getElementById("downloadSelectedBtn"),
  copySelectedSvgBtn: document.getElementById("copySelectedSvgBtn"),
  copySelectedNameBtn: document.getElementById("copySelectedNameBtn"),
};

let toastTimer = null;

const sourceLabels = {
  current: "IB booklet 2025",
  legacy: "IB booklet 2016",
  added: "Added",
};

function getSymbolById(id) {
  return symbolsData.find((item) => item.id === id) || symbolsData[0];
}

function matchesSearch(symbol, query) {
  if (!query) return true;
  const haystack = [symbol.name, symbol.note || "", symbol.tags || ""].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function getVisibleSymbols() {
  return symbolsData.filter((symbol) => {
    const matchesFilter =
      state.filter === "all" ? true : symbol.sources.includes(state.filter);
    return matchesFilter && matchesSearch(symbol, state.search);
  });
}

function ensureValidSelection(visibleSymbols) {
  const visibleIds = new Set(visibleSymbols.map((item) => item.id));
  if (!visibleIds.has(state.selectedId)) {
    state.selectedId = (visibleSymbols[0] || symbolsData[0]).id;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function svgShell(inner, title) {
  return `
    <svg class="symbol-svg" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(title)}">
      <title>${escapeHtml(title)}</title>
      <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        ${inner}
      </g>
    </svg>
  `;
}

function textSvg(x, y, value, size = 22) {
  return `<text x="${x}" y="${y}" font-size="${size}" text-anchor="middle" fill="currentColor" stroke="none" font-family="Roboto, Arial, sans-serif">${value}</text>`;
}

function arrowHead(x, y, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const a1 = rad + Math.PI * 0.82;
  const a2 = rad - Math.PI * 0.82;
  const len = 9;
  const x1 = x + Math.cos(a1) * len;
  const y1 = y + Math.sin(a1) * len;
  const x2 = x + Math.cos(a2) * len;
  const y2 = y + Math.sin(a2) * len;
  return `<line x1="${x}" y1="${y}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" />
          <line x1="${x}" y1="${y}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" />`;
}

function line(x1, y1, x2, y2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
}

function rect(x, y, w, h) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" />`;
}

function circle(cx, cy, r) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" />`;
}

function getSymbolSvgMarkup(id) {
  let inner = "";

  switch (id) {
    case "cell":
      inner = `
    ${line(10, 60, 80, 60)}
    ${line(80, 28, 80, 92)}
    ${line(102, 42, 102, 78)}
    ${line(102, 60, 210, 60)}
  `;
      break;

    case "battery":
      inner = `
    ${line(10, 60, 60, 60)}
    ${line(60, 28, 60, 92)}
    ${line(82, 42, 82, 78)}
    <line x1="82" y1="60" x2="110" y2="60" stroke-dasharray="4 4" />
    ${line(110, 28, 110, 92)}
    ${line(132, 42, 132, 78)}
    ${line(132, 60, 210, 60)}
  `;
      break;

    case "ac_supply":
      inner = `
    ${line(10, 60, 75, 60)}
    ${circle(110, 60, 35)}
    <path d="M 86 60 C 94 48, 102 48, 110 60 C 118 72, 126 72, 134 60" />
    ${line(145, 60, 210, 60)}
  `;
      break;

    case "switch":
      inner = `
    ${line(10, 60, 110, 60)}
    ${line(110, 60, 156, 34)}
    ${line(172, 60, 210, 60)}
  `;
      break;

    case "voltmeter":
      inner =
        `
        ${line(10, 60, 72, 60)}
        ${circle(110, 60, 38)}
        ${line(148, 60, 210, 60)}
      ` + textSvg(110, 68, "V");
      break;

    case "ammeter":
      inner =
        `
        ${line(10, 60, 72, 60)}
        ${circle(110, 60, 38)}
        ${line(148, 60, 210, 60)}
      ` + textSvg(110, 68, "A");
      break;

    case "resistor":
      inner = `
        ${line(10, 60, 60, 60)}
        ${rect(60, 42, 100, 36)}
        ${line(160, 60, 210, 60)}
      `;
      break;

    case "variable_resistor":
      inner =
        `
        ${line(10, 60, 60, 60)}
        ${rect(60, 42, 100, 36)}
        ${line(160, 60, 210, 60)}
        ${line(52, 98, 146, 22)}
      ` + arrowHead(146, 22, -45);
      break;

    case "ldr":
      inner =
        `
    ${line(10, 72, 60, 72)}
    ${rect(60, 54, 100, 36)}
    ${line(160, 72, 210, 72)}
    ${line(50, 20, 84, 48)}
    ${line(68, 8, 102, 36)}
  ` +
        arrowHead(84, 48, 40) +
        arrowHead(102, 36, 40);
      break;

    case "thermistor":
      inner = `
    ${line(10, 60, 60, 60)}
    ${rect(60, 42, 100, 36)}
    ${line(160, 60, 210, 60)}
    ${line(54, 92, 146, 24)}
    ${line(146, 24, 170, 24)}
  `;
      break;

    case "potentiometer":
      inner =
        `
        ${line(10, 60, 60, 60)}
        ${rect(60, 42, 100, 36)}
        ${line(160, 60, 210, 60)}
        ${line(110, 14, 110, 41)}
      ` + arrowHead(110, 41, 90);
      break;

    case "lamp":
      inner = `
        ${line(10, 60, 72, 60)}
        ${circle(110, 60, 38)}
        ${line(148, 60, 210, 60)}
        ${line(88, 38, 132, 82)}
        ${line(132, 38, 88, 82)}
      `;
      break;

    case "led":
      inner =
        `
    ${line(10, 68, 64, 68)}
    <polygon points="64,42 64,94 118,68" fill="none" />
    ${line(128, 40, 128, 96)}
    ${line(128, 68, 210, 68)}
    ${line(94, 30, 112, 4)}
    ${line(112, 42, 130, 16)}
  ` +
        arrowHead(112, 4, -55) +
        arrowHead(130, 16, -55);
      break;

    case "transformer":
      inner = `
    ${line(10, 44, 56, 44)}
    ${line(10, 76, 56, 76)}

    <path d="
      M 56 44
      C 74 44, 74 52, 56 52
      C 74 52, 74 60, 56 60
      C 74 60, 74 68, 56 68
      C 74 68, 74 76, 56 76
    " />

    ${line(102, 38, 102, 82)}
    ${line(118, 38, 118, 82)}

    <path d="
      M 164 44
      C 146 44, 146 52, 164 52
      C 146 52, 146 60, 164 60
      C 146 60, 146 68, 164 68
      C 146 68, 146 76, 164 76
    " />

    ${line(164, 44, 210, 44)}
    ${line(164, 76, 210, 76)}
  `;
      break;

    case "heating_element":
      inner = `
        ${line(10, 60, 58, 60)}
        ${rect(58, 42, 104, 36)}
        ${line(162, 60, 210, 60)}
        ${line(84, 42, 84, 78)}
        ${line(110, 42, 110, 78)}
        ${line(136, 42, 136, 78)}
      `;
      break;

    case "motor":
      inner =
        `
        ${line(10, 60, 72, 60)}
        ${circle(110, 60, 38)}
        ${line(148, 60, 210, 60)}
      ` + textSvg(110, 68, "M");
      break;

    case "earth":
      inner = `
    ${line(110, 18, 110, 56)}
    ${line(82, 56, 138, 56)}
    ${line(90, 66, 130, 66)}
    ${line(100, 76, 120, 76)}
  `;
      break;

    case "diode":
      inner = `
        ${line(10, 60, 64, 60)}
        <polygon points="64,34 64,86 118,60" fill="none" />
        ${line(128, 32, 128, 88)}
        ${line(128, 60, 210, 60)}
      `;
      break;

    case "capacitor":
      inner = `
    ${line(10, 60, 92, 60)}
    ${line(92, 30, 92, 90)}
    ${line(128, 30, 128, 90)}
    ${line(128, 60, 210, 60)}
  `;
      break;

    case "fuse":
      inner = `
    ${line(10, 60, 210, 60)}
    ${rect(74, 48, 72, 24)}
  `;
      break;

    case "inductor":
      inner = `
        ${line(10, 60, 54, 60)}
        <path d="M 54 60 C 60 30, 72 30, 78 60 C 84 30, 96 30, 102 60 C 108 30, 120 30, 126 60 C 132 30, 144 30, 150 60" />
        ${line(150, 60, 210, 60)}
      `;
      break;

    case "variable_capacitor":
      inner =
        `
    ${line(10, 60, 92, 60)}
    ${line(92, 30, 92, 90)}
    ${line(128, 30, 128, 90)}
    ${line(128, 60, 210, 60)}
    ${line(64, 94, 148, 20)}
  ` + arrowHead(148, 20, -42);
      break;

    case "buzzer":
      inner = `
        ${line(10, 60, 70, 60)}
        ${circle(94, 60, 24)}
        ${line(118, 60, 136, 60)}
        <path d="M 146 44 Q 162 60 146 76" />
        <path d="M 160 36 Q 182 60 160 84" />
        ${line(136, 60, 210, 60)}
      `;
      break;

    case "loudspeaker":
      inner = `
        ${line(10, 60, 74, 60)}
        <polygon points="74,42 106,42 136,28 136,92 106,78 74,78" fill="none" />
        <path d="M 148 44 Q 166 60 148 76" />
        <path d="M 162 34 Q 188 60 162 86" />
      `;
      break;

    case "microphone":
      inner = `
        ${line(10, 60, 76, 60)}
        ${circle(100, 60, 24)}
        ${line(124, 60, 154, 60)}
        ${line(154, 60, 154, 92)}
        ${line(144, 92, 164, 92)}
        ${line(149, 100, 159, 100)}
        ${line(152, 108, 156, 108)}
      `;
      break;

    default:
      inner = `
        ${line(10, 60, 210, 60)}
      `;
  }

  return svgShell(inner, getSymbolById(id).name);
}

function getSourceBadgesMarkup(symbol) {
  return symbol.sources.map((source) => `
    <span class="source-badge ${source}">${sourceLabels[source]}</span>
  `).join("");
}

function renderSelectedPanel() {
  const symbol = getSymbolById(state.selectedId);

  if (elements.selectedName) elements.selectedName.textContent = symbol.name;
  if (elements.selectedNote) elements.selectedNote.textContent = symbol.note || "Ready to download as SVG.";
  if (elements.selectedRender) elements.selectedRender.innerHTML = getSymbolSvgMarkup(symbol.id);
  if (elements.selectedSourceBadges) elements.selectedSourceBadges.innerHTML = getSourceBadgesMarkup(symbol);
}

function renderResultsCount(visibleSymbols) {
  if (!elements.resultsCount) return;
  const label = visibleSymbols.length === 1 ? "symbol" : "symbols";
  elements.resultsCount.textContent = `Showing ${visibleSymbols.length} ${label}`;
}

function buildCard(symbol) {
  return `
    <div class="col-12 col-md-6 col-xl-4">
      <article class="card shadow-sm border-0 symbol-card h-100${state.selectedId === symbol.id ? " is-selected" : ""}" data-symbol-id="${symbol.id}" role="button" tabindex="0" aria-label="Select ${escapeHtml(symbol.name)}">
        <div class="card-body p-4">
          <div class="symbol-meta">
            <div class="source-badge-row">${getSourceBadgesMarkup(symbol)}</div>
            <h3>${escapeHtml(symbol.name)}</h3>
            <p class="symbol-note">${escapeHtml(symbol.note || "")}</p>
          </div>

          <div class="symbol-stage">
            ${getSymbolSvgMarkup(symbol.id)}
          </div>

          <div class="symbol-actions mt-auto">
            <button type="button" class="copy-chip" data-download-id="${symbol.id}">
              <span class="material-symbols-outlined" aria-hidden="true">download</span>
              Download SVG
            </button>
            <button type="button" class="copy-chip" data-copy-svg-id="${symbol.id}">
              <span class="material-symbols-outlined" aria-hidden="true">content_copy</span>
              Copy SVG
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderGrid() {
  if (!elements.symbolsGrid) return;

  const visibleSymbols = getVisibleSymbols();
  ensureValidSelection(visibleSymbols.length ? visibleSymbols : symbolsData);
  renderResultsCount(visibleSymbols);

  if (!visibleSymbols.length) {
    elements.symbolsGrid.innerHTML = `
      <div class="col-12">
        <div class="card shadow-sm border-0 w-100">
          <div class="card-body symbol-empty-state">No symbols match the current filter.</div>
        </div>
      </div>
    `;
    renderSelectedPanel();
    return;
  }

  elements.symbolsGrid.innerHTML = visibleSymbols.map(buildCard).join("");
  renderSelectedPanel();
}

function updateFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
}

function showToast(message) {
  if (!elements.copyToast) return;
  elements.copyToast.textContent = message;
  elements.copyToast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    elements.copyToast.classList.remove("show");
  }, 1800);
}

async function copyText(value, successMessage) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const helper = document.createElement("textarea");
      helper.value = value;
      helper.setAttribute("readonly", "");
      helper.style.position = "absolute";
      helper.style.left = "-9999px";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }
    showToast(successMessage);
  } catch (error) {
    showToast("Copy failed");
  }
}

function triggerSvgDownload(symbol) {
  const svg = getSymbolSvgMarkup(symbol.id);
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${symbol.id}.svg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("SVG downloaded");
}

function handleDocumentClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const downloadButton = target.closest("[data-download-id]");
  if (downloadButton) {
    const symbol = getSymbolById(downloadButton.dataset.downloadId);
    state.selectedId = symbol.id;
    renderSelectedPanel();
    triggerSvgDownload(symbol);
    return;
  }

  const copySvgButton = target.closest("[data-copy-svg-id]");
  if (copySvgButton) {
    const symbol = getSymbolById(copySvgButton.dataset.copySvgId);
    state.selectedId = symbol.id;
    renderSelectedPanel();
    copyText(getSymbolSvgMarkup(symbol.id), "SVG code copied");
    return;
  }

  const filterButton = target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    updateFilterButtons();
    renderGrid();
    return;
  }

  const card = target.closest("[data-symbol-id]");
  if (card) {
    state.selectedId = card.dataset.symbolId;
    renderGrid();
  }
}

function handleKeyboardSelection(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (!target.hasAttribute("data-symbol-id")) return;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    state.selectedId = target.dataset.symbolId;
    renderGrid();
  }
}

function initSearch() {
  if (!elements.searchInput) return;
  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderGrid();
  });
}

function initSelectedButtons() {
  if (elements.downloadSelectedBtn) {
    elements.downloadSelectedBtn.addEventListener("click", () => {
      triggerSvgDownload(getSymbolById(state.selectedId));
    });
  }

  if (elements.copySelectedSvgBtn) {
    elements.copySelectedSvgBtn.addEventListener("click", () => {
      copyText(getSymbolSvgMarkup(state.selectedId), "SVG code copied");
    });
  }

  if (elements.copySelectedNameBtn) {
    elements.copySelectedNameBtn.addEventListener("click", () => {
      copyText(getSymbolById(state.selectedId).name, "Symbol name copied");
    });
  }
}

function init() {
  initSearch();
  initSelectedButtons();
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleKeyboardSelection);
  updateFilterButtons();
  renderGrid();
}

document.addEventListener("DOMContentLoaded", init);
