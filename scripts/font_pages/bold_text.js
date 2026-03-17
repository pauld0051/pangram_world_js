document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const boldOutput = document.getElementById("boldOutput");
  const boldItalicOutput = document.getElementById("boldItalicOutput");
  const boldCopyNote = document.getElementById("boldCopyNote");
  const boldItalicCopyNote = document.getElementById("boldItalicCopyNote");
  const serifBoldOutput = document.getElementById("serifBoldOutput");
  const serifBoldItalicOutput = document.getElementById(
    "serifBoldItalicOutput",
  );
  const serifBoldCopyNote = document.getElementById("serifBoldCopyNote");
  const serifBoldItalicCopyNote = document.getElementById(
    "serifBoldItalicCopyNote",
  );
  const scriptBoldOutput = document.getElementById("scriptBoldOutput");
  const doubleStruckOutput = document.getElementById("doubleStruckOutput");
  const monospaceOutput = document.getElementById("monospaceOutput");
  const scriptBoldCopyNote = document.getElementById("scriptBoldCopyNote");
  const doubleStruckCopyNote = document.getElementById("doubleStruckCopyNote");
  const monospaceCopyNote = document.getElementById("monospaceCopyNote");
  const frakturBoldOutput = document.getElementById("frakturBoldOutput");
  const frakturBoldCopyNote = document.getElementById("frakturBoldCopyNote");

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const BOLD_UPPER_START = 0x1d5d4; // 𝗔
  const BOLD_LOWER_START = 0x1d5ee; // 𝗮
  const BOLD_DIGIT_START = 0x1d7ec; // 𝟬

  const BOLD_ITALIC_UPPER_START = 0x1d63c; // 𝘈
  const BOLD_ITALIC_LOWER_START = 0x1d656; // 𝘢
  const BOLD_ITALIC_DIGIT_START = 0x1d7ec; // 𝟬
  const SERIF_BOLD_UPPER_START = 0x1d400; // 𝐀
  const SERIF_BOLD_LOWER_START = 0x1d41a; // 𝐚
  const SERIF_BOLD_DIGIT_START = 0x1d7ce; // 𝟎

  const SERIF_BOLD_ITALIC_UPPER_START = 0x1d468; // 𝑨
  const SERIF_BOLD_ITALIC_LOWER_START = 0x1d482; // 𝒂

  const SCRIPT_BOLD_UPPER_START = 0x1d4d0; // 𝓐
  const SCRIPT_BOLD_LOWER_START = 0x1d4ea; // 𝓪

  const DOUBLE_STRUCK_LOWER_START = 0x1d552; // 𝕒
  const DOUBLE_STRUCK_DIGIT_START = 0x1d7d8; // 𝟘

  const MONOSPACE_UPPER_START = 0x1d670; // 𝙰
  const MONOSPACE_LOWER_START = 0x1d68a; // 𝚊
  const MONOSPACE_DIGIT_START = 0x1d7f6; // 𝟶

  const FRAKTUR_BOLD_UPPER_START = 0x1d56c; // 𝕬
  const FRAKTUR_BOLD_LOWER_START = 0x1d586; // 𝖆

  // No separate serif bold italic digits in Unicode maths block.
  // Reuse serif bold digits if you want numbers styled there too.
  const SERIF_BOLD_ITALIC_DIGIT_START = 0x1d7ce; // 𝟎

  // Ordinary Greek letters
  const GREEK_UPPER = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
  const GREEK_LOWER = "αβγδεζηθικλμνξοπρστυφχψω";

  // Final sigma handled separately
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

  // Unicode mathematical sans-serif bold Greek
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

  // Unicode mathematical sans-serif bold italic Greek
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

  const DOUBLE_STRUCK_UPPER_MAP = {
    A: "𝔸",
    B: "𝔹",
    C: "ℂ",
    D: "𝔻",
    E: "𝔼",
    F: "𝔽",
    G: "𝔾",
    H: "ℍ",
    I: "𝕀",
    J: "𝕁",
    K: "𝕂",
    L: "𝕃",
    M: "𝕄",
    N: "ℕ",
    O: "𝕆",
    P: "ℙ",
    Q: "ℚ",
    R: "ℝ",
    S: "𝕊",
    T: "𝕋",
    U: "𝕌",
    V: "𝕍",
    W: "𝕎",
    X: "𝕏",
    Y: "𝕐",
    Z: "ℤ",
  };

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

    const serifMapped = mapSerifLatinOrDigit(char, style);
    if (serifMapped) return serifMapped;

    const extraMapped = mapExtraStyles(char, style);
    if (extraMapped) return extraMapped;
    
    const frakturBoldMapped = mapFrakturBold(char, style);
    if (frakturBoldMapped) return frakturBoldMapped;

    return char;
  }

  function mapSerifLatinOrDigit(char, style) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;
    const isDigit = code >= 48 && code <= 57;

    if (style === "serifBold") {
      if (isUpper)
        return String.fromCodePoint(SERIF_BOLD_UPPER_START + (code - 65));
      if (isLower)
        return String.fromCodePoint(SERIF_BOLD_LOWER_START + (code - 97));
      if (isDigit)
        return String.fromCodePoint(SERIF_BOLD_DIGIT_START + (code - 48));
    }

    if (style === "serifBoldItalic") {
      if (isUpper)
        return String.fromCodePoint(
          SERIF_BOLD_ITALIC_UPPER_START + (code - 65),
        );
      if (isLower)
        return String.fromCodePoint(
          SERIF_BOLD_ITALIC_LOWER_START + (code - 97),
        );
      if (isDigit)
        return String.fromCodePoint(
          SERIF_BOLD_ITALIC_DIGIT_START + (code - 48),
        );
    }

    return null;
  }
  function mapExtraStyles(char, style) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;
    const isDigit = code >= 48 && code <= 57;

    if (style === "scriptBold") {
      if (isUpper)
        return String.fromCodePoint(SCRIPT_BOLD_UPPER_START + (code - 65));
      if (isLower)
        return String.fromCodePoint(SCRIPT_BOLD_LOWER_START + (code - 97));
      return null;
    }

    if (style === "doubleStruck") {
      if (isUpper) return DOUBLE_STRUCK_UPPER_MAP[char] || char;
      if (isLower)
        return String.fromCodePoint(DOUBLE_STRUCK_LOWER_START + (code - 97));
      if (isDigit)
        return String.fromCodePoint(DOUBLE_STRUCK_DIGIT_START + (code - 48));
      return null;
    }

    if (style === "monospace") {
      if (isUpper)
        return String.fromCodePoint(MONOSPACE_UPPER_START + (code - 65));
      if (isLower)
        return String.fromCodePoint(MONOSPACE_LOWER_START + (code - 97));
      if (isDigit)
        return String.fromCodePoint(MONOSPACE_DIGIT_START + (code - 48));
      return null;
    }

    return null;
    }
    
    function mapFrakturBold(char, style) {
      const code = char.codePointAt(0);

      const isUpper = code >= 65 && code <= 90;
      const isLower = code >= 97 && code <= 122;

      if (style === "frakturBold") {
        if (isUpper)
          return String.fromCodePoint(FRAKTUR_BOLD_UPPER_START + (code - 65));
        if (isLower)
          return String.fromCodePoint(FRAKTUR_BOLD_LOWER_START + (code - 97));
      }

      return null;
    }

  function convertText(text, style) {
    return Array.from(text)
      .map((char) => mapCharacter(char, style))
      .join("");
  }

  function updateOutputs() {
    const input = inputText.value || "";
    boldOutput.textContent = convertText(input, "bold");
    boldItalicOutput.textContent = convertText(input, "boldItalic");
    serifBoldOutput.textContent = convertText(input, "serifBold");
    serifBoldItalicOutput.textContent = convertText(input, "serifBoldItalic");
    scriptBoldOutput.textContent = convertText(input, "scriptBold");
    doubleStruckOutput.textContent = convertText(input, "doubleStruck");
    monospaceOutput.textContent = convertText(input, "monospace");
    frakturBoldOutput.textContent = convertText(input, "frakturBold");
    clearCopyNotes();
  }

  function clearCopyNotes() {
    boldCopyNote.textContent = "";
    boldItalicCopyNote.textContent = "";
    boldOutput.classList.remove("copied");
    boldItalicOutput.classList.remove("copied");
    serifBoldCopyNote.textContent = "";
    serifBoldItalicCopyNote.textContent = "";
    serifBoldOutput.classList.remove("copied");
    serifBoldItalicOutput.classList.remove("copied");
    doubleStruckCopyNote.textContent = "";
    monospaceCopyNote.textContent = "";
    doubleStruckOutput.classList.remove("copied");
    monospaceOutput.classList.remove("copied");
    frakturBoldCopyNote.textContent = "";
    frakturBoldOutput.classList.remove("copied");
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
    inputText.value = "I want bold Αλφα βήτα Ωμέγα αβγ ϕϑϖ";
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

  boldOutput.addEventListener("click", () => {
    copyText(boldOutput.textContent, boldOutput, boldCopyNote);
  });

  boldItalicOutput.addEventListener("click", () => {
    copyText(
      boldItalicOutput.textContent,
      boldItalicOutput,
      boldItalicCopyNote,
    );
  });

  serifBoldOutput.addEventListener("click", () => {
    copyText(serifBoldOutput.textContent, serifBoldOutput, serifBoldCopyNote);
  });

  serifBoldItalicOutput.addEventListener("click", () => {
    copyText(
      serifBoldItalicOutput.textContent,
      serifBoldItalicOutput,
      serifBoldItalicCopyNote,
    );
  });

  doubleStruckOutput.addEventListener("click", () => {
    copyText(
      doubleStruckOutput.textContent,
      doubleStruckOutput,
      doubleStruckCopyNote,
    );
  });

  monospaceOutput.addEventListener("click", () => {
    copyText(monospaceOutput.textContent, monospaceOutput, monospaceCopyNote);
  });
    
  frakturBoldOutput.addEventListener("click", () => {
    copyText(
      frakturBoldOutput.textContent,
      frakturBoldOutput,
      frakturBoldCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "boldOutput") {
        copyText(outputElement.textContent, outputElement, boldCopyNote);
      } else if (targetId === "boldItalicOutput") {
        copyText(outputElement.textContent, outputElement, boldItalicCopyNote);
      } else if (targetId === "serifBoldOutput") {
        copyText(outputElement.textContent, outputElement, serifBoldCopyNote);
      } else if (targetId === "serifBoldItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifBoldItalicCopyNote,
        );
      } else if (targetId === "scriptBoldOutput") {
        copyText(outputElement.textContent, outputElement, scriptBoldCopyNote);
      } else if (targetId === "doubleStruckOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          doubleStruckCopyNote,
        );
      } else if (targetId === "monospaceOutput") {
        copyText(outputElement.textContent, outputElement, monospaceCopyNote);
      } else if (targetId === "frakturBoldOutput") {
        copyText(outputElement.textContent, outputElement, frakturBoldCopyNote);
      }
        
    });
  });

  updateOutputs();
});
