document.addEventListener("DOMContentLoaded", function () {
  const ORDER_SUFFIXES = ["a", "u", "i", "aa", "ee", "e", "o"];

  function makeSevenOrderNames(base) {
    return ORDER_SUFFIXES.map((suffix) => `${base}${suffix}`);
  }

  function makeFamily(title, idPrefix, chars, names) {
    return {
      title,
      idPrefix,
      items: chars.map((char, index) => ({
        letter: char,
        unicode: char,
        name: names[index],
        id: `${idPrefix}-${index + 1}`,
      })),
    };
  }

  const coreFamilies = [
    makeFamily(
      "H Family",
      "fam-h",
      ["ሀ", "ሁ", "ሂ", "ሃ", "ሄ", "ህ", "ሆ"],
      makeSevenOrderNames("h"),
    ),
    makeFamily(
      "L Family",
      "fam-l",
      ["ለ", "ሉ", "ሊ", "ላ", "ሌ", "ል", "ሎ"],
      makeSevenOrderNames("l"),
    ),
    makeFamily(
      "Ḥ Family",
      "fam-hh",
      ["ሐ", "ሑ", "ሒ", "ሓ", "ሔ", "ሕ", "ሖ"],
      ["ḥa", "ḥu", "ḥi", "ḥaa", "ḥee", "ḥe", "ḥo"],
    ),
    makeFamily(
      "M Family",
      "fam-m",
      ["መ", "ሙ", "ሚ", "ማ", "ሜ", "ም", "ሞ"],
      makeSevenOrderNames("m"),
    ),
    makeFamily(
      "Ś Family",
      "fam-ss",
      ["ሠ", "ሡ", "ሢ", "ሣ", "ሤ", "ሥ", "ሦ"],
      ["śa", "śu", "śi", "śaa", "śee", "śe", "śo"],
    ),
    makeFamily(
      "R Family",
      "fam-r",
      ["ረ", "ሩ", "ሪ", "ራ", "ሬ", "ር", "ሮ"],
      makeSevenOrderNames("r"),
    ),
    makeFamily(
      "S Family",
      "fam-s",
      ["ሰ", "ሱ", "ሲ", "ሳ", "ሴ", "ስ", "ሶ"],
      makeSevenOrderNames("s"),
    ),
    makeFamily(
      "Š Family",
      "fam-sh",
      ["ሸ", "ሹ", "ሺ", "ሻ", "ሼ", "ሽ", "ሾ"],
      ["ša", "šu", "ši", "šaa", "šee", "še", "šo"],
    ),
    makeFamily(
      "Q Family",
      "fam-q",
      ["ቀ", "ቁ", "ቂ", "ቃ", "ቄ", "ቅ", "ቆ"],
      makeSevenOrderNames("q"),
    ),
    makeFamily(
      "B Family",
      "fam-b",
      ["በ", "ቡ", "ቢ", "ባ", "ቤ", "ብ", "ቦ"],
      makeSevenOrderNames("b"),
    ),
    makeFamily(
      "V Family",
      "fam-v",
      ["ቨ", "ቩ", "ቪ", "ቫ", "ቬ", "ቭ", "ቮ"],
      makeSevenOrderNames("v"),
    ),
    makeFamily(
      "T Family",
      "fam-t",
      ["ተ", "ቱ", "ቲ", "ታ", "ቴ", "ት", "ቶ"],
      makeSevenOrderNames("t"),
    ),
    makeFamily(
      "Č Family",
      "fam-ch",
      ["ቸ", "ቹ", "ቺ", "ቻ", "ቼ", "ች", "ቾ"],
      ["ča", "ču", "či", "čaa", "čee", "če", "čo"],
    ),
    makeFamily(
      "Ḫ Family",
      "fam-khh",
      ["ኀ", "ኁ", "ኂ", "ኃ", "ኄ", "ኅ", "ኆ"],
      ["ḫa", "ḫu", "ḫi", "ḫaa", "ḫee", "ḫe", "ḫo"],
    ),
    makeFamily(
      "N Family",
      "fam-n",
      ["ነ", "ኑ", "ኒ", "ና", "ኔ", "ን", "ኖ"],
      makeSevenOrderNames("n"),
    ),
    makeFamily(
      "Ñ Family",
      "fam-ny",
      ["ኘ", "ኙ", "ኚ", "ኛ", "ኜ", "ኝ", "ኞ"],
      ["ña", "ñu", "ñi", "ñaa", "ñee", "ñe", "ño"],
    ),
    makeFamily(
      "Glottal Family",
      "fam-glottal",
      ["አ", "ኡ", "ኢ", "ኣ", "ኤ", "እ", "ኦ"],
      ["ʾa", "ʾu", "ʾi", "ʾaa", "ʾee", "ʾe", "ʾo"],
    ),
    makeFamily(
      "K Family",
      "fam-k",
      ["ከ", "ኩ", "ኪ", "ካ", "ኬ", "ክ", "ኮ"],
      makeSevenOrderNames("k"),
    ),
    makeFamily(
      "X Family",
      "fam-x",
      ["ኸ", "ኹ", "ኺ", "ኻ", "ኼ", "ኽ", "ኾ"],
      makeSevenOrderNames("x"),
    ),
    makeFamily(
      "W Family",
      "fam-w",
      ["ወ", "ዉ", "ዊ", "ዋ", "ዌ", "ው", "ዎ"],
      makeSevenOrderNames("w"),
    ),
    makeFamily(
      "ʿ Family",
      "fam-ayn",
      ["ዐ", "ዑ", "ዒ", "ዓ", "ዔ", "ዕ", "ዖ"],
      ["ʿa", "ʿu", "ʿi", "ʿaa", "ʿee", "ʿe", "ʿo"],
    ),
    makeFamily(
      "Z Family",
      "fam-z",
      ["ዘ", "ዙ", "ዚ", "ዛ", "ዜ", "ዝ", "ዞ"],
      makeSevenOrderNames("z"),
    ),
    makeFamily(
      "Ž Family",
      "fam-zh",
      ["ዠ", "ዡ", "ዢ", "ዣ", "ዤ", "ዥ", "ዦ"],
      ["ža", "žu", "ži", "žaa", "žee", "že", "žo"],
    ),
    makeFamily(
      "Y Family",
      "fam-y",
      ["የ", "ዩ", "ዪ", "ያ", "ዬ", "ይ", "ዮ"],
      makeSevenOrderNames("y"),
    ),
    makeFamily(
      "D Family",
      "fam-d",
      ["ደ", "ዱ", "ዲ", "ዳ", "ዴ", "ድ", "ዶ"],
      makeSevenOrderNames("d"),
    ),
    makeFamily(
      "J Family",
      "fam-j",
      ["ጀ", "ጁ", "ጂ", "ጃ", "ጄ", "ጅ", "ጆ"],
      makeSevenOrderNames("j"),
    ),
    makeFamily(
      "G Family",
      "fam-g",
      ["ገ", "ጉ", "ጊ", "ጋ", "ጌ", "ግ", "ጎ"],
      makeSevenOrderNames("g"),
    ),
    makeFamily(
      "Ṭ Family",
      "fam-tt",
      ["ጠ", "ጡ", "ጢ", "ጣ", "ጤ", "ጥ", "ጦ"],
      ["ṭa", "ṭu", "ṭi", "ṭaa", "ṭee", "ṭe", "ṭo"],
    ),
    makeFamily(
      "Ċ Family",
      "fam-cch",
      ["ጨ", "ጩ", "ጪ", "ጫ", "ጬ", "ጭ", "ጮ"],
      ["ċa", "ċu", "ċi", "ċaa", "ċee", "ċe", "ċo"],
    ),
    makeFamily(
      "P̣ Family",
      "fam-ph",
      ["ጰ", "ጱ", "ጲ", "ጳ", "ጴ", "ጵ", "ጶ"],
      ["p̣a", "p̣u", "p̣i", "p̣aa", "p̣ee", "p̣e", "p̣o"],
    ),
    makeFamily(
      "Ṣ Family",
      "fam-ts",
      ["ጸ", "ጹ", "ጺ", "ጻ", "ጼ", "ጽ", "ጾ"],
      ["ṣa", "ṣu", "ṣi", "ṣaa", "ṣee", "ṣe", "ṣo"],
    ),
    makeFamily(
      "Ṡ Family",
      "fam-tz",
      ["ፀ", "ፁ", "ፂ", "ፃ", "ፄ", "ፅ", "ፆ"],
      ["ṡa", "ṡu", "ṡi", "ṡaa", "ṡee", "ṡe", "ṡo"],
    ),
    makeFamily(
      "F Family",
      "fam-f",
      ["ፈ", "ፉ", "ፊ", "ፋ", "ፌ", "ፍ", "ፎ"],
      makeSevenOrderNames("f"),
    ),
    makeFamily(
      "P Family",
      "fam-p",
      ["ፐ", "ፑ", "ፒ", "ፓ", "ፔ", "ፕ", "ፖ"],
      makeSevenOrderNames("p"),
    ),
  ];

  const extraSyllables = [
    { letter: "ሏ", unicode: "ሏ", name: "lwa", id: "extra-lwa" },
    { letter: "ሟ", unicode: "ሟ", name: "mwa", id: "extra-mwa" },
    { letter: "ሯ", unicode: "ሯ", name: "rwa", id: "extra-rwa" },
    { letter: "ሷ", unicode: "ሷ", name: "swa", id: "extra-swa" },
    { letter: "ሿ", unicode: "ሿ", name: "shwa", id: "extra-shwa" },

    { letter: "ቈ", unicode: "ቈ", name: "qwa", id: "extra-qwa" },
    { letter: "ቊ", unicode: "ቊ", name: "qwi", id: "extra-qwi" },
    { letter: "ቋ", unicode: "ቋ", name: "qwaa", id: "extra-qwaa" },
    { letter: "ቌ", unicode: "ቌ", name: "qwee", id: "extra-qwee" },
    { letter: "ቍ", unicode: "ቍ", name: "qwe", id: "extra-qwe" },

    { letter: "ቧ", unicode: "ቧ", name: "bwa", id: "extra-bwa" },
    { letter: "ቷ", unicode: "ቷ", name: "twa", id: "extra-twa" },
    { letter: "ቿ", unicode: "ቿ", name: "chwa", id: "extra-chwa" },

    { letter: "ኈ", unicode: "ኈ", name: "hwa", id: "extra-hwa" },
    { letter: "ኊ", unicode: "ኊ", name: "hwi", id: "extra-hwi" },
    { letter: "ኋ", unicode: "ኋ", name: "hwaa", id: "extra-hwaa" },
    { letter: "ኌ", unicode: "ኌ", name: "hwee", id: "extra-hwee" },
    { letter: "ኍ", unicode: "ኍ", name: "hwe", id: "extra-hwe" },

    { letter: "ኗ", unicode: "ኗ", name: "nwa", id: "extra-nwa" },
    { letter: "ኟ", unicode: "ኟ", name: "nywa", id: "extra-nywa" },
    { letter: "ኧ", unicode: "ኧ", name: "special wa", id: "extra-special-wa" },

    { letter: "ኰ", unicode: "ኰ", name: "kwa", id: "extra-kwa" },
    { letter: "ኲ", unicode: "ኲ", name: "kwi", id: "extra-kwi" },
    { letter: "ኳ", unicode: "ኳ", name: "kwaa", id: "extra-kwaa" },
    { letter: "ኴ", unicode: "ኴ", name: "kwee", id: "extra-kwee" },
    { letter: "ኵ", unicode: "ኵ", name: "kwe", id: "extra-kwe" },

    { letter: "ዟ", unicode: "ዟ", name: "zwa", id: "extra-zwa" },
    { letter: "ዧ", unicode: "ዧ", name: "zhwa", id: "extra-zhwa" },
    { letter: "ዷ", unicode: "ዷ", name: "dwa", id: "extra-dwa" },

    { letter: "ጇ", unicode: "ጇ", name: "jwa", id: "extra-jwa" },

    { letter: "ጐ", unicode: "ጐ", name: "gwa", id: "extra-gwa" },
    { letter: "ጒ", unicode: "ጒ", name: "gwi", id: "extra-gwi" },
    { letter: "ጓ", unicode: "ጓ", name: "gwaa", id: "extra-gwaa" },
    { letter: "ጔ", unicode: "ጔ", name: "gwee", id: "extra-gwee" },
    { letter: "ጕ", unicode: "ጕ", name: "gwe", id: "extra-gwe" },

    { letter: "ጧ", unicode: "ጧ", name: "ṭwa", id: "extra-ttwa" },
    { letter: "ጯ", unicode: "ጯ", name: "ċwa", id: "extra-cchwa" },
    { letter: "ጿ", unicode: "ጿ", name: "ṣwa", id: "extra-tswa" },

    { letter: "ፏ", unicode: "ፏ", name: "fwa", id: "extra-fwa" },
    { letter: "ፗ", unicode: "ፗ", name: "pwa", id: "extra-pwa" },
    { letter: "ፘ", unicode: "ፘ", name: "rya", id: "extra-rya" },
    { letter: "ፙ", unicode: "ፙ", name: "mya", id: "extra-mya" },
    { letter: "ፚ", unicode: "ፚ", name: "fya", id: "extra-fya" },
  ];

  const punctuationMarks = [
    {
      letter: "፠",
      unicode: "፠",
      name: "Section Mark",
      id: "punct-section-mark",
    },
    { letter: "፡", unicode: "፡", name: "Wordspace", id: "punct-wordspace" },
    { letter: "።", unicode: "።", name: "Full Stop", id: "punct-full-stop" },
    { letter: "፣", unicode: "፣", name: "Comma", id: "punct-comma" },
    { letter: "፤", unicode: "፤", name: "Semicolon", id: "punct-semicolon" },
    { letter: "፥", unicode: "፥", name: "Colon", id: "punct-colon" },
    {
      letter: "፦",
      unicode: "፦",
      name: "Preface Colon",
      id: "punct-preface-colon",
    },
    {
      letter: "፧",
      unicode: "፧",
      name: "Question Mark",
      id: "punct-question-mark",
    },
    {
      letter: "፨",
      unicode: "፨",
      name: "Paragraph Separator",
      id: "punct-paragraph-separator",
    },
  ];

  const numerals = [
    { letter: "፩", unicode: "፩", name: "One", id: "num-one" },
    { letter: "፪", unicode: "፪", name: "Two", id: "num-two" },
    { letter: "፫", unicode: "፫", name: "Three", id: "num-three" },
    { letter: "፬", unicode: "፬", name: "Four", id: "num-four" },
    { letter: "፭", unicode: "፭", name: "Five", id: "num-five" },
    { letter: "፮", unicode: "፮", name: "Six", id: "num-six" },
    { letter: "፯", unicode: "፯", name: "Seven", id: "num-seven" },
    { letter: "፰", unicode: "፰", name: "Eight", id: "num-eight" },
    { letter: "፱", unicode: "፱", name: "Nine", id: "num-nine" },
    { letter: "፲", unicode: "፲", name: "Ten", id: "num-ten" },
    { letter: "፳", unicode: "፳", name: "Twenty", id: "num-twenty" },
    { letter: "፴", unicode: "፴", name: "Thirty", id: "num-thirty" },
    { letter: "፵", unicode: "፵", name: "Forty", id: "num-forty" },
    { letter: "፶", unicode: "፶", name: "Fifty", id: "num-fifty" },
    { letter: "፷", unicode: "፷", name: "Sixty", id: "num-sixty" },
    { letter: "፸", unicode: "፸", name: "Seventy", id: "num-seventy" },
    { letter: "፹", unicode: "፹", name: "Eighty", id: "num-eighty" },
    { letter: "፺", unicode: "፺", name: "Ninety", id: "num-ninety" },
    { letter: "፻", unicode: "፻", name: "Hundred", id: "num-hundred" },
    { letter: "፼", unicode: "፼", name: "Ten Thousand", id: "num-ten-thousand" },
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

  function createFamilyCards(containerId, families) {
    const container = document.getElementById(containerId);

    families.forEach((family) => {
      const col = document.createElement("div");
      col.className = "col-xl-3 col-lg-4 col-md-6";

      const card = document.createElement("div");
      card.className = "card alphabet-card h-100";

      const header = document.createElement("div");
      header.className = "card-header text-center";
      header.innerText = family.title;

      const body = document.createElement("div");
      body.className = "card-body text-center alphabet-grid";

      family.items.forEach((item) => {
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

  createFamilyCards("amharic-core-container", coreFamilies);
  createKeys("amharic-extras-container", extraSyllables);
  createKeys("amharic-punctuation-container", punctuationMarks);
  createKeys("amharic-numerals-container", numerals);
});
