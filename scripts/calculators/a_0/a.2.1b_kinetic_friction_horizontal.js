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
  const motionSelect = document.getElementById("inputMotion");
  const appliedForceInput = document.getElementById("inputFApp");
  const appliedForceDirectionSelect = document.getElementById("inputForceDirection");
  const muKInput = document.getElementById("inputMuK");
  const accelerationInput = document.getElementById("inputA");
  const accelerationDirectionSelect = document.getElementById("inputADirection");
  const gravityInput = document.getElementById("inputG");

  const weightOutput = document.getElementById("outputW");
  const fkOutput = document.getElementById("outputFk");
  const fNetOutput = document.getElementById("outputFNet");
  const accelerationOutput = document.getElementById("outputA");
  const motionState = document.getElementById("motionState");

  const unitMassSelect = document.getElementById("unitMass");
  const unitNormalSelect = document.getElementById("unitNormal");
  const unitAppliedForceSelect = document.getElementById("unitAppliedForce");
  const unitAccelerationSelect = document.getElementById("unitAcceleration");
  const unitGravitySelect = document.getElementById("unitGravity");
  const unitWeightSelect = document.getElementById("unitWeight");
  const unitFkSelect = document.getElementById("unitFk");
  const unitFNetSelect = document.getElementById("unitFNet");
  const unitAccelerationOutSelect = document.getElementById("unitAccelerationOut");

  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");

  const editableFieldMap = {
    m: massInput,
    N: normalInput,
    Fapp: appliedForceInput,
    muK: muKInput,
    a: accelerationInput,
    g: gravityInput,
  };

  const editableUnitMap = {
    m: unitMassSelect,
    N: unitNormalSelect,
    Fapp: unitAppliedForceSelect,
    a: unitAccelerationSelect,
    g: unitGravitySelect,
  };

  const outputFieldMap = {
    W: weightOutput,
    Fk: fkOutput,
    Fnet: fNetOutput,
    a: accelerationOutput,
  };

  const outputUnitMap = {
    W: unitWeightSelect,
    Fk: unitFkSelect,
    Fnet: unitFNetSelect,
    a: unitAccelerationOutSelect,
  };

  const convertToBase = {
    m: (value, unit) => convertMass(value, unit, "kg"),
    N: (value, unit) => convertForce(value, unit, "N"),
    Fapp: (value, unit) => convertForce(value, unit, "N"),
    a: (value, unit) => convertAcceleration(value, unit, "ms2"),
    g: (value, unit) => convertAcceleration(value, unit, "ms2"),
    W: (value, unit) => convertForce(value, unit, "N"),
    Fk: (value, unit) => convertForce(value, unit, "N"),
    Fnet: (value, unit) => convertForce(value, unit, "N"),
  };

  const convertFromBase = {
    m: (value, unit) => convertMass(value, "kg", unit),
    N: (value, unit) => convertForce(value, "N", unit),
    Fapp: (value, unit) => convertForce(value, "N", unit),
    a: (value, unit) => convertAcceleration(value, "ms2", unit),
    g: (value, unit) => convertAcceleration(value, "ms2", unit),
    W: (value, unit) => convertForce(value, "N", unit),
    Fk: (value, unit) => convertForce(value, "N", unit),
    Fnet: (value, unit) => convertForce(value, "N", unit),
  };

  let rawInputStrings = {
    m: "",
    N: "",
    Fapp: "",
    muK: "",
    a: "",
    g: gravityInput.value,
  };

  let calculatedValuesBase = null;
  let linkedSource = null;

  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    massInput.value = "";
    normalInput.value = "";
    appliedForceInput.value = "";
    muKInput.value = "";
    accelerationInput.value = "";
    gravityInput.value = "9.81";
    unitGravitySelect.value = "ms2";
    motionSelect.value = "right";
    appliedForceDirectionSelect.value = "right";
    accelerationDirectionSelect.value = "right";

    Object.keys(editableUnitMap).forEach((key) => {
      editableFieldMap[key].dataset.unit = editableUnitMap[key].value;
    });

    [massInput, normalInput, appliedForceInput, muKInput, accelerationInput].forEach((input) => {
      input.dataset.autofilled = "false";
    });
    linkedSource = null;

    rawInputStrings = {
      m: "",
      N: "",
      Fapp: "",
      muK: "",
      a: "",
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

  function signFromDirection(direction) {
    if (direction === "right") return 1;
    if (direction === "left") return -1;
    return 0;
  }

  function directionFromSign(value) {
    const tol = 1e-10;
    if (Math.abs(value) <= tol) return "zero";
    return value > 0 ? "right" : "left";
  }

  function getSolverTarget() {
    const trio = ["Fapp", "muK", "a"];
    const autofilledTargets = trio.filter((key) => editableFieldMap[key].dataset.autofilled === "true");

    if (autofilledTargets.length === 1) {
      return autofilledTargets[0];
    }

    const blankTargets = trio.filter((key) => editableFieldMap[key].value.trim() === "");
    if (blankTargets.length === 1) {
      return blankTargets[0];
    }

    return null;
  }

  function getLeastSigFigsFromKnownInputs() {
    const derivedKey = linkedSource === "m" ? "N" : linkedSource === "N" ? "m" : null;
    const solverTarget = getSolverTarget();

    const knownRawInputs = Object.entries(rawInputStrings)
      .filter(([key, value]) => key !== derivedKey && key !== solverTarget && value.trim() !== "")
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

  function formatSolvedTrioValue(value, key, sourceKeys) {
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

  function applySolvedTrioValues(solved) {
    const solverTarget = solved.solverTarget;

    if (solverTarget === "Fapp" && Number.isFinite(solved.FappMagnitude)) {
      appliedForceInput.value = formatSolvedTrioValue(solved.FappMagnitude, "Fapp", ["muK", "a", "m", "N", "g"]);
      appliedForceDirectionSelect.value = solved.FappDirection;
      appliedForceInput.dataset.autofilled = "true";
    }

    if (solverTarget === "muK" && Number.isFinite(solved.muK)) {
      const leastSigFigs = findLeastSigFigs([rawInputStrings.Fapp, rawInputStrings.a, rawInputStrings.m, rawInputStrings.N, rawInputStrings.g]);
      muKInput.value = sigFigCheckbox.checked && leastSigFigs > 0
        ? formatToSigFigs(solved.muK, leastSigFigs)
        : formatPlainNumber(solved.muK);
      muKInput.dataset.autofilled = "true";
    }

    if (solverTarget === "a" && Number.isFinite(solved.aMagnitude)) {
      accelerationInput.value = formatSolvedTrioValue(solved.aMagnitude, "a", ["Fapp", "muK", "m", "N", "g"]);
      accelerationDirectionSelect.value = solved.aDirection;
      accelerationInput.dataset.autofilled = "true";
    }
  }

  function describeMotion(solved) {
    const motionText = solved.motionDirection === "right" ? "to the right" : "to the left";
    const frictionText = solved.motionDirection === "right" ? "to the left" : "to the right";

    if (!Number.isFinite(solved.aSigned)) {
      return "Enter enough information to analyse the sliding motion.";
    }

    const tol = 1e-10;
    if (Math.abs(solved.aSigned) <= tol) {
      return `Sliding ${motionText} at constant speed. Kinetic friction acts ${frictionText}.`;
    }

    const sameDirection = Math.sign(solved.aSigned) === signFromDirection(solved.motionDirection);
    if (sameDirection) {
      return `Sliding ${motionText} and speeding up. Acceleration is ${motionText}. Kinetic friction acts ${frictionText}.`;
    }

    const accelText = solved.motionDirection === "right" ? "to the left" : "to the right";
    return `Sliding ${motionText} and slowing down. Acceleration is ${accelText}. Kinetic friction acts ${frictionText}.`;
  }

  function solve(valuesBase) {
    const solved = {
      m: valuesBase.m,
      N: valuesBase.N,
      motionDirection: valuesBase.motionDirection,
      FappMagnitude: valuesBase.FappMagnitude,
      FappDirection: valuesBase.FappDirection,
      muK: valuesBase.muK,
      aMagnitude: valuesBase.aMagnitude,
      aDirection: valuesBase.aDirection,
      g: valuesBase.g,
      W: NaN,
      Fk: NaN,
      Fnet: NaN,
      aSigned: NaN,
      state: "Enter mass or normal force to begin.",
      solverTarget: valuesBase.solverTarget,
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

    if (!Number.isFinite(solved.N) || !Number.isFinite(solved.m) || solved.m <= 0) {
      solved.state = "Enter mass or normal force to calculate kinetic friction.";
      return solved;
    }

    const signMotion = signFromDirection(solved.motionDirection);
    const target = solved.solverTarget;

    const hasKnownFapp = target !== "Fapp" && Number.isFinite(solved.FappMagnitude);
    const hasKnownMuK = target !== "muK" && Number.isFinite(solved.muK);
    const hasKnownA = target !== "a" && Number.isFinite(solved.aMagnitude);

    const FappSigned = hasKnownFapp
      ? (solved.FappDirection === "zero" ? 0 : signFromDirection(solved.FappDirection) * solved.FappMagnitude)
      : NaN;

    const aSignedKnown = hasKnownA
      ? (solved.aDirection === "zero" || solved.aMagnitude === 0 ? 0 : signFromDirection(solved.aDirection) * solved.aMagnitude)
      : NaN;

    if (target === null) {
      if (!(Number.isFinite(solved.FappMagnitude) && Number.isFinite(solved.muK) && Number.isFinite(solved.aMagnitude))) {
        solved.state = "Enter any two of applied force, μk, and acceleration. Leave the third blank to solve it.";
        return solved;
      }

      const expectedASigned = (FappSigned - signMotion * solved.muK * solved.N) / solved.m;
      if (Math.abs(expectedASigned - aSignedKnown) > 1e-8) {
        solved.state = "Those inputs do not agree. Check the force, μk, and acceleration values.";
        return solved;
      }

      solved.Fk = solved.muK * solved.N;
      solved.Fnet = Math.abs(FappSigned - signMotion * solved.Fk);
      solved.aSigned = aSignedKnown;
      solved.state = describeMotion(solved);
      return solved;
    }

    if (target === "a") {
      if (!(Number.isFinite(solved.FappMagnitude) && Number.isFinite(solved.muK))) {
        solved.state = "To solve acceleration, enter the applied force and μk.";
        return solved;
      }

      solved.Fk = solved.muK * solved.N;
      solved.aSigned = (FappSigned - signMotion * solved.Fk) / solved.m;
      solved.aMagnitude = Math.abs(solved.aSigned);
      solved.aDirection = directionFromSign(solved.aSigned);
      solved.Fnet = Math.abs(solved.m * solved.aSigned);
      solved.state = describeMotion(solved);
      return solved;
    }

    if (target === "muK") {
      if (!(Number.isFinite(solved.FappMagnitude) && Number.isFinite(solved.aMagnitude))) {
        solved.state = "To solve μk, enter the applied force and acceleration.";
        return solved;
      }

      solved.aSigned = aSignedKnown;
      const muK = ((FappSigned - solved.m * solved.aSigned) * signMotion) / solved.N;
      if (!Number.isFinite(muK) || muK < -1e-10) {
        solved.state = "The inputs would require a negative μk, which is not physically valid.";
        return solved;
      }

      solved.muK = Math.max(0, muK);
      solved.Fk = solved.muK * solved.N;
      solved.Fnet = Math.abs(solved.m * solved.aSigned);
      solved.state = describeMotion(solved);
      return solved;
    }

    if (target === "Fapp") {
      if (!(Number.isFinite(solved.muK) && Number.isFinite(solved.aMagnitude))) {
        solved.state = "To solve the applied force, enter μk and acceleration.";
        return solved;
      }

      solved.aSigned = aSignedKnown;
      solved.Fk = solved.muK * solved.N;
      const FappSignedSolved = solved.m * solved.aSigned + signMotion * solved.Fk;
      solved.FappMagnitude = Math.abs(FappSignedSolved);
      solved.FappDirection = directionFromSign(FappSignedSolved);
      solved.Fnet = Math.abs(solved.m * solved.aSigned);
      solved.state = describeMotion(solved);
      return solved;
    }

    solved.state = "Enter enough information to continue.";
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

    if (Number.isFinite(valuesBase.FappMagnitude) && valuesBase.FappMagnitude < 0) {
      showTooltip("Applied force magnitude cannot be negative.", appliedForceInput);
      return false;
    }

    if (Number.isFinite(valuesBase.muK) && valuesBase.muK < 0) {
      showTooltip("The kinetic friction coefficient cannot be negative.", muKInput);
      return false;
    }

    if (Number.isFinite(valuesBase.aMagnitude) && valuesBase.aMagnitude < 0) {
      showTooltip("Acceleration magnitude cannot be negative.", accelerationInput);
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
    applySolvedTrioValues(calculatedValuesBase);

    weightOutput.value = formatOutput(calculatedValuesBase.W, "W");
    fkOutput.value = formatOutput(calculatedValuesBase.Fk, "Fk");
    fNetOutput.value = formatOutput(calculatedValuesBase.Fnet, "Fnet");
    accelerationOutput.value = formatOutput(Math.abs(calculatedValuesBase.aSigned), "a");
    motionState.textContent = calculatedValuesBase.state;
  }

  function calculate() {
    removeExistingTooltips();

    const entered = {
      m: massInput.value,
      N: normalInput.value,
      Fapp: appliedForceInput.value,
      muK: muKInput.value,
      a: accelerationInput.value,
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
    const solverTarget = getSolverTarget();

    const values = {
      m: parseInputValue(entered.m),
      N: parseInputValue(entered.N),
      Fapp: solverTarget === "Fapp" ? NaN : parseInputValue(entered.Fapp),
      muK: solverTarget === "muK" ? NaN : parseInputValue(entered.muK),
      a: solverTarget === "a" ? NaN : parseInputValue(entered.a),
      g: parseInputValue(entered.g),
    };

    const valuesBase = {
      m: Number.isFinite(values.m) ? convertToBase.m(values.m, unitMassSelect.value) : NaN,
      N: Number.isFinite(values.N) ? convertToBase.N(values.N, unitNormalSelect.value) : NaN,
      FappMagnitude: Number.isFinite(values.Fapp) ? convertToBase.Fapp(values.Fapp, unitAppliedForceSelect.value) : NaN,
      FappDirection: appliedForceDirectionSelect.value,
      muK: values.muK,
      aMagnitude: Number.isFinite(values.a) ? convertToBase.a(values.a, unitAccelerationSelect.value) : NaN,
      aDirection: accelerationDirectionSelect.value,
      g: Number.isFinite(values.g) ? convertToBase.g(values.g, unitGravitySelect.value) : NaN,
      motionDirection: motionSelect.value,
      solverTarget,
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

  function handleTrioInputChange(key) {
    editableFieldMap[key].dataset.autofilled = "false";
    calculate();
  }

  Object.keys(editableUnitMap).forEach((key) => {
    editableFieldMap[key].dataset.unit = editableUnitMap[key].value;
  });

  [massInput, normalInput, appliedForceInput, muKInput, accelerationInput].forEach((input) => {
    input.dataset.autofilled = "false";
  });

  massInput.addEventListener("input", () => handleLinkedInputChange("m"));
  normalInput.addEventListener("input", () => handleLinkedInputChange("N"));
  appliedForceInput.addEventListener("input", () => handleTrioInputChange("Fapp"));
  muKInput.addEventListener("input", () => handleTrioInputChange("muK"));
  accelerationInput.addEventListener("input", () => handleTrioInputChange("a"));
  gravityInput.addEventListener("input", calculate);

  [motionSelect, appliedForceDirectionSelect, accelerationDirectionSelect].forEach((select) => {
    select.addEventListener("change", calculate);
  });

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
      "\\Large \\color{#333}{F_k = \\mu_k N}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{\\Sigma F_x = F_{\\text{app}} + F_f}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{a = \\frac{\\Sigma F_x}{m}}",
      document.getElementById("equation4"),
      options,
    );
  } else {
    console.error("KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.");
  }
});
