document.addEventListener("DOMContentLoaded", function () {
  const balticLetters = [
    {
      letter: "Ā",
      unicode: "Ā",
      name: "A Macron",
      id: "baltic-a-macron-upper",
    },
    {
      letter: "ā",
      unicode: "ā",
      name: "a Macron",
      id: "baltic-a-macron-lower",
    },
    { letter: "Č", unicode: "Č", name: "C Caron", id: "baltic-c-caron-upper" },
    { letter: "č", unicode: "č", name: "c Caron", id: "baltic-c-caron-lower" },
    {
      letter: "Ē",
      unicode: "Ē",
      name: "E Macron",
      id: "baltic-e-macron-upper",
    },
    {
      letter: "ē",
      unicode: "ē",
      name: "e Macron",
      id: "baltic-e-macron-lower",
    },
    {
      letter: "Ė",
      unicode: "Ė",
      name: "E Dot Above",
      id: "baltic-e-dot-upper",
    },
    {
      letter: "ė",
      unicode: "ė",
      name: "e Dot Above",
      id: "baltic-e-dot-lower",
    },
    { letter: "Ģ", unicode: "Ģ", name: "G Comma", id: "baltic-g-comma-upper" },
    { letter: "ģ", unicode: "ģ", name: "g Comma", id: "baltic-g-comma-lower" },
    {
      letter: "Ī",
      unicode: "Ī",
      name: "I Macron",
      id: "baltic-i-macron-upper",
    },
    {
      letter: "ī",
      unicode: "ī",
      name: "i Macron",
      id: "baltic-i-macron-lower",
    },
    {
      letter: "Į",
      unicode: "Į",
      name: "I Ogonek",
      id: "baltic-i-ogonek-upper",
    },
    {
      letter: "į",
      unicode: "į",
      name: "i Ogonek",
      id: "baltic-i-ogonek-lower",
    },
    { letter: "Ķ", unicode: "Ķ", name: "K Comma", id: "baltic-k-comma-upper" },
    { letter: "ķ", unicode: "ķ", name: "k Comma", id: "baltic-k-comma-lower" },
    { letter: "Ļ", unicode: "Ļ", name: "L Comma", id: "baltic-l-comma-upper" },
    { letter: "ļ", unicode: "ļ", name: "l Comma", id: "baltic-l-comma-lower" },
    { letter: "Ņ", unicode: "Ņ", name: "N Comma", id: "baltic-n-comma-upper" },
    { letter: "ņ", unicode: "ņ", name: "n Comma", id: "baltic-n-comma-lower" },
    {
      letter: "Ū",
      unicode: "Ū",
      name: "U Macron",
      id: "baltic-u-macron-upper",
    },
    {
      letter: "ū",
      unicode: "ū",
      name: "u Macron",
      id: "baltic-u-macron-lower",
    },
    {
      letter: "Ų",
      unicode: "Ų",
      name: "U Ogonek",
      id: "baltic-u-ogonek-upper",
    },
    {
      letter: "ų",
      unicode: "ų",
      name: "u Ogonek",
      id: "baltic-u-ogonek-lower",
    },
    {
      letter: "Ą",
      unicode: "Ą",
      name: "A Ogonek",
      id: "baltic-a-ogonek-upper",
    },
    {
      letter: "ą",
      unicode: "ą",
      name: "a Ogonek",
      id: "baltic-a-ogonek-lower",
    },
    {
      letter: "Ę",
      unicode: "Ę",
      name: "E Ogonek",
      id: "baltic-e-ogonek-upper",
    },
    {
      letter: "ę",
      unicode: "ę",
      name: "e Ogonek",
      id: "baltic-e-ogonek-lower",
    },
    { letter: "Š", unicode: "Š", name: "S Caron", id: "baltic-s-caron-upper" },
    { letter: "š", unicode: "š", name: "s Caron", id: "baltic-s-caron-lower" },
    { letter: "Ž", unicode: "Ž", name: "Z Caron", id: "baltic-z-caron-upper" },
    { letter: "ž", unicode: "ž", name: "z Caron", id: "baltic-z-caron-lower" },
  ];

  const slavicLetters = [
    {
      letter: "Ć",
      unicode: "Ć",
      name: "Capital C Acute",
      id: "slavic-c-acute-upper",
    },
    {
      letter: "ć",
      unicode: "ć",
      name: "Small C Acute",
      id: "slavic-c-acute-lower",
    },
    {
      letter: "Č",
      unicode: "Č",
      name: "Capital C Caron",
      id: "slavic-c-caron-upper",
    },
    {
      letter: "č",
      unicode: "č",
      name: "Small C Caron",
      id: "slavic-c-caron-lower",
    },
    {
      letter: "Đ",
      unicode: "Đ",
      name: "Capital D Stroke",
      id: "slavic-d-stroke-upper",
    },
    {
      letter: "đ",
      unicode: "đ",
      name: "Small D Stroke",
      id: "slavic-d-stroke-lower",
    },
    {
      letter: "Ď",
      unicode: "Ď",
      name: "Capital D Caron",
      id: "slavic-d-caron-upper",
    },
    {
      letter: "ď",
      unicode: "ď",
      name: "Small D Caron",
      id: "slavic-d-caron-lower",
    },
    {
      letter: "Ł",
      unicode: "Ł",
      name: "Capital L Stroke",
      id: "slavic-l-stroke-upper",
    },
    {
      letter: "ł",
      unicode: "ł",
      name: "Small L Stroke",
      id: "slavic-l-stroke-lower",
    },
    {
      letter: "Ľ",
      unicode: "Ľ",
      name: "Capital L Caron",
      id: "slavic-l-caron-upper",
    },
    {
      letter: "ľ",
      unicode: "ľ",
      name: "Small L Caron",
      id: "slavic-l-caron-lower",
    },
    {
      letter: "Ń",
      unicode: "Ń",
      name: "Capital N Acute",
      id: "slavic-n-acute-upper",
    },
    {
      letter: "ń",
      unicode: "ń",
      name: "Small N Acute",
      id: "slavic-n-acute-lower",
    },
    {
      letter: "Ň",
      unicode: "Ň",
      name: "Capital N Caron",
      id: "slavic-n-caron-upper",
    },
    {
      letter: "ň",
      unicode: "ň",
      name: "Small N Caron",
      id: "slavic-n-caron-lower",
    },
    {
      letter: "Ŕ",
      unicode: "Ŕ",
      name: "Capital R Acute",
      id: "slavic-r-acute-upper",
    },
    {
      letter: "ŕ",
      unicode: "ŕ",
      name: "Small R Acute",
      id: "slavic-r-acute-lower",
    },
    {
      letter: "Ř",
      unicode: "Ř",
      name: "Capital R Caron",
      id: "slavic-r-caron-upper",
    },
    {
      letter: "ř",
      unicode: "ř",
      name: "Small R Caron",
      id: "slavic-r-caron-lower",
    },
    {
      letter: "Ś",
      unicode: "Ś",
      name: "Capital S Acute",
      id: "slavic-s-acute-upper",
    },
    {
      letter: "ś",
      unicode: "ś",
      name: "Small S Acute",
      id: "slavic-s-acute-lower",
    },
    {
      letter: "Š",
      unicode: "Š",
      name: "Capital S Caron",
      id: "slavic-s-caron-upper",
    },
    {
      letter: "š",
      unicode: "š",
      name: "Small S Caron",
      id: "slavic-s-caron-lower",
    },
    {
      letter: "Ť",
      unicode: "Ť",
      name: "Capital T Caron",
      id: "slavic-t-caron-upper",
    },
    {
      letter: "ť",
      unicode: "ť",
      name: "Small T Caron",
      id: "slavic-t-caron-lower",
    },
    {
      letter: "Ů",
      unicode: "Ů",
      name: "Capital U Ring Above",
      id: "slavic-u-ring-upper",
    },
    {
      letter: "ů",
      unicode: "ů",
      name: "Small U Ring Above",
      id: "slavic-u-ring-lower",
    },
    {
      letter: "Ź",
      unicode: "Ź",
      name: "Capital Z Acute",
      id: "slavic-z-acute-upper",
    },
    {
      letter: "ź",
      unicode: "ź",
      name: "Small Z Acute",
      id: "slavic-z-acute-lower",
    },
    {
      letter: "Ż",
      unicode: "Ż",
      name: "Capital Z Dot Above",
      id: "slavic-z-dot-upper",
    },
    {
      letter: "ż",
      unicode: "ż",
      name: "Small Z Dot Above",
      id: "slavic-z-dot-lower",
    },
    {
      letter: "Ž",
      unicode: "Ž",
      name: "Capital Z Caron",
      id: "slavic-z-caron-upper",
    },
    {
      letter: "ž",
      unicode: "ž",
      name: "Small Z Caron",
      id: "slavic-z-caron-lower",
    },
  ];

  const digraphLetters = [
    {
      letter: "Ǆ",
      unicode: "Ǆ",
      name: "Capital DZ Caron",
      id: "digraph-dz-caron-upper",
    },
    {
      letter: "ǅ",
      unicode: "ǅ",
      name: "Titlecase Dz Caron",
      id: "digraph-dz-caron-title",
    },
    {
      letter: "ǆ",
      unicode: "ǆ",
      name: "Small Dz Caron",
      id: "digraph-dz-caron-lower",
    },
    { letter: "Ǉ", unicode: "Ǉ", name: "Capital LJ", id: "digraph-lj-upper" },
    { letter: "ǈ", unicode: "ǈ", name: "Titlecase Lj", id: "digraph-lj-title" },
    { letter: "ǉ", unicode: "ǉ", name: "Small Lj", id: "digraph-lj-lower" },
    { letter: "Ǌ", unicode: "Ǌ", name: "Capital NJ", id: "digraph-nj-upper" },
    { letter: "ǋ", unicode: "ǋ", name: "Titlecase Nj", id: "digraph-nj-title" },
    { letter: "ǌ", unicode: "ǌ", name: "Small Nj", id: "digraph-nj-lower" },
  ];

  const legacyLetters = [
    {
      letter: "Ō",
      unicode: "Ō",
      name: "O Macron",
      id: "legacy-o-macron-upper",
    },
    {
      letter: "ō",
      unicode: "ō",
      name: "o Macron",
      id: "legacy-o-macron-lower",
    },
    { letter: "Ŗ", unicode: "Ŗ", name: "R Comma", id: "legacy-r-comma-upper" },
    { letter: "ŗ", unicode: "ŗ", name: "r Comma", id: "legacy-r-comma-lower" },
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

  createKeys("baltic-letters-container", balticLetters);
  createKeys("slavic-letters-container", slavicLetters);
  createKeys("digraph-letters-container", digraphLetters);
  createKeys("legacy-letters-container", legacyLetters);
});
