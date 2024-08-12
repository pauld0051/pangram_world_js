import { getGravityConstant, convertForce, convertGravity, convertMass } from '/scripts/utils/units.js';

document.addEventListener('DOMContentLoaded', function () {
    const forceInput = document.getElementById('inputF');
    const gravityInput = document.getElementById('inputG');
    const massInput = document.getElementById('inputM');
    const unitForceSelect = document.getElementById('unitForce');
    const unitGravitySelect = document.getElementById('unitGravity');
    const unitMassSelect = document.getElementById('unitMass');
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

    function calculate() {
        if (checkForInvalidValues()) {
            return; // Stop calculation if there are invalid values
        }

        let force = parseFloat(forceInput.value);
        let mass = parseFloat(massInput.value);
        let gravity = parseFloat(gravityInput.value);

        const massUnit = unitMassSelect.value;
        mass = convertMass(mass, massUnit, 'kg'); // Convert mass to kg for calculation

        const forceUnit = unitForceSelect.value;
        force = convertForce(force, forceUnit, 'N'); // Convert force to N for calculation

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
                let calculatedF = mass * gravity;
                calculatedF = convertForce(calculatedF, 'N', forceUnit); // Convert the calculated force back to the selected unit
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
                let calculatedF = mass * gravity;
                calculatedF = convertForce(calculatedF, 'N', forceUnit); // Convert force back to the selected unit
                forceInput.value = formatResult(calculatedF, [mass, gravity]);
            }
        }
    }


    // Add this event listener for the checkbox
    sigFigCheckbox.addEventListener('change', function () {
        calculate(); // Recalculate when the significant figures checkbox is toggled
    });

    function formatResult(value, inputs) {
        if (sigFigCheckbox.checked) {
            const leastSigFigs = findLeastSigFigs(inputs);

            // Use toPrecision directly to handle small sig figs and scientific notation
            return Number(value.toPrecision(leastSigFigs)).toString();
        }
        return value.toFixed(10);
    }


    function countSigFigs(number) {
        const sigFigs = calculateSigFigs(number.toString());
        console.log(sigFigs); // Log the number of significant figures to the console
        return sigFigs; // Return the number of significant figures
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

    // Handle changes in the unit selection for force
    unitForceSelect.addEventListener('change', function () {
        if (calculatedField === 'Force') {
            let force = parseFloat(forceInput.value);
            const currentUnit = unitForceSelect.value;
            force = convertForce(force, 'N', currentUnit); // Convert the displayed force to the new selected unit
            forceInput.value = formatResult(force, [force]);
        } else {
            calculate(); // Recalculate and convert the displayed force if the unit changes and force isn't the calculated field
        }
    });

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

    function showTooltipModal(message) {
        const tooltipModal = new bootstrap.Modal(document.getElementById('errorTooltipModal'));
        document.getElementById('errorTooltipText').innerText = message; // Set the error message dynamically
        tooltipModal.show();

        // Auto-hide the modal after a few seconds
        setTimeout(() => {
            tooltipModal.hide();
        }, 5000); // Adjust timing as necessary
    }

    function showPositionedModal(modalId, targetElement) {
        var modal = document.getElementById(modalId);
        var targetRect = targetElement.getBoundingClientRect();

        // Positioning the modal
        var modalDialog = modal.querySelector('.modal-dialog');
        modalDialog.style.position = 'absolute';
        modalDialog.style.top = targetRect.bottom + window.scrollY + 'px'; // Adjust the position
        modalDialog.style.left = targetRect.left + window.scrollX + 'px';  // Adjust the position

        // Show the modal
        var bsModal = new bootstrap.Modal(modal);
        bsModal.show();
    }

    function checkForInvalidValues() {
        if (parseFloat(massInput.value) < 0) {
            showPositionedModal('massWarningModal', massInput);
            return true; // Return true if a negative mass is found
        }
        return false; // Return false if no invalid values
    }

    // Clear button resets the form
    clearButton.addEventListener('click', clearAll);
});
