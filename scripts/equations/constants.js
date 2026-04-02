const constantsData = [
  {
    id: "g",
    group: "ib",
    quantity: "Acceleration of free fall",
    note: "Earth's surface",
    symbolLatex: "g",
    valueLatex: "9.8\\ \\mathrm{m\\ s^{-2}}",
    renderLatex: "g = 9.8\\ \\mathrm{m\\ s^{-2}}",
    text: "g = 9.8 m s⁻²",
    latex: "g = 9.8\\ \\mathrm{m\\ s^{-2}}",
    tags: "gravity acceleration free fall earth surface",
  },
  {
    id: "G",
    group: "ib",
    quantity: "Gravitational constant",
    note: "",
    symbolLatex: "G",
    valueLatex: "6.67 \\times 10^{-11}\\ \\mathrm{N\\ m^2\\ kg^{-2}}",
    renderLatex: "G = 6.67 \\times 10^{-11}\\ \\mathrm{N\\ m^2\\ kg^{-2}}",
    text: "G = 6.67 × 10⁻¹¹ N m² kg⁻²",
    latex: "G = 6.67 \\times 10^{-11}\\ \\mathrm{N\\ m^2\\ kg^{-2}}",
    tags: "gravity gravitation universal constant",
  },
  {
    id: "NA",
    group: "ib",
    quantity: "Avogadro constant",
    note: "",
    symbolLatex: "N_A",
    valueLatex: "6.02 \\times 10^{23}\\ \\mathrm{mol^{-1}}",
    renderLatex: "N_A = 6.02 \\times 10^{23}\\ \\mathrm{mol^{-1}}",
    text: "Nₐ = 6.02 × 10²³ mol⁻¹",
    latex: "N_A = 6.02 \\times 10^{23}\\ \\mathrm{mol^{-1}}",
    tags: "avogadro mole chemistry",
  },
  {
    id: "R",
    group: "ib",
    quantity: "Gas constant",
    note: "",
    symbolLatex: "R",
    valueLatex: "8.31\\ \\mathrm{J\\ K^{-1}\\ mol^{-1}}",
    renderLatex: "R = 8.31\\ \\mathrm{J\\ K^{-1}\\ mol^{-1}}",
    text: "R = 8.31 J K⁻¹ mol⁻¹",
    latex: "R = 8.31\\ \\mathrm{J\\ K^{-1}\\ mol^{-1}}",
    tags: "gas constant ideal gas",
  },
  {
    id: "kB",
    group: "ib",
    quantity: "Boltzmann constant",
    note: "",
    symbolLatex: "k_B",
    valueLatex: "1.38 \\times 10^{-23}\\ \\mathrm{J\\ K^{-1}}",
    renderLatex: "k_B = 1.38 \\times 10^{-23}\\ \\mathrm{J\\ K^{-1}}",
    text: "k_B = 1.38 × 10⁻²³ J K⁻¹",
    latex: "k_B = 1.38 \\times 10^{-23}\\ \\mathrm{J\\ K^{-1}}",
    tags: "boltzmann thermal statistical mechanics",
  },
  {
    id: "sigma",
    group: "ib",
    quantity: "Stefan-Boltzmann constant",
    note: "",
    symbolLatex: "\\sigma",
    valueLatex: "5.67 \\times 10^{-8}\\ \\mathrm{W\\ m^{-2}\\ K^{-4}}",
    renderLatex:
      "\\sigma = 5.67 \\times 10^{-8}\\ \\mathrm{W\\ m^{-2}\\ K^{-4}}",
    text: "σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴",
    latex: "\\sigma = 5.67 \\times 10^{-8}\\ \\mathrm{W\\ m^{-2}\\ K^{-4}}",
    tags: "stefan boltzmann black body radiation",
  },
  {
    id: "k",
    group: "ib",
    quantity: "Coulomb constant",
    note: "",
    symbolLatex: "k",
    valueLatex: "8.99 \\times 10^{9}\\ \\mathrm{N\\ m^2\\ C^{-2}}",
    renderLatex: "k = 8.99 \\times 10^{9}\\ \\mathrm{N\\ m^2\\ C^{-2}}",
    text: "k = 8.99 × 10⁹ N m² C⁻²",
    latex: "k = 8.99 \\times 10^{9}\\ \\mathrm{N\\ m^2\\ C^{-2}}",
    tags: "coulomb electrostatic electric force",
  },
  {
    id: "epsilon0",
    group: "ib",
    quantity: "Permittivity of free space",
    note: "",
    symbolLatex: "\\varepsilon_0",
    valueLatex: "8.85 \\times 10^{-12}\\ \\mathrm{C^2\\ N^{-1}\\ m^{-2}}",
    renderLatex:
      "\\varepsilon_0 = 8.85 \\times 10^{-12}\\ \\mathrm{C^2\\ N^{-1}\\ m^{-2}}",
    text: "ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²",
    latex:
      "\\varepsilon_0 = 8.85 \\times 10^{-12}\\ \\mathrm{C^2\\ N^{-1}\\ m^{-2}}",
    tags: "permittivity vacuum free space electric",
  },
  {
    id: "mu0",
    group: "ib",
    quantity: "Permeability of free space",
    note: "",
    symbolLatex: "\\mu_0",
    valueLatex: "4\\pi \\times 10^{-7}\\ \\mathrm{T\\ m\\ A^{-1}}",
    renderLatex: "\\mu_0 = 4\\pi \\times 10^{-7}\\ \\mathrm{T\\ m\\ A^{-1}}",
    text: "μ₀ = 4π × 10⁻⁷ T m A⁻¹",
    latex: "\\mu_0 = 4\\pi \\times 10^{-7}\\ \\mathrm{T\\ m\\ A^{-1}}",
    tags: "permeability vacuum free space magnetic",
  },
  {
    id: "c",
    group: "ib",
    quantity: "Speed of light in vacuum",
    note: "",
    symbolLatex: "c",
    valueLatex: "3.00 \\times 10^{8}\\ \\mathrm{m\\ s^{-1}}",
    renderLatex: "c = 3.00 \\times 10^{8}\\ \\mathrm{m\\ s^{-1}}",
    text: "c = 3.00 × 10⁸ m s⁻¹",
    latex: "c = 3.00 \\times 10^{8}\\ \\mathrm{m\\ s^{-1}}",
    tags: "speed of light vacuum relativity waves",
  },
  {
    id: "h",
    group: "ib",
    quantity: "Planck constant",
    note: "",
    symbolLatex: "h",
    valueLatex: "6.63 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    renderLatex: "h = 6.63 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    text: "h = 6.63 × 10⁻³⁴ J s",
    latex: "h = 6.63 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    tags: "planck quantum photon",
  },
  {
    id: "e",
    group: "ib",
    quantity: "Elementary charge",
    note: "",
    symbolLatex: "e",
    valueLatex: "1.60 \\times 10^{-19}\\ \\mathrm{C}",
    renderLatex: "e = 1.60 \\times 10^{-19}\\ \\mathrm{C}",
    text: "e = 1.60 × 10⁻¹⁹ C",
    latex: "e = 1.60 \\times 10^{-19}\\ \\mathrm{C}",
    tags: "elementary charge electron proton",
  },
  {
    id: "me",
    group: "ib",
    quantity: "Electron rest mass",
    note: "",
    symbolLatex: "m_e",
    valueLatex:
      "9.110 \\times 10^{-31}\\ \\mathrm{kg} = 0.000549\\ \\mathrm{u} = 0.511\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "m_e = 9.110 \\times 10^{-31}\\ \\mathrm{kg} = 0.000549\\ \\mathrm{u} = 0.511\\ \\mathrm{MeV}\\ c^{-2}",
    text: "mₑ = 9.110 × 10⁻³¹ kg = 0.000549 u = 0.511 MeV c⁻²",
    latex:
      "m_e = 9.110 \\times 10^{-31}\\ \\mathrm{kg} = 0.000549\\ \\mathrm{u} = 0.511\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "electron mass rest mass particle",
  },
  {
    id: "mp",
    group: "ib",
    quantity: "Proton rest mass",
    note: "",
    symbolLatex: "m_p",
    valueLatex:
      "1.673 \\times 10^{-27}\\ \\mathrm{kg} = 1.007276\\ \\mathrm{u} = 938.27\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "m_p = 1.673 \\times 10^{-27}\\ \\mathrm{kg} = 1.007276\\ \\mathrm{u} = 938.27\\ \\mathrm{MeV}\\ c^{-2}",
    text: "mₚ = 1.673 × 10⁻²⁷ kg = 1.007276 u = 938.27 MeV c⁻²",
    latex:
      "m_p = 1.673 \\times 10^{-27}\\ \\mathrm{kg} = 1.007276\\ \\mathrm{u} = 938.27\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "proton mass rest mass particle",
  },
  {
    id: "mn",
    group: "ib",
    quantity: "Neutron rest mass",
    note: "",
    symbolLatex: "m_n",
    valueLatex:
      "1.675 \\times 10^{-27}\\ \\mathrm{kg} = 1.008665\\ \\mathrm{u} = 940.27\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "m_n = 1.675 \\times 10^{-27}\\ \\mathrm{kg} = 1.008665\\ \\mathrm{u} = 940.27\\ \\mathrm{MeV}\\ c^{-2}",
    text: "mₙ = 1.675 × 10⁻²⁷ kg = 1.008665 u = 940.27 MeV c⁻²",
    latex:
      "m_n = 1.675 \\times 10^{-27}\\ \\mathrm{kg} = 1.008665\\ \\mathrm{u} = 940.27\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "neutron mass rest mass particle",
  },
  {
    id: "u",
    group: "ib",
    quantity: "Atomic mass unit",
    note: "",
    symbolLatex: "u",
    valueLatex:
      "1.661 \\times 10^{-27}\\ \\mathrm{kg} = 931.5\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "u = 1.661 \\times 10^{-27}\\ \\mathrm{kg} = 931.5\\ \\mathrm{MeV}\\ c^{-2}",
    text: "u = 1.661 × 10⁻²⁷ kg = 931.5 MeV c⁻²",
    latex:
      "u = 1.661 \\times 10^{-27}\\ \\mathrm{kg} = 931.5\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "atomic mass unit unified mass",
  },
  {
    id: "S",
    group: "ib",
    quantity: "Solar constant",
    note: "",
    symbolLatex: "S",
    valueLatex: "1.36 \\times 10^{3}\\ \\mathrm{W\\ m^{-2}}",
    renderLatex: "S = 1.36 \\times 10^{3}\\ \\mathrm{W\\ m^{-2}}",
    text: "S = 1.36 × 10³ W m⁻²",
    latex: "S = 1.36 \\times 10^{3}\\ \\mathrm{W\\ m^{-2}}",
    tags: "solar constant irradiance sun",
  },
  {
    id: "R0",
    group: "ib",
    quantity: "Fermi radius",
    note: "",
    symbolLatex: "R_0",
    valueLatex: "1.20 \\times 10^{-15}\\ \\mathrm{m}",
    renderLatex: "R_0 = 1.20 \\times 10^{-15}\\ \\mathrm{m}",
    text: "R₀ = 1.20 × 10⁻¹⁵ m",
    latex: "R_0 = 1.20 \\times 10^{-15}\\ \\mathrm{m}",
    tags: "fermi radius nuclear physics",
  },
  {
    id: "hbar",
    group: "extended",
    quantity: "Reduced Planck constant",
    note: "Common quantum shorthand",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "\\hbar",
    valueLatex: "1.054571817 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    renderLatex: "\\hbar = 1.054571817 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    text: "ℏ = 1.054571817 × 10⁻³⁴ J s",
    latex: "\\hbar = 1.054571817 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    tags: "reduced planck hbar quantum angular momentum",
  },
  {
    id: "alpha",
    group: "extended",
    quantity: "Fine-structure constant",
    note: "Dimensionless",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "\\alpha",
    valueLatex: "7.2973525643 \\times 10^{-3}",
    renderLatex: "\\alpha = 7.2973525643 \\times 10^{-3}",
    text: "α = 7.2973525643 × 10⁻³",
    latex: "\\alpha = 7.2973525643 \\times 10^{-3}",
    tags: "fine structure alpha electromagnetism quantum",
  },
  {
    id: "Rinf",
    group: "extended",
    quantity: "Rydberg constant",
    note: "",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "R_\\infty",
    valueLatex: "1.0973731568157 \\times 10^{7}\\ \\mathrm{m^{-1}}",
    renderLatex:
      "R_\\infty = 1.0973731568157 \\times 10^{7}\\ \\mathrm{m^{-1}}",
    text: "R∞ = 1.0973731568157 × 10⁷ m⁻¹",
    latex: "R_\\infty = 1.0973731568157 \\times 10^{7}\\ \\mathrm{m^{-1}}",
    tags: "rydberg spectral lines atom hydrogen",
  },
  {
    id: "a0",
    group: "extended",
    quantity: "Bohr radius",
    note: "",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "a_0",
    valueLatex: "5.29177210544 \\times 10^{-11}\\ \\mathrm{m}",
    renderLatex: "a_0 = 5.29177210544 \\times 10^{-11}\\ \\mathrm{m}",
    text: "a₀ = 5.29177210544 × 10⁻¹¹ m",
    latex: "a_0 = 5.29177210544 \\times 10^{-11}\\ \\mathrm{m}",
    tags: "bohr radius atom hydrogen",
  },
  {
    id: "bWien",
    group: "extended",
    quantity: "Wien displacement constant",
    note: "",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "b",
    valueLatex: "2.897771955 \\times 10^{-3}\\ \\mathrm{m\\ K}",
    renderLatex: "b = 2.897771955 \\times 10^{-3}\\ \\mathrm{m\\ K}",
    text: "b = 2.897771955 × 10⁻³ m K",
    latex: "b = 2.897771955 \\times 10^{-3}\\ \\mathrm{m\\ K}",
    tags: "wien displacement black body thermal",
  },
  {
    id: "F",
    group: "extended",
    quantity: "Faraday constant",
    note: "",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "F",
    valueLatex: "96485.33212\\ \\mathrm{C\\ mol^{-1}}",
    renderLatex: "F = 96485.33212\\ \\mathrm{C\\ mol^{-1}}",
    text: "F = 96485.33212 C mol⁻¹",
    latex: "F = 96485.33212\\ \\mathrm{C\\ mol^{-1}}",
    tags: "faraday charge electrochemistry",
  },
  {
    id: "Z0",
    group: "extended",
    quantity: "Characteristic impedance of vacuum",
    note: "",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "Z_0",
    valueLatex: "376.730313412\\ \\Omega",
    renderLatex: "Z_0 = 376.730313412\\ \\Omega",
    text: "Z₀ = 376.730313412 Ω",
    latex: "Z_0 = 376.730313412\\ \\Omega",
    tags: "vacuum impedance electromagnetism wave",
  },
  {
    id: "eV",
    group: "extended",
    quantity: "Electron volt",
    note: "Energy unit",
    sourceNote: "NIST 2022/CODATA reference",
    symbolLatex: "\\mathrm{eV}",
    valueLatex: "1\\ \\mathrm{eV} = 1.602176634 \\times 10^{-19}\\ \\mathrm{J}",
    renderLatex:
      "1\\ \\mathrm{eV} = 1.602176634 \\times 10^{-19}\\ \\mathrm{J}",
    text: "1 eV = 1.602176634 × 10⁻¹⁹ J",
    latex: "1\\ \\mathrm{eV} = 1.602176634 \\times 10^{-19}\\ \\mathrm{J}",
    tags: "electron volt energy unit quantum",
  },
  {
    id: "gn",
    group: "extended",
    quantity: "Standard acceleration of gravity",
    note: "Conventional exact standard",
    sourceNote: "NIST reference value",
    symbolLatex: "g_n",
    valueLatex: "9.80665\\ \\mathrm{m\\ s^{-2}}",
    renderLatex: "g_n = 9.80665\\ \\mathrm{m\\ s^{-2}}",
    text: "gₙ = 9.80665 m s⁻²",
    latex: "g_n = 9.80665\\ \\mathrm{m\\ s^{-2}}",
    tags: "standard gravity exact conventional",
  },
];

