document.addEventListener("DOMContentLoaded", function () {
  const katakanaBasic = [
    { letter: "ア", unicode: "ア", name: "A", id: "basic-a" },
    { letter: "イ", unicode: "イ", name: "I", id: "basic-i" },
    { letter: "ウ", unicode: "ウ", name: "U", id: "basic-u" },
    { letter: "エ", unicode: "エ", name: "E", id: "basic-e" },
    { letter: "オ", unicode: "オ", name: "O", id: "basic-o" },

    { letter: "カ", unicode: "カ", name: "Ka", id: "basic-ka" },
    { letter: "キ", unicode: "キ", name: "Ki", id: "basic-ki" },
    { letter: "ク", unicode: "ク", name: "Ku", id: "basic-ku" },
    { letter: "ケ", unicode: "ケ", name: "Ke", id: "basic-ke" },
    { letter: "コ", unicode: "コ", name: "Ko", id: "basic-ko" },

    { letter: "サ", unicode: "サ", name: "Sa", id: "basic-sa" },
    { letter: "シ", unicode: "シ", name: "Shi", id: "basic-shi" },
    { letter: "ス", unicode: "ス", name: "Su", id: "basic-su" },
    { letter: "セ", unicode: "セ", name: "Se", id: "basic-se" },
    { letter: "ソ", unicode: "ソ", name: "So", id: "basic-so" },

    { letter: "タ", unicode: "タ", name: "Ta", id: "basic-ta" },
    { letter: "チ", unicode: "チ", name: "Chi", id: "basic-chi" },
    { letter: "ツ", unicode: "ツ", name: "Tsu", id: "basic-tsu" },
    { letter: "テ", unicode: "テ", name: "Te", id: "basic-te" },
    { letter: "ト", unicode: "ト", name: "To", id: "basic-to" },

    { letter: "ナ", unicode: "ナ", name: "Na", id: "basic-na" },
    { letter: "ニ", unicode: "ニ", name: "Ni", id: "basic-ni" },
    { letter: "ヌ", unicode: "ヌ", name: "Nu", id: "basic-nu" },
    { letter: "ネ", unicode: "ネ", name: "Ne", id: "basic-ne" },
    { letter: "ノ", unicode: "ノ", name: "No", id: "basic-no" },

    { letter: "ハ", unicode: "ハ", name: "Ha", id: "basic-ha" },
    { letter: "ヒ", unicode: "ヒ", name: "Hi", id: "basic-hi" },
    { letter: "フ", unicode: "フ", name: "Fu", id: "basic-fu" },
    { letter: "ヘ", unicode: "ヘ", name: "He", id: "basic-he" },
    { letter: "ホ", unicode: "ホ", name: "Ho", id: "basic-ho" },

    { letter: "マ", unicode: "マ", name: "Ma", id: "basic-ma" },
    { letter: "ミ", unicode: "ミ", name: "Mi", id: "basic-mi" },
    { letter: "ム", unicode: "ム", name: "Mu", id: "basic-mu" },
    { letter: "メ", unicode: "メ", name: "Me", id: "basic-me" },
    { letter: "モ", unicode: "モ", name: "Mo", id: "basic-mo" },

    { letter: "ヤ", unicode: "ヤ", name: "Ya", id: "basic-ya" },
    { letter: "ユ", unicode: "ユ", name: "Yu", id: "basic-yu" },
    { letter: "ヨ", unicode: "ヨ", name: "Yo", id: "basic-yo" },

    { letter: "ラ", unicode: "ラ", name: "Ra", id: "basic-ra" },
    { letter: "リ", unicode: "リ", name: "Ri", id: "basic-ri" },
    { letter: "ル", unicode: "ル", name: "Ru", id: "basic-ru" },
    { letter: "レ", unicode: "レ", name: "Re", id: "basic-re" },
    { letter: "ロ", unicode: "ロ", name: "Ro", id: "basic-ro" },

    { letter: "ワ", unicode: "ワ", name: "Wa", id: "basic-wa" },
    { letter: "ヲ", unicode: "ヲ", name: "Wo", id: "basic-wo" },
    { letter: "ン", unicode: "ン", name: "N", id: "basic-n" },
  ];

  const katakanaDakuten = [
    { letter: "ガ", unicode: "ガ", name: "Ga", id: "dakuten-ga" },
    { letter: "ギ", unicode: "ギ", name: "Gi", id: "dakuten-gi" },
    { letter: "グ", unicode: "グ", name: "Gu", id: "dakuten-gu" },
    { letter: "ゲ", unicode: "ゲ", name: "Ge", id: "dakuten-ge" },
    { letter: "ゴ", unicode: "ゴ", name: "Go", id: "dakuten-go" },

    { letter: "ザ", unicode: "ザ", name: "Za", id: "dakuten-za" },
    { letter: "ジ", unicode: "ジ", name: "Ji", id: "dakuten-ji" },
    { letter: "ズ", unicode: "ズ", name: "Zu", id: "dakuten-zu" },
    { letter: "ゼ", unicode: "ゼ", name: "Ze", id: "dakuten-ze" },
    { letter: "ゾ", unicode: "ゾ", name: "Zo", id: "dakuten-zo" },

    { letter: "ダ", unicode: "ダ", name: "Da", id: "dakuten-da" },
    { letter: "ヂ", unicode: "ヂ", name: "Di", id: "dakuten-di" },
    { letter: "ヅ", unicode: "ヅ", name: "Du", id: "dakuten-du" },
    { letter: "デ", unicode: "デ", name: "De", id: "dakuten-de" },
    { letter: "ド", unicode: "ド", name: "Do", id: "dakuten-do" },

    { letter: "バ", unicode: "バ", name: "Ba", id: "dakuten-ba" },
    { letter: "ビ", unicode: "ビ", name: "Bi", id: "dakuten-bi" },
    { letter: "ブ", unicode: "ブ", name: "Bu", id: "dakuten-bu" },
    { letter: "ベ", unicode: "ベ", name: "Be", id: "dakuten-be" },
    { letter: "ボ", unicode: "ボ", name: "Bo", id: "dakuten-bo" },

    { letter: "パ", unicode: "パ", name: "Pa", id: "handakuten-pa" },
    { letter: "ピ", unicode: "ピ", name: "Pi", id: "handakuten-pi" },
    { letter: "プ", unicode: "プ", name: "Pu", id: "handakuten-pu" },
    { letter: "ペ", unicode: "ペ", name: "Pe", id: "handakuten-pe" },
    { letter: "ポ", unicode: "ポ", name: "Po", id: "handakuten-po" },
  ];

  const katakanaExtras = [
    { letter: "ァ", unicode: "ァ", name: "Small A", id: "extra-small-a" },
    { letter: "ィ", unicode: "ィ", name: "Small I", id: "extra-small-i" },
    { letter: "ゥ", unicode: "ゥ", name: "Small U", id: "extra-small-u" },
    { letter: "ェ", unicode: "ェ", name: "Small E", id: "extra-small-e" },
    { letter: "ォ", unicode: "ォ", name: "Small O", id: "extra-small-o" },

    { letter: "ッ", unicode: "ッ", name: "Small Tsu", id: "extra-small-tsu" },
    { letter: "ャ", unicode: "ャ", name: "Small Ya", id: "extra-small-ya" },
    { letter: "ュ", unicode: "ュ", name: "Small Yu", id: "extra-small-yu" },
    { letter: "ョ", unicode: "ョ", name: "Small Yo", id: "extra-small-yo" },
    { letter: "ヮ", unicode: "ヮ", name: "Small Wa", id: "extra-small-wa" },

    { letter: "ヰ", unicode: "ヰ", name: "Wi", id: "extra-wi" },
    { letter: "ヱ", unicode: "ヱ", name: "We", id: "extra-we" },
    { letter: "ヴ", unicode: "ヴ", name: "Vu", id: "extra-vu" },
    { letter: "ヵ", unicode: "ヵ", name: "Small Ka", id: "extra-small-ka" },
    { letter: "ヶ", unicode: "ヶ", name: "Small Ke", id: "extra-small-ke" },

    { letter: "ヷ", unicode: "ヷ", name: "Va", id: "extra-va" },
    { letter: "ヸ", unicode: "ヸ", name: "Vi", id: "extra-vi" },
    { letter: "ヹ", unicode: "ヹ", name: "Ve", id: "extra-ve" },
    { letter: "ヺ", unicode: "ヺ", name: "Vo", id: "extra-vo" },
    { letter: "ヿ", unicode: "ヿ", name: "Koto", id: "extra-koto" },

    {
      letter: "ヽ",
      unicode: "ヽ",
      name: "Iteration Mark",
      id: "extra-iteration",
    },
    {
      letter: "ヾ",
      unicode: "ヾ",
      name: "Voiced Iteration",
      id: "extra-voiced-iteration",
    },
    {
      letter: "゛",
      unicode: "゛",
      name: "Dakuten Mark",
      id: "extra-dakuten-mark",
    },
    {
      letter: "゜",
      unicode: "゜",
      name: "Handakuten Mark",
      id: "extra-handakuten-mark",
    },
    {
      letter: "ー",
      unicode: "ー",
      name: "Long Vowel Mark",
      id: "extra-long-vowel",
    },
  ];

  const katakanaPunctuation = [
    { letter: "。", unicode: "。", name: "Full Stop", id: "punct-full-stop" },
    { letter: "、", unicode: "、", name: "Comma", id: "punct-comma" },
    { letter: "「", unicode: "「", name: "Open Quote", id: "punct-open-quote" },
    {
      letter: "」",
      unicode: "」",
      name: "Close Quote",
      id: "punct-close-quote",
    },
    {
      letter: "『",
      unicode: "『",
      name: "Open Double Quote",
      id: "punct-open-double-quote",
    },
    {
      letter: "』",
      unicode: "』",
      name: "Close Double Quote",
      id: "punct-close-double-quote",
    },
    { letter: "・", unicode: "・", name: "Middle Dot", id: "punct-middle-dot" },
    { letter: "〜", unicode: "〜", name: "Wave Dash", id: "punct-wave-dash" },
    {
      letter: "々",
      unicode: "々",
      name: "Iteration Symbol",
      id: "punct-iteration-symbol",
    },
    {
      letter: "？",
      unicode: "？",
      name: "Fullwidth Question Mark",
      id: "punct-question",
    },
    {
      letter: "！",
      unicode: "！",
      name: "Fullwidth Exclamation Mark",
      id: "punct-exclamation",
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

  createKeys("katakana-basic-container", katakanaBasic);
  createKeys("katakana-dakuten-container", katakanaDakuten);
  createKeys("katakana-extras-container", katakanaExtras);
  createKeys("katakana-punctuation-container", katakanaPunctuation);
});
