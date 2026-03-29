document.addEventListener("DOMContentLoaded", function () {
  const sinhalaVowels = [
    { letter: "අ", unicode: "අ", name: "A", id: "vowel-a" },
    { letter: "ආ", unicode: "ආ", name: "Aa", id: "vowel-aa" },
    { letter: "ඇ", unicode: "ඇ", name: "Ae", id: "vowel-ae" },
    { letter: "ඈ", unicode: "ඈ", name: "Aae", id: "vowel-aae" },
    { letter: "ඉ", unicode: "ඉ", name: "I", id: "vowel-i" },
    { letter: "ඊ", unicode: "ඊ", name: "Ii", id: "vowel-ii" },
    { letter: "උ", unicode: "උ", name: "U", id: "vowel-u" },
    { letter: "ඌ", unicode: "ඌ", name: "Uu", id: "vowel-uu" },
    { letter: "ඍ", unicode: "ඍ", name: "R", id: "vowel-r" },
    { letter: "ඎ", unicode: "ඎ", name: "Rr", id: "vowel-rr" },
    { letter: "ඏ", unicode: "ඏ", name: "L", id: "vowel-l" },
    { letter: "ඐ", unicode: "ඐ", name: "Ll", id: "vowel-ll" },
    { letter: "එ", unicode: "එ", name: "E", id: "vowel-e" },
    { letter: "ඒ", unicode: "ඒ", name: "Ee", id: "vowel-ee" },
    { letter: "ඓ", unicode: "ඓ", name: "Ai", id: "vowel-ai" },
    { letter: "ඔ", unicode: "ඔ", name: "O", id: "vowel-o" },
    { letter: "ඕ", unicode: "ඕ", name: "Oo", id: "vowel-oo" },
    { letter: "ඖ", unicode: "ඖ", name: "Au", id: "vowel-au" },
  ];

  const sinhalaConsonants = [
    { letter: "ක", unicode: "ක", name: "Ka", id: "cons-ka" },
    { letter: "ඛ", unicode: "ඛ", name: "Kha", id: "cons-kha" },
    { letter: "ග", unicode: "ග", name: "Ga", id: "cons-ga" },
    { letter: "ඝ", unicode: "ඝ", name: "Gha", id: "cons-gha" },
    { letter: "ඞ", unicode: "ඞ", name: "Nga", id: "cons-nga" },

    { letter: "ච", unicode: "ච", name: "Ca", id: "cons-ca" },
    { letter: "ඡ", unicode: "ඡ", name: "Cha", id: "cons-cha" },
    { letter: "ජ", unicode: "ජ", name: "Ja", id: "cons-ja" },
    { letter: "ඣ", unicode: "ඣ", name: "Jha", id: "cons-jha" },
    { letter: "ඤ", unicode: "ඤ", name: "Nya", id: "cons-nya" },

    { letter: "ට", unicode: "ට", name: "Tta", id: "cons-tta" },
    { letter: "ඨ", unicode: "ඨ", name: "Ttha", id: "cons-ttha" },
    { letter: "ඩ", unicode: "ඩ", name: "Dda", id: "cons-dda" },
    { letter: "ඪ", unicode: "ඪ", name: "Ddha", id: "cons-ddha" },
    { letter: "ණ", unicode: "ණ", name: "Nna", id: "cons-nna" },

    { letter: "ත", unicode: "ත", name: "Ta", id: "cons-ta" },
    { letter: "ථ", unicode: "ථ", name: "Tha", id: "cons-tha" },
    { letter: "ද", unicode: "ද", name: "Da", id: "cons-da" },
    { letter: "ධ", unicode: "ධ", name: "Dha", id: "cons-dha" },
    { letter: "න", unicode: "න", name: "Na", id: "cons-na" },

    { letter: "ප", unicode: "ප", name: "Pa", id: "cons-pa" },
    { letter: "ඵ", unicode: "ඵ", name: "Pha", id: "cons-pha" },
    { letter: "බ", unicode: "බ", name: "Ba", id: "cons-ba" },
    { letter: "භ", unicode: "භ", name: "Bha", id: "cons-bha" },
    { letter: "ම", unicode: "ම", name: "Ma", id: "cons-ma" },

    { letter: "ය", unicode: "ය", name: "Ya", id: "cons-ya" },
    { letter: "ර", unicode: "ර", name: "Ra", id: "cons-ra" },
    { letter: "ල", unicode: "ල", name: "La", id: "cons-la" },
    { letter: "ව", unicode: "ව", name: "Va", id: "cons-va" },

    { letter: "ශ", unicode: "ශ", name: "Sha", id: "cons-sha" },
    { letter: "ෂ", unicode: "ෂ", name: "Ssa", id: "cons-ssa" },
    { letter: "ස", unicode: "ස", name: "Sa", id: "cons-sa" },
    { letter: "හ", unicode: "හ", name: "Ha", id: "cons-ha" },
    { letter: "ළ", unicode: "ළ", name: "Lla", id: "cons-lla" },
    { letter: "ෆ", unicode: "ෆ", name: "Fa", id: "cons-fa" },
  ];

  const sinhalaExtras = [
    { letter: "ඟ", unicode: "ඟ", name: "Nga Ga", id: "extra-nga-ga" },
    { letter: "ඦ", unicode: "ඦ", name: "Nya Ja", id: "extra-nya-ja" },
    { letter: "ඳ", unicode: "ඳ", name: "Nda", id: "extra-nda" },
    { letter: "ඬ", unicode: "ඬ", name: "Ndda", id: "extra-ndda" },
    { letter: "ඹ", unicode: "ඹ", name: "Mba", id: "extra-mba" },
    { letter: "ඥ", unicode: "ඥ", name: "Gnya", id: "extra-gnya" },
  ];

  const sinhalaSigns = [
    { letter: "◌ා", unicode: "ා", name: "Aa Sign", id: "sign-aa" },
    { letter: "◌ැ", unicode: "ැ", name: "Ae Sign", id: "sign-ae" },
    { letter: "◌ෑ", unicode: "ෑ", name: "Aae Sign", id: "sign-aae" },
    { letter: "◌ි", unicode: "ි", name: "I Sign", id: "sign-i" },
    { letter: "◌ී", unicode: "ී", name: "Ii Sign", id: "sign-ii" },
    { letter: "◌ු", unicode: "ු", name: "U Sign", id: "sign-u" },
    { letter: "◌ූ", unicode: "ූ", name: "Uu Sign", id: "sign-uu" },
    { letter: "◌ෘ", unicode: "ෘ", name: "R Sign", id: "sign-r" },
    { letter: "◌ෲ", unicode: "ෲ", name: "Rr Sign", id: "sign-rr" },
    { letter: "◌ෟ", unicode: "ෟ", name: "L Sign", id: "sign-l" },
    { letter: "◌ෳ", unicode: "ෳ", name: "Ll Sign", id: "sign-ll" },
    { letter: "ෙ", unicode: "ෙ", name: "E Sign", id: "sign-e" },
    { letter: "ේ", unicode: "ේ", name: "Ee Sign", id: "sign-ee" },
    { letter: "ෛ", unicode: "ෛ", name: "Ai Sign", id: "sign-ai" },
    { letter: "ො", unicode: "ො", name: "O Sign", id: "sign-o" },
    { letter: "ෝ", unicode: "ෝ", name: "Oo Sign", id: "sign-oo" },
    { letter: "ෞ", unicode: "ෞ", name: "Au Sign", id: "sign-au" },
    { letter: "◌ං", unicode: "ං", name: "Anusvara", id: "sign-anusvara" },
    { letter: "◌ඃ", unicode: "ඃ", name: "Visarga", id: "sign-visarga" },
    { letter: "◌්", unicode: "්", name: "Virama", id: "sign-virama" },
  ];

  const sinhalaPunctuation = [
    { letter: "෴", unicode: "෴", name: "Kunddaliya", id: "punct-kunddaliya" },
    {
      letter: "ඞ්",
      unicode: "ඞ්",
      name: "Nga + Virama",
      id: "punct-sample-virama",
    },
  ];

  const sinhalaDigits = [
    { letter: "෦", unicode: "෦", name: "Zero", id: "digit-zero" },
    { letter: "෧", unicode: "෧", name: "One", id: "digit-one" },
    { letter: "෨", unicode: "෨", name: "Two", id: "digit-two" },
    { letter: "෩", unicode: "෩", name: "Three", id: "digit-three" },
    { letter: "෪", unicode: "෪", name: "Four", id: "digit-four" },
    { letter: "෫", unicode: "෫", name: "Five", id: "digit-five" },
    { letter: "෬", unicode: "෬", name: "Six", id: "digit-six" },
    { letter: "෭", unicode: "෭", name: "Seven", id: "digit-seven" },
    { letter: "෮", unicode: "෮", name: "Eight", id: "digit-eight" },
    { letter: "෯", unicode: "෯", name: "Nine", id: "digit-nine" },
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

  createKeys("sinhala-vowels-container", sinhalaVowels);
  createKeys("sinhala-consonants-container", sinhalaConsonants);
  createKeys("sinhala-extras-container", sinhalaExtras);
  createKeys("sinhala-signs-container", sinhalaSigns);
  createKeys("sinhala-punctuation-container", sinhalaPunctuation);
  createKeys("sinhala-digits-container", sinhalaDigits);
});
