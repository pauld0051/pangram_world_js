document.addEventListener("DOMContentLoaded", function () {
  const kannadaVowels = [
    { letter: "ಅ", unicode: "ಅ", name: "A", id: "vowel-a" },
    { letter: "ಆ", unicode: "ಆ", name: "Aa", id: "vowel-aa" },
    { letter: "ಇ", unicode: "ಇ", name: "I", id: "vowel-i" },
    { letter: "ಈ", unicode: "ಈ", name: "Ii", id: "vowel-ii" },
    { letter: "ಉ", unicode: "ಉ", name: "U", id: "vowel-u" },
    { letter: "ಊ", unicode: "ಊ", name: "Uu", id: "vowel-uu" },
    { letter: "ಋ", unicode: "ಋ", name: "R", id: "vowel-r" },
    { letter: "ೠ", unicode: "ೠ", name: "Rr", id: "vowel-rr" },
    { letter: "ಌ", unicode: "ಌ", name: "L", id: "vowel-l" },
    { letter: "ೡ", unicode: "ೡ", name: "Ll", id: "vowel-ll" },
    { letter: "ಎ", unicode: "ಎ", name: "E", id: "vowel-e" },
    { letter: "ಏ", unicode: "ಏ", name: "Ee", id: "vowel-ee" },
    { letter: "ಐ", unicode: "ಐ", name: "Ai", id: "vowel-ai" },
    { letter: "ಒ", unicode: "ಒ", name: "O", id: "vowel-o" },
    { letter: "ಓ", unicode: "ಓ", name: "Oo", id: "vowel-oo" },
    { letter: "ಔ", unicode: "ಔ", name: "Au", id: "vowel-au" },
  ];

  const kannadaConsonants = [
    { letter: "ಕ", unicode: "ಕ", name: "Ka", id: "cons-ka" },
    { letter: "ಖ", unicode: "ಖ", name: "Kha", id: "cons-kha" },
    { letter: "ಗ", unicode: "ಗ", name: "Ga", id: "cons-ga" },
    { letter: "ಘ", unicode: "ಘ", name: "Gha", id: "cons-gha" },
    { letter: "ಙ", unicode: "ಙ", name: "Nga", id: "cons-nga" },

    { letter: "ಚ", unicode: "ಚ", name: "Ca", id: "cons-ca" },
    { letter: "ಛ", unicode: "ಛ", name: "Cha", id: "cons-cha" },
    { letter: "ಜ", unicode: "ಜ", name: "Ja", id: "cons-ja" },
    { letter: "ಝ", unicode: "ಝ", name: "Jha", id: "cons-jha" },
    { letter: "ಞ", unicode: "ಞ", name: "Nya", id: "cons-nya" },

    { letter: "ಟ", unicode: "ಟ", name: "Tta", id: "cons-tta" },
    { letter: "ಠ", unicode: "ಠ", name: "Ttha", id: "cons-ttha" },
    { letter: "ಡ", unicode: "ಡ", name: "Dda", id: "cons-dda" },
    { letter: "ಢ", unicode: "ಢ", name: "Ddha", id: "cons-ddha" },
    { letter: "ಣ", unicode: "ಣ", name: "Nna", id: "cons-nna" },

    { letter: "ತ", unicode: "ತ", name: "Ta", id: "cons-ta" },
    { letter: "ಥ", unicode: "ಥ", name: "Tha", id: "cons-tha" },
    { letter: "ದ", unicode: "ದ", name: "Da", id: "cons-da" },
    { letter: "ಧ", unicode: "ಧ", name: "Dha", id: "cons-dha" },
    { letter: "ನ", unicode: "ನ", name: "Na", id: "cons-na" },

    { letter: "ಪ", unicode: "ಪ", name: "Pa", id: "cons-pa" },
    { letter: "ಫ", unicode: "ಫ", name: "Pha", id: "cons-pha" },
    { letter: "ಬ", unicode: "ಬ", name: "Ba", id: "cons-ba" },
    { letter: "ಭ", unicode: "ಭ", name: "Bha", id: "cons-bha" },
    { letter: "ಮ", unicode: "ಮ", name: "Ma", id: "cons-ma" },

    { letter: "ಯ", unicode: "ಯ", name: "Ya", id: "cons-ya" },
    { letter: "ರ", unicode: "ರ", name: "Ra", id: "cons-ra" },
    { letter: "ಲ", unicode: "ಲ", name: "La", id: "cons-la" },
    { letter: "ವ", unicode: "ವ", name: "Va", id: "cons-va" },

    { letter: "ಶ", unicode: "ಶ", name: "Sha", id: "cons-sha" },
    { letter: "ಷ", unicode: "ಷ", name: "Ssa", id: "cons-ssa" },
    { letter: "ಸ", unicode: "ಸ", name: "Sa", id: "cons-sa" },
    { letter: "ಹ", unicode: "ಹ", name: "Ha", id: "cons-ha" },
    { letter: "ಳ", unicode: "ಳ", name: "Lla", id: "cons-lla" },
  ];

  const kannadaExtras = [
    { letter: "ಱ", unicode: "ಱ", name: "Rra", id: "extra-rra" },
    { letter: "ೞ", unicode: "ೞ", name: "Llla", id: "extra-llla" },
    { letter: "ಽ", unicode: "ಽ", name: "Avagraha", id: "extra-avagraha" },
    { letter: "ೱ", unicode: "ೱ", name: "Fa", id: "extra-fa" },
    { letter: "ೲ", unicode: "ೲ", name: "Za", id: "extra-za" },
  ];

  const kannadaSigns = [
    { letter: "◌ಾ", unicode: "ಾ", name: "Aa Sign", id: "sign-aa" },
    { letter: "◌ಿ", unicode: "ಿ", name: "I Sign", id: "sign-i" },
    { letter: "◌ೀ", unicode: "ೀ", name: "Ii Sign", id: "sign-ii" },
    { letter: "◌ು", unicode: "ು", name: "U Sign", id: "sign-u" },
    { letter: "◌ೂ", unicode: "ೂ", name: "Uu Sign", id: "sign-uu" },
    { letter: "◌ೃ", unicode: "ೃ", name: "R Sign", id: "sign-r" },
    { letter: "◌ೄ", unicode: "ೄ", name: "Rr Sign", id: "sign-rr" },
    { letter: "◌ೆ", unicode: "ೆ", name: "E Sign", id: "sign-e" },
    { letter: "◌ೇ", unicode: "ೇ", name: "Ee Sign", id: "sign-ee" },
    { letter: "◌ೈ", unicode: "ೈ", name: "Ai Sign", id: "sign-ai" },
    { letter: "◌ೊ", unicode: "ೊ", name: "O Sign", id: "sign-o" },
    { letter: "◌ೋ", unicode: "ೋ", name: "Oo Sign", id: "sign-oo" },
    { letter: "◌ೌ", unicode: "ೌ", name: "Au Sign", id: "sign-au" },
    { letter: "◌ಂ", unicode: "ಂ", name: "Anusvara", id: "sign-anusvara" },
    { letter: "◌ಃ", unicode: "ಃ", name: "Visarga", id: "sign-visarga" },
    { letter: "◌್", unicode: "್", name: "Virama", id: "sign-virama" },
    { letter: "◌ಁ", unicode: "ಁ", name: "Candrabindu", id: "sign-candrabindu" },
  ];

  const kannadaSymbols = [
    { letter: "ೳ", unicode: "ೳ", name: "Fraction 1", id: "symbol-frac-1" },
    { letter: "೴", unicode: "೴", name: "Fraction 2", id: "symbol-frac-2" },
    { letter: "೵", unicode: "೵", name: "Fraction 3", id: "symbol-frac-3" },
    { letter: "೶", unicode: "೶", name: "Fraction 4", id: "symbol-frac-4" },
    { letter: "೷", unicode: "೷", name: "Fraction 8", id: "symbol-frac-8" },
    { letter: "೸", unicode: "೸", name: "Fraction 16", id: "symbol-frac-16" },
    { letter: "೹", unicode: "೹", name: "Rupee", id: "symbol-rupee" },
  ];

  const kannadaDigits = [
    { letter: "೦", unicode: "೦", name: "Zero", id: "digit-zero" },
    { letter: "೧", unicode: "೧", name: "One", id: "digit-one" },
    { letter: "೨", unicode: "೨", name: "Two", id: "digit-two" },
    { letter: "೩", unicode: "೩", name: "Three", id: "digit-three" },
    { letter: "೪", unicode: "೪", name: "Four", id: "digit-four" },
    { letter: "೫", unicode: "೫", name: "Five", id: "digit-five" },
    { letter: "೬", unicode: "೬", name: "Six", id: "digit-six" },
    { letter: "೭", unicode: "೭", name: "Seven", id: "digit-seven" },
    { letter: "೮", unicode: "೮", name: "Eight", id: "digit-eight" },
    { letter: "೯", unicode: "೯", name: "Nine", id: "digit-nine" },
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

  createKeys("kannada-vowels-container", kannadaVowels);
  createKeys("kannada-consonants-container", kannadaConsonants);
  createKeys("kannada-extras-container", kannadaExtras);
  createKeys("kannada-signs-container", kannadaSigns);
  createKeys("kannada-symbols-container", kannadaSymbols);
  createKeys("kannada-digits-container", kannadaDigits);
});
