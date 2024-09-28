document.addEventListener("DOMContentLoaded", function () {
  const genderIdentitySymbols = [
    { letter: "♂", unicode: "\u2642", name: "Male" },
    { letter: "♀", unicode: "\u2640", name: "Female" },
    { letter: "⚧", unicode: "\u26A7", name: "Transgender" },
    { letter: "⚪", unicode: "\u26AA", name: "Agender" },
    { letter: "⚤", unicode: "\u26A4", name: "Bigender" },
    { letter: "⚥", unicode: "\u26A5", name: "Intersex" },
    { letter: "⚨", unicode: "\u26A8", name: "Non-Binary", id: "non-binary" },
    { letter: "⚩", unicode: "\u26A9", name: "Androgynous", id: "androgynous" },
  ];

  const sexualOrientationSymbols = [
    { letter: "⚣", unicode: "\u26A3", name: "Gay" },
    { letter: "⚢", unicode: "\u26A2", name: "Lesbian" },
    {
      letter: "⚤",
      unicode: "\u26A4",
      name: "Heterosexual",
      id: "heterosexual",
    },
  ];

  const restroomSymbols = [
    { letter: "🚻", unicode: "\u1F6BB", name: "Restroom" },
    {
      letter: "🚹",
      unicode: "\u1F6B9",
      name: "Male Restroom",
      id: "male-restroom",
    },
    {
      letter: "🚺",
      unicode: "\u1F6BA",
      name: "Female Restroom",
      id: "female-restroom",
    },
    {
      letter: "🚼",
      unicode: "\u1F6BC",
      name: "Unisex Restroom",
      id: "unisex-restroom",
    },
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

  // Create keys for both sets of Zodiac symbols
  createKeys("gender-identity-container", genderIdentitySymbols);
  createKeys("sexual-orientation-container", sexualOrientationSymbols);
  createKeys("restroom-symbols-container", restroomSymbols);
});
