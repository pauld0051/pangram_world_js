document.addEventListener("DOMContentLoaded", function () {
  const lisuConsonants = [
    { letter: "ꓐ", unicode: "ꓐ", name: "Ba", id: "cons-ba" },
    { letter: "ꓑ", unicode: "ꓑ", name: "Pa", id: "cons-pa" },
    { letter: "ꓒ", unicode: "ꓒ", name: "Pha", id: "cons-pha" },
    { letter: "ꓓ", unicode: "ꓓ", name: "Da", id: "cons-da" },
    { letter: "ꓔ", unicode: "ꓔ", name: "Ta", id: "cons-ta" },
    { letter: "ꓕ", unicode: "ꓕ", name: "Tha", id: "cons-tha" },
    { letter: "ꓖ", unicode: "ꓖ", name: "Ga", id: "cons-ga" },
    { letter: "ꓗ", unicode: "ꓗ", name: "Ka", id: "cons-ka" },
    { letter: "ꓘ", unicode: "ꓘ", name: "Kha", id: "cons-kha" },
    { letter: "ꓙ", unicode: "ꓙ", name: "Ja", id: "cons-ja" },
    { letter: "ꓚ", unicode: "ꓚ", name: "Ca", id: "cons-ca" },
    { letter: "ꓛ", unicode: "ꓛ", name: "Cha", id: "cons-cha" },
    { letter: "ꓜ", unicode: "ꓜ", name: "Dza", id: "cons-dza" },
    { letter: "ꓝ", unicode: "ꓝ", name: "Tsa", id: "cons-tsa" },
    { letter: "ꓞ", unicode: "ꓞ", name: "Tsha", id: "cons-tsha" },
    { letter: "ꓟ", unicode: "ꓟ", name: "Ma", id: "cons-ma" },
    { letter: "ꓠ", unicode: "ꓠ", name: "Na", id: "cons-na" },
    { letter: "ꓡ", unicode: "ꓡ", name: "La", id: "cons-la" },
    { letter: "ꓢ", unicode: "ꓢ", name: "Sa", id: "cons-sa" },
    { letter: "ꓣ", unicode: "ꓣ", name: "Zha", id: "cons-zha" },
    { letter: "ꓤ", unicode: "ꓤ", name: "Za", id: "cons-za" },
    { letter: "ꓥ", unicode: "ꓥ", name: "Nga", id: "cons-nga" },
    { letter: "ꓦ", unicode: "ꓦ", name: "Ha", id: "cons-ha" },
    { letter: "ꓧ", unicode: "ꓧ", name: "Xa", id: "cons-xa" },
    { letter: "ꓨ", unicode: "ꓨ", name: "Hha", id: "cons-hha" },
    { letter: "ꓩ", unicode: "ꓩ", name: "Fa", id: "cons-fa" },
    { letter: "ꓪ", unicode: "ꓪ", name: "Wa", id: "cons-wa" },
    { letter: "ꓫ", unicode: "ꓫ", name: "Sha", id: "cons-sha" },
    { letter: "ꓬ", unicode: "ꓬ", name: "Ya", id: "cons-ya" },
    { letter: "ꓭ", unicode: "ꓭ", name: "Gha", id: "cons-gha" },
  ];

  const lisuVowels = [
    { letter: "ꓮ", unicode: "ꓮ", name: "A", id: "vowel-a" },
    { letter: "ꓯ", unicode: "ꓯ", name: "Ae", id: "vowel-ae" },
    { letter: "ꓰ", unicode: "ꓰ", name: "E", id: "vowel-e" },
    { letter: "ꓱ", unicode: "ꓱ", name: "Eu", id: "vowel-eu" },
    { letter: "ꓲ", unicode: "ꓲ", name: "I", id: "vowel-i" },
    { letter: "ꓳ", unicode: "ꓳ", name: "O", id: "vowel-o" },
    { letter: "ꓴ", unicode: "ꓴ", name: "U", id: "vowel-u" },
    { letter: "ꓵ", unicode: "ꓵ", name: "Ue", id: "vowel-ue" },
    { letter: "ꓶ", unicode: "ꓶ", name: "Uh", id: "vowel-uh" },
    { letter: "ꓷ", unicode: "ꓷ", name: "Oe", id: "vowel-oe" },
  ];

  const lisuTones = [
    { letter: "ꓸ", unicode: "ꓸ", name: "Tone Mya Ti", id: "tone-mya-ti" },
    { letter: "ꓹ", unicode: "ꓹ", name: "Tone Na Po", id: "tone-na-po" },
    { letter: "ꓺ", unicode: "ꓺ", name: "Tone Mya Cya", id: "tone-mya-cya" },
    { letter: "ꓻ", unicode: "ꓻ", name: "Tone Mya Bo", id: "tone-mya-bo" },
    { letter: "ꓼ", unicode: "ꓼ", name: "Tone Mya Na", id: "tone-mya-na" },
    { letter: "ꓽ", unicode: "ꓽ", name: "Tone Mya Jeu", id: "tone-mya-jeu" },
  ];

  const lisuPunctuation = [
    { letter: "꓾", unicode: "꓾", name: "Comma", id: "punct-comma" },
    { letter: "꓿", unicode: "꓿", name: "Full Stop", id: "punct-full-stop" },
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

  createKeys("lisu-consonants-container", lisuConsonants);
  createKeys("lisu-vowels-container", lisuVowels);
  createKeys("lisu-tones-container", lisuTones);
  createKeys("lisu-punctuation-container", lisuPunctuation);
});
