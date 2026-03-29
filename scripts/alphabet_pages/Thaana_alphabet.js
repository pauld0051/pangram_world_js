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
    makeGroup("Core Letters I", "thaana-a", [
      { letter: "ހ", name: "haa" },
      { letter: "ށ", name: "shaviyani" },
      { letter: "ނ", name: "noonu" },
      { letter: "ރ", name: "raa" },
      { letter: "ބ", name: "baa" },
      { letter: "ޅ", name: "lhaviyani" },
      { letter: "ކ", name: "kaafu" },
      { letter: "އ", name: "alifu" },
    ]),
    makeGroup("Core Letters II", "thaana-b", [
      { letter: "ވ", name: "vaavu" },
      { letter: "މ", name: "meemu" },
      { letter: "ފ", name: "faafu" },
      { letter: "ދ", name: "dhaalu" },
      { letter: "ތ", name: "thaa" },
      { letter: "ލ", name: "laamu" },
      { letter: "ގ", name: "gaafu" },
      { letter: "ޏ", name: "gnaviyani" },
    ]),
    makeGroup("Core Letters III", "thaana-c", [
      { letter: "ސ", name: "seenu" },
      { letter: "ޑ", name: "daviyani" },
      { letter: "ޒ", name: "zaviyani" },
      { letter: "ޓ", name: "taviyani" },
      { letter: "ޔ", name: "yaa" },
      { letter: "ޕ", name: "paviyani" },
      { letter: "ޖ", name: "javiyani" },
      { letter: "ޗ", name: "chaviyani" },
    ]),
  ];

  const additionalLetters = [
    { letter: "ޘ", unicode: "ޘ", name: "ttaa", id: "extra-ttaa" },
    { letter: "ޙ", unicode: "ޙ", name: "hhaa", id: "extra-hhaa" },
    { letter: "ޚ", unicode: "ޚ", name: "khaa", id: "extra-khaa" },
    { letter: "ޛ", unicode: "ޛ", name: "thaalu", id: "extra-thaalu" },
    { letter: "ޜ", unicode: "ޜ", name: "zaa", id: "extra-zaa" },
    { letter: "ޝ", unicode: "ޝ", name: "sheenu", id: "extra-sheenu" },
    { letter: "ޞ", unicode: "ޞ", name: "saadhu", id: "extra-saadhu" },
    { letter: "ޟ", unicode: "ޟ", name: "daadhu", id: "extra-daadhu" },
    { letter: "ޠ", unicode: "ޠ", name: "to", id: "extra-to" },
    { letter: "ޡ", unicode: "ޡ", name: "zo", id: "extra-zo" },
    { letter: "ޢ", unicode: "ޢ", name: "ainu", id: "extra-ainu" },
    { letter: "ޣ", unicode: "ޣ", name: "ghainu", id: "extra-ghainu" },
    { letter: "ޤ", unicode: "ޤ", name: "qaafu", id: "extra-qaafu" },
    { letter: "ޥ", unicode: "ޥ", name: "waavu", id: "extra-waavu" },
    { letter: "ޱ", unicode: "ޱ", name: "naa", id: "extra-naa" },
  ];

  const vowelSigns = [
    { letter: "ަ", unicode: "ަ", name: "short a", id: "vowel-a" },
    { letter: "ާ", unicode: "ާ", name: "long aa", id: "vowel-aa" },
    { letter: "ި", unicode: "ި", name: "short i", id: "vowel-i" },
    { letter: "ީ", unicode: "ީ", name: "long ee", id: "vowel-ee" },
    { letter: "ު", unicode: "ު", name: "short u", id: "vowel-u" },
    { letter: "ޫ", unicode: "ޫ", name: "long oo", id: "vowel-oo" },
    { letter: "ެ", unicode: "ެ", name: "short e", id: "vowel-e" },
    { letter: "ޭ", unicode: "ޭ", name: "long ey", id: "vowel-ey" },
    { letter: "ޮ", unicode: "ޮ", name: "short o", id: "vowel-o" },
    { letter: "ޯ", unicode: "ޯ", name: "long oa", id: "vowel-oa" },
    { letter: "ް", unicode: "ް", name: "sukun", id: "vowel-sukun" },
  ];

  const punctuationMarks = [
    { letter: "،", unicode: "،", name: "comma", id: "punct-comma" },
    { letter: "؛", unicode: "؛", name: "semicolon", id: "punct-semicolon" },
    { letter: "؟", unicode: "؟", name: "question mark", id: "punct-question" },
    { letter: ".", unicode: ".", name: "full stop", id: "punct-full-stop" },
    { letter: "!", unicode: "!", name: "exclamation", id: "punct-exclamation" },
    { letter: ":", unicode: ":", name: "colon", id: "punct-colon" },
    { letter: "(", unicode: "(", name: "left parenthesis", id: "punct-lparen" },
    {
      letter: ")",
      unicode: ")",
      name: "right parenthesis",
      id: "punct-rparen",
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

  createFamilyCards("thaana-core-container", coreGroups);
  createKeys("thaana-additional-container", additionalLetters);
  createKeys("thaana-vowels-container", vowelSigns);
  createKeys("thaana-punctuation-container", punctuationMarks);
});
