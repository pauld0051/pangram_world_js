// sig_fig_util.js

export function calculateSigFigs(number) {
    if (number == null) return 0;

    // Convert number to string to ensure it can be trimmed
    number = number.toString().trim();

    // Handle scientific notation separately
    if (/e/i.test(number)) {
        const parts = number.split(/e/i);
        return calculateSigFigs(parts[0]);
    }

    // Split the number by the decimal point if it exists
    const parts = number.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1] || '';

    // Remove leading zeros in the integer part
    integerPart = integerPart.replace(/^0+/, '');

    // If no integer part, set it to '0' (only zeros before decimal)
    if (integerPart === '') integerPart = '0';

    // Count the significant figures
    let sigFigs = 0;

    // Count all digits in the integer part if there is no decimal
    if (!decimalPart && integerPart !== '0') {
        sigFigs = integerPart.replace(/0+$/, '').length;
    }

    // Count all digits in the integer and decimal parts for numbers with a decimal
    if (decimalPart) {
        // Integer part significant figures (excluding leading zeros)
        sigFigs = integerPart.length;
        // Decimal part significant figures
        sigFigs += decimalPart.length;
    }

    // For numbers less than 1, all digits after the leading zeros are significant
    if (integerPart === '0' && decimalPart) {
        sigFigs = decimalPart.replace(/^0+/, '').length;
    }

    return sigFigs;
}

export function findLeastSigFigs(inputs) {
    let leastSigFigs = Infinity;

    inputs.forEach(input => {
        if (input) {
            const sigFigs = calculateSigFigs(input);
            if (sigFigs < leastSigFigs) {
                leastSigFigs = sigFigs;
            }
        }
    });

    return leastSigFigs === Infinity ? 0 : leastSigFigs;
}

// Use CommonJS export syntax
//module.exports = {
//    calculateSigFigs,
//    findLeastSigFigs
//};
