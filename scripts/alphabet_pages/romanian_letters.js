document.addEventListener("DOMContentLoaded", function () {
  const romanianLetters = [
    { letter: "Ă", unicode: "Ă", name: "A Breve", id: "letter-a-breve-upper" },
    { letter: "ă", unicode: "ă", name: "a Breve", id: "letter-a-breve-lower" },
    { letter: "Â", unicode: "Â", name: "A Circ", id: "letter-a-circ-upper" },
    { letter: "â", unicode: "â", name: "a Circ", id: "letter-a-circ-lower" },
    { letter: "Î", unicode: "Î", name: "I Circ", id: "letter-i-circ-upper" },
    { letter: "î", unicode: "î", name: "i Circ", id: "letter-i-circ-lower" },
    { letter: "Ș", unicode: "Ș", name: "S Comma", id: "letter-s-comma-upper" },
    { letter: "ș", unicode: "ș", name: "s Comma", id: "letter-s-comma-lower" },
    { letter: "Ț", unicode: "Ț", name: "T Comma", id: "letter-t-comma-upper" },
    { letter: "ț", unicode: "ț", name: "t Comma", id: "letter-t-comma-lower" },
  ];

  const romanianLegacy = [
    {
      letter: "Ş",
      unicode: "Ş",
      name: "S Cedilla",
      id: "legacy-s-cedilla-upper",
    },
    {
      letter: "ş",
      unicode: "ş",
      name: "s Cedilla",
      id: "legacy-s-cedilla-lower",
    },
    {
      letter: "Ţ",
      unicode: "Ţ",
      name: "T Cedilla",
      id: "legacy-t-cedilla-upper",
    },
    {
      letter: "ţ",
      unicode: "ţ",
      name: "t Cedilla",
      id: "legacy-t-cedilla-lower",
    },
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

  createKeys("romanian-letters-container", romanianLetters);
  createKeys("romanian-legacy-container", romanianLegacy);
});
