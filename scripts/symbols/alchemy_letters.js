document.addEventListener("DOMContentLoaded", function () {
  // Array for alchemical symbols
  // Base Elements (4 Characters)
  const baseElements = [
    { letter: "🜁", unicode: "🜁", name: "Air" },
    { letter: "🜂", unicode: "🜂", name: "Fire" },
    { letter: "🜃", unicode: "🜃", name: "Water" },
    { letter: "🜄", unicode: "🜄", name: "Earth" },
  ];

  // Planetary Metals (7 Characters)
  const planetaryMetals = [
    { letter: "🜇", unicode: "🜇", name: "Gold (Sol)" }, // Using the symbol directly
    { letter: "🜈", unicode: "🜈", name: "Silver (Luna)" },
    { letter: "🜉", unicode: "🜉", name: "Iron (Mars)" },
    { letter: "🜊", unicode: "🜊", name: "Copper (Venus)" },
    { letter: "🜋", unicode: "🜋", name: "Mercury (Mercurius)" },
    { letter: "🜍", unicode: "🜍", name: "Tin (Jupiter)" },
    { letter: "🜎", unicode: "🜎", name: "Lead (Saturn)" },
  ];

  // Alchemical Substances (39 Characters)
  const alchemicalSubstances = [
    { letter: "🜍", unicode: "🜍", name: "Salt" },
    { letter: "🜏", unicode: "🜏", name: "Vitriol" },
    { letter: "🜐", unicode: "🜐", name: "Sulphur" },
    { letter: "🜑", unicode: "🜑", name: "Mercury Sublimate" },
    { letter: "🜒", unicode: "🜒", name: "Aqua Fortis" },
    { letter: "🜓", unicode: "🜓", name: "Aqua Regia" },
    { letter: "🜔", unicode: "🜔", name: "Aqua Vitae" },
    { letter: "🜕", unicode: "🜕", name: "Spirit" },
    { letter: "🜖", unicode: "🜖", name: "Tincture" },
    { letter: "🜗", unicode: "🜗", name: "Gum" },
    { letter: "🜘", unicode: "🜘", name: "Brimstone" },
    { letter: "🜙", unicode: "🜙", name: "Salammoniac" },
    { letter: "🜚", unicode: "🜚", name: "Sal" },
    { letter: "🜛", unicode: "🜛", name: "Salt" },
    { letter: "🜜", unicode: "🜜", name: "Saltpetre" },
    { letter: "🜝", unicode: "🜝", name: "Spirit" },
    { letter: "🜞", unicode: "🜞", name: "Antimony" },
    { letter: "🜟", unicode: "🜟", name: "Sulphur" },
    { letter: "🜠", unicode: "🜠", name: "Arsenic" },
    { letter: "🜡", unicode: "🜡", name: "Borax" },
    { letter: "🜢", unicode: "🜢", name: "Camphor" },
    { letter: "🜣", unicode: "🜣", name: "Iron" },
    { letter: "🜤", unicode: "🜤", name: "Copper" },
    { letter: "🜥", unicode: "🜥", name: "Lead" },
    { letter: "🜦", unicode: "🜦", name: "Fixed Sulphur" },
    { letter: "🜧", unicode: "🜧", name: "Common Salt" },
    { letter: "🜨", unicode: "🜨", name: "Red Vitriol" },
    { letter: "🜩", unicode: "🜩", name: "White Vitriol" },
    { letter: "🜪", unicode: "🜪", name: "Arsenic" },
    { letter: "🜫", unicode: "🜫", name: "Antimony" },
    { letter: "🜬", unicode: "🜬", name: "Arsenic" },
    { letter: "🜭", unicode: "🜭", name: "Borax" },
    { letter: "🜮", unicode: "🜮", name: "Camphor" },
    { letter: "🜯", unicode: "🜯", name: "Iron" },
    { letter: "🜰", unicode: "🜰", name: "Copper" },
    { letter: "🜱", unicode: "🜱", name: "Lead" },
    { letter: "🜲", unicode: "🜲", name: "Tin" },
    { letter: "🜳", unicode: "🜳", name: "Gold" },
    { letter: "🜴", unicode: "🜴", name: "Silver" },
  ];

  // Alchemical Processes (34 Characters)
  const alchemicalProcesses = [
    { letter: "🝀", unicode: "🝀", name: "Conjunction" },
    { letter: "🝁", unicode: "🝁", name: "Separation" },
    { letter: "🝂", unicode: "🝂", name: "Putrefaction" },
    { letter: "🝃", unicode: "🝃", name: "Cohobation" },
    { letter: "🝄", unicode: "🝄", name: "Solution" },
    { letter: "🝅", unicode: "🝅", name: "Fixation" },
    { letter: "🝆", unicode: "🝆", name: "Amalgamation" },
    { letter: "🝇", unicode: "🝇", name: "Sublimation" },
    { letter: "🝈", unicode: "🝈", name: "Calcination" },
    { letter: "🝉", unicode: "🝉", name: "Cementation" },
    { letter: "🝊", unicode: "🝊", name: "Distillation" },
    { letter: "🝋", unicode: "🝋", name: "Fermentation" },
    { letter: "🝌", unicode: "🝌", name: "Multiplication" },
    { letter: "🝍", unicode: "🝍", name: "Projection" },
    { letter: "🝎", unicode: "🝎", name: "Digestion" },
    { letter: "🝏", unicode: "🝏", name: "Cibation" },
    { letter: "🝐", unicode: "🝐", name: "Decoction" },
    { letter: "🝑", unicode: "🝑", name: "Circulation" },
    { letter: "🝒", unicode: "🝒", name: "Solution" },
    { letter: "🝓", unicode: "🝓", name: "Putrefaction" },
    { letter: "🝔", unicode: "🝔", name: "Distillation" },
    { letter: "🝕", unicode: "🝕", name: "Fermentation" },
    { letter: "🝖", unicode: "🝖", name: "Multiplication" },
    { letter: "🝗", unicode: "🝗", name: "Projection" },
    { letter: "🝘", unicode: "🝘", name: "Digestion" },
    { letter: "🝙", unicode: "🝙", name: "Cibation" },
    { letter: "🝚", unicode: "🝚", name: "Decoction" },
    { letter: "🝛", unicode: "🝛", name: "Circulation" },
    { letter: "🝜", unicode: "🝜", name: "Conjunction" },
    { letter: "🝝", unicode: "🝝", name: "Separation" },
    { letter: "🝞", unicode: "🝞", name: "Putrefaction" },
    { letter: "🝟", unicode: "🝟", name: "Cohobation" },
    { letter: "🝠", unicode: "🝠", name: "Solution" },
    { letter: "🝡", unicode: "🝡", name: "Fixation" },
  ];

  // Alchemical Instruments (11 Characters)
  const alchemicalInstruments = [
    { letter: "🝬", unicode: "🝬", name: "Philosopher's Stone" },
    { letter: "🝭", unicode: "🝭", name: "Philosopher's Egg" },
    { letter: "🝮", unicode: "🝮", name: "Hermetic Seal" },
    { letter: "🝯", unicode: "🝯", name: "Crucible" },
    { letter: "🝰", unicode: "🝰", name: "Alchemical Furnace" },
    { letter: "🝱", unicode: "🝱", name: "Alembic" },
    { letter: "🝲", unicode: "🝲", name: "Cucurbit" },
    { letter: "🝳", unicode: "🝳", name: "Retort" },
    //{ letter: '🝴', unicode: '🝴', name: 'Pelican' },
    //{ letter: '🝵', unicode: '🝵', name: 'Hermetic Vase' },
    //{ letter: '🝶', unicode: '🝶', name: 'Crucible' }
  ];

  // Miscellaneous Symbols (21 Characters)
  const miscellaneousSymbols = [
    { letter: "🜀", unicode: "🜀", name: "Quintessence" },
    { letter: "🜆", unicode: "🜆", name: "Borax" },
    { letter: "🜇", unicode: "🜇", name: "Sal-ammoniac" },
    { letter: "🜶", unicode: "🜶", name: "Symbol for Projection" },
    { letter: "🜷", unicode: "🜷", name: "Symbol for Tincture" },
    { letter: "🜸", unicode: "🜸", name: "Symbol for Spirit" },
    { letter: "🜹", unicode: "🜹", name: "Symbol for Sulphur" },
    { letter: "🜺", unicode: "🜺", name: "Symbol for Salt" },
    { letter: "🜻", unicode: "🜻", name: "Symbol for Mercury" },
    { letter: "🜼", unicode: "🜼", name: "Symbol for Water" },
    { letter: "🜽", unicode: "🜽", name: "Symbol for Fire" },
    { letter: "🜾", unicode: "🜾", name: "Symbol for Air" },
    { letter: "🝁", unicode: "🝁", name: "Symbol for Separation" },
    { letter: "🝂", unicode: "🝂", name: "Symbol for Putrefaction" },
    { letter: "🝃", unicode: "🝃", name: "Symbol for Cohobation" },
    { letter: "🝄", unicode: "🝄", name: "Symbol for Solution" },
    { letter: "🝅", unicode: "🝅", name: "Symbol for Fixation" },
    { letter: "🝆", unicode: "🝆", name: "Symbol for Amalgamation" },
    { letter: "🝇", unicode: "🝇", name: "Symbol for Sublimation" },
    { letter: "🝈", unicode: "🝈", name: "Symbol for Calcination" },
    { letter: "🝉", unicode: "🝉", name: "Symbol for Cementation" },
  ];

  // Function to create keys for alchemical symbols
  function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    symbols.forEach((item) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

      // Create span for the letter (symbol)
      const letterSpan = document.createElement("span");
      letterSpan.className = "letter";
      letterSpan.innerText = item.letter;

      // Create span for the name (descriptor)
      const nameSpan = document.createElement("span");
      nameSpan.className = "name";
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
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text; // Set the text content (Unicode symbol)
    document.body.appendChild(tempTextarea); // Append to the document
    tempTextarea.select(); // Select the text
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy"); // Execute copy command
    document.body.removeChild(tempTextarea); // Remove the temporary element
  }

  // Function to show tooltip
  function showTooltip(message, event) {
    // Remove existing tooltips first
    removeExistingTooltips();

    // Create a new tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "copy-tooltip";
    tooltip.innerText = message;
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "1000";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none"; // Tooltip shouldn't block interaction

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
    const tooltips = document.querySelectorAll(".copy-tooltip");
    tooltips.forEach((tooltip) => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    });
  }

  // Create keys for alchemical symbols container
  createKeys("base-elements-container", baseElements);
  createKeys("planetary-metals-container", planetaryMetals);
  createKeys("alchemical-substances-container", alchemicalSubstances);
  createKeys("alchemical-processes-container", alchemicalProcesses);
  createKeys("alchemical-instruments-container", alchemicalInstruments);
  createKeys("miscellaneous-symbols-container", miscellaneousSymbols);
});
