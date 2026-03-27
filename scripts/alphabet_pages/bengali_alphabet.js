document.addEventListener("DOMContentLoaded", function () {
  const bengaliVowels = [
    { letter: "অ", unicode: "অ", name: "A", id: "ben-vowel-a" },
    { letter: "আ", unicode: "আ", name: "Aa", id: "ben-vowel-aa" },
    { letter: "ই", unicode: "ই", name: "I", id: "ben-vowel-i" },
    { letter: "ঈ", unicode: "ঈ", name: "Ii", id: "ben-vowel-ii" },
    { letter: "উ", unicode: "উ", name: "U", id: "ben-vowel-u" },
    { letter: "ঊ", unicode: "ঊ", name: "Uu", id: "ben-vowel-uu" },
    { letter: "ঋ", unicode: "ঋ", name: "Vocalic R", id: "ben-vowel-vocalic-r" },
    { letter: "ঌ", unicode: "ঌ", name: "Vocalic L", id: "ben-vowel-vocalic-l" },
    { letter: "এ", unicode: "এ", name: "E", id: "ben-vowel-e" },
    { letter: "ঐ", unicode: "ঐ", name: "Ai", id: "ben-vowel-ai" },
    { letter: "ও", unicode: "ও", name: "O", id: "ben-vowel-o" },
    { letter: "ঔ", unicode: "ঔ", name: "Au", id: "ben-vowel-au" },
    {
      letter: "ৠ",
      unicode: "ৠ",
      name: "Vocalic Rr",
      id: "ben-vowel-vocalic-rr",
    },
    {
      letter: "ৡ",
      unicode: "ৡ",
      name: "Vocalic Ll",
      id: "ben-vowel-vocalic-ll",
    },
  ];

  const bengaliConsonants = [
    { letter: "ক", unicode: "ক", name: "Ka", id: "ben-con-ka" },
    { letter: "খ", unicode: "খ", name: "Kha", id: "ben-con-kha" },
    { letter: "গ", unicode: "গ", name: "Ga", id: "ben-con-ga" },
    { letter: "ঘ", unicode: "ঘ", name: "Gha", id: "ben-con-gha" },
    { letter: "ঙ", unicode: "ঙ", name: "Nga", id: "ben-con-nga" },

    { letter: "চ", unicode: "চ", name: "Ca", id: "ben-con-ca" },
    { letter: "ছ", unicode: "ছ", name: "Cha", id: "ben-con-cha" },
    { letter: "জ", unicode: "জ", name: "Ja", id: "ben-con-ja" },
    { letter: "ঝ", unicode: "ঝ", name: "Jha", id: "ben-con-jha" },
    { letter: "ঞ", unicode: "ঞ", name: "Nya", id: "ben-con-nya" },

    { letter: "ট", unicode: "ট", name: "Tta", id: "ben-con-tta" },
    { letter: "ঠ", unicode: "ঠ", name: "Ttha", id: "ben-con-ttha" },
    { letter: "ড", unicode: "ড", name: "Dda", id: "ben-con-dda" },
    { letter: "ঢ", unicode: "ঢ", name: "Ddha", id: "ben-con-ddha" },
    { letter: "ণ", unicode: "ণ", name: "Nna", id: "ben-con-nna" },

    { letter: "ত", unicode: "ত", name: "Ta", id: "ben-con-ta" },
    { letter: "থ", unicode: "থ", name: "Tha", id: "ben-con-tha" },
    { letter: "দ", unicode: "দ", name: "Da", id: "ben-con-da" },
    { letter: "ধ", unicode: "ধ", name: "Dha", id: "ben-con-dha" },
    { letter: "ন", unicode: "ন", name: "Na", id: "ben-con-na" },

    { letter: "প", unicode: "প", name: "Pa", id: "ben-con-pa" },
    { letter: "ফ", unicode: "ফ", name: "Pha", id: "ben-con-pha" },
    { letter: "ব", unicode: "ব", name: "Ba", id: "ben-con-ba" },
    { letter: "ভ", unicode: "ভ", name: "Bha", id: "ben-con-bha" },
    { letter: "ম", unicode: "ম", name: "Ma", id: "ben-con-ma" },

    { letter: "য", unicode: "য", name: "Ya", id: "ben-con-ya" },
    { letter: "র", unicode: "র", name: "Ra", id: "ben-con-ra" },
    { letter: "ল", unicode: "ল", name: "La", id: "ben-con-la" },
    { letter: "শ", unicode: "শ", name: "Sha", id: "ben-con-sha" },
    { letter: "ষ", unicode: "ষ", name: "Ssa", id: "ben-con-ssa" },
    { letter: "স", unicode: "স", name: "Sa", id: "ben-con-sa" },
    { letter: "হ", unicode: "হ", name: "Ha", id: "ben-con-ha" },

    { letter: "ড়", unicode: "ড়", name: "Rra", id: "ben-con-rra" },
    { letter: "ঢ়", unicode: "ঢ়", name: "Rha", id: "ben-con-rha" },
    { letter: "য়", unicode: "য়", name: "Yya", id: "ben-con-yya" },
    { letter: "ৎ", unicode: "ৎ", name: "Khanda Ta", id: "ben-con-khanda-ta" },
  ];

  const bengaliVowelSigns = [
    { letter: "◌া", unicode: "া", name: "Sign Aa", id: "ben-sign-aa" },
    { letter: "◌ি", unicode: "ি", name: "Sign I", id: "ben-sign-i" },
    { letter: "◌ী", unicode: "ী", name: "Sign Ii", id: "ben-sign-ii" },
    { letter: "◌ু", unicode: "ু", name: "Sign U", id: "ben-sign-u" },
    { letter: "◌ূ", unicode: "ূ", name: "Sign Uu", id: "ben-sign-uu" },
    {
      letter: "◌ৃ",
      unicode: "ৃ",
      name: "Sign Vocalic R",
      id: "ben-sign-vocalic-r",
    },
    {
      letter: "◌ৄ",
      unicode: "ৄ",
      name: "Sign Vocalic Rr",
      id: "ben-sign-vocalic-rr",
    },
    {
      letter: "◌ৢ",
      unicode: "ৢ",
      name: "Sign Vocalic L",
      id: "ben-sign-vocalic-l",
    },
    {
      letter: "◌ৣ",
      unicode: "ৣ",
      name: "Sign Vocalic Ll",
      id: "ben-sign-vocalic-ll",
    },
    { letter: "◌ে", unicode: "ে", name: "Sign E", id: "ben-sign-e" },
    { letter: "◌ৈ", unicode: "ৈ", name: "Sign Ai", id: "ben-sign-ai" },
    { letter: "◌ো", unicode: "ো", name: "Sign O", id: "ben-sign-o" },
    { letter: "◌ৌ", unicode: "ৌ", name: "Sign Au", id: "ben-sign-au" },
  ];

  const bengaliSigns = [
    { letter: "ঁ", unicode: "ঁ", name: "Candrabindu", id: "ben-candrabindu" },
    { letter: "ং", unicode: "ং", name: "Anusvara", id: "ben-anusvara" },
    { letter: "ঃ", unicode: "ঃ", name: "Visarga", id: "ben-visarga" },
    { letter: "্", unicode: "্", name: "Virama", id: "ben-virama" },
    { letter: "়", unicode: "়", name: "Nukta", id: "ben-nukta" },
    { letter: "ঽ", unicode: "ঽ", name: "Avagraha", id: "ben-avagraha" },
    {
      letter: "ৗ",
      unicode: "ৗ",
      name: "Au Length Mark",
      id: "ben-au-length-mark",
    },
    { letter: "ঀ", unicode: "ঀ", name: "Anji", id: "ben-anji" },
    { letter: "৳", unicode: "৳", name: "Taka Sign", id: "ben-taka-sign" },
  ];

  const bengaliDigits = [
    { letter: "০", unicode: "০", name: "Zero", id: "ben-digit-zero" },
    { letter: "১", unicode: "১", name: "One", id: "ben-digit-one" },
    { letter: "২", unicode: "২", name: "Two", id: "ben-digit-two" },
    { letter: "৩", unicode: "৩", name: "Three", id: "ben-digit-three" },
    { letter: "৪", unicode: "৪", name: "Four", id: "ben-digit-four" },
    { letter: "৫", unicode: "৫", name: "Five", id: "ben-digit-five" },
    { letter: "৬", unicode: "৬", name: "Six", id: "ben-digit-six" },
    { letter: "৭", unicode: "৭", name: "Seven", id: "ben-digit-seven" },
    { letter: "৮", unicode: "৮", name: "Eight", id: "ben-digit-eight" },
    { letter: "৯", unicode: "৯", name: "Nine", id: "ben-digit-nine" },
  ];

  function createKeys(containerId, items) {
    const container = document.getElementById(containerId);

    items.forEach((item) => {
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

  createKeys("bengali-vowels-container", bengaliVowels);
  createKeys("bengali-consonants-container", bengaliConsonants);
  createKeys("bengali-vowel-signs-container", bengaliVowelSigns);
  createKeys("bengali-signs-container", bengaliSigns);
  createKeys("bengali-digits-container", bengaliDigits);
});
