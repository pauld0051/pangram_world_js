// Import the calculateSigFigs function from the module
import { calculateSigFigs } from '../../utils/sig_fig_util.js';

// Event listener for the input field
document.getElementById('inputNumber').addEventListener('input', function () {
    const number = this.value;
    const sigFigs = calculateSigFigs(number);
    document.getElementById('sigFigOutput').textContent = `Significant Figures: ${sigFigs}`;
});

// Event listener for the clear button
document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('inputNumber').value = '';
    document.getElementById('sigFigOutput').textContent = 'Significant Figures: 0';
});
