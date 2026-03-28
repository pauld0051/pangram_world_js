document.addEventListener("DOMContentLoaded", function () {
  const kayahLiConsonants = [
    { letter: "ꤊ", unicode: "ꤊ", name: "Ka", id: "cons-ka" },
    { letter: "ꤋ", unicode: "ꤋ", name: "Kha", id: "cons-kha" },
    { letter: "ꤌ", unicode: "ꤌ", name: "Ga", id: "cons-ga" },
    { letter: "ꤍ", unicode: "ꤍ", name: "Nga", id: "cons-nga" },
    { letter: "ꤎ", unicode: "ꤎ", name: "Sa", id: "cons-sa" },
    { letter: "ꤏ", unicode: "ꤏ", name: "Sha", id: "cons-sha" },
    { letter: "ꤐ", unicode: "ꤐ", name: "Za", id: "cons-za" },
    { letter: "ꤑ", unicode: "ꤑ", name: "Nya", id: "cons-nya" },
    { letter: "ꤒ", unicode: "ꤒ", name: "Ta", id: "cons-ta" },
    { letter: "ꤓ", unicode: "ꤓ", name: "Hta", id: "cons-hta" },
    { letter: "ꤔ", unicode: "ꤔ", name: "Na", id: "cons-na" },
    { letter: "ꤕ", unicode: "ꤕ", name: "Pa", id: "cons-pa" },
    { letter: "ꤖ", unicode: "ꤖ", name: "Pha", id: "cons-pha" },
    { letter: "ꤗ", unicode: "ꤗ", name: "Ma", id: "cons-ma" },
    { letter: "ꤘ", unicode: "ꤘ", name: "Da", id: "cons-da" },
    { letter: "ꤙ", unicode: "ꤙ", name: "Ba", id: "cons-ba" },
    { letter: "ꤚ", unicode: "ꤚ", name: "Ra", id: "cons-ra" },
    { letter: "ꤛ", unicode: "ꤛ", name: "Ya", id: "cons-ya" },
    { letter: "ꤜ", unicode: "ꤜ", name: "La", id: "cons-la" },
    { letter: "ꤝ", unicode: "ꤝ", name: "Wa", id: "cons-wa" },
    { letter: "ꤞ", unicode: "ꤞ", name: "Tha", id: "cons-tha" },
    { letter: "ꤟ", unicode: "ꤟ", name: "Ha", id: "cons-ha" },
    { letter: "ꤠ", unicode: "ꤠ", name: "Va", id: "cons-va" },
    { letter: "ꤡ", unicode: "ꤡ", name: "Ca", id: "cons-ca" },
  ];

  const kayahLiVowels = [
    { letter: "ꤢ", unicode: "ꤢ", name: "A", id: "vowel-a" },
    { letter: "ꤣ", unicode: "ꤣ", name: "Oe", id: "vowel-oe" },
    { letter: "ꤤ", unicode: "ꤤ", name: "I", id: "vowel-i" },
    { letter: "ꤥ", unicode: "ꤥ", name: "Oo", id: "vowel-oo" },
  ];

  const kayahLiVowelSigns = [
    { letter: "◌ꤦ", unicode: "ꤦ", name: "Ue", id: "sign-ue" },
    { letter: "◌ꤧ", unicode: "ꤧ", name: "E", id: "sign-e" },
    { letter: "◌ꤨ", unicode: "ꤨ", name: "U", id: "sign-u" },
    { letter: "◌ꤩ", unicode: "ꤩ", name: "Ee", id: "sign-ee" },
    { letter: "◌ꤪ", unicode: "ꤪ", name: "O", id: "sign-o" },
  ];

  const kayahLiMarks = [
    { letter: "◌꤫", unicode: "꤫", name: "Tone Plophu", id: "tone-plophu" },
    { letter: "◌꤬", unicode: "꤬", name: "Tone Calya", id: "tone-calya" },
    {
      letter: "◌꤭",
      unicode: "꤭",
      name: "Tone Calya Plophu",
      id: "tone-calya-plophu",
    },
    { letter: "꤮", unicode: "꤮", name: "Sign Cwi", id: "punct-cwi" },
    { letter: "꤯", unicode: "꤯", name: "Sign Shya", id: "punct-shya" },
  ];

  const kayahLiDigits = [
    { letter: "꤀", unicode: "꤀", name: "Zero", id: "digit-zero" },
    { letter: "꤁", unicode: "꤁", name: "One", id: "digit-one" },
    { letter: "꤂", unicode: "꤂", name: "Two", id: "digit-two" },
    { letter: "꤃", unicode: "꤃", name: "Three", id: "digit-three" },
    { letter: "꤄", unicode: "꤄", name: "Four", id: "digit-four" },
    { letter: "꤅", unicode: "꤅", name: "Five", id: "digit-five" },
    { letter: "꤆", unicode: "꤆", name: "Six", id: "digit-six" },
    { letter: "꤇", unicode: "꤇", name: "Seven", id: "digit-seven" },
    { letter: "꤈", unicode: "꤈", name: "Eight", id: "digit-eight" },
    { letter: "꤉", unicode: "꤉", name: "Nine", id: "digit-nine" },
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

  createKeys("kayah-li-consonants-container", kayahLiConsonants);
  createKeys("kayah-li-vowels-container", kayahLiVowels);
  createKeys("kayah-li-vowel-signs-container", kayahLiVowelSigns);
  createKeys("kayah-li-marks-container", kayahLiMarks);
  createKeys("kayah-li-digits-container", kayahLiDigits);
});
