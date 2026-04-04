import {
  convertMass,
  convertForce,
  convertAcceleration,
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
  const normalInput = document.getElementById("inputN");
  const appliedForceInput = document.getElementById("inputFApp");
  const directionSelect = document.getElementById("inputDirection");
  const muSInput = document.getElementById("inputMuS");
  const gravityInput = document.getElementById("inputG");

  const weightOutput = document.getElementById("outputW");
  const fsMaxOutput = document.getElementById("outputFsMax");
  const fsActualOutput = document.getElementById("outputFsActual");
  const fMinOutput = document.getElementById("outputFMin");
  const motionState = document.getElementById("motionState");

  const unitMassSelect = document.getElementById("unitMass");
  const unitNormalSelect = document.getElementById("unitNormal");
  const unitAppliedForceSelect = document.getElementById("unitAppliedForce");
  const unitGravitySelect = document.getElementById("unitGravity");
  const unitWeightSelect = document.getElementById("unitWeight");
  const unitFsMaxSelect = document.getElementById("unitFsMax");
  const unitFsActualSelect = document.getElementById("unitFsActual");
  const unitFMinSelect = document.getElementById("unitFMin");

  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");

  const editableFieldMap = {
    m: massInput,
    N: normalInput,
    Fapp: appliedForceInput,
    muS: muSInput,
    g: gravityInput,
  };

  const editableUnitMap = {
    m: unitMassSelect,
    N: unitNormalSelect,
    Fapp: unitAppliedForceSelect,
    g: unitGravitySelect,
  };

  const outputFieldMap = {
    W: weightOutput,
    FsMax: fsMaxOutput,
    FsActual: fsActualOutput,
    Fmin: fMinOutput,
  };

  const outputUnitMap = {
    W: unitWeightSelect,
    FsMax: unitFsMaxSelect,
    FsActual: unitFsActualSelect,
    Fmin: unitFMinSelect,
  };

  const convertToBase = {
    m: (value, unit) => convertMass(value, unit, "kg"),
    N: (value, unit) => convertForce(value, unit, "N"),
    Fapp: (value, unit) => convertForce(value, unit, "N"),
    g: (value, unit) => convertAcceleration(value, unit, "ms2"),
    W: (value, unit) => convertForce(value, unit, "N"),
    FsMax: (value, unit) => convertForce(value, unit, "N"),
    FsActual: (value, unit) => convertForce(value, unit, "N"),
    Fmin: (value, unit) => convertForce(value, unit, "N"),
  };

  const convertFromBase = {
    m: (value, unit) => convertMass(value, "kg", unit),
    N: (value, unit) => convertForce(value, "N", unit),
    Fapp: (value, unit) => convertForce(value, "N", unit),
    g: (value, unit) => convertAcceleration(value, "ms2", unit),
    W: (value, unit) => convertForce(value, "N", unit),
    FsMax: (value, unit) => convertForce(value, "N", unit),
    FsActual: (value, unit) => convertForce(value, "N", unit),
    Fmin: (value, unit) => convertForce(value, "N", unit),
  };

  let rawInputStrings = {
    m: "",
    N: "",
    Fapp: "",
    muS: "",
    g: gravityInput.value,
  };

  let calculatedValuesBase = null;
  let linkedSource = null;

  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    massInput.value = "";
    normalInput.value = "";
    appliedForceInput.value = "";
    muSInput.value = "";
    gravityInput.value = "9.81";
    unitGravitySelect.value = "ms2";
    directionSelect.value = "right";

    Object.keys(editableUnitMap).forEach((key) => {
      editableFieldMap[key].dataset.unit = editableUnitMap[key].value;
    });

    massInput.dataset.autofilled = "false";
    normalInput.dataset.autofilled = "false";
    linkedSource = null;

    rawInputStrings = {
      m: "",
      N: "",
      Fapp: "",
      muS: "",
      g: gravityInput.value,
    };

    calculatedValuesBase = null;
    removeExistingTooltips();
    clearOutputs();
    calculate();
  }

  function clearOutputs() {
    Object.values(outputFieldMap).forEach((field) => {
      field.value = "";
    });
    motionState.textContent = "Awaiting inputs.";
  }

  function removeExistingTooltips() {
    document.querySelectorAll(".copy-tooltip").forEach((tooltip) => tooltip.remove());
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
        tooltip.remove();
      }
    }, 5000);
  }

  function parseInputValue(str) {
    return parseNumericInput(str);
  }

  function getLeastSigFigsFromKnownInputs() {
    const derivedKey = linkedSource === "m" ? "N" : linkedSource === "N" ? "m" : null;

    const knownRawInputs = Object.entries(rawInputStrings)
      .filter(([key, value]) => key !== derivedKey && value.trim() !== "")
      .map(([, value]) => value);

    return findLeastSigFigs(knownRawInputs);
  }

  function formatOutput(value, key) {
    if (!Number.isFinite(value)) return "";

    const selectedUnit = outputUnitMap[key].value;
    const convertedValue = convertFromBase[key](value, selectedUnit);
    const leastSigFigs = getLeastSigFigsFromKnownInputs();

    return sigFigCheckbox.checked && leastSigFigs > 0
      ? formatToSigFigs(convertedValue, leastSigFigs)
      : formatPlainNumber(convertedValue);
  }

  function formatLinkedValue(value, key, sourceKeys) {
    if (!Number.isFinite(value)) return "";

    const selectedUnit = editableUnitMap[key].value;
    const convertedValue = convertFromBase[key](value, selectedUnit);
    const sourceInputs = sourceKeys
      .map((sourceKey) => rawInputStrings[sourceKey])
      .filter((entry) => entry && entry.trim() !== "");

    const leastSigFigs = findLeastSigFigs(sourceInputs);

    return sigFigCheckbox.checked && leastSigFigs > 0
      ? formatToSigFigs(convertedValue, leastSigFigs)
      : formatPlainNumber(convertedValue);
  }

  function updateLinkedInputs(valuesBase) {
    if (!Number.isFinite(valuesBase.g) || valuesBase.g <= 0) return;

    if (linkedSource === "m" && Number.isFinite(valuesBase.m)) {
      const normalBase = valuesBase.m * valuesBase.g;
      valuesBase.N = normalBase;
      normalInput.value = formatLinkedValue(normalBase, "N", ["m", "g"]);
      normalInput.dataset.autofilled = "true";
      massInput.dataset.autofilled = "false";
    } else if (linkedSource === "N" && Number.isFinite(valuesBase.N)) {
      const massBase = valuesBase.N / valuesBase.g;
      valuesBase.m = massBase;
      massInput.value = formatLinkedValue(massBase, "m", ["N", "g"]);
      massInput.dataset.autofilled = "true";
      normalInput.dataset.autofilled = "false";
    } else {
      massInput.dataset.autofilled = "false";
      normalInput.dataset.autofilled = "false";
    }
  }

  function syncLinkedPair(valuesBase) {
    if (!Number.isFinite(valuesBase.g) || valuesBase.g <= 0) {
      return valuesBase;
    }

    if (linkedSource === "m" && Number.isFinite(valuesBase.m)) {
      valuesBase.N = valuesBase.m * valuesBase.g;
      return valuesBase;
    }

    if (linkedSource === "N" && Number.isFinite(valuesBase.N)) {
      valuesBase.m = valuesBase.N / valuesBase.g;
      return valuesBase;
    }

    if (Number.isFinite(valuesBase.m) && !Number.isFinite(valuesBase.N)) {
      linkedSource = "m";
      valuesBase.N = valuesBase.m * valuesBase.g;
      return valuesBase;
    }

    if (!Number.isFinite(valuesBase.m) && Number.isFinite(valuesBase.N)) {
      linkedSource = "N";
      valuesBase.m = valuesBase.N / valuesBase.g;
      return valuesBase;
    }

    return valuesBase;
  }

  function solve(valuesBase) {
    const solved = {
      m: valuesBase.m,
      N: valuesBase.N,
      Fapp: valuesBase.Fapp,
      muS: valuesBase.muS,
      g: valuesBase.g,
      direction: valuesBase.direction,
      W: NaN,
      FsMax: NaN,
      FsActual: NaN,
      Fmin: NaN,
      state: "Enter mass or normal force to begin.",
    };

    if (!Number.isFinite(solved.g)) {
      solved.state = "Enter gravity to continue.";
      return solved;
    }

    if (Number.isFinite(solved.m) && !Number.isFinite(solved.N)) {
      solved.N = solved.m * solved.g;
    }

    if (!Number.isFinite(solved.m) && Number.isFinite(solved.N)) {
      solved.m = solved.N / solved.g;
    }

    if (Number.isFinite(solved.N)) {
      solved.W = solved.N;
    } else if (Number.isFinite(solved.m)) {
      solved.W = solved.m * solved.g;
      solved.N = solved.W;
    }

    if (!Number.isFinite(solved.N)) {
      solved.state = "Enter mass or normal force to calculate static friction.";
      return solved;
    }

    if (!Number.isFinite(solved.muS)) {
      solved.state = "Enter μs to calculate the static-friction limit.";
      return solved;
    }

    solved.FsMax = solved.muS * solved.N;
    solved.Fmin = solved.FsMax;

    if (!Number.isFinite(solved.Fapp)) {
      solved.state = "Static friction can provide up to the maximum value shown. Enter an applied force to test whether motion begins.";
      return solved;
    }

    if (solved.Fapp === 0) {
      solved.FsActual = 0;
      solved.state = "At rest. No applied force is acting, so static friction is not needed.";
      return solved;
    }

    const tol = 1e-10;
    const oppositeDirection = solved.direction === "right" ? "left" : "right";

    if (solved.Fapp < solved.FsMax - tol) {
      solved.FsActual = solved.Fapp;
      solved.state = `At rest. Static friction has magnitude ${formatPlainNumber(solved.Fapp)} N and acts to the ${oppositeDirection}.`;
      return solved;
    }

    if (Math.abs(solved.Fapp - solved.FsMax) <= tol) {
      solved.FsActual = solved.FsMax;
      solved.state = `At limiting equilibrium. Static friction is at its maximum and acts to the ${oppositeDirection}. Any larger force will start motion.`;
      return solved;
    }

    solved.FsActual = solved.FsMax;
    solved.state = `Static friction cannot hold. The block will start moving to the ${solved.direction}. Use the kinetic-friction calculator for the motion after slipping begins.`;
    return solved;
  }

  function checkValidity(valuesBase) {
    if (Number.isFinite(valuesBase.m) && valuesBase.m < 0) {
      showTooltip("Mass cannot be negative.", massInput);
      return false;
    }

    if (Number.isFinite(valuesBase.N) && valuesBase.N < 0) {
      showTooltip("Normal force cannot be negative.", normalInput);
      return false;
    }

    if (Number.isFinite(valuesBase.Fapp) && valuesBase.Fapp < 0) {
      showTooltip("Applied force magnitude cannot be negative.", appliedForceInput);
      return false;
    }

    if (Number.isFinite(valuesBase.muS) && valuesBase.muS < 0) {
      showTooltip("The static friction coefficient cannot be negative.", muSInput);
      return false;
    }

    if (Number.isFinite(valuesBase.g) && valuesBase.g <= 0) {
      showTooltip("Gravity must be greater than zero.", gravityInput);
      return false;
    }

    return true;
  }

  function displayCalculatedValues() {
    if (!calculatedValuesBase) {
      clearOutputs();
      return;
    }

    updateLinkedInputs(calculatedValuesBase);

    weightOutput.value = formatOutput(calculatedValuesBase.W, "W");
    fsMaxOutput.value = formatOutput(calculatedValuesBase.FsMax, "FsMax");
    fsActualOutput.value = formatOutput(calculatedValuesBase.FsActual, "FsActual");
    fMinOutput.value = formatOutput(calculatedValuesBase.Fmin, "Fmin");
    motionState.textContent = calculatedValuesBase.state;
  }

  function calculate() {
    removeExistingTooltips();

    const entered = {
      m: massInput.value,
      N: normalInput.value,
      Fapp: appliedForceInput.value,
      muS: muSInput.value,
      g: gravityInput.value,
    };

    const invalidFields = getInvalidNumericFields(entered);
    if (invalidFields.length > 0) {
      invalidFields.forEach((key) => {
        if (editableFieldMap[key]) {
          showTooltip("Please enter a valid number.", editableFieldMap[key]);
        }
      });
      calculatedValuesBase = null;
      clearOutputs();
      return;
    }

    rawInputStrings = { ...entered };

    const values = {
      m: parseInputValue(entered.m),
      N: parseInputValue(entered.N),
      Fapp: parseInputValue(entered.Fapp),
      muS: parseInputValue(entered.muS),
      g: parseInputValue(entered.g),
    };

    const valuesBase = {
      m: Number.isFinite(values.m) ? convertToBase.m(values.m, unitMassSelect.value) : NaN,
      N: Number.isFinite(values.N) ? convertToBase.N(values.N, unitNormalSelect.value) : NaN,
      Fapp: Number.isFinite(values.Fapp) ? convertToBase.Fapp(values.Fapp, unitAppliedForceSelect.value) : NaN,
      muS: values.muS,
      g: Number.isFinite(values.g) ? convertToBase.g(values.g, unitGravitySelect.value) : NaN,
      direction: directionSelect.value,
    };

    syncLinkedPair(valuesBase);

    if (!checkValidity(valuesBase)) {
      calculatedValuesBase = null;
      clearOutputs();
      return;
    }

    calculatedValuesBase = solve(valuesBase);
    displayCalculatedValues();
  }

  function handleEditableUnitChange(key) {
    const input = editableFieldMap[key];
    const raw = input.value.trim();
    const oldUnit = input.dataset.unit || editableUnitMap[key].value;
    const newUnit = editableUnitMap[key].value;

    if (oldUnit === newUnit) {
      calculate();
      return;
    }

    if (input.dataset.autofilled === "true") {
      input.dataset.unit = newUnit;
      calculate();
      return;
    }

    if (raw === "") {
      input.dataset.unit = newUnit;
      calculate();
      return;
    }

    const numericValue = parseNumericInput(raw);
    if (!Number.isFinite(numericValue)) {
      calculate();
      return;
    }

    const baseValue = convertToBase[key](numericValue, oldUnit);
    const convertedValue = convertFromBase[key](baseValue, newUnit);

    input.value = formatPlainNumber(convertedValue);
    input.dataset.unit = newUnit;
    calculate();
  }

  function handleLinkedInputChange(changedKey) {
    const otherKey = changedKey === "m" ? "N" : "m";
    const changedField = editableFieldMap[changedKey];
    const otherField = editableFieldMap[otherKey];
    const changedValue = changedField.value.trim();
    const otherWasAutofilled = otherField.dataset.autofilled === "true";

    if (changedValue === "") {
      if (linkedSource === changedKey && otherWasAutofilled) {
        otherField.value = "";
        otherField.dataset.autofilled = "false";
      }
      linkedSource = null;
      changedField.dataset.autofilled = "false";
      calculate();
      return;
    }

    linkedSource = changedKey;
    changedField.dataset.autofilled = "false";
    otherField.dataset.autofilled = "true";
    calculate();
  }

  Object.keys(editableUnitMap).forEach((key) => {
    editableFieldMap[key].dataset.unit = editableUnitMap[key].value;
  });

  massInput.dataset.autofilled = "false";
  normalInput.dataset.autofilled = "false";

  massInput.addEventListener("input", () => handleLinkedInputChange("m"));
  normalInput.addEventListener("input", () => handleLinkedInputChange("N"));

  [appliedForceInput, muSInput, gravityInput].forEach((input) => {
    input.addEventListener("input", calculate);
  });

  directionSelect.addEventListener("change", calculate);

  Object.keys(editableUnitMap).forEach((key) => {
    editableUnitMap[key].addEventListener("change", () => handleEditableUnitChange(key));
  });

  Object.values(outputUnitMap).forEach((select) => {
    select.addEventListener("change", displayCalculatedValues);
  });

  sigFigCheckbox.addEventListener("change", calculate);

  calculate();
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof katex !== "undefined") {
    const options = {
      throwOnError: false,
      displayMode: true,
    };

    katex.render(
      "\\Large \\color{#333}{N = m g}",
      document.getElementById("equation1"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{F_s \\leq \\mu_s N}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{F_{s,\\max} = \\mu_s N}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{F_{\\min} = F_{s,\\max}}",
      document.getElementById("equation4"),
      options,
    );
  } else {
    console.error("KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.");
  }
});
