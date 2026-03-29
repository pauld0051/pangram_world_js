document.addEventListener("DOMContentLoaded", function () {
  const tamilVowels = [
    { letter: "அ", unicode: "அ", name: "A", id: "vowel-a" },
    { letter: "ஆ", unicode: "ஆ", name: "Aa", id: "vowel-aa" },
    { letter: "இ", unicode: "இ", name: "I", id: "vowel-i" },
    { letter: "ஈ", unicode: "ஈ", name: "Ii", id: "vowel-ii" },
    { letter: "உ", unicode: "உ", name: "U", id: "vowel-u" },
    { letter: "ஊ", unicode: "ஊ", name: "Uu", id: "vowel-uu" },
    { letter: "எ", unicode: "எ", name: "E", id: "vowel-e" },
    { letter: "ஏ", unicode: "ஏ", name: "Ee", id: "vowel-ee" },
    { letter: "ஐ", unicode: "ஐ", name: "Ai", id: "vowel-ai" },
    { letter: "ஒ", unicode: "ஒ", name: "O", id: "vowel-o" },
    { letter: "ஓ", unicode: "ஓ", name: "Oo", id: "vowel-oo" },
    { letter: "ஔ", unicode: "ஔ", name: "Au", id: "vowel-au" },
  ];

  const tamilConsonants = [
    { letter: "க", unicode: "க", name: "Ka", id: "cons-ka" },
    { letter: "ங", unicode: "ங", name: "Nga", id: "cons-nga" },
    { letter: "ச", unicode: "ச", name: "Ca", id: "cons-ca" },
    { letter: "ஞ", unicode: "ஞ", name: "Nya", id: "cons-nya" },
    { letter: "ட", unicode: "ட", name: "Tta", id: "cons-tta" },
    { letter: "ண", unicode: "ண", name: "Nna", id: "cons-nna" },
    { letter: "த", unicode: "த", name: "Ta", id: "cons-ta" },
    { letter: "ந", unicode: "ந", name: "Na", id: "cons-na" },
    { letter: "ப", unicode: "ப", name: "Pa", id: "cons-pa" },
    { letter: "ம", unicode: "ம", name: "Ma", id: "cons-ma" },
    { letter: "ய", unicode: "ய", name: "Ya", id: "cons-ya" },
    { letter: "ர", unicode: "ர", name: "Ra", id: "cons-ra" },
    { letter: "ல", unicode: "ல", name: "La", id: "cons-la" },
    { letter: "வ", unicode: "வ", name: "Va", id: "cons-va" },
    { letter: "ழ", unicode: "ழ", name: "Zha", id: "cons-zha" },
    { letter: "ள", unicode: "ள", name: "Lla", id: "cons-lla" },
    { letter: "ற", unicode: "ற", name: "Rra", id: "cons-rra" },
    { letter: "ன", unicode: "ன", name: "Nnna", id: "cons-nnna" },
  ];

  const tamilExtras = [
    { letter: "ஜ", unicode: "ஜ", name: "Ja", id: "extra-ja" },
    { letter: "ஷ", unicode: "ஷ", name: "Sha", id: "extra-sha" },
    { letter: "ஸ", unicode: "ஸ", name: "Sa", id: "extra-sa" },
    { letter: "ஹ", unicode: "ஹ", name: "Ha", id: "extra-ha" },
    { letter: "க்ஷ", unicode: "க்ஷ", name: "Ksha", id: "extra-ksha" },
    { letter: "ஶ", unicode: "ஶ", name: "Ssa", id: "extra-ssa" },
  ];

  const tamilSigns = [
    { letter: "◌ா", unicode: "ா", name: "Aa Sign", id: "sign-aa" },
    { letter: "◌ி", unicode: "ி", name: "I Sign", id: "sign-i" },
    { letter: "◌ீ", unicode: "ீ", name: "Ii Sign", id: "sign-ii" },
    { letter: "◌ு", unicode: "ு", name: "U Sign", id: "sign-u" },
    { letter: "◌ூ", unicode: "ூ", name: "Uu Sign", id: "sign-uu" },
    { letter: "ெ", unicode: "ெ", name: "E Sign", id: "sign-e" },
    { letter: "ே", unicode: "ே", name: "Ee Sign", id: "sign-ee" },
    { letter: "ை", unicode: "ை", name: "Ai Sign", id: "sign-ai" },
    { letter: "ொ", unicode: "ொ", name: "O Sign", id: "sign-o" },
    { letter: "ோ", unicode: "ோ", name: "Oo Sign", id: "sign-oo" },
    { letter: "ௌ", unicode: "ௌ", name: "Au Sign", id: "sign-au" },
    { letter: "◌்", unicode: "்", name: "Pulli", id: "sign-pulli" },
    { letter: "◌ஂ", unicode: "ஂ", name: "Anusvara", id: "sign-anusvara" },
    { letter: "◌ஃ", unicode: "ஃ", name: "Aytham", id: "sign-aytham" },
  ];

  const tamilSymbols = [
    { letter: "௳", unicode: "௳", name: "Day", id: "symbol-day" },
    { letter: "௴", unicode: "௴", name: "Month", id: "symbol-month" },
    { letter: "௵", unicode: "௵", name: "Year", id: "symbol-year" },
    { letter: "௶", unicode: "௶", name: "Debit", id: "symbol-debit" },
    { letter: "௷", unicode: "௷", name: "Credit", id: "symbol-credit" },
    { letter: "௸", unicode: "௸", name: "As Above", id: "symbol-as-above" },
    { letter: "௹", unicode: "௹", name: "Rupee", id: "symbol-rupee" },
    { letter: "௺", unicode: "௺", name: "Number", id: "symbol-number" },
  ];

  const tamilDigits = [
    { letter: "௦", unicode: "௦", name: "Zero", id: "digit-zero" },
    { letter: "௧", unicode: "௧", name: "One", id: "digit-one" },
    { letter: "௨", unicode: "௨", name: "Two", id: "digit-two" },
    { letter: "௩", unicode: "௩", name: "Three", id: "digit-three" },
    { letter: "௪", unicode: "௪", name: "Four", id: "digit-four" },
    { letter: "௫", unicode: "௫", name: "Five", id: "digit-five" },
    { letter: "௬", unicode: "௬", name: "Six", id: "digit-six" },
    { letter: "௭", unicode: "௭", name: "Seven", id: "digit-seven" },
    { letter: "௮", unicode: "௮", name: "Eight", id: "digit-eight" },
    { letter: "௯", unicode: "௯", name: "Nine", id: "digit-nine" },
    { letter: "௰", unicode: "௰", name: "Ten", id: "digit-ten" },
    { letter: "௱", unicode: "௱", name: "Hundred", id: "digit-hundred" },
    { letter: "௲", unicode: "௲", name: "Thousand", id: "digit-thousand" },
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

  createKeys("tamil-vowels-container", tamilVowels);
  createKeys("tamil-consonants-container", tamilConsonants);
  createKeys("tamil-extras-container", tamilExtras);
  createKeys("tamil-signs-container", tamilSigns);
  createKeys("tamil-symbols-container", tamilSymbols);
  createKeys("tamil-digits-container", tamilDigits);
});
