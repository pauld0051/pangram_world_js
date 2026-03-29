document.addEventListener("DOMContentLoaded", function () {
  const thaiConsonants = [
    { letter: "ก", unicode: "ก", name: "Ko Kai", id: "cons-ko-kai" },
    { letter: "ข", unicode: "ข", name: "Kho Khai", id: "cons-kho-khai" },
    { letter: "ฃ", unicode: "ฃ", name: "Kho Khuat", id: "cons-kho-khuat" },
    { letter: "ค", unicode: "ค", name: "Kho Khwai", id: "cons-kho-khwai" },
    { letter: "ฅ", unicode: "ฅ", name: "Kho Khon", id: "cons-kho-khon" },
    { letter: "ฆ", unicode: "ฆ", name: "Kho Rakhang", id: "cons-kho-rakhang" },
    { letter: "ง", unicode: "ง", name: "Ngo Ngu", id: "cons-ngo-ngu" },
    { letter: "จ", unicode: "จ", name: "Cho Chan", id: "cons-cho-chan" },
    { letter: "ฉ", unicode: "ฉ", name: "Cho Ching", id: "cons-cho-ching" },
    { letter: "ช", unicode: "ช", name: "Cho Chang", id: "cons-cho-chang" },
    { letter: "ซ", unicode: "ซ", name: "So So", id: "cons-so-so" },
    { letter: "ฌ", unicode: "ฌ", name: "Cho Choe", id: "cons-cho-choe" },
    { letter: "ญ", unicode: "ญ", name: "Yo Ying", id: "cons-yo-ying" },
    { letter: "ฎ", unicode: "ฎ", name: "Do Chada", id: "cons-do-chada" },
    { letter: "ฏ", unicode: "ฏ", name: "To Patak", id: "cons-to-patak" },
    { letter: "ฐ", unicode: "ฐ", name: "Tho Than", id: "cons-tho-than" },
    { letter: "ฑ", unicode: "ฑ", name: "Tho Nangmontho", id: "cons-tho-nangmontho" },
    { letter: "ฒ", unicode: "ฒ", name: "Tho Phuthao", id: "cons-tho-phuthao" },
    { letter: "ณ", unicode: "ณ", name: "No Nen", id: "cons-no-nen" },
    { letter: "ด", unicode: "ด", name: "Do Dek", id: "cons-do-dek" },
    { letter: "ต", unicode: "ต", name: "To Tao", id: "cons-to-tao" },
    { letter: "ถ", unicode: "ถ", name: "Tho Thung", id: "cons-tho-thung" },
    { letter: "ท", unicode: "ท", name: "Tho Thahan", id: "cons-tho-thahan" },
    { letter: "ธ", unicode: "ธ", name: "Tho Thong", id: "cons-tho-thong" },
    { letter: "น", unicode: "น", name: "No Nu", id: "cons-no-nu" },
    { letter: "บ", unicode: "บ", name: "Bo Baimai", id: "cons-bo-baimai" },
    { letter: "ป", unicode: "ป", name: "Po Pla", id: "cons-po-pla" },
    { letter: "ผ", unicode: "ผ", name: "Pho Phueng", id: "cons-pho-phueng" },
    { letter: "ฝ", unicode: "ฝ", name: "Fo Fa", id: "cons-fo-fa" },
    { letter: "พ", unicode: "พ", name: "Pho Phan", id: "cons-pho-phan" },
    { letter: "ฟ", unicode: "ฟ", name: "Fo Fan", id: "cons-fo-fan" },
    { letter: "ภ", unicode: "ภ", name: "Pho Samphao", id: "cons-pho-samphao" },
    { letter: "ม", unicode: "ม", name: "Mo Ma", id: "cons-mo-ma" },
    { letter: "ย", unicode: "ย", name: "Yo Yak", id: "cons-yo-yak" },
    { letter: "ร", unicode: "ร", name: "Ro Ruea", id: "cons-ro-ruea" },
    { letter: "ล", unicode: "ล", name: "Lo Ling", id: "cons-lo-ling" },
    { letter: "ว", unicode: "ว", name: "Wo Waen", id: "cons-wo-waen" },
    { letter: "ศ", unicode: "ศ", name: "So Sala", id: "cons-so-sala" },
    { letter: "ษ", unicode: "ษ", name: "So Rusi", id: "cons-so-rusi" },
    { letter: "ส", unicode: "ส", name: "So Suea", id: "cons-so-suea" },
    { letter: "ห", unicode: "ห", name: "Ho Hip", id: "cons-ho-hip" },
    { letter: "ฬ", unicode: "ฬ", name: "Lo Chula", id: "cons-lo-chula" },
    { letter: "อ", unicode: "อ", name: "O Ang", id: "cons-o-ang" },
    { letter: "ฮ", unicode: "ฮ", name: "Ho Nokhuk", id: "cons-ho-nokhuk" }
  ];

  const thaiVowels = [
    { letter: "ะ", unicode: "ะ", name: "Sara A", id: "vowel-sara-a" },
    { letter: "า", unicode: "า", name: "Sara Aa", id: "vowel-sara-aa" },
    { letter: "◌ิ", unicode: "ิ", name: "Sara I", id: "vowel-sara-i" },
    { letter: "◌ี", unicode: "ี", name: "Sara Ii", id: "vowel-sara-ii" },
    { letter: "◌ึ", unicode: "ึ", name: "Sara Ue", id: "vowel-sara-ue" },
    { letter: "◌ื", unicode: "ื", name: "Sara Uee", id: "vowel-sara-uee" },
    { letter: "◌ุ", unicode: "ุ", name: "Sara U", id: "vowel-sara-u" },
    { letter: "◌ู", unicode: "ู", name: "Sara Uu", id: "vowel-sara-uu" },
    { letter: "เ", unicode: "เ", name: "Sara E", id: "vowel-sara-e" },
    { letter: "แ", unicode: "แ", name: "Sara Ae", id: "vowel-sara-ae" },
    { letter: "โ", unicode: "โ", name: "Sara O", id: "vowel-sara-o" },
    { letter: "ใ", unicode: "ใ", name: "Sara Ai Mai Muan", id: "vowel-sara-ai-mai-muan" },
    { letter: "ไ", unicode: "ไ", name: "Sara Ai Mai Malai", id: "vowel-sara-ai-mai-malai" },
    { letter: "ๅ", unicode: "ๅ", name: "Lakkhangyao", id: "vowel-lakkhangyao" },
    { letter: "◌ํ", unicode: "ํ", name: "Nikhahit", id: "vowel-nikhahit" },
    { letter: "ฤ", unicode: "ฤ", name: "Rue", id: "vowel-rue" },
    { letter: "ฤๅ", unicode: "ฤๅ", name: "Rue Long", id: "vowel-rue-long" },
    { letter: "ฦ", unicode: "ฦ", name: "Lue", id: "vowel-lue" },
    { letter: "ฦๅ", unicode: "ฦๅ", name: "Lue Long", id: "vowel-lue-long" }
  ];

  const thaiMarks = [
    { letter: "◌่", unicode: "่", name: "Mai Ek", id: "mark-mai-ek" },
    { letter: "◌้", unicode: "้", name: "Mai Tho", id: "mark-mai-tho" },
    { letter: "◌๊", unicode: "๊", name: "Mai Tri", id: "mark-mai-tri" },
    { letter: "◌๋", unicode: "๋", name: "Mai Chattawa", id: "mark-mai-chattawa" },
    { letter: "◌์", unicode: "์", name: "Thanthakhat", id: "mark-thanthakhat" },
    { letter: "◌็", unicode: "็", name: "Mai Taikhu", id: "mark-mai-taikhu" },
    { letter: "◌ั", unicode: "ั", name: "Mai Han-Akat", id: "mark-mai-han-akat" },
    { letter: "◌ฺ", unicode: "ฺ", name: "Phinthu", id: "mark-phinthu" },
    { letter: "ๆ", unicode: "ๆ", name: "Maiyamok", id: "mark-maiyamok" },
    { letter: "ฯ", unicode: "ฯ", name: "Paiyannoi", id: "mark-paiyannoi" },
    { letter: "๎", unicode: "๎", name: "Yamakkan", id: "mark-yamakkan" },
    { letter: "๏", unicode: "๏", name: "Fongman", id: "mark-fongman" }
  ];

  const thaiPunctuation = [
    { letter: "๚", unicode: "๚", name: "Angkhankhu", id: "punct-angkhankhu" },
    { letter: "๛", unicode: "๛", name: "Khomut", id: "punct-khomut" },
    { letter: "๐", unicode: "๐", name: "Digit Zero", id: "punct-digit-zero-sample" },
    { letter: "฿", unicode: "฿", name: "Baht", id: "punct-baht" }
  ];

  const thaiDigits = [
    { letter: "๐", unicode: "๐", name: "Zero", id: "digit-zero" },
    { letter: "๑", unicode: "๑", name: "One", id: "digit-one" },
    { letter: "๒", unicode: "๒", name: "Two", id: "digit-two" },
    { letter: "๓", unicode: "๓", name: "Three", id: "digit-three" },
    { letter: "๔", unicode: "๔", name: "Four", id: "digit-four" },
    { letter: "๕", unicode: "๕", name: "Five", id: "digit-five" },
    { letter: "๖", unicode: "๖", name: "Six", id: "digit-six" },
    { letter: "๗", unicode: "๗", name: "Seven", id: "digit-seven" },
    { letter: "๘", unicode: "๘", name: "Eight", id: "digit-eight" },
    { letter: "๙", unicode: "๙", name: "Nine", id: "digit-nine" }
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

  createKeys("thai-consonants-container", thaiConsonants);
  createKeys("thai-vowels-container", thaiVowels);
  createKeys("thai-marks-container", thaiMarks);
  createKeys("thai-punctuation-container", thaiPunctuation);
  createKeys("thai-digits-container", thaiDigits);
});