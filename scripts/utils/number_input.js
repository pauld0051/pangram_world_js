// number_input.js

export function normaliseNumericInput(value) {
  if (value == null) return "";
  return String(value).trim();
}

export function isCompleteValidNumber(value) {
  const trimmed = normaliseNumericInput(value);

  if (trimmed === "") return false;

  // Allows:
  // 12
  // -12
  // 3.14
  // .5
  // 1.
  // 1e3
  // -2.5e-4
  const pattern = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i;
  return pattern.test(trimmed);
}

export function isPotentiallyValidNumberInput(value) {
  const trimmed = normaliseNumericInput(value);

  // Empty is allowed while editing
  if (trimmed === "") return true;

  // Allow incomplete typing states
  if (
    trimmed === "-" ||
    trimmed === "+" ||
    trimmed === "." ||
    trimmed === "-." ||
    trimmed === "+." ||
    trimmed.toLowerCase() === "e" ||
    trimmed.toLowerCase() === "-e" ||
    trimmed.toLowerCase() === "+e"
  ) {
    return true;
  }

  // Allow partial scientific notation while typing
  const partialPattern = /^[+-]?(?:(?:\d+\.?\d*|\.\d+)?(?:e[+-]?\d*)?)?$/i;

  return partialPattern.test(trimmed);
}

export function parseNumericInput(value) {
  const trimmed = normaliseNumericInput(value);

  if (!isCompleteValidNumber(trimmed)) {
    return NaN;
  }

  const numericValue = Number(trimmed);
  return Number.isFinite(numericValue) ? numericValue : NaN;
}

export function hasInvalidNumericEntry(valuesObject) {
  return Object.entries(valuesObject).some(
    ([, value]) => !isPotentiallyValidNumberInput(value),
  );
}

export function getInvalidNumericFields(valuesObject) {
  return Object.entries(valuesObject)
    .filter(([, value]) => !isPotentiallyValidNumberInput(value))
    .map(([key]) => key);
}
