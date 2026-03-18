document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const italicOutput = document.getElementById("italicOutput");
  const boldItalicOutput = document.getElementById("boldItalicOutput");
  const sansItalicOutput = document.getElementById("sansItalicOutput");
  const sansBoldItalicOutput = document.getElementById("sansBoldItalicOutput");

  const italicCopyNote = document.getElementById("italicCopyNote");
  const boldItalicCopyNote = document.getElementById("boldItalicCopyNote");
  const sansItalicCopyNote = document.getElementById("sansItalicCopyNote");
  const sansBoldItalicCopyNote = document.getElementById(
    "sansBoldItalicCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const ITALIC_UPPER_START = 0x1d434; // 𝐴
  const ITALIC_LOWER_START = 0x1d44e; // 𝑎

  const BOLD_ITALIC_UPPER_START = 0x1d468; // 𝑨
  const BOLD_ITALIC_LOWER_START = 0x1d482; // 𝒂

  const SANS_ITALIC_UPPER_START = 0x1d608; // 𝘈
  const SANS_ITALIC_LOWER_START = 0x1d622; // 𝘢

  const SANS_BOLD_ITALIC_UPPER_START = 0x1d63c; // 𝘼
  const SANS_BOLD_ITALIC_LOWER_START = 0x1d656; // 𝙖

  const GREEK_UPPER = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
  const GREEK_LOWER = "αβγδεζηθικλμνξοπρστυφχψω";

  const GREEK_SPECIAL_PLAIN = {
    ς: "final_sigma",
    ϑ: "theta_symbol",
    ϕ: "phi_symbol",
    ϖ: "pi_symbol",
    ϰ: "kappa_symbol",
    ϱ: "rho_symbol",
    ϵ: "epsilon_symbol",
    Ϝ: "digamma_upper",
    ϝ: "digamma_lower",
  };

  const GREEK_ITALIC_UPPER = [
    "𝛢",
    "𝛣",
    "𝛤",
    "𝛥",
    "𝛦",
    "𝛧",
    "𝛨",
    "𝛩",
    "𝛪",
    "𝛫",
    "𝛬",
    "𝛭",
    "𝛮",
    "𝛯",
    "𝛰",
    "𝛱",
    "𝛲",
    "𝛴",
    "𝛵",
    "𝛶",
    "𝛷",
    "𝛸",
    "𝛹",
    "𝛺",
  ];

  const GREEK_ITALIC_LOWER = [
    "𝛼",
    "𝛽",
    "𝛾",
    "𝛿",
    "𝜀",
    "𝜁",
    "𝜂",
    "𝜃",
    "𝜄",
    "𝜅",
    "𝜆",
    "𝜇",
    "𝜈",
    "𝜉",
    "𝜊",
    "𝜋",
    "𝜌",
    "𝜎",
    "𝜏",
    "𝜐",
    "𝜑",
    "𝜒",
    "𝜓",
    "𝜔",
  ];

  const GREEK_ITALIC_SPECIAL = {
    final_sigma: "𝜍",
    theta_symbol: "𝜗",
    phi_symbol: "𝜙",
    pi_symbol: "𝜛",
    kappa_symbol: "𝜘",
    rho_symbol: "𝜚",
    epsilon_symbol: "𝜖",
    digamma_upper: "Ϝ",
    digamma_lower: "ϝ",
  };

  const GREEK_BOLD_ITALIC_UPPER = [
    "𝜜",
    "𝜝",
    "𝜞",
    "𝜟",
    "𝜠",
    "𝜡",
    "𝜢",
    "𝜣",
    "𝜤",
    "𝜥",
    "𝜦",
    "𝜧",
    "𝜨",
    "𝜩",
    "𝜪",
    "𝜫",
    "𝜬",
    "𝜮",
    "𝜯",
    "𝜰",
    "𝜱",
    "𝜲",
    "𝜳",
    "𝜴",
  ];

  const GREEK_BOLD_ITALIC_LOWER = [
    "𝜶",
    "𝜷",
    "𝜸",
    "𝜹",
    "𝜺",
    "𝜻",
    "𝜼",
    "𝜽",
    "𝜾",
    "𝜿",
    "𝝀",
    "𝝁",
    "𝝂",
    "𝝃",
    "𝝄",
    "𝝅",
    "𝝆",
    "𝝈",
    "𝝉",
    "𝝊",
    "𝝋",
    "𝝌",
    "𝝍",
    "𝝎",
  ];

  const GREEK_BOLD_ITALIC_SPECIAL = {
    final_sigma: "𝝇",
    theta_symbol: "𝝑",
    phi_symbol: "𝝓",
    pi_symbol: "𝝕",
    kappa_symbol: "𝝒",
    rho_symbol: "𝝔",
    epsilon_symbol: "𝝐",
    digamma_upper: "𝟊",
    digamma_lower: "𝟋",
  };

  const GREEK_SANS_BOLD_ITALIC_UPPER = [
    "𝞐",
    "𝞑",
    "𝞒",
    "𝞓",
    "𝞔",
    "𝞕",
    "𝞖",
    "𝞗",
    "𝞘",
    "𝞙",
    "𝞚",
    "𝞛",
    "𝞜",
    "𝞝",
    "𝞞",
    "𝞟",
    "𝞠",
    "𝞢",
    "𝞣",
    "𝞤",
    "𝞥",
    "𝞦",
    "𝞧",
    "𝞨",
  ];

  const GREEK_SANS_BOLD_ITALIC_LOWER = [
    "𝞪",
    "𝞫",
    "𝞬",
    "𝞭",
    "𝞮",
    "𝞯",
    "𝞰",
    "𝞱",
    "𝞲",
    "𝞳",
    "𝞴",
    "𝞵",
    "𝞶",
    "𝞷",
    "𝞸",
    "𝞹",
    "𝞺",
    "𝞼",
    "𝞽",
    "𝞾",
    "𝞿",
    "𝟀",
    "𝟁",
    "𝟂",
  ];

  const GREEK_SANS_BOLD_ITALIC_SPECIAL = {
    final_sigma: "𝞻",
    theta_symbol: "𝟅",
    phi_symbol: "𝟇",
    pi_symbol: "𝟉",
    kappa_symbol: "𝟆",
    rho_symbol: "𝟈",
    epsilon_symbol: "𝟄",
    digamma_upper: "𝟊",
    digamma_lower: "𝟋",
  };

  function mapLatin(char, style) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;

    if (style === "italic") {
      if (isUpper) {
        return String.fromCodePoint(ITALIC_UPPER_START + (code - 65));
      }
      if (isLower) {
        if (char === "h") return "ℎ";
        return String.fromCodePoint(ITALIC_LOWER_START + (code - 97));
      }
    }

    if (style === "boldItalic") {
      if (isUpper) {
        return String.fromCodePoint(BOLD_ITALIC_UPPER_START + (code - 65));
      }
      if (isLower) {
        return String.fromCodePoint(BOLD_ITALIC_LOWER_START + (code - 97));
      }
    }

    if (style === "sansItalic") {
      if (isUpper) {
        return String.fromCodePoint(SANS_ITALIC_UPPER_START + (code - 65));
      }
      if (isLower) {
        return String.fromCodePoint(SANS_ITALIC_LOWER_START + (code - 97));
      }
    }

    if (style === "sansBoldItalic") {
      if (isUpper) {
        return String.fromCodePoint(SANS_BOLD_ITALIC_UPPER_START + (code - 65));
      }
      if (isLower) {
        return String.fromCodePoint(SANS_BOLD_ITALIC_LOWER_START + (code - 97));
      }
    }

    return null;
  }

  function mapGreek(char, style) {
    const upperIndex = GREEK_UPPER.indexOf(char);
    const lowerIndex = GREEK_LOWER.indexOf(char);

    if (style === "italic") {
      if (upperIndex !== -1) return GREEK_ITALIC_UPPER[upperIndex];
      if (lowerIndex !== -1) return GREEK_ITALIC_LOWER[lowerIndex];
      if (GREEK_SPECIAL_PLAIN[char]) {
        return GREEK_ITALIC_SPECIAL[GREEK_SPECIAL_PLAIN[char]] || char;
      }
    }

    if (style === "boldItalic") {
      if (upperIndex !== -1) return GREEK_BOLD_ITALIC_UPPER[upperIndex];
      if (lowerIndex !== -1) return GREEK_BOLD_ITALIC_LOWER[lowerIndex];
      if (GREEK_SPECIAL_PLAIN[char]) {
        return GREEK_BOLD_ITALIC_SPECIAL[GREEK_SPECIAL_PLAIN[char]] || char;
      }
    }

    if (style === "sansBoldItalic") {
      if (upperIndex !== -1) {
        return GREEK_SANS_BOLD_ITALIC_UPPER[upperIndex];
      }
      if (lowerIndex !== -1) {
        return GREEK_SANS_BOLD_ITALIC_LOWER[lowerIndex];
      }
      if (GREEK_SPECIAL_PLAIN[char]) {
        return (
          GREEK_SANS_BOLD_ITALIC_SPECIAL[GREEK_SPECIAL_PLAIN[char]] || char
        );
      }
    }

    return null;
  }

  function mapCharacter(char, style) {
    const latinMapped = mapLatin(char, style);
    if (latinMapped) return latinMapped;

    const greekMapped = mapGreek(char, style);
    if (greekMapped) return greekMapped;

    return char;
  }

  function convertText(text, style) {
    return Array.from(text)
      .map((char) => mapCharacter(char, style))
      .join("");
  }

  function updateOutputs() {
    const input = normaliseStyledUnicodeToPlain(inputText.value || "");

    italicOutput.textContent = convertText(input, "italic");
    boldItalicOutput.textContent = convertText(input, "boldItalic");
    sansItalicOutput.textContent = convertText(input, "sansItalic");
    sansBoldItalicOutput.textContent = convertText(input, "sansBoldItalic");

    clearCopyNotes();
  }

  function clearCopyNotes() {
    italicCopyNote.textContent = "";
    boldItalicCopyNote.textContent = "";
    sansItalicCopyNote.textContent = "";
    sansBoldItalicCopyNote.textContent = "";

    italicOutput.classList.remove("copied");
    boldItalicOutput.classList.remove("copied");
    sansItalicOutput.classList.remove("copied");
    sansBoldItalicOutput.classList.remove("copied");
  }

  async function copyText(text, outputElement, noteElement) {
    if (!text.trim()) {
      noteElement.textContent = "Nothing to copy yet.";
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      noteElement.textContent = "Copied to clipboard.";
      outputElement.classList.add("copied");

      setTimeout(() => {
        noteElement.textContent = "";
        outputElement.classList.remove("copied");
      }, 1500);
    } catch (error) {
      noteElement.textContent = "Copy failed. Please copy manually.";
    }
  }

  inputText.addEventListener("input", updateOutputs);

  clearButton.addEventListener("click", () => {
    inputText.value = "";
    updateOutputs();
    inputText.focus();
  });

  pasteExampleButton.addEventListener("click", () => {
    inputText.value = "I want italics Αλφα Ωμέγα αβγ ϕϑϖ";
    updateOutputs();
    inputText.focus();
  });

  exampleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inputText.value = button.dataset.example;
      updateOutputs();
      inputText.focus();
    });
  });

  italicOutput.addEventListener("click", () => {
    copyText(italicOutput.textContent, italicOutput, italicCopyNote);
  });

  boldItalicOutput.addEventListener("click", () => {
    copyText(
      boldItalicOutput.textContent,
      boldItalicOutput,
      boldItalicCopyNote,
    );
  });

  sansItalicOutput.addEventListener("click", () => {
    copyText(
      sansItalicOutput.textContent,
      sansItalicOutput,
      sansItalicCopyNote,
    );
  });

  sansBoldItalicOutput.addEventListener("click", () => {
    copyText(
      sansBoldItalicOutput.textContent,
      sansBoldItalicOutput,
      sansBoldItalicCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "italicOutput") {
        copyText(outputElement.textContent, outputElement, italicCopyNote);
      } else if (targetId === "boldItalicOutput") {
        copyText(outputElement.textContent, outputElement, boldItalicCopyNote);
      } else if (targetId === "sansItalicOutput") {
        copyText(outputElement.textContent, outputElement, sansItalicCopyNote);
      } else if (targetId === "sansBoldItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansBoldItalicCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
