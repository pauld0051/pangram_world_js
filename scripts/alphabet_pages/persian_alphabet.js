document.addEventListener("DOMContentLoaded", function () {
  const persianLetters = [
    { letter: "ا", unicode: "ا", name: "Alef", id: "letter-alef" },
    { letter: "ب", unicode: "ب", name: "Be", id: "letter-be" },
    { letter: "پ", unicode: "پ", name: "Pe", id: "letter-pe" },
    { letter: "ت", unicode: "ت", name: "Te", id: "letter-te" },
    { letter: "ث", unicode: "ث", name: "Se", id: "letter-se" },
    { letter: "ج", unicode: "ج", name: "Jim", id: "letter-jim" },
    { letter: "چ", unicode: "چ", name: "Che", id: "letter-che" },
    { letter: "ح", unicode: "ح", name: "He", id: "letter-he" },
    { letter: "خ", unicode: "خ", name: "Khe", id: "letter-khe" },
    { letter: "د", unicode: "د", name: "Dal", id: "letter-dal" },
    { letter: "ذ", unicode: "ذ", name: "Zal", id: "letter-zal" },
    { letter: "ر", unicode: "ر", name: "Re", id: "letter-re" },
    { letter: "ز", unicode: "ز", name: "Ze", id: "letter-ze" },
    { letter: "ژ", unicode: "ژ", name: "Zhe", id: "letter-zhe" },
    { letter: "س", unicode: "س", name: "Sin", id: "letter-sin" },
    { letter: "ش", unicode: "ش", name: "Shin", id: "letter-shin" },
    { letter: "ص", unicode: "ص", name: "Sad", id: "letter-sad" },
    { letter: "ض", unicode: "ض", name: "Zad", id: "letter-zad" },
    { letter: "ط", unicode: "ط", name: "Ta", id: "letter-ta" },
    { letter: "ظ", unicode: "ظ", name: "Za", id: "letter-za" },
    { letter: "ع", unicode: "ع", name: "Ayn", id: "letter-ayn" },
    { letter: "غ", unicode: "غ", name: "Gheyn", id: "letter-gheyn" },
    { letter: "ف", unicode: "ف", name: "Fe", id: "letter-fe" },
    { letter: "ق", unicode: "ق", name: "Qaf", id: "letter-qaf" },
    { letter: "ک", unicode: "ک", name: "Kaf", id: "letter-kaf" },
    { letter: "گ", unicode: "گ", name: "Gaf", id: "letter-gaf" },
    { letter: "ل", unicode: "ل", name: "Lam", id: "letter-lam" },
    { letter: "م", unicode: "م", name: "Mim", id: "letter-mim" },
    { letter: "ن", unicode: "ن", name: "Nun", id: "letter-nun" },
    { letter: "و", unicode: "و", name: "Vav", id: "letter-vav" },
    { letter: "ه", unicode: "ه", name: "Heh", id: "letter-heh" },
    { letter: "ی", unicode: "ی", name: "Ye", id: "letter-ye" },
  ];

  const persianExtras = [
    { letter: "ء", unicode: "ء", name: "Hamza", id: "extra-hamza" },
    { letter: "آ", unicode: "آ", name: "Alef Madda", id: "extra-alef-madda" },
    {
      letter: "أ",
      unicode: "أ",
      name: "Alef Hamza",
      id: "extra-alef-hamza-above",
    },
    {
      letter: "إ",
      unicode: "إ",
      name: "Alef Hamza Below",
      id: "extra-alef-hamza-below",
    },
    { letter: "ؤ", unicode: "ؤ", name: "Vav Hamza", id: "extra-vav-hamza" },
    { letter: "ئ", unicode: "ئ", name: "Ye Hamza", id: "extra-ye-hamza" },
    { letter: "ة", unicode: "ة", name: "Ta Marbuta", id: "extra-ta-marbuta" },
  ];

  const persianMarks = [
    { letter: "،", unicode: "،", name: "Comma", id: "mark-comma" },
    { letter: "؛", unicode: "؛", name: "Semicolon", id: "mark-semicolon" },
    { letter: "؟", unicode: "؟", name: "Question Mark", id: "mark-question" },
    { letter: "٪", unicode: "٪", name: "Percent", id: "mark-percent" },
    { letter: "٫", unicode: "٫", name: "Decimal", id: "mark-decimal" },
    { letter: "٬", unicode: "٬", name: "Thousands", id: "mark-thousands" },
  ];

  const persianDigits = [
    { letter: "۰", unicode: "۰", name: "Zero", id: "digit-zero" },
    { letter: "۱", unicode: "۱", name: "One", id: "digit-one" },
    { letter: "۲", unicode: "۲", name: "Two", id: "digit-two" },
    { letter: "۳", unicode: "۳", name: "Three", id: "digit-three" },
    { letter: "۴", unicode: "۴", name: "Four", id: "digit-four" },
    { letter: "۵", unicode: "۵", name: "Five", id: "digit-five" },
    { letter: "۶", unicode: "۶", name: "Six", id: "digit-six" },
    { letter: "۷", unicode: "۷", name: "Seven", id: "digit-seven" },
    { letter: "۸", unicode: "۸", name: "Eight", id: "digit-eight" },
    { letter: "۹", unicode: "۹", name: "Nine", id: "digit-nine" },
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

  createKeys("persian-letters-container", persianLetters);
  createKeys("persian-extras-container", persianExtras);
  createKeys("persian-marks-container", persianMarks);
  createKeys("persian-digits-container", persianDigits);
});
