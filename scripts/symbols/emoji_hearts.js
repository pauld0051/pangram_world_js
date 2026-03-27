document.addEventListener("DOMContentLoaded", function () {
  const heartsEmojis = [
    { letter: "♥️", unicode: "♥️", name: "Heart Suit", id: "heart-suit" },
    {
      letter: "❣️",
      unicode: "❣️",
      name: "Heart Exclamation",
      id: "heart-exclamation",
    },
    { letter: "💕", unicode: "💕", name: "Two Hearts", id: "two-hearts" },
    {
      letter: "💞",
      unicode: "💞",
      name: "Revolving Hearts",
      id: "revolving-hearts",
    },
    { letter: "💓", unicode: "💓", name: "Beating Heart", id: "beating-heart" },
    { letter: "💗", unicode: "💗", name: "Growing Heart", id: "growing-heart" },
    {
      letter: "💖",
      unicode: "💖",
      name: "Sparkling Heart",
      id: "sparkling-heart",
    },
    {
      letter: "💘",
      unicode: "💘",
      name: "Heart with Arrow",
      id: "heart-with-arrow",
    },
    {
      letter: "💝",
      unicode: "💝",
      name: "Heart with Ribbon",
      id: "heart-with-ribbon",
    },
    {
      letter: "💟",
      unicode: "💟",
      name: "Heart Decoration",
      id: "heart-decoration",
    },
    { letter: "❤️", unicode: "❤️", name: "Red Heart", id: "red-heart" },
    { letter: "🩷", unicode: "🩷", name: "Pink Heart", id: "pink-heart" },
    { letter: "🧡", unicode: "🧡", name: "Orange Heart", id: "orange-heart" },
    { letter: "💛", unicode: "💛", name: "Yellow Heart", id: "yellow-heart" },
    { letter: "💚", unicode: "💚", name: "Green Heart", id: "green-heart" },
    { letter: "💙", unicode: "💙", name: "Blue Heart", id: "blue-heart" },
    {
      letter: "🩵",
      unicode: "🩵",
      name: "Light Blue Heart",
      id: "light-blue-heart",
    },
    { letter: "💜", unicode: "💜", name: "Purple Heart", id: "purple-heart" },
    { letter: "🤎", unicode: "🤎", name: "Brown Heart", id: "brown-heart" },
    { letter: "🖤", unicode: "🖤", name: "Black Heart", id: "black-heart" },
    { letter: "🩶", unicode: "🩶", name: "Grey Heart", id: "grey-heart" },
    { letter: "🤍", unicode: "🤍", name: "White Heart", id: "white-heart" },
    { letter: "💔", unicode: "💔", name: "Broken Heart", id: "broken-heart" },
    { letter: "❤️‍🔥", unicode: "❤️‍🔥", name: "Heart on Fire", id: "heart-on-fire" },
    { letter: "❤️‍🩹", unicode: "❤️‍🩹", name: "Mending Heart", id: "mending-heart" },
    {
      letter: "🫀",
      unicode: "🫀",
      name: "Anatomical Heart",
      id: "anatomical-heart",
    },
  ];

  function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    symbols.forEach((item) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

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

  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

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
    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`;

    setTimeout(() => {
      if (tooltip.parentElement) {
        document.body.removeChild(tooltip);
      }
    }, 1500);
  }

  function removeExistingTooltips() {
    const tooltips = document.querySelectorAll(".copy-tooltip");
    tooltips.forEach((tooltip) => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    });
  }

  createKeys("hearts-emojis-container", heartsEmojis);
});
