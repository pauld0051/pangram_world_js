document.addEventListener("DOMContentLoaded", function () {
  function makeGroup(title, idPrefix, items) {
    return {
      title,
      idPrefix,
      items: items.map((item, index) => ({
        letter: item.letter,
        unicode: item.letter,
        name: item.name,
        id: `${idPrefix}-${index + 1}`,
      })),
    };
  }

  const coreGroups = [
    makeGroup("Core Letters I", "tif-core-a", [
      { letter: "ⴰ", name: "ya" },
      { letter: "ⴱ", name: "yab" },
      { letter: "ⴲ", name: "yabh" },
      { letter: "ⴳ", name: "yag" },
      { letter: "ⴴ", name: "yaghh" },
      { letter: "ⴶ", name: "yaj" },
      { letter: "ⴷ", name: "yad" },
      { letter: "ⴸ", name: "yadh" },
    ]),
    makeGroup("Core Letters II", "tif-core-b", [
      { letter: "ⴹ", name: "yadd" },
      { letter: "ⴺ", name: "yaddh" },
      { letter: "ⴻ", name: "yey" },
      { letter: "ⴼ", name: "yaf" },
      { letter: "ⴽ", name: "yak" },
      { letter: "ⵀ", name: "yah" },
      { letter: "ⵃ", name: "yahh" },
      { letter: "ⵄ", name: "yaa" },
    ]),
    makeGroup("Core Letters III", "tif-core-c", [
      { letter: "ⵅ", name: "yakh" },
      { letter: "ⵇ", name: "yaq" },
      { letter: "ⵉ", name: "yi" },
      { letter: "ⵊ", name: "yazh" },
      { letter: "ⵍ", name: "yal" },
      { letter: "ⵎ", name: "yam" },
      { letter: "ⵏ", name: "yan" },
      { letter: "ⵒ", name: "yap" },
    ]),
    makeGroup("Core Letters IV", "tif-core-d", [
      { letter: "ⵓ", name: "yu" },
      { letter: "ⵔ", name: "yar" },
      { letter: "ⵕ", name: "yarr" },
      { letter: "ⵖ", name: "yagh" },
      { letter: "ⵙ", name: "yas" },
      { letter: "ⵚ", name: "yass" },
      { letter: "ⵛ", name: "yash" },
      { letter: "ⵜ", name: "yat" },
    ]),
    makeGroup("Core Letters V", "tif-core-e", [
      { letter: "ⵝ", name: "yath" },
      { letter: "ⵞ", name: "yach" },
      { letter: "ⵟ", name: "yatt" },
      { letter: "ⵠ", name: "yav" },
      { letter: "ⵡ", name: "yaw" },
      { letter: "ⵢ", name: "yay" },
      { letter: "ⵣ", name: "yaz" },
      { letter: "ⵥ", name: "yazz" },
    ]),
    makeGroup("Core Vowels and Finals", "tif-core-f", [
      { letter: "ⵦ", name: "ye" },
      { letter: "ⵧ", name: "yo" },
    ]),
  ];

  const extendedLetters = [
    {
      letter: "ⴵ",
      unicode: "ⴵ",
      name: "Berber Academy yaj",
      id: "ext-berber-yaj",
    },
    { letter: "ⴾ", unicode: "ⴾ", name: "Tuareg yak", id: "ext-tuareg-yak" },
    { letter: "ⴿ", unicode: "ⴿ", name: "yakhh", id: "ext-yakhh" },
    {
      letter: "ⵁ",
      unicode: "ⵁ",
      name: "Berber Academy yah",
      id: "ext-berber-yah",
    },
    { letter: "ⵂ", unicode: "ⵂ", name: "Tuareg yah", id: "ext-tuareg-yah" },
    { letter: "ⵆ", unicode: "ⵆ", name: "Tuareg yakh", id: "ext-tuareg-yakh" },
    { letter: "ⵈ", unicode: "ⵈ", name: "Tuareg yaq", id: "ext-tuareg-yaq" },
    { letter: "ⵋ", unicode: "ⵋ", name: "Ahaggar yazh", id: "ext-ahaggar-yazh" },
    { letter: "ⵌ", unicode: "ⵌ", name: "Tuareg yazh", id: "ext-tuareg-yazh" },
    { letter: "ⵐ", unicode: "ⵐ", name: "Tuareg yagn", id: "ext-tuareg-yagn" },
    { letter: "ⵑ", unicode: "ⵑ", name: "Tuareg yang", id: "ext-tuareg-yang" },
    { letter: "ⵗ", unicode: "ⵗ", name: "Tuareg yagh", id: "ext-tuareg-yagh" },
    { letter: "ⵘ", unicode: "ⵘ", name: "Ayer yagh", id: "ext-ayer-yagh" },
    {
      letter: "ⵤ",
      unicode: "ⵤ",
      name: "Tawellemet yaz",
      id: "ext-tawellemet-yaz",
    },
  ];

  const scriptMarks = [
    {
      letter: "ⵯ",
      unicode: "ⵯ",
      name: "labialization mark",
      id: "mark-labialization",
    },
    { letter: "⵰", unicode: "⵰", name: "separator mark", id: "mark-separator" },
    { letter: "⵿", unicode: "⵿", name: "consonant joiner", id: "mark-joiner" },
    { letter: ".", unicode: ".", name: "full stop", id: "punct-full-stop" },
    { letter: ",", unicode: ",", name: "comma", id: "punct-comma" },
    { letter: ":", unicode: ":", name: "colon", id: "punct-colon" },
    { letter: ";", unicode: ";", name: "semicolon", id: "punct-semicolon" },
    { letter: "?", unicode: "?", name: "question mark", id: "punct-question" },
    { letter: "!", unicode: "!", name: "exclamation", id: "punct-exclamation" },
    {
      letter: "«",
      unicode: "«",
      name: "open guillemet",
      id: "punct-open-guillemet",
    },
    {
      letter: "»",
      unicode: "»",
      name: "close guillemet",
      id: "punct-close-guillemet",
    },
    { letter: "…", unicode: "…", name: "ellipsis", id: "punct-ellipsis" },
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
      col.className = "col-xl-4 col-lg-4 col-md-6";

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

  createFamilyCards("tifinagh-core-container", coreGroups);
  createKeys("tifinagh-extended-container", extendedLetters);
  createKeys("tifinagh-marks-container", scriptMarks);
});
