document.addEventListener("DOMContentLoaded", function () {
  const welshCore = [
    { letter: "A", unicode: "A", name: "A", id: "core-a-upper" },
    { letter: "a", unicode: "a", name: "a", id: "core-a-lower" },
    { letter: "E", unicode: "E", name: "E", id: "core-e-upper" },
    { letter: "e", unicode: "e", name: "e", id: "core-e-lower" },
    { letter: "I", unicode: "I", name: "I", id: "core-i-upper" },
    { letter: "i", unicode: "i", name: "i", id: "core-i-lower" },
    { letter: "O", unicode: "O", name: "O", id: "core-o-upper" },
    { letter: "o", unicode: "o", name: "o", id: "core-o-lower" },
    { letter: "U", unicode: "U", name: "U", id: "core-u-upper" },
    { letter: "u", unicode: "u", name: "u", id: "core-u-lower" },
    { letter: "W", unicode: "W", name: "W", id: "core-w-upper" },
    { letter: "w", unicode: "w", name: "w", id: "core-w-lower" },
    { letter: "Y", unicode: "Y", name: "Y", id: "core-y-upper" },
    { letter: "y", unicode: "y", name: "y", id: "core-y-lower" },
  ];

  const welshCircumflex = [
    { letter: "Â", unicode: "Â", name: "A Circ", id: "circ-a-upper" },
    { letter: "â", unicode: "â", name: "a Circ", id: "circ-a-lower" },
    { letter: "Ê", unicode: "Ê", name: "E Circ", id: "circ-e-upper" },
    { letter: "ê", unicode: "ê", name: "e Circ", id: "circ-e-lower" },
    { letter: "Î", unicode: "Î", name: "I Circ", id: "circ-i-upper" },
    { letter: "î", unicode: "î", name: "i Circ", id: "circ-i-lower" },
    { letter: "Ô", unicode: "Ô", name: "O Circ", id: "circ-o-upper" },
    { letter: "ô", unicode: "ô", name: "o Circ", id: "circ-o-lower" },
    { letter: "Û", unicode: "Û", name: "U Circ", id: "circ-u-upper" },
    { letter: "û", unicode: "û", name: "u Circ", id: "circ-u-lower" },
    { letter: "Ŵ", unicode: "Ŵ", name: "W Circ", id: "circ-w-upper" },
    { letter: "ŵ", unicode: "ŵ", name: "w Circ", id: "circ-w-lower" },
    { letter: "Ŷ", unicode: "Ŷ", name: "Y Circ", id: "circ-y-upper" },
    { letter: "ŷ", unicode: "ŷ", name: "y Circ", id: "circ-y-lower" },
  ];

  const welshAccents = [
    { letter: "Á", unicode: "Á", name: "A Acute", id: "acc-a-acute-upper" },
    { letter: "á", unicode: "á", name: "a Acute", id: "acc-a-acute-lower" },
    { letter: "À", unicode: "À", name: "A Grave", id: "acc-a-grave-upper" },
    { letter: "à", unicode: "à", name: "a Grave", id: "acc-a-grave-lower" },
    { letter: "Ä", unicode: "Ä", name: "A Dia", id: "acc-a-dia-upper" },
    { letter: "ä", unicode: "ä", name: "a Dia", id: "acc-a-dia-lower" },

    { letter: "É", unicode: "É", name: "E Acute", id: "acc-e-acute-upper" },
    { letter: "é", unicode: "é", name: "e Acute", id: "acc-e-acute-lower" },
    { letter: "È", unicode: "È", name: "E Grave", id: "acc-e-grave-upper" },
    { letter: "è", unicode: "è", name: "e Grave", id: "acc-e-grave-lower" },
    { letter: "Ë", unicode: "Ë", name: "E Dia", id: "acc-e-dia-upper" },
    { letter: "ë", unicode: "ë", name: "e Dia", id: "acc-e-dia-lower" },

    { letter: "Í", unicode: "Í", name: "I Acute", id: "acc-i-acute-upper" },
    { letter: "í", unicode: "í", name: "i Acute", id: "acc-i-acute-lower" },
    { letter: "Ì", unicode: "Ì", name: "I Grave", id: "acc-i-grave-upper" },
    { letter: "ì", unicode: "ì", name: "i Grave", id: "acc-i-grave-lower" },
    { letter: "Ï", unicode: "Ï", name: "I Dia", id: "acc-i-dia-upper" },
    { letter: "ï", unicode: "ï", name: "i Dia", id: "acc-i-dia-lower" },

    { letter: "Ó", unicode: "Ó", name: "O Acute", id: "acc-o-acute-upper" },
    { letter: "ó", unicode: "ó", name: "o Acute", id: "acc-o-acute-lower" },
    { letter: "Ò", unicode: "Ò", name: "O Grave", id: "acc-o-grave-upper" },
    { letter: "ò", unicode: "ò", name: "o Grave", id: "acc-o-grave-lower" },
    { letter: "Ö", unicode: "Ö", name: "O Dia", id: "acc-o-dia-upper" },
    { letter: "ö", unicode: "ö", name: "o Dia", id: "acc-o-dia-lower" },

    { letter: "Ú", unicode: "Ú", name: "U Acute", id: "acc-u-acute-upper" },
    { letter: "ú", unicode: "ú", name: "u Acute", id: "acc-u-acute-lower" },
    { letter: "Ù", unicode: "Ù", name: "U Grave", id: "acc-u-grave-upper" },
    { letter: "ù", unicode: "ù", name: "u Grave", id: "acc-u-grave-lower" },
    { letter: "Ü", unicode: "Ü", name: "U Dia", id: "acc-u-dia-upper" },
    { letter: "ü", unicode: "ü", name: "u Dia", id: "acc-u-dia-lower" },

    { letter: "Ẃ", unicode: "Ẃ", name: "W Acute", id: "acc-w-acute-upper" },
    { letter: "ẃ", unicode: "ẃ", name: "w Acute", id: "acc-w-acute-lower" },
    { letter: "Ẁ", unicode: "Ẁ", name: "W Grave", id: "acc-w-grave-upper" },
    { letter: "ẁ", unicode: "ẁ", name: "w Grave", id: "acc-w-grave-lower" },
    { letter: "Ẅ", unicode: "Ẅ", name: "W Dia", id: "acc-w-dia-upper" },
    { letter: "ẅ", unicode: "ẅ", name: "w Dia", id: "acc-w-dia-lower" },

    { letter: "Ý", unicode: "Ý", name: "Y Acute", id: "acc-y-acute-upper" },
    { letter: "ý", unicode: "ý", name: "y Acute", id: "acc-y-acute-lower" },
    { letter: "Ỳ", unicode: "Ỳ", name: "Y Grave", id: "acc-y-grave-upper" },
    { letter: "ỳ", unicode: "ỳ", name: "y Grave", id: "acc-y-grave-lower" },
    { letter: "Ÿ", unicode: "Ÿ", name: "Y Dia", id: "acc-y-dia-upper" },
    { letter: "ÿ", unicode: "ÿ", name: "y Dia", id: "acc-y-dia-lower" },
  ];

  const welshDigraphs = [
    { letter: "ch", unicode: "ch", name: "ch", id: "digraph-ch" },
    { letter: "dd", unicode: "dd", name: "dd", id: "digraph-dd" },
    { letter: "ff", unicode: "ff", name: "ff", id: "digraph-ff" },
    { letter: "ng", unicode: "ng", name: "ng", id: "digraph-ng" },
    { letter: "ll", unicode: "ll", name: "ll", id: "digraph-ll" },
    { letter: "ph", unicode: "ph", name: "ph", id: "digraph-ph" },
    { letter: "rh", unicode: "rh", name: "rh", id: "digraph-rh" },
    { letter: "th", unicode: "th", name: "th", id: "digraph-th" },
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

  createKeys("welsh-core-container", welshCore);
  createKeys("welsh-circumflex-container", welshCircumflex);
  createKeys("welsh-accents-container", welshAccents);
  createKeys("welsh-digraphs-container", welshDigraphs);
});
