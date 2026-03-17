// sig_fig_util.js

function normaliseInput(value) {
  if (value == null) return "";
  return String(value).trim();
}

export function calculateSigFigs(value) {
  let str = normaliseInput(value);

  if (str === "") return 0;

  // Remove sign
  str = str.replace(/^[+-]/, "");

  // Scientific notation
  if (/e/i.test(str)) {
    const [coefficient] = str.split(/e/i);
    return calculateSigFigs(coefficient);
  }

  // Reject invalid numeric-like strings
  if (!/^\d*\.?\d+$/.test(str) && !/^\d+\.$/.test(str)) {
    return 0;
  }

  // Decimal numbers
  if (str.includes(".")) {
    // Remove decimal point
    const digits = str.replace(".", "");

    // Leading zeros are not significant
    const trimmed = digits.replace(/^0+/, "");

    return trimmed.length;
  }

  // Integers without decimal point
  // Leading zeros are not significant, trailing zeros are ambiguous and usually not significant
  // So 1200 => 2 sig figs, 00120 => 2 sig figs
  const noLeadingZeros = str.replace(/^0+/, "");
  const noTrailingZeros = noLeadingZeros.replace(/0+$/, "");

  return noTrailingZeros.length;
}

export function findLeastSigFigs(inputs) {
  let least = Infinity;

  for (const value of inputs) {
    const str = normaliseInput(value);
    if (str === "") continue;

    const sigFigs = calculateSigFigs(str);
    if (sigFigs > 0 && sigFigs < least) {
      least = sigFigs;
    }
  }

  return least === Infinity ? 0 : least;
}

export function formatToSigFigs(value, sigFigs) {
  if (!Number.isFinite(value)) return "";
  if (!Number.isInteger(sigFigs) || sigFigs < 1) return String(value);
  return Number(value).toPrecision(sigFigs);
}

export function formatPlainNumber(value) {
  if (!Number.isFinite(value)) return "";

  // Avoid ugly binary float noise and avoid forced trailing zeros
  return Number.parseFloat(Number(value).toPrecision(12)).toString();
}
