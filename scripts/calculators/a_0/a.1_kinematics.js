import { convertVelocity, convertDisplacement, convertAcceleration, convertTime } from '/scripts/utils/units.js';

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

        // Reset locked fields
        resetLockedFields();
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

        if (calculatedValues) {
            unknowns.forEach(key => {
                const input = document.getElementById(`input${key.toUpperCase()}`);
                if (!isNaN(calculatedValues[key])) {
                    input.value = sigFigCheckbox.checked
                        ? calculatedValues[key].toPrecision(findLeastSigFigs([u, v, a, s, t]))
                        : calculatedValues[key].toFixed(10);
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
});