const sectionTitles = {
  ib: "IB essentials",
  extended: "Extended reference",
};

const state = {
  filter: "all",
  search: "",
  selectedId: "g",
};

const elements = {
  ibBody: document.getElementById("constantsTableIbBody"),
  extendedBody: document.getElementById("constantsTableExtendedBody"),
  searchInput: document.getElementById("searchConstants"),
  resultsCount: document.getElementById("resultsCount"),
  selectedQuantity: document.getElementById("selectedQuantity"),
  selectedNote: document.getElementById("selectedNote"),
  selectedRender: document.getElementById("selectedRender"),
  selectedText: document.getElementById("selectedText"),
  selectedLatex: document.getElementById("selectedLatex"),
  selectedGroupTag: document.getElementById("selectedGroupTag"),
  copyToast: document.getElementById("copyToast"),
  sectionIb: document.getElementById("section-ib"),
  sectionExtended: document.getElementById("section-extended"),
};

let toastTimer = null;

function getConstantById(id) {
  return constantsData.find((item) => item.id === id) || constantsData[0];
}

function matchesSearch(constant, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    constant.quantity,
    constant.note || "",
    constant.sourceNote || "",
    constant.text,
    constant.latex,
    constant.tags || "",
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function getFilteredConstants() {
  return constantsData.filter((constant) => {
    const matchesFilter =
      state.filter === "all" ? true : constant.group === state.filter;
    return matchesFilter && matchesSearch(constant, state.search);
  });
}

function renderMath(element, latex, displayMode = false) {
  if (!element) {
    return;
  }

  if (window.katex) {
    try {
      window.katex.render(latex, element, {
        throwOnError: false,
        displayMode,
      });
      return;
    } catch (error) {
      element.textContent = latex;
      return;
    }
  }

  element.textContent = latex;
}

function buildRow(constant) {
  const row = document.createElement("tr");
  row.className = `constant-row${state.selectedId === constant.id ? " is-selected" : ""}`;
  row.dataset.id = constant.id;
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-label", `Select ${constant.quantity}`);

  const quantityCell = document.createElement("td");
  const quantityName = document.createElement("div");
  quantityName.className = "quantity-name";
  quantityName.textContent = constant.quantity;
  quantityCell.appendChild(quantityName);

  if (constant.note) {
    const quantityNote = document.createElement("div");
    quantityNote.className = "quantity-note";
    quantityNote.textContent = constant.note;
    quantityCell.appendChild(quantityNote);
  }

  if (constant.sourceNote) {
    const sourceNote = document.createElement("div");
    sourceNote.className = "source-note";
    sourceNote.textContent = constant.sourceNote;
    quantityCell.appendChild(sourceNote);
  }

  const symbolCell = document.createElement("td");
  symbolCell.className = "symbol-cell";
  const symbolWrap = document.createElement("span");
  symbolWrap.className = "math-inline";
  symbolCell.appendChild(symbolWrap);
  renderMath(symbolWrap, constant.symbolLatex, false);

  const valueCell = document.createElement("td");
  valueCell.className = "value-cell";
  const valueWrap = document.createElement("span");
  valueWrap.className = "math-inline";
  valueCell.appendChild(valueWrap);
  renderMath(valueWrap, constant.valueLatex, false);

  const copyCell = document.createElement("td");
  copyCell.className = "copy-cell";
  const copyActions = document.createElement("div");
  copyActions.className = "copy-actions";

  [
    { label: "Text", type: "text" },
    { label: "LaTeX", type: "latex" },
  ].forEach((copyType) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-chip";
    button.dataset.copyType = copyType.type;
    button.dataset.id = constant.id;
    button.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">content_copy</span>${copyType.label}`;
    copyActions.appendChild(button);
  });

  copyCell.appendChild(copyActions);

  row.append(quantityCell, symbolCell, valueCell, copyCell);
  return row;
}

