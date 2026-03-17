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

document.addEventListener("DOMContentLoaded", function () {
  // Input elements
  const displacementInput = document.getElementById("inputS");
  const initialVelocityInput = document.getElementById("inputU");
  const finalVelocityInput = document.getElementById("inputV");
  const accelerationInput = document.getElementById("inputA");
  const timeInput = document.getElementById("inputT");

  // Unit selection elements
  const unitDisplacementSelect = document.getElementById("unitDisplacement");
  const unitInitialVelocitySelect = document.getElementById(
    "unitInitialVelocity",
  );
  const unitFinalVelocitySelect = document.getElementById("unitFinalVelocity");
  const unitAccelerationSelect = document.getElementById("unitAcceleration");
  const unitTimeSelect = document.getElementById("unitTime");

  // Other elements
  const sigFigCheckbox = document.getElementById("sigFigCheckbox");
  const clearButton = document.getElementById("clearButton");
  const SPEED_OF_LIGHT = 299792458;

  const fieldMap = {
    s: displacementInput,
    u: initialVelocityInput,
    v: finalVelocityInput,
    a: accelerationInput,
    t: timeInput,
  };

  const unitMap = {
    s: unitDisplacementSelect,
    u: unitInitialVelocitySelect,
    v: unitFinalVelocitySelect,
    a: unitAccelerationSelect,
    t: unitTimeSelect,
  };

  const convertToBase = {
    s: (value, unit) => convertDisplacement(value, unit, "m"),
    u: (value, unit) => convertVelocity(value, unit, "ms"),
    v: (value, unit) => convertVelocity(value, unit, "ms"),
    a: (value, unit) => convertAcceleration(value, unit, "ms2"),
    t: (value, unit) => convertTime(value, unit, "s"),
  };

  const convertFromBase = {
    s: (value, unit) => convertDisplacement(value, "m", unit),
    u: (value, unit) => convertVelocity(value, "ms", unit),
    v: (value, unit) => convertVelocity(value, "ms", unit),
    a: (value, unit) => convertAcceleration(value, "ms2", unit),
    t: (value, unit) => convertTime(value, "s", unit),
  };

  let lockedFields = {
    s: false,
    u: false,
    v: false,
    a: false,
    t: false,
  };

  // Raw strings exactly as entered by the user for the known values
  let rawInputStrings = {
    s: "",
    u: "",
    v: "",
    a: "",
    t: "",
  };

  // Numeric solved values stored in base SI units
  let calculatedValuesBase = null;

  // The two currently solved fields
  let currentUnknowns = [];

  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    Object.keys(fieldMap).forEach((key) => {
      fieldMap[key].value = "";
      fieldMap[key].readOnly = false;
      fieldMap[key].dataset.unit = unitMap[key].value;
    });

    lockedFields = {
      s: false,
      u: false,
      v: false,
      a: false,
      t: false,
    };

    rawInputStrings = {
      s: "",
      u: "",
      v: "",
      a: "",
      t: "",
    };

    calculatedValuesBase = null;
    currentUnknowns = [];
    removeExistingTooltips();
  }

  function lockInput(key) {
    fieldMap[key].readOnly = true;
    lockedFields[key] = true;
  }

  function unlockCalculatedInputs() {
    currentUnknowns.forEach((key) => {
      fieldMap[key].value = "";
      fieldMap[key].readOnly = false;
      lockedFields[key] = false;
    });

    currentUnknowns = [];
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
      s: displacementInput.value,
      u: initialVelocityInput.value,
      v: finalVelocityInput.value,
      a: accelerationInput.value,
      t: timeInput.value,
    };

    const values = {
      s: parseInputValue(entered.s),
      u: parseInputValue(entered.u),
      v: parseInputValue(entered.v),
      a: parseInputValue(entered.a),
      t: parseInputValue(entered.t),
    };

    return { entered, values };
  }

  function checkForImpossibleValues(values) {
    const { u, v, a, t, s } = values;
    let error = false;

    if (!isNaN(u) && Math.abs(u) > SPEED_OF_LIGHT) {
      showTooltip(
        "Initial velocity exceeds the speed of light, which is impossible.",
        initialVelocityInput,
      );
      error = true;
    }

    if (!isNaN(v) && Math.abs(v) > SPEED_OF_LIGHT) {
      showTooltip(
        "Final velocity exceeds the speed of light, which is impossible.",
        finalVelocityInput,
      );
      error = true;
    }

    if (!isNaN(t) && t < 0) {
      showTooltip(
        "Negative time is not physically possible. Please adjust your inputs.",
        timeInput,
      );
      error = true;
    }

    if (!error && !isNaN(u) && !isNaN(v) && !isNaN(a) && a !== 0) {
      if ((v - u) / a < 0) {
        showTooltip(
          "The combination of initial velocity, final velocity, and acceleration leads to negative time. Please review your inputs.",
          initialVelocityInput,
        );
        error = true;
      }
    }

    if (!error && !isNaN(v) && !isNaN(a) && !isNaN(s)) {
      if (v * v - u * u < 2 * a * s && a < 0 && s > 0) {
        // Leave this as a gentle safeguard, not a full physics validator
      }

      if (v * v - 2 * a * s < 0 && isNaN(u)) {
        showTooltip(
          "The combination of final velocity, acceleration, and displacement leads to an invalid square root. Please review your inputs.",
          finalVelocityInput,
        );
        error = true;
      }
    }

    return error;
  }

  function calculateUnknowns(values) {
    let { u, v, t, a, s } = values;
    const unknowns = Object.keys(values).filter((key) => isNaN(values[key]));

    try {
      if (unknowns.length !== 2) {
        return null;
      }

      // Unknown: a and s
      if (unknowns.includes("a") && unknowns.includes("s")) {
        if (t === 0) return null;
        a = (v - u) / t;
        s = ((u + v) / 2) * t;
      }

      // Unknown: t and s
      else if (unknowns.includes("t") && unknowns.includes("s")) {
        if (a === 0) return null;
        t = (v - u) / a;
        s = (v * v - u * u) / (2 * a);
      }

      // Unknown: a and t
      else if (unknowns.includes("a") && unknowns.includes("t")) {
        if (s === 0 || u + v === 0) return null;
        a = (v * v - u * u) / (2 * s);
        t = (2 * s) / (u + v);
      }

      // Unknown: s and v
      else if (unknowns.includes("s") && unknowns.includes("v")) {
        s = u * t + 0.5 * a * t * t;
        v = u + a * t;
      }

      // Unknown: u and a
      else if (unknowns.includes("u") && unknowns.includes("a")) {
        if (t === 0) return null;
        u = (2 * s - v * t) / t;
        a = (v - u) / t;
      }

      // Unknown: u and v
      else if (unknowns.includes("u") && unknowns.includes("v")) {
        if (t === 0) return null;
        u = (s - 0.5 * a * t * t) / t;
        v = u + a * t;
      }

      // Unknown: u and t
      else if (unknowns.includes("u") && unknowns.includes("t")) {
        if (a === 0) return null;
        u = Math.sqrt(v * v - 2 * a * s);
        if (!Number.isFinite(u)) return null;
        t = (v - u) / a;
      }

      // Unknown: v and a
      else if (unknowns.includes("v") && unknowns.includes("a")) {
        if (t === 0) return null;
        v = (2 * s) / t - u;
        a = (v - u) / t;
      }

      // Unknown: v and t
      else if (unknowns.includes("v") && unknowns.includes("t")) {
        const inside = u * u + 2 * a * s;
        if (inside < 0 || a === 0) return null;
        v = Math.sqrt(inside);
        t = (v - u) / a;
      } else {
        return null;
      }

      if ([u, v, t, a, s].some((val) => !Number.isFinite(val))) {
        return null;
      }

      return { u, v, t, a, s };
    } catch {
      return null;
    }
  }

  function getLeastSigFigsFromKnownInputs() {
    const knownRawInputs = Object.entries(rawInputStrings)
      .filter(
        ([key, value]) => !currentUnknowns.includes(key) && value.trim() !== "",
      )
      .map(([, value]) => value);

    return findLeastSigFigs(knownRawInputs);
  }

  function displayCalculatedValues() {
    if (!calculatedValuesBase || currentUnknowns.length !== 2) return;

    const leastSigFigs = getLeastSigFigsFromKnownInputs();

    currentUnknowns.forEach((key) => {
      const input = fieldMap[key];
      const targetUnit = unitMap[key].value;
      const valueInSelectedUnit = convertFromBase[key](
        calculatedValuesBase[key],
        targetUnit,
      );

      if (!Number.isFinite(valueInSelectedUnit)) {
        input.value = "";
        return;
      }

      input.value =
        sigFigCheckbox.checked && leastSigFigs > 0
          ? formatToSigFigs(valueInSelectedUnit, leastSigFigs)
          : formatPlainNumber(valueInSelectedUnit);
    });
  }

  function calculate() {
    removeExistingTooltips();

    // Clear old calculated outputs before reading current inputs
    unlockCalculatedInputs();

    const { entered, values } = readCurrentValues();

    // Save raw user-entered strings for sig fig handling
    rawInputStrings = { ...entered };

    const knownCount = Object.values(values).filter(
      (value) => !isNaN(value),
    ).length;

    if (knownCount !== 3) {
      return;
    }

    const valuesInBase = {
      s: !isNaN(values.s)
        ? convertToBase.s(values.s, unitDisplacementSelect.value)
        : NaN,
      u: !isNaN(values.u)
        ? convertToBase.u(values.u, unitInitialVelocitySelect.value)
        : NaN,
      v: !isNaN(values.v)
        ? convertToBase.v(values.v, unitFinalVelocitySelect.value)
        : NaN,
      a: !isNaN(values.a)
        ? convertToBase.a(values.a, unitAccelerationSelect.value)
        : NaN,
      t: !isNaN(values.t)
        ? convertToBase.t(values.t, unitTimeSelect.value)
        : NaN,
    };

    if (checkForImpossibleValues(valuesInBase)) {
      return;
    }

    const unknowns = Object.keys(valuesInBase).filter((key) =>
      isNaN(valuesInBase[key]),
    );

    if (unknowns.length !== 2) {
      return;
    }

    const solved = calculateUnknowns(valuesInBase);

    if (!solved) {
      unknowns.forEach((key) => {
        showTooltip(
          "The calculation resulted in an error. Please adjust your inputs.",
          fieldMap[key],
        );
      });
      return;
    }

    calculatedValuesBase = solved;
    currentUnknowns = unknowns;

    currentUnknowns.forEach((key) => lockInput(key));
    displayCalculatedValues();
  }

  function handleUnitChange(changedKey) {
    // Convert user-entered values only, never the calculated locked ones
    Object.keys(fieldMap).forEach((key) => {
      if (lockedFields[key]) return;

      const input = fieldMap[key];
      const raw = input.value.trim();
      if (raw === "") return;

      const numericValue = Number(raw);
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
      handleUnitChange(key);
    });
  });

  sigFigCheckbox.addEventListener("change", () => {
    displayCalculatedValues();
  });

  calculate();
});

// Ensure this runs after the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
  if (typeof katex !== "undefined") {
    const options = {
      throwOnError: false,
      displayMode: true,
    };

    katex.render(
      "\\Large \\color{#333}{v = u + a \\cdot t}",
      document.getElementById("equation1"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{s = u \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2}",
      document.getElementById("equation2"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{v^2 = u^2 + 2 \\cdot a \\cdot s}",
      document.getElementById("equation3"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{s = \\frac{(u + v)}{2} \\cdot t}",
      document.getElementById("equation4"),
      options,
    );
    katex.render(
      "\\Large \\color{#333}{s = v \\cdot t - \\frac{1}{2} \\cdot a \\cdot t^2}",
      document.getElementById("equation5"),
      options,
    );
  } else {
    console.error(
      "KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.",
    );
  }
});
