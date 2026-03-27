document.addEventListener("DOMContentLoaded", function () {
  const devanagariVowels = [
    { letter: "अ", unicode: "अ", name: "A", id: "dev-vowel-a" },
    { letter: "आ", unicode: "आ", name: "Aa", id: "dev-vowel-aa" },
    { letter: "इ", unicode: "इ", name: "I", id: "dev-vowel-i" },
    { letter: "ई", unicode: "ई", name: "Ii", id: "dev-vowel-ii" },
    { letter: "उ", unicode: "उ", name: "U", id: "dev-vowel-u" },
    { letter: "ऊ", unicode: "ऊ", name: "Uu", id: "dev-vowel-uu" },
    { letter: "ऋ", unicode: "ऋ", name: "Vocalic R", id: "dev-vowel-vocalic-r" },
    {
      letter: "ॠ",
      unicode: "ॠ",
      name: "Vocalic Rr",
      id: "dev-vowel-vocalic-rr",
    },
    { letter: "ऌ", unicode: "ऌ", name: "Vocalic L", id: "dev-vowel-vocalic-l" },
    {
      letter: "ॡ",
      unicode: "ॡ",
      name: "Vocalic Ll",
      id: "dev-vowel-vocalic-ll",
    },
    { letter: "ए", unicode: "ए", name: "E", id: "dev-vowel-e" },
    { letter: "ऐ", unicode: "ऐ", name: "Ai", id: "dev-vowel-ai" },
    { letter: "ओ", unicode: "ओ", name: "O", id: "dev-vowel-o" },
    { letter: "औ", unicode: "औ", name: "Au", id: "dev-vowel-au" },
  ];

  const devanagariConsonants = [
    { letter: "क", unicode: "क", name: "Ka", id: "dev-con-ka" },
    { letter: "ख", unicode: "ख", name: "Kha", id: "dev-con-kha" },
    { letter: "ग", unicode: "ग", name: "Ga", id: "dev-con-ga" },
    { letter: "घ", unicode: "घ", name: "Gha", id: "dev-con-gha" },
    { letter: "ङ", unicode: "ङ", name: "Nga", id: "dev-con-nga" },

    { letter: "च", unicode: "च", name: "Ca", id: "dev-con-ca" },
    { letter: "छ", unicode: "छ", name: "Cha", id: "dev-con-cha" },
    { letter: "ज", unicode: "ज", name: "Ja", id: "dev-con-ja" },
    { letter: "झ", unicode: "झ", name: "Jha", id: "dev-con-jha" },
    { letter: "ञ", unicode: "ञ", name: "Nya", id: "dev-con-nya" },

    { letter: "ट", unicode: "ट", name: "Tta", id: "dev-con-tta" },
    { letter: "ठ", unicode: "ठ", name: "Ttha", id: "dev-con-ttha" },
    { letter: "ड", unicode: "ड", name: "Dda", id: "dev-con-dda" },
    { letter: "ढ", unicode: "ढ", name: "Ddha", id: "dev-con-ddha" },
    { letter: "ण", unicode: "ण", name: "Nna", id: "dev-con-nna" },

    { letter: "त", unicode: "त", name: "Ta", id: "dev-con-ta" },
    { letter: "थ", unicode: "थ", name: "Tha", id: "dev-con-tha" },
    { letter: "द", unicode: "द", name: "Da", id: "dev-con-da" },
    { letter: "ध", unicode: "ध", name: "Dha", id: "dev-con-dha" },
    { letter: "न", unicode: "न", name: "Na", id: "dev-con-na" },

    { letter: "प", unicode: "प", name: "Pa", id: "dev-con-pa" },
    { letter: "फ", unicode: "फ", name: "Pha", id: "dev-con-pha" },
    { letter: "ब", unicode: "ब", name: "Ba", id: "dev-con-ba" },
    { letter: "भ", unicode: "भ", name: "Bha", id: "dev-con-bha" },
    { letter: "म", unicode: "म", name: "Ma", id: "dev-con-ma" },

    { letter: "य", unicode: "य", name: "Ya", id: "dev-con-ya" },
    { letter: "र", unicode: "र", name: "Ra", id: "dev-con-ra" },
    { letter: "ल", unicode: "ल", name: "La", id: "dev-con-la" },
    { letter: "व", unicode: "व", name: "Va", id: "dev-con-va" },

    { letter: "श", unicode: "श", name: "Sha", id: "dev-con-sha" },
    { letter: "ष", unicode: "ष", name: "Ssa", id: "dev-con-ssa" },
    { letter: "स", unicode: "स", name: "Sa", id: "dev-con-sa" },
    { letter: "ह", unicode: "ह", name: "Ha", id: "dev-con-ha" },
    { letter: "ळ", unicode: "ळ", name: "Lla", id: "dev-con-lla" },
  ];

  const devanagariVowelSigns = [
    { letter: "◌ा", unicode: "ा", name: "Sign Aa", id: "dev-sign-aa" },
    { letter: "◌ि", unicode: "ि", name: "Sign I", id: "dev-sign-i" },
    { letter: "◌ी", unicode: "ी", name: "Sign Ii", id: "dev-sign-ii" },
    { letter: "◌ु", unicode: "ु", name: "Sign U", id: "dev-sign-u" },
    { letter: "◌ू", unicode: "ू", name: "Sign Uu", id: "dev-sign-uu" },
    {
      letter: "◌ृ",
      unicode: "ृ",
      name: "Sign Vocalic R",
      id: "dev-sign-vocalic-r",
    },
    {
      letter: "◌ॄ",
      unicode: "ॄ",
      name: "Sign Vocalic Rr",
      id: "dev-sign-vocalic-rr",
    },
    {
      letter: "◌ॢ",
      unicode: "ॢ",
      name: "Sign Vocalic L",
      id: "dev-sign-vocalic-l",
    },
    {
      letter: "◌ॣ",
      unicode: "ॣ",
      name: "Sign Vocalic Ll",
      id: "dev-sign-vocalic-ll",
    },
    { letter: "◌े", unicode: "े", name: "Sign E", id: "dev-sign-e" },
    { letter: "◌ै", unicode: "ै", name: "Sign Ai", id: "dev-sign-ai" },
    { letter: "◌ो", unicode: "ो", name: "Sign O", id: "dev-sign-o" },
    { letter: "◌ौ", unicode: "ौ", name: "Sign Au", id: "dev-sign-au" },
  ];

  const devanagariSigns = [
    { letter: "ँ", unicode: "ँ", name: "Candrabindu", id: "dev-candrabindu" },
    { letter: "ं", unicode: "ं", name: "Anusvara", id: "dev-anusvara" },
    { letter: "ः", unicode: "ः", name: "Visarga", id: "dev-visarga" },
    { letter: "्", unicode: "्", name: "Virama", id: "dev-virama" },
    { letter: "़", unicode: "़", name: "Nukta", id: "dev-nukta" },
    { letter: "ऽ", unicode: "ऽ", name: "Avagraha", id: "dev-avagraha" },
    { letter: "ॐ", unicode: "ॐ", name: "Om", id: "dev-om" },
    { letter: "।", unicode: "।", name: "Danda", id: "dev-danda" },
    { letter: "॥", unicode: "॥", name: "Double Danda", id: "dev-double-danda" },
    { letter: "क़", unicode: "क़", name: "Qa", id: "dev-qa" },
    { letter: "ख़", unicode: "ख़", name: "Khha", id: "dev-khha" },
    { letter: "ग़", unicode: "ग़", name: "Ghha", id: "dev-ghha" },
    { letter: "ज़", unicode: "ज़", name: "Za", id: "dev-za" },
    { letter: "ड़", unicode: "ड़", name: "Dddha", id: "dev-dddha" },
    { letter: "ढ़", unicode: "ढ़", name: "Rha", id: "dev-rha" },
    { letter: "फ़", unicode: "फ़", name: "Fa", id: "dev-fa" },
    { letter: "य़", unicode: "य़", name: "Yya", id: "dev-yya" },
    { letter: "क्ष", unicode: "क्ष", name: "Ksha", id: "dev-ksha" },
    { letter: "त्र", unicode: "त्र", name: "Tra", id: "dev-tra" },
    { letter: "ज्ञ", unicode: "ज्ञ", name: "Gya", id: "dev-gya" },
  ];

  const devanagariDigits = [
    { letter: "०", unicode: "०", name: "Zero", id: "dev-digit-zero" },
    { letter: "१", unicode: "१", name: "One", id: "dev-digit-one" },
    { letter: "२", unicode: "२", name: "Two", id: "dev-digit-two" },
    { letter: "३", unicode: "३", name: "Three", id: "dev-digit-three" },
    { letter: "४", unicode: "४", name: "Four", id: "dev-digit-four" },
    { letter: "५", unicode: "५", name: "Five", id: "dev-digit-five" },
    { letter: "६", unicode: "६", name: "Six", id: "dev-digit-six" },
    { letter: "७", unicode: "७", name: "Seven", id: "dev-digit-seven" },
    { letter: "८", unicode: "८", name: "Eight", id: "dev-digit-eight" },
    { letter: "९", unicode: "९", name: "Nine", id: "dev-digit-nine" },
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

  createKeys("devanagari-vowels-container", devanagariVowels);
  createKeys("devanagari-consonants-container", devanagariConsonants);
  createKeys("devanagari-vowel-signs-container", devanagariVowelSigns);
  createKeys("devanagari-signs-container", devanagariSigns);
  createKeys("devanagari-digits-container", devanagariDigits);
});