function renderSection(target, group, constants) {
  if (!target) {
    return;
  }

  target.innerHTML = "";

  const groupConstants = constants.filter(
    (constant) => constant.group === group,
  );

  if (!groupConstants.length) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 4;
    emptyCell.className = "empty-state";
    emptyCell.textContent = "No constants match the current filter.";
    emptyRow.appendChild(emptyCell);
    target.appendChild(emptyRow);
    return;
  }

  groupConstants.forEach((constant) => {
    target.appendChild(buildRow(constant));
  });
}

function ensureValidSelection(filteredConstants) {
  const visibleIds = new Set(filteredConstants.map((item) => item.id));

  if (!visibleIds.has(state.selectedId)) {
    const replacement = filteredConstants[0] || constantsData[0];
    state.selectedId = replacement.id;
  }
}

function updateSelectedPanel() {
  const selected = getConstantById(state.selectedId);

  if (elements.selectedQuantity) {
    elements.selectedQuantity.textContent = selected.quantity;
  }

  if (elements.selectedNote) {
    elements.selectedNote.textContent =
      selected.note || selected.sourceNote || "Ready to copy in text or LaTeX.";
  }

  if (elements.selectedGroupTag) {
    elements.selectedGroupTag.textContent = sectionTitles[selected.group];
  }

  if (elements.selectedText) {
    elements.selectedText.value = selected.text;
  }

  if (elements.selectedLatex) {
    elements.selectedLatex.value = selected.latex;
  }

  if (elements.selectedRender) {
    renderMath(elements.selectedRender, selected.renderLatex, false);
  }
}

