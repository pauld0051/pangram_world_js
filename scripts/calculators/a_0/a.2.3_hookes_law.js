import {
  convertForce,
  convertDisplacement,
  convertAcceleration,
  convertMass,
  convertEnergy,
  convertSpringConstant,
} from "../../utils/units.js";

import {
  findLeastSigFigs,
  formatToSigFigs,
  formatPlainNumber,
} from "../../utils/sig_fig_util.js";

import {
  parseNumericInput,
  getInvalidNumericFields,
} from "../../utils/number_input.js";

document.addEventListener("DOMContentLoaded", function () {
  const massInput = document.getElementById("inputM");
  const forceInput = document.getElementById("inputF");
  const extensionInput = document.getElementById("inputX");
  const springConstantInput = document.getElementById("inputK");
  const energyInput = document.getElementById("inputE");
  const gravityInput = document.getElementById("inputG");

  const unitMassSelect = document.getElementById("unitMass");
  const unitForceSelect = document.getElementById("unitForce");
  const unitExtensionSelect = document.getElementById("unitExtension");
  const unitSpringConstantSelect = document.getElementById("unitSpringConstant");
  const unitEnergySelect = document.getElementById("unitEnergy");
  const unitGravitySelect = document.getElementById("unitGravity");

  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");

  const fieldMap = {
    m: massInput,
    F: forceInput,
    x: extensionInput,
    k: springConstantInput,
    E: energyInput,
    g: gravityInput,
  };

  const unitMap = {
    m: unitMassSelect,
    F: unitForceSelect,
    x: unitExtensionSelect,
    k: unitSpringConstantSelect,
    E: unitEnergySelect,
    g: unitGravitySelect,
  };

  const convertToBase = {
    m: (value, unit) => convertMass(value, unit, "kg"),
    F: (value, unit) => convertForce(value, unit, "N"),
    x: (value, unit) => convertDisplacement(value, unit, "m"),
    k: (value, unit) => convertSpringConstant(value, unit, "Nm"),
    E: (value, unit) => convertEnergy(value, unit, "J"),
    g: (value, unit) => convertAcceleration(value, unit, "ms2"),
  };

  const convertFromBase = {
    m: (value, unit) => convertMass(value, "kg", unit),
    F: (value, unit) => convertForce(value, "N", unit),
    x: (value, unit) => convertDisplacement(value, "m", unit),
    k: (value, unit) => convertSpringConstant(value, "Nm", unit),
    E: (value, unit) => convertEnergy(value, "J", unit),
    g: (value, unit) => convertAcceleration(value, "ms2", unit),
  };

  let lockedFields = {
    m: false,
    F: false,
    x: false,
    k: false,
    E: false,
    g: false,
  };

  let rawInputStrings = {
    m: "",
    F: "",
    x: "",
    k: "",
    E: "",
    g: "",
  };

  let calculatedValuesBase = null;
  let currentCalculatedKeys = [];

  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    Object.keys(fieldMap).forEach((key) => {
      fieldMap[key].value = "";
      fieldMap[key].readOnly = false;
      fieldMap[key].dataset.unit = unitMap[key].value;
    });

    gravityInput.value = "9.81";
    unitGravitySelect.value = "ms2";
    gravityInput.dataset.unit = unitGravitySelect.value;

    lockedFields = {
      m: false,
      F: false,
      x: false,
      k: false,
      E: false,
      g: false,
    };

    rawInputStrings = {
      m: "",
      F: "",
      x: "",
      k: "",
      E: "",
      g: gravityInput.value,
    };

    calculatedValuesBase = null;
    currentCalculatedKeys = [];
    removeExistingTooltips();
    calculate();
  }

  function lockInput(key) {
    fieldMap[key].readOnly = true;
    lockedFields[key] = true;
  }

  function unlockCalculatedInputs() {
    currentCalculatedKeys.forEach((key) => {
      fieldMap[key].value = "";
      fieldMap[key].readOnly = false;
      lockedFields[key] = false;
    });

    currentCalculatedKeys = [];
    calculatedValuesBase = null;
  }

  function showTooltip(message, element) {
    removeExistingTooltips();

    const tooltip = document.createElement("div");
    tooltip.className = "copy-tooltip";
    tooltip.innerText = message;
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "1000";

    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;

    setTimeout(() => {
      if (tooltip.parentElement) {
        document.body.removeChild(tooltip);
      }
    }, 5000);
  }

  function removeExistingTooltips() {
    document
      .querySelectorAll(".copy-tooltip")
      .forEach((tooltip) => tooltip.remove());
  }

  function parseInputValue(str) {
    return parseNumericInput(str);
  }

  function readCurrentValues() {
    const entered = {
      m: massInput.value,
      F: forceInput.value,
      x: extensionInput.value,
      k: springConstantInput.value,
      E: energyInput.value,
      g: gravityInput.value,
    };

    const values = {
      m: parseInputValue(entered.m),
      F: parseInputValue(entered.F),
      x: parseInputValue(entered.x),
      k: parseInputValue(entered.k),
      E: parseInputValue(entered.E),
      g: parseInputValue(entered.g),
    };

    return { entered, values };
  }

  function safeMultiply(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) return NaN;
    return a * b;
  }

  function safeDivide(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b) || b === 0) return NaN;
    return a / b;
  }

  function safeSqrt(value) {
    if (!Number.isFinite(value) || value < 0) return NaN;
    return Math.sqrt(value);
  }

  function approxEqual(a, b, relativeTolerance = 1e-8, absoluteTolerance = 1e-10) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
    const difference = Math.abs(a - b);
    return difference <= Math.max(absoluteTolerance, relativeTolerance * Math.max(Math.abs(a), Math.abs(b), 1));
  }

  function assignIfMissing(values, key, candidate) {
    if (!Number.isFinite(candidate)) return false;

    if (!Number.isFinite(values[key])) {
      values[key] = candidate;
      return true;
    }

    return false;
  }

  function checkPhysicalValidity(values) {
    if (Number.isFinite(values.m) && values.m < 0) {
      showTooltip("Mass cannot be negative.", massInput);
      return true;
    }

    if (Number.isFinite(values.F) && values.F < 0) {
      showTooltip("Load force or weight cannot be negative in this calculator.", forceInput);
      return true;
    }

    if (Number.isFinite(values.x) && values.x < 0) {
      showTooltip("Extension cannot be negative in this version of the calculator.", extensionInput);
      return true;
    }

    if (Number.isFinite(values.k) && values.k <= 0) {
      showTooltip("Spring constant must be greater than zero.", springConstantInput);
      return true;
    }

    if (Number.isFinite(values.E) && values.E < 0) {
      showTooltip("Elastic potential energy cannot be negative.", energyInput);
      return true;
    }

    if (Number.isFinite(values.g) && values.g <= 0) {
      showTooltip("Gravity must be greater than zero.", gravityInput);
      return true;
    }

    return false;
  }

  function solveValues(initialValues) {
    const values = { ...initialValues };

    for (let i = 0; i < 20; i += 1) {
      let changed = false;

      changed = assignIfMissing(values, "F", safeMultiply(values.m, values.g)) || changed;
      changed = assignIfMissing(values, "m", safeDivide(values.F, values.g)) || changed;

      changed = assignIfMissing(values, "F", safeMultiply(values.k, values.x)) || changed;
      changed = assignIfMissing(values, "k", safeDivide(values.F, values.x)) || changed;
      changed = assignIfMissing(values, "x", safeDivide(values.F, values.k)) || changed;

      changed = assignIfMissing(values, "E", 0.5 * values.k * values.x * values.x) || changed;
      changed = assignIfMissing(values, "E", 0.5 * values.F * values.x) || changed;

      changed = assignIfMissing(values, "k", safeDivide(2 * values.E, values.x * values.x)) || changed;
      changed = assignIfMissing(values, "x", safeSqrt(safeDivide(2 * values.E, values.k))) || changed;
      changed = assignIfMissing(values, "x", safeDivide(2 * values.E, values.F)) || changed;
      changed = assignIfMissing(values, "F", safeDivide(2 * values.E, values.x)) || changed;
      changed = assignIfMissing(values, "F", safeSqrt(2 * values.E * values.k)) || changed;
      changed = assignIfMissing(values, "k", safeDivide(values.F * values.F, 2 * values.E)) || changed;

      if (!changed) {
        break;
      }
    }

    return values;
  }

  function checkConsistency(valuesBase) {
    const checks = [
      {
        valid: Number.isFinite(valuesBase.m) && Number.isFinite(valuesBase.g) && Number.isFinite(valuesBase.F),
        left: valuesBase.F,
        right: valuesBase.m * valuesBase.g,
        message: "Mass, gravity, and load force do not agree with F = mg.",
        element: forceInput,
      },
      {
        valid: Number.isFinite(valuesBase.k) && Number.isFinite(valuesBase.x) && Number.isFinite(valuesBase.F),
        left: valuesBase.F,
        right: valuesBase.k * valuesBase.x,
        message: "Force, spring constant, and extension do not agree with F = kx.",
        element: forceInput,
      },
      {
        valid: Number.isFinite(valuesBase.k) && Number.isFinite(valuesBase.x) && Number.isFinite(valuesBase.E),
        left: valuesBase.E,
        right: 0.5 * valuesBase.k * valuesBase.x * valuesBase.x,
        message: "Energy, spring constant, and extension do not agree with E = ½kx².",
        element: energyInput,
      },
      {
        valid: Number.isFinite(valuesBase.F) && Number.isFinite(valuesBase.x) && Number.isFinite(valuesBase.E),
        left: valuesBase.E,
        right: 0.5 * valuesBase.F * valuesBase.x,
        message: "Energy, force, and extension do not agree with E = ½Fx.",
        element: energyInput,
      },
    ];

    for (const check of checks) {
      if (check.valid && !approxEqual(check.left, check.right, 1e-7, 1e-9)) {
        showTooltip(check.message, check.element);
        return false;
      }
    }

    return true;
  }

  function getLeastSigFigsFromKnownInputs() {
    const knownRawInputs = Object.entries(rawInputStrings)
      .filter(([key, value]) => !currentCalculatedKeys.includes(key) && value.trim() !== "")
      .map(([, value]) => value);

    return findLeastSigFigs(knownRawInputs);
  }

  function displayCalculatedValues() {
    if (!calculatedValuesBase) return;

    const leastSigFigs = getLeastSigFigsFromKnownInputs();

    currentCalculatedKeys.forEach((key) => {
      const input = fieldMap[key];
      const targetUnit = unitMap[key].value;
      const valueInSelectedUnit = convertFromBase[key](calculatedValuesBase[key], targetUnit);

      if (!Number.isFinite(valueInSelectedUnit)) {
        input.value = "";
        return;
      }

      input.value = sigFigCheckbox.checked && leastSigFigs > 0
        ? formatToSigFigs(valueInSelectedUnit, leastSigFigs)
        : formatPlainNumber(valueInSelectedUnit);
    });
  }

  function calculate() {
    removeExistingTooltips();
    unlockCalculatedInputs();

    const { entered, values } = readCurrentValues();
    const invalidFields = getInvalidNumericFields(entered);

    if (invalidFields.length > 0) {
      invalidFields.forEach((key) => {
        showTooltip("Please enter a valid number.", fieldMap[key]);
      });
      return;
    }

    rawInputStrings = { ...entered };

    const valuesInBase = {
      m: Number.isFinite(values.m) ? convertToBase.m(values.m, unitMassSelect.value) : NaN,
      F: Number.isFinite(values.F) ? convertToBase.F(values.F, unitForceSelect.value) : NaN,
      x: Number.isFinite(values.x) ? convertToBase.x(values.x, unitExtensionSelect.value) : NaN,
      k: Number.isFinite(values.k) ? convertToBase.k(values.k, unitSpringConstantSelect.value) : NaN,
      E: Number.isFinite(values.E) ? convertToBase.E(values.E, unitEnergySelect.value) : NaN,
      g: Number.isFinite(values.g) ? convertToBase.g(values.g, unitGravitySelect.value) : NaN,
    };

    if (checkPhysicalValidity(valuesInBase)) {
      return;
    }

    const solved = solveValues(valuesInBase);

    if (checkPhysicalValidity(solved)) {
      return;
    }

    if (!checkConsistency(solved)) {
      return;
    }

    calculatedValuesBase = solved;
    currentCalculatedKeys = Object.keys(fieldMap).filter((key) => entered[key].trim() === "" && Number.isFinite(solved[key]));

    currentCalculatedKeys.forEach((key) => lockInput(key));
    displayCalculatedValues();
  }

  function handleUnitChange() {
    Object.keys(fieldMap).forEach((key) => {
      if (lockedFields[key]) return;

      const input = fieldMap[key];
      const raw = input.value.trim();
      if (raw === "") return;

      const numericValue = parseNumericInput(raw);
      if (!Number.isFinite(numericValue)) return;

      const oldUnit = input.dataset.unit || unitMap[key].value;
      const newUnit = unitMap[key].value;

      if (oldUnit === newUnit) return;

      const baseValue = convertToBase[key](numericValue, oldUnit);
      const convertedValue = convertFromBase[key](baseValue, newUnit);

      input.value = formatPlainNumber(convertedValue);
      input.dataset.unit = newUnit;
    });

    calculate();
  }

  Object.keys(fieldMap).forEach((key) => {
    fieldMap[key].dataset.unit = unitMap[key].value;

    fieldMap[key].addEventListener("input", () => {
      if (!fieldMap[key].readOnly) {
        calculate();
      }
    });

    unitMap[key].addEventListener("change", () => {
      handleUnitChange();
    });
  });

  sigFigCheckbox.addEventListener("change", () => {
    displayCalculatedValues();
  });

  calculate();
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof katex !== "undefined") {
    const options = {
      throwOnError: false,
      displayMode: true,
    };

    katex.render(
      "\\Large \\color{#333}{F_H = kx}",
      document.getElementById("equation1"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{E_e = \\frac{1}{2}kx^2}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{E_e = \\frac{1}{2}Fx}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{F = mg}",
      document.getElementById("equation4"),
      options,
    );
  } else {
    console.error(
      "KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.",
    );
  }
});
