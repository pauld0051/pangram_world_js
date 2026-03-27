document.addEventListener("DOMContentLoaded", function () {
  const arabicLetters = [
    { letter: "ا", unicode: "ا", name: "Alif", id: "alif" },
    { letter: "ب", unicode: "ب", name: "Ba", id: "ba" },
    { letter: "ت", unicode: "ت", name: "Ta", id: "ta" },
    { letter: "ث", unicode: "ث", name: "Tha", id: "tha" },
    { letter: "ج", unicode: "ج", name: "Jim", id: "jim" },
    { letter: "ح", unicode: "ح", name: "Ha", id: "ha" },
    { letter: "خ", unicode: "خ", name: "Kha", id: "kha" },
    { letter: "د", unicode: "د", name: "Dal", id: "dal" },
    { letter: "ذ", unicode: "ذ", name: "Dhal", id: "dhal" },
    { letter: "ر", unicode: "ر", name: "Ra", id: "ra" },
    { letter: "ز", unicode: "ز", name: "Zay", id: "zay" },
    { letter: "س", unicode: "س", name: "Sin", id: "sin" },
    { letter: "ش", unicode: "ش", name: "Shin", id: "shin" },
    { letter: "ص", unicode: "ص", name: "Sad", id: "sad" },
    { letter: "ض", unicode: "ض", name: "Dad", id: "dad" },
    { letter: "ط", unicode: "ط", name: "Tah", id: "tah" },
    { letter: "ظ", unicode: "ظ", name: "Zah", id: "zah" },
    { letter: "ع", unicode: "ع", name: "Ain", id: "ain" },
    { letter: "غ", unicode: "غ", name: "Ghayn", id: "ghayn" },
    { letter: "ف", unicode: "ف", name: "Fa", id: "fa" },
    { letter: "ق", unicode: "ق", name: "Qaf", id: "qaf" },
    { letter: "ك", unicode: "ك", name: "Kaf", id: "kaf" },
    { letter: "ل", unicode: "ل", name: "Lam", id: "lam" },
    { letter: "م", unicode: "م", name: "Mim", id: "mim" },
    { letter: "ن", unicode: "ن", name: "Nun", id: "nun" },
    { letter: "ه", unicode: "ه", name: "Ha", id: "ha-final" },
    { letter: "و", unicode: "و", name: "Waw", id: "waw" },
    { letter: "ي", unicode: "ي", name: "Ya", id: "ya" },
  ];

  const arabicExtras = [
    { letter: "ء", unicode: "ء", name: "Hamza", id: "hamza" },
    {
      letter: "أ",
      unicode: "أ",
      name: "Alif Hamza Above",
      id: "alif-hamza-above",
    },
    {
      letter: "إ",
      unicode: "إ",
      name: "Alif Hamza Below",
      id: "alif-hamza-below",
    },
    { letter: "آ", unicode: "آ", name: "Alif Madda", id: "alif-madda" },
    { letter: "ة", unicode: "ة", name: "Ta Marbuta", id: "ta-marbuta" },
    { letter: "ؤ", unicode: "ؤ", name: "Waw Hamza", id: "waw-hamza" },
    { letter: "ئ", unicode: "ئ", name: "Ya Hamza", id: "ya-hamza" },
    { letter: "ى", unicode: "ى", name: "Alif Maqsura", id: "alif-maqsura" },
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
        document.body.removeChild(tooltip);
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

  createKeys("arabic-letters-container", arabicLetters);
  createKeys("arabic-extras-container", arabicExtras);
});
