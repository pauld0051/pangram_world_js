document.addEventListener("DOMContentLoaded", function () {
  const limbuLetters = [
    {
      letter: "ᤀ",
      unicode: "ᤀ",
      name: "Vowel Carrier",
      id: "letter-vowel-carrier",
    },
    { letter: "ᤁ", unicode: "ᤁ", name: "Ka", id: "letter-ka" },
    { letter: "ᤂ", unicode: "ᤂ", name: "Kha", id: "letter-kha" },
    { letter: "ᤃ", unicode: "ᤃ", name: "Ga", id: "letter-ga" },
    { letter: "ᤄ", unicode: "ᤄ", name: "Gha", id: "letter-gha" },
    { letter: "ᤅ", unicode: "ᤅ", name: "Nga", id: "letter-nga" },
    { letter: "ᤆ", unicode: "ᤆ", name: "Ca", id: "letter-ca" },
    { letter: "ᤇ", unicode: "ᤇ", name: "Cha", id: "letter-cha" },
    { letter: "ᤈ", unicode: "ᤈ", name: "Ja", id: "letter-ja" },
    { letter: "ᤉ", unicode: "ᤉ", name: "Jha", id: "letter-jha" },
    { letter: "ᤊ", unicode: "ᤊ", name: "Yan", id: "letter-yan" },
    { letter: "ᤋ", unicode: "ᤋ", name: "Ta", id: "letter-ta" },
    { letter: "ᤌ", unicode: "ᤌ", name: "Tha", id: "letter-tha" },
    { letter: "ᤍ", unicode: "ᤍ", name: "Da", id: "letter-da" },
    { letter: "ᤎ", unicode: "ᤎ", name: "Dha", id: "letter-dha" },
    { letter: "ᤏ", unicode: "ᤏ", name: "Na", id: "letter-na" },
    { letter: "ᤐ", unicode: "ᤐ", name: "Pa", id: "letter-pa" },
    { letter: "ᤑ", unicode: "ᤑ", name: "Pha", id: "letter-pha" },
    { letter: "ᤒ", unicode: "ᤒ", name: "Ba", id: "letter-ba" },
    { letter: "ᤓ", unicode: "ᤓ", name: "Bha", id: "letter-bha" },
    { letter: "ᤔ", unicode: "ᤔ", name: "Ma", id: "letter-ma" },
    { letter: "ᤕ", unicode: "ᤕ", name: "Ya", id: "letter-ya" },
    { letter: "ᤖ", unicode: "ᤖ", name: "Ra", id: "letter-ra" },
    { letter: "ᤗ", unicode: "ᤗ", name: "La", id: "letter-la" },
    { letter: "ᤘ", unicode: "ᤘ", name: "Wa", id: "letter-wa" },
    { letter: "ᤙ", unicode: "ᤙ", name: "Sha", id: "letter-sha" },
    { letter: "ᤚ", unicode: "ᤚ", name: "Ssa", id: "letter-ssa" },
    { letter: "ᤛ", unicode: "ᤛ", name: "Sa", id: "letter-sa" },
    { letter: "ᤜ", unicode: "ᤜ", name: "Ha", id: "letter-ha" },
  ];
  const limbuExtraLetters = [
    { letter: "ᤝ", unicode: "ᤝ", name: "Gyan", id: "extra-gyan" },
    { letter: "ᤞ", unicode: "ᤞ", name: "Tra", id: "extra-tra" },
  ];
  const limbuVowels = [
    { letter: "◌ᤠ", unicode: "ᤠ", name: "Vowel Sign A", id: "vowel-a" },
    { letter: "◌ᤡ", unicode: "ᤡ", name: "Vowel Sign I", id: "vowel-i" },
    { letter: "◌ᤢ", unicode: "ᤢ", name: "Vowel Sign U", id: "vowel-u" },
    { letter: "◌ᤣ", unicode: "ᤣ", name: "Vowel Sign EE", id: "vowel-ee" },
    { letter: "◌ᤤ", unicode: "ᤤ", name: "Vowel Sign AI", id: "vowel-ai" },
    { letter: "◌ᤥ", unicode: "ᤥ", name: "Vowel Sign OO", id: "vowel-oo" },
    { letter: "◌ᤦ", unicode: "ᤦ", name: "Vowel Sign AU", id: "vowel-au" },
    { letter: "◌ᤧ", unicode: "ᤧ", name: "Vowel Sign E", id: "vowel-e" },
    { letter: "◌ᤨ", unicode: "ᤨ", name: "Vowel Sign O", id: "vowel-o" },
    { letter: "◌ᤩ", unicode: "ᤩ", name: "Subjoined Ya", id: "subjoined-ya" },
    { letter: "◌ᤪ", unicode: "ᤪ", name: "Subjoined Ra", id: "subjoined-ra" },
    { letter: "◌ᤫ", unicode: "ᤫ", name: "Subjoined Wa", id: "subjoined-wa" },
  ];
  const limbuSigns = [
    { letter: "ᤰ", unicode: "ᤰ", name: "Small Letter Ka", id: "sign-small-ka" },
    {
      letter: "ᤱ",
      unicode: "ᤱ",
      name: "Small Letter Nga",
      id: "sign-small-nga",
    },
    {
      letter: "ᤲ",
      unicode: "ᤲ",
      name: "Small Letter Anusvara",
      id: "sign-small-anusvara",
    },
    { letter: "ᤳ", unicode: "ᤳ", name: "Small Letter Ta", id: "sign-small-ta" },
    { letter: "ᤴ", unicode: "ᤴ", name: "Small Letter Na", id: "sign-small-na" },
    { letter: "ᤵ", unicode: "ᤵ", name: "Small Letter Pa", id: "sign-small-pa" },
    { letter: "ᤶ", unicode: "ᤶ", name: "Small Letter Ma", id: "sign-small-ma" },
    { letter: "ᤷ", unicode: "ᤷ", name: "Small Letter Ra", id: "sign-small-ra" },
    { letter: "ᤸ", unicode: "ᤸ", name: "Small Letter La", id: "sign-small-la" },
    {
      letter: "◌᤹",
      unicode: "᤹",
      name: "Sign Mukphreng",
      id: "sign-mukphreng",
    },
    {
      letter: "◌᤺",
      unicode: "᤺",
      name: "Sign Kemphreng",
      id: "sign-kemphreng",
    },
    { letter: "◌᤻", unicode: "᤻", name: "Sign Sa-I", id: "sign-sa-i" },
    { letter: "᥀", unicode: "᥀", name: "Sign Loo", id: "sign-loo" },
  ];
  const limbuPunctuation = [
    {
      letter: "᥄",
      unicode: "᥄",
      name: "Exclamation Mark",
      id: "punct-exclamation",
    },
    { letter: "᥅", unicode: "᥅", name: "Question Mark", id: "punct-question" },
  ];
  const limbuDigits = [
    { letter: "᥆", unicode: "᥆", name: "Zero", id: "digit-zero" },
    { letter: "᥇", unicode: "᥇", name: "One", id: "digit-one" },
    { letter: "᥈", unicode: "᥈", name: "Two", id: "digit-two" },
    { letter: "᥉", unicode: "᥉", name: "Three", id: "digit-three" },
    { letter: "᥊", unicode: "᥊", name: "Four", id: "digit-four" },
    { letter: "᥋", unicode: "᥋", name: "Five", id: "digit-five" },
    { letter: "᥌", unicode: "᥌", name: "Six", id: "digit-six" },
    { letter: "᥍", unicode: "᥍", name: "Seven", id: "digit-seven" },
    { letter: "᥎", unicode: "᥎", name: "Eight", id: "digit-eight" },
    { letter: "᥏", unicode: "᥏", name: "Nine", id: "digit-nine" },
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
  createKeys("limbu-letters-container", limbuLetters);
  createKeys("limbu-extra-letters-container", limbuExtraLetters);
  createKeys("limbu-vowels-container", limbuVowels);
  createKeys("limbu-signs-container", limbuSigns);
  createKeys("limbu-punctuation-container", limbuPunctuation);
  createKeys("limbu-digits-container", limbuDigits);
});
