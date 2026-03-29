document.addEventListener("DOMContentLoaded", function () {
  const punjabiCarriers = [
    { letter: "ੳ", unicode: "ੳ", name: "Ura", id: "carrier-ura" },
    { letter: "ਅ", unicode: "ਅ", name: "Aira", id: "carrier-aira" },
    { letter: "ੲ", unicode: "ੲ", name: "Iri", id: "carrier-iri" },
  ];

  const punjabiVowels = [
    { letter: "ਆ", unicode: "ਆ", name: "Aa", id: "vowel-aa" },
    { letter: "ਇ", unicode: "ਇ", name: "I", id: "vowel-i" },
    { letter: "ਈ", unicode: "ਈ", name: "Ii", id: "vowel-ii" },
    { letter: "ਉ", unicode: "ਉ", name: "U", id: "vowel-u" },
    { letter: "ਊ", unicode: "ਊ", name: "Uu", id: "vowel-uu" },
    { letter: "ਏ", unicode: "ਏ", name: "Ee", id: "vowel-ee" },
    { letter: "ਐ", unicode: "ਐ", name: "Ai", id: "vowel-ai" },
    { letter: "ਓ", unicode: "ਓ", name: "Oo", id: "vowel-oo" },
    { letter: "ਔ", unicode: "ਔ", name: "Au", id: "vowel-au" },
  ];

  const punjabiConsonants = [
    { letter: "ਕ", unicode: "ਕ", name: "Ka", id: "cons-ka" },
    { letter: "ਖ", unicode: "ਖ", name: "Kha", id: "cons-kha" },
    { letter: "ਗ", unicode: "ਗ", name: "Ga", id: "cons-ga" },
    { letter: "ਘ", unicode: "ਘ", name: "Gha", id: "cons-gha" },
    { letter: "ਙ", unicode: "ਙ", name: "Nga", id: "cons-nga" },

    { letter: "ਚ", unicode: "ਚ", name: "Ca", id: "cons-ca" },
    { letter: "ਛ", unicode: "ਛ", name: "Cha", id: "cons-cha" },
    { letter: "ਜ", unicode: "ਜ", name: "Ja", id: "cons-ja" },
    { letter: "ਝ", unicode: "ਝ", name: "Jha", id: "cons-jha" },
    { letter: "ਞ", unicode: "ਞ", name: "Nya", id: "cons-nya" },

    { letter: "ਟ", unicode: "ਟ", name: "Tta", id: "cons-tta" },
    { letter: "ਠ", unicode: "ਠ", name: "Ttha", id: "cons-ttha" },
    { letter: "ਡ", unicode: "ਡ", name: "Dda", id: "cons-dda" },
    { letter: "ਢ", unicode: "ਢ", name: "Ddha", id: "cons-ddha" },
    { letter: "ਣ", unicode: "ਣ", name: "Nna", id: "cons-nna" },

    { letter: "ਤ", unicode: "ਤ", name: "Ta", id: "cons-ta" },
    { letter: "ਥ", unicode: "ਥ", name: "Tha", id: "cons-tha" },
    { letter: "ਦ", unicode: "ਦ", name: "Da", id: "cons-da" },
    { letter: "ਧ", unicode: "ਧ", name: "Dha", id: "cons-dha" },
    { letter: "ਨ", unicode: "ਨ", name: "Na", id: "cons-na" },

    { letter: "ਪ", unicode: "ਪ", name: "Pa", id: "cons-pa" },
    { letter: "ਫ", unicode: "ਫ", name: "Pha", id: "cons-pha" },
    { letter: "ਬ", unicode: "ਬ", name: "Ba", id: "cons-ba" },
    { letter: "ਭ", unicode: "ਭ", name: "Bha", id: "cons-bha" },
    { letter: "ਮ", unicode: "ਮ", name: "Ma", id: "cons-ma" },

    { letter: "ਯ", unicode: "ਯ", name: "Ya", id: "cons-ya" },
    { letter: "ਰ", unicode: "ਰ", name: "Ra", id: "cons-ra" },
    { letter: "ਲ", unicode: "ਲ", name: "La", id: "cons-la" },
    { letter: "ਵ", unicode: "ਵ", name: "Va", id: "cons-va" },
    { letter: "ਸ", unicode: "ਸ", name: "Sa", id: "cons-sa" },
    { letter: "ਹ", unicode: "ਹ", name: "Ha", id: "cons-ha" },
    { letter: "ੜ", unicode: "ੜ", name: "Rra", id: "cons-rra" },
  ];

  const punjabiExtras = [
    { letter: "ਸ਼", unicode: "ਸ਼", name: "Sha", id: "extra-sha" },
    { letter: "ਖ਼", unicode: "ਖ਼", name: "Khh", id: "extra-khh" },
    { letter: "ਗ਼", unicode: "ਗ਼", name: "Ghh", id: "extra-ghh" },
    { letter: "ਜ਼", unicode: "ਜ਼", name: "Za", id: "extra-za" },
    { letter: "ਫ਼", unicode: "ਫ਼", name: "Fa", id: "extra-fa" },
    { letter: "ਲ਼", unicode: "ਲ਼", name: "Lla", id: "extra-lla" },
  ];

  const punjabiSigns = [
    { letter: "◌ਾ", unicode: "ਾ", name: "Aa Sign", id: "sign-aa" },
    { letter: "◌ਿ", unicode: "ਿ", name: "I Sign", id: "sign-i" },
    { letter: "◌ੀ", unicode: "ੀ", name: "Ii Sign", id: "sign-ii" },
    { letter: "◌ੁ", unicode: "ੁ", name: "U Sign", id: "sign-u" },
    { letter: "◌ੂ", unicode: "ੂ", name: "Uu Sign", id: "sign-uu" },
    { letter: "◌ੇ", unicode: "ੇ", name: "Ee Sign", id: "sign-ee" },
    { letter: "◌ੈ", unicode: "ੈ", name: "Ai Sign", id: "sign-ai" },
    { letter: "◌ੋ", unicode: "ੋ", name: "Oo Sign", id: "sign-oo" },
    { letter: "◌ੌ", unicode: "ੌ", name: "Au Sign", id: "sign-au" },
    { letter: "◌੍", unicode: "੍", name: "Halant", id: "sign-halant" },
    { letter: "◌਼", unicode: "਼", name: "Nuqta", id: "sign-nuqta" },
    { letter: "◌ਂ", unicode: "ਂ", name: "Bindi", id: "sign-bindi" },
    { letter: "◌ੰ", unicode: "ੰ", name: "Tippi", id: "sign-tippi" },
    { letter: "◌ੱ", unicode: "ੱ", name: "Addak", id: "sign-addak" },
    { letter: "◌ਃ", unicode: "ਃ", name: "Visarga", id: "sign-visarga" },
    { letter: "◌ਁ", unicode: "ਁ", name: "Adak Bindi", id: "sign-adak-bindi" },
  ];

  const punjabiDigits = [
    { letter: "੦", unicode: "੦", name: "Zero", id: "digit-zero" },
    { letter: "੧", unicode: "੧", name: "One", id: "digit-one" },
    { letter: "੨", unicode: "੨", name: "Two", id: "digit-two" },
    { letter: "੩", unicode: "੩", name: "Three", id: "digit-three" },
    { letter: "੪", unicode: "੪", name: "Four", id: "digit-four" },
    { letter: "੫", unicode: "੫", name: "Five", id: "digit-five" },
    { letter: "੬", unicode: "੬", name: "Six", id: "digit-six" },
    { letter: "੭", unicode: "੭", name: "Seven", id: "digit-seven" },
    { letter: "੮", unicode: "੮", name: "Eight", id: "digit-eight" },
    { letter: "੯", unicode: "੯", name: "Nine", id: "digit-nine" },
    { letter: "ੴ", unicode: "ੴ", name: "Ik Onkar", id: "symbol-ik-onkar" },
    { letter: "।", unicode: "।", name: "Danda", id: "symbol-danda" },
    {
      letter: "॥",
      unicode: "॥",
      name: "Double Danda",
      id: "symbol-double-danda",
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

  createKeys("punjabi-carriers-container", punjabiCarriers);
  createKeys("punjabi-vowels-container", punjabiVowels);
  createKeys("punjabi-consonants-container", punjabiConsonants);
  createKeys("punjabi-extras-container", punjabiExtras);
  createKeys("punjabi-signs-container", punjabiSigns);
  createKeys("punjabi-digits-container", punjabiDigits);
});
