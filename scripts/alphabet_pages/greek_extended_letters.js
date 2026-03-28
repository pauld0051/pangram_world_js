document.addEventListener("DOMContentLoaded", function () {
  const greekModern = [
    ["Ά", "Alpha Accent", "modern-alpha-tonos-upper"],
    ["Έ", "Epsilon Accent", "modern-epsilon-tonos-upper"],
    ["Ή", "Eta Accent", "modern-eta-tonos-upper"],
    ["Ί", "Iota Accent", "modern-iota-tonos-upper"],
    ["Ό", "Omicron Accent", "modern-omicron-tonos-upper"],
    ["Ύ", "Upsilon Accent", "modern-upsilon-tonos-upper"],
    ["Ώ", "Omega Accent", "modern-omega-tonos-upper"],
    ["Ϊ", "Iota Diaeresis", "modern-iota-dialytika-upper"],
    ["Ϋ", "Upsilon Diaeresis", "modern-upsilon-dialytika-upper"],
    ["ά", "Alpha Accent", "modern-alpha-tonos-lower"],
    ["έ", "Epsilon Accent", "modern-epsilon-tonos-lower"],
    ["ή", "Eta Accent", "modern-eta-tonos-lower"],
    ["ί", "Iota Accent", "modern-iota-tonos-lower"],
    ["ό", "Omicron Accent", "modern-omicron-tonos-lower"],
    ["ύ", "Upsilon Accent", "modern-upsilon-tonos-lower"],
    ["ώ", "Omega Accent", "modern-omega-tonos-lower"],
    ["ϊ", "Iota Diaeresis", "modern-iota-dialytika-lower"],
    ["ϋ", "Upsilon Diaeresis", "modern-upsilon-dialytika-lower"],
    ["ΐ", "Iota Diaeresis Accent", "modern-iota-dialytika-tonos"],
    ["ΰ", "Upsilon Diaeresis Accent", "modern-upsilon-dialytika-tonos"],
  ];

  const greekUpper = [
    ["Ἀ", "Alpha Sm", "upper-alpha-smooth"],
    ["Ἁ", "Alpha Rgh", "upper-alpha-rough"],
    ["Ἂ", "A Sm Grave", "upper-alpha-smooth-grave"],
    ["Ἃ", "A Rgh Grave", "upper-alpha-rough-grave"],
    ["Ἄ", "A Sm Acute", "upper-alpha-smooth-acute"],
    ["Ἅ", "A Rgh Acute", "upper-alpha-rough-acute"],
    ["Ἆ", "A Sm Circ", "upper-alpha-smooth-circumflex"],
    ["Ἇ", "A Rgh Circ", "upper-alpha-rough-circumflex"],

    ["Ἐ", "Epsilon Sm", "upper-epsilon-smooth"],
    ["Ἑ", "Epsilon Rgh", "upper-epsilon-rough"],
    ["Ἒ", "E Sm Grave", "upper-epsilon-smooth-grave"],
    ["Ἓ", "E Rgh Grave", "upper-epsilon-rough-grave"],
    ["Ἔ", "E Sm Acute", "upper-epsilon-smooth-acute"],
    ["Ἕ", "E Rgh Acute", "upper-epsilon-rough-acute"],

    ["Ἠ", "Eta Sm", "upper-eta-smooth"],
    ["Ἡ", "Eta Rgh", "upper-eta-rough"],
    ["Ἢ", "H Sm Grave", "upper-eta-smooth-grave"],
    ["Ἣ", "H Rgh Grave", "upper-eta-rough-grave"],
    ["Ἤ", "H Sm Acute", "upper-eta-smooth-acute"],
    ["Ἥ", "H Rgh Acute", "upper-eta-rough-acute"],
    ["Ἦ", "H Sm Circ", "upper-eta-smooth-circumflex"],
    ["Ἧ", "H Rgh Circ", "upper-eta-rough-circumflex"],

    ["Ἰ", "Iota Sm", "upper-iota-smooth"],
    ["Ἱ", "Iota Rgh", "upper-iota-rough"],
    ["Ἲ", "I Sm Grave", "upper-iota-smooth-grave"],
    ["Ἳ", "I Rgh Grave", "upper-iota-rough-grave"],
    ["Ἴ", "I Sm Acute", "upper-iota-smooth-acute"],
    ["Ἵ", "I Rgh Acute", "upper-iota-rough-acute"],
    ["Ἶ", "I Sm Circ", "upper-iota-smooth-circumflex"],
    ["Ἷ", "I Rgh Circ", "upper-iota-rough-circumflex"],

    ["Ὀ", "Omicron Sm", "upper-omicron-smooth"],
    ["Ὁ", "Omicron Rgh", "upper-omicron-rough"],
    ["Ὂ", "O Sm Grave", "upper-omicron-smooth-grave"],
    ["Ὃ", "O Rgh Grave", "upper-omicron-rough-grave"],
    ["Ὄ", "O Sm Acute", "upper-omicron-smooth-acute"],
    ["Ὅ", "O Rgh Acute", "upper-omicron-rough-acute"],

    ["Ὑ", "Upsilon Rgh", "upper-upsilon-rough"],
    ["Ὓ", "Y Rgh Grave", "upper-upsilon-rough-grave"],
    ["Ὕ", "Y Rgh Acute", "upper-upsilon-rough-acute"],
    ["Ὗ", "Y Rgh Circ", "upper-upsilon-rough-circumflex"],

    ["Ὠ", "Omega Sm", "upper-omega-smooth"],
    ["Ὡ", "Omega Rgh", "upper-omega-rough"],
    ["Ὢ", "W Sm Grave", "upper-omega-smooth-grave"],
    ["Ὣ", "W Rgh Grave", "upper-omega-rough-grave"],
    ["Ὤ", "W Sm Acute", "upper-omega-smooth-acute"],
    ["Ὥ", "W Rgh Acute", "upper-omega-rough-acute"],
    ["Ὦ", "W Sm Circ", "upper-omega-smooth-circumflex"],
    ["Ὧ", "W Rgh Circ", "upper-omega-rough-circumflex"],
  ];

  const greekLower1 = [
    ["ἀ", "Alpha Sm", "lower-alpha-smooth"],
    ["ἁ", "Alpha Rgh", "lower-alpha-rough"],
    ["ἂ", "A Sm Grave", "lower-alpha-smooth-grave"],
    ["ἃ", "A Rgh Grave", "lower-alpha-rough-grave"],
    ["ἄ", "A Sm Acute", "lower-alpha-smooth-acute"],
    ["ἅ", "A Rgh Acute", "lower-alpha-rough-acute"],
    ["ἆ", "A Sm Circ", "lower-alpha-smooth-circumflex"],
    ["ἇ", "A Rgh Circ", "lower-alpha-rough-circumflex"],

    ["ἐ", "Epsilon Sm", "lower-epsilon-smooth"],
    ["ἑ", "Epsilon Rgh", "lower-epsilon-rough"],
    ["ἒ", "E Sm Grave", "lower-epsilon-smooth-grave"],
    ["ἓ", "E Rgh Grave", "lower-epsilon-rough-grave"],
    ["ἔ", "E Sm Acute", "lower-epsilon-smooth-acute"],
    ["ἕ", "E Rgh Acute", "lower-epsilon-rough-acute"],

    ["ἠ", "Eta Sm", "lower-eta-smooth"],
    ["ἡ", "Eta Rgh", "lower-eta-rough"],
    ["ἢ", "H Sm Grave", "lower-eta-smooth-grave"],
    ["ἣ", "H Rgh Grave", "lower-eta-rough-grave"],
    ["ἤ", "H Sm Acute", "lower-eta-smooth-acute"],
    ["ἥ", "H Rgh Acute", "lower-eta-rough-acute"],
    ["ἦ", "H Sm Circ", "lower-eta-smooth-circumflex"],
    ["ἧ", "H Rgh Circ", "lower-eta-rough-circumflex"],
    ];
    
  const greekLower2 = [
    ["ἰ", "Iota Sm", "lower-iota-smooth"],
    ["ἱ", "Iota Rgh", "lower-iota-rough"],
    ["ἲ", "I Sm Grave", "lower-iota-smooth-grave"],
    ["ἳ", "I Rgh Grave", "lower-iota-rough-grave"],
    ["ἴ", "I Sm Acute", "lower-iota-smooth-acute"],
    ["ἵ", "I Rgh Acute", "lower-iota-rough-acute"],
    ["ἶ", "I Sm Circ", "lower-iota-smooth-circumflex"],
    ["ἷ", "I Rgh Circ", "lower-iota-rough-circumflex"],

    ["ὀ", "Omicron Sm", "lower-omicron-smooth"],
    ["ὁ", "Omicron Rgh", "lower-omicron-rough"],
    ["ὂ", "O Sm Grave", "lower-omicron-smooth-grave"],
    ["ὃ", "O Rgh Grave", "lower-omicron-rough-grave"],
    ["ὄ", "O Sm Acute", "lower-omicron-smooth-acute"],
    ["ὅ", "O Rgh Acute", "lower-omicron-rough-acute"],

    ["ὐ", "Upsilon Sm", "lower-upsilon-smooth"],
    ["ὑ", "Upsilon Rgh", "lower-upsilon-rough"],
    ["ὒ", "Y Sm Grave", "lower-upsilon-smooth-grave"],
    ["ὓ", "Y Rgh Grave", "lower-upsilon-rough-grave"],
    ["ὔ", "Y Sm Acute", "lower-upsilon-smooth-acute"],
    ["ὕ", "Y Rgh Acute", "lower-upsilon-rough-acute"],
    ["ὖ", "Y Sm Circ", "lower-upsilon-smooth-circumflex"],
    ["ὗ", "Y Rgh Circ", "lower-upsilon-rough-circumflex"],

    ["ὠ", "Omega Sm", "lower-omega-smooth"],
    ["ὡ", "Omega Rgh", "lower-omega-rough"],
    ["ὢ", "W Sm Grave", "lower-omega-smooth-grave"],
    ["ὣ", "W Rgh Grave", "lower-omega-rough-grave"],
    ["ὤ", "W Sm Acute", "lower-omega-smooth-acute"],
    ["ὥ", "W Rgh Acute", "lower-omega-rough-acute"],
    ["ὦ", "W Sm Circ", "lower-omega-smooth-circumflex"],
    ["ὧ", "W Rgh Circ", "lower-omega-rough-circumflex"],
  ];

  const greekSubscript = [
    ["ᾳ", "A Iota Sub", "sub-alpha-iota"],
    ["ᾴ", "A Acute Sub", "sub-alpha-acute"],
    ["ᾲ", "A Grave Sub", "sub-alpha-grave"],
    ["ᾷ", "A Circ Sub", "sub-alpha-circumflex"],
    ["ᾀ", "A Sm Sub", "sub-alpha-smooth"],
    ["ᾁ", "A Rgh Sub", "sub-alpha-rough"],
    ["ᾂ", "A Sm Gr Sub", "sub-alpha-smooth-grave"],
    ["ᾃ", "A Rgh Gr Sub", "sub-alpha-rough-grave"],
    ["ᾄ", "A Sm Ac Sub", "sub-alpha-smooth-acute"],
    ["ᾅ", "A Rgh Ac Sub", "sub-alpha-rough-acute"],
    ["ᾆ", "A Sm Ci Sub", "sub-alpha-smooth-circumflex"],
    ["ᾇ", "A Rgh Ci Sub", "sub-alpha-rough-circumflex"],

    ["ῃ", "H Iota Sub", "sub-eta-iota"],
    ["ῄ", "H Acute Sub", "sub-eta-acute"],
    ["ῂ", "H Grave Sub", "sub-eta-grave"],
    ["ῇ", "H Circ Sub", "sub-eta-circumflex"],
    ["ᾐ", "H Sm Sub", "sub-eta-smooth"],
    ["ᾑ", "H Rgh Sub", "sub-eta-rough"],
    ["ᾒ", "H Sm Gr Sub", "sub-eta-smooth-grave"],
    ["ᾓ", "H Rgh Gr Sub", "sub-eta-rough-grave"],
    ["ᾔ", "H Sm Ac Sub", "sub-eta-smooth-acute"],
    ["ᾕ", "H Rgh Ac Sub", "sub-eta-rough-acute"],
    ["ᾖ", "H Sm Ci Sub", "sub-eta-smooth-circumflex"],
    ["ᾗ", "H Rgh Ci Sub", "sub-eta-rough-circumflex"],

    ["ῳ", "W Iota Sub", "sub-omega-iota"],
    ["ῴ", "W Acute Sub", "sub-omega-acute"],
    ["ῲ", "W Grave Sub", "sub-omega-grave"],
    ["ῷ", "W Circ Sub", "sub-omega-circumflex"],
    ["ᾠ", "W Sm Sub", "sub-omega-smooth"],
    ["ᾡ", "W Rgh Sub", "sub-omega-rough"],
    ["ᾢ", "W Sm Gr Sub", "sub-omega-smooth-grave"],
    ["ᾣ", "W Rgh Gr Sub", "sub-omega-rough-grave"],
    ["ᾤ", "W Sm Ac Sub", "sub-omega-smooth-acute"],
    ["ᾥ", "W Rgh Ac Sub", "sub-omega-rough-acute"],
    ["ᾦ", "W Sm Ci Sub", "sub-omega-smooth-circumflex"],
    ["ᾧ", "W Rgh Ci Sub", "sub-omega-rough-circumflex"],

    ["ᾈ", "A Sm Ads", "adscript-alpha-smooth"],
    ["ᾉ", "A Rgh Ads", "adscript-alpha-rough"],
    ["ᾘ", "H Sm Ads", "adscript-eta-smooth"],
    ["ᾙ", "H Rgh Ads", "adscript-eta-rough"],
    ["ᾨ", "W Sm Ads", "adscript-omega-smooth"],
    ["ᾩ", "W Rgh Ads", "adscript-omega-rough"],
  ];

  const greekSymbols = [
    ["ῤ", "Rho Smooth", "symbol-rho-smooth"],
    ["ῥ", "Rho Rough", "symbol-rho-rough"],
    ["Ῥ", "Rho Rough Upper", "symbol-rho-rough-upper"],
    ["ς", "Final Sigma", "symbol-final-sigma"],
    ["ͺ", "Ypogegrammeni", "symbol-ypogegrammeni"],
    ["᾽", "Koronis", "symbol-koronis"],
    ["᾿", "Psili", "symbol-psili"],
    ["῾", "Dasia", "symbol-dasia"],
    ["῀", "Perispomeni", "symbol-perispomeni"],
    ["῍", "Daseia Grave", "symbol-daseia-grave"],
    ["῎", "Psili Acute", "symbol-psili-acute"],
    ["῏", "Dasia Acute", "symbol-dasia-acute"],
    ["·", "Ano Teleia", "symbol-ano-teleia"],
    [";", "Greek Question", "symbol-question"],
  ];

  function createKeys(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach(([letter, name, id]) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

      if (id) {
        key.id = id;
      }

      const letterSpan = document.createElement("span");
      letterSpan.className = "letter";
      letterSpan.innerText = letter;

      const nameSpan = document.createElement("span");
      nameSpan.className = "name";
      nameSpan.innerText = name;

      key.appendChild(letterSpan);
      key.appendChild(nameSpan);

      key.dataset.unicode = letter;
      key.onclick = function (event) {
        copyToClipboard(letter);
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

  createKeys("greek-modern-container", greekModern);
  createKeys("greek-upper-container", greekUpper);
  createKeys("greek-lower-1-container", greekLower1);
  createKeys("greek-lower-2-container", greekLower2);
  createKeys("greek-subscript-container", greekSubscript);
  createKeys("greek-symbols-container", greekSymbols);
});
