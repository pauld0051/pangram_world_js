document.addEventListener("DOMContentLoaded", function () {
  const bodyPartsEmojis = [
    { letter: "👀", unicode: "👀", name: "Eyes", id: "eyes" },
    { letter: "👁️", unicode: "👁️", name: "Eye", id: "eye" },
    { letter: "👃", unicode: "👃", name: "Nose", id: "nose" },
    { letter: "👄", unicode: "👄", name: "Mouth", id: "mouth" },
    { letter: "👅", unicode: "👅", name: "Tongue", id: "tongue" },
    { letter: "🦷", unicode: "🦷", name: "Tooth", id: "tooth" },
    { letter: "👂", unicode: "👂", name: "Ear", id: "ear" },
    { letter: "🦻", unicode: "🦻", name: "Hearing Aid", id: "hearing-aid" },
    { letter: "🦶", unicode: "🦶", name: "Foot", id: "foot" },
    { letter: "👣", unicode: "👣", name: "Footprints", id: "footprints" },
    { letter: "🦵", unicode: "🦵", name: "Leg", id: "leg" },
    {
      letter: "🦿",
      unicode: "🦿",
      name: "Prosthetic Leg",
      id: "prosthetic-leg",
    },
    { letter: "🤳", name: "Selfie", id: "selfie" },
    { letter: "💪", unicode: "💪", name: "Flexed Biceps", id: "flexed-biceps" },
    {
      letter: "🦾",
      unicode: "🦾",
      name: "Mechanical Arm",
      id: "mechanical-arm",
    },
    {
      letter: "🫀",
      unicode: "🫀",
      name: "Anatomical Heart",
      id: "anatomical-heart",
    },
    { letter: "🫁", unicode: "🫁", name: "Lungs", id: "lungs" },
    { letter: "🧠", unicode: "🧠", name: "Brain", id: "brain" },
    { letter: "🦴", unicode: "🦴", name: "Bone", id: "bone" },
    { letter: "💅", unicode: "💅", name: "Nail Polish", id: "nail-polish" },
    { letter: "🫳", unicode: "🫳", name: "Open Hand", id: "open-hand" },
    {
      letter: "🫴",
      unicode: "🫴",
      name: "Open Hand Facing Down",
      id: "open-hand-facing-down",
    },
    {
      letter: "🫲",
      unicode: "🫲",
      name: "Left-Facing Hand",
      id: "left-facing-hand",
    },
    {
      letter: "🫱",
      unicode: "🫱",
      name: "Right-Facing Hand",
      id: "right-facing-hand",
    },
    {
      letter: "👈",
      unicode: "👈",
      name: "Left-Facing Arrow",
      id: "left-facing-arrow",
    },
    {
      letter: "👉",
      unicode: "👉",
      name: "Right-Facing Arrow",
      id: "right-facing-arrow",
    },
    {
      letter: "👆",
      unicode: "👆",
      name: "Upward-Pointing Index Finger2",
      id: "upward-pointing-index-finger2",
    },
    { letter: "🖕", unicode: "🖕", name: "Middle Finger", id: "middle-finger" },
    {
      letter: "👇",
      unicode: "👇",
      name: "Downward-Pointing Index Finger",
      id: "downward-pointing-index-finger",
    },
    {
      letter: "☝️",
      unicode: "☝️",
      name: "Upward-Pointing Index Finger",
      id: "upward-pointing-index-finger",
    },
    { letter: "👍", unicode: "👍", name: "Thumbs Up", id: "thumbs-up" },
    { letter: "👎", unicode: "👎", name: "Thumbs Down", id: "thumbs-down" },
    { letter: "✊", unicode: "✊", name: "Fist", id: "fist" },
    { letter: "👊", unicode: "👊", name: "Punch", id: "punch" },
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
    { letter: "🫶", unicode: "🫶", name: "Heart Hands", id: "heart-hands" },
    { letter: "🙌", unicode: "🙌", name: "Raised Hands", id: "raised-hands" },
    { letter: "👐", unicode: "👐", name: "Open Hands", id: "open-hands" },
    {
      letter: "🤲",
      unicode: "🤲",
      name: "Palms Together",
      id: "palms-together",
    },
    { letter: "🤝", unicode: "🤝", name: "Handshake", id: "handshake" },
    { letter: "🙏", unicode: "🙏", name: "Praying Hands", id: "praying-hands" },
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
  createKeys("body-emojis-container", bodyPartsEmojis);
});
