document.addEventListener("DOMContentLoaded", function () {
  const odiaVowels = [
    { letter: "ଅ", unicode: "ଅ", name: "A", id: "vowel-a" },
    { letter: "ଆ", unicode: "ଆ", name: "Aa", id: "vowel-aa" },
    { letter: "ଇ", unicode: "ଇ", name: "I", id: "vowel-i" },
    { letter: "ଈ", unicode: "ଈ", name: "Ii", id: "vowel-ii" },
    { letter: "ଉ", unicode: "ଉ", name: "U", id: "vowel-u" },
    { letter: "ଊ", unicode: "ଊ", name: "Uu", id: "vowel-uu" },
    { letter: "ଋ", unicode: "ଋ", name: "R", id: "vowel-r" },
    { letter: "ୠ", unicode: "ୠ", name: "Rr", id: "vowel-rr" },
    { letter: "ଌ", unicode: "ଌ", name: "L", id: "vowel-l" },
    { letter: "ୡ", unicode: "ୡ", name: "Ll", id: "vowel-ll" },
    { letter: "ଏ", unicode: "ଏ", name: "E", id: "vowel-e" },
    { letter: "ଐ", unicode: "ଐ", name: "Ai", id: "vowel-ai" },
    { letter: "ଓ", unicode: "ଓ", name: "O", id: "vowel-o" },
    { letter: "ଔ", unicode: "ଔ", name: "Au", id: "vowel-au" },
  ];

  const odiaConsonants = [
    { letter: "କ", unicode: "କ", name: "Ka", id: "cons-ka" },
    { letter: "ଖ", unicode: "ଖ", name: "Kha", id: "cons-kha" },
    { letter: "ଗ", unicode: "ଗ", name: "Ga", id: "cons-ga" },
    { letter: "ଘ", unicode: "ଘ", name: "Gha", id: "cons-gha" },
    { letter: "ଙ", unicode: "ଙ", name: "Nga", id: "cons-nga" },

    { letter: "ଚ", unicode: "ଚ", name: "Ca", id: "cons-ca" },
    { letter: "ଛ", unicode: "ଛ", name: "Cha", id: "cons-cha" },
    { letter: "ଜ", unicode: "ଜ", name: "Ja", id: "cons-ja" },
    { letter: "ଝ", unicode: "ଝ", name: "Jha", id: "cons-jha" },
    { letter: "ଞ", unicode: "ଞ", name: "Nya", id: "cons-nya" },

    { letter: "ଟ", unicode: "ଟ", name: "Tta", id: "cons-tta" },
    { letter: "ଠ", unicode: "ଠ", name: "Ttha", id: "cons-ttha" },
    { letter: "ଡ", unicode: "ଡ", name: "Dda", id: "cons-dda" },
    { letter: "ଢ", unicode: "ଢ", name: "Ddha", id: "cons-ddha" },
    { letter: "ଣ", unicode: "ଣ", name: "Nna", id: "cons-nna" },

    { letter: "ତ", unicode: "ତ", name: "Ta", id: "cons-ta" },
    { letter: "ଥ", unicode: "ଥ", name: "Tha", id: "cons-tha" },
    { letter: "ଦ", unicode: "ଦ", name: "Da", id: "cons-da" },
    { letter: "ଧ", unicode: "ଧ", name: "Dha", id: "cons-dha" },
    { letter: "ନ", unicode: "ନ", name: "Na", id: "cons-na" },

    { letter: "ପ", unicode: "ପ", name: "Pa", id: "cons-pa" },
    { letter: "ଫ", unicode: "ଫ", name: "Pha", id: "cons-pha" },
    { letter: "ବ", unicode: "ବ", name: "Ba", id: "cons-ba" },
    { letter: "ଭ", unicode: "ଭ", name: "Bha", id: "cons-bha" },
    { letter: "ମ", unicode: "ମ", name: "Ma", id: "cons-ma" },

    { letter: "ଯ", unicode: "ଯ", name: "Ya", id: "cons-ya" },
    { letter: "ର", unicode: "ର", name: "Ra", id: "cons-ra" },
    { letter: "ଲ", unicode: "ଲ", name: "La", id: "cons-la" },
    { letter: "ଳ", unicode: "ଳ", name: "Lla", id: "cons-lla" },
    { letter: "ୱ", unicode: "ୱ", name: "Wa", id: "cons-wa" },
    { letter: "ଶ", unicode: "ଶ", name: "Sha", id: "cons-sha" },
    { letter: "ଷ", unicode: "ଷ", name: "Ssa", id: "cons-ssa" },
    { letter: "ସ", unicode: "ସ", name: "Sa", id: "cons-sa" },
    { letter: "ହ", unicode: "ହ", name: "Ha", id: "cons-ha" },
  ];

  const odiaExtras = [
    { letter: "ଡ଼", unicode: "ଡ଼", name: "Rra", id: "extra-rra" },
    { letter: "ଢ଼", unicode: "ଢ଼", name: "Rha", id: "extra-rha" },
    { letter: "ୟ", unicode: "ୟ", name: "Yya", id: "extra-yya" },
    { letter: "ଽ", unicode: "ଽ", name: "Avagraha", id: "extra-avagraha" },
    { letter: "କ୍ଷ", unicode: "କ୍ଷ", name: "Ksha", id: "extra-ksha" },
  ];

  const odiaSigns = [
    { letter: "◌ଁ", unicode: "ଁ", name: "Candrabindu", id: "sign-candrabindu" },
    { letter: "◌ଂ", unicode: "ଂ", name: "Anusvara", id: "sign-anusvara" },
    { letter: "◌ଃ", unicode: "ଃ", name: "Visarga", id: "sign-visarga" },
    { letter: "◌ା", unicode: "ା", name: "Aa Sign", id: "sign-aa" },
    { letter: "◌ି", unicode: "ି", name: "I Sign", id: "sign-i" },
    { letter: "◌ୀ", unicode: "ୀ", name: "Ii Sign", id: "sign-ii" },
    { letter: "◌ୁ", unicode: "ୁ", name: "U Sign", id: "sign-u" },
    { letter: "◌ୂ", unicode: "ୂ", name: "Uu Sign", id: "sign-uu" },
    { letter: "◌ୃ", unicode: "ୃ", name: "R Sign", id: "sign-r" },
    { letter: "◌ୄ", unicode: "ୄ", name: "Rr Sign", id: "sign-rr" },
    { letter: "◌ୢ", unicode: "ୢ", name: "L Sign", id: "sign-l" },
    { letter: "◌ୣ", unicode: "ୣ", name: "Ll Sign", id: "sign-ll" },
    { letter: "◌େ", unicode: "େ", name: "E Sign", id: "sign-e" },
    { letter: "◌ୈ", unicode: "ୈ", name: "Ai Sign", id: "sign-ai" },
    { letter: "◌ୋ", unicode: "ୋ", name: "O Sign", id: "sign-o" },
    { letter: "◌ୌ", unicode: "ୌ", name: "Au Sign", id: "sign-au" },
    { letter: "◌୍", unicode: "୍", name: "Virama", id: "sign-virama" },
  ];

  const odiaPunctuation = [
    { letter: "।", unicode: "।", name: "Danda", id: "punct-danda" },
    { letter: "॥", unicode: "॥", name: "Double D", id: "punct-double-danda" },
    { letter: "୐", unicode: "୐", name: "Om", id: "punct-om" },
  ];

  const odiaDigits = [
    { letter: "୦", unicode: "୦", name: "Zero", id: "digit-zero" },
    { letter: "୧", unicode: "୧", name: "One", id: "digit-one" },
    { letter: "୨", unicode: "୨", name: "Two", id: "digit-two" },
    { letter: "୩", unicode: "୩", name: "Three", id: "digit-three" },
    { letter: "୪", unicode: "୪", name: "Four", id: "digit-four" },
    { letter: "୫", unicode: "୫", name: "Five", id: "digit-five" },
    { letter: "୬", unicode: "୬", name: "Six", id: "digit-six" },
    { letter: "୭", unicode: "୭", name: "Seven", id: "digit-seven" },
    { letter: "୮", unicode: "୮", name: "Eight", id: "digit-eight" },
    { letter: "୯", unicode: "୯", name: "Nine", id: "digit-nine" },
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

  createKeys("odia-vowels-container", odiaVowels);
  createKeys("odia-consonants-container", odiaConsonants);
  createKeys("odia-extras-container", odiaExtras);
  createKeys("odia-signs-container", odiaSigns);
  createKeys("odia-punctuation-container", odiaPunctuation);
  createKeys("odia-digits-container", odiaDigits);
});
