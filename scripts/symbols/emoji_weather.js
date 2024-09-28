document.addEventListener("DOMContentLoaded", function () {
  const weatherEmojis = [
    { letter: "☀️", unicode: "☀️", name: "Sun", id: "sun" },
    {
      letter: "🌤️",
      unicode: "🌤️",
      name: "Sun Behind Small Cloud",
      id: "sun-small-cloud",
    },
    {
      letter: "🌥️",
      unicode: "🌥️",
      name: "Sun Behind Large Cloud",
      id: "sun-large-cloud",
    },
    {
      letter: "🌦️",
      unicode: "🌦️",
      name: "Sun Behind Rain Cloud",
      id: "sun-rain-cloud",
    },
    {
      letter: "🌞",
      unicode: "🌞",
      name: "Smiling Sun with Face",
      id: "smiling-sun",
    },
    {
      letter: "🌝",
      unicode: "🌝",
      name: "Full Moon with Face",
      id: "full-moon-face",
    },
    { letter: "☁️", unicode: "☁️", name: "Cloud", id: "cloud" },
    { letter: "🌧️", unicode: "🌧️", name: "Cloud with Rain", id: "cloud-rain" },
    {
      letter: "⛈️",
      unicode: "⛈️",
      name: "Cloud with Lightning and Rain",
      id: "cloud-lightning-rain",
    },
    {
      letter: "🌩️",
      unicode: "🌩️",
      name: "Cloud with Lightning",
      id: "cloud-lightning",
    },
    { letter: "🌫️", unicode: "🌫️", name: "Fog", id: "fog" },
    { letter: "🌪️", unicode: "🌪️", name: "Tornado", id: "tornado" },
    { letter: "❄️", unicode: "❄️", name: "Snowflake", id: "snowflake" },
    { letter: "🌨️", unicode: "🌨️", name: "Cloud with Snow", id: "cloud-snow" },
    {
      letter: "⛄",
      unicode: "⛄",
      name: "Snowman without Snow",
      id: "snowman-no-snow",
    },
    { letter: "☃️", unicode: "☃️", name: "Snowman", id: "snowman" },
    { letter: "🧊", unicode: "🧊", name: "Ice Cube", id: "ice-cube" },
    { letter: "🌈", unicode: "🌈", name: "Rainbow", id: "rainbow" },
    { letter: "⭐", unicode: "⭐", name: "Star", id: "star" },
    { letter: "🌟", unicode: "🌟", name: "Glowing Star", id: "glowing-star" },
    { letter: "💫", unicode: "💫", name: "Dizzy", id: "dizzy" },
    { letter: "🌬️", unicode: "🌬️", name: "Wind Face", id: "wind-face" },
    {
      letter: "☔",
      unicode: "☔",
      name: "Umbrella with Rain Drops",
      id: "umbrella-rain",
    },
    { letter: "🌊", unicode: "🌊", name: "Water Wave", id: "water-wave" },
    { letter: "💨", unicode: "💨", name: "Windy", id: "windy" },
    { letter: "☂️", unicode: "☂️", name: "Umbrella", id: "umbrella" },
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

  // Create keys function
  createKeys("weather-emojis-container", weatherEmojis);
});
