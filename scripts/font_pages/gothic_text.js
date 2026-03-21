document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const frakturOutput = document.getElementById("frakturOutput");
  const boldFrakturOutput = document.getElementById("boldFrakturOutput");
  const frakturAltLowerUpperOutput = document.getElementById(
    "frakturAltLowerUpperOutput",
  );
  const frakturAltUpperLowerOutput = document.getElementById(
    "frakturAltUpperLowerOutput",
  );
  const frakturAltBoldPlainOutput = document.getElementById(
    "frakturAltBoldPlainOutput",
  );
  const frakturAltPlainBoldOutput = document.getElementById(
    "frakturAltPlainBoldOutput",
  );

  const frakturCopyNote = document.getElementById("frakturCopyNote");
  const boldFrakturCopyNote = document.getElementById("boldFrakturCopyNote");
  const frakturAltLowerUpperCopyNote = document.getElementById(
    "frakturAltLowerUpperCopyNote",
  );
  const frakturAltUpperLowerCopyNote = document.getElementById(
    "frakturAltUpperLowerCopyNote",
  );
  const frakturAltBoldPlainCopyNote = document.getElementById(
    "frakturAltBoldPlainCopyNote",
  );
  const frakturAltPlainBoldCopyNote = document.getElementById(
    "frakturAltPlainBoldCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const FRAKTUR_BOLD_UPPER_START = 0x1d56c; // 𝕬
  const FRAKTUR_BOLD_LOWER_START = 0x1d586; // 𝖆

  const FRAKTUR_UPPER_MAP = {
    A: "𝔄",
    B: "𝔅",
    C: "ℭ",
    D: "𝔇",
    E: "𝔈",
    F: "𝔉",
    G: "𝔊",
    H: "ℌ",
    I: "ℑ",
    J: "𝔍",
    K: "𝔎",
    L: "𝔏",
    M: "𝔐",
    N: "𝔑",
    O: "𝔒",
    P: "𝔓",
    Q: "𝔔",
    R: "ℜ",
    S: "𝔖",
    T: "𝔗",
    U: "𝔘",
    V: "𝔙",
    W: "𝔚",
    X: "𝔛",
    Y: "𝔜",
    Z: "ℨ",
  };

  const FRAKTUR_LOWER_START = 0x1d51e; // 𝔞

  function mapFraktur(char) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;

    if (isUpper) {
      return FRAKTUR_UPPER_MAP[char] || char;
    }

    if (isLower) {
      return String.fromCodePoint(FRAKTUR_LOWER_START + (code - 97));
    }

    return char;
  }

  function mapBoldFraktur(char) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;

    if (isUpper) {
      return String.fromCodePoint(FRAKTUR_BOLD_UPPER_START + (code - 65));
    }

    if (isLower) {
      return String.fromCodePoint(FRAKTUR_BOLD_LOWER_START + (code - 97));
    }

    return char;
  }

  function convertText(text, style) {
    const chars = Array.from(text);

    if (style === "fraktur") {
      return chars.map((char) => mapFraktur(char)).join("");
    }

    if (style === "boldFraktur") {
      return chars.map((char) => mapBoldFraktur(char)).join("");
    }

    if (style === "frakturAltLowerUpper") {
      let letterIndex = 0;

      return chars
        .map((char) => {
          if (!/[A-Za-z]/.test(char)) {
            return char;
          }

          const transformedChar =
            letterIndex % 2 === 0
              ? mapFraktur(char.toLowerCase())
              : mapFraktur(char.toUpperCase());

          letterIndex += 1;
          return transformedChar;
        })
        .join("");
    }

    if (style === "frakturAltUpperLower") {
      let letterIndex = 0;

      return chars
        .map((char) => {
          if (!/[A-Za-z]/.test(char)) {
            return char;
          }

          const transformedChar =
            letterIndex % 2 === 0
              ? mapFraktur(char.toUpperCase())
              : mapFraktur(char.toLowerCase());

          letterIndex += 1;
          return transformedChar;
        })
        .join("");
    }

    if (style === "frakturAltBoldPlain") {
      let letterIndex = 0;

      return chars
        .map((char) => {
          if (!/[A-Za-z]/.test(char)) {
            return char;
          }

          const transformedChar =
            letterIndex % 2 === 0 ? mapBoldFraktur(char) : mapFraktur(char);

          letterIndex += 1;
          return transformedChar;
        })
        .join("");
    }

    if (style === "frakturAltPlainBold") {
      let letterIndex = 0;

      return chars
        .map((char) => {
          if (!/[A-Za-z]/.test(char)) {
            return char;
          }

          const transformedChar =
            letterIndex % 2 === 0 ? mapFraktur(char) : mapBoldFraktur(char);

          letterIndex += 1;
          return transformedChar;
        })
        .join("");
    }

    return text;
  }

  function clearCopyNotes() {
    frakturCopyNote.textContent = "";
    boldFrakturCopyNote.textContent = "";
    frakturAltLowerUpperCopyNote.textContent = "";
    frakturAltUpperLowerCopyNote.textContent = "";
    frakturAltBoldPlainCopyNote.textContent = "";
    frakturAltPlainBoldCopyNote.textContent = "";

    frakturOutput.classList.remove("copied");
    boldFrakturOutput.classList.remove("copied");
    frakturAltLowerUpperOutput.classList.remove("copied");
    frakturAltUpperLowerOutput.classList.remove("copied");
    frakturAltBoldPlainOutput.classList.remove("copied");
    frakturAltPlainBoldOutput.classList.remove("copied");
  }

  function updateOutputs() {
    const input = normaliseStyledUnicodeToPlain(inputText.value || "");

    frakturOutput.textContent = convertText(input, "fraktur");
    boldFrakturOutput.textContent = convertText(input, "boldFraktur");
    frakturAltLowerUpperOutput.textContent = convertText(
      input,
      "frakturAltLowerUpper",
    );
    frakturAltUpperLowerOutput.textContent = convertText(
      input,
      "frakturAltUpperLower",
    );
    frakturAltBoldPlainOutput.textContent = convertText(
      input,
      "frakturAltBoldPlain",
    );
    frakturAltPlainBoldOutput.textContent = convertText(
      input,
      "frakturAltPlainBold",
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
    inputText.value = "Gothic text for Pangram World";
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

  frakturOutput.addEventListener("click", () => {
    copyText(frakturOutput.textContent, frakturOutput, frakturCopyNote);
  });

  boldFrakturOutput.addEventListener("click", () => {
    copyText(
      boldFrakturOutput.textContent,
      boldFrakturOutput,
      boldFrakturCopyNote,
    );
  });

  frakturAltLowerUpperOutput.addEventListener("click", () => {
    copyText(
      frakturAltLowerUpperOutput.textContent,
      frakturAltLowerUpperOutput,
      frakturAltLowerUpperCopyNote,
    );
  });

  frakturAltUpperLowerOutput.addEventListener("click", () => {
    copyText(
      frakturAltUpperLowerOutput.textContent,
      frakturAltUpperLowerOutput,
      frakturAltUpperLowerCopyNote,
    );
  });

  frakturAltBoldPlainOutput.addEventListener("click", () => {
    copyText(
      frakturAltBoldPlainOutput.textContent,
      frakturAltBoldPlainOutput,
      frakturAltBoldPlainCopyNote,
    );
  });

  frakturAltPlainBoldOutput.addEventListener("click", () => {
    copyText(
      frakturAltPlainBoldOutput.textContent,
      frakturAltPlainBoldOutput,
      frakturAltPlainBoldCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "frakturOutput") {
        copyText(outputElement.textContent, outputElement, frakturCopyNote);
      } else if (targetId === "boldFrakturOutput") {
        copyText(outputElement.textContent, outputElement, boldFrakturCopyNote);
      } else if (targetId === "frakturAltLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          frakturAltLowerUpperCopyNote,
        );
      } else if (targetId === "frakturAltUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          frakturAltUpperLowerCopyNote,
        );
      } else if (targetId === "frakturAltBoldPlainOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          frakturAltBoldPlainCopyNote,
        );
      } else if (targetId === "frakturAltPlainBoldOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          frakturAltPlainBoldCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
