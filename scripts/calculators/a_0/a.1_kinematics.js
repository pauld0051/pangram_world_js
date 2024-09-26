import { convertVelocity, convertDisplacement, convertAcceleration, convertTime } from '/scripts/utils/units.js';

document.addEventListener('DOMContentLoaded', function () {
    const displacementInput = document.getElementById('inputS');
    const initialVelocityInput = document.getElementById('inputU');
    const finalVelocityInput = document.getElementById('inputV');
    const accelerationInput = document.getElementById('inputA');
    const timeInput = document.getElementById('inputT');
    const unitDisplacementSelect = document.getElementById('unitDisplacement');
    const unitInitialVelocitySelect = document.getElementById('unitInitialVelocity');
    const unitFinalVelocitySelect = document.getElementById('unitFinalVelocity');
    const unitAccelerationSelect = document.getElementById('unitAcceleration');
    const unitTimeSelect = document.getElementById('unitTime');
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
        displacementInput.value = '';
        initialVelocityInput.value = '';
        finalVelocityInput.value = '';
        accelerationInput.value = '';
        timeInput.value = '';
        unlockAllInputs(); // Reset locks
    }

    // Lock a field to prevent its recalculation
    function lockInput(input, fieldName) {
        input.readOnly = true;
        lockedFields[fieldName] = true;
    }

    // Unlock all fields
    function unlockAllInputs() {
        displacementInput.readOnly = false;
        initialVelocityInput.readOnly = false;
        finalVelocityInput.readOnly = false;
        accelerationInput.readOnly = false;
        timeInput.readOnly = false;
        lockedFields = {
            displacement: false,
            initialVelocity: false,
            finalVelocity: false,
            acceleration: false,
            time: false
        };
    }

    // Clear the locked input value and unlock it
    function clearLockedInput() {
        Object.keys(lockedFields).forEach(key => {
            if (lockedFields[key]) {
                document.getElementById(`input${key.charAt(0).toUpperCase()}`).value = '';
                document.getElementById(`input${key.charAt(0).toUpperCase()}`).readOnly = false;
                lockedFields[key] = false;
            }
        });
    }

    // Validate inputs and show tooltip for impossible values
    function checkForImpossibleValues() {
        let u = initialVelocityInput.value ? parseFloat(initialVelocityInput.value) : NaN;
        let v = finalVelocityInput.value ? parseFloat(finalVelocityInput.value) : NaN;
        let a = accelerationInput.value ? parseFloat(accelerationInput.value) : NaN;
        let t = timeInput.value ? parseFloat(timeInput.value) : NaN;

        if (u > SPEED_OF_LIGHT) showTooltip("Initial velocity exceeds the speed of light, which is impossible.", initialVelocityInput);
        if (v > SPEED_OF_LIGHT) showTooltip("Final velocity exceeds the speed of light, which is impossible.", finalVelocityInput);
        if (a > SPEED_OF_LIGHT) showTooltip("Acceleration would result in exceeding the speed of light, which is impossible.", accelerationInput);
        if (t < 0) showTooltip("Negative time is not physically possible. Please adjust your inputs.", timeInput);

        return false; // Always continue if values are valid
    }

    // Function to show a tooltip near the input field
    function showTooltip(message, element) {
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.innerText = message;
        document.body.appendChild(tooltip);
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
        setTimeout(() => document.body.removeChild(tooltip), 10000);
    }

    // Primary calculation function
    function calculate() {
        // Log initial input values
        console.log("Initial Inputs:");
        console.log(`u: ${initialVelocityInput.value}, v: ${finalVelocityInput.value}, t: ${timeInput.value}, a: ${accelerationInput.value}, s: ${displacementInput.value}`);

        let u = initialVelocityInput.value ? parseFloat(initialVelocityInput.value) : NaN;
        let v = finalVelocityInput.value ? parseFloat(finalVelocityInput.value) : NaN;
        let t = timeInput.value ? parseFloat(timeInput.value) : NaN;
        let a = accelerationInput.value ? parseFloat(accelerationInput.value) : NaN;
        let s = displacementInput.value ? parseFloat(displacementInput.value) : NaN;

        // Skip if any of these fields are locked (already calculated)
        if (lockedFields.initialVelocity) u = NaN;
        if (lockedFields.finalVelocity) v = NaN;
        if (lockedFields.time) t = NaN;
        if (lockedFields.acceleration) a = NaN;
        if (lockedFields.displacement) s = NaN;

        // Log parsed values
        console.log("Parsed Values:");
        console.log(`u: ${u}, v: ${v}, t: ${t}, a: ${a}, s: ${s}`);

        // Early exit if impossible values detected
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

        // 1. Calculate based on (u, v, t) if they are not locked
        if (!isNaN(u) && !isNaN(v) && !isNaN(t) && !lockedFields.acceleration && !lockedFields.displacement) {
            a = (v - u) / t;
            s = ((u + v) / 2) * t;
            console.log("Case 1 triggered: Calculated a and s using (u, v, t).");

            accelerationInput.value = a.toFixed(10);
            displacementInput.value = s.toFixed(10);

            lockInput(accelerationInput, 'acceleration');
            lockInput(displacementInput, 'displacement');
        }
        // 2. Calculate based on (u, v, a) if they are not locked
        else if (!isNaN(u) && !isNaN(v) && !isNaN(a) && !lockedFields.time && !lockedFields.displacement) {
            t = (v - u) / a;
            s = (v * v - u * u) / (2 * a);
            console.log("Case 2 triggered: Calculated t and s using (u, v, a).");

            timeInput.value = t.toFixed(10);
            displacementInput.value = s.toFixed(10);

            lockInput(timeInput, 'time');
            lockInput(displacementInput, 'displacement');
        }
        // 3. Calculate based on (u, v, s) if they are not locked
        else if (!isNaN(u) && !isNaN(v) && !isNaN(s) && !lockedFields.acceleration && !lockedFields.time) {
            a = (v * v - u * u) / (2 * s);
            t = (2 * s) / (u + v);
            console.log("Case 3 triggered: Calculated a and t using (u, v, s).");

            accelerationInput.value = a.toFixed(10);
            timeInput.value = t.toFixed(10);

            lockInput(accelerationInput, 'acceleration');
            lockInput(timeInput, 'time');
        }
        // 4. Calculate based on (u, a, t)
    else if (!isNaN(u) && !isNaN(a) && !isNaN(t)) {
        s = u * t + 0.5 * a * t * t;
        v = u + a * t;
        console.log("Case 4 triggered: Calculated s and v using (u, a, t).");

        displacementInput.value = s.toFixed(10);
        finalVelocityInput.value = v.toFixed(10);

        lockInput(displacementInput, 'Displacement');
        lockInput(finalVelocityInput, 'FinalVelocity');
    }
    // 5. Calculate based on (s, v, t)
    else if (!isNaN(s) && !isNaN(v) && !isNaN(t)) {
        u = (2 * s - v * t) / t;
        a = (v - u) / t;
        console.log("Case 5 triggered: Calculated u and a using (s, v, t).");

        initialVelocityInput.value = u.toFixed(10);
        accelerationInput.value = a.toFixed(10);

        lockInput(initialVelocityInput, 'InitialVelocity');
        lockInput(accelerationInput, 'Acceleration');
    }
    // 6. Calculate based on (s, u, t)
    else if (!isNaN(s) && !isNaN(u) && !isNaN(t)) {
        v = (2 * s - u * t) / t;
        a = (v - u) / t;
        console.log("Case 6 triggered: Calculated v and a using (s, u, t).");

        finalVelocityInput.value = v.toFixed(10);
        accelerationInput.value = a.toFixed(10);

        lockInput(finalVelocityInput, 'FinalVelocity');
        lockInput(accelerationInput, 'Acceleration');
    }
    // 7. Calculate based on (v, a, t)
    else if (!isNaN(v) && !isNaN(a) && !isNaN(t)) {
        s = v * t - 0.5 * a * t * t;
        u = v - a * t;
        console.log("Case 7 triggered: Calculated s and u using (v, a, t).");

        displacementInput.value = s.toFixed(10);
        initialVelocityInput.value = u.toFixed(10);

        lockInput(displacementInput, 'Displacement');
        lockInput(initialVelocityInput, 'InitialVelocity');
    }
    // 8. Calculate based on (s, v, a)
    else if (!isNaN(s) && !isNaN(v) && !isNaN(a)) {
        const discriminant = v * v - 2 * a * s;
        if (discriminant >= 0) {
            u = Math.sqrt(discriminant);
            t = (v - u) / a;
            console.log("Case 8 triggered: Calculated u and t using (s, v, a).");

            initialVelocityInput.value = u.toFixed(10);
            timeInput.value = t.toFixed(10);

            lockInput(initialVelocityInput, 'InitialVelocity');
            lockInput(timeInput, 'Time');
        } else {
            console.log("Case 8: Impossible scenario detected with input values (s, v, a).");
            showTooltip("The input values lead to an impossible scenario. Please review your inputs.", displacementInput);
        }
    }
    // 9. Calculate based on (s, u, a)
    else if (!isNaN(s) && !isNaN(u) && !isNaN(a)) {
        v = Math.sqrt(u * u + 2 * a * s);
        t = (v - u) / a;
        console.log("Case 9 triggered: Calculated v and t using (s, u, a).");

        finalVelocityInput.value = v.toFixed(10);
        timeInput.value = t.toFixed(10);

        lockInput(finalVelocityInput, 'FinalVelocity');
        lockInput(timeInput, 'Time');
    }
    }

    // Event listener to handle input changes and reset locks accordingly
    [displacementInput, initialVelocityInput, finalVelocityInput, accelerationInput, timeInput].forEach(input => {
        input.addEventListener('input', () => {
            if (!input.readOnly) { // Check if the input is not locked
                clearLockedInput(); // Clear any locked input if any new value is entered
                calculate();
            }
        });
    });
});
