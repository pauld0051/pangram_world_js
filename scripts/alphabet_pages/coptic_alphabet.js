document.addEventListener("DOMContentLoaded", function () {
  const coreLetters = [
    { upper: "Ⲁ", lower: "ⲁ", name: "alfa", id: "coptic-alfa" },
    { upper: "Ⲃ", lower: "ⲃ", name: "vida", id: "coptic-vida" },
    { upper: "Ⲅ", lower: "ⲅ", name: "gamma", id: "coptic-gamma" },
    { upper: "Ⲇ", lower: "ⲇ", name: "dalda", id: "coptic-dalda" },
    { upper: "Ⲉ", lower: "ⲉ", name: "eie", id: "coptic-eie" },
    { upper: "Ⲋ", lower: "ⲋ", name: "sou", id: "coptic-sou" },
    { upper: "Ⲍ", lower: "ⲍ", name: "zata", id: "coptic-zata" },
    { upper: "Ⲏ", lower: "ⲏ", name: "hate", id: "coptic-hate" },
    { upper: "Ⲑ", lower: "ⲑ", name: "thethe", id: "coptic-thethe" },
    { upper: "Ⲓ", lower: "ⲓ", name: "iauda", id: "coptic-iauda" },
    { upper: "Ⲕ", lower: "ⲕ", name: "kapa", id: "coptic-kapa" },
    { upper: "Ⲗ", lower: "ⲗ", name: "laula", id: "coptic-laula" },
    { upper: "Ⲙ", lower: "ⲙ", name: "mi", id: "coptic-mi" },
    { upper: "Ⲛ", lower: "ⲛ", name: "ni", id: "coptic-ni" },
    { upper: "Ⲝ", lower: "ⲝ", name: "ksi", id: "coptic-ksi" },
    { upper: "Ⲟ", lower: "ⲟ", name: "o", id: "coptic-o" },
    { upper: "Ⲡ", lower: "ⲡ", name: "pi", id: "coptic-pi" },
    { upper: "Ⲣ", lower: "ⲣ", name: "ro", id: "coptic-ro" },
    { upper: "Ⲥ", lower: "ⲥ", name: "sima", id: "coptic-sima" },
    { upper: "Ⲧ", lower: "ⲧ", name: "tau", id: "coptic-tau" },
    { upper: "Ⲩ", lower: "ⲩ", name: "ua", id: "coptic-ua" },
    { upper: "Ⲫ", lower: "ⲫ", name: "fi", id: "coptic-fi" },
    { upper: "Ⲭ", lower: "ⲭ", name: "khi", id: "coptic-khi" },
    { upper: "Ⲯ", lower: "ⲯ", name: "psi", id: "coptic-psi" },
    { upper: "Ⲱ", lower: "ⲱ", name: "oou", id: "coptic-oou" },
  ];

  const demoticLetters = [
    { upper: "Ϣ", lower: "ϣ", name: "shei", id: "demotic-shei" },
    { upper: "Ϥ", lower: "ϥ", name: "fei", id: "demotic-fei" },
    { upper: "Ϧ", lower: "ϧ", name: "khei", id: "demotic-khei" },
    { upper: "Ϩ", lower: "ϩ", name: "hori", id: "demotic-hori" },
    { upper: "Ϫ", lower: "ϫ", name: "gangia", id: "demotic-gangia" },
    { upper: "Ϭ", lower: "ϭ", name: "shima", id: "demotic-shima" },
    { upper: "Ϯ", lower: "ϯ", name: "dei", id: "demotic-dei" },
  ];

  const historicLetters = [
    { upper: "Ⲳ", lower: "ⲳ", name: "dialect-p alef", id: "hist-alef" },
    { upper: "Ⲵ", lower: "ⲵ", name: "old coptic ain", id: "hist-ain" },
    { upper: "Ⲷ", lower: "ⲷ", name: "cryptogrammic eie", id: "hist-eie" },
    { upper: "Ⲹ", lower: "ⲹ", name: "dialect-p kapa", id: "hist-kapa" },
    { upper: "Ⲻ", lower: "ⲻ", name: "dialect-p ni", id: "hist-ni" },
    { upper: "Ⲽ", lower: "ⲽ", name: "cryptogrammic ni", id: "hist-crypt-ni" },
    { upper: "Ⲿ", lower: "ⲿ", name: "old coptic oou", id: "hist-oou" },
    { upper: "Ⳁ", lower: "ⳁ", name: "sampi", id: "hist-sampi" },
    { upper: "Ⳃ", lower: "ⳃ", name: "crossed shei", id: "hist-crossed-shei" },
    { upper: "Ⳅ", lower: "ⳅ", name: "old coptic shei", id: "hist-old-shei" },
    { upper: "Ⳇ", lower: "ⳇ", name: "old coptic esh", id: "hist-esh" },
    { upper: "Ⳉ", lower: "ⳉ", name: "akhmimic khei", id: "hist-akhmimic-khei" },
    { upper: "Ⳋ", lower: "ⳋ", name: "dialect-p hori", id: "hist-hori" },
    { upper: "Ⳍ", lower: "ⳍ", name: "old coptic hori", id: "hist-old-hori" },
    { upper: "Ⳏ", lower: "ⳏ", name: "old coptic ha", id: "hist-ha" },
    { upper: "Ⳑ", lower: "ⳑ", name: "l-shaped ha", id: "hist-lha" },
    { upper: "Ⳓ", lower: "ⳓ", name: "old coptic hei", id: "hist-hei" },
    { upper: "Ⳕ", lower: "ⳕ", name: "old coptic hat", id: "hist-hat" },
    {
      upper: "Ⳗ",
      lower: "ⳗ",
      name: "old coptic gangia",
      id: "hist-old-gangia",
    },
    { upper: "Ⳙ", lower: "ⳙ", name: "old coptic dja", id: "hist-dja" },
    { upper: "Ⳛ", lower: "ⳛ", name: "old coptic shima", id: "hist-old-shima" },
    {
      upper: "Ⳬ",
      lower: "ⳬ",
      name: "cryptogrammic shei",
      id: "hist-crypt-shei",
    },
    {
      upper: "Ⳮ",
      lower: "ⳮ",
      name: "cryptogrammic gangia",
      id: "hist-crypt-gangia",
    },
    { upper: "Ⳳ", lower: "ⳳ", name: "bohairic khei", id: "hist-bohairic-khei" },
  ];

  const symbols = [
    { letter: "ⳤ", unicode: "ⳤ", name: "kai", id: "symbol-kai" },
    { letter: "⳥", unicode: "⳥", name: "mi ro", id: "symbol-mi-ro" },
    { letter: "⳦", unicode: "⳦", name: "pi ro", id: "symbol-pi-ro" },
    { letter: "⳧", unicode: "⳧", name: "stauros", id: "symbol-stauros" },
    { letter: "⳨", unicode: "⳨", name: "tau ro", id: "symbol-tau-ro" },
    { letter: "⳩", unicode: "⳩", name: "khi ro", id: "symbol-khi-ro" },
    { letter: "⳪", unicode: "⳪", name: "shima sima", id: "symbol-shima-sima" },
    { letter: "⳽", unicode: "⳽", name: "one half", id: "symbol-half" },
  ];

  const marksAndPunctuation = [
    {
      letter: "⳯",
      unicode: "⳯",
      name: "combining ni above",
      id: "mark-ni-above",
    },
    {
      letter: "⳰",
      unicode: "⳰",
      name: "combining spiritus asper",
      id: "mark-asper",
    },
    {
      letter: "⳱",
      unicode: "⳱",
      name: "combining spiritus lenis",
      id: "mark-lenis",
    },
    {
      letter: "⳹",
      unicode: "⳹",
      name: "old nubian full stop",
      id: "punct-old-nubian-stop",
    },
    {
      letter: "⳺",
      unicode: "⳺",
      name: "direct question mark",
      id: "punct-direct-question",
    },
    {
      letter: "⳻",
      unicode: "⳻",
      name: "indirect question mark",
      id: "punct-indirect-question",
    },
    {
      letter: "⳼",
      unicode: "⳼",
      name: "verse divider",
      id: "punct-verse-divider",
    },
    { letter: "⳾", unicode: "⳾", name: "full stop", id: "punct-full-stop" },
    {
      letter: "⳿",
      unicode: "⳿",
      name: "morphological divider",
      id: "punct-morph-divider",
    },
  ];

  function createKey(item) {
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

    return key;
  }

  function createLetterPairCard(item) {
    const col = document.createElement("div");
    col.className = "col-xl-2 col-lg-3 col-md-4 col-sm-6";

    const key = document.createElement("div");
    key.className = "alphabet-key";
    key.id = item.id;

    const letterSpan = document.createElement("span");
    letterSpan.className = "letter";
    letterSpan.innerText = `${item.upper} ${item.lower}`;

    const nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.innerText = item.name;

    key.appendChild(letterSpan);
    key.appendChild(nameSpan);

    key.dataset.unicode = `${item.upper} ${item.lower}`;
    key.onclick = function (event) {
      copyToClipboard(`${item.upper} ${item.lower}`);
      showTooltip("Copied", event);
    };

    col.appendChild(key);
    return col;
  }

  function createKeys(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach((item) => {
      container.appendChild(createKey(item));
    });
  }

  function createLetterPairs(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach((item) => {
      container.appendChild(createLetterPairCard(item));
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

  createLetterPairs("coptic-core-container", coreLetters);
  createLetterPairs("coptic-demotic-container", demoticLetters);
  createLetterPairs("coptic-historic-container", historicLetters);
  createKeys("coptic-symbols-container", symbols);
  createKeys("coptic-marks-container", marksAndPunctuation);
});
