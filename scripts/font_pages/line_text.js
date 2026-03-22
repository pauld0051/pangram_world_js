document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const UNDERLINE = "\u0332";
  const DOUBLE_UNDERLINE = "\u0333";
  const STRIKETHROUGH = "\u0336";
  const SHORT_STRIKETHROUGH = "\u0335";
  const SLASH_THROUGH = "\u0337";
  const LONG_SLASH_THROUGH = "\u0338";

  const BOLD_UPPER_START = 0x1d5d4; // 𝗔
  const BOLD_LOWER_START = 0x1d5ee; // 𝗮
  const BOLD_DIGIT_START = 0x1d7ec; // 𝟬

  const ITALIC_UPPER_START = 0x1d608; // 𝘈
  const ITALIC_LOWER_START = 0x1d622; // 𝘢

  const BOLD_ITALIC_UPPER_START = 0x1d63c; // 𝘼
  const BOLD_ITALIC_LOWER_START = 0x1d656; // 𝙖
  const BOLD_ITALIC_DIGIT_START = 0x1d7ec; // 𝟬

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

  const GREEK_BOLD_UPPER = [
    "𝝖",
    "𝝗",
    "𝝘",
    "𝝙",
    "𝝚",
    "𝝛",
    "𝝜",
    "𝝝",
    "𝝞",
    "𝝟",
    "𝝠",
    "𝝡",
    "𝝢",
    "𝝣",
    "𝝤",
    "𝝥",
    "𝝦",
    "𝝨",
    "𝝩",
    "𝝪",
    "𝝫",
    "𝝬",
    "𝝭",
    "𝝮",
  ];

  const GREEK_BOLD_LOWER = [
    "𝝰",
    "𝝱",
    "𝝲",
    "𝝳",
    "𝝴",
    "𝝵",
    "𝝶",
    "𝝷",
    "𝝸",
    "𝝹",
    "𝝺",
    "𝝻",
    "𝝼",
    "𝝽",
    "𝝾",
    "𝝿",
    "𝞀",
    "𝞂",
    "𝞃",
    "𝞄",
    "𝞅",
    "𝞆",
    "𝞇",
    "𝞈",
  ];

  const GREEK_BOLD_SPECIAL = {
    final_sigma: "𝞁",
    theta_symbol: "𝞋",
    phi_symbol: "𝞍",
    pi_symbol: "𝞏",
    kappa_symbol: "𝞌",
    rho_symbol: "𝞎",
    epsilon_symbol: "𝞊",
    digamma_upper: "𝟊",
    digamma_lower: "𝟋",
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

  const GREEK_BOLD_ITALIC_LOWER = [
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

  const GREEK_BOLD_ITALIC_SPECIAL = {
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

  const outputMap = [
    {
      outputId: "underlineOutput",
      noteId: "underlineCopyNote",
      generate: (text) => applyCombiningMark(text, UNDERLINE),
    },
    {
      outputId: "doubleUnderlineOutput",
      noteId: "doubleUnderlineCopyNote",
      generate: (text) => applyCombiningMark(text, DOUBLE_UNDERLINE),
    },
    {
      outputId: "strikethroughOutput",
      noteId: "strikethroughCopyNote",
      generate: (text) => applyCombiningMark(text, STRIKETHROUGH),
    },
    {
      outputId: "shortStrikethroughOutput",
      noteId: "shortStrikethroughCopyNote",
      generate: (text) => applyCombiningMark(text, SHORT_STRIKETHROUGH),
    },
    {
      outputId: "slashThroughOutput",
      noteId: "slashThroughCopyNote",
      generate: (text) => applyCombiningMark(text, SLASH_THROUGH),
    },
    {
      outputId: "longSlashThroughOutput",
      noteId: "longSlashThroughCopyNote",
      generate: (text) => applyCombiningMark(text, LONG_SLASH_THROUGH),
    },
    {
      outputId: "alternatingUnderlineStrikethroughOutput",
      noteId: "alternatingUnderlineStrikethroughCopyNote",
      generate: (text) =>
        applyAlternatingMarks(text, [UNDERLINE, STRIKETHROUGH]),
    },
    {
      outputId: "alternatingStrikethroughUnderlineOutput",
      noteId: "alternatingStrikethroughUnderlineCopyNote",
      generate: (text) =>
        applyAlternatingMarks(text, [STRIKETHROUGH, UNDERLINE]),
    },
    {
      outputId: "boldUnderlineOutput",
      noteId: "boldUnderlineCopyNote",
      generate: (text) =>
        applyCombiningMark(convertText(text, "bold"), UNDERLINE),
    },
    {
      outputId: "boldStrikethroughOutput",
      noteId: "boldStrikethroughCopyNote",
      generate: (text) =>
        applyCombiningMark(convertText(text, "bold"), STRIKETHROUGH),
    },
    {
      outputId: "italicUnderlineOutput",
      noteId: "italicUnderlineCopyNote",
      generate: (text) =>
        applyCombiningMark(convertText(text, "italic"), UNDERLINE),
    },
    {
      outputId: "italicStrikethroughOutput",
      noteId: "italicStrikethroughCopyNote",
      generate: (text) =>
        applyCombiningMark(convertText(text, "italic"), STRIKETHROUGH),
    },
    {
      outputId: "boldItalicUnderlineOutput",
      noteId: "boldItalicUnderlineCopyNote",
      generate: (text) =>
        applyCombiningMark(convertText(text, "boldItalic"), UNDERLINE),
    },
    {
      outputId: "boldItalicStrikethroughOutput",
      noteId: "boldItalicStrikethroughCopyNote",
      generate: (text) =>
        applyCombiningMark(convertText(text, "boldItalic"), STRIKETHROUGH),
    },
    {
      outputId: "underlineAlternatingCapsOutput",
      noteId: "underlineAlternatingCapsCopyNote",
      generate: (text) =>
        applyCombiningMark(toAlternatingCase(text, true), UNDERLINE),
    },
    {
      outputId: "underlineAlternatingLowercaseFirstOutput",
      noteId: "underlineAlternatingLowercaseFirstCopyNote",
      generate: (text) =>
        applyCombiningMark(toAlternatingCase(text, false), UNDERLINE),
    },
    {
      outputId: "strikethroughAlternatingCapsOutput",
      noteId: "strikethroughAlternatingCapsCopyNote",
      generate: (text) =>
        applyCombiningMark(toAlternatingCase(text, true), STRIKETHROUGH),
    },
    {
      outputId: "strikethroughAlternatingLowercaseFirstOutput",
      noteId: "strikethroughAlternatingLowercaseFirstCopyNote",
      generate: (text) =>
        applyCombiningMark(toAlternatingCase(text, false), STRIKETHROUGH),
    },
  ];

  const outputs = outputMap
    .map((item) => ({
      ...item,
      outputElement: document.getElementById(item.outputId),
      noteElement: document.getElementById(item.noteId),
    }))
    .filter((item) => item.outputElement && item.noteElement);

  function normaliseInput(text) {
    if (typeof normaliseStyledUnicodeToPlain === "function") {
      return normaliseStyledUnicodeToPlain(text || "");
    }
    return text || "";
  }

  function isWhitespace(char) {
    return /\s/.test(char);
  }

  function isLetter(char) {
    return /\p{L}/u.test(char);
  }

  function isMarkOnlyCandidate(char) {
    return !isWhitespace(char);
  }

  function mapLatinOrDigit(char, style) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;
    const isDigit = code >= 48 && code <= 57;

    if (style === "bold") {
      if (isUpper) return String.fromCodePoint(BOLD_UPPER_START + (code - 65));
      if (isLower) return String.fromCodePoint(BOLD_LOWER_START + (code - 97));
      if (isDigit) return String.fromCodePoint(BOLD_DIGIT_START + (code - 48));
    }

    if (style === "italic") {
      if (isUpper)
        return String.fromCodePoint(ITALIC_UPPER_START + (code - 65));
      if (isLower)
        return String.fromCodePoint(ITALIC_LOWER_START + (code - 97));
    }

    if (style === "boldItalic") {
      if (isUpper)
        return String.fromCodePoint(BOLD_ITALIC_UPPER_START + (code - 65));
      if (isLower)
        return String.fromCodePoint(BOLD_ITALIC_LOWER_START + (code - 97));
      if (isDigit)
        return String.fromCodePoint(BOLD_ITALIC_DIGIT_START + (code - 48));
    }

    return null;
  }

  function mapGreek(char, style) {
    const upperIndex = GREEK_UPPER.indexOf(char);
    const lowerIndex = GREEK_LOWER.indexOf(char);

    if (style === "bold") {
      if (upperIndex !== -1) return GREEK_BOLD_UPPER[upperIndex];
      if (lowerIndex !== -1) return GREEK_BOLD_LOWER[lowerIndex];
      if (GREEK_SPECIAL_PLAIN[char]) {
        return GREEK_BOLD_SPECIAL[GREEK_SPECIAL_PLAIN[char]] || char;
      }
    }

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

    return null;
  }

  function mapCharacter(char, style) {
    const latinMapped = mapLatinOrDigit(char, style);
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

  function applyCombiningMark(text, mark) {
    return Array.from(text)
      .map((char) => (isMarkOnlyCandidate(char) ? char + mark : char))
      .join("");
  }

  function applyAlternatingMarks(text, marks) {
    let markIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (!isMarkOnlyCandidate(char)) {
          return char;
        }

        const result = char + marks[markIndex % marks.length];
        markIndex += 1;
        return result;
      })
      .join("");
  }

  function toAlternatingCase(text, startUppercase = true) {
    let shouldUppercase = startUppercase;

    return Array.from(text)
      .map((char) => {
        if (!isLetter(char)) {
          return char;
        }

        const result = shouldUppercase
          ? char.toLocaleUpperCase()
          : char.toLocaleLowerCase();

        shouldUppercase = !shouldUppercase;
        return result;
      })
      .join("");
  }

  function clearCopyNotes() {
    outputs.forEach(({ outputElement, noteElement }) => {
      noteElement.textContent = "";
      outputElement.classList.remove("copied");
    });
  }

  function updateOutputs() {
    const input = normaliseInput(inputText.value);

    outputs.forEach(({ outputElement, generate }) => {
      outputElement.textContent = generate(input);
    });

    clearCopyNotes();
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

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      inputText.value = "";
      updateOutputs();
      inputText.focus();
    });
  }

  if (pasteExampleButton) {
    pasteExampleButton.addEventListener("click", () => {
      inputText.value = "Underline this text Αλφα βήτα Ωμέγα 123";
      updateOutputs();
      inputText.focus();
    });
  }

  exampleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inputText.value = button.dataset.example || "";
      updateOutputs();
      inputText.focus();
    });
  });

  outputs.forEach(({ outputElement, noteElement }) => {
    outputElement.addEventListener("click", () => {
      copyText(outputElement.textContent, outputElement, noteElement);
    });
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const matched = outputs.find((item) => item.outputId === targetId);

      if (!matched) {
        return;
      }

      copyText(
        matched.outputElement.textContent,
        matched.outputElement,
        matched.noteElement,
      );
    });
  });

  updateOutputs();
});
