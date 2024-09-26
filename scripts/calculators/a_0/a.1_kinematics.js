// Using ES Module import syntax
import { convertVelocity, convertDisplacement, convertAcceleration, convertTime } from '../../utils/units.js';
import { calculateSigFigs, findLeastSigFigs } from '../../utils/sig_fig_util.js';

document.addEventListener('DOMContentLoaded', function () {
    // Input elements
    const displacementInput = document.getElementById('inputS');
    const initialVelocityInput = document.getElementById('inputU');
    const finalVelocityInput = document.getElementById('inputV');
    const accelerationInput = document.getElementById('inputA');
    const timeInput = document.getElementById('inputT');

    // Unit selection elements
    const unitDisplacementSelect = document.getElementById('unitDisplacement');
    const unitInitialVelocitySelect = document.getElementById('unitInitialVelocity');
    const unitFinalVelocitySelect = document.getElementById('unitFinalVelocity');
    const unitAccelerationSelect = document.getElementById('unitAcceleration');
    const unitTimeSelect = document.getElementById('unitTime');

    // Other elements
    const sigFigCheckbox = document.getElementById('sigFigCheckbox');
    const clearButton = document.getElementById('clearButton');
    const SPEED_OF_LIGHT = 299792458; // Speed of light in meters per second

    // Track locked fields
    let lockedFields = {
        displacement: false,
        initialVelocity: false,
        finalVelocity: false,
        acceleration: false,
        time: false
    };

    // Track original input values before conversion
    let originalValues = {
        displacement: null,
        initialVelocity: null,
        finalVelocity: null,
        acceleration: null,
        time: null
    };

    // Clear all inputs and reset locks
    clearButton.addEventListener('click', clearAll);

    function clearAll() {
        // Clear input values
        displacementInput.value = '';
        initialVelocityInput.value = '';
        finalVelocityInput.value = '';
        accelerationInput.value = '';
        timeInput.value = '';

        // Unlock all inputs
        unlockAllInputs();

        // Reset locked fields and original values
        resetLockedFields();
        resetOriginalValues();
    }

    function resetLockedFields() {
        lockedFields = {
            displacement: false,
            initialVelocity: false,
            finalVelocity: false,
            acceleration: false,
            time: false
        };
    }

    function resetOriginalValues() {
        originalValues = {
            displacement: null,
            initialVelocity: null,
            finalVelocity: null,
            acceleration: null,
            time: null
        };
    }

    function lockInput(input, fieldName) {
        input.readOnly = true; // Lock the field to prevent further edits
        lockedFields[fieldName] = true; // Mark this field as locked
    }

    function unlockAllInputs() {
        // Unlock all input fields
        displacementInput.readOnly = false;
        initialVelocityInput.readOnly = false;
        finalVelocityInput.readOnly = false;
        accelerationInput.readOnly = false;
        timeInput.readOnly = false;

        // Reset locked fields
        resetLockedFields();
    }

    function clearLockedInput() {
        Object.keys(lockedFields).forEach(key => {
            const inputElement = document.getElementById(`input${key.charAt(0).toUpperCase()}`);
            if (lockedFields[key] && inputElement) {
                // Clear and unlock locked fields only
                inputElement.value = '';
                inputElement.readOnly = false;
                lockedFields[key] = false;
            }
        });
    }

    function updateOriginalValue(fieldName, value) {
        originalValues[fieldName] = value;
    }

    function convertAndUpdateInputs(field, inputElement, conversionFunction, originalValue) {
        if (originalValue != null && !isNaN(originalValue)) {
            const fromUnit = inputElement.getAttribute('data-original-unit') || inputElement.value;
            const toUnit = field.value;

            inputElement.value = conversionFunction(originalValue, fromUnit, toUnit);

            inputElement.setAttribute('data-original-unit', toUnit);
        }
    }

    function checkForImpossibleValues(values) {
        const { u, v, a, t, s } = values;
        let error = false;

        // Check for impossible values and display tooltips only when needed
        if (!isNaN(u) && u > SPEED_OF_LIGHT) {
            showTooltip("Initial velocity exceeds the speed of light, which is impossible.", initialVelocityInput);
            error = true;
        }
        if (!isNaN(v) && v > SPEED_OF_LIGHT) {
            showTooltip("Final velocity exceeds the speed of light, which is impossible.", finalVelocityInput);
            error = true;
        }
        if (!isNaN(a) && a > SPEED_OF_LIGHT) {
            showTooltip("Acceleration would result in exceeding the speed of light, which is impossible.", accelerationInput);
            error = true;
        }
        if (!isNaN(t) && t < 0) {
            showTooltip("Negative time is not physically possible. Please adjust your inputs.", timeInput);
            error = true;
        }

        if (!error) {
            if (!isNaN(u) && !isNaN(v) && !isNaN(a)) {
                if ((v - u) / a < 0) {
                    showTooltip("The combination of initial velocity, final velocity, and acceleration leads to negative time. Please review your inputs.", initialVelocityInput);
                    error = true;
                }
            }

            if (!isNaN(v) && !isNaN(a) && !isNaN(s)) {
                if ((v * v - 2 * a * s) < 0) {
                    showTooltip("The combination of final velocity, acceleration, and displacement leads to negative initial velocity squared. Please review your inputs.", finalVelocityInput);
                    error = true;
                }
            }

            // Additional check to prevent NaN due to spurious inputs
            if (!isNaN(u) && !isNaN(v) && !isNaN(t) && !isNaN(a)) {
                if (isNaN((v - u) / t) || isNaN(a * t)) {
                    showTooltip("The input values result in an invalid calculation. Please review your inputs.", accelerationInput);
                    error = true;
                }
            }
        }

        return error;
    }

    function showTooltip(message, element) {
        // Remove existing tooltips first
        removeExistingTooltips();

        // Create a new tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.innerText = message;
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '1000';

        document.body.appendChild(tooltip);

        // Position the tooltip above the input field
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;

        // Automatically remove the tooltip after a delay
        setTimeout(() => {
            if (tooltip.parentElement) {
                document.body.removeChild(tooltip);
            }
        }, 5000); // Show tooltip for 5 seconds
    }

    // Function to remove all existing tooltips
    function removeExistingTooltips() {
        const tooltips = document.querySelectorAll('.copy-tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    }

    function calculate() {
    console.log("Initial Inputs:");
    console.log(`u: ${initialVelocityInput.value}, v: ${finalVelocityInput.value}, t: ${timeInput.value}, a: ${accelerationInput.value}, s: ${displacementInput.value}`);

    let u = initialVelocityInput.value ? parseFloat(initialVelocityInput.value) : NaN;
    let v = finalVelocityInput.value ? parseFloat(finalVelocityInput.value) : NaN;
    let t = timeInput.value ? parseFloat(timeInput.value) : NaN;
    let a = accelerationInput.value ? parseFloat(accelerationInput.value) : NaN;
    let s = displacementInput.value ? parseFloat(displacementInput.value) : NaN;

    let values = { u, v, a, t, s };

    let knownCount = 0;
    for (let key in values) {
        if (!isNaN(values[key])) knownCount++;
    }

    if (knownCount !== 3) {
        clearLockedInput(); 
        console.log("Not enough known values to perform a calculation.");
        return;
    }

    if (checkForImpossibleValues(values)) {
        console.log("Exiting due to impossible values.");
        lockAllRemainingFields(Object.keys(values).filter(key => isNaN(values[key]))); // Lock fields even when there are errors
        return;
    }

    const unitInitialVelocity = unitInitialVelocitySelect.value;
    const unitFinalVelocity = unitFinalVelocitySelect.value;
    const unitTime = unitTimeSelect.value;
    const unitAcceleration = unitAccelerationSelect.value;
    const unitDisplacement = unitDisplacementSelect.value;

    // Store original values before conversion for use in unit conversion later
    updateOriginalValue('initialVelocity', u);
    updateOriginalValue('finalVelocity', v);
    updateOriginalValue('time', t);
    updateOriginalValue('acceleration', a);
    updateOriginalValue('displacement', s);

    u = !isNaN(u) ? convertVelocity(u, unitInitialVelocity, 'ms') : NaN;
    v = !isNaN(v) ? convertVelocity(v, unitFinalVelocity, 'ms') : NaN;
    t = !isNaN(t) ? convertTime(t, unitTime, 's') : NaN;
    a = !isNaN(a) ? convertAcceleration(a, unitAcceleration, 'ms2') : NaN;
    s = !isNaN(s) ? convertDisplacement(s, unitDisplacement, 'm') : NaN;

    console.log("Converted Values:");
    console.log(`u: ${u}, v: ${v}, t: ${t}, a: ${a}, s: ${s}`);

    let unknowns = Object.keys(values).filter(key => isNaN(values[key]));

    if (unknowns.length !== 2) {
        console.log("Calculation skipped. Not exactly two unknowns present.");
        lockAllRemainingFields(unknowns); // Lock fields even when calculation skipped
        return;
    }

    // Lock remaining fields regardless of calculation success or failure
    lockAllRemainingFields(unknowns);

    let calculatedValues = calculateUnknowns(values, unknowns);

    let minSigFigs = findLeastSigFigs([u, v, a, s, t]);

    if (calculatedValues) {
        unknowns.forEach(key => {
            const input = document.getElementById(`input${key.toUpperCase()}`);
            if (!isNaN(calculatedValues[key])) {
                const valueToDisplay = sigFigCheckbox.checked
                    ? calculatedValues[key].toPrecision(minSigFigs)
                    : calculatedValues[key].toFixed(10);

                // Check if valueToDisplay is NaN before assigning
                if (!isNaN(valueToDisplay)) {
                    input.value = valueToDisplay;
                } else {
                    console.error(`NaN value detected for ${key}: ${calculatedValues[key]}`);
                    input.value = calculatedValues[key].toFixed(10);
                }
            } else {
                showTooltip("The calculation resulted in an error. Please adjust your inputs.", input);
                input.value = ''; // Clear the input value if it's NaN
            }
        });
    }
}

    function lockAllRemainingFields(unknowns) {
        unknowns.forEach(key => {
            const input = document.getElementById(`input${key.toUpperCase()}`);
            if (input) {
                lockInput(input, key);
            }
        });
    }

    function calculateUnknowns(values, unknowns) {
        let { u, v, t, a, s } = values;

        try {
            if (unknowns.includes('a') && unknowns.includes('s')) {
                a = (v - u) / t;
                s = ((u + v) / 2) * t;
            } else if (unknowns.includes('t') && unknowns.includes('s')) {
                t = (v - u) / a;
                s = (v * v - u * u) / (2 * a);
            } else if (unknowns.includes('a') && unknowns.includes('t')) {
                a = (v * v - u * u) / (2 * s);
                t = (2 * s) / (u + v);
            } else if (unknowns.includes('s') && unknowns.includes('v')) {
                s = u * t + 0.5 * a * t * t;
                v = u + a * t;
            } else if (unknowns.includes('u') && unknowns.includes('a')) {
                u = (2 * s - v * t) / t;
                a = (v - u) / t;
            } else if (unknowns.includes('u') && unknowns.includes('t')) {
                a = (2 * (s - u * t)) / (t * t);
                v = u + a * t;
            } else if (unknowns.includes('u') && unknowns.includes('s')) {
                v = Math.sqrt(u * u + 2 * a * s);
                t = (v - u) / a;
            } else if (unknowns.includes('t') && unknowns.includes('a')) {
                s = v * t - 0.5 * a * t * t;
                u = v - a * t;
            } else if (unknowns.includes('v') && unknowns.includes('t')) {
                u = (2 * s / t) - v;
                a = (v - u) / t;
            } else {
                console.log("No valid combinations found.");
                return null;
            }

            // Check if any calculated value is NaN
            if ([u, v, t, a, s].some(val => isNaN(val))) {
                console.error("NaN detected in calculations.");
                return null;
            }

        } catch (e) {
            console.error("Error during calculation:", e);
            return null;
        }

        return { u, v, t, a, s };
    }

    [displacementInput, initialVelocityInput, finalVelocityInput, accelerationInput, timeInput].forEach(input => {
        input.addEventListener('input', () => {
            if (!input.readOnly) {
                clearLockedInput(); 
                calculate(); 
            }
        });
    });

    [unitDisplacementSelect, unitInitialVelocitySelect, unitFinalVelocitySelect, unitAccelerationSelect, unitTimeSelect].forEach(select => {
        select.addEventListener('change', () => {
            // Convert and update inputs based on new units selected
            convertAndUpdateInputs(select, displacementInput, convertDisplacement, originalValues.displacement);
            convertAndUpdateInputs(select, initialVelocityInput, convertVelocity, originalValues.initialVelocity);
            convertAndUpdateInputs(select, finalVelocityInput, convertVelocity, originalValues.finalVelocity);
            convertAndUpdateInputs(select, accelerationInput, convertAcceleration, originalValues.acceleration);
            convertAndUpdateInputs(select, timeInput, convertTime, originalValues.time);
            
            // Recalculate with new units and update the locked inputs
            calculate();
        });
    });

    // Ensure the correct significant figures are used on change
    sigFigCheckbox.addEventListener('change', () => {
        // Recalculate with significant figures applied, ensure to fetch and update inputs
        calculate(); // Recalculate to apply significant figures
    });

    // Initialize original units for the inputs
    [displacementInput, initialVelocityInput, finalVelocityInput, accelerationInput, timeInput].forEach(input => {
        input.setAttribute('data-original-unit', input.value);
    });

    // Call calculate initially to ensure everything is set correctly
    calculate();
});

// Ensure this runs after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if KaTeX is available
    if (typeof katex !== 'undefined') {
        // KaTeX render options
        const options = {
            throwOnError: false, // Do not throw errors on invalid LaTeX input
            displayMode: true    // Display equations in block mode
        };

        // Render Kinematic Equations
        katex.render("\\Large \\color{#333}{v = u + a \\cdot t}", document.getElementById('equation1'), options);
        katex.render("\\Large \\color{#333}{s = u \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2}", document.getElementById('equation2'), options);
        katex.render("\\Large \\color{#333}{v^2 = u^2 + 2 \\cdot a \\cdot s}", document.getElementById('equation3'), options);
        katex.render("\\Large \\color{#333}{s = \\frac{(u + v)}{2} \\cdot t}", document.getElementById('equation4'), options);
        katex.render("\\Large \\color{#333}{s = v \\cdot t - \\frac{1}{2} \\cdot a \\cdot t^2}", document.getElementById('equation5'), options);

        console.log("Kinematic equations rendered successfully.");
    } else {
        console.error("KaTeX is not defined. Ensure KaTeX is loaded before rendering equations.");
    }
});
