document.addEventListener("DOMContentLoaded", function () {
  const coreGroups = [
    {
      title: "Core Uppercase",
      items: [
        { letter: "Ⲁ", unicode: "Ⲁ", name: "alfa", id: "core-upper-alfa" },
        { letter: "Ⲃ", unicode: "Ⲃ", name: "vida", id: "core-upper-vida" },
        { letter: "Ⲅ", unicode: "Ⲅ", name: "gamma", id: "core-upper-gamma" },
        { letter: "Ⲇ", unicode: "Ⲇ", name: "dalda", id: "core-upper-dalda" },
        { letter: "Ⲉ", unicode: "Ⲉ", name: "eie", id: "core-upper-eie" },
        { letter: "Ⲋ", unicode: "Ⲋ", name: "sou", id: "core-upper-sou" },
        { letter: "Ⲍ", unicode: "Ⲍ", name: "zata", id: "core-upper-zata" },
        { letter: "Ⲏ", unicode: "Ⲏ", name: "hate", id: "core-upper-hate" },
        { letter: "Ⲑ", unicode: "Ⲑ", name: "thethe", id: "core-upper-thethe" },
        { letter: "Ⲓ", unicode: "Ⲓ", name: "iauda", id: "core-upper-iauda" },
        { letter: "Ⲕ", unicode: "Ⲕ", name: "kapa", id: "core-upper-kapa" },
        { letter: "Ⲗ", unicode: "Ⲗ", name: "laula", id: "core-upper-laula" },
        { letter: "Ⲙ", unicode: "Ⲙ", name: "mi", id: "core-upper-mi" },
        { letter: "Ⲛ", unicode: "Ⲛ", name: "ni", id: "core-upper-ni" },
        { letter: "Ⲝ", unicode: "Ⲝ", name: "ksi", id: "core-upper-ksi" },
        { letter: "Ⲟ", unicode: "Ⲟ", name: "o", id: "core-upper-o" },
        { letter: "Ⲡ", unicode: "Ⲡ", name: "pi", id: "core-upper-pi" },
        { letter: "Ⲣ", unicode: "Ⲣ", name: "ro", id: "core-upper-ro" },
        { letter: "Ⲥ", unicode: "Ⲥ", name: "sima", id: "core-upper-sima" },
        { letter: "Ⲧ", unicode: "Ⲧ", name: "tau", id: "core-upper-tau" },
        { letter: "Ⲩ", unicode: "Ⲩ", name: "ua", id: "core-upper-ua" },
        { letter: "Ⲫ", unicode: "Ⲫ", name: "fi", id: "core-upper-fi" },
        { letter: "Ⲭ", unicode: "Ⲭ", name: "khi", id: "core-upper-khi" },
        { letter: "Ⲯ", unicode: "Ⲯ", name: "psi", id: "core-upper-psi" },
        { letter: "Ⲱ", unicode: "Ⲱ", name: "oou", id: "core-upper-oou" },
      ],
    },
    {
      title: "Core Lowercase",
      items: [
        { letter: "ⲁ", unicode: "ⲁ", name: "alfa", id: "core-lower-alfa" },
        { letter: "ⲃ", unicode: "ⲃ", name: "vida", id: "core-lower-vida" },
        { letter: "ⲅ", unicode: "ⲅ", name: "gamma", id: "core-lower-gamma" },
        { letter: "ⲇ", unicode: "ⲇ", name: "dalda", id: "core-lower-dalda" },
        { letter: "ⲉ", unicode: "ⲉ", name: "eie", id: "core-lower-eie" },
        { letter: "ⲋ", unicode: "ⲋ", name: "sou", id: "core-lower-sou" },
        { letter: "ⲍ", unicode: "ⲍ", name: "zata", id: "core-lower-zata" },
        { letter: "ⲏ", unicode: "ⲏ", name: "hate", id: "core-lower-hate" },
        { letter: "ⲑ", unicode: "ⲑ", name: "thethe", id: "core-lower-thethe" },
        { letter: "ⲓ", unicode: "ⲓ", name: "iauda", id: "core-lower-iauda" },
        { letter: "ⲕ", unicode: "ⲕ", name: "kapa", id: "core-lower-kapa" },
        { letter: "ⲗ", unicode: "ⲗ", name: "laula", id: "core-lower-laula" },
        { letter: "ⲙ", unicode: "ⲙ", name: "mi", id: "core-lower-mi" },
        { letter: "ⲛ", unicode: "ⲛ", name: "ni", id: "core-lower-ni" },
        { letter: "ⲝ", unicode: "ⲝ", name: "ksi", id: "core-lower-ksi" },
        { letter: "ⲟ", unicode: "ⲟ", name: "o", id: "core-lower-o" },
        { letter: "ⲡ", unicode: "ⲡ", name: "pi", id: "core-lower-pi" },
        { letter: "ⲣ", unicode: "ⲣ", name: "ro", id: "core-lower-ro" },
        { letter: "ⲥ", unicode: "ⲥ", name: "sima", id: "core-lower-sima" },
        { letter: "ⲧ", unicode: "ⲧ", name: "tau", id: "core-lower-tau" },
        { letter: "ⲩ", unicode: "ⲩ", name: "ua", id: "core-lower-ua" },
        { letter: "ⲫ", unicode: "ⲫ", name: "fi", id: "core-lower-fi" },
        { letter: "ⲭ", unicode: "ⲭ", name: "khi", id: "core-lower-khi" },
        { letter: "ⲯ", unicode: "ⲯ", name: "psi", id: "core-lower-psi" },
        { letter: "ⲱ", unicode: "ⲱ", name: "oou", id: "core-lower-oou" },
      ],
    },
  ];

  const demoticLetters = [
    { letter: "Ϣ", unicode: "Ϣ", name: "shei upper", id: "demotic-shei-upper" },
    { letter: "ϣ", unicode: "ϣ", name: "shei lower", id: "demotic-shei-lower" },
    { letter: "Ϥ", unicode: "Ϥ", name: "fei upper", id: "demotic-fei-upper" },
    { letter: "ϥ", unicode: "ϥ", name: "fei lower", id: "demotic-fei-lower" },
    { letter: "Ϧ", unicode: "Ϧ", name: "khei upper", id: "demotic-khei-upper" },
    { letter: "ϧ", unicode: "ϧ", name: "khei lower", id: "demotic-khei-lower" },
    { letter: "Ϩ", unicode: "Ϩ", name: "hori upper", id: "demotic-hori-upper" },
    { letter: "ϩ", unicode: "ϩ", name: "hori lower", id: "demotic-hori-lower" },
    {
      letter: "Ϫ",
      unicode: "Ϫ",
      name: "gangia upper",
      id: "demotic-gangia-upper",
    },
    {
      letter: "ϫ",
      unicode: "ϫ",
      name: "gangia lower",
      id: "demotic-gangia-lower",
    },
    {
      letter: "Ϭ",
      unicode: "Ϭ",
      name: "shima upper",
      id: "demotic-shima-upper",
    },
    {
      letter: "ϭ",
      unicode: "ϭ",
      name: "shima lower",
      id: "demotic-shima-lower",
    },
    { letter: "Ϯ", unicode: "Ϯ", name: "dei upper", id: "demotic-dei-upper" },
    { letter: "ϯ", unicode: "ϯ", name: "dei lower", id: "demotic-dei-lower" },
  ];

  const historicLetters = [
    { letter: "Ⲳ", unicode: "Ⲳ", name: "alef upper", id: "hist-alef-upper" },
    { letter: "ⲳ", unicode: "ⲳ", name: "alef lower", id: "hist-alef-lower" },
    { letter: "Ⲵ", unicode: "Ⲵ", name: "ain upper", id: "hist-ain-upper" },
    { letter: "ⲵ", unicode: "ⲵ", name: "ain lower", id: "hist-ain-lower" },
    { letter: "Ⲷ", unicode: "Ⲷ", name: "eie upper", id: "hist-eie-upper" },
    { letter: "ⲷ", unicode: "ⲷ", name: "eie lower", id: "hist-eie-lower" },
    { letter: "Ⲹ", unicode: "Ⲹ", name: "kapa upper", id: "hist-kapa-upper" },
    { letter: "ⲹ", unicode: "ⲹ", name: "kapa lower", id: "hist-kapa-lower" },
    { letter: "Ⲻ", unicode: "Ⲻ", name: "ni upper", id: "hist-ni-upper" },
    { letter: "ⲻ", unicode: "ⲻ", name: "ni lower", id: "hist-ni-lower" },
    {
      letter: "Ⲽ",
      unicode: "Ⲽ",
      name: "crypt ni upper",
      id: "hist-crypt-ni-upper",
    },
    {
      letter: "ⲽ",
      unicode: "ⲽ",
      name: "crypt ni lower",
      id: "hist-crypt-ni-lower",
    },
    { letter: "Ⲿ", unicode: "Ⲿ", name: "oou upper", id: "hist-oou-upper" },
    { letter: "ⲿ", unicode: "ⲿ", name: "oou lower", id: "hist-oou-lower" },
    { letter: "Ⳁ", unicode: "Ⳁ", name: "sampi upper", id: "hist-sampi-upper" },
    { letter: "ⳁ", unicode: "ⳁ", name: "sampi lower", id: "hist-sampi-lower" },
    {
      letter: "Ⳃ",
      unicode: "Ⳃ",
      name: "crossed shei upper",
      id: "hist-cross-shei-upper",
    },
    {
      letter: "ⳃ",
      unicode: "ⳃ",
      name: "crossed shei lower",
      id: "hist-cross-shei-lower",
    },
    {
      letter: "Ⳅ",
      unicode: "Ⳅ",
      name: "old shei upper",
      id: "hist-old-shei-upper",
    },
    {
      letter: "ⳅ",
      unicode: "ⳅ",
      name: "old shei lower",
      id: "hist-old-shei-lower",
    },
    { letter: "Ⳇ", unicode: "Ⳇ", name: "esh upper", id: "hist-esh-upper" },
    { letter: "ⳇ", unicode: "ⳇ", name: "esh lower", id: "hist-esh-lower" },
    { letter: "Ⳉ", unicode: "Ⳉ", name: "khei upper", id: "hist-khei-upper" },
    { letter: "ⳉ", unicode: "ⳉ", name: "khei lower", id: "hist-khei-lower" },
    { letter: "Ⳋ", unicode: "Ⳋ", name: "hori upper", id: "hist-hori-upper" },
    { letter: "ⳋ", unicode: "ⳋ", name: "hori lower", id: "hist-hori-lower" },
    {
      letter: "Ⳍ",
      unicode: "Ⳍ",
      name: "old hori upper",
      id: "hist-old-hori-upper",
    },
    {
      letter: "ⳍ",
      unicode: "ⳍ",
      name: "old hori lower",
      id: "hist-old-hori-lower",
    },
    { letter: "Ⳏ", unicode: "Ⳏ", name: "ha upper", id: "hist-ha-upper" },
    { letter: "ⳏ", unicode: "ⳏ", name: "ha lower", id: "hist-ha-lower" },
    { letter: "Ⳑ", unicode: "Ⳑ", name: "l-ha upper", id: "hist-lha-upper" },
    { letter: "ⳑ", unicode: "ⳑ", name: "l-ha lower", id: "hist-lha-lower" },
    { letter: "Ⳓ", unicode: "Ⳓ", name: "hei upper", id: "hist-hei-upper" },
    { letter: "ⳓ", unicode: "ⳓ", name: "hei lower", id: "hist-hei-lower" },
    { letter: "Ⳕ", unicode: "Ⳕ", name: "hat upper", id: "hist-hat-upper" },
    { letter: "ⳕ", unicode: "ⳕ", name: "hat lower", id: "hist-hat-lower" },
    {
      letter: "Ⳗ",
      unicode: "Ⳗ",
      name: "gangia upper",
      id: "hist-gangia-upper",
    },
    {
      letter: "ⳗ",
      unicode: "ⳗ",
      name: "gangia lower",
      id: "hist-gangia-lower",
    },
    { letter: "Ⳙ", unicode: "Ⳙ", name: "dja upper", id: "hist-dja-upper" },
    { letter: "ⳙ", unicode: "ⳙ", name: "dja lower", id: "hist-dja-lower" },
    { letter: "Ⳛ", unicode: "Ⳛ", name: "shima upper", id: "hist-shima-upper" },
    { letter: "ⳛ", unicode: "ⳛ", name: "shima lower", id: "hist-shima-lower" },
    {
      letter: "Ⳬ",
      unicode: "Ⳬ",
      name: "crypt shei upper",
      id: "hist-crypt-shei-upper",
    },
    {
      letter: "ⳬ",
      unicode: "ⳬ",
      name: "crypt shei lower",
      id: "hist-crypt-shei-lower",
    },
    {
      letter: "Ⳮ",
      unicode: "Ⳮ",
      name: "crypt gangia upper",
      id: "hist-crypt-gangia-upper",
    },
    {
      letter: "ⳮ",
      unicode: "ⳮ",
      name: "crypt gangia lower",
      id: "hist-crypt-gangia-lower",
    },
    {
      letter: "Ⳳ",
      unicode: "Ⳳ",
      name: "bohairic khei upper",
      id: "hist-bohairic-khei-upper",
    },
    {
      letter: "ⳳ",
      unicode: "ⳳ",
      name: "bohairic khei lower",
      id: "hist-bohairic-khei-lower",
    },
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
    { letter: "⳯", unicode: "⳯", name: "ni above", id: "mark-ni-above" },
    { letter: "⳰", unicode: "⳰", name: "asper", id: "mark-asper" },
    { letter: "⳱", unicode: "⳱", name: "lenis", id: "mark-lenis" },
    {
      letter: "⳹",
      unicode: "⳹",
      name: "old nubian stop",
      id: "punct-old-nubian-stop",
    },
    {
      letter: "⳺",
      unicode: "⳺",
      name: "direct question",
      id: "punct-direct-question",
    },
    {
      letter: "⳻",
      unicode: "⳻",
      name: "indirect question",
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
      name: "morph divider",
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

  function createKeys(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach((item) => {
      container.appendChild(createKey(item));
    });
  }

  function createFamilyCards(containerId, groups) {
    const container = document.getElementById(containerId);

    groups.forEach((group) => {
      const col = document.createElement("div");
      col.className = "col-xl-6 col-lg-6 col-md-6";

      const card = document.createElement("div");
      card.className = "card alphabet-card h-100";

      const header = document.createElement("div");
      header.className = "card-header text-center";
      header.innerText = group.title;

      const body = document.createElement("div");
      body.className = "card-body text-center alphabet-grid";

      group.items.forEach((item) => {
        body.appendChild(createKey(item));
      });

      card.appendChild(header);
      card.appendChild(body);
      col.appendChild(card);
      container.appendChild(col);
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

  createFamilyCards("coptic-core-container", coreGroups);
  createKeys("coptic-demotic-container", demoticLetters);
  createKeys("coptic-historic-container", historicLetters);
  createKeys("coptic-symbols-container", symbols);
  createKeys("coptic-marks-container", marksAndPunctuation);
});
