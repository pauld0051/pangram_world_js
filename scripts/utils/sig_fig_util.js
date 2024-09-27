// sig_fig_util.js

export function calculateSigFigs(number) {
  if (number == null || isNaN(number)) return 0;

  // Convert number to string to handle it uniformly
  let numStr = number.toString().trim();

  if (/e/i.test(numStr)) {
    // For scientific notation, calculate sig figs of the base part
    const [base, exponent] = numStr.split(/e/i);
    return calculateSigFigs(base);
  }

  // Remove leading zeros for numbers greater than 1
  if (!numStr.includes(".")) {
    numStr = numStr.replace(/^0+/, "");
  }

  // Handle cases like "0.00123" (leading zeros are not significant)
  if (numStr.startsWith("0.")) {
    numStr = numStr.replace(/^0+/, "");
  }

  // For negative numbers, remove the negative sign for calculations
  if (numStr.startsWith("-")) {
    numStr = numStr.substring(1);
  }

  // Count significant figures
  let sigFigs = 0;
  let seenNonZero = false;

  for (const char of numStr) {
    if (char === ".") continue;
    if (char !== "0") seenNonZero = true;
    if (seenNonZero) sigFigs++;
  }

  return sigFigs;
}

export function findLeastSigFigs(inputs) {
  let leastSigFigs = Infinity;

  inputs.forEach((input) => {
    if (input != null && !isNaN(input) && input !== "") {
      const sigFigs = calculateSigFigs(input);
      if (sigFigs < leastSigFigs) {
        leastSigFigs = sigFigs;
      }
    }
  });

  return leastSigFigs === Infinity ? 0 : leastSigFigs;
}
