document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const monospaceOutput = document.getElementById("monospaceOutput");
  const monospaceLowercaseOutput = document.getElementById(
    "monospaceLowercaseOutput",
  );
  const monospaceUppercaseOutput = document.getElementById(
    "monospaceUppercaseOutput",
  );
  const monospaceLowerUpperOutput = document.getElementById(
    "monospaceLowerUpperOutput",
  );
  const monospaceUpperLowerOutput = document.getElementById(
    "monospaceUpperLowerOutput",
  );

  const monospaceCopyNote = document.getElementById("monospaceCopyNote");
  const monospaceLowercaseCopyNote = document.getElementById(
    "monospaceLowercaseCopyNote",
  );
  const monospaceUppercaseCopyNote = document.getElementById(
    "monospaceUppercaseCopyNote",
  );
  const monospaceLowerUpperCopyNote = document.getElementById(
    "monospaceLowerUpperCopyNote",
  );
  const monospaceUpperLowerCopyNote = document.getElementById(
    "monospaceUpperLowerCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const MONOSPACE_UPPER_START = 0x1d670; // 𝙰
  const MONOSPACE_LOWER_START = 0x1d68a; // 𝚊
  const MONOSPACE_DIGIT_START = 0x1d7f6; // 𝟶

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

  function mapMonospace(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(MONOSPACE_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(MONOSPACE_LOWER_START + (code - 97));
    }

    if (isDigit(char)) {
      return String.fromCodePoint(MONOSPACE_DIGIT_START + (code - 48));
    }

    return char;
  }

  function convertToMonospace(text) {
    return Array.from(text)
      .map((char) => mapMonospace(char))
      .join("");
  }

  function clearCopyNotes() {
    monospaceCopyNote.textContent = "";
    monospaceLowercaseCopyNote.textContent = "";
    monospaceUppercaseCopyNote.textContent = "";
    monospaceLowerUpperCopyNote.textContent = "";
    monospaceUpperLowerCopyNote.textContent = "";

    monospaceOutput.classList.remove("copied");
    monospaceLowercaseOutput.classList.remove("copied");
    monospaceUppercaseOutput.classList.remove("copied");
    monospaceLowerUpperOutput.classList.remove("copied");
    monospaceUpperLowerOutput.classList.remove("copied");
  }

  function updateOutputs() {
    const input = normaliseStyledUnicodeToPlain(inputText.value || "");

    monospaceOutput.textContent = convertToMonospace(input);
    monospaceLowercaseOutput.textContent = convertToMonospace(
      input.toLowerCase(),
    );
    monospaceUppercaseOutput.textContent = convertToMonospace(
      input.toUpperCase(),
    );
    monospaceLowerUpperOutput.textContent = convertToMonospace(
      alternateCase(input, true),
    );
    monospaceUpperLowerOutput.textContent = convertToMonospace(
      alternateCase(input, false),
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
    inputText.value = "Monospace text 123 Pangram World";
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

  monospaceOutput.addEventListener("click", () => {
    copyText(monospaceOutput.textContent, monospaceOutput, monospaceCopyNote);
  });

  monospaceLowercaseOutput.addEventListener("click", () => {
    copyText(
      monospaceLowercaseOutput.textContent,
      monospaceLowercaseOutput,
      monospaceLowercaseCopyNote,
    );
  });

  monospaceUppercaseOutput.addEventListener("click", () => {
    copyText(
      monospaceUppercaseOutput.textContent,
      monospaceUppercaseOutput,
      monospaceUppercaseCopyNote,
    );
  });

  monospaceLowerUpperOutput.addEventListener("click", () => {
    copyText(
      monospaceLowerUpperOutput.textContent,
      monospaceLowerUpperOutput,
      monospaceLowerUpperCopyNote,
    );
  });

  monospaceUpperLowerOutput.addEventListener("click", () => {
    copyText(
      monospaceUpperLowerOutput.textContent,
      monospaceUpperLowerOutput,
      monospaceUpperLowerCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "monospaceOutput") {
        copyText(outputElement.textContent, outputElement, monospaceCopyNote);
      } else if (targetId === "monospaceLowercaseOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          monospaceLowercaseCopyNote,
        );
      } else if (targetId === "monospaceUppercaseOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          monospaceUppercaseCopyNote,
        );
      } else if (targetId === "monospaceLowerUpperOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          monospaceLowerUpperCopyNote,
        );
      } else if (targetId === "monospaceUpperLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          monospaceUpperLowerCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
