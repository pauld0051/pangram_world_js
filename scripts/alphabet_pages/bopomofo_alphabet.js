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
    makeGroup("Initials I", "bpmf", [
      { letter: "ㄅ", name: "b" },
      { letter: "ㄆ", name: "p" },
      { letter: "ㄇ", name: "m" },
      { letter: "ㄈ", name: "f" },
      { letter: "ㄉ", name: "d" },
      { letter: "ㄊ", name: "t" },
      { letter: "ㄋ", name: "n" },
      { letter: "ㄌ", name: "l" },
    ]),
    makeGroup("Initials II", "gkhj", [
      { letter: "ㄍ", name: "g" },
      { letter: "ㄎ", name: "k" },
      { letter: "ㄏ", name: "h" },
      { letter: "ㄐ", name: "j" },
      { letter: "ㄑ", name: "q" },
      { letter: "ㄒ", name: "x" },
      { letter: "ㄓ", name: "zh" },
      { letter: "ㄔ", name: "ch" },
    ]),
    makeGroup("Initials III", "shrsz", [
      { letter: "ㄕ", name: "sh" },
      { letter: "ㄖ", name: "r" },
      { letter: "ㄗ", name: "z" },
      { letter: "ㄘ", name: "c" },
      { letter: "ㄙ", name: "s" },
      { letter: "ㄧ", name: "i" },
      { letter: "ㄨ", name: "u" },
      { letter: "ㄩ", name: "ü" },
    ]),
    makeGroup("Simple Finals", "vowels", [
      { letter: "ㄚ", name: "a" },
      { letter: "ㄛ", name: "o" },
      { letter: "ㄜ", name: "e" },
      { letter: "ㄝ", name: "ê" },
      { letter: "ㄞ", name: "ai" },
      { letter: "ㄟ", name: "ei" },
      { letter: "ㄠ", name: "ao" },
      { letter: "ㄡ", name: "ou" },
    ]),
    makeGroup("Nasal Finals", "finals", [
      { letter: "ㄢ", name: "an" },
      { letter: "ㄣ", name: "en" },
      { letter: "ㄤ", name: "ang" },
      { letter: "ㄥ", name: "eng" },
      { letter: "ㄦ", name: "er" },
    ]),
  ];

  const toneMarks = [
    { letter: "ˉ", unicode: "ˉ", name: "1st tone", id: "tone-1" },
    { letter: "ˊ", unicode: "ˊ", name: "2nd tone", id: "tone-2" },
    { letter: "ˇ", unicode: "ˇ", name: "3rd tone", id: "tone-3" },
    { letter: "ˋ", unicode: "ˋ", name: "4th tone", id: "tone-4" },
    { letter: "˙", unicode: "˙", name: "neutral", id: "tone-5" },
    { letter: "˪", unicode: "˪", name: "extra tone A", id: "tone-extra-a" },
    { letter: "˫", unicode: "˫", name: "extra tone B", id: "tone-extra-b" },
  ];

  const legacySymbols = [
    { letter: "ㄪ", unicode: "ㄪ", name: "v", id: "legacy-v" },
    { letter: "ㄫ", unicode: "ㄫ", name: "ng", id: "legacy-ng" },
    { letter: "ㄬ", unicode: "ㄬ", name: "gn", id: "legacy-gn" },
  ];

  const extendedSymbols = [
    { letter: "ㆠ", unicode: "ㆠ", name: "b", id: "ext-b" },
    { letter: "ㆣ", unicode: "ㆣ", name: "g", id: "ext-g" },
    { letter: "ㆢ", unicode: "ㆢ", name: "ji", id: "ext-ji" },
    { letter: "ㆡ", unicode: "ㆡ", name: "j", id: "ext-j" },
    { letter: "ㆨ", unicode: "ㆨ", name: "ir", id: "ext-ir" },
    { letter: "ㆦ", unicode: "ㆦ", name: "oo", id: "ext-oo" },
    { letter: "ㆤ", unicode: "ㆤ", name: "e", id: "ext-e" },
    { letter: "ㆩ", unicode: "ㆩ", name: "ann", id: "ext-ann" },
    { letter: "ㆧ", unicode: "ㆧ", name: "onn", id: "ext-onn" },
    { letter: "ㆥ", unicode: "ㆥ", name: "enn", id: "ext-enn" },
    { letter: "ㆪ", unicode: "ㆪ", name: "inn", id: "ext-inn-a" },
    { letter: "ㆳ", unicode: "ㆳ", name: "inn var", id: "ext-inn-b" },
    { letter: "ㆫ", unicode: "ㆫ", name: "unn", id: "ext-unn" },
    { letter: "ㆮ", unicode: "ㆮ", name: "ainn", id: "ext-ainn" },
    { letter: "ㆯ", unicode: "ㆯ", name: "aunn", id: "ext-aunn" },
    { letter: "ㆰ", unicode: "ㆰ", name: "am", id: "ext-am" },
    { letter: "ㆱ", unicode: "ㆱ", name: "om", id: "ext-om" },
    { letter: "ㆲ", unicode: "ㆲ", name: "ong", id: "ext-ong" },
    { letter: "ㆬ", unicode: "ㆬ", name: "m", id: "ext-m" },
    { letter: "ㆭ", unicode: "ㆭ", name: "ng", id: "ext-ng" },
    { letter: "ㆴ", unicode: "ㆴ", name: "-p", id: "ext-p-stop" },
    { letter: "ㆵ", unicode: "ㆵ", name: "-t", id: "ext-t-stop" },
    { letter: "ㆶ", unicode: "ㆶ", name: "-k", id: "ext-k-stop" },
    { letter: "ㆻ", unicode: "ㆻ", name: "-k var", id: "ext-k-stop-var" },
    { letter: "ㆷ", unicode: "ㆷ", name: "-h", id: "ext-h-stop" },
    { letter: "ㆼ", unicode: "ㆼ", name: "gw", id: "ext-gw" },
    { letter: "ㆽ", unicode: "ㆽ", name: "kw", id: "ext-kw" },
    { letter: "ㆾ", unicode: "ㆾ", name: "eo", id: "ext-eo" },
    { letter: "ㆿ", unicode: "ㆿ", name: "a", id: "ext-a" },
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
      col.appendChild(card);
      card.appendChild(body);
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

  createFamilyCards("bopomofo-core-container", coreGroups);
  createKeys("bopomofo-tones-container", toneMarks);
  createKeys("bopomofo-legacy-container", legacySymbols);
  createKeys("bopomofo-extended-container", extendedSymbols);
});
