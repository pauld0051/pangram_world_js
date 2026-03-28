document.addEventListener("DOMContentLoaded", function () {
  const khmerConsonants = [
    { letter: "ក", unicode: "ក", name: "Ka", id: "cons-ka" },
    { letter: "ខ", unicode: "ខ", name: "Kha", id: "cons-kha" },
    { letter: "គ", unicode: "គ", name: "Ko", id: "cons-ko" },
    { letter: "ឃ", unicode: "ឃ", name: "Kho", id: "cons-kho" },
    { letter: "ង", unicode: "ង", name: "Ngo", id: "cons-ngo" },

    { letter: "ច", unicode: "ច", name: "Ca", id: "cons-ca" },
    { letter: "ឆ", unicode: "ឆ", name: "Cha", id: "cons-cha" },
    { letter: "ជ", unicode: "ជ", name: "Co", id: "cons-co" },
    { letter: "ឈ", unicode: "ឈ", name: "Cho", id: "cons-cho" },
    { letter: "ញ", unicode: "ញ", name: "Nyo", id: "cons-nyo" },

    { letter: "ដ", unicode: "ដ", name: "Da", id: "cons-da" },
    { letter: "ឋ", unicode: "ឋ", name: "Ttha", id: "cons-ttha" },
    { letter: "ឌ", unicode: "ឌ", name: "Do", id: "cons-do" },
    { letter: "ឍ", unicode: "ឍ", name: "Ttho", id: "cons-ttho" },
    { letter: "ណ", unicode: "ណ", name: "Nna", id: "cons-nna" },

    { letter: "ត", unicode: "ត", name: "Ta", id: "cons-ta" },
    { letter: "ថ", unicode: "ថ", name: "Tha", id: "cons-tha" },
    { letter: "ទ", unicode: "ទ", name: "To", id: "cons-to" },
    { letter: "ធ", unicode: "ធ", name: "Tho", id: "cons-tho" },
    { letter: "ន", unicode: "ន", name: "No", id: "cons-no" },

    { letter: "ប", unicode: "ប", name: "Ba", id: "cons-ba" },
    { letter: "ផ", unicode: "ផ", name: "Pha", id: "cons-pha" },
    { letter: "ព", unicode: "ព", name: "Po", id: "cons-po" },
    { letter: "ភ", unicode: "ភ", name: "Pho", id: "cons-pho" },
    { letter: "ម", unicode: "ម", name: "Mo", id: "cons-mo" },

    { letter: "យ", unicode: "យ", name: "Yo", id: "cons-yo" },
    { letter: "រ", unicode: "រ", name: "Ro", id: "cons-ro" },
    { letter: "ល", unicode: "ល", name: "Lo", id: "cons-lo" },
    { letter: "វ", unicode: "វ", name: "Vo", id: "cons-vo" },

    { letter: "ឝ", unicode: "ឝ", name: "Sha", id: "cons-sha" },
    { letter: "ឞ", unicode: "ឞ", name: "Sso", id: "cons-sso" },
    { letter: "ស", unicode: "ស", name: "Sa", id: "cons-sa" },
    { letter: "ហ", unicode: "ហ", name: "Ha", id: "cons-ha" },
    { letter: "ឡ", unicode: "ឡ", name: "La", id: "cons-la" },
    { letter: "អ", unicode: "អ", name: "Qa", id: "cons-qa" },
  ];

  const khmerIndependentVowels = [
    { letter: "ឣ", unicode: "ឣ", name: "Qa", id: "iv-qa" },
    { letter: "ឤ", unicode: "ឤ", name: "Qaa", id: "iv-qaa" },
    { letter: "ឥ", unicode: "ឥ", name: "Qi", id: "iv-qi" },
    { letter: "ឦ", unicode: "ឦ", name: "Qii", id: "iv-qii" },
    { letter: "ឧ", unicode: "ឧ", name: "Qu", id: "iv-qu" },
    { letter: "ឨ", unicode: "ឨ", name: "Quk", id: "iv-quk" },
    { letter: "ឩ", unicode: "ឩ", name: "Quu", id: "iv-quu" },
    { letter: "ឪ", unicode: "ឪ", name: "Quuv", id: "iv-quuv" },
    { letter: "ឫ", unicode: "ឫ", name: "Ry", id: "iv-ry" },
    { letter: "ឬ", unicode: "ឬ", name: "Ryy", id: "iv-ryy" },
    { letter: "ឭ", unicode: "ឭ", name: "Ly", id: "iv-ly" },
    { letter: "ឮ", unicode: "ឮ", name: "Lyy", id: "iv-lyy" },
    { letter: "ឯ", unicode: "ឯ", name: "Qe", id: "iv-qe" },
    { letter: "ឰ", unicode: "ឰ", name: "Qai", id: "iv-qai" },
    { letter: "ឱ", unicode: "ឱ", name: "Qoo Type One", id: "iv-qoo-1" },
    { letter: "ឲ", unicode: "ឲ", name: "Qoo Type Two", id: "iv-qoo-2" },
    { letter: "ឳ", unicode: "ឳ", name: "Qau", id: "iv-qau" },
  ];

  const khmerVowelSigns = [
    { letter: "◌ា", unicode: "ា", name: "AA", id: "vs-aa" },
    { letter: "◌ិ", unicode: "ិ", name: "I", id: "vs-i" },
    { letter: "◌ី", unicode: "ី", name: "II", id: "vs-ii" },
    { letter: "◌ឹ", unicode: "ឹ", name: "Y", id: "vs-y" },
    { letter: "◌ឺ", unicode: "ឺ", name: "YY", id: "vs-yy" },
    { letter: "◌ុ", unicode: "ុ", name: "U", id: "vs-u" },
    { letter: "◌ូ", unicode: "ូ", name: "UU", id: "vs-uu" },
    { letter: "◌ួ", unicode: "ួ", name: "UA", id: "vs-ua" },
    { letter: "◌ើ", unicode: "ើ", name: "OE", id: "vs-oe" },
    { letter: "◌ឿ", unicode: "ឿ", name: "YAI", id: "vs-yai" },
    { letter: "◌ៀ", unicode: "ៀ", name: "IE", id: "vs-ie" },
    { letter: "◌េ", unicode: "េ", name: "E", id: "vs-e" },
    { letter: "◌ែ", unicode: "ែ", name: "AE", id: "vs-ae" },
    { letter: "◌ៃ", unicode: "ៃ", name: "AI", id: "vs-ai" },
    { letter: "◌ោ", unicode: "ោ", name: "OO", id: "vs-oo" },
    { letter: "◌ៅ", unicode: "ៅ", name: "AU", id: "vs-au" },
  ];

  const khmerSigns = [
    { letter: "◌ំ", unicode: "ំ", name: "Nikahit", id: "sign-nikahit" },
    { letter: "◌ះ", unicode: "ះ", name: "Reahmuk", id: "sign-reahmuk" },
    {
      letter: "◌ៈ",
      unicode: "ៈ",
      name: "Yuukaleapintu",
      id: "sign-yuukaleapintu",
    },
    { letter: "◌៉", unicode: "៉", name: "Muusikatoan", id: "sign-muusikatoan" },
    { letter: "◌៊", unicode: "៊", name: "Triisap", id: "sign-triisap" },
    { letter: "◌់", unicode: "់", name: "Bantoc", id: "sign-bantoc" },
    { letter: "◌៌", unicode: "៌", name: "Robat", id: "sign-robat" },
    { letter: "◌៍", unicode: "៍", name: "Toandakhiat", id: "sign-toandakhiat" },
    { letter: "◌៎", unicode: "៎", name: "Kakabat", id: "sign-kakabat" },
    { letter: "◌៏", unicode: "៏", name: "Ahsda", id: "sign-ahsda" },
    {
      letter: "◌័",
      unicode: "័",
      name: "Samyok Sannya",
      id: "sign-samyok-sannya",
    },
    { letter: "◌៑", unicode: "៑", name: "Viriam", id: "sign-viriam" },
    { letter: "◌្", unicode: "្", name: "Coeng", id: "sign-coeng" },
  ];

  const khmerPunctuation = [
    { letter: "។", unicode: "។", name: "Khmer Sign Khan", id: "punct-khan" },
    {
      letter: "៕",
      unicode: "៕",
      name: "Khmer Sign Bariyoosan",
      id: "punct-bariyoosan",
    },
    {
      letter: "៖",
      unicode: "៖",
      name: "Khmer Sign Camnuc Pii Kuuh",
      id: "punct-camnuc-pii-kuuh",
    },
    {
      letter: "ៗ",
      unicode: "ៗ",
      name: "Khmer Sign Lek Too",
      id: "punct-lek-too",
    },
    {
      letter: "៘",
      unicode: "៘",
      name: "Khmer Sign Beyyal",
      id: "punct-beyyal",
    },
    {
      letter: "៙",
      unicode: "៙",
      name: "Khmer Sign Phnaek Muan",
      id: "punct-phnaek-muan",
    },
    {
      letter: "៚",
      unicode: "៚",
      name: "Khmer Sign Koomuut",
      id: "punct-koomuut",
    },
    {
      letter: "៛",
      unicode: "៛",
      name: "Khmer Currency Symbol Riel",
      id: "punct-riel",
    },
  ];

  const khmerDigits = [
    { letter: "០", unicode: "០", name: "Zero", id: "digit-zero" },
    { letter: "១", unicode: "១", name: "One", id: "digit-one" },
    { letter: "២", unicode: "២", name: "Two", id: "digit-two" },
    { letter: "៣", unicode: "៣", name: "Three", id: "digit-three" },
    { letter: "៤", unicode: "៤", name: "Four", id: "digit-four" },
    { letter: "៥", unicode: "៥", name: "Five", id: "digit-five" },
    { letter: "៦", unicode: "៦", name: "Six", id: "digit-six" },
    { letter: "៧", unicode: "៧", name: "Seven", id: "digit-seven" },
    { letter: "៨", unicode: "៨", name: "Eight", id: "digit-eight" },
    { letter: "៩", unicode: "៩", name: "Nine", id: "digit-nine" },
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

  createKeys("khmer-consonants-container", khmerConsonants);
  createKeys("khmer-independent-vowels-container", khmerIndependentVowels);
  createKeys("khmer-vowel-signs-container", khmerVowelSigns);
  createKeys("khmer-signs-container", khmerSigns);
  createKeys("khmer-punctuation-container", khmerPunctuation);
  createKeys("khmer-digits-container", khmerDigits);
});
