    document.getElementById('inputNumber').addEventListener('input', function () {
        const number = this.value;
        const sigFigs = calculateSigFigs(number);
        document.getElementById('sigFigOutput').textContent = `Significant Figures: ${sigFigs}`;
    });

    document.getElementById('clearButton').addEventListener('click', function () {
        document.getElementById('inputNumber').value = '';
        document.getElementById('sigFigOutput').textContent = 'Significant Figures: 0';
    });
