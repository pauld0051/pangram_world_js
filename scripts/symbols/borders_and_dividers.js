document.addEventListener("DOMContentLoaded", function () {
  const boxDrawingSymbols = [
    {
      letter: "─",
      unicode: "\u2500",
      name: "Box Drawings Light Horizontal",
      id: "light-horizontal",
    },
    {
      letter: "═",
      unicode: "\u2550",
      name: "Box Drawings Double Horizontal",
      id: "double-horizontal",
    },
    {
      letter: "│",
      unicode: "\u2502",
      name: "Box Drawings Light Vertical",
      id: "light-vertical",
    },
    {
      letter: "║",
      unicode: "\u2551",
      name: "Box Drawings Double Vertical",
      id: "double-vertical",
    },
    {
      letter: "┌",
      unicode: "\u250C",
      name: "Box Drawings Light Down and Right",
      id: "light-down-and-right",
    },
    {
      letter: "┐",
      unicode: "\u2510",
      name: "Box Drawings Light Down and Left",
      id: "light-down-and-left",
    },
    {
      letter: "└",
      unicode: "\u2514",
      name: "Box Drawings Light Up and Right",
      id: "light-up-and-right",
    },
    {
      letter: "┘",
      unicode: "\u2518",
      name: "Box Drawings Light Up and Left",
      id: "light-up-and-left",
    },
    {
      letter: "┼",
      unicode: "\u253C",
      name: "Box Drawings Light Vertical and Horizontal",
      id: "light-vertical-horizontal",
    },
    {
      letter: "╬",
      unicode: "\u256C",
      name: "Box Drawings Double Vertical and Horizontal",
      id: "double-vertical-horizontal",
    },
    {
      letter: "┴",
      unicode: "\u2534",
      name: "Box Drawings Light Up and Horizontal",
      id: "light-up-horizontal",
    },
    {
      letter: "┬",
      unicode: "\u252C",
      name: "Box Drawings Light Down and Horizontal",
      id: "light-down-horizontal",
    },
    {
      letter: "├",
      unicode: "\u251C",
      name: "Box Drawings Light Vertical and Right",
      id: "light-vertical-right",
    },
    {
      letter: "┤",
      unicode: "\u2524",
      name: "Box Drawings Light Vertical and Left",
      id: "light-vertical-left",
    },
    {
      letter: "╓",
      unicode: "\u2553",
      name: "Box Drawings Double Down and Right",
      id: "double-down-and-right",
    },
    {
      letter: "╖",
      unicode: "\u2556",
      name: "Box Drawings Double Down and Left",
      id: "double-down-and-left",
    },
    {
      letter: "╙",
      unicode: "\u2559",
      name: "Box Drawings Double Up and Right",
      id: "double-up-and-right",
    },
    {
      letter: "╜",
      unicode: "\u255C",
      name: "Box Drawings Double Up and Left",
      id: "double-up-and-left",
    },
  ];

  const blockElements = [
    { letter: "█", unicode: "\u2588", name: "Full Block", id: "full-block" },
    { letter: "▓", unicode: "\u2593", name: "Dark Shade", id: "dark-shade" },
    {
      letter: "▒",
      unicode: "\u2592",
      name: "Medium Shade",
      id: "medium-shade",
    },
    {
      letter: "░",
      unicode: "\u2591",
      name: "Light Shade",
      id: "light-shade",
    },
    {
      letter: "▂",
      unicode: "\u2582",
      name: "Lower One Quarter Block",
      id: "lower-one-quarter-block",
    },
    {
      letter: "▃",
      unicode: "\u2583",
      name: "Lower One Third Block",
      id: "lower-one-third-block",
    },
    {
      letter: "▄",
      unicode: "\u2584",
      name: "Lower One Half Block",
      id: "lower-one-half-block",
    },
    {
      letter: "▅",
      unicode: "\u2585",
      name: "Lower Two Thirds Block",
      id: "lower-two-thirds-block",
    },
    {
      letter: "▆",
      unicode: "\u2586",
      name: "Lower Three Quarters Block",
      id: "lower-three-quarters-block",
    },
    {
      letter: "▇",
      unicode: "\u2587",
      name: "Lower Seven Eighths Block",
      id: "lower-seven-eighths-block",
    },
    {
      letter: "▉",
      unicode: "\u2589",
      name: "Left Seven Eighths Block",
      id: "left-seven-eighths-block",
    },
    {
      letter: "▊",
      unicode: "\u258A",
      name: "Left Three Quarters Block",
      id: "left-three-quarters-block",
    },
    {
      letter: "▋",
      unicode: "\u258B",
      name: "Left Five Eighths Block",
      id: "left-five-eighths-block",
    },
    {
      letter: "▌",
      unicode: "\u258C",
      name: "Left Half Block",
      id: "left-half-block",
    },
    {
      letter: "▍",
      unicode: "\u258D",
      name: "Left Three Eighths Block",
      id: "left-three-eighths-block",
    },
    {
      letter: "▎",
      unicode: "\u258E",
      name: "Left One Quarter Block",
      id: "left-one-quarter-block",
    },
    {
      letter: "▏",
      unicode: "\u258F",
      name: "Left One Eighth Block",
      id: "left-one-eighth-block",
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
  createKeys("box-drawing-container", boxDrawingSymbols);
  createKeys("block-elements-container", blockElements);
});
