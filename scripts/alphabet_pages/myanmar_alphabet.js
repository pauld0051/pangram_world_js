document.addEventListener("DOMContentLoaded", function () {
  const myanmarConsonants = [
    { letter: "က", unicode: "က", name: "Ka", id: "cons-ka" },
    { letter: "ခ", unicode: "ခ", name: "Kha", id: "cons-kha" },
    { letter: "ဂ", unicode: "ဂ", name: "Ga", id: "cons-ga" },
    { letter: "ဃ", unicode: "ဃ", name: "Gha", id: "cons-gha" },
    { letter: "င", unicode: "င", name: "Nga", id: "cons-nga" },

    { letter: "စ", unicode: "စ", name: "Ca", id: "cons-ca" },
    { letter: "ဆ", unicode: "ဆ", name: "Cha", id: "cons-cha" },
    { letter: "ဇ", unicode: "ဇ", name: "Ja", id: "cons-ja" },
    { letter: "ဈ", unicode: "ဈ", name: "Jha", id: "cons-jha" },
    { letter: "ည", unicode: "ည", name: "Nya", id: "cons-nya" },

    { letter: "ဋ", unicode: "ဋ", name: "Tta", id: "cons-tta" },
    { letter: "ဌ", unicode: "ဌ", name: "Ttha", id: "cons-ttha" },
    { letter: "ဍ", unicode: "ဍ", name: "Dda", id: "cons-dda" },
    { letter: "ဎ", unicode: "ဎ", name: "Ddha", id: "cons-ddha" },
    { letter: "ဏ", unicode: "ဏ", name: "Nna", id: "cons-nna" },

    { letter: "တ", unicode: "တ", name: "Ta", id: "cons-ta" },
    { letter: "ထ", unicode: "ထ", name: "Tha", id: "cons-tha" },
    { letter: "ဒ", unicode: "ဒ", name: "Da", id: "cons-da" },
    { letter: "ဓ", unicode: "ဓ", name: "Dha", id: "cons-dha" },
    { letter: "န", unicode: "န", name: "Na", id: "cons-na" },

    { letter: "ပ", unicode: "ပ", name: "Pa", id: "cons-pa" },
    { letter: "ဖ", unicode: "ဖ", name: "Pha", id: "cons-pha" },
    { letter: "ဗ", unicode: "ဗ", name: "Ba", id: "cons-ba" },
    { letter: "ဘ", unicode: "ဘ", name: "Bha", id: "cons-bha" },
    { letter: "မ", unicode: "မ", name: "Ma", id: "cons-ma" },

    { letter: "ယ", unicode: "ယ", name: "Ya", id: "cons-ya" },
    { letter: "ရ", unicode: "ရ", name: "Ra", id: "cons-ra" },
    { letter: "လ", unicode: "လ", name: "La", id: "cons-la" },
    { letter: "ဝ", unicode: "ဝ", name: "Wa", id: "cons-wa" },

    { letter: "သ", unicode: "သ", name: "Sa", id: "cons-sa" },
    { letter: "ဟ", unicode: "ဟ", name: "Ha", id: "cons-ha" },
    { letter: "ဠ", unicode: "ဠ", name: "Lla", id: "cons-lla" },
    { letter: "အ", unicode: "အ", name: "A", id: "cons-a" },
  ];

  const myanmarVowels = [
    { letter: "ဣ", unicode: "ဣ", name: "Independent I", id: "vowel-i" },
    { letter: "ဤ", unicode: "ဤ", name: "Independent Ii", id: "vowel-ii" },
    { letter: "ဥ", unicode: "ဥ", name: "Independent U", id: "vowel-u" },
    { letter: "ဦ", unicode: "ဦ", name: "Independent Uu", id: "vowel-uu" },
    { letter: "ဧ", unicode: "ဧ", name: "Independent E", id: "vowel-e" },
    { letter: "ဩ", unicode: "ဩ", name: "Independent O", id: "vowel-o" },
    { letter: "ဪ", unicode: "ဪ", name: "Independent Au", id: "vowel-au" },
  ];

  const myanmarSigns = [
    { letter: "◌ျ", unicode: "ျ", name: "Medial Ya", id: "sign-medial-ya" },
    { letter: "◌ြ", unicode: "ြ", name: "Medial Ra", id: "sign-medial-ra" },
    { letter: "◌ွ", unicode: "ွ", name: "Medial Wa", id: "sign-medial-wa" },
    { letter: "◌ှ", unicode: "ှ", name: "Medial Ha", id: "sign-medial-ha" },

    { letter: "◌ါ", unicode: "ါ", name: "Vowel Sign Aa", id: "sign-aa-short" },
    { letter: "◌ာ", unicode: "ာ", name: "Vowel Sign Aa", id: "sign-aa-long" },
    { letter: "◌ိ", unicode: "ိ", name: "Vowel Sign I", id: "sign-i" },
    { letter: "◌ီ", unicode: "ီ", name: "Vowel Sign Ii", id: "sign-ii" },
    { letter: "◌ု", unicode: "ု", name: "Vowel Sign U", id: "sign-u" },
    { letter: "◌ူ", unicode: "ူ", name: "Vowel Sign Uu", id: "sign-uu" },
    { letter: "◌ေ", unicode: "ေ", name: "Vowel Sign E", id: "sign-e" },
    { letter: "◌ဲ", unicode: "ဲ", name: "Vowel Sign Ai", id: "sign-ai" },
    {
      letter: "◌ဳ",
      unicode: "ဳ",
      name: "Vowel Sign Mon Ii",
      id: "sign-mon-ii",
    },
    { letter: "◌ဴ", unicode: "ဴ", name: "Vowel Sign Mon O", id: "sign-mon-o" },
  ];

  const myanmarSymbols = [
    { letter: "◌ံ", unicode: "ံ", name: "Anusvara", id: "symbol-anusvara" },
    { letter: "◌့", unicode: "့", name: "Dot Below", id: "symbol-dot-below" },
    { letter: "◌း", unicode: "း", name: "Visarga", id: "symbol-visarga" },
    { letter: "◌်", unicode: "်", name: "Asat", id: "symbol-asat" },
    { letter: "◌္", unicode: "္", name: "Virama", id: "symbol-virama" },

    { letter: "၌", unicode: "၌", name: "Locative", id: "symbol-locative" },
    { letter: "၍", unicode: "၍", name: "Completed", id: "symbol-completed" },
    {
      letter: "၎",
      unicode: "၎",
      name: "Aforementioned",
      id: "symbol-aforementioned",
    },
    { letter: "၏", unicode: "၏", name: "Genitive", id: "symbol-genitive" },
  ];

  const myanmarPunctuation = [
    {
      letter: "၊",
      unicode: "၊",
      name: "Little Section",
      id: "punct-little-section",
    },
    { letter: "။", unicode: "။", name: "Section", id: "punct-section" },
  ];

  const myanmarDigits = [
    { letter: "၀", unicode: "၀", name: "Zero", id: "digit-zero" },
    { letter: "၁", unicode: "၁", name: "One", id: "digit-one" },
    { letter: "၂", unicode: "၂", name: "Two", id: "digit-two" },
    { letter: "၃", unicode: "၃", name: "Three", id: "digit-three" },
    { letter: "၄", unicode: "၄", name: "Four", id: "digit-four" },
    { letter: "၅", unicode: "၅", name: "Five", id: "digit-five" },
    { letter: "၆", unicode: "၆", name: "Six", id: "digit-six" },
    { letter: "၇", unicode: "၇", name: "Seven", id: "digit-seven" },
    { letter: "၈", unicode: "၈", name: "Eight", id: "digit-eight" },
    { letter: "၉", unicode: "၉", name: "Nine", id: "digit-nine" },
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

  createKeys("myanmar-consonants-container", myanmarConsonants);
  createKeys("myanmar-vowels-container", myanmarVowels);
  createKeys("myanmar-signs-container", myanmarSigns);
  createKeys("myanmar-symbols-container", myanmarSymbols);
  createKeys("myanmar-punctuation-container", myanmarPunctuation);
  createKeys("myanmar-digits-container", myanmarDigits);
});
