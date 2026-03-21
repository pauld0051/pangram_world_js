document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const sansSerifOutput = document.getElementById("sansSerifOutput");
  const sansSerifLowercaseOutput = document.getElementById(
    "sansSerifLowercaseOutput",
  );
  const sansSerifUppercaseOutput = document.getElementById(
    "sansSerifUppercaseOutput",
  );
  const sansSerifBoldOutput = document.getElementById("sansSerifBoldOutput");
  const sansSerifItalicOutput = document.getElementById(
    "sansSerifItalicOutput",
  );
  const sansSerifBoldItalicOutput = document.getElementById(
    "sansSerifBoldItalicOutput",
  );

  const sansSerifLowerUpperOutput = document.getElementById(
    "sansSerifLowerUpperOutput",
  );
  const sansSerifUpperLowerOutput = document.getElementById(
    "sansSerifUpperLowerOutput",
  );
  const sansSerifBoldLowerUpperOutput = document.getElementById(
    "sansSerifBoldLowerUpperOutput",
  );
  const sansSerifBoldUpperLowerOutput = document.getElementById(
    "sansSerifBoldUpperLowerOutput",
  );
  const sansSerifItalicLowerUpperOutput = document.getElementById(
    "sansSerifItalicLowerUpperOutput",
  );
  const sansSerifItalicUpperLowerOutput = document.getElementById(
    "sansSerifItalicUpperLowerOutput",
  );
  const sansSerifBoldItalicLowerUpperOutput = document.getElementById(
    "sansSerifBoldItalicLowerUpperOutput",
  );
  const sansSerifBoldItalicUpperLowerOutput = document.getElementById(
    "sansSerifBoldItalicUpperLowerOutput",
  );

  const sansSerifCopyNote = document.getElementById("sansSerifCopyNote");
  const sansSerifLowercaseCopyNote = document.getElementById(
    "sansSerifLowercaseCopyNote",
  );
  const sansSerifUppercaseCopyNote = document.getElementById(
    "sansSerifUppercaseCopyNote",
  );
  const sansSerifBoldCopyNote = document.getElementById(
    "sansSerifBoldCopyNote",
  );
  const sansSerifItalicCopyNote = document.getElementById(
    "sansSerifItalicCopyNote",
  );
  const sansSerifBoldItalicCopyNote = document.getElementById(
    "sansSerifBoldItalicCopyNote",
  );

  const sansSerifLowerUpperCopyNote = document.getElementById(
    "sansSerifLowerUpperCopyNote",
  );
  const sansSerifUpperLowerCopyNote = document.getElementById(
    "sansSerifUpperLowerCopyNote",
  );
  const sansSerifBoldLowerUpperCopyNote = document.getElementById(
    "sansSerifBoldLowerUpperCopyNote",
  );
  const sansSerifBoldUpperLowerCopyNote = document.getElementById(
    "sansSerifBoldUpperLowerCopyNote",
  );
  const sansSerifItalicLowerUpperCopyNote = document.getElementById(
    "sansSerifItalicLowerUpperCopyNote",
  );
  const sansSerifItalicUpperLowerCopyNote = document.getElementById(
    "sansSerifItalicUpperLowerCopyNote",
  );
  const sansSerifBoldItalicLowerUpperCopyNote = document.getElementById(
    "sansSerifBoldItalicLowerUpperCopyNote",
  );
  const sansSerifBoldItalicUpperLowerCopyNote = document.getElementById(
    "sansSerifBoldItalicUpperLowerCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const SANS_SERIF_UPPER_START = 0x1d5a0; // 𝖠
  const SANS_SERIF_LOWER_START = 0x1d5ba; // 𝖺
  const SANS_SERIF_DIGIT_START = 0x1d7e2; // 𝟢

  const SANS_SERIF_BOLD_UPPER_START = 0x1d5d4; // 𝗔
  const SANS_SERIF_BOLD_LOWER_START = 0x1d5ee; // 𝗮
  const SANS_SERIF_BOLD_DIGIT_START = 0x1d7ec; // 𝟬

  const SANS_SERIF_ITALIC_UPPER_START = 0x1d608; // 𝘈
  const SANS_SERIF_ITALIC_LOWER_START = 0x1d622; // 𝘢

  const SANS_SERIF_BOLD_ITALIC_UPPER_START = 0x1d63c; // 𝘼
  const SANS_SERIF_BOLD_ITALIC_LOWER_START = 0x1d656; // 𝙖
  const SANS_SERIF_BOLD_ITALIC_DIGIT_START = 0x1d7ec; // 𝟬

  function isAsciiLetter(char) {
    return /^[A-Za-z]$/.test(char);
  }

  function isAsciiUpper(char) {
    return /^[A-Z]$/.test(char);
  }

  function isAsciiLower(char) {
    return /^[a-z]$/.test(char);
  }

  function isDigit(char) {
    return /^[0-9]$/.test(char);
  }

  function alternateCase(text, startLower) {
    let letterIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (!isAsciiLetter(char)) {
          return char;
        }

        const useLower = startLower
          ? letterIndex % 2 === 0
          : letterIndex % 2 !== 0;

        letterIndex += 1;
        return useLower ? char.toLowerCase() : char.toUpperCase();
      })
      .join("");
  }

  function mapSansSerif(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(SANS_SERIF_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(SANS_SERIF_LOWER_START + (code - 97));
    }

    if (isDigit(char)) {
      return String.fromCodePoint(SANS_SERIF_DIGIT_START + (code - 48));
    }

    return char;
  }

  function mapSansSerifBold(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(SANS_SERIF_BOLD_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(SANS_SERIF_BOLD_LOWER_START + (code - 97));
    }

    if (isDigit(char)) {
      return String.fromCodePoint(SANS_SERIF_BOLD_DIGIT_START + (code - 48));
    }

    return char;
  }

  function mapSansSerifItalic(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(SANS_SERIF_ITALIC_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(SANS_SERIF_ITALIC_LOWER_START + (code - 97));
    }

    return char;
  }

  function mapSansSerifBoldItalic(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(
        SANS_SERIF_BOLD_ITALIC_UPPER_START + (code - 65),
      );
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(
        SANS_SERIF_BOLD_ITALIC_LOWER_START + (code - 97),
      );
    }

    if (isDigit(char)) {
      return String.fromCodePoint(
        SANS_SERIF_BOLD_ITALIC_DIGIT_START + (code - 48),
      );
    }

    return char;
  }

  function applyStyle(text, style) {
    const chars = Array.from(text);

    if (style === "sansSerif") {
      return chars.map((char) => mapSansSerif(char)).join("");
    }

    if (style === "sansSerifBold") {
      return chars.map((char) => mapSansSerifBold(char)).join("");
    }

    if (style === "sansSerifItalic") {
      return chars.map((char) => mapSansSerifItalic(char)).join("");
    }

    if (style === "sansSerifBoldItalic") {
      return chars.map((char) => mapSansSerifBoldItalic(char)).join("");
    }

    return text;
  }

  function buildAlternatingStyledText(input, style, startLower) {
    const alternated = alternateCase(input, startLower);
    return applyStyle(alternated, style);
  }

  function clearCopyNotes() {
    sansSerifCopyNote.textContent = "";
    sansSerifLowercaseCopyNote.textContent = "";
    sansSerifUppercaseCopyNote.textContent = "";
    sansSerifBoldCopyNote.textContent = "";
    sansSerifItalicCopyNote.textContent = "";
    sansSerifBoldItalicCopyNote.textContent = "";

    sansSerifLowerUpperCopyNote.textContent = "";
    sansSerifUpperLowerCopyNote.textContent = "";
    sansSerifBoldLowerUpperCopyNote.textContent = "";
    sansSerifBoldUpperLowerCopyNote.textContent = "";
    sansSerifItalicLowerUpperCopyNote.textContent = "";
    sansSerifItalicUpperLowerCopyNote.textContent = "";
    sansSerifBoldItalicLowerUpperCopyNote.textContent = "";
    sansSerifBoldItalicUpperLowerCopyNote.textContent = "";

    sansSerifOutput.classList.remove("copied");
    sansSerifLowercaseOutput.classList.remove("copied");
    sansSerifUppercaseOutput.classList.remove("copied");
    sansSerifBoldOutput.classList.remove("copied");
    sansSerifItalicOutput.classList.remove("copied");
    sansSerifBoldItalicOutput.classList.remove("copied");

    sansSerifLowerUpperOutput.classList.remove("copied");
    sansSerifUpperLowerOutput.classList.remove("copied");
    sansSerifBoldLowerUpperOutput.classList.remove("copied");
    sansSerifBoldUpperLowerOutput.classList.remove("copied");
    sansSerifItalicLowerUpperOutput.classList.remove("copied");
    sansSerifItalicUpperLowerOutput.classList.remove("copied");
    sansSerifBoldItalicLowerUpperOutput.classList.remove("copied");
    sansSerifBoldItalicUpperLowerOutput.classList.remove("copied");
  }

  function updateOutputs() {
    const input = normaliseStyledUnicodeToPlain(inputText.value || "");

    sansSerifOutput.textContent = applyStyle(input, "sansSerif");
    sansSerifLowercaseOutput.textContent = applyStyle(
      input.toLowerCase(),
      "sansSerif",
    );
    sansSerifUppercaseOutput.textContent = applyStyle(
      input.toUpperCase(),
      "sansSerif",
    );
    sansSerifBoldOutput.textContent = applyStyle(input, "sansSerifBold");
    sansSerifItalicOutput.textContent = applyStyle(input, "sansSerifItalic");
    sansSerifBoldItalicOutput.textContent = applyStyle(
      input,
      "sansSerifBoldItalic",
    );

    sansSerifLowerUpperOutput.textContent = buildAlternatingStyledText(
      input,
      "sansSerif",
      true,
    );
    sansSerifUpperLowerOutput.textContent = buildAlternatingStyledText(
      input,
      "sansSerif",
      false,
    );

    sansSerifBoldLowerUpperOutput.textContent = buildAlternatingStyledText(
      input,
      "sansSerifBold",
      true,
    );
    sansSerifBoldUpperLowerOutput.textContent = buildAlternatingStyledText(
      input,
      "sansSerifBold",
      false,
    );

    sansSerifItalicLowerUpperOutput.textContent = buildAlternatingStyledText(
      input,
      "sansSerifItalic",
      true,
    );
    sansSerifItalicUpperLowerOutput.textContent = buildAlternatingStyledText(
      input,
      "sansSerifItalic",
      false,
    );

    sansSerifBoldItalicLowerUpperOutput.textContent =
      buildAlternatingStyledText(input, "sansSerifBoldItalic", true);
    sansSerifBoldItalicUpperLowerOutput.textContent =
      buildAlternatingStyledText(input, "sansSerifBoldItalic", false);

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
    inputText.value = "Sans serif text 123 Pangram World";
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

  sansSerifOutput.addEventListener("click", () => {
    copyText(sansSerifOutput.textContent, sansSerifOutput, sansSerifCopyNote);
  });

  sansSerifLowercaseOutput.addEventListener("click", () => {
    copyText(
      sansSerifLowercaseOutput.textContent,
      sansSerifLowercaseOutput,
      sansSerifLowercaseCopyNote,
    );
  });

  sansSerifUppercaseOutput.addEventListener("click", () => {
    copyText(
      sansSerifUppercaseOutput.textContent,
      sansSerifUppercaseOutput,
      sansSerifUppercaseCopyNote,
    );
  });

  sansSerifBoldOutput.addEventListener("click", () => {
    copyText(
      sansSerifBoldOutput.textContent,
      sansSerifBoldOutput,
      sansSerifBoldCopyNote,
    );
  });

  sansSerifItalicOutput.addEventListener("click", () => {
    copyText(
      sansSerifItalicOutput.textContent,
      sansSerifItalicOutput,
      sansSerifItalicCopyNote,
    );
  });

  sansSerifBoldItalicOutput.addEventListener("click", () => {
    copyText(
      sansSerifBoldItalicOutput.textContent,
      sansSerifBoldItalicOutput,
      sansSerifBoldItalicCopyNote,
    );
  });

  sansSerifLowerUpperOutput.addEventListener("click", () => {
    copyText(
      sansSerifLowerUpperOutput.textContent,
      sansSerifLowerUpperOutput,
      sansSerifLowerUpperCopyNote,
    );
  });

  sansSerifUpperLowerOutput.addEventListener("click", () => {
    copyText(
      sansSerifUpperLowerOutput.textContent,
      sansSerifUpperLowerOutput,
      sansSerifUpperLowerCopyNote,
    );
  });

  sansSerifBoldLowerUpperOutput.addEventListener("click", () => {
    copyText(
      sansSerifBoldLowerUpperOutput.textContent,
      sansSerifBoldLowerUpperOutput,
      sansSerifBoldLowerUpperCopyNote,
    );
  });

  sansSerifBoldUpperLowerOutput.addEventListener("click", () => {
    copyText(
      sansSerifBoldUpperLowerOutput.textContent,
      sansSerifBoldUpperLowerOutput,
      sansSerifBoldUpperLowerCopyNote,
    );
  });

  sansSerifItalicLowerUpperOutput.addEventListener("click", () => {
    copyText(
      sansSerifItalicLowerUpperOutput.textContent,
      sansSerifItalicLowerUpperOutput,
      sansSerifItalicLowerUpperCopyNote,
    );
  });

  sansSerifItalicUpperLowerOutput.addEventListener("click", () => {
    copyText(
      sansSerifItalicUpperLowerOutput.textContent,
      sansSerifItalicUpperLowerOutput,
      sansSerifItalicUpperLowerCopyNote,
    );
  });

  sansSerifBoldItalicLowerUpperOutput.addEventListener("click", () => {
    copyText(
      sansSerifBoldItalicLowerUpperOutput.textContent,
      sansSerifBoldItalicLowerUpperOutput,
      sansSerifBoldItalicLowerUpperCopyNote,
    );
  });

  sansSerifBoldItalicUpperLowerOutput.addEventListener("click", () => {
    copyText(
      sansSerifBoldItalicUpperLowerOutput.textContent,
      sansSerifBoldItalicUpperLowerOutput,
      sansSerifBoldItalicUpperLowerCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "sansSerifOutput") {
        copyText(outputElement.textContent, outputElement, sansSerifCopyNote);
      } else if (targetId === "sansSerifLowercaseOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifLowercaseCopyNote,
        );
      } else if (targetId === "sansSerifUppercaseOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifUppercaseCopyNote,
        );
      } else if (targetId === "sansSerifBoldOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifBoldCopyNote,
        );
      } else if (targetId === "sansSerifItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifItalicCopyNote,
        );
      } else if (targetId === "sansSerifBoldItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifBoldItalicCopyNote,
        );
      } else if (targetId === "sansSerifLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifLowerUpperCopyNote,
        );
      } else if (targetId === "sansSerifUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifUpperLowerCopyNote,
        );
      } else if (targetId === "sansSerifBoldLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifBoldLowerUpperCopyNote,
        );
      } else if (targetId === "sansSerifBoldUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifBoldUpperLowerCopyNote,
        );
      } else if (targetId === "sansSerifItalicLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifItalicLowerUpperCopyNote,
        );
      } else if (targetId === "sansSerifItalicUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifItalicUpperLowerCopyNote,
        );
      } else if (targetId === "sansSerifBoldItalicLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifBoldItalicLowerUpperCopyNote,
        );
      } else if (targetId === "sansSerifBoldItalicUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          sansSerifBoldItalicUpperLowerCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
