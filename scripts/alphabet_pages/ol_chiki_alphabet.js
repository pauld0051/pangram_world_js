document.addEventListener("DOMContentLoaded", function () {
  const olChikiLetters = [
    { letter: "ᱚ", unicode: "ᱚ", name: "La", id: "letter-la" },
    { letter: "ᱛ", unicode: "ᱛ", name: "At", id: "letter-at" },
    { letter: "ᱜ", unicode: "ᱜ", name: "Ag", id: "letter-ag" },
    { letter: "ᱝ", unicode: "ᱝ", name: "Ang", id: "letter-ang" },
    { letter: "ᱞ", unicode: "ᱞ", name: "Al", id: "letter-al" },
    { letter: "ᱟ", unicode: "ᱟ", name: "Laa", id: "letter-laa" },
    { letter: "ᱠ", unicode: "ᱠ", name: "Aak", id: "letter-aak" },
    { letter: "ᱡ", unicode: "ᱡ", name: "Aaj", id: "letter-aaj" },
    { letter: "ᱢ", unicode: "ᱢ", name: "Aam", id: "letter-aam" },
    { letter: "ᱣ", unicode: "ᱣ", name: "Aaw", id: "letter-aaw" },
    { letter: "ᱤ", unicode: "ᱤ", name: "Li", id: "letter-li" },
    { letter: "ᱥ", unicode: "ᱥ", name: "Is", id: "letter-is" },
    { letter: "ᱦ", unicode: "ᱦ", name: "Ih", id: "letter-ih" },
    { letter: "ᱧ", unicode: "ᱧ", name: "Iny", id: "letter-iny" },
    { letter: "ᱨ", unicode: "ᱨ", name: "Ir", id: "letter-ir" },
    { letter: "ᱩ", unicode: "ᱩ", name: "Lu", id: "letter-lu" },
    { letter: "ᱪ", unicode: "ᱪ", name: "Uc", id: "letter-uc" },
    { letter: "ᱫ", unicode: "ᱫ", name: "Ud", id: "letter-ud" },
    { letter: "ᱬ", unicode: "ᱬ", name: "Unn", id: "letter-unn" },
    { letter: "ᱭ", unicode: "ᱭ", name: "Uy", id: "letter-uy" },
    { letter: "ᱮ", unicode: "ᱮ", name: "Le", id: "letter-le" },
    { letter: "ᱯ", unicode: "ᱯ", name: "Ep", id: "letter-ep" },
    { letter: "ᱰ", unicode: "ᱰ", name: "Edd", id: "letter-edd" },
    { letter: "ᱱ", unicode: "ᱱ", name: "En", id: "letter-en" },
    { letter: "ᱲ", unicode: "ᱲ", name: "Err", id: "letter-err" },
    { letter: "ᱳ", unicode: "ᱳ", name: "Lo", id: "letter-lo" },
    { letter: "ᱴ", unicode: "ᱴ", name: "Ott", id: "letter-ott" },
    { letter: "ᱵ", unicode: "ᱵ", name: "Ob", id: "letter-ob" },
    { letter: "ᱶ", unicode: "ᱶ", name: "Ov", id: "letter-ov" },
    { letter: "ᱷ", unicode: "ᱷ", name: "Oh", id: "letter-oh" },
  ];

  const olChikiMarks = [
    { letter: "ᱸ", unicode: "ᱸ", name: "Mu TTuddag", id: "mark-mu-ttuddag" },
    { letter: "ᱹ", unicode: "ᱹ", name: "Gaahlaa TTuddaag", id: "mark-gaahlaa" },
    {
      letter: "ᱺ",
      unicode: "ᱺ",
      name: "Mu-Gaahlaa TTuddaag",
      id: "mark-mu-gaahlaa",
    },
    { letter: "ᱻ", unicode: "ᱻ", name: "Relaa", id: "mark-relaa" },
    { letter: "ᱼ", unicode: "ᱼ", name: "Phaarkaa", id: "mark-phaarkaa" },
    { letter: "ᱽ", unicode: "ᱽ", name: "Ahad", id: "mark-ahad" },
  ];

  const olChikiPunctuation = [
    { letter: "᱾", unicode: "᱾", name: "Mucaad", id: "punct-mucaad" },
    {
      letter: "᱿",
      unicode: "᱿",
      name: "Double Mucaad",
      id: "punct-double-mucaad",
    },
  ];

  const olChikiDigits = [
    { letter: "᱐", unicode: "᱐", name: "Zero", id: "digit-zero" },
    { letter: "᱑", unicode: "᱑", name: "One", id: "digit-one" },
    { letter: "᱒", unicode: "᱒", name: "Two", id: "digit-two" },
    { letter: "᱓", unicode: "᱓", name: "Three", id: "digit-three" },
    { letter: "᱔", unicode: "᱔", name: "Four", id: "digit-four" },
    { letter: "᱕", unicode: "᱕", name: "Five", id: "digit-five" },
    { letter: "᱖", unicode: "᱖", name: "Six", id: "digit-six" },
    { letter: "᱗", unicode: "᱗", name: "Seven", id: "digit-seven" },
    { letter: "᱘", unicode: "᱘", name: "Eight", id: "digit-eight" },
    { letter: "᱙", unicode: "᱙", name: "Nine", id: "digit-nine" },
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

  createKeys("ol-chiki-letters-container", olChikiLetters);
  createKeys("ol-chiki-marks-container", olChikiMarks);
  createKeys("ol-chiki-punctuation-container", olChikiPunctuation);
  createKeys("ol-chiki-digits-container", olChikiDigits);
});
