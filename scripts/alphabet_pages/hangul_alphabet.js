document.addEventListener("DOMContentLoaded", function () {
  const hangulConsonants = [
    { letter: "ㄱ", unicode: "ㄱ", name: "Giyeok", id: "cons-giyeok" },
    { letter: "ㄴ", unicode: "ㄴ", name: "Nieun", id: "cons-nieun" },
    { letter: "ㄷ", unicode: "ㄷ", name: "Digeut", id: "cons-digeut" },
    { letter: "ㄹ", unicode: "ㄹ", name: "Rieul", id: "cons-rieul" },
    { letter: "ㅁ", unicode: "ㅁ", name: "Mieum", id: "cons-mieum" },
    { letter: "ㅂ", unicode: "ㅂ", name: "Bieup", id: "cons-bieup" },
    { letter: "ㅅ", unicode: "ㅅ", name: "Siot", id: "cons-siot" },
    { letter: "ㅇ", unicode: "ㅇ", name: "Ieung", id: "cons-ieung" },
    { letter: "ㅈ", unicode: "ㅈ", name: "Jieut", id: "cons-jieut" },
    { letter: "ㅊ", unicode: "ㅊ", name: "Chieut", id: "cons-chieut" },
    { letter: "ㅋ", unicode: "ㅋ", name: "Kieuk", id: "cons-kieuk" },
    { letter: "ㅌ", unicode: "ㅌ", name: "Tieut", id: "cons-tieut" },
    { letter: "ㅍ", unicode: "ㅍ", name: "Pieup", id: "cons-pieup" },
    { letter: "ㅎ", unicode: "ㅎ", name: "Hieuh", id: "cons-hieuh" },
  ];

  const hangulVowels = [
    { letter: "ㅏ", unicode: "ㅏ", name: "A", id: "vowel-a" },
    { letter: "ㅐ", unicode: "ㅐ", name: "Ae", id: "vowel-ae" },
    { letter: "ㅑ", unicode: "ㅑ", name: "Ya", id: "vowel-ya" },
    { letter: "ㅒ", unicode: "ㅒ", name: "Yae", id: "vowel-yae" },
    { letter: "ㅓ", unicode: "ㅓ", name: "Eo", id: "vowel-eo" },
    { letter: "ㅔ", unicode: "ㅔ", name: "E", id: "vowel-e" },
    { letter: "ㅕ", unicode: "ㅕ", name: "Yeo", id: "vowel-yeo" },
    { letter: "ㅖ", unicode: "ㅖ", name: "Ye", id: "vowel-ye" },
    { letter: "ㅗ", unicode: "ㅗ", name: "O", id: "vowel-o" },
    { letter: "ㅛ", unicode: "ㅛ", name: "Yo", id: "vowel-yo" },
    { letter: "ㅜ", unicode: "ㅜ", name: "U", id: "vowel-u" },
    { letter: "ㅠ", unicode: "ㅠ", name: "Yu", id: "vowel-yu" },
    { letter: "ㅡ", unicode: "ㅡ", name: "Eu", id: "vowel-eu" },
    { letter: "ㅣ", unicode: "ㅣ", name: "I", id: "vowel-i" },
  ];

  const hangulCombined = [
    {
      letter: "ㄲ",
      unicode: "ㄲ",
      name: "Ssanggiyeok",
      id: "comb-ssanggiyeok",
    },
    {
      letter: "ㄸ",
      unicode: "ㄸ",
      name: "Ssangdigeut",
      id: "comb-ssangdigeut",
    },
    { letter: "ㅃ", unicode: "ㅃ", name: "Ssangbieup", id: "comb-ssangbieup" },
    { letter: "ㅆ", unicode: "ㅆ", name: "Ssangsiot", id: "comb-ssangsiot" },
    { letter: "ㅉ", unicode: "ㅉ", name: "Ssangjieut", id: "comb-ssangjieut" },

    { letter: "ㅘ", unicode: "ㅘ", name: "Wa", id: "comb-wa" },
    { letter: "ㅙ", unicode: "ㅙ", name: "Wae", id: "comb-wae" },
    { letter: "ㅚ", unicode: "ㅚ", name: "Oe", id: "comb-oe" },
    { letter: "ㅝ", unicode: "ㅝ", name: "Wo", id: "comb-wo" },
    { letter: "ㅞ", unicode: "ㅞ", name: "We", id: "comb-we" },
    { letter: "ㅟ", unicode: "ㅟ", name: "Wi", id: "comb-wi" },
    { letter: "ㅢ", unicode: "ㅢ", name: "Ui", id: "comb-ui" },
  ];

  const hangulBatchim = [
    { letter: "ㄳ", unicode: "ㄳ", name: "Giyeok-Siot", id: "batchim-gs" },
    { letter: "ㄵ", unicode: "ㄵ", name: "Nieun-Jieut", id: "batchim-nj" },
    { letter: "ㄶ", unicode: "ㄶ", name: "Nieun-Hieuh", id: "batchim-nh" },
    { letter: "ㄺ", unicode: "ㄺ", name: "Rieul-Giyeok", id: "batchim-rg" },
    { letter: "ㄻ", unicode: "ㄻ", name: "Rieul-Mieum", id: "batchim-rm" },
    { letter: "ㄼ", unicode: "ㄼ", name: "Rieul-Bieup", id: "batchim-rb" },
    { letter: "ㄽ", unicode: "ㄽ", name: "Rieul-Siot", id: "batchim-rs" },
    { letter: "ㄾ", unicode: "ㄾ", name: "Rieul-Tieut", id: "batchim-rt" },
    { letter: "ㄿ", unicode: "ㄿ", name: "Rieul-Pieup", id: "batchim-rp" },
    { letter: "ㅀ", unicode: "ㅀ", name: "Rieul-Hieuh", id: "batchim-rh" },
    { letter: "ㅄ", unicode: "ㅄ", name: "Bieup-Siot", id: "batchim-bs" },
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

  createKeys("hangul-consonants-container", hangulConsonants);
  createKeys("hangul-vowels-container", hangulVowels);
  createKeys("hangul-combined-container", hangulCombined);
  createKeys("hangul-batchim-container", hangulBatchim);
});
