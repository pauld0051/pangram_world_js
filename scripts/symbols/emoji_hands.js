document.addEventListener("DOMContentLoaded", function () {
  const handEmojis = [
    { letter: "👋", unicode: "👋", name: "Waving Hand", id: "waving-hand" },
    {
      letter: "🤚",
      unicode: "🤚",
      name: "Raised Back of Hand",
      id: "raised-back-of-hand",
    },
    {
      letter: "🖐",
      unicode: "🖐",
      name: "Hand with Fingers Splayed",
      id: "hand-with-fingers-splayed",
    },
    { letter: "✋", unicode: "✋", name: "Raised Hand", id: "raised-hand" },
    { letter: "🖖", unicode: "🖖", name: "Vulcan Salute", id: "vulcan-salute" },
    { letter: "👌", unicode: "👌", name: "OK Hand", id: "ok-hand" },
    { letter: "🤏", unicode: "🤏", name: "Pinching Hand", id: "pinching-hand" },
    { letter: "✌️", unicode: "✌️", name: "Victory Hand", id: "victory-hand" },
    {
      letter: "🤞",
      unicode: "🤞",
      name: "Crossed Fingers",
      id: "crossed-fingers",
    },
    {
      letter: "🤟",
      unicode: "🤟",
      name: "Love-You Gesture",
      id: "love-you-gesture",
    },
    {
      letter: "🤘",
      unicode: "🤘",
      name: "Sign of the Horns",
      id: "sign-of-the-horns",
    },
    { letter: "🤙", unicode: "🤙", name: "Call Me Hand", id: "call-me-hand" },
    {
      letter: "👈",
      unicode: "👈",
      name: "Backhand Index Pointing Left",
      id: "backhand-index-pointing-left",
    },
    {
      letter: "👉",
      unicode: "👉",
      name: "Backhand Index Pointing Right",
      id: "backhand-index-pointing-right",
    },
    {
      letter: "👆",
      unicode: "👆",
      name: "Backhand Index Pointing Up",
      id: "backhand-index-pointing-up",
    },
    { letter: "🖕", unicode: "🖕", name: "Middle Finger", id: "middle-finger" },
    {
      letter: "👇",
      unicode: "👇",
      name: "Backhand Index Pointing Down",
      id: "backhand-index-pointing-down",
    },
    {
      letter: "☝️",
      unicode: "☝️",
      name: "Index Pointing Up",
      id: "index-pointing-up",
    },
    { letter: "👍", unicode: "👍", name: "Thumbs Up", id: "thumbs-up" },
    { letter: "👎", unicode: "👎", name: "Thumbs Down", id: "thumbs-down" },
    { letter: "✊", unicode: "✊", name: "Raised Fist", id: "raised-fist" },
    { letter: "👊", unicode: "👊", name: "Oncoming Fist", id: "oncoming-fist" },
    {
      letter: "🤛",
      unicode: "🤛",
      name: "Left-Facing Fist",
      id: "left-facing-fist",
    },
    {
      letter: "🤜",
      unicode: "🤜",
      name: "Right-Facing Fist",
      id: "right-facing-fist",
    },
    {
      letter: "👏",
      unicode: "👏",
      name: "Clapping Hands",
      id: "clapping-hands",
    },
    { letter: "🙌", unicode: "🙌", name: "Raising Hands", id: "raising-hands" },
    { letter: "👐", unicode: "👐", name: "Open Hands", id: "open-hands" },
    {
      letter: "🤲",
      unicode: "🤲",
      name: "Palms Up Together",
      id: "palms-up-together",
    },
    { letter: "🤝", unicode: "🤝", name: "Handshake", id: "handshake" },
    { letter: "🙏", unicode: "🙏", name: "Folded Hands", id: "folded-hands" },
    { letter: "✍️", unicode: "✍️", name: "Writing Hand", id: "writing-hand" },
    { letter: "💅", unicode: "💅", name: "Nail Polish", id: "nail-polish" },
    { letter: "🤳", unicode: "🤳", name: "Selfie", id: "selfie" },
    { letter: "💪", unicode: "💪", name: "Flexed Biceps", id: "flexed-biceps" },
    { letter: "🦵", unicode: "🦵", name: "Leg", id: "leg" },
    { letter: "🦶", unicode: "🦶", name: "Foot", id: "foot" },
    { letter: "🖕", unicode: "🖕", name: "Middle Finger", id: "middle-finger" },
    { letter: "✋", unicode: "✋", name: "Raised Hand", id: "raised-hand" },
    {
      letter: "🤚",
      unicode: "🤚",
      name: "Raised Back of Hand",
      id: "raised-back-of-hand",
    },
    { letter: "👋", unicode: "👋", name: "Waving Hand", id: "waving-hand" },
    { letter: "👌", unicode: "👌", name: "OK Hand", id: "ok-hand" },
    { letter: "🤙", unicode: "🤙", name: "Call Me Hand", id: "call-me-hand" },
    { letter: "✌️", unicode: "✌️", name: "Victory Hand", id: "victory-hand" },
    {
      letter: "🤞",
      unicode: "🤞",
      name: "Crossed Fingers",
      id: "crossed-fingers",
    },
    {
      letter: "🤘",
      unicode: "🤘",
      name: "Sign of the Horns",
      id: "sign-of-the-horns",
    },
    {
      letter: "🤟",
      unicode: "🤟",
      name: "Love-You Gesture",
      id: "love-you-gesture",
    },
    { letter: "✊", unicode: "✊", name: "Raised Fist", id: "raised-fist" },
    { letter: "👊", unicode: "👊", name: "Oncoming Fist", id: "oncoming-fist" },
    {
      letter: "👏",
      unicode: "👏",
      name: "Clapping Hands",
      id: "clapping-hands",
    },
    {
      letter: "🤲",
      unicode: "🤲",
      name: "Palms Up Together",
      id: "palms-up-together",
    },
    { letter: "🤝", unicode: "🤝", name: "Handshake", id: "handshake" },
    { letter: "👐", unicode: "👐", name: "Open Hands", id: "open-hands" },
    { letter: "🙌", unicode: "🙌", name: "Raising Hands", id: "raising-hands" },
    { letter: "🙏", unicode: "🙏", name: "Folded Hands", id: "folded-hands" },
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
 createKeys("hand-emojis-container", handEmojis);
});
