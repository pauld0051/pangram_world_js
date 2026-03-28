document.addEventListener("DOMContentLoaded", function () {
  const lepchaLetters = [
    { letter: "ᰀ", unicode: "ᰀ", name: "Ka", id: "letter-ka" },
    { letter: "ᰁ", unicode: "ᰁ", name: "Kla", id: "letter-kla" },
    { letter: "ᰂ", unicode: "ᰂ", name: "Kha", id: "letter-kha" },
    { letter: "ᰃ", unicode: "ᰃ", name: "Ga", id: "letter-ga" },
    { letter: "ᰄ", unicode: "ᰄ", name: "Gla", id: "letter-gla" },
    { letter: "ᰅ", unicode: "ᰅ", name: "Nga", id: "letter-nga" },
    { letter: "ᰆ", unicode: "ᰆ", name: "Ca", id: "letter-ca" },
    { letter: "ᰇ", unicode: "ᰇ", name: "Cha", id: "letter-cha" },
    { letter: "ᰈ", unicode: "ᰈ", name: "Ja", id: "letter-ja" },
    { letter: "ᰉ", unicode: "ᰉ", name: "Nya", id: "letter-nya" },
    { letter: "ᰊ", unicode: "ᰊ", name: "Ta", id: "letter-ta" },
    { letter: "ᰋ", unicode: "ᰋ", name: "Tha", id: "letter-tha" },
    { letter: "ᰌ", unicode: "ᰌ", name: "Da", id: "letter-da" },
    { letter: "ᰍ", unicode: "ᰍ", name: "Na", id: "letter-na" },
    { letter: "ᰎ", unicode: "ᰎ", name: "Pa", id: "letter-pa" },
    { letter: "ᰏ", unicode: "ᰏ", name: "Pla", id: "letter-pla" },
    { letter: "ᰐ", unicode: "ᰐ", name: "Pha", id: "letter-pha" },
    { letter: "ᰑ", unicode: "ᰑ", name: "Fa", id: "letter-fa" },
    { letter: "ᰒ", unicode: "ᰒ", name: "Fla", id: "letter-fla" },
    { letter: "ᰓ", unicode: "ᰓ", name: "Ba", id: "letter-ba" },
    { letter: "ᰔ", unicode: "ᰔ", name: "Bla", id: "letter-bla" },
    { letter: "ᰕ", unicode: "ᰕ", name: "Ma", id: "letter-ma" },
    { letter: "ᰖ", unicode: "ᰖ", name: "Mla", id: "letter-mla" },
    { letter: "ᰗ", unicode: "ᰗ", name: "Tsa", id: "letter-tsa" },
    { letter: "ᰘ", unicode: "ᰘ", name: "Tsha", id: "letter-tsha" },
    { letter: "ᰙ", unicode: "ᰙ", name: "Dza", id: "letter-dza" },
    { letter: "ᰚ", unicode: "ᰚ", name: "Ya", id: "letter-ya" },
    { letter: "ᰛ", unicode: "ᰛ", name: "Ra", id: "letter-ra" },
    { letter: "ᰜ", unicode: "ᰜ", name: "La", id: "letter-la" },
    { letter: "ᰝ", unicode: "ᰝ", name: "Ha", id: "letter-ha" },
    { letter: "ᰞ", unicode: "ᰞ", name: "Hla", id: "letter-hla" },
    { letter: "ᰟ", unicode: "ᰟ", name: "Va", id: "letter-va" },
    { letter: "ᰠ", unicode: "ᰠ", name: "Sa", id: "letter-sa" },
    { letter: "ᰡ", unicode: "ᰡ", name: "Sha", id: "letter-sha" },
    { letter: "ᰢ", unicode: "ᰢ", name: "Wa", id: "letter-wa" },
    { letter: "ᰣ", unicode: "ᰣ", name: "A", id: "letter-a" },
  ];

  const lepchaExtraLetters = [
    {
      letter: "ᰤ",
      unicode: "ᰤ",
      name: "Subjoined Ya",
      id: "extra-subjoined-ya",
    },
    {
      letter: "ᰥ",
      unicode: "ᰥ",
      name: "Subjoined Ra",
      id: "extra-subjoined-ra",
    },
    { letter: "ᱍ", unicode: "ᱍ", name: "Tta", id: "extra-tta" },
    { letter: "ᱎ", unicode: "ᱎ", name: "Ttha", id: "extra-ttha" },
    { letter: "ᱏ", unicode: "ᱏ", name: "Dda", id: "extra-dda" },
  ];

  const lepchaVowels = [
    { letter: "◌ᰦ", unicode: "ᰦ", name: "Vowel Sign Aa", id: "vowel-aa" },
    { letter: "◌ᰧ", unicode: "ᰧ", name: "Vowel Sign I", id: "vowel-i" },
    { letter: "◌ᰨ", unicode: "ᰨ", name: "Vowel Sign O", id: "vowel-o" },
    { letter: "◌ᰩ", unicode: "ᰩ", name: "Vowel Sign Oo", id: "vowel-oo" },
    { letter: "◌ᰪ", unicode: "ᰪ", name: "Vowel Sign U", id: "vowel-u" },
    { letter: "◌ᰫ", unicode: "ᰫ", name: "Vowel Sign Uu", id: "vowel-uu" },
    { letter: "◌ᰬ", unicode: "ᰬ", name: "Vowel Sign E", id: "vowel-e" },
  ];

  const lepchaSigns = [
    { letter: "◌ᰭ", unicode: "ᰭ", name: "Consonant Sign K", id: "sign-k" },
    { letter: "◌ᰮ", unicode: "ᰮ", name: "Consonant Sign M", id: "sign-m" },
    { letter: "◌ᰯ", unicode: "ᰯ", name: "Consonant Sign L", id: "sign-l" },
    { letter: "◌ᰰ", unicode: "ᰰ", name: "Consonant Sign N", id: "sign-n" },
    { letter: "◌ᰱ", unicode: "ᰱ", name: "Consonant Sign P", id: "sign-p" },
    { letter: "◌ᰲ", unicode: "ᰲ", name: "Consonant Sign R", id: "sign-r" },
    { letter: "◌ᰳ", unicode: "ᰳ", name: "Consonant Sign T", id: "sign-t" },
    {
      letter: "ᰴ",
      unicode: "ᰴ",
      name: "Consonant Sign Nyin-Do",
      id: "sign-nyin-do",
    },
    { letter: "ᰵ", unicode: "ᰵ", name: "Consonant Sign Kang", id: "sign-kang" },
    { letter: "◌ᰶ", unicode: "ᰶ", name: "Sign Ran", id: "sign-ran" },
    { letter: "◌᰷", unicode: "᰷", name: "Sign Nukta", id: "sign-nukta" },
  ];

  const lepchaPunctuation = [
    { letter: "᰻", unicode: "᰻", name: "Ta-Rol", id: "punct-ta-rol" },
    {
      letter: "᰼",
      unicode: "᰼",
      name: "Nyet Thyoom Ta-Rol",
      id: "punct-nyet-thyoom-ta-rol",
    },
    { letter: "᰽", unicode: "᰽", name: "Cer-Wa", id: "punct-cer-wa" },
    {
      letter: "᰾",
      unicode: "᰾",
      name: "Tshook Cer-Wa",
      id: "punct-tshook-cer-wa",
    },
    { letter: "᰿", unicode: "᰿", name: "Tshook", id: "punct-tshook" },
  ];

  const lepchaDigits = [
    { letter: "᱀", unicode: "᱀", name: "Zero", id: "digit-zero" },
    { letter: "᱁", unicode: "᱁", name: "One", id: "digit-one" },
    { letter: "᱂", unicode: "᱂", name: "Two", id: "digit-two" },
    { letter: "᱃", unicode: "᱃", name: "Three", id: "digit-three" },
    { letter: "᱄", unicode: "᱄", name: "Four", id: "digit-four" },
    { letter: "᱅", unicode: "᱅", name: "Five", id: "digit-five" },
    { letter: "᱆", unicode: "᱆", name: "Six", id: "digit-six" },
    { letter: "᱇", unicode: "᱇", name: "Seven", id: "digit-seven" },
    { letter: "᱈", unicode: "᱈", name: "Eight", id: "digit-eight" },
    { letter: "᱉", unicode: "᱉", name: "Nine", id: "digit-nine" },
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

  createKeys("lepcha-letters-container", lepchaLetters);
  createKeys("lepcha-extra-letters-container", lepchaExtraLetters);
  createKeys("lepcha-vowels-container", lepchaVowels);
  createKeys("lepcha-signs-container", lepchaSigns);
  createKeys("lepcha-punctuation-container", lepchaPunctuation);
  createKeys("lepcha-digits-container", lepchaDigits);
});
