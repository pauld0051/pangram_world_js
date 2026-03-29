document.addEventListener("DOMContentLoaded", function () {
  const syriacLetters = [
    { letter: "ܐ", unicode: "ܐ", name: "Alaph", id: "letter-alaph" },
    { letter: "ܑ", unicode: "ܑ", name: "Sup Alaph", id: "letter-sup-alaph" },
    { letter: "ܒ", unicode: "ܒ", name: "Beth", id: "letter-beth" },
    { letter: "ܓ", unicode: "ܓ", name: "Gamal", id: "letter-gamal" },
    { letter: "ܔ", unicode: "ܔ", name: "Gamal G", id: "letter-gamal-garshuni" },
    { letter: "ܕ", unicode: "ܕ", name: "Dalath", id: "letter-dalath" },
    { letter: "ܖ", unicode: "ܖ", name: "Dotless DR", id: "letter-dotless-dr" },
    { letter: "ܗ", unicode: "ܗ", name: "He", id: "letter-he" },
    { letter: "ܘ", unicode: "ܘ", name: "Waw", id: "letter-waw" },
    { letter: "ܙ", unicode: "ܙ", name: "Zain", id: "letter-zain" },
    { letter: "ܚ", unicode: "ܚ", name: "Heth", id: "letter-heth" },
    { letter: "ܛ", unicode: "ܛ", name: "Teth", id: "letter-teth" },
    { letter: "ܜ", unicode: "ܜ", name: "Teth G", id: "letter-teth-garshuni" },
    { letter: "ܝ", unicode: "ܝ", name: "Yudh", id: "letter-yudh" },
    { letter: "ܞ", unicode: "ܞ", name: "Yudh He", id: "letter-yudh-he" },
    { letter: "ܟ", unicode: "ܟ", name: "Kaph", id: "letter-kaph" },
    { letter: "ܠ", unicode: "ܠ", name: "Lamadh", id: "letter-lamadh" },
    { letter: "ܡ", unicode: "ܡ", name: "Mim", id: "letter-mim" },
    { letter: "ܢ", unicode: "ܢ", name: "Nun", id: "letter-nun" },
    { letter: "ܣ", unicode: "ܣ", name: "Semkath", id: "letter-semkath" },
    {
      letter: "ܤ",
      unicode: "ܤ",
      name: "Final Sem",
      id: "letter-final-semkath",
    },
    { letter: "ܥ", unicode: "ܥ", name: "E", id: "letter-e" },
    { letter: "ܦ", unicode: "ܦ", name: "Pe", id: "letter-pe" },
    { letter: "ܧ", unicode: "ܧ", name: "Rev Pe", id: "letter-reversed-pe" },
    { letter: "ܨ", unicode: "ܨ", name: "Sadhe", id: "letter-sadhe" },
    { letter: "ܩ", unicode: "ܩ", name: "Qaph", id: "letter-qaph" },
    { letter: "ܪ", unicode: "ܪ", name: "Rish", id: "letter-rish" },
    { letter: "ܫ", unicode: "ܫ", name: "Shin", id: "letter-shin" },
    { letter: "ܬ", unicode: "ܬ", name: "Taw", id: "letter-taw" },
  ];

  const syriacExtras = [
    {
      letter: "ܭ",
      unicode: "ܭ",
      name: "Persian Bh",
      id: "extra-persian-bheth",
    },
    {
      letter: "ܮ",
      unicode: "ܮ",
      name: "Persian Gh",
      id: "extra-persian-ghamal",
    },
    {
      letter: "ܯ",
      unicode: "ܯ",
      name: "Persian Dh",
      id: "extra-persian-dhalath",
    },
    { letter: "ݍ", unicode: "ݍ", name: "Sogd Zhain", id: "extra-sogd-zhain" },
    { letter: "ݎ", unicode: "ݎ", name: "Sogd Khaph", id: "extra-sogd-khaph" },
    { letter: "ݏ", unicode: "ݏ", name: "Sogd Fe", id: "extra-sogd-fe" },
  ];

  const syriacVowels = [
    { letter: "◌ܰ", unicode: "ܰ", name: "Pthaha A", id: "vowel-pthaha-above" },
    { letter: "◌ܱ", unicode: "ܱ", name: "Pthaha B", id: "vowel-pthaha-below" },
    {
      letter: "◌ܲ",
      unicode: "ܲ",
      name: "Pthaha Dot",
      id: "vowel-pthaha-dotted",
    },
    { letter: "◌ܳ", unicode: "ܳ", name: "Zqapha A", id: "vowel-zqapha-above" },
    { letter: "◌ܴ", unicode: "ܴ", name: "Zqapha B", id: "vowel-zqapha-below" },
    {
      letter: "◌ܵ",
      unicode: "ܵ",
      name: "Zqapha Dot",
      id: "vowel-zqapha-dotted",
    },
    { letter: "◌ܶ", unicode: "ܶ", name: "Rbasa A", id: "vowel-rbasa-above" },
    { letter: "◌ܷ", unicode: "ܷ", name: "Rbasa B", id: "vowel-rbasa-below" },
    {
      letter: "◌ܸ",
      unicode: "ܸ",
      name: "Zlama Hor",
      id: "vowel-zlama-horizontal",
    },
    {
      letter: "◌ܹ",
      unicode: "ܹ",
      name: "Zlama Ang",
      id: "vowel-zlama-angular",
    },
    { letter: "◌ܺ", unicode: "ܺ", name: "Hbasa A", id: "vowel-hbasa-above" },
    { letter: "◌ܻ", unicode: "ܻ", name: "Hbasa B", id: "vowel-hbasa-below" },
    { letter: "◌ܼ", unicode: "ܼ", name: "Hbasa-E", id: "vowel-hbasa-esasa" },
    { letter: "◌ܽ", unicode: "ܽ", name: "Esasa A", id: "vowel-esasa-above" },
    { letter: "◌ܾ", unicode: "ܾ", name: "Esasa B", id: "vowel-esasa-below" },
    { letter: "◌ܿ", unicode: "ܿ", name: "Rwaha", id: "vowel-rwaha" },
  ];

  const syriacMarks = [
    { letter: "◌݀", unicode: "݀", name: "Fem Dot", id: "mark-feminine-dot" },
    { letter: "◌݁", unicode: "݁", name: "Qushshaya", id: "mark-qushshaya" },
    { letter: "◌݂", unicode: "݂", name: "Rukkakha", id: "mark-rukkakha" },
    { letter: "◌݃", unicode: "݃", name: "2 Dots A", id: "mark-two-dots-above" },
    { letter: "◌݄", unicode: "݄", name: "2 Dots B", id: "mark-two-dots-below" },
    {
      letter: "◌݅",
      unicode: "݅",
      name: "3 Dots A",
      id: "mark-three-dots-above",
    },
    {
      letter: "◌݆",
      unicode: "݆",
      name: "3 Dots B",
      id: "mark-three-dots-below",
    },
    { letter: "◌݇", unicode: "݇", name: "Oblique A", id: "mark-oblique-above" },
    { letter: "◌݈", unicode: "݈", name: "Oblique B", id: "mark-oblique-below" },
    { letter: "◌݉", unicode: "݉", name: "Music", id: "mark-music" },
    { letter: "◌݊", unicode: "݊", name: "Barrekh", id: "mark-barrekh" },
  ];

  const syriacPunctuation = [
    { letter: "܀", unicode: "܀", name: "End Para", id: "punct-end-paragraph" },
    {
      letter: "܁",
      unicode: "܁",
      name: "Full Stop A",
      id: "punct-supralinear-full-stop",
    },
    {
      letter: "܂",
      unicode: "܂",
      name: "Full Stop B",
      id: "punct-sublinear-full-stop",
    },
    {
      letter: "܃",
      unicode: "܃",
      name: "Colon A",
      id: "punct-supralinear-colon",
    },
    { letter: "܄", unicode: "܄", name: "Colon B", id: "punct-sublinear-colon" },
    {
      letter: "܅",
      unicode: "܅",
      name: "Hor Colon",
      id: "punct-horizontal-colon",
    },
    { letter: "܆", unicode: "܆", name: "Colon Left", id: "punct-colon-left" },
    { letter: "܇", unicode: "܇", name: "Colon Right", id: "punct-colon-right" },
    {
      letter: "܈",
      unicode: "܈",
      name: "Sup Colon",
      id: "punct-supralinear-skew",
    },
    {
      letter: "܉",
      unicode: "܉",
      name: "Sub Colon",
      id: "punct-sublinear-skew",
    },
    { letter: "܊", unicode: "܊", name: "Contract", id: "punct-contraction" },
    { letter: "܋", unicode: "܋", name: "Obelus", id: "punct-obelus" },
    { letter: "܌", unicode: "܌", name: "Metobelus", id: "punct-metobelus" },
    { letter: "܍", unicode: "܍", name: "Asteriscus", id: "punct-asteriscus" },
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

  createKeys("syriac-letters-container", syriacLetters);
  createKeys("syriac-extras-container", syriacExtras);
  createKeys("syriac-vowels-container", syriacVowels);
  createKeys("syriac-marks-container", syriacMarks);
  createKeys("syriac-punctuation-container", syriacPunctuation);
});
