document.addEventListener("DOMContentLoaded", function () {
  const basicArrows = [
    { letter: "→", unicode: "\u2192", name: "Right Arrow" },
    { letter: "←", unicode: "\u2190", name: "Left Arrow" },
    { letter: "↑", unicode: "\u2191", name: "Up Arrow" },
    { letter: "↓", unicode: "\u2193", name: "Down Arrow" },
    {
      letter: "↔",
      unicode: "\u2194",
      name: "Left-Right Arrow",
      id: "left-right-arrow",
    },
    {
      letter: "↕",
      unicode: "\u2195",
      name: "Up-Down Arrow",
      id: "up-down-arrow",
    },
    {
      letter: "↖",
      unicode: "\u2196",
      name: "North-West Arrow",
      id: "north-west-arrow",
    },
    {
      letter: "↗",
      unicode: "\u2197",
      name: "North-East Arrow",
      id: "north-east-arrow",
    },
    {
      letter: "↘",
      unicode: "\u2198",
      name: "South-East Arrow",
      id: "south-east-arrow",
    },
    {
      letter: "↙",
      unicode: "\u2199",
      name: "South-West Arrow",
      id: "south-west-arrow",
    },
    {
      letter: "↚",
      unicode: "\u219A",
      name: "Left Arrow with Stroke",
      id: "left-arrow-with-stroke",
    },
    {
      letter: "↛",
      unicode: "\u219B",
      name: "Right Arrow with Stroke",
      id: "right-arrow-with-stroke",
    },
    {
      letter: "↮",
      unicode: "\u21AE",
      name: "Left-Right Arrow with Stroke",
      id: "left-right-arrow-with-stroke",
    },
    {
      letter: "↦",
      unicode: "\u21A6",
      name: "Rightwards Arrow from Bar",
      id: "rightwards-arrow-from-bar",
    },
    {
      letter: "↟",
      unicode: "\u219F",
      name: "Upwards Two Headed Arrow",
      id: "upwards-two-headed-arrow",
    },
    {
      letter: "↡",
      unicode: "\u21A1",
      name: "Downwards Two Headed Arrow",
      id: "downwards-two-headed-arrow",
    },
  ];

  const doubleArrows = [
    {
      letter: "⇐",
      unicode: "\u21D0",
      name: "Left Double Arrow",
      id: "left-double-arrow",
    },
    {
      letter: "⇒",
      unicode: "\u21D2",
      name: "Right Double Arrow",
      id: "right-double-arrow",
    },
    {
      letter: "⇑",
      unicode: "\u21D1",
      name: "Up Double Arrow",
      id: "up-double-arrow",
    },
    {
      letter: "⇓",
      unicode: "\u21D3",
      name: "Down Double Arrow",
      id: "down-double-arrow",
    },
    {
      letter: "⇔",
      unicode: "\u21D4",
      name: "Left-Right Double Arrow",
      id: "left-right-double-arrow",
    },
    {
      letter: "⇕",
      unicode: "\u21D5",
      name: "Up-Down Double Arrow",
      id: "up-down-double-arrow",
    },
    {
      letter: "⇤",
      unicode: "\u21E4",
      name: "Leftwards Arrow to Bar",
      id: "leftwards-arrow-to-bar",
    },
    {
      letter: "⇥",
      unicode: "\u21E5",
      name: "Rightwards Arrow to Bar",
      id: "rightwards-arrow-to-bar",
    },
    {
      letter: "⇚",
      unicode: "\u21DA",
      name: "Left Triple Arrow",
      id: "left-triple-arrow",
    },
    {
      letter: "⇛",
      unicode: "\u21DB",
      name: "Right Triple Arrow",
      id: "right-triple-arrow",
    },
  ];

  const curvedArrows = [
    { letter: "↩", unicode: "\u21A9", name: "Left Hook Arrow" },
    { letter: "↪", unicode: "\u21AA", name: "Right Hook Arrow" },
    { letter: "↫", unicode: "\u21AB", name: "Left Loop Arrow" },
    { letter: "↬", unicode: "\u21AC", name: "Right Loop Arrow" },
    {
      letter: "⤴",
      unicode: "\u2934",
      name: "Curved Up Arrow",
      id: "curved-up-arrow",
    },
    {
      letter: "⤵",
      unicode: "\u2935",
      name: "Curved Down Arrow",
      id: "curved-down-arrow",
    },
    {
      letter: "↶",
      unicode: "\u21B6",
      name: "Anticlockwise Top Semicircle Arrow",
      id: "anticlockwise-top-semicircle-arrow",
    },
    {
      letter: "↷",
      unicode: "\u21B7",
      name: "Clockwise Top Semicircle Arrow",
      id: "clockwise-top-semicircle-arrow",
    },
    {
      letter: "↺",
      unicode: "\u21BA",
      name: "Anticlockwise Open Circle Arrow",
      id: "anticlockwise-open-circle-arrow",
    },
    {
      letter: "↻",
      unicode: "\u21BB",
      name: "Clockwise Open Circle Arrow",
      id: "clockwise-open-circle-arrow",
    },
    {
      letter: "⤿",
      unicode: "\u293F",
      name: "Wave Arrow Pointing Directly Right",
      id: "wave-arrow-right",
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

  // Create keys for all categories
  createKeys("basic-arrows-container", basicArrows);
  createKeys("double-arrows-container", doubleArrows);
  createKeys("curved-arrows-container", curvedArrows);
});
