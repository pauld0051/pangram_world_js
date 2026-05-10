import { convertForce, convertAcceleration } from "../../utils/units.js";

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
  const buoyantForceInput = document.getElementById("inputFb");
  const densityInput = document.getElementById("inputRho");
  const volumeInput = document.getElementById("inputV");
  const gravityInput = document.getElementById("inputG");

  const unitBuoyantForceSelect = document.getElementById("unitFb");
  const unitDensitySelect = document.getElementById("unitRho");
  const unitVolumeSelect = document.getElementById("unitV");
  const unitGravitySelect = document.getElementById("unitG");

  const solutionState = document.getElementById("solutionState");
  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");

  const fieldMap = {
    Fb: buoyantForceInput,
    rho: densityInput,
    V: volumeInput,
    g: gravityInput,
  };

  const unitMap = {
    Fb: unitBuoyantForceSelect,
    rho: unitDensitySelect,
    V: unitVolumeSelect,
    g: unitGravitySelect,
  };

  const densityConversionRates = {
    kgm3: 1,
    gcm3: 1000,
    gml: 1000,
  };

  const volumeConversionRates = {
    m3: 1,
    cm3: 1e-6,
    ml: 1e-6,
    L: 1e-3,
  };

  function convertDensity(value, fromUnit, toUnit) {
    const fromRate = densityConversionRates[fromUnit];
    const toRate = densityConversionRates[toUnit];

    if (fromRate === undefined || toRate === undefined) {
      console.error(
        `Invalid density unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
      );
      return NaN;
    }

    return (value * fromRate) / toRate;
  }

  function convertVolume(value, fromUnit, toUnit) {
    const fromRate = volumeConversionRates[fromUnit];
    const toRate = volumeConversionRates[toUnit];

    if (fromRate === undefined || toRate === undefined) {
      console.error(
        `Invalid volume unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
      );
      return NaN;
    }

    return (value * fromRate) / toRate;
  }

  const convertToBase = {
    Fb: (value, unit) => convertForce(value, unit, "N"),
    rho: (value, unit) => convertDensity(value, unit, "kgm3"),
    V: (value, unit) => convertVolume(value, unit, "m3"),
    g: (value, unit) => convertAcceleration(value, unit, "ms2"),
  };

  const convertFromBase = {
    Fb: (value, unit) => convertForce(value, "N", unit),
    rho: (value, unit) => convertDensity(value, "kgm3", unit),
    V: (value, unit) => convertVolume(value, "m3", unit),
    g: (value, unit) => convertAcceleration(value, "ms2", unit),
  };

  let lockedFieldKey = null;

  let rawInputStrings = {
    Fb: "",
    rho: "",
    V: "",
    g: gravityInput.value,
  };

  let calculatedValuesBase = null;

  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    buoyantForceInput.value = "";
    densityInput.value = "";
    volumeInput.value = "";
    gravityInput.value = "9.81";
    unitGravitySelect.value = "ms2";

    Object.keys(fieldMap).forEach((key) => {
      fieldMap[key].readOnly = false;
      fieldMap[key].dataset.unit = unitMap[key].value;
    });

    lockedFieldKey = null;
    rawInputStrings = {
      Fb: "",
      rho: "",
      V: "",
      g: gravityInput.value,
    };
    calculatedValuesBase = null;
    solutionState.textContent =
      "Enter any three known values to solve the fourth.";
    removeExistingTooltips();
  }

  function removeExistingTooltips() {
    document
      .querySelectorAll(".copy-tooltip")
      .forEach((tooltip) => tooltip.remove());
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

  function unlockCalculatedField() {
    if (!lockedFieldKey) return;

    fieldMap[lockedFieldKey].value = "";
    fieldMap[lockedFieldKey].readOnly = false;
    lockedFieldKey = null;
    calculatedValuesBase = null;
  }

  function parseInputValue(str) {
    return parseNumericInput(str);
  }

  function readCurrentValues() {
    const entered = {
      Fb: buoyantForceInput.value,
      rho: densityInput.value,
      V: volumeInput.value,
      g: gravityInput.value,
    };

    const values = {
      Fb: parseInputValue(entered.Fb),
      rho: parseInputValue(entered.rho),
      V: parseInputValue(entered.V),
      g: parseInputValue(entered.g),
    };

    return { entered, values };
  }

  function getLeastSigFigsFromKnownInputs() {
    const knownRawInputs = Object.entries(rawInputStrings)
      .filter(([key, value]) => key !== lockedFieldKey && value.trim() !== "")
      .map(([, value]) => value);

    return findLeastSigFigs(knownRawInputs);
  }

  function displayCalculatedValue() {
    if (!calculatedValuesBase || !lockedFieldKey) return;

    const input = fieldMap[lockedFieldKey];
    const targetUnit = unitMap[lockedFieldKey].value;
    const valueInSelectedUnit = convertFromBase[lockedFieldKey](
      calculatedValuesBase[lockedFieldKey],
      targetUnit,
    );

    if (!Number.isFinite(valueInSelectedUnit)) {
      input.value = "";
      return;
    }

    const leastSigFigs = getLeastSigFigsFromKnownInputs();

    input.value =
      sigFigCheckbox.checked && leastSigFigs > 0
        ? formatToSigFigs(valueInSelectedUnit, leastSigFigs)
        : formatPlainNumber(valueInSelectedUnit);
  }

  function validateValues(valuesBase) {
    if (Number.isFinite(valuesBase.Fb) && valuesBase.Fb < 0) {
      showTooltip("Buoyant force cannot be negative.", buoyantForceInput);
      return false;
    }

    if (Number.isFinite(valuesBase.rho) && valuesBase.rho <= 0) {
      showTooltip("Fluid density must be greater than zero.", densityInput);
      return false;
    }

    if (Number.isFinite(valuesBase.V) && valuesBase.V <= 0) {
      showTooltip("Displaced volume must be greater than zero.", volumeInput);
      return false;
    }

    if (Number.isFinite(valuesBase.g) && valuesBase.g <= 0) {
      showTooltip("Gravity must be greater than zero.", gravityInput);
      return false;
    }

    return true;
  }

  function solveUnknown(valuesBase) {
    let { Fb, rho, V, g } = valuesBase;
    const unknowns = Object.keys(valuesBase).filter((key) =>
      isNaN(valuesBase[key]),
    );

    if (unknowns.length !== 1) {
      return null;
    }

    const unknown = unknowns[0];

    try {
      if (unknown === "Fb") {
        Fb = rho * V * g;
      } else if (unknown === "rho") {
        if (V <= 0 || g <= 0) return null;
        rho = Fb / (V * g);
      } else if (unknown === "V") {
        if (rho <= 0 || g <= 0) return null;
        V = Fb / (rho * g);
      } else if (unknown === "g") {
        if (rho <= 0 || V <= 0) return null;
        g = Fb / (rho * V);
      } else {
        return null;
      }

      if ([Fb, rho, V, g].some((value) => !Number.isFinite(value))) {
        return null;
      }

      if (Fb < 0 || rho <= 0 || V <= 0 || g <= 0) {
        return null;
      }

      return { Fb, rho, V, g, unknown };
    } catch {
      return null;
    }
  }

  function calculate() {
    removeExistingTooltips();

    unlockCalculatedField();

    const { entered, values } = readCurrentValues();
    const invalidFields = getInvalidNumericFields(entered);

    if (invalidFields.length > 0) {
      invalidFields.forEach((key) => {
        showTooltip("Please enter a valid number.", fieldMap[key]);
      });
      solutionState.textContent = "One or more entries are not valid numbers.";
      return;
    }

    rawInputStrings = { ...entered };

    const knownCount = Object.values(values).filter(
      (value) => !isNaN(value),
    ).length;

    if (knownCount < 3) {
      solutionState.textContent =
        "Enter any three known values to solve the fourth.";
      return;
    }

    if (knownCount > 3) {
      solutionState.textContent = "Please leave exactly one value blank.";
      return;
    }

    const valuesBase = {
      Fb: !isNaN(values.Fb)
        ? convertToBase.Fb(values.Fb, unitBuoyantForceSelect.value)
        : NaN,
      rho: !isNaN(values.rho)
        ? convertToBase.rho(values.rho, unitDensitySelect.value)
        : NaN,
      V: !isNaN(values.V)
        ? convertToBase.V(values.V, unitVolumeSelect.value)
        : NaN,
      g: !isNaN(values.g)
        ? convertToBase.g(values.g, unitGravitySelect.value)
        : NaN,
    };

    if (!validateValues(valuesBase)) {
      solutionState.textContent = "Please correct the highlighted issue.";
      return;
    }

    const solved = solveUnknown(valuesBase);

    if (!solved) {
      solutionState.textContent =
        "The entered values do not produce a valid solution.";
      return;
    }

    calculatedValuesBase = solved;
    lockedFieldKey = solved.unknown;

    fieldMap[lockedFieldKey].readOnly = true;
    displayCalculatedValue();

    const labels = {
      Fb: "buoyant force",
      rho: "fluid density",
      V: "displaced volume",
      g: "gravity",
    };

    solutionState.textContent = `Solved ${labels[lockedFieldKey]}.`;
  }

  function handleUnitChange(key) {
    if (lockedFieldKey === key) {
      displayCalculatedValue();
      return;
    }

    const input = fieldMap[key];
    const raw = input.value.trim();

    if (raw === "") {
      input.dataset.unit = unitMap[key].value;
      calculate();
      return;
    }

    const numericValue = parseNumericInput(raw);
    if (!Number.isFinite(numericValue)) {
      calculate();
      return;
    }

    const oldUnit = input.dataset.unit || unitMap[key].value;
    const newUnit = unitMap[key].value;

    if (oldUnit === newUnit) {
      calculate();
      return;
    }

    const baseValue = convertToBase[key](numericValue, oldUnit);
    const convertedValue = convertFromBase[key](baseValue, newUnit);

    input.value = formatPlainNumber(convertedValue);
    input.dataset.unit = newUnit;
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
      handleUnitChange(key);
    });
  });

  sigFigCheckbox.addEventListener("change", () => {
    displayCalculatedValue();
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
      "\\Large \\color{#333}{F_b = \\rho V g}",
      document.getElementById("equation1"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{\\rho = \\frac{F_b}{V g}}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{V = \\frac{F_b}{\\rho g}}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{g = \\frac{F_b}{\\rho V}}",
      document.getElementById("equation4"),
      options,
    );
  } else {
    console.error(
      "KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.",
    );
  }
});
