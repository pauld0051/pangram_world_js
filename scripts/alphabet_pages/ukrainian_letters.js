document.addEventListener("DOMContentLoaded", function () {
  const ukrainianUppercase = [
    { letter: "А", unicode: "А", name: "A", id: "upper-a" },
    { letter: "Б", unicode: "Б", name: "Be", id: "upper-be" },
    { letter: "В", unicode: "В", name: "Ve", id: "upper-ve" },
    { letter: "Г", unicode: "Г", name: "He", id: "upper-he" },
    { letter: "Ґ", unicode: "Ґ", name: "Ge", id: "upper-ge" },
    { letter: "Д", unicode: "Д", name: "De", id: "upper-de" },
    { letter: "Е", unicode: "Е", name: "E", id: "upper-e" },
    { letter: "Є", unicode: "Є", name: "Ye", id: "upper-ye" },
    { letter: "Ж", unicode: "Ж", name: "Zhe", id: "upper-zhe" },
    { letter: "З", unicode: "З", name: "Ze", id: "upper-ze" },
    { letter: "И", unicode: "И", name: "Y", id: "upper-y" },
    { letter: "І", unicode: "І", name: "I", id: "upper-i" },
    { letter: "Ї", unicode: "Ї", name: "Yi", id: "upper-yi" },
    { letter: "Й", unicode: "Й", name: "Short I", id: "upper-short-i" },
    { letter: "К", unicode: "К", name: "Ka", id: "upper-ka" },
    { letter: "Л", unicode: "Л", name: "El", id: "upper-el" },
    { letter: "М", unicode: "М", name: "Em", id: "upper-em" },
    { letter: "Н", unicode: "Н", name: "En", id: "upper-en" },
    { letter: "О", unicode: "О", name: "O", id: "upper-o" },
    { letter: "П", unicode: "П", name: "Pe", id: "upper-pe" },
    { letter: "Р", unicode: "Р", name: "Er", id: "upper-er" },
    { letter: "С", unicode: "С", name: "Es", id: "upper-es" },
    { letter: "Т", unicode: "Т", name: "Te", id: "upper-te" },
    { letter: "У", unicode: "У", name: "U", id: "upper-u" },
    { letter: "Ф", unicode: "Ф", name: "Ef", id: "upper-ef" },
    { letter: "Х", unicode: "Х", name: "Kha", id: "upper-kha" },
    { letter: "Ц", unicode: "Ц", name: "Tse", id: "upper-tse" },
    { letter: "Ч", unicode: "Ч", name: "Che", id: "upper-che" },
    { letter: "Ш", unicode: "Ш", name: "Sha", id: "upper-sha" },
    { letter: "Щ", unicode: "Щ", name: "Shcha", id: "upper-shcha" },
    { letter: "Ь", unicode: "Ь", name: "Soft Sign", id: "upper-soft-sign" },
    { letter: "Ю", unicode: "Ю", name: "Yu", id: "upper-yu" },
    { letter: "Я", unicode: "Я", name: "Ya", id: "upper-ya" },
  ];

  const ukrainianLowercase = [
    { letter: "а", unicode: "а", name: "a", id: "lower-a" },
    { letter: "б", unicode: "б", name: "be", id: "lower-be" },
    { letter: "в", unicode: "в", name: "ve", id: "lower-ve" },
    { letter: "г", unicode: "г", name: "he", id: "lower-he" },
    { letter: "ґ", unicode: "ґ", name: "ge", id: "lower-ge" },
    { letter: "д", unicode: "д", name: "de", id: "lower-de" },
    { letter: "е", unicode: "е", name: "e", id: "lower-e" },
    { letter: "є", unicode: "є", name: "ye", id: "lower-ye" },
    { letter: "ж", unicode: "ж", name: "zhe", id: "lower-zhe" },
    { letter: "з", unicode: "з", name: "ze", id: "lower-ze" },
    { letter: "и", unicode: "и", name: "y", id: "lower-y" },
    { letter: "і", unicode: "і", name: "i", id: "lower-i" },
    { letter: "ї", unicode: "ї", name: "yi", id: "lower-yi" },
    { letter: "й", unicode: "й", name: "short i", id: "lower-short-i" },
    { letter: "к", unicode: "к", name: "ka", id: "lower-ka" },
    { letter: "л", unicode: "л", name: "el", id: "lower-el" },
    { letter: "м", unicode: "м", name: "em", id: "lower-em" },
    { letter: "н", unicode: "н", name: "en", id: "lower-en" },
    { letter: "о", unicode: "о", name: "o", id: "lower-o" },
    { letter: "п", unicode: "п", name: "pe", id: "lower-pe" },
    { letter: "р", unicode: "р", name: "er", id: "lower-er" },
    { letter: "с", unicode: "с", name: "es", id: "lower-es" },
    { letter: "т", unicode: "т", name: "te", id: "lower-te" },
    { letter: "у", unicode: "у", name: "u", id: "lower-u" },
    { letter: "ф", unicode: "ф", name: "ef", id: "lower-ef" },
    { letter: "х", unicode: "х", name: "kha", id: "lower-kha" },
    { letter: "ц", unicode: "ц", name: "tse", id: "lower-tse" },
    { letter: "ч", unicode: "ч", name: "che", id: "lower-che" },
    { letter: "ш", unicode: "ш", name: "sha", id: "lower-sha" },
    { letter: "щ", unicode: "щ", name: "shcha", id: "lower-shcha" },
    { letter: "ь", unicode: "ь", name: "soft sign", id: "lower-soft-sign" },
    { letter: "ю", unicode: "ю", name: "yu", id: "lower-yu" },
    { letter: "я", unicode: "я", name: "ya", id: "lower-ya" },
  ];

  const ukrainianExtras = [
    { letter: "Ё", unicode: "Ё", name: "Yo", id: "extra-yo-upper" },
    { letter: "ё", unicode: "ё", name: "yo", id: "extra-yo-lower" },
    { letter: "Ы", unicode: "Ы", name: "Yeru", id: "extra-yeru-upper" },
    { letter: "ы", unicode: "ы", name: "yeru", id: "extra-yeru-lower" },
    { letter: "Э", unicode: "Э", name: "E Rev", id: "extra-e-rev-upper" },
    { letter: "э", unicode: "э", name: "e rev", id: "extra-e-rev-lower" },
    {
      letter: "Ъ",
      unicode: "Ъ",
      name: "Hard Sign",
      id: "extra-hard-sign-upper",
    },
    {
      letter: "ъ",
      unicode: "ъ",
      name: "hard sign",
      id: "extra-hard-sign-lower",
    },
    { letter: "Ў", unicode: "Ў", name: "Short U", id: "extra-short-u-upper" },
    { letter: "ў", unicode: "ў", name: "short u", id: "extra-short-u-lower" },
    { letter: "Ј", unicode: "Ј", name: "Je", id: "extra-je-upper" },
    { letter: "ј", unicode: "ј", name: "je", id: "extra-je-lower" },
  ];

  const ukrainianSymbols = [
    {
      letter: "’",
      unicode: "’",
      name: "Apostrophe",
      id: "symbol-apostrophe-curly",
    },
    {
      letter: "'",
      unicode: "'",
      name: "Apostrophe",
      id: "symbol-apostrophe-straight",
    },
    { letter: "₴", unicode: "₴", name: "Hryvnia", id: "symbol-hryvnia" },
    { letter: "№", unicode: "№", name: "Numero", id: "symbol-numero" },
    { letter: "«", unicode: "«", name: "Open Quote", id: "symbol-open-quote" },
    {
      letter: "»",
      unicode: "»",
      name: "Close Quote",
      id: "symbol-close-quote",
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

  createKeys("ukrainian-uppercase-container", ukrainianUppercase);
  createKeys("ukrainian-lowercase-container", ukrainianLowercase);
  createKeys("ukrainian-extras-container", ukrainianExtras);
  createKeys("ukrainian-symbols-container", ukrainianSymbols);
});
