document.addEventListener("DOMContentLoaded", function () {
  const cherokeeLetters = [
    { letter: "Ꭰ", unicode: "Ꭰ", name: "A", id: "letter-a" },
    { letter: "Ꭱ", unicode: "Ꭱ", name: "E", id: "letter-e" },
    { letter: "Ꭲ", unicode: "Ꭲ", name: "I", id: "letter-i" },
    { letter: "Ꭳ", unicode: "Ꭳ", name: "O", id: "letter-o" },
    { letter: "Ꭴ", unicode: "Ꭴ", name: "U", id: "letter-u" },
    { letter: "Ꭵ", unicode: "Ꭵ", name: "V", id: "letter-v" },
    { letter: "Ꭶ", unicode: "Ꭶ", name: "Ga", id: "letter-ga" },
    { letter: "Ꭷ", unicode: "Ꭷ", name: "Ka", id: "letter-ka" },
    { letter: "Ꭸ", unicode: "Ꭸ", name: "Ge", id: "letter-ge" },
    { letter: "Ꭹ", unicode: "Ꭹ", name: "Gi", id: "letter-gi" },
    { letter: "Ꭺ", unicode: "Ꭺ", name: "Go", id: "letter-go" },
    { letter: "Ꭻ", unicode: "Ꭻ", name: "Gu", id: "letter-gu" },
    { letter: "Ꭼ", unicode: "Ꭼ", name: "Gv", id: "letter-gv" },
    { letter: "Ꭽ", unicode: "Ꭽ", name: "Ha", id: "letter-ha" },
    { letter: "Ꭾ", unicode: "Ꭾ", name: "He", id: "letter-he" },
    { letter: "Ꭿ", unicode: "Ꭿ", name: "Hi", id: "letter-hi" },
    { letter: "Ꮀ", unicode: "Ꮀ", name: "Ho", id: "letter-ho" },
    { letter: "Ꮁ", unicode: "Ꮁ", name: "Hu", id: "letter-hu" },
    { letter: "Ꮂ", unicode: "Ꮂ", name: "Hv", id: "letter-hv" },
    { letter: "Ꮃ", unicode: "Ꮃ", name: "La", id: "letter-la" },
    { letter: "Ꮄ", unicode: "Ꮄ", name: "Le", id: "letter-le" },
    { letter: "Ꮅ", unicode: "Ꮅ", name: "Li", id: "letter-li" },
    { letter: "Ꮆ", unicode: "Ꮆ", name: "Lo", id: "letter-lo" },
    { letter: "Ꮇ", unicode: "Ꮇ", name: "Lu", id: "letter-lu" },
    { letter: "Ꮈ", unicode: "Ꮈ", name: "Lv", id: "letter-lv" },
    { letter: "Ꮉ", unicode: "Ꮉ", name: "Ma", id: "letter-ma" },
    { letter: "Ꮊ", unicode: "Ꮊ", name: "Me", id: "letter-me" },
    { letter: "Ꮋ", unicode: "Ꮋ", name: "Mi", id: "letter-mi" },
    { letter: "Ꮌ", unicode: "Ꮌ", name: "Mo", id: "letter-mo" },
    { letter: "Ꮍ", unicode: "Ꮍ", name: "Mu", id: "letter-mu" },
    { letter: "Ꮎ", unicode: "Ꮎ", name: "Na", id: "letter-na" },
    { letter: "Ꮏ", unicode: "Ꮏ", name: "Hna", id: "letter-hna" },
    { letter: "Ꮐ", unicode: "Ꮐ", name: "Nah", id: "letter-nah" },
    { letter: "Ꮑ", unicode: "Ꮑ", name: "Ne", id: "letter-ne" },
    { letter: "Ꮒ", unicode: "Ꮒ", name: "Ni", id: "letter-ni" },
    { letter: "Ꮓ", unicode: "Ꮓ", name: "No", id: "letter-no" },
    { letter: "Ꮔ", unicode: "Ꮔ", name: "Nu", id: "letter-nu" },
    { letter: "Ꮕ", unicode: "Ꮕ", name: "Nv", id: "letter-nv" },
    { letter: "Ꮖ", unicode: "Ꮖ", name: "Qua", id: "letter-qua" },
    { letter: "Ꮗ", unicode: "Ꮗ", name: "Que", id: "letter-que" },
    { letter: "Ꮘ", unicode: "Ꮘ", name: "Qui", id: "letter-qui" },
    { letter: "Ꮙ", unicode: "Ꮙ", name: "Quo", id: "letter-quo" },
    { letter: "Ꮚ", unicode: "Ꮚ", name: "Quu", id: "letter-quu" },
    { letter: "Ꮛ", unicode: "Ꮛ", name: "Quv", id: "letter-quv" },
    { letter: "Ꮜ", unicode: "Ꮜ", name: "Sa", id: "letter-sa" },
    { letter: "Ꮝ", unicode: "Ꮝ", name: "S", id: "letter-s" },
    { letter: "Ꮞ", unicode: "Ꮞ", name: "Se", id: "letter-se" },
    { letter: "Ꮟ", unicode: "Ꮟ", name: "Si", id: "letter-si" },
    { letter: "Ꮠ", unicode: "Ꮠ", name: "So", id: "letter-so" },
    { letter: "Ꮡ", unicode: "Ꮡ", name: "Su", id: "letter-su" },
    { letter: "Ꮢ", unicode: "Ꮢ", name: "Sv", id: "letter-sv" },
    { letter: "Ꮣ", unicode: "Ꮣ", name: "Da", id: "letter-da" },
    { letter: "Ꮤ", unicode: "Ꮤ", name: "Ta", id: "letter-ta" },
    { letter: "Ꮥ", unicode: "Ꮥ", name: "De", id: "letter-de" },
    { letter: "Ꮦ", unicode: "Ꮦ", name: "Te", id: "letter-te" },
    { letter: "Ꮧ", unicode: "Ꮧ", name: "Di", id: "letter-di" },
    { letter: "Ꮨ", unicode: "Ꮨ", name: "Ti", id: "letter-ti" },
    { letter: "Ꮩ", unicode: "Ꮩ", name: "Do", id: "letter-do" },
    { letter: "Ꮪ", unicode: "Ꮪ", name: "Du", id: "letter-du" },
    { letter: "Ꮫ", unicode: "Ꮫ", name: "Dv", id: "letter-dv" },
    { letter: "Ꮬ", unicode: "Ꮬ", name: "Dla", id: "letter-dla" },
    { letter: "Ꮭ", unicode: "Ꮭ", name: "Tla", id: "letter-tla" },
    { letter: "Ꮮ", unicode: "Ꮮ", name: "Tle", id: "letter-tle" },
    { letter: "Ꮯ", unicode: "Ꮯ", name: "Tli", id: "letter-tli" },
    { letter: "Ꮰ", unicode: "Ꮰ", name: "Tlo", id: "letter-tlo" },
    { letter: "Ꮱ", unicode: "Ꮱ", name: "Tlu", id: "letter-tlu" },
    { letter: "Ꮲ", unicode: "Ꮲ", name: "Tlv", id: "letter-tlv" },
    { letter: "Ꮳ", unicode: "Ꮳ", name: "Tsa", id: "letter-tsa" },
    { letter: "Ꮴ", unicode: "Ꮴ", name: "Tse", id: "letter-tse" },
    { letter: "Ꮵ", unicode: "Ꮵ", name: "Tsi", id: "letter-tsi" },
    { letter: "Ꮶ", unicode: "Ꮶ", name: "Tso", id: "letter-tso" },
    { letter: "Ꮷ", unicode: "Ꮷ", name: "Tsu", id: "letter-tsu" },
    { letter: "Ꮸ", unicode: "Ꮸ", name: "Tsv", id: "letter-tsv" },
    { letter: "Ꮹ", unicode: "Ꮹ", name: "Wa", id: "letter-wa" },
    { letter: "Ꮺ", unicode: "Ꮺ", name: "We", id: "letter-we" },
    { letter: "Ꮻ", unicode: "Ꮻ", name: "Wi", id: "letter-wi" },
    { letter: "Ꮼ", unicode: "Ꮼ", name: "Wo", id: "letter-wo" },
    { letter: "Ꮽ", unicode: "Ꮽ", name: "Wu", id: "letter-wu" },
    { letter: "Ꮾ", unicode: "Ꮾ", name: "Wv", id: "letter-wv" },
    { letter: "Ꮿ", unicode: "Ꮿ", name: "Ya", id: "letter-ya" },
    { letter: "Ᏸ", unicode: "Ᏸ", name: "Ye", id: "letter-ye" },
    { letter: "Ᏹ", unicode: "Ᏹ", name: "Yi", id: "letter-yi" },
    { letter: "Ᏺ", unicode: "Ᏺ", name: "Yo", id: "letter-yo" },
    { letter: "Ᏻ", unicode: "Ᏻ", name: "Yu", id: "letter-yu" },
    { letter: "Ᏼ", unicode: "Ᏼ", name: "Yv", id: "letter-yv" },
    { letter: "Ᏽ", unicode: "Ᏽ", name: "Mv", id: "letter-mv" },
  ];

  const cherokeeSmall = [
    { letter: "ꭰ", unicode: "ꭰ", name: "A", id: "small-a" },
    { letter: "ꭱ", unicode: "ꭱ", name: "E", id: "small-e" },
    { letter: "ꭲ", unicode: "ꭲ", name: "I", id: "small-i" },
    { letter: "ꭳ", unicode: "ꭳ", name: "O", id: "small-o" },
    { letter: "ꭴ", unicode: "ꭴ", name: "U", id: "small-u" },
    { letter: "ꭵ", unicode: "ꭵ", name: "V", id: "small-v" },
    { letter: "ꭶ", unicode: "ꭶ", name: "Ga", id: "small-ga" },
    { letter: "ꭷ", unicode: "ꭷ", name: "Ka", id: "small-ka" },
    { letter: "ꭸ", unicode: "ꭸ", name: "Ge", id: "small-ge" },
    { letter: "ꭹ", unicode: "ꭹ", name: "Gi", id: "small-gi" },
    { letter: "ꭺ", unicode: "ꭺ", name: "Go", id: "small-go" },
    { letter: "ꭻ", unicode: "ꭻ", name: "Gu", id: "small-gu" },
    { letter: "ꭼ", unicode: "ꭼ", name: "Gv", id: "small-gv" },
    { letter: "ꭽ", unicode: "ꭽ", name: "Ha", id: "small-ha" },
    { letter: "ꭾ", unicode: "ꭾ", name: "He", id: "small-he" },
    { letter: "ꭿ", unicode: "ꭿ", name: "Hi", id: "small-hi" },
    { letter: "ꮀ", unicode: "ꮀ", name: "Ho", id: "small-ho" },
    { letter: "ꮁ", unicode: "ꮁ", name: "Hu", id: "small-hu" },
    { letter: "ꮂ", unicode: "ꮂ", name: "Hv", id: "small-hv" },
    { letter: "ꮃ", unicode: "ꮃ", name: "La", id: "small-la" },
    { letter: "ꮄ", unicode: "ꮄ", name: "Le", id: "small-le" },
    { letter: "ꮅ", unicode: "ꮅ", name: "Li", id: "small-li" },
    { letter: "ꮆ", unicode: "ꮆ", name: "Lo", id: "small-lo" },
    { letter: "ꮇ", unicode: "ꮇ", name: "Lu", id: "small-lu" },
    { letter: "ꮈ", unicode: "ꮈ", name: "Lv", id: "small-lv" },
    { letter: "ꮉ", unicode: "ꮉ", name: "Ma", id: "small-ma" },
    { letter: "ꮊ", unicode: "ꮊ", name: "Me", id: "small-me" },
    { letter: "ꮋ", unicode: "ꮋ", name: "Mi", id: "small-mi" },
    { letter: "ꮌ", unicode: "ꮌ", name: "Mo", id: "small-mo" },
    { letter: "ꮍ", unicode: "ꮍ", name: "Mu", id: "small-mu" },
    { letter: "ꮎ", unicode: "ꮎ", name: "Na", id: "small-na" },
    { letter: "ꮏ", unicode: "ꮏ", name: "Hna", id: "small-hna" },
    { letter: "ꮐ", unicode: "ꮐ", name: "Nah", id: "small-nah" },
    { letter: "ꮑ", unicode: "ꮑ", name: "Ne", id: "small-ne" },
    { letter: "ꮒ", unicode: "ꮒ", name: "Ni", id: "small-ni" },
    { letter: "ꮓ", unicode: "ꮓ", name: "No", id: "small-no" },
    { letter: "ꮔ", unicode: "ꮔ", name: "Nu", id: "small-nu" },
    { letter: "ꮕ", unicode: "ꮕ", name: "Nv", id: "small-nv" },
    { letter: "ꮖ", unicode: "ꮖ", name: "Qua", id: "small-qua" },
    { letter: "ꮗ", unicode: "ꮗ", name: "Que", id: "small-que" },
    { letter: "ꮘ", unicode: "ꮘ", name: "Qui", id: "small-qui" },
    { letter: "ꮙ", unicode: "ꮙ", name: "Quo", id: "small-quo" },
    { letter: "ꮚ", unicode: "ꮚ", name: "Quu", id: "small-quu" },
    { letter: "ꮛ", unicode: "ꮛ", name: "Quv", id: "small-quv" },
    { letter: "ꮜ", unicode: "ꮜ", name: "Sa", id: "small-sa" },
    { letter: "ꮝ", unicode: "ꮝ", name: "S", id: "small-s" },
    { letter: "ꮞ", unicode: "ꮞ", name: "Se", id: "small-se" },
    { letter: "ꮟ", unicode: "ꮟ", name: "Si", id: "small-si" },
    { letter: "ꮠ", unicode: "ꮠ", name: "So", id: "small-so" },
    { letter: "ꮡ", unicode: "ꮡ", name: "Su", id: "small-su" },
    { letter: "ꮢ", unicode: "ꮢ", name: "Sv", id: "small-sv" },
    { letter: "ꮣ", unicode: "ꮣ", name: "Da", id: "small-da" },
    { letter: "ꮤ", unicode: "ꮤ", name: "Ta", id: "small-ta" },
    { letter: "ꮥ", unicode: "ꮥ", name: "De", id: "small-de" },
    { letter: "ꮦ", unicode: "ꮦ", name: "Te", id: "small-te" },
    { letter: "ꮧ", unicode: "ꮧ", name: "Di", id: "small-di" },
    { letter: "ꮨ", unicode: "ꮨ", name: "Ti", id: "small-ti" },
    { letter: "ꮩ", unicode: "ꮩ", name: "Do", id: "small-do" },
    { letter: "ꮪ", unicode: "ꮪ", name: "Du", id: "small-du" },
    { letter: "ꮫ", unicode: "ꮫ", name: "Dv", id: "small-dv" },
    { letter: "ꮬ", unicode: "ꮬ", name: "Dla", id: "small-dla" },
    { letter: "ꮭ", unicode: "ꮭ", name: "Tla", id: "small-tla" },
    { letter: "ꮮ", unicode: "ꮮ", name: "Tle", id: "small-tle" },
    { letter: "ꮯ", unicode: "ꮯ", name: "Tli", id: "small-tli" },
    { letter: "ꮰ", unicode: "ꮰ", name: "Tlo", id: "small-tlo" },
    { letter: "ꮱ", unicode: "ꮱ", name: "Tlu", id: "small-tlu" },
    { letter: "ꮲ", unicode: "ꮲ", name: "Tlv", id: "small-tlv" },
    { letter: "ꮳ", unicode: "ꮳ", name: "Tsa", id: "small-tsa" },
    { letter: "ꮴ", unicode: "ꮴ", name: "Tse", id: "small-tse" },
    { letter: "ꮵ", unicode: "ꮵ", name: "Tsi", id: "small-tsi" },
    { letter: "ꮶ", unicode: "ꮶ", name: "Tso", id: "small-tso" },
    { letter: "ꮷ", unicode: "ꮷ", name: "Tsu", id: "small-tsu" },
    { letter: "ꮸ", unicode: "ꮸ", name: "Tsv", id: "small-tsv" },
    { letter: "ꮹ", unicode: "ꮹ", name: "Wa", id: "small-wa" },
    { letter: "ꮺ", unicode: "ꮺ", name: "We", id: "small-we" },
    { letter: "ꮻ", unicode: "ꮻ", name: "Wi", id: "small-wi" },
    { letter: "ꮼ", unicode: "ꮼ", name: "Wo", id: "small-wo" },
    { letter: "ꮽ", unicode: "ꮽ", name: "Wu", id: "small-wu" },
    { letter: "ꮾ", unicode: "ꮾ", name: "Wv", id: "small-wv" },
    { letter: "ꮿ", unicode: "ꮿ", name: "Ya", id: "small-ya" },
    { letter: "ᏸ", unicode: "ᏸ", name: "Ye", id: "small-ye" },
    { letter: "ᏹ", unicode: "ᏹ", name: "Yi", id: "small-yi" },
    { letter: "ᏺ", unicode: "ᏺ", name: "Yo", id: "small-yo" },
    { letter: "ᏻ", unicode: "ᏻ", name: "Yu", id: "small-yu" },
    { letter: "ᏼ", unicode: "ᏼ", name: "Yv", id: "small-yv" },
    { letter: "ᏽ", unicode: "ᏽ", name: "Mv", id: "small-mv" },
  ];

  const cherokeeMarks = [
    { letter: "'", unicode: "'", name: "Apostrophe", id: "mark-apostrophe" },
    { letter: "-", unicode: "-", name: "Hyphen", id: "mark-hyphen" },
    { letter: ",", unicode: ",", name: "Comma", id: "mark-comma" },
    { letter: ".", unicode: ".", name: "Full Stop", id: "mark-period" },
    { letter: ":", unicode: ":", name: "Colon", id: "mark-colon" },
    { letter: ";", unicode: ";", name: "Semicolon", id: "mark-semicolon" },
    { letter: "?", unicode: "?", name: "Question", id: "mark-question" },
    { letter: "!", unicode: "!", name: "Exclamation", id: "mark-exclamation" },
  ];

  const cherokeeExtras = [
    { letter: "“", unicode: "“", name: "Open Quote", id: "extra-open-double" },
    {
      letter: "”",
      unicode: "”",
      name: "Close Quote",
      id: "extra-close-double",
    },
    { letter: "‘", unicode: "‘", name: "Open Single", id: "extra-open-single" },
    {
      letter: "’",
      unicode: "’",
      name: "Close Single",
      id: "extra-close-single",
    },
    { letter: "(", unicode: "(", name: "Open Paren", id: "extra-open-paren" },
    { letter: ")", unicode: ")", name: "Close Paren", id: "extra-close-paren" },
    {
      letter: "[",
      unicode: "[",
      name: "Open Bracket",
      id: "extra-open-bracket",
    },
    {
      letter: "]",
      unicode: "]",
      name: "Close Bracket",
      id: "extra-close-bracket",
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

  createKeys("cherokee-letters-container", cherokeeLetters);
  createKeys("cherokee-small-container", cherokeeSmall);
  createKeys("cherokee-marks-container", cherokeeMarks);
  createKeys("cherokee-extras-container", cherokeeExtras);
});
