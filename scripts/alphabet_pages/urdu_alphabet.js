document.addEventListener("DOMContentLoaded", function () {
  const urduLetters = [
    { letter: "ا", unicode: "ا", name: "Alef", id: "letter-alef" },
    { letter: "آ", unicode: "آ", name: "Alef Madda", id: "letter-alef-madda" },
    { letter: "ب", unicode: "ب", name: "Be", id: "letter-be" },
    { letter: "پ", unicode: "پ", name: "Pe", id: "letter-pe" },
    { letter: "ت", unicode: "ت", name: "Te", id: "letter-te" },
    { letter: "ٹ", unicode: "ٹ", name: "Tte", id: "letter-tte" },
    { letter: "ث", unicode: "ث", name: "Se", id: "letter-se" },
    { letter: "ج", unicode: "ج", name: "Jeem", id: "letter-jeem" },
    { letter: "چ", unicode: "چ", name: "Che", id: "letter-che" },
    { letter: "ح", unicode: "ح", name: "He", id: "letter-he" },
    { letter: "خ", unicode: "خ", name: "Khe", id: "letter-khe" },
    { letter: "د", unicode: "د", name: "Dal", id: "letter-dal" },
    { letter: "ڈ", unicode: "ڈ", name: "Ddal", id: "letter-ddal" },
    { letter: "ذ", unicode: "ذ", name: "Zal", id: "letter-zal" },
    { letter: "ر", unicode: "ر", name: "Re", id: "letter-re" },
    { letter: "ڑ", unicode: "ڑ", name: "Rre", id: "letter-rre" },
    { letter: "ز", unicode: "ز", name: "Ze", id: "letter-ze" },
    { letter: "ژ", unicode: "ژ", name: "Zhe", id: "letter-zhe" },
    { letter: "س", unicode: "س", name: "Seen", id: "letter-seen" },
    { letter: "ش", unicode: "ش", name: "Sheen", id: "letter-sheen" },
    { letter: "ص", unicode: "ص", name: "Swad", id: "letter-swad" },
    { letter: "ض", unicode: "ض", name: "Zwad", id: "letter-zwad" },
    { letter: "ط", unicode: "ط", name: "Toye", id: "letter-toye" },
    { letter: "ظ", unicode: "ظ", name: "Zoye", id: "letter-zoye" },
    { letter: "ع", unicode: "ع", name: "Ain", id: "letter-ain" },
    { letter: "غ", unicode: "غ", name: "Ghain", id: "letter-ghain" },
    { letter: "ف", unicode: "ف", name: "Fe", id: "letter-fe" },
    { letter: "ق", unicode: "ق", name: "Qaf", id: "letter-qaf" },
    { letter: "ک", unicode: "ک", name: "Kaf", id: "letter-kaf" },
    { letter: "گ", unicode: "گ", name: "Gaf", id: "letter-gaf" },
    { letter: "ل", unicode: "ل", name: "Lam", id: "letter-lam" },
    { letter: "م", unicode: "م", name: "Meem", id: "letter-meem" },
    { letter: "ن", unicode: "ن", name: "Noon", id: "letter-noon" },
    {
      letter: "ں",
      unicode: "ں",
      name: "Noon Ghunna",
      id: "letter-noon-ghunna",
    },
    { letter: "و", unicode: "و", name: "Waw", id: "letter-waw" },
    { letter: "ہ", unicode: "ہ", name: "Heh", id: "letter-heh" },
    {
      letter: "ھ",
      unicode: "ھ",
      name: "Do Chashmi He",
      id: "letter-do-chashmi-he",
    },
    { letter: "ء", unicode: "ء", name: "Hamza", id: "letter-hamza" },
    { letter: "ی", unicode: "ی", name: "Choti Ye", id: "letter-choti-ye" },
    { letter: "ے", unicode: "ے", name: "Bari Ye", id: "letter-bari-ye" },
  ];

  const urduExtras = [
    {
      letter: "أ",
      unicode: "أ",
      name: "Alef Hamza",
      id: "extra-alef-hamza-above",
    },
    {
      letter: "إ",
      unicode: "إ",
      name: "Alef Hamza B",
      id: "extra-alef-hamza-below",
    },
    { letter: "ؤ", unicode: "ؤ", name: "Waw Hamza", id: "extra-waw-hamza" },
    { letter: "ئ", unicode: "ئ", name: "Ye Hamza", id: "extra-ye-hamza" },
    { letter: "ۂ", unicode: "ۂ", name: "Heh Hamza", id: "extra-heh-hamza" },
    { letter: "ة", unicode: "ة", name: "Ta Marbuta", id: "extra-ta-marbuta" },
    {
      letter: "ۓ",
      unicode: "ۓ",
      name: "Ye Barree H",
      id: "extra-ye-barree-hamza",
    },
    { letter: "ﻻ", unicode: "ﻻ", name: "Lam Alef", id: "extra-lam-alef" },
  ];

  const urduMarks = [
    { letter: "◌َ", unicode: "َ", name: "Zabar", id: "mark-zabar" },
    { letter: "◌ِ", unicode: "ِ", name: "Zer", id: "mark-zer" },
    { letter: "◌ُ", unicode: "ُ", name: "Pesh", id: "mark-pesh" },
    { letter: "◌ّ", unicode: "ّ", name: "Shadda", id: "mark-shadda" },
    { letter: "◌ْ", unicode: "ْ", name: "Jazm", id: "mark-jazm" },
    { letter: "◌ٰ", unicode: "ٰ", name: "Khari Zabar", id: "mark-khari-zabar" },
    { letter: "◌ٓ", unicode: "ٓ", name: "Madda", id: "mark-madda" },
    { letter: "◌ٔ", unicode: "ٔ", name: "Hamza Above", id: "mark-hamza-above" },
    { letter: "◌ٕ", unicode: "ٕ", name: "Hamza Below", id: "mark-hamza-below" },
  ];

  const urduPunctuation = [
    { letter: "،", unicode: "،", name: "Comma", id: "punct-comma" },
    { letter: "؛", unicode: "؛", name: "Semicolon", id: "punct-semicolon" },
    { letter: "؟", unicode: "؟", name: "Question", id: "punct-question" },
    { letter: "۔", unicode: "۔", name: "Full Stop", id: "punct-full-stop" },
    { letter: "٪", unicode: "٪", name: "Percent", id: "punct-percent" },
    { letter: "٫", unicode: "٫", name: "Decimal", id: "punct-decimal" },
    { letter: "٬", unicode: "٬", name: "Thousands", id: "punct-thousands" },
    { letter: "ـ", unicode: "ـ", name: "Tatweel", id: "punct-tatweel" },
  ];

  const urduDigits = [
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

  createKeys("urdu-letters-container", urduLetters);
  createKeys("urdu-extras-container", urduExtras);
  createKeys("urdu-marks-container", urduMarks);
  createKeys("urdu-punctuation-container", urduPunctuation);
  createKeys("urdu-digits-container", urduDigits);
});
