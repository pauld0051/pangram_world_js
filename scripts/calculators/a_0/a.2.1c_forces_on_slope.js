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
  const weightInput = document.getElementById("inputW");
  const thetaInput = document.getElementById("inputTheta");
  const appliedForceInput = document.getElementById("inputFApp");
  const appliedForceDirection = document.getElementById("inputFAppDirection");
  const muInput = document.getElementById("inputMu");
  const gravityInput = document.getElementById("inputG");
  const accelerationInput = document.getElementById("inputA");
  const accelerationDirection = document.getElementById("inputADirection");
  const motionModeInputs = Array.from(document.querySelectorAll('input[name="motionMode"]'));

  const unitMass = document.getElementById("unitMass");
  const unitWeight = document.getElementById("unitWeight");
  const unitTheta = document.getElementById("unitTheta");
  const unitAppliedForce = document.getElementById("unitAppliedForce");
  const unitGravity = document.getElementById("unitGravity");
  const unitAcceleration = document.getElementById("unitAcceleration");

  const outputNormal = document.getElementById("outputNormal");
  const outputParallel = document.getElementById("outputParallel");
  const outputFrictionMax = document.getElementById("outputFrictionMax");
  const outputFriction = document.getElementById("outputFriction");
  const outputFrictionDirection = document.getElementById("outputFrictionDirection");
  const outputNetForce = document.getElementById("outputNetForce");
  const outputNetForceDirection = document.getElementById("outputNetForceDirection");
  const outputAcceleration = document.getElementById("outputAcceleration");
  const outputAccelerationDirection = document.getElementById("outputAccelerationDirection");

  const unitNormalOut = document.getElementById("unitNormalOut");
  const unitParallelOut = document.getElementById("unitParallelOut");
  const unitFrictionMaxOut = document.getElementById("unitFrictionMaxOut");
  const unitFrictionOut = document.getElementById("unitFrictionOut");
  const unitNetForceOut = document.getElementById("unitNetForceOut");
  const unitAccelerationOut = document.getElementById("unitAccelerationOut");

  const solutionState = document.getElementById("solutionState");
  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");

  const rawInputStrings = {
    m: "",
    W: "",
    theta: "",
    Fapp: "",
    mu: "",
    g: gravityInput.value,
    a: "",
  };

  let linkedSource = null;

  function currentMode() {
    const checked = motionModeInputs.find((input) => input.checked);
    return checked ? checked.value : "static";
  }

  function angleToRadians(value, unit) {
    return unit === "rad" ? value : (value * Math.PI) / 180;
  }

  function angleFromRadians(value, unit) {
    return unit === "rad" ? value : (value * 180) / Math.PI;
  }

  const convertToBase = {
    m: (value, unit) => convertMass(value, unit, "kg"),
    W: (value, unit) => convertForce(value, unit, "N"),
    F: (value, unit) => convertForce(value, unit, "N"),
    g: (value, unit) => convertAcceleration(value, unit, "ms2"),
    a: (value, unit) => convertAcceleration(value, unit, "ms2"),
    theta: (value, unit) => angleToRadians(value, unit),
  };

  const convertFromBase = {
    m: (value, unit) => convertMass(value, "kg", unit),
    W: (value, unit) => convertForce(value, "N", unit),
    F: (value, unit) => convertForce(value, "N", unit),
    g: (value, unit) => convertAcceleration(value, "ms2", unit),
    a: (value, unit) => convertAcceleration(value, "ms2", unit),
    theta: (value, unit) => angleFromRadians(value, unit),
  };

  function setSolved(field, solved) {
    field.dataset.solved = solved ? "true" : "false";
  }

  function isSolved(field) {
    return field.dataset.solved === "true";
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

  function formatValueFromBase(value, type, unit, sources = []) {
    if (!Number.isFinite(value)) return "";

    const converted = convertFromBase[type](value, unit);
    const sigSources = sources.filter((entry) => entry && entry.trim() !== "");
    const sigFigs = findLeastSigFigs(sigSources);

    return sigFigCheckbox.checked && sigFigs > 0
      ? formatToSigFigs(converted, sigFigs)
      : formatPlainNumber(converted);
  }

  function directionTextFromSigned(value, zeroText = "Zero") {
    if (!Number.isFinite(value)) return "";
    if (Math.abs(value) < 1e-12) return zeroText;
    return value > 0 ? "Up slope" : "Down slope";
  }

  function clearOutputs() {
    [
      outputNormal,
      outputParallel,
      outputFrictionMax,
      outputFriction,
      outputNetForce,
      outputAcceleration,
    ].forEach((field) => {
      field.value = "";
    });
    outputFrictionDirection.value = "";
    outputNetForceDirection.value = "";
    outputAccelerationDirection.value = "";
  }

  function clearAll() {
    massInput.value = "";
    weightInput.value = "";
    thetaInput.value = "";
    appliedForceInput.value = "";
    appliedForceDirection.value = "up";
    muInput.value = "";
    gravityInput.value = "9.81";
    unitGravity.value = "ms2";
    accelerationInput.value = "";
    accelerationDirection.value = "up";
    document.getElementById("modeStatic").checked = true;

    [massInput, weightInput, appliedForceInput, muInput, accelerationInput].forEach((field) => {
      setSolved(field, false);
    });

    linkedSource = null;
    solutionState.textContent = "Choose a motion case and enter the values you know.";
    removeExistingTooltips();
    clearOutputs();
    updateModeUI();
  }

  function parseSignedMagnitude(magnitudeStr, directionValue, type, unit) {
    const magnitude = parseNumericInput(magnitudeStr);
    if (!Number.isFinite(magnitude)) return NaN;
    const signed = directionValue === "up" ? magnitude : -magnitude;
    return convertToBase[type](signed, unit);
  }

  function readEditableNumeric(field, type, unitSelect, directionSelect = null) {
    if (isSolved(field)) return NaN;

    const raw = field.value.trim();
    if (raw === "") return NaN;

    if (directionSelect) {
      return parseSignedMagnitude(raw, directionSelect.value, type, unitSelect.value);
    }

    const numeric = parseNumericInput(raw);
    if (!Number.isFinite(numeric)) return NaN;
    return convertToBase[type](numeric, unitSelect.value);
  }

  function sanitiseTinySignedValue(value, tolerance = 1e-10) {
    if (!Number.isFinite(value)) return value;
    return Math.abs(value) < tolerance ? 0 : value;
  }

  function syncMassWeight(valuesBase) {
    if (!Number.isFinite(valuesBase.g) || valuesBase.g <= 0) {
      return valuesBase;
    }

    if (linkedSource === "m" && Number.isFinite(valuesBase.m)) {
      valuesBase.W = valuesBase.m * valuesBase.g;
    } else if (linkedSource === "W" && Number.isFinite(valuesBase.W)) {
      valuesBase.m = valuesBase.W / valuesBase.g;
    } else if (Number.isFinite(valuesBase.m) && !Number.isFinite(valuesBase.W)) {
      linkedSource = "m";
      valuesBase.W = valuesBase.m * valuesBase.g;
    } else if (!Number.isFinite(valuesBase.m) && Number.isFinite(valuesBase.W)) {
      linkedSource = "W";
      valuesBase.m = valuesBase.W / valuesBase.g;
    }

    if (linkedSource === "m" && Number.isFinite(valuesBase.m)) {
      const formatted = formatValueFromBase(valuesBase.W, "W", unitWeight.value, [massInput.value, gravityInput.value]);
      if (weightInput.value.trim() === "" || isSolved(weightInput)) {
        weightInput.value = formatted;
        setSolved(weightInput, true);
      }
      setSolved(massInput, false);
    }

    if (linkedSource === "W" && Number.isFinite(valuesBase.W)) {
      const formatted = formatValueFromBase(valuesBase.m, "m", unitMass.value, [weightInput.value, gravityInput.value]);
      if (massInput.value.trim() === "" || isSolved(massInput)) {
        massInput.value = formatted;
        setSolved(massInput, true);
      }
      setSolved(weightInput, false);
    }

    return valuesBase;
  }

  function readValues() {
    return {
      entered: {
        m: massInput.value,
        W: weightInput.value,
        theta: thetaInput.value,
        Fapp: appliedForceInput.value,
        mu: muInput.value,
        g: gravityInput.value,
        a: accelerationInput.value,
      },
      valuesBase: {
        m: readEditableNumeric(massInput, "m", unitMass),
        W: readEditableNumeric(weightInput, "W", unitWeight),
        theta: readEditableNumeric(thetaInput, "theta", unitTheta),
        Fapp: readEditableNumeric(appliedForceInput, "F", unitAppliedForce, appliedForceDirection),
        mu: isSolved(muInput) ? NaN : parseNumericInput(muInput.value),
        g: readEditableNumeric(gravityInput, "g", unitGravity),
        a: readEditableNumeric(accelerationInput, "a", unitAcceleration, accelerationDirection),
      },
    };
  }

  function validate(valuesBase) {
    if (Number.isFinite(valuesBase.m) && valuesBase.m <= 0) {
      showTooltip("Mass must be greater than zero.", massInput);
      return false;
    }
    if (Number.isFinite(valuesBase.W) && valuesBase.W <= 0) {
      showTooltip("Weight must be greater than zero.", weightInput);
      return false;
    }
    if (Number.isFinite(valuesBase.theta) && (valuesBase.theta < 0 || valuesBase.theta >= Math.PI / 2)) {
      showTooltip("For this calculator, the slope angle must be at least 0 and less than 90 degrees.", thetaInput);
      return false;
    }
    if (Number.isFinite(valuesBase.mu) && valuesBase.mu < 0) {
      showTooltip("The coefficient of friction cannot be negative.", muInput);
      return false;
    }
    if (Number.isFinite(valuesBase.g) && valuesBase.g <= 0) {
      showTooltip("Gravity must be greater than zero.", gravityInput);
      return false;
    }
    return true;
  }

  function applySolvedInput(field, value, type, unit, directionSelect = null, signedValue = null, sources = []) {
    if (!Number.isFinite(value)) return;
    if (field.value.trim() !== "" && !isSolved(field)) return;

    field.value = formatValueFromBase(value, type, unit, sources);
    setSolved(field, true);

    if (directionSelect && Number.isFinite(signedValue)) {
      if (Math.abs(signedValue) < 1e-12) {
        directionSelect.value = "up";
      } else {
        directionSelect.value = signedValue > 0 ? "up" : "down";
      }
    }
  }

  function solveSlope(valuesBase, entered) {
    const mode = currentMode();
    const result = {
      normal: NaN,
      parallel: NaN,
      frictionMax: NaN,
      friction: NaN,
      net: NaN,
      acceleration: NaN,
      frictionDirection: "",
      netDirection: "",
      accelerationDirection: "",
      status: "",
    };

    if (!Number.isFinite(valuesBase.m) || !Number.isFinite(valuesBase.g) || !Number.isFinite(valuesBase.theta)) {
      result.status = "Enter mass or weight, gravity, and the slope angle to analyse the slope.";
      return result;
    }

    const m = valuesBase.m;
    const g = valuesBase.g;
    const theta = valuesBase.theta;
    let mu = valuesBase.mu;
    let Fapp = valuesBase.Fapp;
    let aKnown = valuesBase.a;

    const W = m * g;
    const normal = W * Math.cos(theta);
    const parallel = W * Math.sin(theta);
    const weightAlongSlope = -parallel;

    result.normal = normal;
    result.parallel = parallel;
    result.frictionMax = Number.isFinite(mu) ? mu * normal : NaN;

    if (mode === "frictionless") {
      if (!Number.isFinite(Fapp) && Number.isFinite(aKnown)) {
        Fapp = m * aKnown - weightAlongSlope;
        applySolvedInput(appliedForceInput, Math.abs(Fapp), "F", unitAppliedForce.value, appliedForceDirection, Fapp, [massInput.value || weightInput.value, thetaInput.value, gravityInput.value, accelerationInput.value]);
      } else if (Number.isFinite(Fapp) && !Number.isFinite(aKnown)) {
        aKnown = (Fapp + weightAlongSlope) / m;
        applySolvedInput(accelerationInput, Math.abs(aKnown), "a", unitAcceleration.value, accelerationDirection, aKnown, [massInput.value || weightInput.value, thetaInput.value, gravityInput.value, appliedForceInput.value]);
      }

      result.friction = 0;
      result.net = Number.isFinite(Fapp) ? Fapp + weightAlongSlope : Number.isFinite(aKnown) ? m * aKnown : NaN;
      result.acceleration = Number.isFinite(aKnown) ? aKnown : Number.isFinite(result.net) ? result.net / m : NaN;
      result.net = sanitiseTinySignedValue(result.net);
      result.acceleration = sanitiseTinySignedValue(result.acceleration);
      result.frictionDirection = "No friction";
      result.netDirection = directionTextFromSigned(result.net, "Zero");
      result.accelerationDirection = directionTextFromSigned(result.acceleration, "Zero");
      result.status = Number.isFinite(result.acceleration)
        ? "Solved the motion on a frictionless slope."
        : "Enter either an applied force or a known acceleration for the frictionless case.";
      return result;
    }

    if (mode === "static") {
      aKnown = NaN;
      const appliedForStatic = Number.isFinite(Fapp) ? Fapp : 0;
      const requiredFriction = -(appliedForStatic + weightAlongSlope);
      const muRequired = normal > 0 ? Math.abs(requiredFriction) / normal : NaN;

      if (!Number.isFinite(mu) && Number.isFinite(muRequired)) {
        mu = muRequired;
        applySolvedInput(muInput, mu, "g", "ms2", null, null, [massInput.value || weightInput.value, thetaInput.value, gravityInput.value, appliedForceInput.value]);
        result.frictionMax = mu * normal;
        result.status = "Solved the minimum coefficient of friction required to keep the object at rest.";
      } else if (Number.isFinite(mu)) {
        result.frictionMax = mu * normal;
        if (Math.abs(requiredFriction) <= result.frictionMax + 1e-10) {
          result.status = Number.isFinite(valuesBase.Fapp)
            ? "The object can remain at rest. Static friction adjusts to balance the forces."
            : "The object can remain at rest on the slope. Static friction balances the down-slope component of weight.";
        } else {
          result.status = `Static friction is insufficient. The minimum coefficient needed is ${formatPlainNumber(muRequired)}.`;
        }
      } else {
        result.status = "Enter a coefficient of friction, or leave it blank and the calculator will solve the minimum value needed for rest.";
      }

      result.friction = sanitiseTinySignedValue(requiredFriction);
      result.net = 0;
      result.acceleration = 0;
      result.frictionDirection = directionTextFromSigned(requiredFriction, "No friction needed");
      result.netDirection = "Zero";
      result.accelerationDirection = "Zero";
      return result;
    }

    const movingUpLike = mode === "verge_up" || mode === "moving_up";
    const movingDownLike = mode === "verge_down" || mode === "moving_down";
    const isVerge = mode === "verge_up" || mode === "verge_down";

    if (isVerge) {
      aKnown = NaN;
    }

    if (!Number.isFinite(mu)) {
      if (!Number.isFinite(Fapp) || (!Number.isFinite(aKnown) && !isVerge)) {
        result.status = "Enter μ, or leave only μ blank while providing the other needed motion values.";
        return result;
      }

      if (movingUpLike) {
        const targetA = isVerge ? 0 : aKnown;
        mu = (Fapp + weightAlongSlope - m * targetA) / normal;
      } else {
        const targetA = isVerge ? 0 : aKnown;
        mu = (m * targetA - Fapp - weightAlongSlope) / normal;
      }

      if (!Number.isFinite(mu) || mu < 0) {
        result.status = "The entered values do not produce a valid positive coefficient of friction.";
        return result;
      }

      applySolvedInput(muInput, mu, "g", "ms2", null, null, [massInput.value || weightInput.value, thetaInput.value, gravityInput.value, appliedForceInput.value, accelerationInput.value]);
    }

    result.frictionMax = mu * normal;
    const friction = movingUpLike ? -mu * normal : mu * normal;

    if (!Number.isFinite(Fapp) && Number.isFinite(aKnown)) {
      Fapp = m * aKnown - weightAlongSlope - friction;
      applySolvedInput(appliedForceInput, Math.abs(Fapp), "F", unitAppliedForce.value, appliedForceDirection, Fapp, [massInput.value || weightInput.value, thetaInput.value, gravityInput.value, muInput.value, accelerationInput.value]);
    } else if (Number.isFinite(Fapp) && !Number.isFinite(aKnown)) {
      aKnown = (Fapp + weightAlongSlope + friction) / m;
      applySolvedInput(accelerationInput, Math.abs(aKnown), "a", unitAcceleration.value, accelerationDirection, aKnown, [massInput.value || weightInput.value, thetaInput.value, gravityInput.value, muInput.value, appliedForceInput.value]);
    } else if (!Number.isFinite(Fapp) && isVerge) {
      Fapp = -(weightAlongSlope + friction);
      applySolvedInput(appliedForceInput, Math.abs(Fapp), "F", unitAppliedForce.value, appliedForceDirection, Fapp, [massInput.value || weightInput.value, thetaInput.value, gravityInput.value, muInput.value]);
      aKnown = 0;
    }

    result.friction = sanitiseTinySignedValue(friction);
    result.net = Number.isFinite(Fapp) ? Fapp + weightAlongSlope + friction : Number.isFinite(aKnown) ? m * aKnown : NaN;
    result.acceleration = Number.isFinite(aKnown) ? aKnown : Number.isFinite(result.net) ? result.net / m : NaN;
    result.net = sanitiseTinySignedValue(result.net);
    result.acceleration = sanitiseTinySignedValue(result.acceleration);
    result.frictionDirection = directionTextFromSigned(friction, "No friction");
    result.netDirection = directionTextFromSigned(result.net, "Zero");
    result.accelerationDirection = directionTextFromSigned(result.acceleration, "Zero");

    if (isVerge) {
      result.status = mode === "verge_up"
        ? "Solved the threshold case for motion up the slope."
        : "Solved the threshold case for motion down the slope.";
    } else {
      result.status = mode === "moving_up"
        ? "Solved the moving-up-slope case."
        : "Solved the moving-down-slope case.";
    }

    return result;
  }

  function displayOutputs(result) {
    outputNormal.value = Number.isFinite(result.normal)
      ? formatValueFromBase(result.normal, "F", unitNormalOut.value, [massInput.value || weightInput.value, gravityInput.value, thetaInput.value])
      : "";

    outputParallel.value = Number.isFinite(result.parallel)
      ? formatValueFromBase(result.parallel, "F", unitParallelOut.value, [massInput.value || weightInput.value, gravityInput.value, thetaInput.value])
      : "";

    outputFrictionMax.value = Number.isFinite(result.frictionMax)
      ? formatValueFromBase(result.frictionMax, "F", unitFrictionMaxOut.value, [muInput.value, massInput.value || weightInput.value, gravityInput.value, thetaInput.value])
      : "";

    outputFriction.value = Number.isFinite(result.friction)
      ? formatValueFromBase(Math.abs(result.friction), "F", unitFrictionOut.value, [muInput.value, massInput.value || weightInput.value, gravityInput.value, thetaInput.value])
      : "";

    outputFrictionDirection.value = result.frictionDirection || "";

    outputNetForce.value = Number.isFinite(result.net)
      ? formatValueFromBase(Math.abs(result.net), "F", unitNetForceOut.value, [massInput.value || weightInput.value, gravityInput.value, thetaInput.value, appliedForceInput.value, muInput.value])
      : "";

    outputNetForceDirection.value = result.netDirection || "";

    outputAcceleration.value = Number.isFinite(result.acceleration)
      ? formatValueFromBase(Math.abs(result.acceleration), "a", unitAccelerationOut.value, [massInput.value || weightInput.value, gravityInput.value, thetaInput.value, appliedForceInput.value, muInput.value])
      : "";

    outputAccelerationDirection.value = result.accelerationDirection || "";
    solutionState.textContent = result.status;
  }

  function calculate() {
    removeExistingTooltips();

    const entered = {
      m: massInput.value,
      W: weightInput.value,
      theta: thetaInput.value,
      Fapp: appliedForceInput.value,
      mu: muInput.value,
      g: gravityInput.value,
      a: accelerationInput.value,
    };

    const fieldLookup = {
      m: massInput,
      W: weightInput,
      theta: thetaInput,
      Fapp: appliedForceInput,
      mu: muInput,
      g: gravityInput,
      a: accelerationInput,
    };

    const invalidFields = getInvalidNumericFields(
      Object.fromEntries(
        Object.entries(entered).filter(([key]) => !isSolved(fieldLookup[key])),
      ),
    );

    if (invalidFields.length > 0) {

      invalidFields.forEach((key) => showTooltip("Please enter a valid number.", fieldLookup[key]));
      clearOutputs();
      solutionState.textContent = "One or more entries are not valid numbers.";
      return;
    }

    const { valuesBase } = readValues();
    syncMassWeight(valuesBase);

    if (!validate(valuesBase)) {
      clearOutputs();
      solutionState.textContent = "Please correct the highlighted issue.";
      return;
    }

    const result = solveSlope(valuesBase, entered);
    displayOutputs(result);
  }

  function handleUnitChange(inputField, type, unitSelect) {
    const raw = inputField.value.trim();
    const oldUnit = inputField.dataset.unit || unitSelect.value;
    const newUnit = unitSelect.value;

    if (oldUnit === newUnit) {
      calculate();
      return;
    }

    if (raw === "") {
      inputField.dataset.unit = newUnit;
      calculate();
      return;
    }

    const numeric = parseNumericInput(raw);
    if (!Number.isFinite(numeric)) {
      inputField.dataset.unit = newUnit;
      calculate();
      return;
    }

    const base = convertToBase[type](numeric, oldUnit);
    const converted = convertFromBase[type](base, newUnit);
    inputField.value = formatPlainNumber(converted);
    inputField.dataset.unit = newUnit;
    calculate();
  }

  function updateModeUI() {
    const mode = currentMode();
    const staticLike = mode === "static";
    const vergeLike = mode === "verge_up" || mode === "verge_down";
    const frictionless = mode === "frictionless";

    accelerationInput.disabled = staticLike || vergeLike;
    accelerationDirection.disabled = staticLike || vergeLike;
    muInput.disabled = frictionless;

    if ((staticLike || vergeLike) && isSolved(accelerationInput)) {
      accelerationInput.value = "";
      setSolved(accelerationInput, false);
    }

    if (frictionless && isSolved(muInput)) {
      muInput.value = "";
      setSolved(muInput, false);
    }
  }

  function attachSourceFieldBehaviour(field, sourceKey) {
    field.addEventListener("input", () => {
      setSolved(field, false);
      if (sourceKey === "m") {
        if (field.value.trim() === "") {
          if (isSolved(weightInput)) {
            weightInput.value = "";
            setSolved(weightInput, false);
          }
          linkedSource = null;
        } else {
          linkedSource = "m";
        }
      }
      if (sourceKey === "W") {
        if (field.value.trim() === "") {
          if (isSolved(massInput)) {
            massInput.value = "";
            setSolved(massInput, false);
          }
          linkedSource = null;
        } else {
          linkedSource = "W";
        }
      }
      calculate();
    });
  }

  clearButton.addEventListener("click", clearAll);

  massInput.dataset.unit = unitMass.value;
  weightInput.dataset.unit = unitWeight.value;
  thetaInput.dataset.unit = unitTheta.value;
  appliedForceInput.dataset.unit = unitAppliedForce.value;
  gravityInput.dataset.unit = unitGravity.value;
  accelerationInput.dataset.unit = unitAcceleration.value;

  attachSourceFieldBehaviour(massInput, "m");
  attachSourceFieldBehaviour(weightInput, "W");

  [thetaInput, muInput, gravityInput, appliedForceInput, accelerationInput].forEach((field) => {
    field.addEventListener("input", () => {
      setSolved(field, false);
      calculate();
    });
  });

  [appliedForceDirection, accelerationDirection].forEach((select) => {
    select.addEventListener("change", calculate);
  });

  motionModeInputs.forEach((input) => input.addEventListener("change", () => {
    updateModeUI();
    calculate();
  }));

  unitMass.addEventListener("change", () => handleUnitChange(massInput, "m", unitMass));
  unitWeight.addEventListener("change", () => handleUnitChange(weightInput, "W", unitWeight));
  unitTheta.addEventListener("change", () => handleUnitChange(thetaInput, "theta", unitTheta));
  unitAppliedForce.addEventListener("change", () => handleUnitChange(appliedForceInput, "F", unitAppliedForce));
  unitGravity.addEventListener("change", () => handleUnitChange(gravityInput, "g", unitGravity));
  unitAcceleration.addEventListener("change", () => handleUnitChange(accelerationInput, "a", unitAcceleration));

  [unitNormalOut, unitParallelOut, unitFrictionMaxOut, unitFrictionOut, unitNetForceOut, unitAccelerationOut].forEach((select) => {
    select.addEventListener("change", calculate);
  });

  sigFigCheckbox.addEventListener("change", calculate);

  clearAll();
  calculate();
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof katex !== "undefined") {
    const options = {
      throwOnError: false,
      displayMode: true,
    };

    katex.render(
      "\\Large \\color{#333}{N = m g \\cos \\theta}",
      document.getElementById("equation1"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{W_{\\parallel} = m g \\sin \\theta}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{F_f = \\mu N}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{\\Sigma F = F_{app} - m g \\sin \\theta \\pm F_f}",
      document.getElementById("equation4"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{a = \\frac{\\Sigma F}{m}}",
      document.getElementById("equation5"),
      options,
    );
  }
});
