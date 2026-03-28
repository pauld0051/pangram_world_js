document.addEventListener("DOMContentLoaded", function () {
  const hiraganaBasic = [
    { letter: "あ", unicode: "あ", name: "A", id: "basic-a" },
    { letter: "い", unicode: "い", name: "I", id: "basic-i" },
    { letter: "う", unicode: "う", name: "U", id: "basic-u" },
    { letter: "え", unicode: "え", name: "E", id: "basic-e" },
    { letter: "お", unicode: "お", name: "O", id: "basic-o" },

    { letter: "か", unicode: "か", name: "Ka", id: "basic-ka" },
    { letter: "き", unicode: "き", name: "Ki", id: "basic-ki" },
    { letter: "く", unicode: "く", name: "Ku", id: "basic-ku" },
    { letter: "け", unicode: "け", name: "Ke", id: "basic-ke" },
    { letter: "こ", unicode: "こ", name: "Ko", id: "basic-ko" },

    { letter: "さ", unicode: "さ", name: "Sa", id: "basic-sa" },
    { letter: "し", unicode: "し", name: "Shi", id: "basic-shi" },
    { letter: "す", unicode: "す", name: "Su", id: "basic-su" },
    { letter: "せ", unicode: "せ", name: "Se", id: "basic-se" },
    { letter: "そ", unicode: "そ", name: "So", id: "basic-so" },

    { letter: "た", unicode: "た", name: "Ta", id: "basic-ta" },
    { letter: "ち", unicode: "ち", name: "Chi", id: "basic-chi" },
    { letter: "つ", unicode: "つ", name: "Tsu", id: "basic-tsu" },
    { letter: "て", unicode: "て", name: "Te", id: "basic-te" },
    { letter: "と", unicode: "と", name: "To", id: "basic-to" },

    { letter: "な", unicode: "な", name: "Na", id: "basic-na" },
    { letter: "に", unicode: "に", name: "Ni", id: "basic-ni" },
    { letter: "ぬ", unicode: "ぬ", name: "Nu", id: "basic-nu" },
    { letter: "ね", unicode: "ね", name: "Ne", id: "basic-ne" },
    { letter: "の", unicode: "の", name: "No", id: "basic-no" },

    { letter: "は", unicode: "は", name: "Ha", id: "basic-ha" },
    { letter: "ひ", unicode: "ひ", name: "Hi", id: "basic-hi" },
    { letter: "ふ", unicode: "ふ", name: "Fu", id: "basic-fu" },
    { letter: "へ", unicode: "へ", name: "He", id: "basic-he" },
    { letter: "ほ", unicode: "ほ", name: "Ho", id: "basic-ho" },

    { letter: "ま", unicode: "ま", name: "Ma", id: "basic-ma" },
    { letter: "み", unicode: "み", name: "Mi", id: "basic-mi" },
    { letter: "む", unicode: "む", name: "Mu", id: "basic-mu" },
    { letter: "め", unicode: "め", name: "Me", id: "basic-me" },
    { letter: "も", unicode: "も", name: "Mo", id: "basic-mo" },

    { letter: "や", unicode: "や", name: "Ya", id: "basic-ya" },
    { letter: "ゆ", unicode: "ゆ", name: "Yu", id: "basic-yu" },
    { letter: "よ", unicode: "よ", name: "Yo", id: "basic-yo" },

    { letter: "ら", unicode: "ら", name: "Ra", id: "basic-ra" },
    { letter: "り", unicode: "り", name: "Ri", id: "basic-ri" },
    { letter: "る", unicode: "る", name: "Ru", id: "basic-ru" },
    { letter: "れ", unicode: "れ", name: "Re", id: "basic-re" },
    { letter: "ろ", unicode: "ろ", name: "Ro", id: "basic-ro" },

    { letter: "わ", unicode: "わ", name: "Wa", id: "basic-wa" },
    { letter: "を", unicode: "を", name: "Wo", id: "basic-wo" },
    { letter: "ん", unicode: "ん", name: "N", id: "basic-n" },
  ];

  const hiraganaDakuten = [
    { letter: "が", unicode: "が", name: "Ga", id: "dakuten-ga" },
    { letter: "ぎ", unicode: "ぎ", name: "Gi", id: "dakuten-gi" },
    { letter: "ぐ", unicode: "ぐ", name: "Gu", id: "dakuten-gu" },
    { letter: "げ", unicode: "げ", name: "Ge", id: "dakuten-ge" },
    { letter: "ご", unicode: "ご", name: "Go", id: "dakuten-go" },

    { letter: "ざ", unicode: "ざ", name: "Za", id: "dakuten-za" },
    { letter: "じ", unicode: "じ", name: "Ji", id: "dakuten-ji" },
    { letter: "ず", unicode: "ず", name: "Zu", id: "dakuten-zu" },
    { letter: "ぜ", unicode: "ぜ", name: "Ze", id: "dakuten-ze" },
    { letter: "ぞ", unicode: "ぞ", name: "Zo", id: "dakuten-zo" },

    { letter: "だ", unicode: "だ", name: "Da", id: "dakuten-da" },
    { letter: "ぢ", unicode: "ぢ", name: "Di", id: "dakuten-di" },
    { letter: "づ", unicode: "づ", name: "Du", id: "dakuten-du" },
    { letter: "で", unicode: "で", name: "De", id: "dakuten-de" },
    { letter: "ど", unicode: "ど", name: "Do", id: "dakuten-do" },

    { letter: "ば", unicode: "ば", name: "Ba", id: "dakuten-ba" },
    { letter: "び", unicode: "び", name: "Bi", id: "dakuten-bi" },
    { letter: "ぶ", unicode: "ぶ", name: "Bu", id: "dakuten-bu" },
    { letter: "べ", unicode: "べ", name: "Be", id: "dakuten-be" },
    { letter: "ぼ", unicode: "ぼ", name: "Bo", id: "dakuten-bo" },

    { letter: "ぱ", unicode: "ぱ", name: "Pa", id: "handakuten-pa" },
    { letter: "ぴ", unicode: "ぴ", name: "Pi", id: "handakuten-pi" },
    { letter: "ぷ", unicode: "ぷ", name: "Pu", id: "handakuten-pu" },
    { letter: "ぺ", unicode: "ぺ", name: "Pe", id: "handakuten-pe" },
    { letter: "ぽ", unicode: "ぽ", name: "Po", id: "handakuten-po" },
  ];

  const hiraganaExtras = [
    { letter: "ぁ", unicode: "ぁ", name: "Small A", id: "extra-small-a" },
    { letter: "ぃ", unicode: "ぃ", name: "Small I", id: "extra-small-i" },
    { letter: "ぅ", unicode: "ぅ", name: "Small U", id: "extra-small-u" },
    { letter: "ぇ", unicode: "ぇ", name: "Small E", id: "extra-small-e" },
    { letter: "ぉ", unicode: "ぉ", name: "Small O", id: "extra-small-o" },

    { letter: "っ", unicode: "っ", name: "Small Tsu", id: "extra-small-tsu" },
    { letter: "ゃ", unicode: "ゃ", name: "Small Ya", id: "extra-small-ya" },
    { letter: "ゅ", unicode: "ゅ", name: "Small Yu", id: "extra-small-yu" },
    { letter: "ょ", unicode: "ょ", name: "Small Yo", id: "extra-small-yo" },
    { letter: "ゎ", unicode: "ゎ", name: "Small Wa", id: "extra-small-wa" },

    { letter: "ゐ", unicode: "ゐ", name: "Wi", id: "extra-wi" },
    { letter: "ゑ", unicode: "ゑ", name: "We", id: "extra-we" },
    { letter: "ゔ", unicode: "ゔ", name: "Vu", id: "extra-vu" },
    { letter: "ゕ", unicode: "ゕ", name: "Small Ka", id: "extra-small-ka" },
    { letter: "ゖ", unicode: "ゖ", name: "Small Ke", id: "extra-small-ke" },

    {
      letter: "ゝ",
      unicode: "ゝ",
      name: "Iteration Mark",
      id: "extra-iteration",
    },
    {
      letter: "ゞ",
      unicode: "ゞ",
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

  const hiraganaPunctuation = [
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

  createKeys("hiragana-basic-container", hiraganaBasic);
  createKeys("hiragana-dakuten-container", hiraganaDakuten);
  createKeys("hiragana-extras-container", hiraganaExtras);
  createKeys("hiragana-punctuation-container", hiraganaPunctuation);
});
