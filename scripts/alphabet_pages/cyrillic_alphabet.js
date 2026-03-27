document.addEventListener("DOMContentLoaded", function () {
  const cyrillicCapitals = [
    { letter: "А", unicode: "А", name: "A", id: "cap-a" },
    { letter: "Б", unicode: "Б", name: "Be", id: "cap-be" },
    { letter: "В", unicode: "В", name: "Ve", id: "cap-ve" },
    { letter: "Г", unicode: "Г", name: "Ghe", id: "cap-ghe" },
    { letter: "Д", unicode: "Д", name: "De", id: "cap-de" },
    { letter: "Е", unicode: "Е", name: "Ie", id: "cap-ie" },
    { letter: "Ё", unicode: "Ё", name: "Yo", id: "cap-yo" },
    { letter: "Ж", unicode: "Ж", name: "Zhe", id: "cap-zhe" },
    { letter: "З", unicode: "З", name: "Ze", id: "cap-ze" },
    { letter: "И", unicode: "И", name: "I", id: "cap-i" },
    { letter: "Й", unicode: "Й", name: "Short I", id: "cap-short-i" },
    { letter: "К", unicode: "К", name: "Ka", id: "cap-ka" },
    { letter: "Л", unicode: "Л", name: "El", id: "cap-el" },
    { letter: "М", unicode: "М", name: "Em", id: "cap-em" },
    { letter: "Н", unicode: "Н", name: "En", id: "cap-en" },
    { letter: "О", unicode: "О", name: "O", id: "cap-o" },
    { letter: "П", unicode: "П", name: "Pe", id: "cap-pe" },
    { letter: "Р", unicode: "Р", name: "Er", id: "cap-er" },
    { letter: "С", unicode: "С", name: "Es", id: "cap-es" },
    { letter: "Т", unicode: "Т", name: "Te", id: "cap-te" },
    { letter: "У", unicode: "У", name: "U", id: "cap-u" },
    { letter: "Ф", unicode: "Ф", name: "Ef", id: "cap-ef" },
    { letter: "Х", unicode: "Х", name: "Kha", id: "cap-kha" },
    { letter: "Ц", unicode: "Ц", name: "Tse", id: "cap-tse" },
    { letter: "Ч", unicode: "Ч", name: "Che", id: "cap-che" },
    { letter: "Ш", unicode: "Ш", name: "Sha", id: "cap-sha" },
    { letter: "Щ", unicode: "Щ", name: "Shcha", id: "cap-shcha" },
    { letter: "Ъ", unicode: "Ъ", name: "Hard Sign", id: "cap-hard-sign" },
    { letter: "Ы", unicode: "Ы", name: "Yeru", id: "cap-yeru" },
    { letter: "Ь", unicode: "Ь", name: "Soft Sign", id: "cap-soft-sign" },
    { letter: "Э", unicode: "Э", name: "E", id: "cap-e" },
    { letter: "Ю", unicode: "Ю", name: "Yu", id: "cap-yu" },
    { letter: "Я", unicode: "Я", name: "Ya", id: "cap-ya" },
  ];

  const cyrillicLowercase = [
    { letter: "а", unicode: "а", name: "A", id: "low-a" },
    { letter: "б", unicode: "б", name: "Be", id: "low-be" },
    { letter: "в", unicode: "в", name: "Ve", id: "low-ve" },
    { letter: "г", unicode: "г", name: "Ghe", id: "low-ghe" },
    { letter: "д", unicode: "д", name: "De", id: "low-de" },
    { letter: "е", unicode: "е", name: "Ie", id: "low-ie" },
    { letter: "ё", unicode: "ё", name: "Yo", id: "low-yo" },
    { letter: "ж", unicode: "ж", name: "Zhe", id: "low-zhe" },
    { letter: "з", unicode: "з", name: "Ze", id: "low-ze" },
    { letter: "и", unicode: "и", name: "I", id: "low-i" },
    { letter: "й", unicode: "й", name: "Short I", id: "low-short-i" },
    { letter: "к", unicode: "к", name: "Ka", id: "low-ka" },
    { letter: "л", unicode: "л", name: "El", id: "low-el" },
    { letter: "м", unicode: "м", name: "Em", id: "low-em" },
    { letter: "н", unicode: "н", name: "En", id: "low-en" },
    { letter: "о", unicode: "о", name: "O", id: "low-o" },
    { letter: "п", unicode: "п", name: "Pe", id: "low-pe" },
    { letter: "р", unicode: "р", name: "Er", id: "low-er" },
    { letter: "с", unicode: "с", name: "Es", id: "low-es" },
    { letter: "т", unicode: "т", name: "Te", id: "low-te" },
    { letter: "у", unicode: "у", name: "U", id: "low-u" },
    { letter: "ф", unicode: "ф", name: "Ef", id: "low-ef" },
    { letter: "х", unicode: "х", name: "Kha", id: "low-kha" },
    { letter: "ц", unicode: "ц", name: "Tse", id: "low-tse" },
    { letter: "ч", unicode: "ч", name: "Che", id: "low-che" },
    { letter: "ш", unicode: "ш", name: "Sha", id: "low-sha" },
    { letter: "щ", unicode: "щ", name: "Shcha", id: "low-shcha" },
    { letter: "ъ", unicode: "ъ", name: "Hard Sign", id: "low-hard-sign" },
    { letter: "ы", unicode: "ы", name: "Yeru", id: "low-yeru" },
    { letter: "ь", unicode: "ь", name: "Soft Sign", id: "low-soft-sign" },
    { letter: "э", unicode: "э", name: "E", id: "low-e" },
    { letter: "ю", unicode: "ю", name: "Yu", id: "low-yu" },
    { letter: "я", unicode: "я", name: "Ya", id: "low-ya" },
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

  createKeys("cyrillic-capitals-container", cyrillicCapitals);
  createKeys("cyrillic-lowercase-container", cyrillicLowercase);
});
