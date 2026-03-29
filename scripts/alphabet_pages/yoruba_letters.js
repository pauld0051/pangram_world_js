document.addEventListener("DOMContentLoaded", function () {
  const yorubaCore = [
    { letter: "A", unicode: "A", name: "A", id: "core-a-upper" },
    { letter: "a", unicode: "a", name: "a", id: "core-a-lower" },
    { letter: "B", unicode: "B", name: "B", id: "core-b-upper" },
    { letter: "b", unicode: "b", name: "b", id: "core-b-lower" },
    { letter: "D", unicode: "D", name: "D", id: "core-d-upper" },
    { letter: "d", unicode: "d", name: "d", id: "core-d-lower" },
    { letter: "E", unicode: "E", name: "E", id: "core-e-upper" },
    { letter: "e", unicode: "e", name: "e", id: "core-e-lower" },
    { letter: "F", unicode: "F", name: "F", id: "core-f-upper" },
    { letter: "f", unicode: "f", name: "f", id: "core-f-lower" },
    { letter: "G", unicode: "G", name: "G", id: "core-g-upper" },
    { letter: "g", unicode: "g", name: "g", id: "core-g-lower" },
    { letter: "H", unicode: "H", name: "H", id: "core-h-upper" },
    { letter: "h", unicode: "h", name: "h", id: "core-h-lower" },
    { letter: "I", unicode: "I", name: "I", id: "core-i-upper" },
    { letter: "i", unicode: "i", name: "i", id: "core-i-lower" },
    { letter: "J", unicode: "J", name: "J", id: "core-j-upper" },
    { letter: "j", unicode: "j", name: "j", id: "core-j-lower" },
    { letter: "K", unicode: "K", name: "K", id: "core-k-upper" },
    { letter: "k", unicode: "k", name: "k", id: "core-k-lower" },
    { letter: "L", unicode: "L", name: "L", id: "core-l-upper" },
    { letter: "l", unicode: "l", name: "l", id: "core-l-lower" },
    { letter: "M", unicode: "M", name: "M", id: "core-m-upper" },
    { letter: "m", unicode: "m", name: "m", id: "core-m-lower" },
    { letter: "N", unicode: "N", name: "N", id: "core-n-upper" },
    { letter: "n", unicode: "n", name: "n", id: "core-n-lower" },
    { letter: "O", unicode: "O", name: "O", id: "core-o-upper" },
    { letter: "o", unicode: "o", name: "o", id: "core-o-lower" },
    { letter: "P", unicode: "P", name: "P", id: "core-p-upper" },
    { letter: "p", unicode: "p", name: "p", id: "core-p-lower" },
    { letter: "R", unicode: "R", name: "R", id: "core-r-upper" },
    { letter: "r", unicode: "r", name: "r", id: "core-r-lower" },
    { letter: "S", unicode: "S", name: "S", id: "core-s-upper" },
    { letter: "s", unicode: "s", name: "s", id: "core-s-lower" },
    { letter: "T", unicode: "T", name: "T", id: "core-t-upper" },
    { letter: "t", unicode: "t", name: "t", id: "core-t-lower" },
    { letter: "U", unicode: "U", name: "U", id: "core-u-upper" },
    { letter: "u", unicode: "u", name: "u", id: "core-u-lower" },
    { letter: "W", unicode: "W", name: "W", id: "core-w-upper" },
    { letter: "w", unicode: "w", name: "w", id: "core-w-lower" },
    { letter: "Y", unicode: "Y", name: "Y", id: "core-y-upper" },
    { letter: "y", unicode: "y", name: "y", id: "core-y-lower" },
  ];

  const yorubaUnderdot = [
    { letter: "Ẹ", unicode: "Ẹ", name: "E Dot", id: "under-e-upper" },
    { letter: "ẹ", unicode: "ẹ", name: "e Dot", id: "under-e-lower" },
    { letter: "Ọ", unicode: "Ọ", name: "O Dot", id: "under-o-upper" },
    { letter: "ọ", unicode: "ọ", name: "o Dot", id: "under-o-lower" },
    { letter: "Ṣ", unicode: "Ṣ", name: "S Dot", id: "under-s-upper" },
    { letter: "ṣ", unicode: "ṣ", name: "s Dot", id: "under-s-lower" },
  ];

  const yorubaDigraphs = [
    { letter: "GB", unicode: "GB", name: "Gb", id: "digraph-gb-upper" },
    { letter: "Gb", unicode: "Gb", name: "Gb Tc", id: "digraph-gb-title" },
    { letter: "gb", unicode: "gb", name: "gb", id: "digraph-gb-lower" },
    { letter: "Ń", unicode: "Ń", name: "N Acute", id: "digraph-n-acute-upper" },
    { letter: "ń", unicode: "ń", name: "n Acute", id: "digraph-n-acute-lower" },
    { letter: "Ǹ", unicode: "Ǹ", name: "N Grave", id: "digraph-n-grave-upper" },
    { letter: "ǹ", unicode: "ǹ", name: "n Grave", id: "digraph-n-grave-lower" },
    {
      letter: "Ṅ",
      unicode: "Ṅ",
      name: "N Macron",
      id: "digraph-n-macron-upper",
    },
    {
      letter: "ṅ",
      unicode: "ṅ",
      name: "n Macron",
      id: "digraph-n-macron-lower",
    },
    { letter: "Ḿ", unicode: "Ḿ", name: "M Acute", id: "digraph-m-acute-upper" },
    { letter: "ḿ", unicode: "ḿ", name: "m Acute", id: "digraph-m-acute-lower" },
  ];

  const yorubaToneMarks = [
    { letter: "◌́", unicode: "́", name: "Acute", id: "tone-acute" },
    { letter: "◌̀", unicode: "̀", name: "Grave", id: "tone-grave" },
    { letter: "◌̄", unicode: "̄", name: "Macron", id: "tone-macron" },
    { letter: "◌̣", unicode: "̣", name: "Underdot", id: "tone-underdot" },
  ];

  const yorubaTonedVowels = [
    { letter: "Á", unicode: "Á", name: "A Acute", id: "tv-a-acute-upper" },
    { letter: "á", unicode: "á", name: "a Acute", id: "tv-a-acute-lower" },
    { letter: "À", unicode: "À", name: "A Grave", id: "tv-a-grave-upper" },
    { letter: "à", unicode: "à", name: "a Grave", id: "tv-a-grave-lower" },
    { letter: "Ā", unicode: "Ā", name: "A Macron", id: "tv-a-macron-upper" },
    { letter: "ā", unicode: "ā", name: "a Macron", id: "tv-a-macron-lower" },

    { letter: "É", unicode: "É", name: "E Acute", id: "tv-e-acute-upper" },
    { letter: "é", unicode: "é", name: "e Acute", id: "tv-e-acute-lower" },
    { letter: "È", unicode: "È", name: "E Grave", id: "tv-e-grave-upper" },
    { letter: "è", unicode: "è", name: "e Grave", id: "tv-e-grave-lower" },
    { letter: "Ē", unicode: "Ē", name: "E Macron", id: "tv-e-macron-upper" },
    { letter: "ē", unicode: "ē", name: "e Macron", id: "tv-e-macron-lower" },

    { letter: "Í", unicode: "Í", name: "I Acute", id: "tv-i-acute-upper" },
    { letter: "í", unicode: "í", name: "i Acute", id: "tv-i-acute-lower" },
    { letter: "Ì", unicode: "Ì", name: "I Grave", id: "tv-i-grave-upper" },
    { letter: "ì", unicode: "ì", name: "i Grave", id: "tv-i-grave-lower" },
    { letter: "Ī", unicode: "Ī", name: "I Macron", id: "tv-i-macron-upper" },
    { letter: "ī", unicode: "ī", name: "i Macron", id: "tv-i-macron-lower" },

    { letter: "Ó", unicode: "Ó", name: "O Acute", id: "tv-o-acute-upper" },
    { letter: "ó", unicode: "ó", name: "o Acute", id: "tv-o-acute-lower" },
    { letter: "Ò", unicode: "Ò", name: "O Grave", id: "tv-o-grave-upper" },
    { letter: "ò", unicode: "ò", name: "o Grave", id: "tv-o-grave-lower" },
    { letter: "Ō", unicode: "Ō", name: "O Macron", id: "tv-o-macron-upper" },
    { letter: "ō", unicode: "ō", name: "o Macron", id: "tv-o-macron-lower" },

    { letter: "Ú", unicode: "Ú", name: "U Acute", id: "tv-u-acute-upper" },
    { letter: "ú", unicode: "ú", name: "u Acute", id: "tv-u-acute-lower" },
    { letter: "Ù", unicode: "Ù", name: "U Grave", id: "tv-u-grave-upper" },
    { letter: "ù", unicode: "ù", name: "u Grave", id: "tv-u-grave-lower" },
    { letter: "Ū", unicode: "Ū", name: "U Macron", id: "tv-u-macron-upper" },
    { letter: "ū", unicode: "ū", name: "u Macron", id: "tv-u-macron-lower" },
  ];

  const yorubaTonedExtra = [
    { letter: "Ẹ́", unicode: "Ẹ́", name: "Ẹ Acute", id: "te-ec-acute-upper" },
    { letter: "ẹ́", unicode: "ẹ́", name: "ẹ Acute", id: "te-ec-acute-lower" },
    { letter: "Ẹ̀", unicode: "Ẹ̀", name: "Ẹ Grave", id: "te-ec-grave-upper" },
    { letter: "ẹ̀", unicode: "ẹ̀", name: "ẹ Grave", id: "te-ec-grave-lower" },
    { letter: "Ẹ̄", unicode: "Ẹ̄", name: "Ẹ Macron", id: "te-ec-macron-upper" },
    { letter: "ẹ̄", unicode: "ẹ̄", name: "ẹ Macron", id: "te-ec-macron-lower" },

    { letter: "Ọ́", unicode: "Ọ́", name: "Ọ Acute", id: "te-oc-acute-upper" },
    { letter: "ọ́", unicode: "ọ́", name: "ọ Acute", id: "te-oc-acute-lower" },
    { letter: "Ọ̀", unicode: "Ọ̀", name: "Ọ Grave", id: "te-oc-grave-upper" },
    { letter: "ọ̀", unicode: "ọ̀", name: "ọ Grave", id: "te-oc-grave-lower" },
    { letter: "Ọ̄", unicode: "Ọ̄", name: "Ọ Macron", id: "te-oc-macron-upper" },
    { letter: "ọ̄", unicode: "ọ̄", name: "ọ Macron", id: "te-oc-macron-lower" },

    { letter: "Ý", unicode: "Ý", name: "Y Acute", id: "te-y-acute-upper" },
    { letter: "ý", unicode: "ý", name: "y Acute", id: "te-y-acute-lower" },
    { letter: "Ỳ", unicode: "Ỳ", name: "Y Grave", id: "te-y-grave-upper" },
    { letter: "ỳ", unicode: "ỳ", name: "y Grave", id: "te-y-grave-lower" },

    { letter: "Ń", unicode: "Ń", name: "N Acute", id: "te-n-acute-upper" },
    { letter: "ń", unicode: "ń", name: "n Acute", id: "te-n-acute-lower" },
    { letter: "Ǹ", unicode: "Ǹ", name: "N Grave", id: "te-n-grave-upper" },
    { letter: "ǹ", unicode: "ǹ", name: "n Grave", id: "te-n-grave-lower" },
    { letter: "Ṅ", unicode: "Ṅ", name: "N Macron", id: "te-n-macron-upper" },
    { letter: "ṅ", unicode: "ṅ", name: "n Macron", id: "te-n-macron-lower" },
    { letter: "Ḿ", unicode: "Ḿ", name: "M Acute", id: "te-m-acute-upper" },
    { letter: "ḿ", unicode: "ḿ", name: "m Acute", id: "te-m-acute-lower" },
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

  createKeys("yoruba-core-container", yorubaCore);
  createKeys("yoruba-underdot-container", yorubaUnderdot);
  createKeys("yoruba-digraphs-container", yorubaDigraphs);
  createKeys("yoruba-tonemarks-container", yorubaToneMarks);
  createKeys("yoruba-toned-vowels-container", yorubaTonedVowels);
  createKeys("yoruba-toned-extra-container", yorubaTonedExtra);
});
