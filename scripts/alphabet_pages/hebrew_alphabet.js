document.addEventListener("DOMContentLoaded", function () {
  const hebrewLetters = [
    { letter: "א", unicode: "א", name: "Alef", id: "heb-alef" },
    { letter: "ב", unicode: "ב", name: "Bet", id: "heb-bet" },
    { letter: "ג", unicode: "ג", name: "Gimel", id: "heb-gimel" },
    { letter: "ד", unicode: "ד", name: "Dalet", id: "heb-dalet" },
    { letter: "ה", unicode: "ה", name: "He", id: "heb-he" },
    { letter: "ו", unicode: "ו", name: "Vav", id: "heb-vav" },
    { letter: "ז", unicode: "ז", name: "Zayin", id: "heb-zayin" },
    { letter: "ח", unicode: "ח", name: "Chet", id: "heb-chet" },
    { letter: "ט", unicode: "ט", name: "Tet", id: "heb-tet" },
    { letter: "י", unicode: "י", name: "Yod", id: "heb-yod" },
    { letter: "כ", unicode: "כ", name: "Kaf", id: "heb-kaf" },
    { letter: "ל", unicode: "ל", name: "Lamed", id: "heb-lamed" },
    { letter: "מ", unicode: "מ", name: "Mem", id: "heb-mem" },
    { letter: "נ", unicode: "נ", name: "Nun", id: "heb-nun" },
    { letter: "ס", unicode: "ס", name: "Samekh", id: "heb-samekh" },
    { letter: "ע", unicode: "ע", name: "Ayin", id: "heb-ayin" },
    { letter: "פ", unicode: "פ", name: "Pe", id: "heb-pe" },
    { letter: "צ", unicode: "צ", name: "Tsadi", id: "heb-tsadi" },
    { letter: "ק", unicode: "ק", name: "Qof", id: "heb-qof" },
    { letter: "ר", unicode: "ר", name: "Resh", id: "heb-resh" },
    { letter: "ש", unicode: "ש", name: "Shin", id: "heb-shin" },
    { letter: "ת", unicode: "ת", name: "Tav", id: "heb-tav" },
  ];

  const hebrewFinals = [
    { letter: "ך", unicode: "ך", name: "Final Kaf", id: "heb-final-kaf" },
    { letter: "ם", unicode: "ם", name: "Final Mem", id: "heb-final-mem" },
    { letter: "ן", unicode: "ן", name: "Final Nun", id: "heb-final-nun" },
    { letter: "ף", unicode: "ף", name: "Final Pe", id: "heb-final-pe" },
    { letter: "ץ", unicode: "ץ", name: "Final Tsadi", id: "heb-final-tsadi" },
  ];

  const hebrewNiqqud = [
    { letter: "◌ְ", unicode: "ְ", name: "Sheva", id: "heb-niqqud-sheva" },
    {
      letter: "◌ֱ",
      unicode: "ֱ",
      name: "Hataf Segol",
      id: "heb-niqqud-hataf-segol",
    },
    {
      letter: "◌ֲ",
      unicode: "ֲ",
      name: "Hataf Patah",
      id: "heb-niqqud-hataf-patah",
    },
    {
      letter: "◌ֳ",
      unicode: "ֳ",
      name: "Hataf Qamats",
      id: "heb-niqqud-hataf-qamats",
    },
    { letter: "◌ִ", unicode: "ִ", name: "Hiriq", id: "heb-niqqud-hiriq" },
    { letter: "◌ֵ", unicode: "ֵ", name: "Tsere", id: "heb-niqqud-tsere" },
    { letter: "◌ֶ", unicode: "ֶ", name: "Segol", id: "heb-niqqud-segol" },
    { letter: "◌ַ", unicode: "ַ", name: "Patah", id: "heb-niqqud-patah" },
    { letter: "◌ָ", unicode: "ָ", name: "Qamats", id: "heb-niqqud-qamats" },
    { letter: "◌ֹ", unicode: "ֹ", name: "Holam", id: "heb-niqqud-holam" },
    {
      letter: "◌ֺ",
      unicode: "ֺ",
      name: "Holam Haser",
      id: "heb-niqqud-holam-haser",
    },
    { letter: "◌ֻ", unicode: "ֻ", name: "Qubuts", id: "heb-niqqud-qubuts" },
  ];

  const hebrewMarks = [
    {
      letter: "◌ּ",
      unicode: "ּ",
      name: "Dagesh or Mapiq",
      id: "heb-mark-dagesh",
    },
    { letter: "◌ֽ", unicode: "ֽ", name: "Meteg", id: "heb-mark-meteg" },
    { letter: "◌ֿ", unicode: "ֿ", name: "Rafe", id: "heb-mark-rafe" },
    { letter: "◌ׁ", unicode: "ׁ", name: "Shin Dot", id: "heb-mark-shin-dot" },
    { letter: "◌ׂ", unicode: "ׂ", name: "Sin Dot", id: "heb-mark-sin-dot" },
    { letter: "◌ׄ", unicode: "ׄ", name: "Upper Dot", id: "heb-mark-upper-dot" },
    { letter: "◌ׅ", unicode: "ׅ", name: "Lower Dot", id: "heb-mark-lower-dot" },
    { letter: "־", unicode: "־", name: "Maqaf", id: "heb-punct-maqaf" },
    { letter: "׀", unicode: "׀", name: "Paseq", id: "heb-punct-paseq" },
    { letter: "׃", unicode: "׃", name: "Sof Pasuq", id: "heb-punct-sof-pasuq" },
    { letter: "׳", unicode: "׳", name: "Geresh", id: "heb-punct-geresh" },
    { letter: "״", unicode: "״", name: "Gershayim", id: "heb-punct-gershayim" },
  ];

  function createKeys(containerId, items) {
    const container = document.getElementById(containerId);

    items.forEach((item) => {
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

  createKeys("hebrew-letters-container", hebrewLetters);
  createKeys("hebrew-finals-container", hebrewFinals);
  createKeys("hebrew-niqqud-container", hebrewNiqqud);
  createKeys("hebrew-marks-container", hebrewMarks);
});
