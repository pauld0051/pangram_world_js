document.addEventListener("DOMContentLoaded", function () {
  // Classical Planets
  const classicalPlanets = [
    { letter: "☉", unicode: "\u2609", name: "Sun" },
    { letter: "☾", unicode: "\u263E", name: "Moon" },
    { letter: "☿", unicode: "\u263F", name: "Mercury" },
    { letter: "♀", unicode: "\u2640", name: "Venus" },
    { letter: "♁", unicode: "\u2641", name: "Earth" },
    { letter: "♂", unicode: "\u2642", name: "Mars" },
    { letter: "♃", unicode: "\u2643", name: "Jupiter" },
    { letter: "♄", unicode: "\u2644", name: "Saturn" },
    { letter: "♅", unicode: "\u2645", name: "Uranus" },
    { letter: "♆", unicode: "\u2646", name: "Neptune" },
    { letter: "♇", unicode: "\u2647", name: "Pluto" }, // Optional modern addition
  ];

  // Dwarf Planets and Asteroids
  const dwarfPlanetsAsteroids = [
    { letter: "⚳", unicode: "\u26B3", name: "Ceres" },
    { letter: "⚴", unicode: "\u26B4", name: "Pallas" },
    { letter: "⚵", unicode: "\u26B5", name: "Juno" },
    { letter: "⚶", unicode: "\u26B6", name: "Vesta" },
    { letter: "⚷", unicode: "\u26B7", name: "Chiron" },
    { letter: "⚸", unicode: "\u26B8", name: "Lilith" },
  ];

  // Astronomical Phenomena
  const astronomicalPhenomena = [
    { letter: "☄", unicode: "\u2604", name: "Comet", id: "comet" },
    { letter: "☾", unicode: "\u263D", name: "First Quarter Moon", id: "first-quarter-moon" },
    { letter: "☽", unicode: "\u263D", name: "Last Quarter Moon", id: "last-quarter-moon" },
    { letter: "○", unicode: "\u25CB", name: "New Moon", id: "new-moon" },
    { letter: "●", unicode: "\u25CF", name: "Full Moon", id: "full-moon" },
    { letter: "⚪", unicode: "\u26AA", name: "Medium White Circle", id: "med-white-circle" },
    { letter: "⚫", unicode: "\u26AB", name: "Medium Black Circle", id: "med-black-circle" },
  ];

   function createKeys(containerId, symbols) {
     const container = document.getElementById(containerId);
     symbols.forEach((item) => {
       const key = document.createElement("div");
       key.className = "alphabet-key";

       // Add the unique id if provided (for Acetate key)
       if (item.id) {
         key.id = item.id;
       }

       const letterSpan = document.createElement("span");
       letterSpan.className = "letter";
       letterSpan.innerText = item.letter;

       const nameSpan = document.createElement("span");
       nameSpan.className = "name";
       nameSpan.innerText = item.name;

       key.appendChild(letterSpan);
       key.appendChild(nameSpan);

       key.dataset.unicode = item.unicode;

       key.onclick = function (event) {
         copyToClipboard(item.unicode);
         showTooltip("Copied", event);
       };

       container.appendChild(key);
     });
   }

  // Function to copy to clipboard
  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  // Function to show tooltip
  function showTooltip(message, event) {
    removeExistingTooltips();

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
    tooltip.style.pointerEvents = "none";

    document.body.appendChild(tooltip);

    const x = event.pageX;
    const y = event.pageY;
    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`; // Center horizontally
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`; // Position above the click

    setTimeout(() => {
      if (tooltip.parentElement) {
        document.body.removeChild(tooltip);
      }
    }, 1500);
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

  // Create keys for all categories
  createKeys("classical-planets-container", classicalPlanets);
  createKeys("dwarf-planets-asteroids-container", dwarfPlanetsAsteroids);
  createKeys("astronomical-phenomena-container", astronomicalPhenomena);
});
