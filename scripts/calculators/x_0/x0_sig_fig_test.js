document.addEventListener('DOMContentLoaded', function () {
    const generateNumberContainer = document.getElementById('generateNumberContainer');
    const generateNumberInput = document.getElementById('generateNumber');
    const testResultOutput = document.getElementById('testResultOutput');
    const inputSigFigs = document.getElementById('inputSigFigs');
    const revealResultBtn = document.getElementById('revealResultBtn');

    // Number Generator Script
    generateNumberContainer.addEventListener('click', function (event) {
        event.stopPropagation(); 
        event.preventDefault(); 

        const hasDecimal = Math.random() > 0.5;
        const numDigits = Math.floor(Math.random() * 10) + 1;
        let generatedNumber;

        if (hasDecimal) {
            const numDecimalPlaces = Math.floor(Math.random() * numDigits) + 1;
            const integerPart = Math.floor(Math.random() * Math.pow(10, numDigits - numDecimalPlaces));
            const fractionalPart = Math.floor(Math.random() * Math.pow(10, numDecimalPlaces)).toString().padStart(numDecimalPlaces, '0');
            generatedNumber = integerPart === 0 ? `0.${fractionalPart}` : `${integerPart}.${fractionalPart}`;
        } else {
            generatedNumber = Math.floor(Math.random() * Math.pow(10, numDigits));
        }

        // Set the generated number in the input field
        generateNumberInput.value = generatedNumber;

        // Clear any previous results
        testResultOutput.textContent = '';
        inputSigFigs.value = '';
    });

    // Reveal Result Functionality
    revealResultBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        const userSigFigs = parseInt(inputSigFigs.value, 10);
        const generatedNumber = generateNumberInput.value;

        if (isNaN(userSigFigs)) {
            testResultOutput.textContent = 'Please enter a valid number of significant figures.';
            return;
        }

        const correctSigFigs = calculateSigFigs(generatedNumber);

        if (userSigFigs === correctSigFigs) {
            testResultOutput.textContent = 'Correct! Well done.';
        } else {
            testResultOutput.textContent = `Incorrect. The correct number of significant figures is ${correctSigFigs}.`;
        }
    });
});
