import {
  convertVelocity,
  convertDisplacement,
  convertAcceleration,
  convertTime,
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

const EPSILON = 1e-10;

const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;
const radiansToDegrees = (radians) => (radians * 180) / Math.PI;

function clampNearZero(value) {
  return Math.abs(value) < EPSILON ? 0 : value;
}

function safeSqrt(value) {
  if (value < -EPSILON) {
    return NaN;
  }

  return Math.sqrt(Math.max(0, value));
}

document.addEventListener("DOMContentLoaded", function () {
  const fieldMap = {
    y0: document.getElementById("inputLaunchHeight"),
    yL: document.getElementById("inputLandingHeight"),
    g: document.getElementById("inputGravity"),
    theta: document.getElementById("inputAngle"),
    u: document.getElementById("inputInitialSpeed"),
    ux: document.getElementById("inputHorizontalSpeed"),
    uy: document.getElementById("inputVerticalSpeed"),
    tPeak: document.getElementById("outputTimeToPeak"),
    tFlight: document.getElementById("outputFlightTime"),
    range: document.getElementById("outputRange"),
    yMax: document.getElementById("outputMaxHeight"),
    vyFinal: document.getElementById("outputFinalVerticalVelocity"),
    impactSpeed: document.getElementById("outputImpactSpeed"),
    impactAngle: document.getElementById("outputImpactAngle"),
  };

  const unitMap = {
    y0: document.getElementById("unitLaunchHeight"),
    yL: document.getElementById("unitLandingHeight"),
    g: document.getElementById("unitGravity"),
    u: document.getElementById("unitInitialSpeed"),
    ux: document.getElementById("unitHorizontalSpeed"),
    uy: document.getElementById("unitVerticalSpeed"),
    tPeak: document.getElementById("unitTimeToPeak"),
    tFlight: document.getElementById("unitFlightTime"),
    range: document.getElementById("unitRange"),
    yMax: document.getElementById("unitMaxHeight"),
    vyFinal: document.getElementById("unitFinalVerticalVelocity"),
    impactSpeed: document.getElementById("unitImpactSpeed"),
  };

  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");

  const editableKeys = ["y0", "yL", "g", "theta", "u", "ux", "uy"];
  const launchDescriptorKeys = ["theta", "u", "ux", "uy"];
  const outputKeys = [
    "tPeak",
    "tFlight",
    "range",
    "yMax",
    "vyFinal",
    "impactSpeed",
    "impactAngle",
  ];

  const convertToBase = {
    y0: (value, unit) => convertDisplacement(value, unit, "m"),
    yL: (value, unit) => convertDisplacement(value, unit, "m"),
    g: (value, unit) => convertAcceleration(value, unit, "ms2"),
    u: (value, unit) => convertVelocity(value, unit, "ms"),
    ux: (value, unit) => convertVelocity(value, unit, "ms"),
    uy: (value, unit) => convertVelocity(value, unit, "ms"),
    tPeak: (value, unit) => convertTime(value, unit, "s"),
    tFlight: (value, unit) => convertTime(value, unit, "s"),
    range: (value, unit) => convertDisplacement(value, unit, "m"),
    yMax: (value, unit) => convertDisplacement(value, unit, "m"),
    vyFinal: (value, unit) => convertVelocity(value, unit, "ms"),
    impactSpeed: (value, unit) => convertVelocity(value, unit, "ms"),
  };

  const convertFromBase = {
    y0: (value, unit) => convertDisplacement(value, "m", unit),
    yL: (value, unit) => convertDisplacement(value, "m", unit),
    g: (value, unit) => convertAcceleration(value, "ms2", unit),
    u: (value, unit) => convertVelocity(value, "ms", unit),
    ux: (value, unit) => convertVelocity(value, "ms", unit),
    uy: (value, unit) => convertVelocity(value, "ms", unit),
    tPeak: (value, unit) => convertTime(value, "s", unit),
    tFlight: (value, unit) => convertTime(value, "s", unit),
    range: (value, unit) => convertDisplacement(value, "m", unit),
    yMax: (value, unit) => convertDisplacement(value, "m", unit),
    vyFinal: (value, unit) => convertVelocity(value, "ms", unit),
    impactSpeed: (value, unit) => convertVelocity(value, "ms", unit),
  };

  let lockedLaunchFields = {
    theta: false,
    u: false,
    ux: false,
    uy: false,
  };

  let rawInputStrings = {
    y0: fieldMap.y0.value,
    yL: fieldMap.yL.value,
    g: fieldMap.g.value,
    theta: "",
    u: "",
    ux: "",
    uy: "",
  };

  let currentResolvedLaunchFields = [];
  let calculatedValuesBase = null;

  outputKeys.forEach((key) => {
    fieldMap[key].readOnly = true;
  });

  Object.keys(unitMap).forEach((key) => {
    fieldMap[key].dataset.unit = unitMap[key].value;
  });

  clearButton.addEventListener("click", resetCalculator);

  function resetCalculator() {
    removeExistingTooltips();

    fieldMap.y0.value = "0";
    fieldMap.yL.value = "0";
    fieldMap.g.value = "9.81";
    fieldMap.theta.value = "";
    fieldMap.u.value = "";
    fieldMap.ux.value = "";
    fieldMap.uy.value = "";

    launchDescriptorKeys.forEach((key) => {
      fieldMap[key].readOnly = false;
      lockedLaunchFields[key] = false;
    });

    outputKeys.forEach((key) => {
      fieldMap[key].value = "";
    });

    Object.keys(unitMap).forEach((key) => {
      fieldMap[key].dataset.unit = unitMap[key].value;
    });

    rawInputStrings = {
      y0: fieldMap.y0.value,
      yL: fieldMap.yL.value,
      g: fieldMap.g.value,
      theta: "",
      u: "",
      ux: "",
      uy: "",
    };

    currentResolvedLaunchFields = [];
    calculatedValuesBase = null;
  }

  function unlockCalculatedLaunchFields() {
    currentResolvedLaunchFields.forEach((key) => {
      fieldMap[key].value = "";
      fieldMap[key].readOnly = false;
      lockedLaunchFields[key] = false;
    });

    currentResolvedLaunchFields = [];
    calculatedValuesBase = null;
  }

  function clearOutputs() {
    outputKeys.forEach((key) => {
      fieldMap[key].value = "";
    });
  }

  function lockResolvedLaunchFields(keys) {
    keys.forEach((key) => {
      fieldMap[key].readOnly = true;
      lockedLaunchFields[key] = true;
    });
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
      y0: fieldMap.y0.value,
      yL: fieldMap.yL.value,
      g: fieldMap.g.value,
      theta: fieldMap.theta.value,
      u: fieldMap.u.value,
      ux: fieldMap.ux.value,
      uy: fieldMap.uy.value,
    };

    const values = {
      y0: parseInputValue(entered.y0),
      yL: parseInputValue(entered.yL),
      g: parseInputValue(entered.g),
      theta: parseInputValue(entered.theta),
      u: parseInputValue(entered.u),
      ux: parseInputValue(entered.ux),
      uy: parseInputValue(entered.uy),
    };

    return { entered, values };
  }

  function getLeastSigFigsFromKnownInputs() {
    const knownRawInputs = Object.entries(rawInputStrings)
      .filter(([, value]) => value.trim() !== "")
      .map(([, value]) => value);

    return findLeastSigFigs(knownRawInputs);
  }

  function formatCalculatedNumber(value, forcePlain = false) {
    if (!Number.isFinite(value)) return "";

    const leastSigFigs = getLeastSigFigsFromKnownInputs();

    if (!forcePlain && sigFigCheckbox.checked && leastSigFigs > 0) {
      return formatToSigFigs(value, leastSigFigs);
    }

    return formatPlainNumber(value);
  }

  function displayCalculatedValues() {
    if (!calculatedValuesBase) return;

    const fieldDefinitions = {
      theta: { type: "angle" },
      u: { type: "velocity" },
      ux: { type: "velocity" },
      uy: { type: "velocity" },
      tPeak: { type: "time" },
      tFlight: { type: "time" },
      range: { type: "displacement" },
      yMax: { type: "displacement" },
      vyFinal: { type: "velocity" },
      impactSpeed: { type: "velocity" },
      impactAngle: { type: "angle" },
    };

    const keysToDisplay = [...currentResolvedLaunchFields, ...outputKeys];

    keysToDisplay.forEach((key) => {
      const value = calculatedValuesBase[key];
      if (!Number.isFinite(value)) {
        fieldMap[key].value = "";
        return;
      }

      if (fieldDefinitions[key].type === "angle") {
        fieldMap[key].value = formatCalculatedNumber(value);
        return;
      }

      const targetUnit = unitMap[key].value;
      const valueInSelectedUnit = convertFromBase[key](value, targetUnit);
      fieldMap[key].value = formatCalculatedNumber(valueInSelectedUnit);
    });
  }

  function solveLaunchState(values) {
    const knownKeys = launchDescriptorKeys.filter((key) =>
      Number.isFinite(values[key]),
    );

    if (knownKeys.length !== 2) {
      return { error: "Enter exactly two launch values.", fieldKey: knownKeys[0] || "theta" };
    }

    const has = (key) => knownKeys.includes(key);
    const theta = values.theta;
    const u = values.u;
    const ux = values.ux;
    const uy = values.uy;

    if (has("theta")) {
      if (theta < 0 || theta > 90) {
        return {
          error: "Launch angle must be between 0° and 90°.",
          fieldKey: "theta",
        };
      }
    }

    if (has("u") && u < 0) {
      return {
        error: "Initial speed cannot be negative.",
        fieldKey: "u",
      };
    }

    if (has("ux") && ux < 0) {
      return {
        error: "Horizontal speed cannot be negative in this calculator.",
        fieldKey: "ux",
      };
    }

    if (has("uy") && uy < 0) {
      return {
        error: "Vertical speed cannot be negative in this calculator.",
        fieldKey: "uy",
      };
    }

    let solvedTheta = NaN;
    let solvedU = NaN;
    let solvedUx = NaN;
    let solvedUy = NaN;

    if (has("theta") && has("u")) {
      const radians = degreesToRadians(theta);
      solvedTheta = theta;
      solvedU = u;
      solvedUx = clampNearZero(u * Math.cos(radians));
      solvedUy = clampNearZero(u * Math.sin(radians));
    } else if (has("theta") && has("ux")) {
      const radians = degreesToRadians(theta);
      const cosTheta = Math.cos(radians);

      if (Math.abs(cosTheta) < EPSILON) {
        return {
          error: "Angle and horizontal speed are not enough when the angle is 90°.",
          fieldKey: "theta",
        };
      }

      solvedTheta = theta;
      solvedUx = ux;
      solvedU = ux / cosTheta;
      solvedUy = clampNearZero(solvedU * Math.sin(radians));
    } else if (has("theta") && has("uy")) {
      const radians = degreesToRadians(theta);
      const sinTheta = Math.sin(radians);

      if (Math.abs(sinTheta) < EPSILON) {
        return {
          error: "Angle and vertical speed are not enough when the angle is 0°.",
          fieldKey: "theta",
        };
      }

      solvedTheta = theta;
      solvedUy = uy;
      solvedU = uy / sinTheta;
      solvedUx = clampNearZero(solvedU * Math.cos(radians));
    } else if (has("u") && has("ux")) {
      if (ux - u > EPSILON) {
        return {
          error: "Horizontal speed cannot exceed initial speed.",
          fieldKey: "ux",
        };
      }

      solvedU = u;
      solvedUx = ux;
      solvedUy = clampNearZero(safeSqrt(u * u - ux * ux));
      solvedTheta = solvedU === 0 ? 0 : radiansToDegrees(Math.atan2(solvedUy, solvedUx));
    } else if (has("u") && has("uy")) {
      if (uy - u > EPSILON) {
        return {
          error: "Vertical speed cannot exceed initial speed.",
          fieldKey: "uy",
        };
      }

      solvedU = u;
      solvedUy = uy;
      solvedUx = clampNearZero(safeSqrt(u * u - uy * uy));
      solvedTheta = solvedU === 0 ? 0 : radiansToDegrees(Math.atan2(solvedUy, solvedUx));
    } else if (has("ux") && has("uy")) {
      solvedUx = ux;
      solvedUy = uy;
      solvedU = Math.hypot(ux, uy);
      solvedTheta = solvedU === 0 ? 0 : radiansToDegrees(Math.atan2(uy, ux));
    } else {
      return {
        error: "That pair of launch values is not supported.",
        fieldKey: knownKeys[0],
      };
    }

    if ([solvedTheta, solvedU, solvedUx, solvedUy].some((value) => !Number.isFinite(value))) {
      return {
        error: "The launch values do not produce a valid solution.",
        fieldKey: knownKeys[0],
      };
    }

    return {
      theta: clampNearZero(solvedTheta),
      u: clampNearZero(solvedU),
      ux: clampNearZero(solvedUx),
      uy: clampNearZero(solvedUy),
    };
  }

  function solveTrajectory({ y0, yL, g, ux, uy }) {
    if (g <= 0) {
      return {
        error: "Gravity must be greater than zero.",
        fieldKey: "g",
      };
    }

    const deltaY = yL - y0;
    const discriminant = uy * uy - 2 * g * deltaY;

    if (discriminant < -EPSILON) {
      return {
        error: "Those launch conditions never reach the chosen landing height.",
        fieldKey: "yL",
      };
    }

    const sqrtDiscriminant = safeSqrt(discriminant);
    const tFlight = clampNearZero((uy + sqrtDiscriminant) / g);

    if (!Number.isFinite(tFlight) || tFlight < 0) {
      return {
        error: "The flight time is not physically valid.",
        fieldKey: "g",
      };
    }

    const tPeak = uy > 0 ? uy / g : 0;
    const yMax = y0 + (uy * uy) / (2 * g);
    const vyFinal = clampNearZero(uy - g * tFlight);
    const impactSpeed = Math.hypot(ux, vyFinal);
    const impactAngle = radiansToDegrees(Math.atan2(vyFinal, ux));
    const range = clampNearZero(ux * tFlight);

    return {
      tPeak: clampNearZero(tPeak),
      tFlight,
      range,
      yMax,
      vyFinal,
      impactSpeed,
      impactAngle: clampNearZero(impactAngle),
    };
  }

  function calculate() {
    removeExistingTooltips();
    unlockCalculatedLaunchFields();
    clearOutputs();

    const { entered, values } = readCurrentValues();

    const invalidFields = getInvalidNumericFields(entered);
    if (invalidFields.length > 0) {
      invalidFields.forEach((key) => {
        showTooltip("Please enter a valid number.", fieldMap[key]);
      });
      return;
    }

    rawInputStrings = { ...entered };

    const requiredEnvironmentFields = ["y0", "yL", "g"];
    const missingEnvironmentField = requiredEnvironmentFields.find(
      (key) => !Number.isFinite(values[key]),
    );

    if (missingEnvironmentField) {
      return;
    }

    const knownLaunchCount = launchDescriptorKeys.filter((key) =>
      Number.isFinite(values[key]),
    ).length;

    if (knownLaunchCount === 0) {
      return;
    }

    if (knownLaunchCount !== 2) {
      const firstLaunchFieldWithValue = launchDescriptorKeys.find((key) =>
        Number.isFinite(values[key]),
      ) || "theta";

      showTooltip(
        "Enter exactly two of angle, initial speed, horizontal speed, and vertical speed.",
        fieldMap[firstLaunchFieldWithValue],
      );
      return;
    }

    const valuesInBase = {
      y0: convertToBase.y0(values.y0, unitMap.y0.value),
      yL: convertToBase.yL(values.yL, unitMap.yL.value),
      g: convertToBase.g(values.g, unitMap.g.value),
      theta: values.theta,
      u: Number.isFinite(values.u)
        ? convertToBase.u(values.u, unitMap.u.value)
        : NaN,
      ux: Number.isFinite(values.ux)
        ? convertToBase.ux(values.ux, unitMap.ux.value)
        : NaN,
      uy: Number.isFinite(values.uy)
        ? convertToBase.uy(values.uy, unitMap.uy.value)
        : NaN,
    };

    const solvedLaunch = solveLaunchState(valuesInBase);
    if (solvedLaunch.error) {
      showTooltip(solvedLaunch.error, fieldMap[solvedLaunch.fieldKey]);
      return;
    }

    const solvedTrajectory = solveTrajectory({
      y0: valuesInBase.y0,
      yL: valuesInBase.yL,
      g: valuesInBase.g,
      ux: solvedLaunch.ux,
      uy: solvedLaunch.uy,
    });

    if (solvedTrajectory.error) {
      showTooltip(solvedTrajectory.error, fieldMap[solvedTrajectory.fieldKey]);
      return;
    }

    currentResolvedLaunchFields = launchDescriptorKeys.filter(
      (key) => !Number.isFinite(values[key]),
    );

    calculatedValuesBase = {
      theta: solvedLaunch.theta,
      u: solvedLaunch.u,
      ux: solvedLaunch.ux,
      uy: solvedLaunch.uy,
      tPeak: solvedTrajectory.tPeak,
      tFlight: solvedTrajectory.tFlight,
      range: solvedTrajectory.range,
      yMax: solvedTrajectory.yMax,
      vyFinal: solvedTrajectory.vyFinal,
      impactSpeed: solvedTrajectory.impactSpeed,
      impactAngle: solvedTrajectory.impactAngle,
    };

    lockResolvedLaunchFields(currentResolvedLaunchFields);
    displayCalculatedValues();
  }

  function handleUnitChange(changedKey) {
    editableKeys.forEach((key) => {
      if (!unitMap[key]) return;
      if (lockedLaunchFields[key]) return;

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

    Object.keys(unitMap).forEach((key) => {
      fieldMap[key].dataset.unit = unitMap[key].value;
    });

    calculate();
  }

  editableKeys.forEach((key) => {
    fieldMap[key].addEventListener("input", () => {
      if (!fieldMap[key].readOnly) {
        calculate();
      }
    });

    if (unitMap[key]) {
      unitMap[key].addEventListener("change", () => {
        handleUnitChange(key);
      });
    }
  });

  ["tPeak", "tFlight", "range", "yMax", "vyFinal", "impactSpeed"].forEach(
    (key) => {
      unitMap[key].addEventListener("change", () => {
        Object.keys(unitMap).forEach((unitKey) => {
          fieldMap[unitKey].dataset.unit = unitMap[unitKey].value;
        });
        displayCalculatedValues();
      });
    },
  );

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
      "\\Large \\color{#333}{u_x = u \\cos \\theta}",
      document.getElementById("equation1"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{u_y = u \\sin \\theta}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{y = y_0 + u_y t - \\frac{1}{2} g t^2}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{x = u_x t}",
      document.getElementById("equation4"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{v_y = u_y - g t}",
      document.getElementById("equation5"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{t = \\frac{u_y + \\sqrt{u_y^2 - 2 g (y_L - y_0)}}{g}}",
      document.getElementById("equation6"),
      options,
    );
  } else {
    console.error(
      "KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.",
    );
  }
});
