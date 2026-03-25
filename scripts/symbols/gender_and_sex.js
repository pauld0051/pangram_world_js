document.addEventListener("DOMContentLoaded", () => {
  const genderIdentitySymbols = [
    { letter: "♂", codePoint: "U+2642", name: "Male" },
    { letter: "♀", codePoint: "U+2640", name: "Female" },
    { letter: "⚧", codePoint: "U+26A7", name: "Transgender" },

    // Pick the one you want for Agender:
    // "⚪" = common but vague
    // "⚲" = neuter sign
    // "∅" = common community-style agender symbol
    { letter: "⚲", codePoint: "U+26B2", name: "Agender", id: "agender" },

    { letter: "⚤", codePoint: "U+26A4", name: "Bigender" },
    { letter: "⚥", codePoint: "U+26A5", name: "Intersex" },
    { letter: "⚨", codePoint: "U+26A8", name: "Non-Binary", id: "non-binary" },
    {
      letter: "⚩",
      codePoint: "U+26A9",
      name: "Androgynous",
      id: "androgynous",
    },
  ];

  const sexualOrientationSymbols = [
    { letter: "⚣", codePoint: "U+26A3", name: "Gay" },
    { letter: "⚢", codePoint: "U+26A2", name: "Lesbian" },
    {
      letter: "⚤",
      codePoint: "U+26A4",
      name: "Heterosexual",
      id: "heterosexual",
    },
  ];

  const restroomSymbols = [
    { letter: "🚻", codePoint: "U+1F6BB", name: "Restroom" },
    {
      letter: "🚹",
      codePoint: "U+1F6B9",
      name: "Male Restroom",
      id: "male-restroom",
    },
    {
      letter: "🚺",
      codePoint: "U+1F6BA",
      name: "Female Restroom",
      id: "female-restroom",
    },
    {
      letter: "🚼",
      codePoint: "U+1F6BC",
      name: "Baby Changing",
      id: "baby-changing",
    },
  ];

  function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    if (!container) return;

    symbols.forEach((item) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

      if (item.id) {
        key.id = item.id;
      }

      key.setAttribute("role", "button");
      key.setAttribute("tabindex", "0");
      key.dataset.codePoint = item.codePoint;

      const letterSpan = document.createElement("span");
      letterSpan.className = "letter";
      letterSpan.textContent = item.letter;

      const nameSpan = document.createElement("span");
      nameSpan.className = "name";
      nameSpan.textContent = item.name;

      key.appendChild(letterSpan);
      key.appendChild(nameSpan);

      const handleCopy = async () => {
        await copyToClipboard(item.letter);
        showTooltip("Copied", key);
      };

      key.addEventListener("click", handleCopy);
      key.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCopy();
        }
      });

      container.appendChild(key);
    });
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
  }

  function showTooltip(message, element) {
    removeExistingTooltips();

    const tooltip = document.createElement("div");
    tooltip.className = "copy-tooltip";
    tooltip.textContent = message;
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "1000";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none";

    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    const x = rect.left + window.scrollX + rect.width / 2;
    const y = rect.top + window.scrollY;

    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`;

    setTimeout(() => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    }, 1500);
  }

  function removeExistingTooltips() {
    document.querySelectorAll(".copy-tooltip").forEach((tooltip) => {
      tooltip.remove();
    });
  }

  createKeys("gender-identity-container", genderIdentitySymbols);
  createKeys("sexual-orientation-container", sexualOrientationSymbols);
  createKeys("restroom-symbols-container", restroomSymbols);
});
