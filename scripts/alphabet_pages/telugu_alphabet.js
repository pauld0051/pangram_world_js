document.addEventListener("DOMContentLoaded", function () {
  const teluguVowels = [
    { letter: "అ", unicode: "అ", name: "A", id: "vowel-a" },
    { letter: "ఆ", unicode: "ఆ", name: "Aa", id: "vowel-aa" },
    { letter: "ఇ", unicode: "ఇ", name: "I", id: "vowel-i" },
    { letter: "ఈ", unicode: "ఈ", name: "Ii", id: "vowel-ii" },
    { letter: "ఉ", unicode: "ఉ", name: "U", id: "vowel-u" },
    { letter: "ఊ", unicode: "ఊ", name: "Uu", id: "vowel-uu" },
    { letter: "ఋ", unicode: "ఋ", name: "R", id: "vowel-r" },
    { letter: "ౠ", unicode: "ౠ", name: "Rr", id: "vowel-rr" },
    { letter: "ఌ", unicode: "ఌ", name: "L", id: "vowel-l" },
    { letter: "ౡ", unicode: "ౡ", name: "Ll", id: "vowel-ll" },
    { letter: "ఎ", unicode: "ఎ", name: "E", id: "vowel-e" },
    { letter: "ఏ", unicode: "ఏ", name: "Ee", id: "vowel-ee" },
    { letter: "ఐ", unicode: "ఐ", name: "Ai", id: "vowel-ai" },
    { letter: "ఒ", unicode: "ఒ", name: "O", id: "vowel-o" },
    { letter: "ఓ", unicode: "ఓ", name: "Oo", id: "vowel-oo" },
    { letter: "ఔ", unicode: "ఔ", name: "Au", id: "vowel-au" },
  ];

  const teluguConsonants = [
    { letter: "క", unicode: "క", name: "Ka", id: "cons-ka" },
    { letter: "ఖ", unicode: "ఖ", name: "Kha", id: "cons-kha" },
    { letter: "గ", unicode: "గ", name: "Ga", id: "cons-ga" },
    { letter: "ఘ", unicode: "ఘ", name: "Gha", id: "cons-gha" },
    { letter: "ఙ", unicode: "ఙ", name: "Nga", id: "cons-nga" },

    { letter: "చ", unicode: "చ", name: "Ca", id: "cons-ca" },
    { letter: "ఛ", unicode: "ఛ", name: "Cha", id: "cons-cha" },
    { letter: "జ", unicode: "జ", name: "Ja", id: "cons-ja" },
    { letter: "ఝ", unicode: "ఝ", name: "Jha", id: "cons-jha" },
    { letter: "ఞ", unicode: "ఞ", name: "Nya", id: "cons-nya" },

    { letter: "ట", unicode: "ట", name: "Tta", id: "cons-tta" },
    { letter: "ఠ", unicode: "ఠ", name: "Ttha", id: "cons-ttha" },
    { letter: "డ", unicode: "డ", name: "Dda", id: "cons-dda" },
    { letter: "ఢ", unicode: "ఢ", name: "Ddha", id: "cons-ddha" },
    { letter: "ణ", unicode: "ణ", name: "Nna", id: "cons-nna" },

    { letter: "త", unicode: "త", name: "Ta", id: "cons-ta" },
    { letter: "థ", unicode: "థ", name: "Tha", id: "cons-tha" },
    { letter: "ద", unicode: "ద", name: "Da", id: "cons-da" },
    { letter: "ధ", unicode: "ధ", name: "Dha", id: "cons-dha" },
    { letter: "న", unicode: "న", name: "Na", id: "cons-na" },

    { letter: "ప", unicode: "ప", name: "Pa", id: "cons-pa" },
    { letter: "ఫ", unicode: "ఫ", name: "Pha", id: "cons-pha" },
    { letter: "బ", unicode: "బ", name: "Ba", id: "cons-ba" },
    { letter: "భ", unicode: "భ", name: "Bha", id: "cons-bha" },
    { letter: "మ", unicode: "మ", name: "Ma", id: "cons-ma" },

    { letter: "య", unicode: "య", name: "Ya", id: "cons-ya" },
    { letter: "ర", unicode: "ర", name: "Ra", id: "cons-ra" },
    { letter: "ల", unicode: "ల", name: "La", id: "cons-la" },
    { letter: "వ", unicode: "వ", name: "Va", id: "cons-va" },

    { letter: "శ", unicode: "శ", name: "Sha", id: "cons-sha" },
    { letter: "ష", unicode: "ష", name: "Ssa", id: "cons-ssa" },
    { letter: "స", unicode: "స", name: "Sa", id: "cons-sa" },
    { letter: "హ", unicode: "హ", name: "Ha", id: "cons-ha" },
    { letter: "ళ", unicode: "ళ", name: "Lla", id: "cons-lla" },
    { letter: "క్ష", unicode: "క్ష", name: "Ksha", id: "cons-ksha" },
    { letter: "ఱ", unicode: "ఱ", name: "Rra", id: "cons-rra" },
  ];

  const teluguExtras = [
    { letter: "ఴ", unicode: "ఴ", name: "Llla", id: "extra-llla" },
    { letter: "ౘ", unicode: "ౘ", name: "Tsa", id: "extra-tsa" },
    { letter: "ౙ", unicode: "ౙ", name: "Dza", id: "extra-dza" },
    { letter: "ౚ", unicode: "ౚ", name: "Rrra", id: "extra-rrra" },
    { letter: "ఽ", unicode: "ఽ", name: "Avagraha", id: "extra-avagraha" },
  ];

  const teluguSigns = [
    { letter: "◌ా", unicode: "ా", name: "Aa Sign", id: "sign-aa" },
    { letter: "◌ి", unicode: "ి", name: "I Sign", id: "sign-i" },
    { letter: "◌ీ", unicode: "ీ", name: "Ii Sign", id: "sign-ii" },
    { letter: "◌ు", unicode: "ు", name: "U Sign", id: "sign-u" },
    { letter: "◌ూ", unicode: "ూ", name: "Uu Sign", id: "sign-uu" },
    { letter: "◌ృ", unicode: "ృ", name: "R Sign", id: "sign-r" },
    { letter: "◌ౄ", unicode: "ౄ", name: "Rr Sign", id: "sign-rr" },
    { letter: "◌ె", unicode: "ె", name: "E Sign", id: "sign-e" },
    { letter: "◌ే", unicode: "ే", name: "Ee Sign", id: "sign-ee" },
    { letter: "◌ై", unicode: "ై", name: "Ai Sign", id: "sign-ai" },
    { letter: "◌ొ", unicode: "ొ", name: "O Sign", id: "sign-o" },
    { letter: "◌ో", unicode: "ో", name: "Oo Sign", id: "sign-oo" },
    { letter: "◌ౌ", unicode: "ౌ", name: "Au Sign", id: "sign-au" },
    { letter: "◌్", unicode: "్", name: "Virama", id: "sign-virama" },
    { letter: "◌ం", unicode: "ం", name: "Anusvara", id: "sign-anusvara" },
    { letter: "◌ః", unicode: "ః", name: "Visarga", id: "sign-visarga" },
    { letter: "◌ఁ", unicode: "ఁ", name: "Candrabindu", id: "sign-candrabindu" },
  ];

  const teluguSymbols = [
    { letter: "౸", unicode: "౸", name: "Fraction 0", id: "symbol-fraction-0" },
    { letter: "౹", unicode: "౹", name: "Fraction 1", id: "symbol-fraction-1" },
    { letter: "౺", unicode: "౺", name: "Fraction 2", id: "symbol-fraction-2" },
    { letter: "౻", unicode: "౻", name: "Fraction 3", id: "symbol-fraction-3" },
    {
      letter: "౼",
      unicode: "౼",
      name: "Fraction 1 Lesser",
      id: "symbol-fraction-lesser",
    },
    {
      letter: "౽",
      unicode: "౽",
      name: "Fraction 3 Lesser",
      id: "symbol-fraction-3-lesser",
    },
    {
      letter: "౾",
      unicode: "౾",
      name: "Fraction 1 Greater",
      id: "symbol-fraction-greater",
    },
    {
      letter: "౿",
      unicode: "౿",
      name: "Fraction 3 Greater",
      id: "symbol-fraction-3-greater",
    },
  ];

  const teluguDigits = [
    { letter: "౦", unicode: "౦", name: "Zero", id: "digit-zero" },
    { letter: "౧", unicode: "౧", name: "One", id: "digit-one" },
    { letter: "౨", unicode: "౨", name: "Two", id: "digit-two" },
    { letter: "౩", unicode: "౩", name: "Three", id: "digit-three" },
    { letter: "౪", unicode: "౪", name: "Four", id: "digit-four" },
    { letter: "౫", unicode: "౫", name: "Five", id: "digit-five" },
    { letter: "౬", unicode: "౬", name: "Six", id: "digit-six" },
    { letter: "౭", unicode: "౭", name: "Seven", id: "digit-seven" },
    { letter: "౮", unicode: "౮", name: "Eight", id: "digit-eight" },
    { letter: "౯", unicode: "౯", name: "Nine", id: "digit-nine" },
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

  createKeys("telugu-vowels-container", teluguVowels);
  createKeys("telugu-consonants-container", teluguConsonants);
  createKeys("telugu-extras-container", teluguExtras);
  createKeys("telugu-signs-container", teluguSigns);
  createKeys("telugu-symbols-container", teluguSymbols);
  createKeys("telugu-digits-container", teluguDigits);
});
