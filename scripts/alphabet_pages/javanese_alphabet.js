document.addEventListener("DOMContentLoaded", function () {
  const javaneseVowels = [
    { letter: "ꦄ", unicode: "ꦄ", name: "A", id: "vowel-a" },
    { letter: "ꦅ", unicode: "ꦅ", name: "I Kawi", id: "vowel-i-kawi" },
    { letter: "ꦆ", unicode: "ꦆ", name: "I", id: "vowel-i" },
    { letter: "ꦇ", unicode: "ꦇ", name: "II", id: "vowel-ii" },
    { letter: "ꦈ", unicode: "ꦈ", name: "U", id: "vowel-u" },
    { letter: "ꦉ", unicode: "ꦉ", name: "Pa Cerek", id: "vowel-pa-cerek" },
    { letter: "ꦊ", unicode: "ꦊ", name: "Nga Lelet", id: "vowel-nga-lelet" },
    {
      letter: "ꦋ",
      unicode: "ꦋ",
      name: "Nga Lelet Raswadi",
      id: "vowel-nga-lelet-raswadi",
    },
    { letter: "ꦌ", unicode: "ꦌ", name: "E", id: "vowel-e" },
    { letter: "ꦍ", unicode: "ꦍ", name: "AI", id: "vowel-ai" },
    { letter: "ꦎ", unicode: "ꦎ", name: "O", id: "vowel-o" },
  ];

  const javaneseLetters = [
    { letter: "ꦏ", unicode: "ꦏ", name: "Ka", id: "letter-ka" },
    { letter: "ꦒ", unicode: "ꦒ", name: "Ga", id: "letter-ga" },
    { letter: "ꦔ", unicode: "ꦔ", name: "Nga", id: "letter-nga" },
    { letter: "ꦕ", unicode: "ꦕ", name: "Ca", id: "letter-ca" },
    { letter: "ꦗ", unicode: "ꦗ", name: "Ja", id: "letter-ja" },
    { letter: "ꦚ", unicode: "ꦚ", name: "Nya", id: "letter-nya" },
    { letter: "ꦛ", unicode: "ꦛ", name: "Tta", id: "letter-tta" },
    { letter: "ꦝ", unicode: "ꦝ", name: "Dda", id: "letter-dda" },
    { letter: "ꦠ", unicode: "ꦠ", name: "Ta", id: "letter-ta" },
    { letter: "ꦢ", unicode: "ꦢ", name: "Da", id: "letter-da" },
    { letter: "ꦤ", unicode: "ꦤ", name: "Na", id: "letter-na" },
    { letter: "ꦥ", unicode: "ꦥ", name: "Pa", id: "letter-pa" },
    { letter: "ꦧ", unicode: "ꦧ", name: "Ba", id: "letter-ba" },
    { letter: "ꦩ", unicode: "ꦩ", name: "Ma", id: "letter-ma" },
    { letter: "ꦪ", unicode: "ꦪ", name: "Ya", id: "letter-ya" },
    { letter: "ꦫ", unicode: "ꦫ", name: "Ra", id: "letter-ra" },
    { letter: "ꦭ", unicode: "ꦭ", name: "La", id: "letter-la" },
    { letter: "ꦮ", unicode: "ꦮ", name: "Wa", id: "letter-wa" },
    { letter: "ꦱ", unicode: "ꦱ", name: "Sa", id: "letter-sa" },
    { letter: "ꦲ", unicode: "ꦲ", name: "Ha", id: "letter-ha" },
  ];

  const javaneseSpecial = [
    { letter: "ꦐ", unicode: "ꦐ", name: "Ka Sasak", id: "special-ka-sasak" },
    { letter: "ꦑ", unicode: "ꦑ", name: "Ka Murda", id: "special-ka-murda" },
    { letter: "ꦓ", unicode: "ꦓ", name: "Ga Murda", id: "special-ga-murda" },
    { letter: "ꦖ", unicode: "ꦖ", name: "Ca Murda", id: "special-ca-murda" },
    { letter: "ꦘ", unicode: "ꦘ", name: "Nya Murda", id: "special-nya-murda" },
    {
      letter: "ꦙ",
      unicode: "ꦙ",
      name: "Ja Mahaprana",
      id: "special-ja-mahaprana",
    },
    {
      letter: "ꦜ",
      unicode: "ꦜ",
      name: "Tta Mahaprana",
      id: "special-tta-mahaprana",
    },
    {
      letter: "ꦞ",
      unicode: "ꦞ",
      name: "Dda Mahaprana",
      id: "special-dda-mahaprana",
    },
    { letter: "ꦟ", unicode: "ꦟ", name: "Na Murda", id: "special-na-murda" },
    { letter: "ꦡ", unicode: "ꦡ", name: "Ta Murda", id: "special-ta-murda" },
    {
      letter: "ꦣ",
      unicode: "ꦣ",
      name: "Da Mahaprana",
      id: "special-da-mahaprana",
    },
    { letter: "ꦦ", unicode: "ꦦ", name: "Pa Murda", id: "special-pa-murda" },
    { letter: "ꦨ", unicode: "ꦨ", name: "Ba Murda", id: "special-ba-murda" },
    { letter: "ꦬ", unicode: "ꦬ", name: "Ra Agung", id: "special-ra-agung" },
    { letter: "ꦯ", unicode: "ꦯ", name: "Sa Murda", id: "special-sa-murda" },
    {
      letter: "ꦰ",
      unicode: "ꦰ",
      name: "Sa Mahaprana",
      id: "special-sa-mahaprana",
    },
  ];

  const javaneseSigns = [
    { letter: "ꦀ", unicode: "ꦀ", name: "Panyangga", id: "sign-panyangga" },
    { letter: "ꦁ", unicode: "ꦁ", name: "Cecak", id: "sign-cecak" },
    { letter: "ꦂ", unicode: "ꦂ", name: "Layar", id: "sign-layar" },
    { letter: "ꦃ", unicode: "ꦃ", name: "Wignyan", id: "sign-wignyan" },
    { letter: "◌꦳", unicode: "꦳", name: "Cecak Telu", id: "sign-cecak-telu" },
    { letter: "◌ꦴ", unicode: "ꦴ", name: "Tarung", id: "sign-tarung" },
    { letter: "◌ꦵ", unicode: "ꦵ", name: "Tolong", id: "sign-tolong" },
    { letter: "◌ꦶ", unicode: "ꦶ", name: "Wulu", id: "sign-wulu" },
    { letter: "◌ꦷ", unicode: "ꦷ", name: "Wulu Melik", id: "sign-wulu-melik" },
    { letter: "◌ꦸ", unicode: "ꦸ", name: "Suku", id: "sign-suku" },
    { letter: "◌ꦹ", unicode: "ꦹ", name: "Suku Mendut", id: "sign-suku-mendut" },
    { letter: "◌ꦺ", unicode: "ꦺ", name: "Taling", id: "sign-taling" },
    { letter: "◌ꦻ", unicode: "ꦻ", name: "Dirga Mure", id: "sign-dirga-mure" },
    { letter: "◌ꦼ", unicode: "ꦼ", name: "Pepet", id: "sign-pepet" },
    { letter: "◌ꦽ", unicode: "ꦽ", name: "Keret", id: "sign-keret" },
    { letter: "◌ꦾ", unicode: "ꦾ", name: "Pengkal", id: "sign-pengkal" },
    { letter: "◌ꦿ", unicode: "ꦿ", name: "Cakra", id: "sign-cakra" },
    { letter: "◌꧀", unicode: "꧀", name: "Pangkon", id: "sign-pangkon" },
  ];

  const javanesePunctuation = [
    {
      letter: "꧁",
      unicode: "꧁",
      name: "Left Rerenggan",
      id: "punct-left-rerenggan",
    },
    {
      letter: "꧂",
      unicode: "꧂",
      name: "Right Rerenggan",
      id: "punct-right-rerenggan",
    },
    { letter: "꧃", unicode: "꧃", name: "Pada Andap", id: "punct-pada-andap" },
    { letter: "꧄", unicode: "꧄", name: "Pada Madya", id: "punct-pada-madya" },
    { letter: "꧅", unicode: "꧅", name: "Pada Luhur", id: "punct-pada-luhur" },
    { letter: "꧆", unicode: "꧆", name: "Pada Windu", id: "punct-pada-windu" },
    {
      letter: "꧇",
      unicode: "꧇",
      name: "Pada Pangkat",
      id: "punct-pada-pangkat",
    },
    { letter: "꧈", unicode: "꧈", name: "Pada Lingsa", id: "punct-pada-lingsa" },
    { letter: "꧉", unicode: "꧉", name: "Pada Lungsi", id: "punct-pada-lungsi" },
    { letter: "꧊", unicode: "꧊", name: "Pada Adeg", id: "punct-pada-adeg" },
    {
      letter: "꧋",
      unicode: "꧋",
      name: "Pada Adeg Adeg",
      id: "punct-pada-adeg-adeg",
    },
    {
      letter: "꧌",
      unicode: "꧌",
      name: "Pada Piseleh",
      id: "punct-pada-piseleh",
    },
    {
      letter: "꧍",
      unicode: "꧍",
      name: "Turned Pada Piseleh",
      id: "punct-turned-pada-piseleh",
    },
    { letter: "ꧏ", unicode: "ꧏ", name: "Pangrangkep", id: "punct-pangrangkep" },
    {
      letter: "꧞",
      unicode: "꧞",
      name: "Pada Tirta Tumetes",
      id: "punct-pada-tirta-tumetes",
    },
    {
      letter: "꧟",
      unicode: "꧟",
      name: "Pada Isen-Isen",
      id: "punct-pada-isen-isen",
    },
  ];

  const javaneseDigits = [
    { letter: "꧐", unicode: "꧐", name: "Zero", id: "digit-zero" },
    { letter: "꧑", unicode: "꧑", name: "One", id: "digit-one" },
    { letter: "꧒", unicode: "꧒", name: "Two", id: "digit-two" },
    { letter: "꧓", unicode: "꧓", name: "Three", id: "digit-three" },
    { letter: "꧔", unicode: "꧔", name: "Four", id: "digit-four" },
    { letter: "꧕", unicode: "꧕", name: "Five", id: "digit-five" },
    { letter: "꧖", unicode: "꧖", name: "Six", id: "digit-six" },
    { letter: "꧗", unicode: "꧗", name: "Seven", id: "digit-seven" },
    { letter: "꧘", unicode: "꧘", name: "Eight", id: "digit-eight" },
    { letter: "꧙", unicode: "꧙", name: "Nine", id: "digit-nine" },
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

  createKeys("javanese-vowels-container", javaneseVowels);
  createKeys("javanese-letters-container", javaneseLetters);
  createKeys("javanese-special-container", javaneseSpecial);
  createKeys("javanese-signs-container", javaneseSigns);
  createKeys("javanese-punctuation-container", javanesePunctuation);
  createKeys("javanese-digits-container", javaneseDigits);
});
