document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const wideOutput = document.getElementById("wideOutput");
  const alternatingWideFirstOutput = document.getElementById(
    "alternatingWideFirstOutput",
  );
  const alternatingNormalFirstOutput = document.getElementById(
    "alternatingNormalFirstOutput",
  );
  const alternatingWideNormalOutput = document.getElementById(
    "alternatingWideNormalOutput",
  );
  const alternatingUpperLowerWideOutput = document.getElementById(
    "alternatingUpperLowerWideOutput",
  );
  const alternatingLowerUpperWideOutput = document.getElementById(
    "alternatingLowerUpperWideOutput",
  );

  const wideCopyNote = document.getElementById("wideCopyNote");
  const alternatingWideFirstCopyNote = document.getElementById(
    "alternatingWideFirstCopyNote",
  );
  const alternatingNormalFirstCopyNote = document.getElementById(
    "alternatingNormalFirstCopyNote",
  );
  const alternatingWideNormalOutputCopyNote = document.getElementById(
    "alternatingWideNormalOutputCopyNote",
  );
  const alternatingUpperLowerWideCopyNote = document.getElementById(
    "alternatingUpperLowerWideCopyNote",
  );
  const alternatingLowerUpperWideCopyNote = document.getElementById(
    "alternatingLowerUpperWideCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  function isAsciiPrintable(char) {
    const code = char.codePointAt(0);
    return code >= 33 && code <= 126;
  }

  function isLatinLetter(char) {
    const code = char.codePointAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }

  function isAsciiLetterOrDigit(char) {
    const code = char.codePointAt(0);
    return (
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57)
    );
  }

  function toWideChar(char) {
    if (char === " ") {
      return "\u3000";
    }

    if (isAsciiPrintable(char)) {
      return String.fromCodePoint(char.codePointAt(0) + 0xfee0);
    }

    return char;
  }

  function toNormalAsciiSpace(char) {
    if (char === "\u3000") {
      return " ";
    }
    return char;
  }

  function convertWide(text) {
    return Array.from(text)
      .map((char) => toWideChar(char))
      .join("");
  }

  function convertAlternatingWide(text, startWide) {
    let letterIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (char === " ") {
          return "\u3000";
        }

        if (!isAsciiLetterOrDigit(char)) {
          return char;
        }

        const makeWide = startWide
          ? letterIndex % 2 === 0
          : letterIndex % 2 !== 0;

        letterIndex += 1;
        return makeWide ? toWideChar(char) : char;
      })
      .join("");
  }

  function convertAlternatingCaseWide(text, startUpper) {
    let letterIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (char === " ") {
          return "\u3000";
        }

        if (!isLatinLetter(char)) {
          return isAsciiPrintable(char) ? toWideChar(char) : char;
        }

        const shouldBeUpper = startUpper
          ? letterIndex % 2 === 0
          : letterIndex % 2 !== 0;

        const casedChar = shouldBeUpper
          ? char.toUpperCase()
          : char.toLowerCase();

        letterIndex += 1;
        return toWideChar(casedChar);
      })
      .join("");
  }

  function clearCopyNotes() {
    wideCopyNote.textContent = "";
    alternatingWideFirstCopyNote.textContent = "";
    alternatingNormalFirstCopyNote.textContent = "";
    alternatingWideNormalOutputCopyNote.textContent = "";
    alternatingUpperLowerWideCopyNote.textContent = "";
    alternatingLowerUpperWideCopyNote.textContent = "";

    wideOutput.classList.remove("copied");
    alternatingWideFirstOutput.classList.remove("copied");
    alternatingNormalFirstOutput.classList.remove("copied");
    alternatingWideNormalOutput.classList.remove("copied");
    alternatingUpperLowerWideOutput.classList.remove("copied");
    alternatingLowerUpperWideOutput.classList.remove("copied");
  }

  function updateOutputs() {
    let input = inputText.value || "";

    if (typeof normaliseStyledUnicodeToPlain === "function") {
      input = normaliseStyledUnicodeToPlain(input);
    }

    input = Array.from(input)
      .map((char) => toNormalAsciiSpace(char))
      .join("");

    wideOutput.textContent = convertWide(input);

    // Keeping both of these because your HTML currently contains both IDs.
    alternatingWideFirstOutput.textContent = convertAlternatingWide(
      input,
      true,
    );
    alternatingNormalFirstOutput.textContent = convertAlternatingWide(
      input,
      false,
    );
    alternatingWideNormalOutput.textContent = convertAlternatingWide(
      input,
      true,
    );

    alternatingUpperLowerWideOutput.textContent = convertAlternatingCaseWide(
      input,
      true,
    );
    alternatingLowerUpperWideOutput.textContent = convertAlternatingCaseWide(
      input,
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
    inputText.value = "Wide text looks cool 123!";
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

  wideOutput.addEventListener("click", () => {
    copyText(wideOutput.textContent, wideOutput, wideCopyNote);
  });

  alternatingWideFirstOutput.addEventListener("click", () => {
    copyText(
      alternatingWideFirstOutput.textContent,
      alternatingWideFirstOutput,
      alternatingWideFirstCopyNote,
    );
  });

  alternatingNormalFirstOutput.addEventListener("click", () => {
    copyText(
      alternatingNormalFirstOutput.textContent,
      alternatingNormalFirstOutput,
      alternatingNormalFirstCopyNote,
    );
  });

  alternatingWideNormalOutput.addEventListener("click", () => {
    copyText(
      alternatingWideNormalOutput.textContent,
      alternatingWideNormalOutput,
      alternatingWideNormalOutputCopyNote,
    );
  });

  alternatingUpperLowerWideOutput.addEventListener("click", () => {
    copyText(
      alternatingUpperLowerWideOutput.textContent,
      alternatingUpperLowerWideOutput,
      alternatingUpperLowerWideCopyNote,
    );
  });

  alternatingLowerUpperWideOutput.addEventListener("click", () => {
    copyText(
      alternatingLowerUpperWideOutput.textContent,
      alternatingLowerUpperWideOutput,
      alternatingLowerUpperWideCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "wideOutput") {
        copyText(outputElement.textContent, outputElement, wideCopyNote);
      } else if (targetId === "alternatingWideFirstOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingWideFirstCopyNote,
        );
      } else if (targetId === "alternatingNormalFirstOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingNormalFirstCopyNote,
        );
      } else if (targetId === "alternatingWideNormalOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingWideNormalOutputCopyNote,
        );
      } else if (targetId === "alternatingUpperLowerWideOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingUpperLowerWideCopyNote,
        );
      } else if (targetId === "alternatingLowerUpperWideOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingLowerUpperWideCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
