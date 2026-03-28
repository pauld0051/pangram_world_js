document.addEventListener("DOMContentLoaded", function () {
  const nkoLetters = [
    { letter: "ߊ", unicode: "ߊ", name: "A", id: "letter-a" },
    { letter: "ߋ", unicode: "ߋ", name: "Ee", id: "letter-ee" },
    { letter: "ߌ", unicode: "ߌ", name: "I", id: "letter-i" },
    { letter: "ߍ", unicode: "ߍ", name: "E", id: "letter-e" },
    { letter: "ߎ", unicode: "ߎ", name: "U", id: "letter-u" },
    { letter: "ߏ", unicode: "ߏ", name: "Oo", id: "letter-oo" },
    { letter: "ߐ", unicode: "ߐ", name: "O", id: "letter-o" },
    { letter: "ߑ", unicode: "ߑ", name: "Dagbasinna", id: "letter-dagbasinna" },
    { letter: "ߒ", unicode: "ߒ", name: "N", id: "letter-n" },
    { letter: "ߓ", unicode: "ߓ", name: "Ba", id: "letter-ba" },
    { letter: "ߔ", unicode: "ߔ", name: "Pa", id: "letter-pa" },
    { letter: "ߕ", unicode: "ߕ", name: "Ta", id: "letter-ta" },
    { letter: "ߖ", unicode: "ߖ", name: "Ja", id: "letter-ja" },
    { letter: "ߗ", unicode: "ߗ", name: "Cha", id: "letter-cha" },
    { letter: "ߘ", unicode: "ߘ", name: "Da", id: "letter-da" },
    { letter: "ߙ", unicode: "ߙ", name: "Ra", id: "letter-ra" },
    { letter: "ߚ", unicode: "ߚ", name: "Rra", id: "letter-rra" },
    { letter: "ߛ", unicode: "ߛ", name: "Sa", id: "letter-sa" },
    { letter: "ߜ", unicode: "ߜ", name: "Gba", id: "letter-gba" },
    { letter: "ߝ", unicode: "ߝ", name: "Fa", id: "letter-fa" },
    { letter: "ߞ", unicode: "ߞ", name: "Ka", id: "letter-ka" },
    { letter: "ߟ", unicode: "ߟ", name: "La", id: "letter-la" },
    { letter: "ߠ", unicode: "ߠ", name: "Na Woloso", id: "letter-na-woloso" },
    { letter: "ߡ", unicode: "ߡ", name: "Ma", id: "letter-ma" },
    { letter: "ߢ", unicode: "ߢ", name: "Nya", id: "letter-nya" },
    { letter: "ߣ", unicode: "ߣ", name: "Na", id: "letter-na" },
    { letter: "ߤ", unicode: "ߤ", name: "Ha", id: "letter-ha" },
    { letter: "ߥ", unicode: "ߥ", name: "Wa", id: "letter-wa" },
    { letter: "ߦ", unicode: "ߦ", name: "Ya", id: "letter-ya" },
    { letter: "ߧ", unicode: "ߧ", name: "Nya Woloso", id: "letter-nya-woloso" },
    { letter: "ߨ", unicode: "ߨ", name: "Jona Ja", id: "letter-jona-ja" },
    { letter: "ߩ", unicode: "ߩ", name: "Jona Cha", id: "letter-jona-cha" },
    { letter: "ߪ", unicode: "ߪ", name: "Jona Ra", id: "letter-jona-ra" },
  ];

  const nkoMarks = [
    {
      letter: "◌߫",
      unicode: "߫",
      name: "Short High Tone",
      id: "mark-short-high",
    },
    {
      letter: "◌߬",
      unicode: "߬",
      name: "Short Low Tone",
      id: "mark-short-low",
    },
    {
      letter: "◌߭",
      unicode: "߭",
      name: "Short Rising Tone",
      id: "mark-short-rising",
    },
    {
      letter: "◌߮",
      unicode: "߮",
      name: "Long Descending Tone",
      id: "mark-long-descending",
    },
    {
      letter: "◌߯",
      unicode: "߯",
      name: "Long High Tone",
      id: "mark-long-high",
    },
    { letter: "◌߰", unicode: "߰", name: "Long Low Tone", id: "mark-long-low" },
    {
      letter: "◌߱",
      unicode: "߱",
      name: "Long Rising Tone",
      id: "mark-long-rising",
    },
    {
      letter: "◌߲",
      unicode: "߲",
      name: "Nasalization Mark",
      id: "mark-nasalization",
    },
    {
      letter: "◌߳",
      unicode: "߳",
      name: "Double Dot Above",
      id: "mark-double-dot",
    },
  ];

  const nkoSymbols = [
    {
      letter: "ߴ",
      unicode: "ߴ",
      name: "High Tone Apostrophe",
      id: "symbol-high-apostrophe",
    },
    {
      letter: "ߵ",
      unicode: "ߵ",
      name: "Low Tone Apostrophe",
      id: "symbol-low-apostrophe",
    },
    { letter: "߶", unicode: "߶", name: "Oo Dennen", id: "symbol-oo-dennen" },
    { letter: "߷", unicode: "߷", name: "Gbakurunen", id: "symbol-gbakurunen" },
    { letter: "߸", unicode: "߸", name: "Comma", id: "symbol-comma" },
    {
      letter: "߹",
      unicode: "߹",
      name: "Exclamation Mark",
      id: "symbol-exclamation",
    },
    { letter: "ߺ", unicode: "ߺ", name: "Lajanyalan", id: "symbol-lajanyalan" },
    { letter: "߽", unicode: "߽", name: "Dantayalan", id: "symbol-dantayalan" },
    { letter: "߾", unicode: "߾", name: "Dorome Sign", id: "symbol-dorome" },
    { letter: "߿", unicode: "߿", name: "Taman Sign", id: "symbol-taman" },
  ];

  const nkoDigits = [
    { letter: "߀", unicode: "߀", name: "Zero", id: "digit-zero" },
    { letter: "߁", unicode: "߁", name: "One", id: "digit-one" },
    { letter: "߂", unicode: "߂", name: "Two", id: "digit-two" },
    { letter: "߃", unicode: "߃", name: "Three", id: "digit-three" },
    { letter: "߄", unicode: "߄", name: "Four", id: "digit-four" },
    { letter: "߅", unicode: "߅", name: "Five", id: "digit-five" },
    { letter: "߆", unicode: "߆", name: "Six", id: "digit-six" },
    { letter: "߇", unicode: "߇", name: "Seven", id: "digit-seven" },
    { letter: "߈", unicode: "߈", name: "Eight", id: "digit-eight" },
    { letter: "߉", unicode: "߉", name: "Nine", id: "digit-nine" },
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

  createKeys("nko-letters-container", nkoLetters);
  createKeys("nko-marks-container", nkoMarks);
  createKeys("nko-symbols-container", nkoSymbols);
  createKeys("nko-digits-container", nkoDigits);
});
