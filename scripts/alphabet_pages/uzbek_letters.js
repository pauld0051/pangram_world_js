document.addEventListener("DOMContentLoaded", function () {
  const uzbekSpecial = [
    { letter: "Oʻ", unicode: "Oʻ", name: "Oʻ", id: "special-o-turned-upper" },
    { letter: "oʻ", unicode: "oʻ", name: "oʻ", id: "special-o-turned-lower" },
    { letter: "Gʻ", unicode: "Gʻ", name: "Gʻ", id: "special-g-turned-upper" },
    { letter: "gʻ", unicode: "gʻ", name: "gʻ", id: "special-g-turned-lower" },
    { letter: "Q", unicode: "Q", name: "Q", id: "special-q-upper" },
    { letter: "q", unicode: "q", name: "q", id: "special-q-lower" },
    { letter: "X", unicode: "X", name: "X", id: "special-x-upper" },
    { letter: "x", unicode: "x", name: "x", id: "special-x-lower" },
  ];

  const uzbekApostrophes = [
    {
      letter: "ʻ",
      unicode: "ʻ",
      name: "Turned Comma",
      id: "apostrophe-turned",
    },
    {
      letter: "'",
      unicode: "'",
      name: "Straight Quote",
      id: "apostrophe-straight",
    },
    { letter: "‘", unicode: "‘", name: "Left Quote", id: "apostrophe-left" },
    { letter: "’", unicode: "’", name: "Right Quote", id: "apostrophe-right" },
  ];

  const uzbekDigraphs = [
    { letter: "Sh", unicode: "Sh", name: "Sh", id: "digraph-sh-title" },
    { letter: "sh", unicode: "sh", name: "sh", id: "digraph-sh-lower" },
    { letter: "Ch", unicode: "Ch", name: "Ch", id: "digraph-ch-title" },
    { letter: "ch", unicode: "ch", name: "ch", id: "digraph-ch-lower" },
    { letter: "Ng", unicode: "Ng", name: "Ng", id: "digraph-ng-title" },
    { letter: "ng", unicode: "ng", name: "ng", id: "digraph-ng-lower" },
  ];

  const uzbekUppercase = [
    { letter: "A", unicode: "A", name: "A", id: "upper-a" },
    { letter: "B", unicode: "B", name: "B", id: "upper-b" },
    { letter: "D", unicode: "D", name: "D", id: "upper-d" },
    { letter: "E", unicode: "E", name: "E", id: "upper-e" },
    { letter: "F", unicode: "F", name: "F", id: "upper-f" },
    { letter: "G", unicode: "G", name: "G", id: "upper-g" },
    { letter: "H", unicode: "H", name: "H", id: "upper-h" },
    { letter: "I", unicode: "I", name: "I", id: "upper-i" },
    { letter: "J", unicode: "J", name: "J", id: "upper-j" },
    { letter: "K", unicode: "K", name: "K", id: "upper-k" },
    { letter: "L", unicode: "L", name: "L", id: "upper-l" },
    { letter: "M", unicode: "M", name: "M", id: "upper-m" },
    { letter: "N", unicode: "N", name: "N", id: "upper-n" },
    { letter: "O", unicode: "O", name: "O", id: "upper-o" },
    { letter: "P", unicode: "P", name: "P", id: "upper-p" },
    { letter: "Q", unicode: "Q", name: "Q", id: "upper-q" },
    { letter: "R", unicode: "R", name: "R", id: "upper-r" },
    { letter: "S", unicode: "S", name: "S", id: "upper-s" },
    { letter: "T", unicode: "T", name: "T", id: "upper-t" },
    { letter: "U", unicode: "U", name: "U", id: "upper-u" },
    { letter: "V", unicode: "V", name: "V", id: "upper-v" },
    { letter: "X", unicode: "X", name: "X", id: "upper-x" },
    { letter: "Y", unicode: "Y", name: "Y", id: "upper-y" },
    { letter: "Z", unicode: "Z", name: "Z", id: "upper-z" },
    { letter: "Oʻ", unicode: "Oʻ", name: "Oʻ", id: "upper-o-turned" },
    { letter: "Gʻ", unicode: "Gʻ", name: "Gʻ", id: "upper-g-turned" },
    { letter: "Sh", unicode: "Sh", name: "Sh", id: "upper-sh" },
    { letter: "Ch", unicode: "Ch", name: "Ch", id: "upper-ch" },
    { letter: "Ng", unicode: "Ng", name: "Ng", id: "upper-ng" },
  ];

  const uzbekLowercase = [
    { letter: "a", unicode: "a", name: "a", id: "lower-a" },
    { letter: "b", unicode: "b", name: "b", id: "lower-b" },
    { letter: "d", unicode: "d", name: "d", id: "lower-d" },
    { letter: "e", unicode: "e", name: "e", id: "lower-e" },
    { letter: "f", unicode: "f", name: "f", id: "lower-f" },
    { letter: "g", unicode: "g", name: "g", id: "lower-g" },
    { letter: "h", unicode: "h", name: "h", id: "lower-h" },
    { letter: "i", unicode: "i", name: "i", id: "lower-i" },
    { letter: "j", unicode: "j", name: "j", id: "lower-j" },
    { letter: "k", unicode: "k", name: "k", id: "lower-k" },
    { letter: "l", unicode: "l", name: "l", id: "lower-l" },
    { letter: "m", unicode: "m", name: "m", id: "lower-m" },
    { letter: "n", unicode: "n", name: "n", id: "lower-n" },
    { letter: "o", unicode: "o", name: "o", id: "lower-o" },
    { letter: "p", unicode: "p", name: "p", id: "lower-p" },
    { letter: "q", unicode: "q", name: "q", id: "lower-q" },
    { letter: "r", unicode: "r", name: "r", id: "lower-r" },
    { letter: "s", unicode: "s", name: "s", id: "lower-s" },
    { letter: "t", unicode: "t", name: "t", id: "lower-t" },
    { letter: "u", unicode: "u", name: "u", id: "lower-u" },
    { letter: "v", unicode: "v", name: "v", id: "lower-v" },
    { letter: "x", unicode: "x", name: "x", id: "lower-x" },
    { letter: "y", unicode: "y", name: "y", id: "lower-y" },
    { letter: "z", unicode: "z", name: "z", id: "lower-z" },
    { letter: "oʻ", unicode: "oʻ", name: "oʻ", id: "lower-o-turned" },
    { letter: "gʻ", unicode: "gʻ", name: "gʻ", id: "lower-g-turned" },
    { letter: "sh", unicode: "sh", name: "sh", id: "lower-sh" },
    { letter: "ch", unicode: "ch", name: "ch", id: "lower-ch" },
    { letter: "ng", unicode: "ng", name: "ng", id: "lower-ng" },
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

  createKeys("uzbek-special-container", uzbekSpecial);
  createKeys("uzbek-apostrophe-container", uzbekApostrophes);
  createKeys("uzbek-digraphs-container", uzbekDigraphs);
  createKeys("uzbek-uppercase-container", uzbekUppercase);
  createKeys("uzbek-lowercase-container", uzbekLowercase);
});
