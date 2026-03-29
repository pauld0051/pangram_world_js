document.addEventListener("DOMContentLoaded", function () {
  const gujaratiVowels = [
    { letter: "અ", unicode: "અ", name: "A", id: "vowel-a" },
    { letter: "આ", unicode: "આ", name: "Aa", id: "vowel-aa" },
    { letter: "ઇ", unicode: "ઇ", name: "I", id: "vowel-i" },
    { letter: "ઈ", unicode: "ઈ", name: "Ii", id: "vowel-ii" },
    { letter: "ઉ", unicode: "ઉ", name: "U", id: "vowel-u" },
    { letter: "ઊ", unicode: "ઊ", name: "Uu", id: "vowel-uu" },
    { letter: "ઋ", unicode: "ઋ", name: "R", id: "vowel-r" },
    { letter: "ૠ", unicode: "ૠ", name: "Rr", id: "vowel-rr" },
    { letter: "ઌ", unicode: "ઌ", name: "L", id: "vowel-l" },
    { letter: "ૡ", unicode: "ૡ", name: "Ll", id: "vowel-ll" },
    { letter: "ઍ", unicode: "ઍ", name: "Candra E", id: "vowel-candra-e" },
    { letter: "એ", unicode: "એ", name: "E", id: "vowel-e" },
    { letter: "ઐ", unicode: "ઐ", name: "Ai", id: "vowel-ai" },
    { letter: "ઑ", unicode: "ઑ", name: "Candra O", id: "vowel-candra-o" },
    { letter: "ઓ", unicode: "ઓ", name: "O", id: "vowel-o" },
    { letter: "ઔ", unicode: "ઔ", name: "Au", id: "vowel-au" },
  ];

  const gujaratiConsonants = [
    { letter: "ક", unicode: "ક", name: "Ka", id: "cons-ka" },
    { letter: "ખ", unicode: "ખ", name: "Kha", id: "cons-kha" },
    { letter: "ગ", unicode: "ગ", name: "Ga", id: "cons-ga" },
    { letter: "ઘ", unicode: "ઘ", name: "Gha", id: "cons-gha" },
    { letter: "ઙ", unicode: "ઙ", name: "Nga", id: "cons-nga" },

    { letter: "ચ", unicode: "ચ", name: "Ca", id: "cons-ca" },
    { letter: "છ", unicode: "છ", name: "Cha", id: "cons-cha" },
    { letter: "જ", unicode: "જ", name: "Ja", id: "cons-ja" },
    { letter: "ઝ", unicode: "ઝ", name: "Jha", id: "cons-jha" },
    { letter: "ઞ", unicode: "ઞ", name: "Nya", id: "cons-nya" },

    { letter: "ટ", unicode: "ટ", name: "Tta", id: "cons-tta" },
    { letter: "ઠ", unicode: "ઠ", name: "Ttha", id: "cons-ttha" },
    { letter: "ડ", unicode: "ડ", name: "Dda", id: "cons-dda" },
    { letter: "ઢ", unicode: "ઢ", name: "Ddha", id: "cons-ddha" },
    { letter: "ણ", unicode: "ણ", name: "Nna", id: "cons-nna" },

    { letter: "ત", unicode: "ત", name: "Ta", id: "cons-ta" },
    { letter: "થ", unicode: "થ", name: "Tha", id: "cons-tha" },
    { letter: "દ", unicode: "દ", name: "Da", id: "cons-da" },
    { letter: "ધ", unicode: "ધ", name: "Dha", id: "cons-dha" },
    { letter: "ન", unicode: "ન", name: "Na", id: "cons-na" },

    { letter: "પ", unicode: "પ", name: "Pa", id: "cons-pa" },
    { letter: "ફ", unicode: "ફ", name: "Pha", id: "cons-pha" },
    { letter: "બ", unicode: "બ", name: "Ba", id: "cons-ba" },
    { letter: "ભ", unicode: "ભ", name: "Bha", id: "cons-bha" },
    { letter: "મ", unicode: "મ", name: "Ma", id: "cons-ma" },

    { letter: "ય", unicode: "ય", name: "Ya", id: "cons-ya" },
    { letter: "ર", unicode: "ર", name: "Ra", id: "cons-ra" },
    { letter: "લ", unicode: "લ", name: "La", id: "cons-la" },
    { letter: "ળ", unicode: "ળ", name: "Lla", id: "cons-lla" },
    { letter: "વ", unicode: "વ", name: "Va", id: "cons-va" },
    { letter: "શ", unicode: "શ", name: "Sha", id: "cons-sha" },
    { letter: "ષ", unicode: "ષ", name: "Ssa", id: "cons-ssa" },
    { letter: "સ", unicode: "સ", name: "Sa", id: "cons-sa" },
    { letter: "હ", unicode: "હ", name: "Ha", id: "cons-ha" },
  ];

  const gujaratiExtras = [
    { letter: "ઽ", unicode: "ઽ", name: "Avagraha", id: "extra-avagraha" },
    { letter: "ૐ", unicode: "ૐ", name: "Om", id: "extra-om" },
    { letter: "ૹ", unicode: "ૹ", name: "Zha", id: "extra-zha" },
  ];

  const gujaratiSigns = [
    { letter: "◌ઁ", unicode: "ઁ", name: "Candrabindu", id: "sign-candrabindu" },
    { letter: "◌ં", unicode: "ં", name: "Anusvara", id: "sign-anusvara" },
    { letter: "◌ઃ", unicode: "ઃ", name: "Visarga", id: "sign-visarga" },
    { letter: "◌઼", unicode: "઼", name: "Nukta", id: "sign-nukta" },
    { letter: "◌ા", unicode: "ા", name: "Aa Sign", id: "sign-aa" },
    { letter: "◌િ", unicode: "િ", name: "I Sign", id: "sign-i" },
    { letter: "◌ી", unicode: "ી", name: "Ii Sign", id: "sign-ii" },
    { letter: "◌ુ", unicode: "ુ", name: "U Sign", id: "sign-u" },
    { letter: "◌ૂ", unicode: "ૂ", name: "Uu Sign", id: "sign-uu" },
    { letter: "◌ૃ", unicode: "ૃ", name: "R Sign", id: "sign-r" },
    { letter: "◌ૄ", unicode: "ૄ", name: "Rr Sign", id: "sign-rr" },
    { letter: "◌ૢ", unicode: "ૢ", name: "L Sign", id: "sign-l" },
    { letter: "◌ૣ", unicode: "ૣ", name: "Ll Sign", id: "sign-ll" },
    { letter: "◌ૅ", unicode: "ૅ", name: "Candra E", id: "sign-candra-e" },
    { letter: "◌ે", unicode: "ે", name: "E Sign", id: "sign-e" },
    { letter: "◌ૈ", unicode: "ૈ", name: "Ai Sign", id: "sign-ai" },
    { letter: "◌ૉ", unicode: "ૉ", name: "Candra O", id: "sign-candra-o" },
    { letter: "◌ો", unicode: "ો", name: "O Sign", id: "sign-o" },
    { letter: "◌ૌ", unicode: "ૌ", name: "Au Sign", id: "sign-au" },
    { letter: "◌્", unicode: "્", name: "Virama", id: "sign-virama" },
    { letter: "◌ૺ", unicode: "ૺ", name: "Sukun", id: "sign-sukun" },
    { letter: "◌ૻ", unicode: "ૻ", name: "Shadda", id: "sign-shadda" },
    { letter: "◌ૼ", unicode: "ૼ", name: "Maddah", id: "sign-maddah" },
    { letter: "◌૽", unicode: "૽", name: "3 Dot Nukta", id: "sign-3dot-nukta" },
    {
      letter: "◌૾",
      unicode: "૾",
      name: "Circle Nukta",
      id: "sign-circle-nukta",
    },
    {
      letter: "◌૿",
      unicode: "૿",
      name: "2 Circle Nukta",
      id: "sign-2circle-nukta",
    },
  ];

  const gujaratiSymbols = [
    { letter: "૰", unicode: "૰", name: "Abbrev", id: "symbol-abbrev" },
    { letter: "૱", unicode: "૱", name: "Rupee", id: "symbol-rupee" },
  ];

  const gujaratiDigits = [
    { letter: "૦", unicode: "૦", name: "Zero", id: "digit-zero" },
    { letter: "૧", unicode: "૧", name: "One", id: "digit-one" },
    { letter: "૨", unicode: "૨", name: "Two", id: "digit-two" },
    { letter: "૩", unicode: "૩", name: "Three", id: "digit-three" },
    { letter: "૪", unicode: "૪", name: "Four", id: "digit-four" },
    { letter: "૫", unicode: "૫", name: "Five", id: "digit-five" },
    { letter: "૬", unicode: "૬", name: "Six", id: "digit-six" },
    { letter: "૭", unicode: "૭", name: "Seven", id: "digit-seven" },
    { letter: "૮", unicode: "૮", name: "Eight", id: "digit-eight" },
    { letter: "૯", unicode: "૯", name: "Nine", id: "digit-nine" },
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

  createKeys("gujarati-vowels-container", gujaratiVowels);
  createKeys("gujarati-consonants-container", gujaratiConsonants);
  createKeys("gujarati-extras-container", gujaratiExtras);
  createKeys("gujarati-signs-container", gujaratiSigns);
  createKeys("gujarati-symbols-container", gujaratiSymbols);
  createKeys("gujarati-digits-container", gujaratiDigits);
});
