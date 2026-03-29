document.addEventListener("DOMContentLoaded", function () {
  const tibetanLetters = [
    { letter: "ཀ", unicode: "ཀ", name: "Ka", id: "letter-ka" },
    { letter: "ཁ", unicode: "ཁ", name: "Kha", id: "letter-kha" },
    { letter: "ག", unicode: "ག", name: "Ga", id: "letter-ga" },
    { letter: "ང", unicode: "ང", name: "Nga", id: "letter-nga" },
    { letter: "ཅ", unicode: "ཅ", name: "Ca", id: "letter-ca" },
    { letter: "ཆ", unicode: "ཆ", name: "Cha", id: "letter-cha" },
    { letter: "ཇ", unicode: "ཇ", name: "Ja", id: "letter-ja" },
    { letter: "ཉ", unicode: "ཉ", name: "Nya", id: "letter-nya" },
    { letter: "ཏ", unicode: "ཏ", name: "Ta", id: "letter-ta" },
    { letter: "ཐ", unicode: "ཐ", name: "Tha", id: "letter-tha" },
    { letter: "ད", unicode: "ད", name: "Da", id: "letter-da" },
    { letter: "ན", unicode: "ན", name: "Na", id: "letter-na" },
    { letter: "པ", unicode: "པ", name: "Pa", id: "letter-pa" },
    { letter: "ཕ", unicode: "ཕ", name: "Pha", id: "letter-pha" },
    { letter: "བ", unicode: "བ", name: "Ba", id: "letter-ba" },
    { letter: "མ", unicode: "མ", name: "Ma", id: "letter-ma" },
    { letter: "ཙ", unicode: "ཙ", name: "Tsa", id: "letter-tsa" },
    { letter: "ཚ", unicode: "ཚ", name: "Tsha", id: "letter-tsha" },
    { letter: "ཛ", unicode: "ཛ", name: "Dza", id: "letter-dza" },
    { letter: "ཝ", unicode: "ཝ", name: "Wa", id: "letter-wa" },
    { letter: "ཞ", unicode: "ཞ", name: "Zha", id: "letter-zha" },
    { letter: "ཟ", unicode: "ཟ", name: "Za", id: "letter-za" },
    { letter: "འ", unicode: "འ", name: "A-Chung", id: "letter-a-chung" },
    { letter: "ཡ", unicode: "ཡ", name: "Ya", id: "letter-ya" },
    { letter: "ར", unicode: "ར", name: "Ra", id: "letter-ra" },
    { letter: "ལ", unicode: "ལ", name: "La", id: "letter-la" },
    { letter: "ཤ", unicode: "ཤ", name: "Sha", id: "letter-sha" },
    { letter: "ས", unicode: "ས", name: "Sa", id: "letter-sa" },
    { letter: "ཧ", unicode: "ཧ", name: "Ha", id: "letter-ha" },
    { letter: "ཨ", unicode: "ཨ", name: "A", id: "letter-a" },
  ];

  const tibetanSubjoined = [
    { letter: "ྐ", unicode: "ྐ", name: "Sub Ka", id: "sub-ka" },
    { letter: "ྑ", unicode: "ྑ", name: "Sub Kha", id: "sub-kha" },
    { letter: "ྒ", unicode: "ྒ", name: "Sub Ga", id: "sub-ga" },
    { letter: "ྔ", unicode: "ྔ", name: "Sub Nga", id: "sub-nga" },
    { letter: "ྕ", unicode: "ྕ", name: "Sub Ca", id: "sub-ca" },
    { letter: "ྖ", unicode: "ྖ", name: "Sub Cha", id: "sub-cha" },
    { letter: "ྗ", unicode: "ྗ", name: "Sub Ja", id: "sub-ja" },
    { letter: "ྙ", unicode: "ྙ", name: "Sub Nya", id: "sub-nya" },
    { letter: "ྟ", unicode: "ྟ", name: "Sub Ta", id: "sub-ta" },
    { letter: "ྠ", unicode: "ྠ", name: "Sub Tha", id: "sub-tha" },
    { letter: "ྡ", unicode: "ྡ", name: "Sub Da", id: "sub-da" },
    { letter: "ྣ", unicode: "ྣ", name: "Sub Na", id: "sub-na" },
    { letter: "ྤ", unicode: "ྤ", name: "Sub Pa", id: "sub-pa" },
    { letter: "ྥ", unicode: "ྥ", name: "Sub Pha", id: "sub-pha" },
    { letter: "ྦ", unicode: "ྦ", name: "Sub Ba", id: "sub-ba" },
    { letter: "ྨ", unicode: "ྨ", name: "Sub Ma", id: "sub-ma" },
    { letter: "ྩ", unicode: "ྩ", name: "Sub Tsa", id: "sub-tsa" },
    { letter: "ྪ", unicode: "ྪ", name: "Sub Tsha", id: "sub-tsha" },
    { letter: "ྫ", unicode: "ྫ", name: "Sub Dza", id: "sub-dza" },
    { letter: "ྭ", unicode: "ྭ", name: "Sub Wa", id: "sub-wa" },
    { letter: "ྮ", unicode: "ྮ", name: "Sub Zha", id: "sub-zha" },
    { letter: "ྯ", unicode: "ྯ", name: "Sub Za", id: "sub-za" },
    { letter: "ྰ", unicode: "ྰ", name: "Sub A", id: "sub-a" },
    { letter: "ྱ", unicode: "ྱ", name: "Sub Ya", id: "sub-ya" },
    { letter: "ྲ", unicode: "ྲ", name: "Sub Ra", id: "sub-ra" },
    { letter: "ླ", unicode: "ླ", name: "Sub La", id: "sub-la" },
    { letter: "ྴ", unicode: "ྴ", name: "Sub Sha", id: "sub-sha" },
    { letter: "ྵ", unicode: "ྵ", name: "Sub Ssa", id: "sub-ssa" },
    { letter: "ྶ", unicode: "ྶ", name: "Sub Sa", id: "sub-sa" },
    { letter: "ྷ", unicode: "ྷ", name: "Sub Ha", id: "sub-ha" },
    { letter: "ྐྵ", unicode: "ྐྵ", name: "Sub Kssa", id: "sub-kssa" },
  ];

  const tibetanVowels = [
    { letter: "◌ཱ", unicode: "ཱ", name: "Aa Sign", id: "vowel-aa" },
    { letter: "◌ི", unicode: "ི", name: "I Sign", id: "vowel-i" },
    { letter: "◌ཱི", unicode: "ཱི", name: "Ii Sign", id: "vowel-ii" },
    { letter: "◌ུ", unicode: "ུ", name: "U Sign", id: "vowel-u" },
    { letter: "◌ཱུ", unicode: "ཱུ", name: "Uu Sign", id: "vowel-uu" },
    { letter: "◌ྲྀ", unicode: "ྲྀ", name: "R Sign", id: "vowel-r" },
    { letter: "◌ཷ", unicode: "ཷ", name: "Rr Sign", id: "vowel-rr" },
    { letter: "◌ླྀ", unicode: "ླྀ", name: "L Sign", id: "vowel-l" },
    { letter: "◌ཹ", unicode: "ཹ", name: "Ll Sign", id: "vowel-ll" },
    { letter: "◌ེ", unicode: "ེ", name: "E Sign", id: "vowel-e" },
    { letter: "◌ཻ", unicode: "ཻ", name: "Ee Sign", id: "vowel-ee" },
    { letter: "◌ོ", unicode: "ོ", name: "O Sign", id: "vowel-o" },
    { letter: "◌ཽ", unicode: "ཽ", name: "Oo Sign", id: "vowel-oo" },
  ];

  const tibetanMarks = [
    { letter: "◌ཾ", unicode: "ཾ", name: "Rnam Bcad", id: "mark-rnam-bcad" },
    { letter: "◌ཿ", unicode: "ཿ", name: "Rgya Gram", id: "mark-rgya-gram" },
    { letter: "◌ྂ", unicode: "ྂ", name: "Nyi Zla", id: "mark-nyi-zla" },
    { letter: "◌ྃ", unicode: "ྃ", name: "Candrabindu", id: "mark-candrabindu" },
    { letter: "◌྄", unicode: "྄", name: "Halanta", id: "mark-halanta" },
    { letter: "་", unicode: "་", name: "Tsheg", id: "mark-tsheg" },
    { letter: "༌", unicode: "༌", name: "Delim T", id: "mark-delim-tsheg" },
    { letter: "།", unicode: "།", name: "Shad", id: "mark-shad" },
    { letter: "༎", unicode: "༎", name: "Nyis Shad", id: "mark-nyis-shad" },
    { letter: "༏", unicode: "༏", name: "Tsheg Shad", id: "mark-tsheg-shad" },
    {
      letter: "༐",
      unicode: "༐",
      name: "Nyis T Shad",
      id: "mark-nyis-tsheg-shad",
    },
    { letter: "༔", unicode: "༔", name: "Brda Rnying", id: "mark-brda-rnying" },
  ];

  const tibetanDigits = [
    { letter: "༠", unicode: "༠", name: "Zero", id: "digit-zero" },
    { letter: "༡", unicode: "༡", name: "One", id: "digit-one" },
    { letter: "༢", unicode: "༢", name: "Two", id: "digit-two" },
    { letter: "༣", unicode: "༣", name: "Three", id: "digit-three" },
    { letter: "༤", unicode: "༤", name: "Four", id: "digit-four" },
    { letter: "༥", unicode: "༥", name: "Five", id: "digit-five" },
    { letter: "༦", unicode: "༦", name: "Six", id: "digit-six" },
    { letter: "༧", unicode: "༧", name: "Seven", id: "digit-seven" },
    { letter: "༨", unicode: "༨", name: "Eight", id: "digit-eight" },
    { letter: "༩", unicode: "༩", name: "Nine", id: "digit-nine" },
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

  createKeys("tibetan-letters-container", tibetanLetters);
  createKeys("tibetan-subjoined-container", tibetanSubjoined);
  createKeys("tibetan-vowels-container", tibetanVowels);
  createKeys("tibetan-marks-container", tibetanMarks);
  createKeys("tibetan-digits-container", tibetanDigits);
});
