document.addEventListener("DOMContentLoaded", function () {
    // Greek letter data
    const greekUppercase = [
    { letter: 'Α', unicode: '\u0391', name: 'Alpha' },
    { letter: 'Β', unicode: '\u0392', name: 'Beta' },
    { letter: 'Γ', unicode: '\u0393', name: 'Gamma' },
    { letter: 'Δ', unicode: '\u0394', name: 'Delta' },
    { letter: 'Ε', unicode: '\u0395', name: 'Epsilon' },
    { letter: 'Ζ', unicode: '\u0396', name: 'Zeta' },
    { letter: 'Η', unicode: '\u0397', name: 'Eta' },
    { letter: 'Θ', unicode: '\u0398', name: 'Theta' },
    { letter: 'Ι', unicode: '\u0399', name: 'Iota' },
    { letter: 'Κ', unicode: '\u039A', name: 'Kappa' },
    { letter: 'Λ', unicode: '\u039B', name: 'Lambda' },
    { letter: 'Μ', unicode: '\u039C', name: 'Mu' },
    { letter: 'Ν', unicode: '\u039D', name: 'Nu' },
    { letter: 'Ξ', unicode: '\u039E', name: 'Xi' },
    { letter: 'Ο', unicode: '\u039F', name: 'Omicron' },
    { letter: 'Π', unicode: '\u03A0', name: 'Pi' },
    { letter: 'Ρ', unicode: '\u03A1', name: 'Rho' },
    { letter: 'Σ', unicode: '\u03A3', name: 'Sigma' },
    { letter: 'Τ', unicode: '\u03A4', name: 'Tau' },
    { letter: 'Υ', unicode: '\u03A5', name: 'Upsilon' },
    { letter: 'Φ', unicode: '\u03A6', name: 'Phi' },
    { letter: 'Χ', unicode: '\u03A7', name: 'Chi' },
    { letter: 'Ψ', unicode: '\u03A8', name: 'Psi' },
    { letter: 'Ω', unicode: '\u03A9', name: 'Omega' }
];

const greekLowercase = [
    { letter: 'α', unicode: '\u03B1', name: 'Alpha' },
    { letter: 'β', unicode: '\u03B2', name: 'Beta' },
    { letter: 'γ', unicode: '\u03B3', name: 'Gamma' },
    { letter: 'δ', unicode: '\u03B4', name: 'Delta' },
    { letter: 'ε', unicode: '\u03B5', name: 'Epsilon' },
    { letter: 'ζ', unicode: '\u03B6', name: 'Zeta' },
    { letter: 'η', unicode: '\u03B7', name: 'Eta' },
    { letter: 'θ', unicode: '\u03B8', name: 'Theta' },
    { letter: 'ι', unicode: '\u03B9', name: 'Iota' },
    { letter: 'κ', unicode: '\u03BA', name: 'Kappa' },
    { letter: 'λ', unicode: '\u03BB', name: 'Lambda' },
    { letter: 'μ', unicode: '\u03BC', name: 'Mu' },
    { letter: 'ν', unicode: '\u03BD', name: 'Nu' },
    { letter: 'ξ', unicode: '\u03BE', name: 'Xi' },
    { letter: 'ο', unicode: '\u03BF', name: 'Omicron' },
    { letter: 'π', unicode: '\u03C0', name: 'Pi' },
    { letter: 'ρ', unicode: '\u03C1', name: 'Rho' },
    { letter: 'σ', unicode: '\u03C3', name: 'Sigma' },
    { letter: 'ς', unicode: '\u03C2', name: 'Sigma' },
    { letter: 'τ', unicode: '\u03C4', name: 'Tau' },
    { letter: 'υ', unicode: '\u03C5', name: 'Upsilon' },
    { letter: 'φ', unicode: '\u03C6', name: 'Phi' },
    { letter: 'χ', unicode: '\u03C7', name: 'Chi' },
    { letter: 'ψ', unicode: '\u03C8', name: 'Psi' },
    { letter: 'ω', unicode: '\u03C9', name: 'Omega' }
];


// Function to create keys
    function createKeys(containerId, alphabet) {
        const container = document.getElementById(containerId);
        alphabet.forEach(item => {
            const key = document.createElement('div');
            key.className = 'alphabet-key';
            
            // Create span for the letter
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.innerText = item.letter;
            
            // Create span for the name
            const nameSpan = document.createElement('span');
            nameSpan.className = 'name';
            nameSpan.innerText = item.name;
            
            // Add both elements to the key
            key.appendChild(letterSpan);
            key.appendChild(nameSpan);
            
            key.dataset.unicode = item.unicode;
            key.onclick = function (event) {
                copyToClipboard(item.unicode);
                showTooltip("Copied", event); // Show tooltip at click position
            };
            
            container.appendChild(key);
        });
    }

    // Function to copy to clipboard
    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }

    // Function to show tooltip
    function showTooltip(message, event) {
        // Remove existing tooltips first
        removeExistingTooltips();

        // Create a new tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.innerText = message;
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '1000';
        tooltip.style.fontSize = '14px';
        tooltip.style.pointerEvents = 'none'; // Tooltip shouldn't block interaction

        document.body.appendChild(tooltip);

        // Position the tooltip at the click location
        const x = event.pageX;
        const y = event.pageY;
        tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`; // Center horizontally
        tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`; // Position above the click

        // Automatically remove the tooltip after a delay
        setTimeout(() => {
            if (tooltip.parentElement) {
                document.body.removeChild(tooltip);
            }
        }, 1500); // Show tooltip for 1.5 seconds
    }

    // Function to remove existing tooltips
    function removeExistingTooltips() {
        const tooltips = document.querySelectorAll('.copy-tooltip');
        tooltips.forEach(tooltip => {
            if (tooltip.parentElement) {
                tooltip.parentElement.removeChild(tooltip);
            }
        });
    }

    // Create keys for both containers
    createKeys('uppercase-container', greekUppercase);
    createKeys('lowercase-container', greekLowercase);
});