function updateResultsCount(filteredConstants) {
  if (!elements.resultsCount) {
    return;
  }

  const label = filteredConstants.length === 1 ? "constant" : "constants";
  elements.resultsCount.textContent = `Showing ${filteredConstants.length} ${label}`;
}

function updateSectionVisibility(filteredConstants) {
  if (!elements.sectionIb || !elements.sectionExtended) {
    return;
  }

  const hasIb = filteredConstants.some((item) => item.group === "ib");
  const hasExtended = filteredConstants.some(
    (item) => item.group === "extended",
  );

  if (!filteredConstants.length) {
    elements.sectionIb.hidden = false;
    elements.sectionExtended.hidden = false;
    return;
  }

  elements.sectionIb.hidden = state.filter === "extended" || !hasIb;
  elements.sectionExtended.hidden = state.filter === "ib" || !hasExtended;
}

function renderPage() {
  const filteredConstants = getFilteredConstants();
  ensureValidSelection(
    filteredConstants.length ? filteredConstants : constantsData,
  );
  renderSection(elements.ibBody, "ib", filteredConstants);
  renderSection(elements.extendedBody, "extended", filteredConstants);
  updateSelectedPanel();
  updateResultsCount(filteredConstants);
  updateSectionVisibility(filteredConstants);
}

