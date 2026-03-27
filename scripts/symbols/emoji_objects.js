document.addEventListener("DOMContentLoaded", function () {
  const objectsEmojis = [
    { letter: "⌚", unicode: "⌚", name: "Watch", id: "watch" },
    { letter: "📱", unicode: "📱", name: "Mobile Phone", id: "mobile-phone" },
    { letter: "📲", unicode: "📲", name: "Phone Arrow", id: "phone-arrow" },
    { letter: "💻", unicode: "💻", name: "Laptop", id: "laptop" },
    { letter: "⌨️", unicode: "⌨️", name: "Keyboard", id: "keyboard" },
    {
      letter: "🖥️",
      unicode: "🖥️",
      name: "Desktop Computer",
      id: "desktop-computer",
    },
    { letter: "🖨️", unicode: "🖨️", name: "Printer", id: "printer" },
    {
      letter: "🖱️",
      unicode: "🖱️",
      name: "Computer Mouse",
      id: "computer-mouse",
    },

    { letter: "🖲️", unicode: "🖲️", name: "Trackball", id: "trackball" },
    { letter: "🕹️", unicode: "🕹️", name: "Joystick", id: "joystick" },
    { letter: "🗜️", unicode: "🗜️", name: "Clamp", id: "clamp" },
    { letter: "💿", unicode: "💿", name: "CD", id: "cd" },
    { letter: "💾", unicode: "💾", name: "Floppy Disk", id: "floppy-disk" },
    { letter: "📀", unicode: "📀", name: "DVD", id: "dvd" },
    { letter: "📼", unicode: "📼", name: "Videocassette", id: "videocassette" },

    { letter: "📷", unicode: "📷", name: "Camera", id: "camera" },
    { letter: "📸", unicode: "📸", name: "Camera Flash", id: "camera-flash" },
    { letter: "📹", unicode: "📹", name: "Video Camera", id: "video-camera" },
    { letter: "🎥", unicode: "🎥", name: "Movie Camera", id: "movie-camera" },
    {
      letter: "📽️",
      unicode: "📽️",
      name: "Film Projector",
      id: "film-projector",
    },
    { letter: "🎞️", unicode: "🎞️", name: "Film Frames", id: "film-frames" },
    {
      letter: "📞",
      unicode: "📞",
      name: "Telephone Receiver",
      id: "telephone-receiver",
    },
    { letter: "☎️", unicode: "☎️", name: "Telephone", id: "telephone" },

    { letter: "📟", unicode: "📟", name: "Pager", id: "pager" },
    { letter: "📠", unicode: "📠", name: "Fax Machine", id: "fax-machine" },
    { letter: "📺", unicode: "📺", name: "Television", id: "television" },
    { letter: "📻", unicode: "📻", name: "Radio", id: "radio" },
    {
      letter: "🎙️",
      unicode: "🎙️",
      name: "Studio Microphone",
      id: "studio-microphone",
    },
    { letter: "🎚️", unicode: "🎚️", name: "Level Slider", id: "level-slider" },
    { letter: "🎛️", unicode: "🎛️", name: "Control Knobs", id: "control-knobs" },
    { letter: "🧭", unicode: "🧭", name: "Compass", id: "compass" },

    { letter: "⏱️", unicode: "⏱️", name: "Stopwatch", id: "stopwatch" },
    { letter: "⏲️", unicode: "⏲️", name: "Timer Clock", id: "timer-clock" },
    { letter: "⏰", unicode: "⏰", name: "Alarm Clock", id: "alarm-clock" },
    {
      letter: "🕰️",
      unicode: "🕰️",
      name: "Mantelpiece Clock",
      id: "mantelpiece-clock",
    },
    {
      letter: "⌛",
      unicode: "⌛",
      name: "Hourglass Done",
      id: "hourglass-done",
    },
    {
      letter: "⏳",
      unicode: "⏳",
      name: "Hourglass Not Done",
      id: "hourglass-not-done",
    },
    {
      letter: "📡",
      unicode: "📡",
      name: "Satellite Antenna",
      id: "satellite-antenna",
    },
    { letter: "🔋", unicode: "🔋", name: "Battery", id: "battery" },

    { letter: "🪫", unicode: "🪫", name: "Low Battery", id: "low-battery" },
    { letter: "🔌", unicode: "🔌", name: "Electric Plug", id: "electric-plug" },
    { letter: "💡", unicode: "💡", name: "Light Bulb", id: "light-bulb" },
    { letter: "🔦", unicode: "🔦", name: "Flashlight", id: "flashlight" },
    { letter: "🕯️", unicode: "🕯️", name: "Candle", id: "candle" },
    { letter: "🪔", unicode: "🪔", name: "Diya Lamp", id: "diya-lamp" },
    {
      letter: "🧯",
      unicode: "🧯",
      name: "Fire Extinguisher",
      id: "fire-extinguisher",
    },
    { letter: "🛢️", unicode: "🛢️", name: "Oil Drum", id: "oil-drum" },

    {
      letter: "💸",
      unicode: "💸",
      name: "Money with Wings",
      id: "money-with-wings",
    },
    {
      letter: "💵",
      unicode: "💵",
      name: "Dollar Banknote",
      id: "dollar-banknote",
    },
    { letter: "💴", unicode: "💴", name: "Yen Banknote", id: "yen-banknote" },
    { letter: "💶", unicode: "💶", name: "Euro Banknote", id: "euro-banknote" },
    {
      letter: "💷",
      unicode: "💷",
      name: "Pound Banknote",
      id: "pound-banknote",
    },
    { letter: "🪙", unicode: "🪙", name: "Coin", id: "coin" },
    { letter: "🏆", unicode: "🏆", name: "Trophy", id: "trophy" },
    { letter: "🔒", unicode: "🔒", name: "Locked", id: "locked" },
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

  createKeys("objects-emojis-container", objectsEmojis);
});
