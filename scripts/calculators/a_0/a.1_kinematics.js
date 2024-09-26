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
        lockedFields = {
            displacement: false,
            initialVelocity: false,
            finalVelocity: false,
            acceleration: false,
            time: false
        };
    }

    function clearLockedInput() {
        Object.keys(lockedFields).forEach(key => {
            const inputElement = document.getElementById(`input${key.charAt(0).toUpperCase()}`);
            if (!lockedFields[key] && inputElement) {
                inputElement.value = ''; // Clear only unlocked fields
                inputElement.readOnly = false; // Allow edits to unlocked fields
            }
        });
    }

    function checkForImpossibleValues() {
        // Fetch and parse values
        let u = initialVelocityInput.value ? parseFloat(initialVelocityInput.value) : NaN;
        let v = finalVelocityInput.value ? parseFloat(finalVelocityInput.value) : NaN;
        let a = accelerationInput.value ? parseFloat(accelerationInput.value) : NaN;
        let t = timeInput.value ? parseFloat(timeInput.value) : NaN;

        // Check for impossible values
        if (u > SPEED_OF_LIGHT) {
            showTooltip("Initial velocity exceeds the speed of light, which is impossible.", initialVelocityInput);
        }
        if (v > SPEED_OF_LIGHT) {
            showTooltip("Final velocity exceeds the speed of light, which is impossible.", finalVelocityInput);
        }
        if (a > SPEED_OF_LIGHT) {
            showTooltip("Acceleration would result in exceeding the speed of light, which is impossible.", accelerationInput);
        }
        if (t < 0) {
            showTooltip("Negative time is not physically possible. Please adjust your inputs.", timeInput);
        }

        // Return false as we're handling impossible values with tooltips
        return false;
    }

    function showTooltip(message, element) {
        // Create a tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.innerText = message;
        document.body.appendChild(tooltip);

        // Position the tooltip
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;

        // Remove the tooltip after a delay
        setTimeout(() => document.body.removeChild(tooltip), 10000);
    }

    function calculate() {
        // Log initial input values
        console.log("Initial Inputs:");
        console.log(`u: ${initialVelocityInput.value}, v: ${finalVelocityInput.value}, t: ${timeInput.value}, a: ${accelerationInput.value}, s: ${displacementInput.value}`);

        // Parse values from inputs
        let u = initialVelocityInput.value ? parseFloat(initialVelocityInput.value) : NaN;
        let v = finalVelocityInput.value ? parseFloat(finalVelocityInput.value) : NaN;
        let t = timeInput.value ? parseFloat(timeInput.value) : NaN;
        let a = accelerationInput.value ? parseFloat(accelerationInput.value) : NaN;
        let s = displacementInput.value ? parseFloat(displacementInput.value) : NaN;

        // Handle locked fields to avoid calculation issues
        if (lockedFields.initialVelocity) u = NaN;
        if (lockedFields.finalVelocity) v = NaN;
        if (lockedFields.time) t = NaN;
        if (lockedFields.acceleration) a = NaN;
        if (lockedFields.displacement) s = NaN;

        // Log parsed values
        console.log("Parsed Values:");
        console.log(`u: ${u}, v: ${v}, t: ${t}, a: ${a}, s: ${s}`);

        // Check for impossible values
        if (checkForImpossibleValues()) {
            console.log("Exiting due to impossible values.");
            return;
        }

        // Conversion of units
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

        // Log converted values
        console.log("Converted Values:");
        console.log(`u: ${u}, v: ${v}, t: ${t}, a: ${a}, s: ${s}`);

        // Identify which calculation to perform based on inputs
        let knownCount = 0; // Counter for known variables
        let variables = { u, v, t, a, s }; // Create an object to hold all variables
        let unknowns = []; // Array to track unknown variables

        // Count known variables and track unknowns
        for (let key in variables) {
            if (!isNaN(variables[key])) {
                knownCount++;
            } else {
                unknowns.push(key); // Add unknown variable key to the array
            }
        }

        // Only calculate when there are exactly three known values
        if (knownCount !== 3) {
            console.log("Not enough known values to perform a calculation.");
            return;
        }

        // Calculate based on unknowns array
        let calculatedValues = calculateUnknowns(variables, unknowns);

        if (calculatedValues) {
            // Assign calculated values and lock fields
            unknowns.forEach(key => {
                const input = document.getElementById(`input${key.toUpperCase()}`);
                input.value = sigFigCheckbox.checked
                    ? calculatedValues[key].toPrecision(findLeastSigFigs([u, v, a, s, t]))
                    : calculatedValues[key].toFixed(10);
                lockInput(input, key);
            });
        }
    }

    function calculateUnknowns(values, unknowns) {
        // Destructure known variables
        let { u, v, t, a, s } = values;

        // Check all 9 possible combinations to solve for unknowns
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

        return { u, v, t, a, s };
    }

    // Event listeners for input changes
    [displacementInput, initialVelocityInput, finalVelocityInput, accelerationInput, timeInput].forEach(input => {
        input.addEventListener('input', () => {
            if (!input.readOnly) {
                clearLockedInput(); // Clear fields that are not locked
                calculate(); // Recalculate based on new input
            }
        });
    });
});
