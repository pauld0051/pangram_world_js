document.addEventListener("DOMContentLoaded", function () {
  const malayalamVowels = [
    { letter: "അ", unicode: "അ", name: "A", id: "vowel-a" },
    { letter: "ആ", unicode: "ആ", name: "Aa", id: "vowel-aa" },
    { letter: "ഇ", unicode: "ഇ", name: "I", id: "vowel-i" },
    { letter: "ഈ", unicode: "ഈ", name: "Ii", id: "vowel-ii" },
    { letter: "ഉ", unicode: "ഉ", name: "U", id: "vowel-u" },
    { letter: "ഊ", unicode: "ഊ", name: "Uu", id: "vowel-uu" },
    { letter: "ഋ", unicode: "ഋ", name: "Vocalic R", id: "vowel-r" },
    { letter: "ൠ", unicode: "ൠ", name: "Vocalic RR", id: "vowel-rr" },
    { letter: "ഌ", unicode: "ഌ", name: "Vocalic L", id: "vowel-l" },
    { letter: "ൡ", unicode: "ൡ", name: "Vocalic LL", id: "vowel-ll" },
    { letter: "എ", unicode: "എ", name: "E", id: "vowel-e" },
    { letter: "ഏ", unicode: "ഏ", name: "Ee", id: "vowel-ee" },
    { letter: "ഐ", unicode: "ഐ", name: "Ai", id: "vowel-ai" },
    { letter: "ഒ", unicode: "ഒ", name: "O", id: "vowel-o" },
    { letter: "ഓ", unicode: "ഓ", name: "Oo", id: "vowel-oo" },
    { letter: "ഔ", unicode: "ഔ", name: "Au", id: "vowel-au" },
  ];

  const malayalamConsonants = [
    { letter: "ക", unicode: "ക", name: "Ka", id: "cons-ka" },
    { letter: "ഖ", unicode: "ഖ", name: "Kha", id: "cons-kha" },
    { letter: "ഗ", unicode: "ഗ", name: "Ga", id: "cons-ga" },
    { letter: "ഘ", unicode: "ഘ", name: "Gha", id: "cons-gha" },
    { letter: "ങ", unicode: "ങ", name: "Nga", id: "cons-nga" },

    { letter: "ച", unicode: "ച", name: "Ca", id: "cons-ca" },
    { letter: "ഛ", unicode: "ഛ", name: "Cha", id: "cons-cha" },
    { letter: "ജ", unicode: "ജ", name: "Ja", id: "cons-ja" },
    { letter: "ഝ", unicode: "ഝ", name: "Jha", id: "cons-jha" },
    { letter: "ഞ", unicode: "ഞ", name: "Nya", id: "cons-nya" },

    { letter: "ട", unicode: "ട", name: "Tta", id: "cons-tta" },
    { letter: "ഠ", unicode: "ഠ", name: "Ttha", id: "cons-ttha" },
    { letter: "ഡ", unicode: "ഡ", name: "Dda", id: "cons-dda" },
    { letter: "ഢ", unicode: "ഢ", name: "Ddha", id: "cons-ddha" },
    { letter: "ണ", unicode: "ണ", name: "Nna", id: "cons-nna" },

    { letter: "ത", unicode: "ത", name: "Ta", id: "cons-ta" },
    { letter: "ഥ", unicode: "ഥ", name: "Tha", id: "cons-tha" },
    { letter: "ദ", unicode: "ദ", name: "Da", id: "cons-da" },
    { letter: "ധ", unicode: "ധ", name: "Dha", id: "cons-dha" },
    { letter: "ന", unicode: "ന", name: "Na", id: "cons-na" },

    { letter: "പ", unicode: "പ", name: "Pa", id: "cons-pa" },
    { letter: "ഫ", unicode: "ഫ", name: "Pha", id: "cons-pha" },
    { letter: "ബ", unicode: "ബ", name: "Ba", id: "cons-ba" },
    { letter: "ഭ", unicode: "ഭ", name: "Bha", id: "cons-bha" },
    { letter: "മ", unicode: "മ", name: "Ma", id: "cons-ma" },

    { letter: "യ", unicode: "യ", name: "Ya", id: "cons-ya" },
    { letter: "ര", unicode: "ര", name: "Ra", id: "cons-ra" },
    { letter: "ല", unicode: "ല", name: "La", id: "cons-la" },
    { letter: "വ", unicode: "വ", name: "Va", id: "cons-va" },

    { letter: "ശ", unicode: "ശ", name: "Sha", id: "cons-sha" },
    { letter: "ഷ", unicode: "ഷ", name: "Ssa", id: "cons-ssa" },
    { letter: "സ", unicode: "സ", name: "Sa", id: "cons-sa" },
    { letter: "ഹ", unicode: "ഹ", name: "Ha", id: "cons-ha" },
    { letter: "ള", unicode: "ള", name: "Lla", id: "cons-lla" },
    { letter: "ഴ", unicode: "ഴ", name: "Zha", id: "cons-zha" },
    { letter: "റ", unicode: "റ", name: "Rra", id: "cons-rra" },
  ];

  const malayalamSpecial = [
    { letter: "ൺ", unicode: "ൺ", name: "Chillu Nn", id: "special-chillu-nn" },
    { letter: "ൻ", unicode: "ൻ", name: "Chillu N", id: "special-chillu-n" },
    { letter: "ർ", unicode: "ർ", name: "Chillu R", id: "special-chillu-r" },
    { letter: "ൽ", unicode: "ൽ", name: "Chillu L", id: "special-chillu-l" },
    { letter: "ൾ", unicode: "ൾ", name: "Chillu Ll", id: "special-chillu-ll" },
    { letter: "ൿ", unicode: "ൿ", name: "Chillu K", id: "special-chillu-k" },
    { letter: "ക്ഷ", unicode: "ക്ഷ", name: "Ksha", id: "special-ksha" },
    { letter: "ജ്ഞ", unicode: "ജ്ഞ", name: "Jnya", id: "special-jnya" },
  ];

  const malayalamSigns = [
    { letter: "◌ാ", unicode: "ാ", name: "Vowel Sign Aa", id: "sign-aa" },
    { letter: "◌ി", unicode: "ി", name: "Vowel Sign I", id: "sign-i" },
    { letter: "◌ീ", unicode: "ീ", name: "Vowel Sign Ii", id: "sign-ii" },
    { letter: "◌ു", unicode: "ു", name: "Vowel Sign U", id: "sign-u" },
    { letter: "◌ൂ", unicode: "ൂ", name: "Vowel Sign Uu", id: "sign-uu" },
    { letter: "◌ൃ", unicode: "ൃ", name: "Vowel Sign Vocalic R", id: "sign-r" },
    {
      letter: "◌ൄ",
      unicode: "ൄ",
      name: "Vowel Sign Vocalic RR",
      id: "sign-rr",
    },
    { letter: "◌ൢ", unicode: "ൢ", name: "Vowel Sign Vocalic L", id: "sign-l" },
    {
      letter: "◌ൣ",
      unicode: "ൣ",
      name: "Vowel Sign Vocalic LL",
      id: "sign-ll",
    },
    { letter: "◌െ", unicode: "െ", name: "Vowel Sign E", id: "sign-e" },
    { letter: "◌േ", unicode: "േ", name: "Vowel Sign Ee", id: "sign-ee" },
    { letter: "◌ൈ", unicode: "ൈ", name: "Vowel Sign Ai", id: "sign-ai" },
    { letter: "◌ൊ", unicode: "ൊ", name: "Vowel Sign O", id: "sign-o" },
    { letter: "◌ോ", unicode: "ോ", name: "Vowel Sign Oo", id: "sign-oo" },
    { letter: "◌ൌ", unicode: "ൌ", name: "Vowel Sign Au", id: "sign-au" },
    {
      letter: "◌ൗ",
      unicode: "ൗ",
      name: "Au Length Mark",
      id: "sign-au-length",
    },
    { letter: "◌ം", unicode: "ം", name: "Anusvara", id: "sign-anusvara" },
    { letter: "◌ഃ", unicode: "ഃ", name: "Visarga", id: "sign-visarga" },
    { letter: "◌്", unicode: "്", name: "Virama", id: "sign-virama" },
  ];

  const malayalamSymbols = [
    { letter: "ഽ", unicode: "ഽ", name: "Avagraha", id: "symbol-avagraha" },
    { letter: "൰", unicode: "൰", name: "Number Ten", id: "symbol-ten" },
    {
      letter: "൱",
      unicode: "൱",
      name: "Number One Hundred",
      id: "symbol-hundred",
    },
    {
      letter: "൲",
      unicode: "൲",
      name: "Number One Thousand",
      id: "symbol-thousand",
    },
    {
      letter: "൳",
      unicode: "൳",
      name: "Fraction One Quarter",
      id: "symbol-quarter",
    },
    { letter: "൴", unicode: "൴", name: "Fraction One Half", id: "symbol-half" },
    {
      letter: "൵",
      unicode: "൵",
      name: "Fraction Three Quarters",
      id: "symbol-three-quarters",
    },
    {
      letter: "൶",
      unicode: "൶",
      name: "Fraction One Sixteenth",
      id: "symbol-one-sixteenth",
    },
    {
      letter: "൷",
      unicode: "൷",
      name: "Fraction One Eighth",
      id: "symbol-one-eighth",
    },
    {
      letter: "൸",
      unicode: "൸",
      name: "Fraction Three Sixteenths",
      id: "symbol-three-sixteenths",
    },
    { letter: "൹", unicode: "൹", name: "Date Mark", id: "symbol-date-mark" },
  ];

  const malayalamDigits = [
    { letter: "൦", unicode: "൦", name: "Zero", id: "digit-zero" },
    { letter: "൧", unicode: "൧", name: "One", id: "digit-one" },
    { letter: "൨", unicode: "൨", name: "Two", id: "digit-two" },
    { letter: "൩", unicode: "൩", name: "Three", id: "digit-three" },
    { letter: "൪", unicode: "൪", name: "Four", id: "digit-four" },
    { letter: "൫", unicode: "൫", name: "Five", id: "digit-five" },
    { letter: "൬", unicode: "൬", name: "Six", id: "digit-six" },
    { letter: "൭", unicode: "൭", name: "Seven", id: "digit-seven" },
    { letter: "൮", unicode: "൮", name: "Eight", id: "digit-eight" },
    { letter: "൯", unicode: "൯", name: "Nine", id: "digit-nine" },
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

  createKeys("malayalam-vowels-container", malayalamVowels);
  createKeys("malayalam-consonants-container", malayalamConsonants);
  createKeys("malayalam-special-container", malayalamSpecial);
  createKeys("malayalam-signs-container", malayalamSigns);
  createKeys("malayalam-symbols-container", malayalamSymbols);
  createKeys("malayalam-digits-container", malayalamDigits);
});
