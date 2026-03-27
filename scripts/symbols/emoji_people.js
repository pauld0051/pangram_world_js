document.addEventListener("DOMContentLoaded", function () {
  const peopleEmojis = [
    { letter: "🥷", unicode: "🥷", name: "Ninja", id: "ninja" },

    { letter: "🦸", unicode: "🦸", name: "Superhero", id: "superhero" },
    {
      letter: "🦸‍♀️",
      unicode: "🦸‍♀️",
      name: "Woman Superhero",
      id: "woman-superhero",
    },
    { letter: "🦸‍♂️", unicode: "🦸‍♂️", name: "Man Superhero", id: "man-superhero" },

    { letter: "🦹", unicode: "🦹", name: "Supervillain", id: "supervillain" },
    {
      letter: "🦹‍♀️",
      unicode: "🦹‍♀️",
      name: "Woman Supervillain",
      id: "woman-supervillain",
    },
    {
      letter: "🦹‍♂️",
      unicode: "🦹‍♂️",
      name: "Man Supervillain",
      id: "man-supervillain",
    },

    { letter: "🤶", unicode: "🤶", name: "Mrs Claus", id: "mrs-claus" },
    { letter: "🎅", unicode: "🎅", name: "Santa Claus", id: "santa-claus" },
    { letter: "🧑‍🎄", unicode: "🧑‍🎄", name: "Mx Claus", id: "mx-claus" },

    { letter: "🧙", unicode: "🧙", name: "Mage", id: "mage" },
    { letter: "🧙‍♀️", unicode: "🧙‍♀️", name: "Woman Mage", id: "woman-mage" },
    { letter: "🧙‍♂️", unicode: "🧙‍♂️", name: "Man Mage", id: "man-mage" },

    { letter: "🧝", unicode: "🧝", name: "Elf", id: "elf" },
    { letter: "🧝‍♀️", unicode: "🧝‍♀️", name: "Woman Elf", id: "woman-elf" },
    { letter: "🧝‍♂️", unicode: "🧝‍♂️", name: "Man Elf", id: "man-elf" },

    { letter: "🧌", unicode: "🧌", name: "Troll", id: "troll" },

    { letter: "🧛", unicode: "🧛", name: "Vampire", id: "vampire" },
    { letter: "🧛‍♀️", unicode: "🧛‍♀️", name: "Woman Vampire", id: "woman-vampire" },
    { letter: "🧛‍♂️", unicode: "🧛‍♂️", name: "Man Vampire", id: "man-vampire" },

    { letter: "🧟", unicode: "🧟", name: "Zombie", id: "zombie" },
    { letter: "🧟‍♀️", unicode: "🧟‍♀️", name: "Woman Zombie", id: "woman-zombie" },
    { letter: "🧟‍♂️", unicode: "🧟‍♂️", name: "Man Zombie", id: "man-zombie" },

    { letter: "🧞", unicode: "🧞", name: "Genie", id: "genie" },
    { letter: "🧞‍♀️", unicode: "🧞‍♀️", name: "Woman Genie", id: "woman-genie" },
    { letter: "🧞‍♂️", unicode: "🧞‍♂️", name: "Man Genie", id: "man-genie" },

    { letter: "🧜", unicode: "🧜", name: "Merperson", id: "merperson" },
    { letter: "🧜‍♀️", unicode: "🧜‍♀️", name: "Mermaid", id: "mermaid" },
    { letter: "🧜‍♂️", unicode: "🧜‍♂️", name: "Merman", id: "merman" },

    { letter: "🧚", unicode: "🧚", name: "Fairy", id: "fairy" },
    { letter: "🧚‍♀️", unicode: "🧚‍♀️", name: "Woman Fairy", id: "woman-fairy" },
    { letter: "🧚‍♂️", unicode: "🧚‍♂️", name: "Man Fairy", id: "man-fairy" },

    { letter: "👼", unicode: "👼", name: "Baby Angel", id: "baby-angel" },

    {
      letter: "🤰",
      unicode: "🤰",
      name: "Pregnant Woman",
      id: "pregnant-woman",
    },
    { letter: "🫃", unicode: "🫃", name: "Pregnant Man", id: "pregnant-man" },
    {
      letter: "🫄",
      unicode: "🫄",
      name: "Pregnant Person",
      id: "pregnant-person",
    },

    { letter: "🤱", unicode: "🤱", name: "Breastfeeding", id: "breastfeeding" },
    {
      letter: "🧑‍🍼",
      unicode: "🧑‍🍼",
      name: "Person Feeding Baby",
      id: "person-feeding-baby",
    },
    {
      letter: "👩‍🍼",
      unicode: "👩‍🍼",
      name: "Woman Feeding Baby",
      id: "woman-feeding-baby",
    },
    {
      letter: "👨‍🍼",
      unicode: "👨‍🍼",
      name: "Man Feeding Baby",
      id: "man-feeding-baby",
    },

    { letter: "🙇", unicode: "🙇", name: "Person Bowing", id: "person-bowing" },
    { letter: "🙇‍♀️", unicode: "🙇‍♀️", name: "Woman Bowing", id: "woman-bowing" },
    { letter: "🙇‍♂️", unicode: "🙇‍♂️", name: "Man Bowing", id: "man-bowing" },

    {
      letter: "💁",
      unicode: "💁",
      name: "Person Tipping Hand",
      id: "person-tipping-hand",
    },
    {
      letter: "💁‍♀️",
      unicode: "💁‍♀️",
      name: "Woman Tipping Hand",
      id: "woman-tipping-hand",
    },
    {
      letter: "💁‍♂️",
      unicode: "💁‍♂️",
      name: "Man Tipping Hand",
      id: "man-tipping-hand",
    },

    {
      letter: "🙅",
      unicode: "🙅",
      name: "Person Gesturing No",
      id: "person-gesturing-no",
    },
    {
      letter: "🙅‍♀️",
      unicode: "🙅‍♀️",
      name: "Woman Gesturing No",
      id: "woman-gesturing-no",
    },
    {
      letter: "🙅‍♂️",
      unicode: "🙅‍♂️",
      name: "Man Gesturing No",
      id: "man-gesturing-no",
    },

    {
      letter: "🙆",
      unicode: "🙆",
      name: "Person Gesturing OK",
      id: "person-gesturing-ok",
    },
    {
      letter: "🙆‍♀️",
      unicode: "🙆‍♀️",
      name: "Woman Gesturing OK",
      id: "woman-gesturing-ok",
    },
    {
      letter: "🙆‍♂️",
      unicode: "🙆‍♂️",
      name: "Man Gesturing OK",
      id: "man-gesturing-ok",
    },

    {
      letter: "🙋",
      unicode: "🙋",
      name: "Person Raising Hand",
      id: "person-raising-hand",
    },
    {
      letter: "🙋‍♀️",
      unicode: "🙋‍♀️",
      name: "Woman Raising Hand",
      id: "woman-raising-hand",
    },
    {
      letter: "🙋‍♂️",
      unicode: "🙋‍♂️",
      name: "Man Raising Hand",
      id: "man-raising-hand",
    },

    { letter: "👋", unicode: "👋", name: "Waving Hand", id: "waving-hand" },

    {
      letter: "🤦",
      unicode: "🤦",
      name: "Person Facepalming",
      id: "person-facepalming",
    },
    {
      letter: "🤦‍♀️",
      unicode: "🤦‍♀️",
      name: "Woman Facepalming",
      id: "woman-facepalming",
    },
    {
      letter: "🤦‍♂️",
      unicode: "🤦‍♂️",
      name: "Man Facepalming",
      id: "man-facepalming",
    },

    {
      letter: "🤷",
      unicode: "🤷",
      name: "Person Shrugging",
      id: "person-shrugging",
    },
    {
      letter: "🤷‍♀️",
      unicode: "🤷‍♀️",
      name: "Woman Shrugging",
      id: "woman-shrugging",
    },
    { letter: "🤷‍♂️", unicode: "🤷‍♂️", name: "Man Shrugging", id: "man-shrugging" },
  ];

  function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    symbols.forEach((item) => {
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

  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
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

  createKeys("people-emojis-container", peopleEmojis);
});
