document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const serifOutput = document.getElementById("serifOutput");
  const serifLowercaseOutput = document.getElementById("serifLowercaseOutput");
  const serifUppercaseOutput = document.getElementById("serifUppercaseOutput");
  const serifBoldOutput = document.getElementById("serifBoldOutput");
  const serifItalicOutput = document.getElementById("serifItalicOutput");
  const serifBoldItalicOutput = document.getElementById(
    "serifBoldItalicOutput",
  );

  const serifLowerUpperOutput = document.getElementById(
    "serifLowerUpperOutput",
  );
  const serifUpperLowerOutput = document.getElementById(
    "serifUpperLowerOutput",
  );
  const serifBoldLowerUpperOutput = document.getElementById(
    "serifBoldLowerUpperOutput",
  );
  const serifBoldUpperLowerOutput = document.getElementById(
    "serifBoldUpperLowerOutput",
  );
  const serifItalicLowerUpperOutput = document.getElementById(
    "serifItalicLowerUpperOutput",
  );
  const serifItalicUpperLowerOutput = document.getElementById(
    "serifItalicUpperLowerOutput",
  );
  const serifBoldItalicLowerUpperOutput = document.getElementById(
    "serifBoldItalicLowerUpperOutput",
  );
  const serifBoldItalicUpperLowerOutput = document.getElementById(
    "serifBoldItalicUpperLowerOutput",
  );

  const serifCopyNote = document.getElementById("serifCopyNote");
  const serifLowercaseCopyNote = document.getElementById(
    "serifLowercaseCopyNote",
  );
  const serifUppercaseCopyNote = document.getElementById(
    "serifUppercaseCopyNote",
  );
  const serifBoldCopyNote = document.getElementById("serifBoldCopyNote");
  const serifItalicCopyNote = document.getElementById("serifItalicCopyNote");
  const serifBoldItalicCopyNote = document.getElementById(
    "serifBoldItalicCopyNote",
  );

  const serifLowerUpperCopyNote = document.getElementById(
    "serifLowerUpperCopyNote",
  );
  const serifUpperLowerCopyNote = document.getElementById(
    "serifUpperLowerCopyNote",
  );
  const serifBoldLowerUpperCopyNote = document.getElementById(
    "serifBoldLowerUpperCopyNote",
  );
  const serifBoldUpperLowerCopyNote = document.getElementById(
    "serifBoldUpperLowerCopyNote",
  );
  const serifItalicLowerUpperCopyNote = document.getElementById(
    "serifItalicLowerUpperCopyNote",
  );
  const serifItalicUpperLowerCopyNote = document.getElementById(
    "serifItalicUpperLowerCopyNote",
  );
  const serifBoldItalicLowerUpperCopyNote = document.getElementById(
    "serifBoldItalicLowerUpperCopyNote",
  );
  const serifBoldItalicUpperLowerCopyNote = document.getElementById(
    "serifBoldItalicUpperLowerCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const SERIF_BOLD_UPPER_START = 0x1d400; // 𝐀
  const SERIF_BOLD_LOWER_START = 0x1d41a; // 𝐚
  const SERIF_BOLD_DIGIT_START = 0x1d7ce; // 𝟎

  const SERIF_BOLD_ITALIC_UPPER_START = 0x1d468; // 𝑨
  const SERIF_BOLD_ITALIC_LOWER_START = 0x1d482; // 𝒂
  const SERIF_BOLD_ITALIC_DIGIT_START = 0x1d7ce; // 𝟎

  const SERIF_ITALIC_UPPER_MAP = {
    A: "𝐴",
    B: "𝐵",
    C: "𝐶",
    D: "𝐷",
    E: "𝐸",
    F: "𝐹",
    G: "𝐺",
    H: "𝐻",
    I: "𝐼",
    J: "𝐽",
    K: "𝐾",
    L: "𝐿",
    M: "𝑀",
    N: "𝑁",
    O: "𝑂",
    P: "𝑃",
    Q: "𝑄",
    R: "𝑅",
    S: "𝑆",
    T: "𝑇",
    U: "𝑈",
    V: "𝑉",
    W: "𝑊",
    X: "𝑋",
    Y: "𝑌",
    Z: "𝑍",
  };

  const SERIF_ITALIC_LOWER_MAP = {
    a: "𝑎",
    b: "𝑏",
    c: "𝑐",
    d: "𝑑",
    e: "𝑒",
    f: "𝑓",
    g: "𝑔",
    h: "ℎ",
    i: "𝑖",
    j: "𝑗",
    k: "𝑘",
    l: "𝑙",
    m: "𝑚",
    n: "𝑛",
    o: "𝑜",
    p: "𝑝",
    q: "𝑞",
    r: "𝑟",
    s: "𝑠",
    t: "𝑡",
    u: "𝑢",
    v: "𝑣",
    w: "𝑤",
    x: "𝑥",
    y: "𝑦",
    z: "𝑧",
  };

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

  function mapSerif(char) {
    return char;
  }

  function mapSerifBold(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(SERIF_BOLD_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(SERIF_BOLD_LOWER_START + (code - 97));
    }

    if (isDigit(char)) {
      return String.fromCodePoint(SERIF_BOLD_DIGIT_START + (code - 48));
    }

    return char;
  }

  function mapSerifItalic(char) {
    if (isAsciiUpper(char)) {
      return SERIF_ITALIC_UPPER_MAP[char] || char;
    }

    if (isAsciiLower(char)) {
      return SERIF_ITALIC_LOWER_MAP[char] || char;
    }

    return char;
  }

  function mapSerifBoldItalic(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(SERIF_BOLD_ITALIC_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(SERIF_BOLD_ITALIC_LOWER_START + (code - 97));
    }

    if (isDigit(char)) {
      return String.fromCodePoint(SERIF_BOLD_ITALIC_DIGIT_START + (code - 48));
    }

    return char;
  }

  function applyStyle(text, style) {
    const chars = Array.from(text);

    if (style === "serif") {
      return chars.map((char) => mapSerif(char)).join("");
    }

    if (style === "serifBold") {
      return chars.map((char) => mapSerifBold(char)).join("");
    }

    if (style === "serifItalic") {
      return chars.map((char) => mapSerifItalic(char)).join("");
    }

    if (style === "serifBoldItalic") {
      return chars.map((char) => mapSerifBoldItalic(char)).join("");
    }

    return text;
  }

  function buildAlternatingStyledText(input, style, startLower) {
    const alternated = alternateCase(input, startLower);
    return applyStyle(alternated, style);
  }

  function clearCopyNotes() {
    serifCopyNote.textContent = "";
    serifLowercaseCopyNote.textContent = "";
    serifUppercaseCopyNote.textContent = "";
    serifBoldCopyNote.textContent = "";
    serifItalicCopyNote.textContent = "";
    serifBoldItalicCopyNote.textContent = "";

    serifLowerUpperCopyNote.textContent = "";
    serifUpperLowerCopyNote.textContent = "";
    serifBoldLowerUpperCopyNote.textContent = "";
    serifBoldUpperLowerCopyNote.textContent = "";
    serifItalicLowerUpperCopyNote.textContent = "";
    serifItalicUpperLowerCopyNote.textContent = "";
    serifBoldItalicLowerUpperCopyNote.textContent = "";
    serifBoldItalicUpperLowerCopyNote.textContent = "";

    serifOutput.classList.remove("copied");
    serifLowercaseOutput.classList.remove("copied");
    serifUppercaseOutput.classList.remove("copied");
    serifBoldOutput.classList.remove("copied");
    serifItalicOutput.classList.remove("copied");
    serifBoldItalicOutput.classList.remove("copied");

    serifLowerUpperOutput.classList.remove("copied");
    serifUpperLowerOutput.classList.remove("copied");
    serifBoldLowerUpperOutput.classList.remove("copied");
    serifBoldUpperLowerOutput.classList.remove("copied");
    serifItalicLowerUpperOutput.classList.remove("copied");
    serifItalicUpperLowerOutput.classList.remove("copied");
    serifBoldItalicLowerUpperOutput.classList.remove("copied");
    serifBoldItalicUpperLowerOutput.classList.remove("copied");
  }

  function updateOutputs() {
    const input = normaliseStyledUnicodeToPlain(inputText.value || "");

    serifOutput.textContent = applyStyle(input, "serif");
    serifLowercaseOutput.textContent = applyStyle(input.toLowerCase(), "serif");
    serifUppercaseOutput.textContent = applyStyle(input.toUpperCase(), "serif");
    serifBoldOutput.textContent = applyStyle(input, "serifBold");
    serifItalicOutput.textContent = applyStyle(input, "serifItalic");
    serifBoldItalicOutput.textContent = applyStyle(input, "serifBoldItalic");

    serifLowerUpperOutput.textContent = buildAlternatingStyledText(
      input,
      "serif",
      true,
    );
    serifUpperLowerOutput.textContent = buildAlternatingStyledText(
      input,
      "serif",
      false,
    );

    serifBoldLowerUpperOutput.textContent = buildAlternatingStyledText(
      input,
      "serifBold",
      true,
    );
    serifBoldUpperLowerOutput.textContent = buildAlternatingStyledText(
      input,
      "serifBold",
      false,
    );

    serifItalicLowerUpperOutput.textContent = buildAlternatingStyledText(
      input,
      "serifItalic",
      true,
    );
    serifItalicUpperLowerOutput.textContent = buildAlternatingStyledText(
      input,
      "serifItalic",
      false,
    );

    serifBoldItalicLowerUpperOutput.textContent = buildAlternatingStyledText(
      input,
      "serifBoldItalic",
      true,
    );
    serifBoldItalicUpperLowerOutput.textContent = buildAlternatingStyledText(
      input,
      "serifBoldItalic",
      false,
    );

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
    inputText.value = "Serif text 123 Pangram World";
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

  serifOutput.addEventListener("click", () => {
    copyText(serifOutput.textContent, serifOutput, serifCopyNote);
  });

  serifLowercaseOutput.addEventListener("click", () => {
    copyText(
      serifLowercaseOutput.textContent,
      serifLowercaseOutput,
      serifLowercaseCopyNote,
    );
  });

  serifUppercaseOutput.addEventListener("click", () => {
    copyText(
      serifUppercaseOutput.textContent,
      serifUppercaseOutput,
      serifUppercaseCopyNote,
    );
  });

  serifBoldOutput.addEventListener("click", () => {
    copyText(serifBoldOutput.textContent, serifBoldOutput, serifBoldCopyNote);
  });

  serifItalicOutput.addEventListener("click", () => {
    copyText(
      serifItalicOutput.textContent,
      serifItalicOutput,
      serifItalicCopyNote,
    );
  });

  serifBoldItalicOutput.addEventListener("click", () => {
    copyText(
      serifBoldItalicOutput.textContent,
      serifBoldItalicOutput,
      serifBoldItalicCopyNote,
    );
  });

  serifLowerUpperOutput.addEventListener("click", () => {
    copyText(
      serifLowerUpperOutput.textContent,
      serifLowerUpperOutput,
      serifLowerUpperCopyNote,
    );
  });

  serifUpperLowerOutput.addEventListener("click", () => {
    copyText(
      serifUpperLowerOutput.textContent,
      serifUpperLowerOutput,
      serifUpperLowerCopyNote,
    );
  });

  serifBoldLowerUpperOutput.addEventListener("click", () => {
    copyText(
      serifBoldLowerUpperOutput.textContent,
      serifBoldLowerUpperOutput,
      serifBoldLowerUpperCopyNote,
    );
  });

  serifBoldUpperLowerOutput.addEventListener("click", () => {
    copyText(
      serifBoldUpperLowerOutput.textContent,
      serifBoldUpperLowerOutput,
      serifBoldUpperLowerCopyNote,
    );
  });

  serifItalicLowerUpperOutput.addEventListener("click", () => {
    copyText(
      serifItalicLowerUpperOutput.textContent,
      serifItalicLowerUpperOutput,
      serifItalicLowerUpperCopyNote,
    );
  });

  serifItalicUpperLowerOutput.addEventListener("click", () => {
    copyText(
      serifItalicUpperLowerOutput.textContent,
      serifItalicUpperLowerOutput,
      serifItalicUpperLowerCopyNote,
    );
  });

  serifBoldItalicLowerUpperOutput.addEventListener("click", () => {
    copyText(
      serifBoldItalicLowerUpperOutput.textContent,
      serifBoldItalicLowerUpperOutput,
      serifBoldItalicLowerUpperCopyNote,
    );
  });

  serifBoldItalicUpperLowerOutput.addEventListener("click", () => {
    copyText(
      serifBoldItalicUpperLowerOutput.textContent,
      serifBoldItalicUpperLowerOutput,
      serifBoldItalicUpperLowerCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "serifOutput") {
        copyText(outputElement.textContent, outputElement, serifCopyNote);
      } else if (targetId === "serifLowercaseOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifLowercaseCopyNote,
        );
      } else if (targetId === "serifUppercaseOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifUppercaseCopyNote,
        );
      } else if (targetId === "serifBoldOutput") {
        copyText(outputElement.textContent, outputElement, serifBoldCopyNote);
      } else if (targetId === "serifItalicOutput") {
        copyText(outputElement.textContent, outputElement, serifItalicCopyNote);
      } else if (targetId === "serifBoldItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifBoldItalicCopyNote,
        );
      } else if (targetId === "serifLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifLowerUpperCopyNote,
        );
      } else if (targetId === "serifUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifUpperLowerCopyNote,
        );
      } else if (targetId === "serifBoldLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifBoldLowerUpperCopyNote,
        );
      } else if (targetId === "serifBoldUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifBoldUpperLowerCopyNote,
        );
      } else if (targetId === "serifItalicLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifItalicLowerUpperCopyNote,
        );
      } else if (targetId === "serifItalicUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifItalicUpperLowerCopyNote,
        );
      } else if (targetId === "serifBoldItalicLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifBoldItalicLowerUpperCopyNote,
        );
      } else if (targetId === "serifBoldItalicUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          serifBoldItalicUpperLowerCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
