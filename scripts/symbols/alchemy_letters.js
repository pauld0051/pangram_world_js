document.addEventListener("DOMContentLoaded", function () {
    // Array for alchemical symbols
   // Base Elements (4 Characters)
const baseElements = [
    { letter: '🜁', unicode: '\u1F701', name: 'Air' },
    { letter: '🜂', unicode: '\u1F702', name: 'Fire' },
    { letter: '🜃', unicode: '\u1F703', name: 'Water' },
    { letter: '🜄', unicode: '\u1F704', name: 'Earth' }
];

// Planetary Metals (7 Characters)
const planetaryMetals = [
    { letter: '🜇', unicode: '\u1F707', name: 'Gold (Sol)' },
    { letter: '🜈', unicode: '\u1F708', name: 'Silver (Luna)' },
    { letter: '🜉', unicode: '\u1F709', name: 'Iron (Mars)' },
    { letter: '🜊', unicode: '\u1F70A', name: 'Copper (Venus)' },
    { letter: '🜋', unicode: '\u1F70B', name: 'Mercury (Mercurius)' },
    { letter: '🜍', unicode: '\u1F70D', name: 'Tin (Jupiter)' },
    { letter: '🜎', unicode: '\u1F70E', name: 'Lead (Saturn)' }
];

// Alchemical Substances (39 Characters)
const alchemicalSubstances = [
    { letter: '🜍', unicode: '\u1F70D', name: 'Salt' },
    { letter: '🜏', unicode: '\u1F70F', name: 'Vitriol' },
    { letter: '🜐', unicode: '\u1F710', name: 'Sulphur' },
    { letter: '🜑', unicode: '\u1F711', name: 'Mercury Sublimate' },
    { letter: '🜒', unicode: '\u1F712', name: 'Aqua Fortis' },
    { letter: '🜓', unicode: '\u1F713', name: 'Aqua Regia' },
    { letter: '🜔', unicode: '\u1F714', name: 'Aqua Vitae' },
    { letter: '🜕', unicode: '\u1F715', name: 'Spirit' },
    { letter: '🜖', unicode: '\u1F716', name: 'Tincture' },
    { letter: '🜗', unicode: '\u1F717', name: 'Gum' },
    { letter: '🜘', unicode: '\u1F718', name: 'Brimstone' },
    { letter: '🜙', unicode: '\u1F719', name: 'Salammoniac' },
    { letter: '🜚', unicode: '\u1F71A', name: 'Sal' },
    { letter: '🜛', unicode: '\u1F71B', name: 'Salt' },
    { letter: '🜜', unicode: '\u1F71C', name: 'Saltpetre' },
    { letter: '🜝', unicode: '\u1F71D', name: 'Spirit' },
    { letter: '🜞', unicode: '\u1F71E', name: 'Antimony' },
    { letter: '🜟', unicode: '\u1F71F', name: 'Sulphur' },
    { letter: '🜠', unicode: '\u1F720', name: 'Arsenic' },
    { letter: '🜡', unicode: '\u1F721', name: 'Borax' },
    { letter: '🜢', unicode: '\u1F722', name: 'Camphor' },
    { letter: '🜣', unicode: '\u1F723', name: 'Iron' },
    { letter: '🜤', unicode: '\u1F724', name: 'Copper' },
    { letter: '🜥', unicode: '\u1F725', name: 'Lead' },
    { letter: '🜦', unicode: '\u1F726', name: 'Fixed Sulphur' },
    { letter: '🜧', unicode: '\u1F727', name: 'Common Salt' },
    { letter: '🜨', unicode: '\u1F728', name: 'Red Vitriol' },
    { letter: '🜩', unicode: '\u1F729', name: 'White Vitriol' },
    { letter: '🜪', unicode: '\u1F72A', name: 'Arsenic' },
    { letter: '🜫', unicode: '\u1F72B', name: 'Antimony' },
    { letter: '🜬', unicode: '\u1F72C', name: 'Arsenic' },
    { letter: '🜭', unicode: '\u1F72D', name: 'Borax' },
    { letter: '🜮', unicode: '\u1F72E', name: 'Camphor' },
    { letter: '🜯', unicode: '\u1F72F', name: 'Iron' },
    { letter: '🜰', unicode: '\u1F730', name: 'Copper' },
    { letter: '🜱', unicode: '\u1F731', name: 'Lead' },
    { letter: '🜲', unicode: '\u1F732', name: 'Tin' },
    { letter: '🜳', unicode: '\u1F733', name: 'Gold' },
    { letter: '🜴', unicode: '\u1F734', name: 'Silver' }
];

// Alchemical Processes (34 Characters)
const alchemicalProcesses = [
    { letter: '🝀', unicode: '\u1F740', name: 'Conjunction' },
    { letter: '🝁', unicode: '\u1F741', name: 'Separation' },
    { letter: '🝂', unicode: '\u1F742', name: 'Putrefaction' },
    { letter: '🝃', unicode: '\u1F743', name: 'Cohobation' },
    { letter: '🝄', unicode: '\u1F744', name: 'Solution' },
    { letter: '🝅', unicode: '\u1F745', name: 'Fixation' },
    { letter: '🝆', unicode: '\u1F746', name: 'Amalgamation' },
    { letter: '🝇', unicode: '\u1F747', name: 'Sublimation' },
    { letter: '🝈', unicode: '\u1F748', name: 'Calcination' },
    { letter: '🝉', unicode: '\u1F749', name: 'Cementation' },
    { letter: '🝊', unicode: '\u1F74A', name: 'Distillation' },
    { letter: '🝋', unicode: '\u1F74B', name: 'Fermentation' },
    { letter: '🝌', unicode: '\u1F74C', name: 'Multiplication' },
    { letter: '🝍', unicode: '\u1F74D', name: 'Projection' },
    { letter: '🝎', unicode: '\u1F74E', name: 'Digestion' },
    { letter: '🝏', unicode: '\u1F74F', name: 'Cibation' },
    { letter: '🝐', unicode: '\u1F750', name: 'Decoction' },
    { letter: '🝑', unicode: '\u1F751', name: 'Circulation' },
    { letter: '🝒', unicode: '\u1F752', name: 'Solution' },
    { letter: '🝓', unicode: '\u1F753', name: 'Putrefaction' },
    { letter: '🝔', unicode: '\u1F754', name: 'Distillation' },
    { letter: '🝕', unicode: '\u1F755', name: 'Fermentation' },
    { letter: '🝖', unicode: '\u1F756', name: 'Multiplication' },
    { letter: '🝗', unicode: '\u1F757', name: 'Projection' },
    { letter: '🝘', unicode: '\u1F758', name: 'Digestion' },
    { letter: '🝙', unicode: '\u1F759', name: 'Cibation' },
    { letter: '🝚', unicode: '\u1F75A', name: 'Decoction' },
    { letter: '🝛', unicode: '\u1F75B', name: 'Circulation' },
    { letter: '🝜', unicode: '\u1F75C', name: 'Conjunction' },
    { letter: '🝝', unicode: '\u1F75D', name: 'Separation' },
    { letter: '🝞', unicode: '\u1F75E', name: 'Putrefaction' },
    { letter: '🝟', unicode: '\u1F75F', name: 'Cohobation' },
    { letter: '🝠', unicode: '\u1F760', name: 'Solution' },
    { letter: '🝡', unicode: '\u1F761', name: 'Fixation' }
];

// Alchemical Instruments (11 Characters)
const alchemicalInstruments = [
    { letter: '🝬', unicode: '\u1F76C', name: 'Philosopher\'s Stone' },
    { letter: '🝭', unicode: '\u1F76D', name: 'Philosopher\'s Egg' },
    { letter: '🝮', unicode: '\u1F76E', name: 'Hermetic Seal' },
    { letter: '🝯', unicode: '\u1F76F', name: 'Crucible' },
    { letter: '🝰', unicode: '\u1F770', name: 'Alchemical Furnace' },
    { letter: '🝱', unicode: '\u1F771', name: 'Alembic' },
    { letter: '🝲', unicode: '\u1F772', name: 'Cucurbit' },
    { letter: '🝳', unicode: '\u1F773', name: 'Retort' },
    { letter: '🝴', unicode: '\u1F774', name: 'Pelican' },
    { letter: '🝵', unicode: '\u1F775', name: 'Hermetic Vase' },
    { letter: '🝶', unicode: '\u1F776', name: 'Crucible' }
];

// Miscellaneous Symbols (21 Characters)
const miscellaneousSymbols = [
    { letter: '🜀', unicode: '\u1F700', name: 'Quintessence' },
    { letter: '🜆', unicode: '\u1F705', name: 'Borax' },
    { letter: '🜇', unicode: '\u1F706', name: 'Sal-ammoniac' },
    { letter: '🜶', unicode: '\u1F776', name: 'Symbol for Projection' },
    { letter: '🜷', unicode: '\u1F777', name: 'Symbol for Tincture' },
    { letter: '🜸', unicode: '\u1F778', name: 'Symbol for Spirit' },
    { letter: '🜹', unicode: '\u1F779', name: 'Symbol for Sulphur' },
    { letter: '🜺', unicode: '\u1F77A', name: 'Symbol for Salt' },
    { letter: '🜻', unicode: '\u1F77B', name: 'Symbol for Mercury' },
    { letter: '🜼', unicode: '\u1F77C', name: 'Symbol for Water' },
    { letter: '🜽', unicode: '\u1F77D', name: 'Symbol for Fire' },
    { letter: '🜾', unicode: '\u1F77E', name: 'Symbol for Air' },
    { letter: '🝁', unicode: '\u1F741', name: 'Symbol for Separation' },
    { letter: '🝂', unicode: '\u1F742', name: 'Symbol for Putrefaction' },
    { letter: '🝃', unicode: '\u1F743', name: 'Symbol for Cohobation' },
    { letter: '🝄', unicode: '\u1F744', name: 'Symbol for Solution' },
    { letter: '🝅', unicode: '\u1F745', name: 'Symbol for Fixation' },
    { letter: '🝆', unicode: '\u1F746', name: 'Symbol for Amalgamation' },
    { letter: '🝇', unicode: '\u1F747', name: 'Symbol for Sublimation' },
    { letter: '🝈', unicode: '\u1F748', name: 'Symbol for Calcination' },
    { letter: '🝉', unicode: '\u1F749', name: 'Symbol for Cementation' }
];

    // Function to create keys for alchemical symbols
    function createKeys(containerId, symbols) {
        const container = document.getElementById(containerId);
        symbols.forEach(item => {
            const key = document.createElement('div');
            key.className = 'alphabet-key';
            
            // Create span for the letter (symbol)
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.innerText = item.letter;
            
            // Create span for the name (descriptor)
            const nameSpan = document.createElement('span');
            nameSpan.className = 'name';
            nameSpan.innerText = item.name;
            
            // Add both elements to the key
            key.appendChild(letterSpan);
            key.appendChild(nameSpan);
            
            // Set the data-unicode attribute for copying
            key.dataset.unicode = item.unicode;
            
            // Add click event to copy to clipboard and show tooltip
            key.onclick = function (event) {
                copyToClipboard(item.unicode);
                showTooltip("Copied", event); // Show tooltip at click position
            };
            
            // Append the key to the container
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

    // Create keys for alchemical symbols container
    createKeys('base-elements-container', baseElements);
    createKeys('planetary-metals-container', planetaryMetals);
    createKeys('alchemical-substances-container', alchemicalSubstances);
    createKeys('alchemical-processes-container', alchemicalProcesses);
    createKeys('alchemical-instruments-container', alchemicalInstruments);
    createKeys('miscellaneous-symbols-container', miscellaneousSymbols);
});
