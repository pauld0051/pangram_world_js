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

   // Function to disable or enable specific options in the dropdown
    function disablePredefinedOptions(disable) {
        const predefinedOptions = ['e', 'me', 've', 'ma', 'ju', 'sa', 'ur', 'ne', 'pl', 'mo', 'su', 'io', 'eu', 'ga', 'ca', 'ti', 'tr'];
        predefinedOptions.forEach(optionValue => {
            const option = unitGravitySelect.querySelector(`option[value="${optionValue}"]`);
            if (option) {
                option.disabled = disable;
            }
        });
    }

    function clearAll() {
        forceInput.value = '';
        massInput.value = '';

        // Reset gravity only if it's not predefined
        if (getGravityConstant(unitGravitySelect.value) === undefined) {
            gravityInput.value = '';
            gravityInput.readOnly = false;
        }

        disablePredefinedOptions(false); // Enable all options in the dropdown
        calculatedField = null;
        unlockAllInputs();
    }

    function lockInput(input, fieldName) {
        if (fieldName === 'Gravity') {
            input.readOnly = true; // Set gravity input to read-only
            disablePredefinedOptions(true); // Disable predefined options in the dropdown
            unitGravitySelect.disabled = false; // Allow changing to non-predefined units
        } else {
            input.readOnly = true;
        }
        calculatedField = fieldName;
    }

    function unlockAllInputs() {
        forceInput.readOnly = false;
        massInput.readOnly = false;
        gravityInput.readOnly = false;
        gravityInput.disabled = false;
        unitGravitySelect.disabled = false;
        disablePredefinedOptions(false); // Enable all options in the dropdown
        calculatedField = null;
    }

    function clearLockedInput() {
        if (calculatedField) {
            const inputField = document.getElementById(`input${calculatedField.charAt(0)}`);
            inputField.value = '';
            inputField.readOnly = false; // Allow the input to be editable again
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

        const gravityUnit = unitGravitySelect.value; // Check current gravity unit
        const inputsFilled = [!isNaN(force), !isNaN(mass), !isNaN(gravity)];
        const filledCount = inputsFilled.filter(Boolean).length;

        if (filledCount < 2 && calculatedField) {
            clearLockedInput();
            return;
        }

        if (filledCount === 2 && !calculatedField) {
            if (!isNaN(force) && !isNaN(mass)) {
                let calculatedG = force / mass;
                calculatedG = convertGravity(calculatedG, gravityUnit); // Convert gravity to the selected unit
                gravityInput.value = formatResult(calculatedG, [force, mass]);
                lockInput(gravityInput, 'Gravity'); // Lock gravity input if it's being calculated
            } else if (!isNaN(force) && !isNaN(gravity)) {
                let calculatedM = force / gravity;
                calculatedM = convertMass(calculatedM, 'kg', massUnit); // Convert the calculated mass back to the selected unit
                massInput.value = formatResult(calculatedM, [force, gravity]);
                lockInput(massInput, 'Mass');
                disablePredefinedOptions(false); // Allow changing planets
            } else if (!isNaN(mass) && !isNaN(gravity)) {
                let calculatedF = mass * gravity;
                calculatedF = convertForce(calculatedF, 'N', forceUnit); // Convert the calculated force back to the selected unit
                forceInput.value = formatResult(calculatedF, [mass, gravity]);
                lockInput(forceInput, 'Force');
                disablePredefinedOptions(false); // Allow changing planets
            }
        } else if (calculatedField) {
            if (calculatedField === 'Gravity' && !isNaN(force) && !isNaN(mass)) {
                let calculatedG = force / mass;
                calculatedG = convertGravity(calculatedG, gravityUnit); // Convert gravity to the selected unit
                gravityInput.value = formatResult(calculatedG, [force, mass]);
                disablePredefinedOptions(true); // Disable predefined options when calculating gravity
            } else if (calculatedField === 'Mass' && !isNaN(force) && !isNaN(gravity)) {
                let calculatedM = force / gravity;
                calculatedM = convertMass(calculatedM, 'kg', massUnit); // Convert mass back to the selected unit
                massInput.value = formatResult(calculatedM, [force, gravity]);
                disablePredefinedOptions(false); // Allow changing planets
            } else if (calculatedField === 'Force' && !isNaN(mass) && !isNaN(gravity)) {
                let calculatedF = mass * gravity;
                calculatedF = convertForce(calculatedF, 'N', forceUnit); // Convert force back to the selected unit
                forceInput.value = formatResult(calculatedF, [mass, gravity]);
                disablePredefinedOptions(false); // Allow changing planets
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
            return Number(value.toPrecision(leastSigFigs));
        }
        return value.toFixed(10);
    }


    function countSigFigs(number) {
        const sigFigs = calculateSigFigs(number.toString());
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
        let force = parseFloat(forceInput.value);
        const currentUnit = unitForceSelect.value;
        force = convertForce(force, currentUnit, 'N'); // Convert the displayed force to Newtons

        // Recalculate and format the result with significant figures if applicable
        forceInput.value = formatResult(force, [force, massInput.value, gravityInput.value]);
    });

   // Event Listener for Gravity Unit Select
    unitGravitySelect.addEventListener('change', function () {
        const selectedValue = unitGravitySelect.value;
        let gravity = getGravityConstant(selectedValue);

        if (gravity !== undefined) {
            // Predefined gravity constant (e.g., for planets)
            gravityInput.readOnly = true;
            gravityInput.value = gravity.toFixed(10); // Display the gravity value, formatted to 10 decimal places
            disablePredefinedOptions(true); // Disable predefined options if gravity is being calculated
        } else {
            // Non-predefined gravity unit selected
            gravityInput.readOnly = true; // Ensure the input is still readonly
            let currentGravityValue = parseFloat(gravityInput.value);
            if (!isNaN(currentGravityValue)) {
                gravity = convertGravity(currentGravityValue, selectedValue); // Convert the gravity value to the selected unit
                gravityInput.value = gravity.toFixed(10); // Update the input with the converted value
            } else {
                gravityInput.value = ''; // Clear the input field if no valid gravity value is present
            }
            disablePredefinedOptions(false); // Allow switching to non-predefined units
        }

        // Recalculate based on the new gravity value or unit if necessary
        if (calculatedField === 'Gravity') {
            calculate(); // Recalculate if gravity is the calculated field
        }
    });

    // Handle changes in the unit selection for mass
    unitMassSelect.addEventListener('change', function () {
        let mass = parseFloat(massInput.value);
        const currentUnit = unitMassSelect.value;
        mass = convertMass(mass, currentUnit, 'kg'); // Convert the displayed mass to kilograms

        // Recalculate and format the result with significant figures if applicable
        massInput.value = formatResult(mass, [forceInput.value, massInput.value, gravityInput.value]);
    });

   // Function to copy text to clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Text successfully copied, no need for console logs
        });
    }

    // Function to show a tooltip
    function showCopyTooltip(inputElement) {
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.innerText = 'Copied';

        document.body.appendChild(tooltip);

        const rect = inputElement.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;

        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 1500);
    }

    // Event Listeners for clicking on readonly inputs
    [forceInput, massInput, gravityInput].forEach(input => {
        input.addEventListener('click', () => {
            if (input.readOnly) {  // Change to check if input is readonly
                copyToClipboard(input.value);
                showCopyTooltip(input);
            }
        });
    });

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

    function showTooltipModal(message) {
        const tooltipModal = new bootstrap.Modal(document.getElementById('errorTooltipModal'));
        document.getElementById('errorTooltipText').innerText = message; // Set the error message dynamically
        tooltipModal.show();

        // Auto-hide the modal after a few seconds
        setTimeout(() => {
            tooltipModal.hide();
        }, 5000); // Adjust timing as necessary
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

