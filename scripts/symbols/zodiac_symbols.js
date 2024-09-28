document.addEventListener("DOMContentLoaded", function () {
  // Standard Zodiac Symbols
  const standardZodiacSymbols = [
    { letter: "♈️", unicode: "\u2648", name: "Aries" },
    { letter: "♉", unicode: "\u2649", name: "Taurus" },
    { letter: "♊", unicode: "\u264A", name: "Gemini" },
    { letter: "♋", unicode: "\u264B", name: "Cancer" },
    { letter: "♌", unicode: "\u264C", name: "Leo" },
    { letter: "♍", unicode: "\u264D", name: "Virgo" },
    { letter: "♎", unicode: "\u264E", name: "Libra" },
    { letter: "♏", unicode: "\u264F", name: "Scorpio)" },
    { letter: "♐", unicode: "\u2650", name: "Sagittarius" },
    { letter: "♑", unicode: "\u2651", name: "Capricorn" },
    { letter: "♒", unicode: "\u2652", name: "Aquarius" },
    { letter: "♓", unicode: "\u2653", name: "Pisces" },
    { letter: "⛎", unicode: "\u26CE", name: "Ophiuchus" },
  ];

  // Zodiac Symbols with Variation Selector-16 (VS16) for emoji-like rendering
  const vs16ZodiacSymbols = [
    { letter: "♈︎", unicode: "♈︎", name: "Aries" },
    { letter: "♉︎", unicode: "♉︎", name: "Taurus" },
    { letter: "♊︎", unicode: "♊︎", name: "Gemini" },
    { letter: "♋︎", unicode: "♋︎", name: "Cancer" },
    { letter: "♌︎", unicode: "♌︎", name: "Leo" },
    { letter: "♍︎", unicode: "♍︎", name: "Virgo" },
    { letter: "♎︎", unicode: "♎︎", name: "Libra" },
    { letter: "♏︎", unicode: "♏︎", name: "Scorpio" },
    { letter: "♐︎", unicode: "♐︎", name: "Sagittarius" },
    { letter: "♑︎", unicode: "♑︎", name: "Capricorn" },
    { letter: "♒︎", unicode: "♒︎", name: "Aquarius" },
    { letter: "♓︎", unicode: "♓︎", name: "Pisces" },
    { letter: "⛎︎", unicode: "⛎︎", name: "Ophiuchus" },
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
  createKeys("standard-zodiac-container", standardZodiacSymbols);
  createKeys("vs16-zodiac-container", vs16ZodiacSymbols);
});
