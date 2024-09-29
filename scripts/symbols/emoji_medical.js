document.addEventListener("DOMContentLoaded", function () {
  const medicalProfessionalEmojis = [
    { letter: "🧑‍⚕️", unicode: "🧑‍⚕️", name: "Health Worker", id: "health-worker" },
    {
      letter: "👩‍⚕️",
      unicode: "👩‍⚕️",
      name: "Woman Health Worker",
      id: "woman-health-worker",
    },
    {
      letter: "👨‍⚕️",
      unicode: "👨‍⚕️",
      name: "Man Health Worker",
      id: "man-health-worker",
    },
    { letter: "🧑‍🔬", unicode: "🧑‍🔬", name: "Scientist", id: "scientist" },
  ];

    const medicalFacilitiesEmojis = [
      // Medical Facilities
      { letter: "🏥", unicode: "🏥", name: "Hospital", id: "hospital" },
      { letter: "🚑", unicode: "🚑", name: "Ambulance", id: "ambulance" },

      // Medical Equipment
      { letter: "💉", unicode: "💉", name: "Syringe", id: "syringe" },
      { letter: "💊", unicode: "💊", name: "Pill", id: "pill" },
      {
        letter: "🩹",
        unicode: "🩹",
        name: "Adhesive Bandage",
        id: "adhesive-bandage",
      },
      { letter: "🩺", unicode: "🩺", name: "Stethoscope", id: "stethoscope" },
      { letter: "🌡️", unicode: "🌡️", name: "Thermometer", id: "thermometer" },
      {
        letter: "🧬",
        unicode: "🧬",
        name: "DNA Double Helix",
        id: "dna-double-helix",
      },
      { letter: "🧪", unicode: "🧪", name: "Test Tube", id: "test-tube" },
      { letter: "🧫", unicode: "🧫", name: "Petri Dish", id: "petri-dish" },
      { letter: "🩻", unicode: "🩻", name: "X-ray", id: "x-ray" }, // Correct Unicode character for X-ray
      {
        letter: "🩺",
        unicode: "🩺",
        name: "Medical Symbol",
        id: "medical-symbol",
      },
    ];

    const healthConditionsEmojis = [
      {
        letter: "🤕",
        unicode: "🤕",
        name: "Face with Head Bandage",
        id: "face-with-bandage",
      },
      {
        letter: "🤧",
        unicode: "🤧",
        name: "Sneezing Face",
        id: "sneezing-face",
      },
      {
        letter: "🤒",
        unicode: "🤒",
        name: "Face with Thermometer",
        id: "face-with-thermometer",
      },
      {
        letter: "😷",
        unicode: "😷",
        name: "Face with Medical Mask",
        id: "face-with-medical-mask",
      },
      {
        letter: "🤢",
        unicode: "🤢",
        name: "Nauseated Face",
        id: "nauseated-face",
      },
      {
        letter: "🤮",
        unicode: "🤮",
        name: "Vomiting Face",
        id: "vomiting-face",
      },
      { letter: "😵‍💫", unicode: "😵‍💫", name: "Dizzy Face", id: "dizzy-face" },
      { letter: "🥴", unicode: "🥴", name: "Woozy Face", id: "woozy-face" },
      { letter: "🩹", unicode: "🩹", name: "Bandage", id: "bandage" },
      { letter: "💊", unicode: "💊", name: "Pill", id: "pill" },
      { letter: "💉", unicode: "💉", name: "Syringe", id: "syringe" },
    ];

  function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    symbols.forEach((item) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

      // Add the unique id if provided (for Acetate key)
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

  // Function to copy to clipboard
  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  // Function to show tooltip
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
    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`; // Center horizontally
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`; // Position above the click

    setTimeout(() => {
      if (tooltip.parentElement) {
        document.body.removeChild(tooltip);
      }
    }, 1500);
  }

  // Function to remove existing tooltips
  function removeExistingTooltips() {
    const tooltips = document.querySelectorAll(".copy-tooltip");
    tooltips.forEach((tooltip) => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    });
  }

  createKeys(
    "medical-professional-emojis-container",
    medicalProfessionalEmojis
  );
  createKeys("medical-facilities-emojis-container", medicalFacilitiesEmojis);
  createKeys("health-conditions-emojis-container", healthConditionsEmojis);
});
