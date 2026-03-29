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
    makeGroup("Independent Vowels", "cas-vowels", [
      { letter: "ᐁ", name: "e" },
      { letter: "ᐃ", name: "i" },
      { letter: "ᐄ", name: "ii" },
      { letter: "ᐅ", name: "o" },
      { letter: "ᐆ", name: "oo" },
      { letter: "ᐊ", name: "a" },
      { letter: "ᐋ", name: "aa" },
    ]),
    makeGroup("P Series", "cas-p", [
      { letter: "ᐯ", name: "pe" },
      { letter: "ᐱ", name: "pi" },
      { letter: "ᐲ", name: "pii" },
      { letter: "ᐳ", name: "po" },
      { letter: "ᐴ", name: "poo" },
      { letter: "ᐸ", name: "pa" },
      { letter: "ᐹ", name: "paa" },
    ]),
    makeGroup("T Series", "cas-t", [
      { letter: "ᑌ", name: "te" },
      { letter: "ᑎ", name: "ti" },
      { letter: "ᑏ", name: "tii" },
      { letter: "ᑐ", name: "to" },
      { letter: "ᑑ", name: "too" },
      { letter: "ᑕ", name: "ta" },
      { letter: "ᑖ", name: "taa" },
    ]),
    makeGroup("K Series", "cas-k", [
      { letter: "ᑫ", name: "ke" },
      { letter: "ᑭ", name: "ki" },
      { letter: "ᑮ", name: "kii" },
      { letter: "ᑯ", name: "ko" },
      { letter: "ᑰ", name: "koo" },
      { letter: "ᑲ", name: "ka" },
      { letter: "ᑳ", name: "kaa" },
    ]),
    makeGroup("C Series", "cas-c", [
      { letter: "ᒉ", name: "ce" },
      { letter: "ᒋ", name: "ci" },
      { letter: "ᒌ", name: "cii" },
      { letter: "ᒍ", name: "co" },
      { letter: "ᒎ", name: "coo" },
      { letter: "ᒐ", name: "ca" },
      { letter: "ᒑ", name: "caa" },
    ]),
    makeGroup("M Series", "cas-m", [
      { letter: "ᒣ", name: "me" },
      { letter: "ᒥ", name: "mi" },
      { letter: "ᒦ", name: "mii" },
      { letter: "ᒧ", name: "mo" },
      { letter: "ᒨ", name: "moo" },
      { letter: "ᒪ", name: "ma" },
      { letter: "ᒫ", name: "maa" },
    ]),
    makeGroup("N Series", "cas-n", [
      { letter: "ᓀ", name: "ne" },
      { letter: "ᓂ", name: "ni" },
      { letter: "ᓃ", name: "nii" },
      { letter: "ᓄ", name: "no" },
      { letter: "ᓅ", name: "noo" },
      { letter: "ᓇ", name: "na" },
      { letter: "ᓈ", name: "naa" },
    ]),
    makeGroup("S Series", "cas-s", [
      { letter: "ᓭ", name: "se" },
      { letter: "ᓯ", name: "si" },
      { letter: "ᓰ", name: "sii" },
      { letter: "ᓱ", name: "so" },
      { letter: "ᓲ", name: "soo" },
      { letter: "ᓴ", name: "sa" },
      { letter: "ᓵ", name: "saa" },
    ]),
    makeGroup("Y Series", "cas-y", [
      { letter: "ᔦ", name: "ye" },
      { letter: "ᔨ", name: "yi" },
      { letter: "ᔩ", name: "yii" },
      { letter: "ᔪ", name: "yo" },
      { letter: "ᔫ", name: "yoo" },
      { letter: "ᔭ", name: "ya" },
      { letter: "ᔮ", name: "yaa" },
    ]),
  ];

  const finalsAndSigns = [
    { letter: "ᑊ", unicode: "ᑊ", name: "west-cree p", id: "final-p" },
    { letter: "ᐟ", unicode: "ᐟ", name: "final acute", id: "final-acute" },
    { letter: "ᐠ", unicode: "ᐠ", name: "final grave", id: "final-grave" },
    {
      letter: "ᐨ",
      unicode: "ᐨ",
      name: "final short stroke",
      id: "final-short-stroke",
    },
    { letter: "ᒼ", unicode: "ᒼ", name: "west-cree m", id: "final-m" },
    { letter: "ᐣ", unicode: "ᐣ", name: "final right half ring", id: "final-n" },
    { letter: "ᐢ", unicode: "ᐢ", name: "final top half ring", id: "final-s" },
    { letter: "ᐩ", unicode: "ᐩ", name: "final plus", id: "final-y" },
    { letter: "ᐤ", unicode: "ᐤ", name: "final ring", id: "final-w" },
    { letter: "ᓫ", unicode: "ᓫ", name: "west-cree l", id: "final-l" },
    { letter: "ᕐ", unicode: "ᕐ", name: "r", id: "final-r" },
    { letter: "ᕑ", unicode: "ᕑ", name: "west-cree r", id: "final-west-cree-r" },
    { letter: "ᕽ", unicode: "ᕽ", name: "hk", id: "final-hk" },
    { letter: "ᙾ", unicode: "ᙾ", name: "woods-cree final th", id: "final-th" },
    { letter: "ᙿ", unicode: "ᙿ", name: "blackfoot w", id: "final-blackfoot-w" },
  ];

  const punctuationMarks = [
    { letter: "᙮", unicode: "᙮", name: "full stop", id: "punct-full-stop" },
    { letter: "᙭", unicode: "᙭", name: "chi sign", id: "punct-chi-sign" },
    {
      letter: ".",
      unicode: ".",
      name: "full stop",
      id: "punct-western-full-stop",
    },
    { letter: ",", unicode: ",", name: "comma", id: "punct-western-comma" },
    {
      letter: ";",
      unicode: ";",
      name: "semicolon",
      id: "punct-western-semicolon",
    },
    { letter: ":", unicode: ":", name: "colon", id: "punct-western-colon" },
    {
      letter: "?",
      unicode: "?",
      name: "question mark",
      id: "punct-western-question",
    },
    {
      letter: "!",
      unicode: "!",
      name: "exclamation",
      id: "punct-western-exclamation",
    },
  ];

  const extendedGroups = [
    makeGroup("Moose Cree", "cas-ext-moose", [
      { letter: "ᢰ", name: "oy" },
      { letter: "ᢱ", name: "ay" },
      { letter: "ᢲ", name: "aay" },
      { letter: "ᢳ", name: "way" },
      { letter: "ᢴ", name: "poy" },
      { letter: "ᢵ", name: "pay" },
      { letter: "ᢶ", name: "pwoy" },
      { letter: "ᢷ", name: "tay" },
      { letter: "ᢸ", name: "kay" },
      { letter: "ᢹ", name: "kway" },
      { letter: "ᢺ", name: "may" },
      { letter: "ᢻ", name: "noy" },
      { letter: "ᢼ", name: "nay" },
      { letter: "ᢽ", name: "lay" },
      { letter: "ᢾ", name: "soy" },
      { letter: "ᢿ", name: "say" },
      { letter: "ᣀ", name: "shoy" },
      { letter: "ᣁ", name: "shay" },
      { letter: "ᣂ", name: "shwoy" },
      { letter: "ᣃ", name: "yoy" },
      { letter: "ᣄ", name: "yay" },
      { letter: "ᣅ", name: "ray" },
    ]),
    makeGroup("Cree and Ojibway", "cas-ext-cree", [
      { letter: "ᣆ", name: "nwi" },
      { letter: "ᣇ", name: "ojibway nwi" },
      { letter: "ᣈ", name: "nwii" },
      { letter: "ᣉ", name: "ojibway nwii" },
      { letter: "ᣊ", name: "nwo" },
      { letter: "ᣋ", name: "ojibway nwo" },
      { letter: "ᣌ", name: "nwoo" },
      { letter: "ᣍ", name: "ojibway nwoo" },
      { letter: "ᣎ", name: "rwee" },
      { letter: "ᣏ", name: "rwi" },
      { letter: "ᣐ", name: "rwii" },
      { letter: "ᣑ", name: "rwo" },
      { letter: "ᣒ", name: "rwoo" },
      { letter: "ᣓ", name: "rwa" },
      { letter: "ᣔ", name: "ojibway p" },
      { letter: "ᣕ", name: "ojibway t" },
      { letter: "ᣖ", name: "ojibway k" },
      { letter: "ᣗ", name: "ojibway c" },
      { letter: "ᣘ", name: "ojibway m" },
      { letter: "ᣙ", name: "ojibway n" },
      { letter: "ᣚ", name: "ojibway s" },
      { letter: "ᣛ", name: "ojibway sh" },
      { letter: "ᣜ", name: "eastern w" },
      { letter: "ᣝ", name: "western w" },
      { letter: "ᣞ", name: "final small ring" },
      { letter: "ᣟ", name: "final raised dot" },
    ]),
    makeGroup("Dene and Carrier", "cas-ext-dene", [
      { letter: "ᣠ", name: "r-cree rwe" },
      { letter: "ᣡ", name: "west-cree loo" },
      { letter: "ᣢ", name: "west-cree laa" },
      { letter: "ᣣ", name: "thwe" },
      { letter: "ᣤ", name: "thwa" },
      { letter: "ᣥ", name: "tthwe" },
      { letter: "ᣦ", name: "tthoo" },
      { letter: "ᣧ", name: "tthaa" },
      { letter: "ᣨ", name: "tlhwe" },
      { letter: "ᣩ", name: "tlhoo" },
      { letter: "ᣪ", name: "sayisi shwe" },
      { letter: "ᣫ", name: "sayisi shoo" },
      { letter: "ᣬ", name: "sayisi hoo" },
      { letter: "ᣭ", name: "carrier gwu" },
      { letter: "ᣮ", name: "carrier dene gee" },
      { letter: "ᣯ", name: "carrier gaa" },
      { letter: "ᣰ", name: "carrier gwa" },
      { letter: "ᣱ", name: "sayisi juu" },
      { letter: "ᣲ", name: "carrier jwa" },
      { letter: "ᣳ", name: "beaver dene l" },
      { letter: "ᣴ", name: "beaver dene r" },
      { letter: "ᣵ", name: "carrier dental s" },
    ]),
  ];

  const extendedAGroups = [
    makeGroup("Nattilik", "cas-exta-nattilik", [
      { letter: "𑪰", name: "nattilik hi" },
      { letter: "𑪱", name: "nattilik hii" },
      { letter: "𑪲", name: "nattilik ho" },
      { letter: "𑪳", name: "nattilik hoo" },
      { letter: "𑪴", name: "nattilik ha" },
      { letter: "𑪵", name: "nattilik haa" },
      { letter: "𑪶", name: "nattilik shri" },
      { letter: "𑪷", name: "nattilik shrii" },
      { letter: "𑪸", name: "nattilik shro" },
      { letter: "𑪹", name: "nattilik shroo" },
      { letter: "𑪺", name: "nattilik shra" },
      { letter: "𑪻", name: "nattilik shraa" },
    ]),
    makeGroup("Historic Cree and Ojibway", "cas-exta-historic", [
      { letter: "𑪼", name: "spe" },
      { letter: "𑪽", name: "spi" },
      { letter: "𑪾", name: "spo" },
      { letter: "𑪿", name: "spa" },
    ]),
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
      col.className = "col-xl-4 col-lg-6 col-md-6";

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

  createFamilyCards("cas-core-container", coreGroups);
  createKeys("cas-finals-container", finalsAndSigns);
  createKeys("cas-punctuation-container", punctuationMarks);
  createFamilyCards("cas-extended-container", extendedGroups);
  createFamilyCards("cas-extended-a-container", extendedAGroups);
});
