document.addEventListener("DOMContentLoaded", function () {
  const laoLetters = [
    { letter: "ກ", unicode: "ກ", name: "Ko", id: "letter-ko" },
    { letter: "ຂ", unicode: "ຂ", name: "Kho Sung", id: "letter-kho-sung" },
    { letter: "ຄ", unicode: "ຄ", name: "Kho Tam", id: "letter-kho-tam" },
    { letter: "ງ", unicode: "ງ", name: "Ngo", id: "letter-ngo" },
    { letter: "ຈ", unicode: "ຈ", name: "Co", id: "letter-co" },
    { letter: "ຊ", unicode: "ຊ", name: "So Tam", id: "letter-so-tam" },
    { letter: "ຍ", unicode: "ຍ", name: "Nyo", id: "letter-nyo" },
    { letter: "ດ", unicode: "ດ", name: "Do", id: "letter-do" },
    { letter: "ຕ", unicode: "ຕ", name: "To", id: "letter-to" },
    { letter: "ຖ", unicode: "ຖ", name: "Tho Sung", id: "letter-tho-sung" },
    { letter: "ທ", unicode: "ທ", name: "Tho Tam", id: "letter-tho-tam" },
    { letter: "ນ", unicode: "ນ", name: "No", id: "letter-no" },
    { letter: "ບ", unicode: "ບ", name: "Bo", id: "letter-bo" },
    { letter: "ປ", unicode: "ປ", name: "Po", id: "letter-po" },
    { letter: "ຜ", unicode: "ຜ", name: "Pho Sung", id: "letter-pho-sung" },
    { letter: "ຝ", unicode: "ຝ", name: "Fo Tam", id: "letter-fo-tam" },
    { letter: "ພ", unicode: "ພ", name: "Pho Tam", id: "letter-pho-tam" },
    { letter: "ຟ", unicode: "ຟ", name: "Fo Sung", id: "letter-fo-sung" },
    { letter: "ມ", unicode: "ມ", name: "Mo", id: "letter-mo" },
    { letter: "ຢ", unicode: "ຢ", name: "Yo", id: "letter-yo" },
    { letter: "ຣ", unicode: "ຣ", name: "Ro", id: "letter-ro" },
    { letter: "ລ", unicode: "ລ", name: "Lo", id: "letter-lo" },
    { letter: "ວ", unicode: "ວ", name: "Wo", id: "letter-wo" },
    { letter: "ສ", unicode: "ສ", name: "So Sung", id: "letter-so-sung" },
    { letter: "ຫ", unicode: "ຫ", name: "Ho Sung", id: "letter-ho-sung" },
    { letter: "ອ", unicode: "ອ", name: "O", id: "letter-o" },
    { letter: "ຮ", unicode: "ຮ", name: "Ho Tam", id: "letter-ho-tam" },
    ];
    
  const laoExtras = [
    { letter: "ໜ", unicode: "ໜ", name: "Ho No", id: "extra-ho-no" },
    { letter: "ໝ", unicode: "ໝ", name: "Ho Mo", id: "extra-ho-mo" },
    { letter: "ໞ", unicode: "ໞ", name: "Khmu Go", id: "extra-khmu-go" },
    { letter: "ໟ", unicode: "ໟ", name: "Khmu Nyo", id: "extra-khmu-nyo" },
  ];

  const laoVowels = [
    { letter: "◌ະ", unicode: "ະ", name: "Vowel A", id: "vowel-a" },
    { letter: "◌ັ", unicode: "ັ", name: "Mai Kan", id: "vowel-mai-kan" },
    { letter: "◌າ", unicode: "າ", name: "Vowel AA", id: "vowel-aa" },
    { letter: "◌ຳ", unicode: "ຳ", name: "Vowel AM", id: "vowel-am" },
    { letter: "◌ິ", unicode: "ິ", name: "Vowel I", id: "vowel-i" },
    { letter: "◌ີ", unicode: "ີ", name: "Vowel II", id: "vowel-ii" },
    { letter: "◌ຶ", unicode: "ຶ", name: "Vowel Y", id: "vowel-y" },
    { letter: "◌ື", unicode: "ື", name: "Vowel YY", id: "vowel-yy" },
    { letter: "◌ຸ", unicode: "ຸ", name: "Vowel U", id: "vowel-u" },
    { letter: "◌ູ", unicode: "ູ", name: "Vowel UU", id: "vowel-uu" },
    { letter: "◌ົ", unicode: "ົ", name: "Mai Kon", id: "vowel-mai-kon" },
    {
      letter: "◌ຼ",
      unicode: "ຼ",
      name: "Semivowel Lo",
      id: "vowel-semivowel-lo",
    },
    {
      letter: "◌ຽ",
      unicode: "ຽ",
      name: "Semivowel Nyo",
      id: "vowel-semivowel-nyo",
    },
    { letter: "ເ", unicode: "ເ", name: "Vowel E", id: "vowel-e" },
    { letter: "ແ", unicode: "ແ", name: "Vowel EI", id: "vowel-ei" },
    { letter: "ໂ", unicode: "ໂ", name: "Vowel O", id: "vowel-o" },
    { letter: "ໃ", unicode: "ໃ", name: "Vowel AY", id: "vowel-ay" },
    { letter: "ໄ", unicode: "ໄ", name: "Vowel AI", id: "vowel-ai" },
  ];

  const laoMarks = [
    { letter: "◌຺", unicode: "຺", name: "Pali Virama", id: "mark-pali-virama" },
    { letter: "◌່", unicode: "່", name: "Mai Ek", id: "mark-mai-ek" },
    { letter: "◌້", unicode: "້", name: "Mai Tho", id: "mark-mai-tho" },
    { letter: "◌໊", unicode: "໊", name: "Mai Ti", id: "mark-mai-ti" },
    { letter: "◌໋", unicode: "໋", name: "Mai Catawa", id: "mark-mai-catawa" },
    {
      letter: "◌໌",
      unicode: "໌",
      name: "Cancellation Mark",
      id: "mark-cancellation",
    },
    { letter: "◌ໍ", unicode: "ໍ", name: "Niggahita", id: "mark-niggahita" },
    { letter: "◌໎", unicode: "໎", name: "Yamakkan", id: "mark-yamakkan" },
  ];

  const laoPunctuation = [
    { letter: "ຯ", unicode: "ຯ", name: "Ellipsis", id: "punct-ellipsis" },
    { letter: "ໆ", unicode: "ໆ", name: "Ko La", id: "punct-ko-la" },
  ];

  const laoDigits = [
    { letter: "໐", unicode: "໐", name: "Zero", id: "digit-zero" },
    { letter: "໑", unicode: "໑", name: "One", id: "digit-one" },
    { letter: "໒", unicode: "໒", name: "Two", id: "digit-two" },
    { letter: "໓", unicode: "໓", name: "Three", id: "digit-three" },
    { letter: "໔", unicode: "໔", name: "Four", id: "digit-four" },
    { letter: "໕", unicode: "໕", name: "Five", id: "digit-five" },
    { letter: "໖", unicode: "໖", name: "Six", id: "digit-six" },
    { letter: "໗", unicode: "໗", name: "Seven", id: "digit-seven" },
    { letter: "໘", unicode: "໘", name: "Eight", id: "digit-eight" },
    { letter: "໙", unicode: "໙", name: "Nine", id: "digit-nine" },
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

  createKeys("lao-letters-container", laoLetters);
  createKeys("lao-extras-container", laoExtras);
  createKeys("lao-vowels-container", laoVowels);
  createKeys("lao-marks-container", laoMarks);
  createKeys("lao-punctuation-container", laoPunctuation);
  createKeys("lao-digits-container", laoDigits);
});
