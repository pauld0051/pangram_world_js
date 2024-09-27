document.addEventListener("DOMContentLoaded", function () {
    // Common Gases (with subscripts)
    const commonGases = [
    { letter: 'CO₂', unicode: 'CO\u2082', name: 'Carbon Dioxide' },
    { letter: 'O₂', unicode: 'O\u2082', name: 'Oxygen' },
    { letter: 'H₂O', unicode: 'H\u2082O', name: 'Water Vapor' },
    { letter: 'N₂', unicode: 'N\u2082', name: 'Nitrogen' },
    { letter: 'H₂', unicode: 'H\u2082', name: 'Hydrogen' },
    { letter: 'CH₄', unicode: 'CH\u2084', name: 'Methane' },
    { letter: 'SO₂', unicode: 'SO\u2082', name: 'Sulfur Dioxide' },
    { letter: 'NH₃', unicode: 'NH\u2083', name: 'Ammonia' },
    { letter: 'F₂', unicode: 'F\u2082', name: 'Fluorine' },
    { letter: 'Cl₂', unicode: 'Cl\u2082', name: 'Chlorine' },
    { letter: 'Br₂', unicode: 'Br\u2082', name: 'Bromine' },
    { letter: 'I₂', unicode: 'I\u2082', name: 'Iodine' },
    { letter: 'CH₄', unicode: 'CH\u2084', name: 'Methane' },
    { letter: 'NO', unicode: 'NO', name: 'Nitric Oxide' },
    { letter: 'NO₂', unicode: 'NO\u2082', name: 'Nitrogen Dioxide' },
    { letter: 'N₂O', unicode: 'N\u2082O', name: 'Dinitrogen Monoxide (Nitrous Oxide)' },
    { letter: 'N₂O₃', unicode: 'N\u2082O\u2083', name: 'Dinitrogen Trioxide' },
    { letter: 'N₂O₄', unicode: 'N\u2082O\u2084', name: 'Dinitrogen Tetraoxide' },
    { letter: 'N₂O₅', unicode: 'N\u2082O\u2085', name: 'Dinitrogen Pentoxide' },
    { letter: 'O₃', unicode: 'O\u2083', name: 'Ozone' },
    { letter: 'CHF₃', unicode: 'CHF\u2083', name: 'Trifluoromethane (HFC)' },
    { letter: 'C₂F₆', unicode: 'C\u2082F\u2086', name: 'Hexafluoroethane (PFC)' },
    { letter: 'SF₆', unicode: 'SF\u2086', name: 'Sulfur Hexafluoride' },
];

    // Common Cations (with superscripts for charge)
const commonCations = [
    { letter: 'Al³⁺', unicode: 'Al\u00B3\u207A', name: 'Aluminum' },
    { letter: 'NH₄⁺', unicode: 'NH\u2084\u207A', name: 'Ammonium' },
    { letter: 'Ba²⁺', unicode: 'Ba\u00B2\u207A', name: 'Barium' },
    { letter: 'Ca²⁺', unicode: 'Ca\u00B2\u207A', name: 'Calcium' },
    { letter: 'Cr²⁺', unicode: 'Cr\u00B2\u207A', name: 'Chromium(II)' },
    { letter: 'Cr³⁺', unicode: 'Cr\u00B3\u207A', name: 'Chromium(III)' },
    { letter: 'Cu⁺', unicode: 'Cu\u207A', name: 'Copper(I)' },
    { letter: 'Cu²⁺', unicode: 'Cu\u00B2\u207A', name: 'Copper(II)' },
    { letter: 'Fe²⁺', unicode: 'Fe\u00B2\u207A', name: 'Iron(II)' },
    { letter: 'Fe³⁺', unicode: 'Fe\u00B3\u207A', name: 'Iron(III)' },
    { letter: 'H⁺', unicode: 'H\u207A', name: 'Hydrogen' },
    { letter: 'H₃O⁺', unicode: 'H\u2083O\u207A', name: 'Hydronium' },
    { letter: 'Pb²⁺', unicode: 'Pb\u00B2\u207A', name: 'Lead(II)' },
    { letter: 'Li⁺', unicode: 'Li\u207A', name: 'Lithium' },
    { letter: 'Mg²⁺', unicode: 'Mg\u00B2\u207A', name: 'Magnesium' },
    { letter: 'Mn²⁺', unicode: 'Mn\u00B2\u207A', name: 'Manganese(II)' },
    { letter: 'Mn³⁺', unicode: 'Mn\u00B3\u207A', name: 'Manganese(III)' },
    { letter: 'Hg₂²⁺', unicode: 'Hg\u2082\u00B2\u207A', name: 'Mercury(I)' },
    { letter: 'Hg²⁺', unicode: 'Hg\u00B2\u207A', name: 'Mercury(II)' },
    { letter: 'NO₂⁺', unicode: 'NO\u2082\u207A', name: 'Nitronium' },
    { letter: 'K⁺', unicode: 'K\u207A', name: 'Potassium' },
    { letter: 'Ag⁺', unicode: 'Ag\u207A', name: 'Silver' },
    { letter: 'Na⁺', unicode: 'Na\u207A', name: 'Sodium' },
    { letter: 'Sr²⁺', unicode: 'Sr\u00B2\u207A', name: 'Strontium' },
    { letter: 'Sn²⁺', unicode: 'Sn\u00B2\u207A', name: 'Tin(II)' },
    { letter: 'Sn⁴⁺', unicode: 'Sn\u2074\u207A', name: 'Tin(IV)' },
    { letter: 'Zn²⁺', unicode: 'Zn\u00B2\u207A', name: 'Zinc' }
];

    // Common Anions (with superscripts for charge)
const commonAnions = [
    { letter: 'H⁻', unicode: 'H\u207B', name: 'Hydride' },
    { letter: 'O²⁻', unicode: 'O\u00B2\u207B', name: 'Oxide' },
    { letter: 'F⁻', unicode: 'F\u207B', name: 'Fluoride' },
    { letter: 'S²⁻', unicode: 'S\u00B2\u207B', name: 'Sulfide' },
    { letter: 'Cl⁻', unicode: 'Cl\u207B', name: 'Chloride' },
    { letter: 'N³⁻', unicode: 'N\u00B3\u207B', name: 'Nitride' },
    { letter: 'Br⁻', unicode: 'Br\u207B', name: 'Bromide' },
    { letter: 'I⁻', unicode: 'I\u207B', name: 'Iodide' },
    { letter: 'AsO₄³⁻', unicode: 'AsO\u2084\u00B3\u207B', name: 'Arsenate' },
    { letter: 'PO₄³⁻', unicode: 'PO\u2084\u00B3\u207B', name: 'Phosphate' },
    { letter: 'AsO₃³⁻', unicode: 'AsO\u2083\u00B3\u207B', name: 'Arsenite' },
    { letter: 'HPO₄²⁻', unicode: 'HPO\u2084\u00B2\u207B', name: 'Hydrogen Phosphate' },
    { letter: 'H₂PO₄⁻', unicode: 'H\u2082PO\u2084\u207B', name: 'Dihydrogen Phosphate' },
    { letter: 'SO₄²⁻', unicode: 'SO\u2084\u00B2\u207B', name: 'Sulfate' },
    { letter: 'NO₃⁻', unicode: 'NO\u2083\u207B', name: 'Nitrate' },
    { letter: 'HSO₄⁻', unicode: 'HSO\u2084\u207B', name: 'Hydrogen Sulfate' },
    { letter: 'NO₂⁻', unicode: 'NO\u2082\u207B', name: 'Nitrite' },
    { letter: 'S₂O₃²⁻', unicode: 'S\u2082O\u2083\u00B2\u207B', name: 'Thiosulfate' },
    { letter: 'SO₃²⁻', unicode: 'SO\u2083\u00B2\u207B', name: 'Sulfite' },
    { letter: 'ClO₄⁻', unicode: 'ClO\u2084\u207B', name: 'Perchlorate' },
    { letter: 'IO₃⁻', unicode: 'IO\u2083\u207B', name: 'Iodate' },
    { letter: 'ClO₃⁻', unicode: 'ClO\u2083\u207B', name: 'Chlorate' },
    { letter: 'BrO₃⁻', unicode: 'BrO\u2083\u207B', name: 'Bromate' },
    { letter: 'ClO₂⁻', unicode: 'ClO\u2082\u207B', name: 'Chlorite' },
    { letter: 'OCl⁻', unicode: 'OCl\u207B', name: 'Hypochlorite' },
    { letter: 'OBr⁻', unicode: 'OBr\u207B', name: 'Hypobromite' },
    { letter: 'CO₃²⁻', unicode: 'CO\u2083\u00B2\u207B', name: 'Carbonate' },
    { letter: 'CrO₄²⁻', unicode: 'CrO\u2084\u00B2\u207B', name: 'Chromate' },
    { letter: 'HCO₃⁻', unicode: 'HCO\u2083\u207B', name: 'Hydrogen Carbonate' },
    { letter: 'Cr₂O₇²⁻', unicode: 'Cr\u2082O\u2087\u00B2\u207B', name: 'Dichromate' },
    { letter: 'CH₃COO⁻', unicode: 'CH\u2083COO\u207B', name: 'Acetate', id: 'acetate-key' },
    { letter: 'HCOO⁻', unicode: 'HCOO\u207B', name: 'Formate' },
    { letter: 'CN⁻', unicode: 'CN\u207B', name: 'Cyanide' },
    { letter: 'NH₂⁻', unicode: 'NH\u2082\u207B', name: 'Amide' },
    { letter: 'OCN⁻', unicode: 'OCN\u207B', name: 'Cyanate' },
    { letter: 'O₂²⁻', unicode: 'O\u2082\u00B2\u207B', name: 'Peroxide' },
    { letter: 'SCN⁻', unicode: 'SCN\u207B', name: 'Thiocyanate' },
    { letter: 'C₂O₄²⁻', unicode: 'C\u2082O\u2084\u00B2\u207B', name: 'Oxalate' },
    { letter: 'OH⁻', unicode: 'OH\u207B', name: 'Hydroxide' },
    { letter: 'MnO₄⁻', unicode: 'MnO\u2084\u207B', name: 'Permanganate' }
];


    // Reaction Symbols
    const reactionSymbols = [
        { letter: '→', unicode: '→', name: 'Reaction Arrow' },
        { letter: '⇌', unicode: '⇌', name: 'Equilibrium' },
        { letter: 'Δ', unicode: 'Δ', name: 'Heat' },
        { letter: '⇋', unicode: '⇋', name: 'Reverse Reaction' },
        { letter: '↑', unicode: '↑', name: 'Gas Evolution' },
        { letter: '↓', unicode: '↓', name: 'Precipitate' }
    ];

 const commonConstants = [
    { letter: 'R = 8.314 J·mol⁻¹·K⁻¹', unicode: 'R = 8.314 J·mol\u207B\u00B9·K\u207B\u00B9', name: 'Universal Gas Constant' },
    { letter: 'c = 3.00×10⁸ m·s⁻¹', unicode: 'c = 3.00\u00D710\u2078 m·s\u207B\u00B9', name: 'Speed of Light' },
    { letter: 'Nₐ = 6.022×10²³ mol⁻¹', unicode: 'Nₐ = 6.022\u00D710\u00B2\u00B3 mol\u207B\u00B9', name: 'Avogadro’s Number' },
    { letter: 'h = 6.626×10⁻³⁴ J·s', unicode: 'h = 6.626\u00D710\u207B\u00B3\u2074 J·s', name: 'Planck’s Constant' },
    { letter: 'G = 6.674×10⁻¹¹ m³·kg⁻¹·s⁻²', unicode: 'G = 6.674\u00D710\u207B\u00B9\u00B9 m\u00B3·kg\u207B\u00B9·s\u207B\u00B2', name: 'Gravitational Constant' },
    { letter: 'e = 1.602177 × 10⁻¹⁹ C', unicode: 'e = 1.602177 \u00D7 10\u207B\u00B9\u2079 C', name: 'Elementary Charge' },
    { letter: 'mₑ = 9.109384 × 10⁻³¹ kg', unicode: 'mₑ = 9.109384 \u00D7 10\u207B\u00B3\u00B9 kg', name: 'Electron Rest Mass' },
    { letter: 'mₚ = 1.672622 × 10⁻²⁷ kg', unicode: 'mₚ = 1.672622 \u00D7 10\u207B\u00B2\u2077 kg', name: 'Proton Rest Mass' },
    { letter: 'mₙ = 1.674927 × 10⁻²⁷ kg', unicode: 'mₙ = 1.674927 \u00D7 10\u207B\u00B2\u2077 kg', name: 'Neutron Rest Mass' },
    { letter: 'Vₘ = 2.27 × 10⁻² m³·mol⁻¹', unicode: 'Vₘ = 2.27 \u00D7 10\u207B\u00B2 m\u00B3·mol\u207B\u00B9', name: 'Molar Volume of an Ideal Gas at STP' },
    { letter: 'cₙ = 4.18 kJ·kg⁻¹·K⁻¹', unicode: 'cₙ = 4.18 kJ·kg\u207B\u00B9·K\u207B\u00B9', name: 'Specific Heat Capacity of Water' },
    { letter: 'Kₓ = 1.00 × 10⁻¹⁴ mol²·dm⁻⁶', unicode: 'Kₓ = 1.00 \u00D7 10\u207B\u00B9\u2074 mol\u00B2·dm\u207B\u2076', name: 'Ionic Product Constant for Water at 298.15 K' },
    { letter: 'F = 9.65 × 10⁴ C·mol⁻¹', unicode: 'F = 9.65 \u00D7 10\u2074 C·mol\u207B\u00B9', name: 'Faraday Constant' }
];

    // Clear and create the constants container
    const constantsContainer = document.getElementById('common-constants-container');
    constantsContainer.innerHTML = ''; // Ensure no old keys are present

    // Add new constant keys with unique styling
    commonConstants.forEach(constant => {
        const keyDiv = document.createElement('div');
        keyDiv.classList.add('constant-key', 'special-constant-key'); // Add any specific classes to style differently
        keyDiv.innerHTML = `
            <div>${constant.unicode}</div>
            <div>${constant.name}</div>
        `;
        keyDiv.dataset.unicode = constant.unicode;

        keyDiv.onclick = function (event) {
            copyToClipboard(constant.unicode); // Copy to clipboard
            showTooltip("Copied", event); // Show tooltip
        };

        constantsContainer.appendChild(keyDiv);
    });

 // Clear the container before adding new keys
const container = document.getElementById('common-constants-container');
container.innerHTML = ''; // Clear old keys

// Add new keys
commonConstants.forEach(constant => {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('constant-key');
    keyDiv.innerHTML = `
        <div>${constant.unicode}</div>
        <div>${constant.name}</div>
    `;
    keyDiv.dataset.unicode = constant.unicode;

    keyDiv.onclick = function (event) {
        copyToClipboard(constant.unicode); // Copy to clipboard
        showTooltip("Copied", event); // Show tooltip
    };

    container.appendChild(keyDiv);
});

   // Function to create keys for chemistry symbols
function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    symbols.forEach(item => {
        const key = document.createElement('div');
        key.className = 'alphabet-key';
        
        // Add the unique id if provided (for Acetate key)
        if (item.id) {
            key.id = item.id;
        }

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

    function copyToClipboard(text) {
    // Create a temporary textarea element
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = text; // Set the text content (Unicode symbol)
    document.body.appendChild(tempTextarea); // Append to the document
    tempTextarea.select(); // Select the text
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy'); // Execute copy command
    document.body.removeChild(tempTextarea); // Remove the temporary element
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

    // Create keys for chemistry symbols container
    createKeys('common-gases-container', commonGases);
    createKeys('common-cations-container', commonCations);
    createKeys('common-anions-container', commonAnions);
    createKeys('reaction-symbols-container', reactionSymbols);
});
