document.addEventListener("DOMContentLoaded", function () {
  const hanunooVowels = [
    { letter: "ᜠ", unicode: "ᜠ", name: "A", id: "vowel-a" },
    { letter: "ᜡ", unicode: "ᜡ", name: "I", id: "vowel-i" },
    { letter: "ᜢ", unicode: "ᜢ", name: "U", id: "vowel-u" },
  ];

  const hanunooLetters = [
    { letter: "ᜣ", unicode: "ᜣ", name: "Ka", id: "letter-ka" },
    { letter: "ᜤ", unicode: "ᜤ", name: "Ga", id: "letter-ga" },
    { letter: "ᜥ", unicode: "ᜥ", name: "Nga", id: "letter-nga" },
    { letter: "ᜦ", unicode: "ᜦ", name: "Ta", id: "letter-ta" },
    { letter: "ᜧ", unicode: "ᜧ", name: "Da", id: "letter-da" },
    { letter: "ᜨ", unicode: "ᜨ", name: "Na", id: "letter-na" },
    { letter: "ᜩ", unicode: "ᜩ", name: "Pa", id: "letter-pa" },
    { letter: "ᜪ", unicode: "ᜪ", name: "Ba", id: "letter-ba" },
    { letter: "ᜫ", unicode: "ᜫ", name: "Ma", id: "letter-ma" },
    { letter: "ᜬ", unicode: "ᜬ", name: "Ya", id: "letter-ya" },
    { letter: "ᜭ", unicode: "ᜭ", name: "Ra", id: "letter-ra" },
    { letter: "ᜮ", unicode: "ᜮ", name: "La", id: "letter-la" },
    { letter: "ᜯ", unicode: "ᜯ", name: "Wa", id: "letter-wa" },
    { letter: "ᜰ", unicode: "ᜰ", name: "Sa", id: "letter-sa" },
    { letter: "ᜱ", unicode: "ᜱ", name: "Ha", id: "letter-ha" },
  ];

  const hanunooMarks = [
    { letter: "◌ᜲ", unicode: "ᜲ", name: "I or E Mark", id: "mark-i-e" },
    { letter: "◌ᜳ", unicode: "ᜳ", name: "U or O Mark", id: "mark-u-o" },
    { letter: "◌᜴", unicode: "᜴", name: "Pamudpod", id: "mark-pamudpod" },
  ];

  const hanunooPunctuation = [
    {
      letter: "᜵",
      unicode: "᜵",
      name: "Single Danda",
      id: "punct-single-danda",
    },
    {
      letter: "᜶",
      unicode: "᜶",
      name: "Double Danda",
      id: "punct-double-danda",
    },
  ];

  function createKeys(containerId, alphabet) {
    const container = document.getElementById(containerId);

    alphabet.forEach((item) => {
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

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
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
        tooltip.parentElement.removeChild(tooltip);
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

  createKeys("hanunoo-vowels-container", hanunooVowels);
  createKeys("hanunoo-letters-container", hanunooLetters);
  createKeys("hanunoo-marks-container", hanunooMarks);
  createKeys("hanunoo-punctuation-container", hanunooPunctuation);
});
