document.addEventListener("DOMContentLoaded", function () {
  const turkishSpecial = [
    {
      letter: "Ç",
      unicode: "Ç",
      name: "C Cedilla",
      id: "special-c-cedilla-upper",
    },
    {
      letter: "ç",
      unicode: "ç",
      name: "c Cedilla",
      id: "special-c-cedilla-lower",
    },
    { letter: "Ğ", unicode: "Ğ", name: "G Breve", id: "special-g-breve-upper" },
    { letter: "ğ", unicode: "ğ", name: "g Breve", id: "special-g-breve-lower" },
    {
      letter: "Ö",
      unicode: "Ö",
      name: "O Umlaut",
      id: "special-o-umlaut-upper",
    },
    {
      letter: "ö",
      unicode: "ö",
      name: "o Umlaut",
      id: "special-o-umlaut-lower",
    },
    {
      letter: "Ş",
      unicode: "Ş",
      name: "S Cedilla",
      id: "special-s-cedilla-upper",
    },
    {
      letter: "ş",
      unicode: "ş",
      name: "s Cedilla",
      id: "special-s-cedilla-lower",
    },
    {
      letter: "Ü",
      unicode: "Ü",
      name: "U Umlaut",
      id: "special-u-umlaut-upper",
    },
    {
      letter: "ü",
      unicode: "ü",
      name: "u Umlaut",
      id: "special-u-umlaut-lower",
    },
  ];

  const turkishIForms = [
    { letter: "İ", unicode: "İ", name: "I Dotted", id: "iform-i-dotted-upper" },
    { letter: "i", unicode: "i", name: "i Dotted", id: "iform-i-dotted-lower" },
    {
      letter: "I",
      unicode: "I",
      name: "I Dotless",
      id: "iform-i-dotless-upper",
    },
    {
      letter: "ı",
      unicode: "ı",
      name: "i Dotless",
      id: "iform-i-dotless-lower",
    },
  ];

  const turkishUppercase = [
    { letter: "A", unicode: "A", name: "A", id: "upper-a" },
    { letter: "B", unicode: "B", name: "B", id: "upper-b" },
    { letter: "C", unicode: "C", name: "C", id: "upper-c" },
    { letter: "Ç", unicode: "Ç", name: "C Cedilla", id: "upper-c-cedilla" },
    { letter: "D", unicode: "D", name: "D", id: "upper-d" },
    { letter: "E", unicode: "E", name: "E", id: "upper-e" },
    { letter: "F", unicode: "F", name: "F", id: "upper-f" },
    { letter: "G", unicode: "G", name: "G", id: "upper-g" },
    { letter: "Ğ", unicode: "Ğ", name: "G Breve", id: "upper-g-breve" },
    { letter: "H", unicode: "H", name: "H", id: "upper-h" },
    { letter: "I", unicode: "I", name: "I Dotless", id: "upper-i-dotless" },
    { letter: "İ", unicode: "İ", name: "I Dotted", id: "upper-i-dotted" },
    { letter: "J", unicode: "J", name: "J", id: "upper-j" },
    { letter: "K", unicode: "K", name: "K", id: "upper-k" },
    { letter: "L", unicode: "L", name: "L", id: "upper-l" },
    { letter: "M", unicode: "M", name: "M", id: "upper-m" },
    { letter: "N", unicode: "N", name: "N", id: "upper-n" },
    { letter: "O", unicode: "O", name: "O", id: "upper-o" },
    { letter: "Ö", unicode: "Ö", name: "O Umlaut", id: "upper-o-umlaut" },
    { letter: "P", unicode: "P", name: "P", id: "upper-p" },
    { letter: "R", unicode: "R", name: "R", id: "upper-r" },
    { letter: "S", unicode: "S", name: "S", id: "upper-s" },
    { letter: "Ş", unicode: "Ş", name: "S Cedilla", id: "upper-s-cedilla" },
    { letter: "T", unicode: "T", name: "T", id: "upper-t" },
    { letter: "U", unicode: "U", name: "U", id: "upper-u" },
    { letter: "Ü", unicode: "Ü", name: "U Umlaut", id: "upper-u-umlaut" },
    { letter: "V", unicode: "V", name: "V", id: "upper-v" },
    { letter: "Y", unicode: "Y", name: "Y", id: "upper-y" },
    { letter: "Z", unicode: "Z", name: "Z", id: "upper-z" },
  ];

  const turkishLowercase = [
    { letter: "a", unicode: "a", name: "a", id: "lower-a" },
    { letter: "b", unicode: "b", name: "b", id: "lower-b" },
    { letter: "c", unicode: "c", name: "c", id: "lower-c" },
    { letter: "ç", unicode: "ç", name: "c Cedilla", id: "lower-c-cedilla" },
    { letter: "d", unicode: "d", name: "d", id: "lower-d" },
    { letter: "e", unicode: "e", name: "e", id: "lower-e" },
    { letter: "f", unicode: "f", name: "f", id: "lower-f" },
    { letter: "g", unicode: "g", name: "g", id: "lower-g" },
    { letter: "ğ", unicode: "ğ", name: "g Breve", id: "lower-g-breve" },
    { letter: "h", unicode: "h", name: "h", id: "lower-h" },
    { letter: "ı", unicode: "ı", name: "i Dotless", id: "lower-i-dotless" },
    { letter: "i", unicode: "i", name: "i Dotted", id: "lower-i-dotted" },
    { letter: "j", unicode: "j", name: "j", id: "lower-j" },
    { letter: "k", unicode: "k", name: "k", id: "lower-k" },
    { letter: "l", unicode: "l", name: "l", id: "lower-l" },
    { letter: "m", unicode: "m", name: "m", id: "lower-m" },
    { letter: "n", unicode: "n", name: "n", id: "lower-n" },
    { letter: "o", unicode: "o", name: "o", id: "lower-o" },
    { letter: "ö", unicode: "ö", name: "o Umlaut", id: "lower-o-umlaut" },
    { letter: "p", unicode: "p", name: "p", id: "lower-p" },
    { letter: "r", unicode: "r", name: "r", id: "lower-r" },
    { letter: "s", unicode: "s", name: "s", id: "lower-s" },
    { letter: "ş", unicode: "ş", name: "s Cedilla", id: "lower-s-cedilla" },
    { letter: "t", unicode: "t", name: "t", id: "lower-t" },
    { letter: "u", unicode: "u", name: "u", id: "lower-u" },
    { letter: "ü", unicode: "ü", name: "u Umlaut", id: "lower-u-umlaut" },
    { letter: "v", unicode: "v", name: "v", id: "lower-v" },
    { letter: "y", unicode: "y", name: "y", id: "lower-y" },
    { letter: "z", unicode: "z", name: "z", id: "lower-z" },
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

  createKeys("turkish-special-container", turkishSpecial);
  createKeys("turkish-i-container", turkishIForms);
  createKeys("turkish-uppercase-container", turkishUppercase);
  createKeys("turkish-lowercase-container", turkishLowercase);
});
