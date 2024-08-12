import { getGravityConstant, convertGravity, convertMass } from '/scripts/utils/units.js';

document.addEventListener('DOMContentLoaded', function () {
    const forceInput = document.getElementById('inputF');
    const massInput = document.getElementById('inputM');
    const gravityInput = document.getElementById('inputG');
    const unitMassSelect = document.getElementById('unitMass');
    const unitGravitySelect = document.getElementById('unitGravity');
    const clearButton = document.getElementById('clearButton');
    const sigFigCheckbox = document.getElementById('sigFigCheckbox');
    let calculatedField = null;

    function clearAll() {
        forceInput.value = '';
        massInput.value = '';
        gravityInput.value = '';
        unlockAllInputs();
        calculatedField = null;
    }

    function lockInput(input, fieldName) {
        input.disabled = true;
        calculatedField = fieldName;
        if (fieldName === 'Gravity') {
            unitGravitySelect.disabled = true; // Lock gravity unit select when gravity is calculated
        }
    }

    function unlockAllInputs() {
        forceInput.disabled = false;
        massInput.disabled = false;
        // Only unlock gravity input if no predefined constant is selected
        const selectedValue = unitGravitySelect.value;
        if (getGravityConstant(selectedValue) === undefined) {
            gravityInput.disabled = false;
        }
        unitGravitySelect.disabled = false;
        calculatedField = null;
    }

    function clearLockedInput() {
        if (calculatedField) {
            const inputField = document.getElementById(`input${calculatedField.charAt(0)}`);
            inputField.value = '';
            inputField.disabled = false;
            calculatedField = null;
        }
    }

    // Handle changes in the unit selection for mass
    unitMassSelect.addEventListener('change', function () {
        if (calculatedField === 'Mass') {
            let mass = parseFloat(massInput.value);
            const currentUnit = unitMassSelect.value;
            mass = convertMass(mass, 'kg', currentUnit); // Convert the displayed mass to the new selected unit
            massInput.value = formatResult(mass, [mass]);
        } else {
            calculate(); // Recalculate and convert the displayed mass if the unit changes and mass isn't the calculated field
        }
    });

    function calculate() {
        let force = parseFloat(forceInput.value);
        let mass = parseFloat(massInput.value);
        let gravity = parseFloat(gravityInput.value);

        const massUnit = unitMassSelect.value;
        mass = convertMass(mass, massUnit, 'kg'); // Convert mass to kg for calculation

        const inputsFilled = [!isNaN(force), !isNaN(mass), !isNaN(gravity)];
        const filledCount = inputsFilled.filter(Boolean).length;

        if (filledCount < 2 && calculatedField) {
            clearLockedInput();
            return;
        }

        if (filledCount === 2 && !calculatedField) {
            if (!isNaN(force) && !isNaN(mass)) {
                const calculatedG = force / mass;
                gravityInput.value = formatResult(calculatedG, [force, mass]);
                lockInput(gravityInput, 'Gravity');
            } else if (!isNaN(force) && !isNaN(gravity)) {
                let calculatedM = force / gravity;
                calculatedM = convertMass(calculatedM, 'kg', massUnit); // Convert the calculated mass back to the selected unit
                massInput.value = formatResult(calculatedM, [force, gravity]);
                lockInput(massInput, 'Mass');
            } else if (!isNaN(mass) && !isNaN(gravity)) {
                const calculatedF = mass * gravity;
                forceInput.value = formatResult(calculatedF, [mass, gravity]);
                lockInput(forceInput, 'Force');
            }
        } else if (calculatedField) {
            if (calculatedField === 'Gravity' && !isNaN(force) && !isNaN(mass)) {
                const calculatedG = force / mass;
                gravityInput.value = formatResult(calculatedG, [force, mass]);
            } else if (calculatedField === 'Mass' && !isNaN(force) && !isNaN(gravity)) {
                let calculatedM = force / gravity;
                calculatedM = convertMass(calculatedM, 'kg', massUnit); // Convert mass back to the selected unit
                massInput.value = formatResult(calculatedM, [force, gravity]);
            } else if (calculatedField === 'Force' && !isNaN(mass) && !isNaN(gravity)) {
                const calculatedF = mass * gravity;
                forceInput.value = formatResult(calculatedF, [mass, gravity]);
            }
        }
    }

    function formatResult(value, inputs) {
        if (sigFigCheckbox.checked) {
            const minSigFigs = Math.min(...inputs.map(countSigFigs));
            return Number(value.toPrecision(minSigFigs));
        }
        return value.toFixed(10);
    }

    function countSigFigs(number) {
        return calculateSigFigs(number.toString());
    }

    // Event Listeners for inputs
    [forceInput, massInput, gravityInput].forEach(input => {
        input.addEventListener('input', () => {
            handleInputChange(input);
            calculate();
        });
    });

    function handleInputChange(input) {
        if (input.value.trim() === '') {
            clearLockedInput();
        }
    }

    // Event Listener for Gravity Unit Select
    unitGravitySelect.addEventListener('change', function () {
        const selectedValue = unitGravitySelect.value;
        const gravity = getGravityConstant(selectedValue);
        if (gravity !== undefined) {
            gravityInput.value = gravity;
            gravityInput.disabled = true;
            calculate(); // Recalculate with the new gravity value
        } else {
            gravityInput.disabled = false;
            gravityInput.value = ''; // Clear the gravity input if a custom unit is selected
        }
    });

    // Clear button resets the form
    clearButton.addEventListener('click', clearAll);
});