async function copyText(value, successMessage) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(successMessage);
  } catch (error) {
    fallbackCopy(value, successMessage);
  }
}

function fallbackCopy(value, successMessage) {
  const helper = document.createElement("textarea");
  helper.value = value;
  helper.setAttribute("readonly", "");
  helper.style.position = "absolute";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  document.body.removeChild(helper);
  showToast(successMessage);
}

function showToast(message) {
  if (!elements.copyToast) {
    return;
  }

  elements.copyToast.textContent = message;
  elements.copyToast.classList.add("show");

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = window.setTimeout(() => {
    elements.copyToast.classList.remove("show");
  }, 1800);
}

function buildBulkText(constants, type) {
  return constants
    .map((constant) => `${constant.quantity}: ${constant[type]}`)
    .join("\n");
}

function syncSelectedInputsForClickSelection(target) {
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const row = target.closest(".constant-row");
  if (row) {
    state.selectedId = row.dataset.id;
    renderPage();
  }
}

function handleDocumentClick(event) {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const copyRowButton = target.closest("[data-copy-type]");
  if (copyRowButton) {
    const constant = getConstantById(copyRowButton.dataset.id);
    const type = copyRowButton.dataset.copyType;
    const labelMap = {
      text: "Unicode text copied",
      latex: "LaTeX copied",
    };
    copyText(constant[type], labelMap[type]);
    state.selectedId = constant.id;
    renderPage();
    return;
  }

  const bulkButton = target.closest("[data-bulk-copy]");
  if (bulkButton) {
    const type = bulkButton.dataset.bulkCopy;
    const visibleConstants = getFilteredConstants();

    if (!visibleConstants.length) {
      showToast("Nothing to copy right now");
      return;
    }

    const bulkText = buildBulkText(visibleConstants, type);
    const labelMap = {
      text: "Visible Unicode list copied",
      latex: "Visible LaTeX list copied",
    };
    copyText(bulkText, labelMap[type]);
    return;
  }

  const fieldCopyButton = target.closest("[data-copy-source]");
  if (fieldCopyButton) {
    const sourceId = fieldCopyButton.dataset.copySource;
    const sourceField = document.getElementById(sourceId);
    if (sourceField) {
      copyText(sourceField.value, "Copied from selected constant");
      sourceField.focus();
      sourceField.select?.();
    }
    return;
  }

  const clickableCopyField = target.closest("[data-direct-copy]");
  if (
    clickableCopyField instanceof HTMLInputElement ||
    clickableCopyField instanceof HTMLTextAreaElement
  ) {
    copyText(clickableCopyField.value, "Copied");
    clickableCopyField.focus();
    clickableCopyField.select?.();
    return;
  }

  const filterButton = target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === state.filter);
    });
    renderPage();
    return;
  }

  syncSelectedInputsForClickSelection(target);
}

function handleKeyboardSelection(event) {
  const target = event.target;

  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement
  ) {
    if (
      target.hasAttribute("data-direct-copy") &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      copyText(target.value, "Copied");
      target.select?.();
    }
    return;
  }

  if (
    !(target instanceof HTMLElement) ||
    !target.classList.contains("constant-row")
  ) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    state.selectedId = target.dataset.id;
    renderPage();
  }
}

function initialiseSearch() {
  if (!elements.searchInput) {
    return;
  }

  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderPage();
  });
}

function initialiseDirectCopyFields() {
  [elements.selectedText, elements.selectedLatex].forEach((field) => {
    if (!field) {
      return;
    }

    field.setAttribute("readonly", "readonly");
    field.setAttribute("data-direct-copy", "true");
    field.title = "Click to copy";

    field.addEventListener("focus", () => field.select());
  });
}

function initialiseTableListeners() {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleKeyboardSelection);
}

function init() {
  initialiseSearch();
  initialiseDirectCopyFields();
  initialiseTableListeners();
  renderPage();
}

document.addEventListener("DOMContentLoaded", init);
