document.addEventListener("DOMContentLoaded", function () {
  const allNordicLetters = [
    { letter: "Å", unicode: "Å", name: "Capital Å", id: "all-cap-a-ring" },
    { letter: "å", unicode: "å", name: "Small å", id: "all-low-a-ring" },
    { letter: "Ä", unicode: "Ä", name: "Capital Ä", id: "all-cap-a-umlaut" },
    { letter: "ä", unicode: "ä", name: "Small ä", id: "all-low-a-umlaut" },
    { letter: "Ö", unicode: "Ö", name: "Capital Ö", id: "all-cap-o-umlaut" },
    { letter: "ö", unicode: "ö", name: "Small ö", id: "all-low-o-umlaut" },
    { letter: "Æ", unicode: "Æ", name: "Capital Æ", id: "all-cap-ae" },
    { letter: "æ", unicode: "æ", name: "Small æ", id: "all-low-ae" },
    { letter: "Ø", unicode: "Ø", name: "Capital Ø", id: "all-cap-o-stroke" },
    { letter: "ø", unicode: "ø", name: "Small ø", id: "all-low-o-stroke" },
    { letter: "Þ", unicode: "Þ", name: "Capital Þ", id: "all-cap-thorn" },
    { letter: "þ", unicode: "þ", name: "Small þ", id: "all-low-thorn" },
    { letter: "Ð", unicode: "Ð", name: "Capital Ð", id: "all-cap-eth" },
    { letter: "ð", unicode: "ð", name: "Small ð", id: "all-low-eth" },
    { letter: "Á", unicode: "Á", name: "Capital Á", id: "all-cap-a-acute" },
    { letter: "á", unicode: "á", name: "Small á", id: "all-low-a-acute" },
    { letter: "É", unicode: "É", name: "Capital É", id: "all-cap-e-acute" },
    { letter: "é", unicode: "é", name: "Small é", id: "all-low-e-acute" },
    { letter: "Í", unicode: "Í", name: "Capital Í", id: "all-cap-i-acute" },
    { letter: "í", unicode: "í", name: "Small í", id: "all-low-i-acute" },
    { letter: "Ó", unicode: "Ó", name: "Capital Ó", id: "all-cap-o-acute" },
    { letter: "ó", unicode: "ó", name: "Small ó", id: "all-low-o-acute" },
    { letter: "Ú", unicode: "Ú", name: "Capital Ú", id: "all-cap-u-acute" },
    { letter: "ú", unicode: "ú", name: "Small ú", id: "all-low-u-acute" },
    { letter: "Ý", unicode: "Ý", name: "Capital Ý", id: "all-cap-y-acute" },
    { letter: "ý", unicode: "ý", name: "Small ý", id: "all-low-y-acute" },
  ];

  const swedishLetters = [
    { letter: "Å", unicode: "Å", name: "Capital Å", id: "swe-cap-a-ring" },
    { letter: "å", unicode: "å", name: "Small å", id: "swe-low-a-ring" },
    { letter: "Ä", unicode: "Ä", name: "Capital Ä", id: "swe-cap-a-umlaut" },
    { letter: "ä", unicode: "ä", name: "Small ä", id: "swe-low-a-umlaut" },
    { letter: "Ö", unicode: "Ö", name: "Capital Ö", id: "swe-cap-o-umlaut" },
    { letter: "ö", unicode: "ö", name: "Small ö", id: "swe-low-o-umlaut" },
  ];

  const danishNorwegianLetters = [
    { letter: "Æ", unicode: "Æ", name: "Capital Æ", id: "danor-cap-ae" },
    { letter: "æ", unicode: "æ", name: "Small æ", id: "danor-low-ae" },
    { letter: "Ø", unicode: "Ø", name: "Capital Ø", id: "danor-cap-o-stroke" },
    { letter: "ø", unicode: "ø", name: "Small ø", id: "danor-low-o-stroke" },
    { letter: "Å", unicode: "Å", name: "Capital Å", id: "danor-cap-a-ring" },
    { letter: "å", unicode: "å", name: "Small å", id: "danor-low-a-ring" },
  ];

  const finnishLetters = [
    { letter: "Å", unicode: "Å", name: "Capital Å", id: "fin-cap-a-ring" },
    { letter: "å", unicode: "å", name: "Small å", id: "fin-low-a-ring" },
    { letter: "Ä", unicode: "Ä", name: "Capital Ä", id: "fin-cap-a-umlaut" },
    { letter: "ä", unicode: "ä", name: "Small ä", id: "fin-low-a-umlaut" },
    { letter: "Ö", unicode: "Ö", name: "Capital Ö", id: "fin-cap-o-umlaut" },
    { letter: "ö", unicode: "ö", name: "Small ö", id: "fin-low-o-umlaut" },
  ];

  const icelandicLetters = [
    { letter: "Á", unicode: "Á", name: "Capital Á", id: "ice-cap-a-acute" },
    { letter: "á", unicode: "á", name: "Small á", id: "ice-low-a-acute" },
    { letter: "É", unicode: "É", name: "Capital É", id: "ice-cap-e-acute" },
    { letter: "é", unicode: "é", name: "Small é", id: "ice-low-e-acute" },
    { letter: "Í", unicode: "Í", name: "Capital Í", id: "ice-cap-i-acute" },
    { letter: "í", unicode: "í", name: "Small í", id: "ice-low-i-acute" },
    { letter: "Ó", unicode: "Ó", name: "Capital Ó", id: "ice-cap-o-acute" },
    { letter: "ó", unicode: "ó", name: "Small ó", id: "ice-low-o-acute" },
    { letter: "Ú", unicode: "Ú", name: "Capital Ú", id: "ice-cap-u-acute" },
    { letter: "ú", unicode: "ú", name: "Small ú", id: "ice-low-u-acute" },
    { letter: "Ý", unicode: "Ý", name: "Capital Ý", id: "ice-cap-y-acute" },
    { letter: "ý", unicode: "ý", name: "Small ý", id: "ice-low-y-acute" },
    { letter: "Þ", unicode: "Þ", name: "Capital Þ", id: "ice-cap-thorn" },
    { letter: "þ", unicode: "þ", name: "Small þ", id: "ice-low-thorn" },
    { letter: "Ð", unicode: "Ð", name: "Capital Ð", id: "ice-cap-eth" },
    { letter: "ð", unicode: "ð", name: "Small ð", id: "ice-low-eth" },
    { letter: "Æ", unicode: "Æ", name: "Capital Æ", id: "ice-cap-ae" },
    { letter: "æ", unicode: "æ", name: "Small æ", id: "ice-low-ae" },
    { letter: "Ö", unicode: "Ö", name: "Capital Ö", id: "ice-cap-o-umlaut" },
    { letter: "ö", unicode: "ö", name: "Small ö", id: "ice-low-o-umlaut" },
  ];

  function createKeys(containerId, letters) {
    const container = document.getElementById(containerId);

    letters.forEach((item) => {
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

  createKeys("all-nordic-letters-container", allNordicLetters);
  createKeys("swedish-letters-container", swedishLetters);
  createKeys("danish-norwegian-letters-container", danishNorwegianLetters);
  createKeys("finnish-letters-container", finnishLetters);
  createKeys("icelandic-letters-container", icelandicLetters);
});
