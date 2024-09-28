document.addEventListener("DOMContentLoaded", function () {
  const majorCurrencySymbols = [
    { letter: "€", unicode: "\u20AC", name: "Euro" },
    { letter: "$", unicode: "\u0024", name: "US Dollar" },
    { letter: "£", unicode: "\u00A3", name: "British Pound" },
    { letter: "¥", unicode: "\u00A5", name: "Japanese Yen" },
    { letter: "₹", unicode: "\u20B9", name: "Indian Rupee" },
    { letter: "₩", unicode: "\u20A9", name: "South Korean Won" },
    { letter: "₽", unicode: "\u20BD", name: "Russian Ruble" },
    { letter: "₺", unicode: "\u20BA", name: "Turkish Lira" },
    { letter: "₣", unicode: "\u20A3", name: "French Franc" },
    { letter: "₦", unicode: "\u20A6", name: "Nigerian Naira" },
    { letter: "₫", unicode: "\u20AB", name: "Vietnamese Dong" },
    { letter: "₪", unicode: "\u20AA", name: "Israeli Shekel" },
    { letter: "₱", unicode: "\u20B1", name: "Philippine Peso" },
    { letter: "₴", unicode: "\u20B4", name: "Ukrainian Hryvnia" },
    { letter: "₭", unicode: "\u20AD", name: "Lao Kip" },
  ];

  const historicalCurrencySymbols = [
    {
      letter: "₠",
      unicode: "\u20A0",
      name: "European Currency Unit (ECU)",
      id: "ecu",
    },
    { letter: "₧", unicode: "\u20A7", name: "Spanish Peseta" },
    { letter: "₯", unicode: "\u20AF", name: "Greek Drachma" },
    { letter: "₤", unicode: "\u20A4", name: "Italian Lira" },
    { letter: "₨", unicode: "\u20A8", name: "Rupee (Generic)" },
    { letter: "₩", unicode: "\u20A9", name: "Old Korean Won" },
    {
      letter: "₢",
      unicode: "\u20A2",
      name: "Brazilian Cruzeiro",
      id: "brazilian-cruzeiro",
    },
    { letter: "ℳ", unicode: "\u2133", name: "German Mark", id: "german-mark" },
    { letter: "₳", unicode: "\u20B3", name: "Argentinian Austral" },
    { letter: "₯", unicode: "\u20AF", name: "Greek Drachma" },
    { letter: "₭", unicode: "\u20AD", name: "Old Lao Kip" },
  ];


  const cryptoCurrencySymbols = [
    { letter: "₿", unicode: "\u20BF", name: "Bitcoin" },
    { letter: "Ξ", unicode: "\u039E", name: "Ethereum" },
    { letter: "Ł", unicode: "\u0141", name: "Litecoin" },
    { letter: "Ð", unicode: "\u0110", name: "Dogecoin" },
    { letter: "◈", unicode: "\u25C8", name: "Diamond" },
    { letter: "⩫", unicode: "\u2A6B", name: "Double-Strike Dollar (Ripple)" },
    { letter: "⧫", unicode: "\u29EB", name: "Black Diamond" },
    {
      letter: "ↄ",
      unicode: "\u2184",
      name: "Bitcoin Cash",
      id: "bitcoin-cash",
    },
    { letter: "Ⓑ", unicode: "\u24B7", name: "Bytecoin", id: "bytecoin" },
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
  createKeys("major-currency-container", majorCurrencySymbols);
  createKeys("historical-currency-container", historicalCurrencySymbols);
  createKeys("crypto-currency-container", cryptoCurrencySymbols);
});
