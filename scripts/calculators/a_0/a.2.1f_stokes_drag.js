import { convertForce } from "../../utils/units.js";

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
  const dragForceInput = document.getElementById("inputFd");
  const viscosityInput = document.getElementById("inputEta");
  const radiusInput = document.getElementById("inputR");
  const speedInput = document.getElementById("inputV");

  const unitDragForceSelect = document.getElementById("unitFd");
  const unitViscositySelect = document.getElementById("unitEta");
  const unitRadiusSelect = document.getElementById("unitR");
  const unitSpeedSelect = document.getElementById("unitV");

  const solutionState = document.getElementById("solutionState");
  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");

  const fieldMap = {
    Fd: dragForceInput,
    eta: viscosityInput,
    r: radiusInput,
    v: speedInput,
  };

  const unitMap = {
    Fd: unitDragForceSelect,
    eta: unitViscositySelect,
    r: unitRadiusSelect,
    v: unitSpeedSelect,
  };

  const viscosityConversionRates = {
    pas: 1,
    mpas: 0.001,
    cp: 0.001,
    p: 0.1,
  };

  const radiusConversionRates = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
  };

  const speedConversionRates = {
    mps: 1,
    cmps: 0.01,
    mmps: 0.001,
    kmph: 1000 / 3600,
  };

  function convertViscosity(value, fromUnit, toUnit) {
    const fromRate = viscosityConversionRates[fromUnit];
    const toRate = viscosityConversionRates[toUnit];

    if (fromRate === undefined || toRate === undefined) {
      console.error(
        `Invalid viscosity unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
      );
      return NaN;
    }

    return (value * fromRate) / toRate;
  }

  function convertRadius(value, fromUnit, toUnit) {
    const fromRate = radiusConversionRates[fromUnit];
    const toRate = radiusConversionRates[toUnit];

    if (fromRate === undefined || toRate === undefined) {
      console.error(
        `Invalid radius unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
      );
      return NaN;
    }

    return (value * fromRate) / toRate;
  }

  function convertSpeed(value, fromUnit, toUnit) {
    const fromRate = speedConversionRates[fromUnit];
    const toRate = speedConversionRates[toUnit];

    if (fromRate === undefined || toRate === undefined) {
      console.error(
        `Invalid speed unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
      );
      return NaN;
    }

    return (value * fromRate) / toRate;
  }

  const convertToBase = {
    Fd: (value, unit) => convertForce(value, unit, "N"),
    eta: (value, unit) => convertViscosity(value, unit, "pas"),
    r: (value, unit) => convertRadius(value, unit, "m"),
    v: (value, unit) => convertSpeed(value, unit, "mps"),
  };

  const convertFromBase = {
    Fd: (value, unit) => convertForce(value, "N", unit),
    eta: (value, unit) => convertViscosity(value, "pas", unit),
    r: (value, unit) => convertRadius(value, "m", unit),
    v: (value, unit) => convertSpeed(value, "mps", unit),
  };

  let lockedFieldKey = null;

  let rawInputStrings = {
    Fd: "",
    eta: "",
    r: "",
    v: "",
  };

  let calculatedValuesBase = null;

  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    Object.keys(fieldMap).forEach((key) => {
      fieldMap[key].value = "";
      fieldMap[key].readOnly = false;
      fieldMap[key].dataset.unit = unitMap[key].value;
    });

    lockedFieldKey = null;
    rawInputStrings = {
      Fd: "",
      eta: "",
      r: "",
      v: "",
    };
    calculatedValuesBase = null;
    solutionState.textContent = "Enter any three known values to solve the fourth.";
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
      Fd: dragForceInput.value,
      eta: viscosityInput.value,
      r: radiusInput.value,
      v: speedInput.value,
    };

    const values = {
      Fd: parseInputValue(entered.Fd),
      eta: parseInputValue(entered.eta),
      r: parseInputValue(entered.r),
      v: parseInputValue(entered.v),
    };

    return { entered, values };
  }

  function getLeastSigFigsFromKnownInputs() {
    const knownRawInputs = Object.entries(rawInputStrings)
      .filter(
        ([key, value]) => key !== lockedFieldKey && value.trim() !== "",
      )
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
    if (Number.isFinite(valuesBase.Fd) && valuesBase.Fd < 0) {
      showTooltip("Drag force magnitude cannot be negative.", dragForceInput);
      return false;
    }

    if (Number.isFinite(valuesBase.eta) && valuesBase.eta <= 0) {
      showTooltip("Dynamic viscosity must be greater than zero.", viscosityInput);
      return false;
    }

    if (Number.isFinite(valuesBase.r) && valuesBase.r <= 0) {
      showTooltip("Sphere radius must be greater than zero.", radiusInput);
      return false;
    }

    if (Number.isFinite(valuesBase.v) && valuesBase.v < 0) {
      showTooltip("Relative speed cannot be negative.", speedInput);
      return false;
    }

    return true;
  }

  function solveUnknown(valuesBase) {
    let { Fd, eta, r, v } = valuesBase;
    const unknowns = Object.keys(valuesBase).filter((key) => isNaN(valuesBase[key]));

    if (unknowns.length !== 1) {
      return null;
    }

    const unknown = unknowns[0];
    const constant = 6 * Math.PI;

    try {
      if (unknown === "Fd") {
        Fd = constant * eta * r * v;
      } else if (unknown === "eta") {
        if (r <= 0 || v <= 0) return null;
        eta = Fd / (constant * r * v);
      } else if (unknown === "r") {
        if (eta <= 0 || v <= 0) return null;
        r = Fd / (constant * eta * v);
      } else if (unknown === "v") {
        if (eta <= 0 || r <= 0) return null;
        v = Fd / (constant * eta * r);
      } else {
        return null;
      }

      if ([Fd, eta, r, v].some((value) => !Number.isFinite(value))) {
        return null;
      }

      if (eta <= 0 || r <= 0 || v < 0 || Fd < 0) {
        return null;
      }

      return { Fd, eta, r, v, unknown };
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

    const knownCount = Object.values(values).filter((value) => !isNaN(value)).length;

    if (knownCount < 3) {
      solutionState.textContent = "Enter any three known values to solve the fourth.";
      return;
    }

    if (knownCount > 3) {
      solutionState.textContent = "Please leave exactly one value blank.";
      return;
    }

    const valuesBase = {
      Fd: !isNaN(values.Fd)
        ? convertToBase.Fd(values.Fd, unitDragForceSelect.value)
        : NaN,
      eta: !isNaN(values.eta)
        ? convertToBase.eta(values.eta, unitViscositySelect.value)
        : NaN,
      r: !isNaN(values.r)
        ? convertToBase.r(values.r, unitRadiusSelect.value)
        : NaN,
      v: !isNaN(values.v)
        ? convertToBase.v(values.v, unitSpeedSelect.value)
        : NaN,
    };

    if (!validateValues(valuesBase)) {
      solutionState.textContent = "Please review the highlighted input.";
      return;
    }

    const solved = solveUnknown(valuesBase);

    if (!solved) {
      solutionState.textContent =
        "That combination does not produce a valid Stokes-law solution.";
      return;
    }

    lockedFieldKey = solved.unknown;
    calculatedValuesBase = solved;
    fieldMap[lockedFieldKey].readOnly = true;

    const labelMap = {
      Fd: "drag force",
      eta: "dynamic viscosity",
      r: "sphere radius",
      v: "relative speed",
    };

    solutionState.textContent = `Solved ${labelMap[lockedFieldKey]} from the other three values.`;
    displayCalculatedValue();
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
      "\\Large \\color{#333}{F_d = 6\\pi \\eta r v}",
      document.getElementById("equation1"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{\\eta = \\frac{F_d}{6\\pi r v}}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{r = \\frac{F_d}{6\\pi \\eta v}}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{v = \\frac{F_d}{6\\pi \\eta r}}",
      document.getElementById("equation4"),
      options,
    );
  } else {
    console.error(
      "KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.",
    );
  }
});
