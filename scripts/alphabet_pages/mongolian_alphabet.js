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
    makeGroup("Vowels", "vowels", [
      { letter: "ᠠ", name: "a" },
      { letter: "ᠡ", name: "e" },
      { letter: "ᠢ", name: "i" },
      { letter: "ᠣ", name: "o" },
      { letter: "ᠤ", name: "u" },
      { letter: "ᠥ", name: "oe" },
      { letter: "ᠦ", name: "ue" },
      { letter: "ᠧ", name: "ee" },
    ]),
    makeGroup("Core Consonants I", "cons-a", [
      { letter: "ᠨ", name: "n" },
      { letter: "ᠩ", name: "ng" },
      { letter: "ᠪ", name: "b" },
      { letter: "ᠫ", name: "p" },
      { letter: "ᠬ", name: "q" },
      { letter: "ᠭ", name: "g" },
      { letter: "ᠮ", name: "m" },
      { letter: "ᠯ", name: "l" },
    ]),
    makeGroup("Core Consonants II", "cons-b", [
      { letter: "ᠰ", name: "s" },
      { letter: "ᠱ", name: "sh" },
      { letter: "ᠲ", name: "t" },
      { letter: "ᠳ", name: "d" },
      { letter: "ᠴ", name: "ch" },
      { letter: "ᠵ", name: "j" },
      { letter: "ᠶ", name: "y" },
      { letter: "ᠷ", name: "r" },
    ]),
    makeGroup("Core Consonants III", "cons-c", [
      { letter: "ᠸ", name: "w" },
      { letter: "ᠹ", name: "f" },
      { letter: "ᠺ", name: "k" },
      { letter: "ᠻ", name: "kh" },
      { letter: "ᠼ", name: "ts" },
      { letter: "ᠽ", name: "z" },
      { letter: "ᠾ", name: "h" },
    ]),
  ];

  const extendedLetters = [
    { letter: "ᠿ", unicode: "ᠿ", name: "zra", id: "ext-zra" },
    { letter: "ᡀ", unicode: "ᡀ", name: "lha", id: "ext-lha" },
    { letter: "ᡁ", unicode: "ᡁ", name: "zhi", id: "ext-zhi" },
    { letter: "ᡂ", unicode: "ᡂ", name: "chi", id: "ext-chi" },
  ];

  const punctuationMarks = [
    { letter: "᠀", unicode: "᠀", name: "birga", id: "punct-birga" },
    { letter: "᠁", unicode: "᠁", name: "ellipsis", id: "punct-ellipsis" },
    { letter: "᠂", unicode: "᠂", name: "comma", id: "punct-comma" },
    { letter: "᠃", unicode: "᠃", name: "full stop", id: "punct-full-stop" },
    { letter: "᠄", unicode: "᠄", name: "colon", id: "punct-colon" },
    { letter: "᠅", unicode: "᠅", name: "four dots", id: "punct-four-dots" },
  ];

  const digits = [
    { letter: "᠐", unicode: "᠐", name: "zero", id: "digit-zero" },
    { letter: "᠑", unicode: "᠑", name: "one", id: "digit-one" },
    { letter: "᠒", unicode: "᠒", name: "two", id: "digit-two" },
    { letter: "᠓", unicode: "᠓", name: "three", id: "digit-three" },
    { letter: "᠔", unicode: "᠔", name: "four", id: "digit-four" },
    { letter: "᠕", unicode: "᠕", name: "five", id: "digit-five" },
    { letter: "᠖", unicode: "᠖", name: "six", id: "digit-six" },
    { letter: "᠗", unicode: "᠗", name: "seven", id: "digit-seven" },
    { letter: "᠘", unicode: "᠘", name: "eight", id: "digit-eight" },
    { letter: "᠙", unicode: "᠙", name: "nine", id: "digit-nine" },
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
      col.className = "col-xl-3 col-lg-4 col-md-6";

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

  createFamilyCards("mongolian-core-container", coreGroups);
  createKeys("mongolian-extended-container", extendedLetters);
  createKeys("mongolian-punctuation-container", punctuationMarks);
  createKeys("mongolian-digits-container", digits);
});
