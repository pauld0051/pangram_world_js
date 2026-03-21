document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const doubleStruckOutput = document.getElementById("doubleStruckOutput");
  const doubleStruckItalicOutput = document.getElementById(
    "doubleStruckItalicOutput",
  );
  const alternatingDoubleStruckFirstOutput = document.getElementById(
    "alternatingDoubleStruckFirstOutput",
  );
  const alternatingNormalFirstOutput = document.getElementById(
    "alternatingNormalFirstOutput",
  );
  const alternatingUpperLowerDoubleStruckOutput = document.getElementById(
    "alternatingUpperLowerDoubleStruckOutput",
  );
  const alternatingLowerUpperDoubleStruckOutput = document.getElementById(
    "alternatingLowerUpperDoubleStruckOutput",
  );

  const doubleStruckCopyNote = document.getElementById("doubleStruckCopyNote");
  const doubleStruckItalicCopyNote = document.getElementById(
    "doubleStruckItalicCopyNote",
  );
  const alternatingDoubleStruckFirstCopyNote = document.getElementById(
    "alternatingDoubleStruckFirstCopyNote",
  );
  const alternatingNormalFirstCopyNote = document.getElementById(
    "alternatingNormalFirstCopyNote",
  );
  const alternatingUpperLowerDoubleStruckCopyNote = document.getElementById(
    "alternatingUpperLowerDoubleStruckCopyNote",
  );
  const alternatingLowerUpperDoubleStruckCopyNote = document.getElementById(
    "alternatingLowerUpperDoubleStruckCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

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

  const DOUBLE_STRUCK_LOWER_START = 0x1d552; // 𝕒
  const DOUBLE_STRUCK_DIGIT_START = 0x1d7d8; // 𝟘

  const DOUBLE_STRUCK_ITALIC_MAP = {
    D: "ⅅ",
    d: "ⅆ",
    e: "ⅇ",
    i: "ⅈ",
    j: "ⅉ",
  };

  function isUpperLatin(char) {
    const code = char.codePointAt(0);
    return code >= 65 && code <= 90;
  }

  function isLowerLatin(char) {
    const code = char.codePointAt(0);
    return code >= 97 && code <= 122;
  }

  function isDigit(char) {
    const code = char.codePointAt(0);
    return code >= 48 && code <= 57;
  }

  function isLatinLetter(char) {
    return isUpperLatin(char) || isLowerLatin(char);
  }

  function isLatinLetterOrDigit(char) {
    return isLatinLetter(char) || isDigit(char);
  }

  function toDoubleStruckChar(char) {
    if (isUpperLatin(char)) {
      return DOUBLE_STRUCK_UPPER_MAP[char] || char;
    }

    if (isLowerLatin(char)) {
      return String.fromCodePoint(
        DOUBLE_STRUCK_LOWER_START + (char.codePointAt(0) - 97),
      );
    }

    if (isDigit(char)) {
      return String.fromCodePoint(
        DOUBLE_STRUCK_DIGIT_START + (char.codePointAt(0) - 48),
      );
    }

    return char;
  }

  function toDoubleStruckItalicChar(char) {
    return DOUBLE_STRUCK_ITALIC_MAP[char] || char;
  }

  function convertText(text, style) {
    if (style === "doubleStruck") {
      return Array.from(text)
        .map((char) => toDoubleStruckChar(char))
        .join("");
    }

    if (style === "doubleStruckItalic") {
      return Array.from(text)
        .map((char) => toDoubleStruckItalicChar(char))
        .join("");
    }

    return text;
  }

  function convertAlternatingDoubleStruck(text, startWithDoubleStruck) {
    let letterIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (!isLatinLetterOrDigit(char)) {
          return char;
        }

        const useDoubleStruck = startWithDoubleStruck
          ? letterIndex % 2 === 0
          : letterIndex % 2 !== 0;

        letterIndex += 1;
        return useDoubleStruck ? toDoubleStruckChar(char) : char;
      })
      .join("");
  }

  function convertAlternatingCaseDoubleStruck(text, startUpper) {
    let letterIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (!isLatinLetter(char)) {
          if (isDigit(char)) {
            return toDoubleStruckChar(char);
          }
          return char;
        }

        const shouldBeUpper = startUpper
          ? letterIndex % 2 === 0
          : letterIndex % 2 !== 0;

        const casedChar = shouldBeUpper
          ? char.toUpperCase()
          : char.toLowerCase();

        letterIndex += 1;
        return toDoubleStruckChar(casedChar);
      })
      .join("");
  }

  function clearCopyNotes() {
    doubleStruckCopyNote.textContent = "";
    doubleStruckItalicCopyNote.textContent = "";
    alternatingDoubleStruckFirstCopyNote.textContent = "";
    alternatingNormalFirstCopyNote.textContent = "";
    alternatingUpperLowerDoubleStruckCopyNote.textContent = "";
    alternatingLowerUpperDoubleStruckCopyNote.textContent = "";

    doubleStruckOutput.classList.remove("copied");
    doubleStruckItalicOutput.classList.remove("copied");
    alternatingDoubleStruckFirstOutput.classList.remove("copied");
    alternatingNormalFirstOutput.classList.remove("copied");
    alternatingUpperLowerDoubleStruckOutput.classList.remove("copied");
    alternatingLowerUpperDoubleStruckOutput.classList.remove("copied");
  }

  function updateOutputs() {
    const input =
      typeof normaliseStyledUnicodeToPlain === "function"
        ? normaliseStyledUnicodeToPlain(inputText.value || "")
        : inputText.value || "";

    doubleStruckOutput.textContent = convertText(input, "doubleStruck");
    doubleStruckItalicOutput.textContent = convertText(
      input,
      "doubleStruckItalic",
    );
    alternatingDoubleStruckFirstOutput.textContent =
      convertAlternatingDoubleStruck(input, true);
    alternatingNormalFirstOutput.textContent = convertAlternatingDoubleStruck(
      input,
      false,
    );
    alternatingUpperLowerDoubleStruckOutput.textContent =
      convertAlternatingCaseDoubleStruck(input, true);
    alternatingLowerUpperDoubleStruckOutput.textContent =
      convertAlternatingCaseDoubleStruck(input, false);

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

  clearButton.addEventListener("click", () => {
    inputText.value = "";
    updateOutputs();
    inputText.focus();
  });

  pasteExampleButton.addEventListener("click", () => {
    inputText.value = "Double struck text 123";
    updateOutputs();
    inputText.focus();
  });

  exampleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inputText.value = button.dataset.example || "";
      updateOutputs();
      inputText.focus();
    });
  });

  doubleStruckOutput.addEventListener("click", () => {
    copyText(
      doubleStruckOutput.textContent,
      doubleStruckOutput,
      doubleStruckCopyNote,
    );
  });

  doubleStruckItalicOutput.addEventListener("click", () => {
    copyText(
      doubleStruckItalicOutput.textContent,
      doubleStruckItalicOutput,
      doubleStruckItalicCopyNote,
    );
  });

  alternatingDoubleStruckFirstOutput.addEventListener("click", () => {
    copyText(
      alternatingDoubleStruckFirstOutput.textContent,
      alternatingDoubleStruckFirstOutput,
      alternatingDoubleStruckFirstCopyNote,
    );
  });

  alternatingNormalFirstOutput.addEventListener("click", () => {
    copyText(
      alternatingNormalFirstOutput.textContent,
      alternatingNormalFirstOutput,
      alternatingNormalFirstCopyNote,
    );
  });

  alternatingUpperLowerDoubleStruckOutput.addEventListener("click", () => {
    copyText(
      alternatingUpperLowerDoubleStruckOutput.textContent,
      alternatingUpperLowerDoubleStruckOutput,
      alternatingUpperLowerDoubleStruckCopyNote,
    );
  });

  alternatingLowerUpperDoubleStruckOutput.addEventListener("click", () => {
    copyText(
      alternatingLowerUpperDoubleStruckOutput.textContent,
      alternatingLowerUpperDoubleStruckOutput,
      alternatingLowerUpperDoubleStruckCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "doubleStruckOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          doubleStruckCopyNote,
        );
      } else if (targetId === "doubleStruckItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          doubleStruckItalicCopyNote,
        );
      } else if (targetId === "alternatingDoubleStruckFirstOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingDoubleStruckFirstCopyNote,
        );
      } else if (targetId === "alternatingNormalFirstOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingNormalFirstCopyNote,
        );
      } else if (targetId === "alternatingUpperLowerDoubleStruckOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingUpperLowerDoubleStruckCopyNote,
        );
      } else if (targetId === "alternatingLowerUpperDoubleStruckOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingLowerUpperDoubleStruckCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
