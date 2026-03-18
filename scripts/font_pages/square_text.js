document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const hollowSquareOutput = document.getElementById("hollowSquareOutput");
  const solidSquareOutput = document.getElementById("solidSquareOutput");

  const hollowSquareCopyNote = document.getElementById("hollowSquareCopyNote");
  const solidSquareCopyNote = document.getElementById("solidSquareCopyNote");

  const alternatingSolidHollowOutput = document.getElementById(
    "alternatingSolidHollowOutput",
  );
  const alternatingHollowSolidOutput = document.getElementById(
    "alternatingHollowSolidOutput",
  );

  const alternatingSolidHollowCopyNote = document.getElementById(
    "alternatingSolidHollowCopyNote",
  );
  const alternatingHollowSolidCopyNote = document.getElementById(
    "alternatingHollowSolidCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const HOLLOW_SQUARE_MAP = {
    A: "🄰",
    B: "🄱",
    C: "🄲",
    D: "🄳",
    E: "🄴",
    F: "🄵",
    G: "🄶",
    H: "🄷",
    I: "🄸",
    J: "🄹",
    K: "🄺",
    L: "🄻",
    M: "🄼",
    N: "🄽",
    O: "🄾",
    P: "🄿",
    Q: "🅀",
    R: "🅁",
    S: "🅂",
    T: "🅃",
    U: "🅄",
    V: "🅅",
    W: "🅆",
    X: "🅇",
    Y: "🅈",
    Z: "🅉",
  };

  const SOLID_SQUARE_MAP = {
    A: "🅰",
    B: "🅱",
    C: "🅲",
    D: "🅳",
    E: "🅴",
    F: "🅵",
    G: "🅶",
    H: "🅷",
    I: "🅸",
    J: "🅹",
    K: "🅺",
    L: "🅻",
    M: "🅼",
    N: "🅽",
    O: "🅾",
    P: "🅿",
    Q: "🆀",
    R: "🆁",
    S: "🆂",
    T: "🆃",
    U: "🆄",
    V: "🆅",
    W: "🆆",
    X: "🆇",
    Y: "🆈",
    Z: "🆉",
  };

  function mapHollowSquare(char) {
    const upperChar = char.toUpperCase();
    return HOLLOW_SQUARE_MAP[upperChar] || char;
  }

  function mapSolidSquare(char) {
    const upperChar = char.toUpperCase();
    return SOLID_SQUARE_MAP[upperChar] || char;
  }

  function mapAlternatingCharacter(char, useSolid) {
    const code = char.codePointAt(0);
    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;

    if (isUpper || isLower) {
      return useSolid ? mapSolidSquare(char) : mapHollowSquare(char);
    }

    return null;
  }

  function convertText(text, style) {
    return Array.from(text)
      .map((char) => {
        if (style === "hollowSquare") return mapHollowSquare(char);
        if (style === "solidSquare") return mapSolidSquare(char);
        return char;
      })
      .join("");
  }

  function convertAlternatingSolidHollow(text) {
    let result = "";
    let alternatingIndex = 0;

    for (const char of text) {
      const mapped = mapAlternatingCharacter(char, alternatingIndex % 2 === 0);

      if (mapped !== null) {
        result += mapped;
        alternatingIndex += 1;
      } else {
        result += char;
      }
    }

    return result;
  }

  function convertAlternatingHollowSolid(text) {
    let result = "";
    let alternatingIndex = 0;

    for (const char of text) {
      const mapped = mapAlternatingCharacter(char, alternatingIndex % 2 !== 0);

      if (mapped !== null) {
        result += mapped;
        alternatingIndex += 1;
      } else {
        result += char;
      }
    }

    return result;
  }

  function updateOutputs() {
    const input = normaliseStyledUnicodeToPlain(inputText.value || "");

    hollowSquareOutput.textContent = convertText(input, "hollowSquare");
    solidSquareOutput.textContent = convertText(input, "solidSquare");
    alternatingSolidHollowOutput.textContent =
      convertAlternatingSolidHollow(input);
    alternatingHollowSolidOutput.textContent =
      convertAlternatingHollowSolid(input);

    clearCopyNotes();
  }

  function clearCopyNotes() {
    hollowSquareCopyNote.textContent = "";
    solidSquareCopyNote.textContent = "";
    alternatingSolidHollowCopyNote.textContent = "";
    alternatingHollowSolidCopyNote.textContent = "";

    hollowSquareOutput.classList.remove("copied");
    solidSquareOutput.classList.remove("copied");
    alternatingSolidHollowOutput.classList.remove("copied");
    alternatingHollowSolidOutput.classList.remove("copied");
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
    inputText.value = "Square text is fine";
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

  hollowSquareOutput.addEventListener("click", () => {
    copyText(
      hollowSquareOutput.textContent,
      hollowSquareOutput,
      hollowSquareCopyNote,
    );
  });

  solidSquareOutput.addEventListener("click", () => {
    copyText(
      solidSquareOutput.textContent,
      solidSquareOutput,
      solidSquareCopyNote,
    );
  });

  alternatingSolidHollowOutput.addEventListener("click", () => {
    copyText(
      alternatingSolidHollowOutput.textContent,
      alternatingSolidHollowOutput,
      alternatingSolidHollowCopyNote,
    );
  });

  alternatingHollowSolidOutput.addEventListener("click", () => {
    copyText(
      alternatingHollowSolidOutput.textContent,
      alternatingHollowSolidOutput,
      alternatingHollowSolidCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "hollowSquareOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          hollowSquareCopyNote,
        );
      } else if (targetId === "solidSquareOutput") {
        copyText(outputElement.textContent, outputElement, solidSquareCopyNote);
      } else if (targetId === "alternatingSolidHollowOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingSolidHollowCopyNote,
        );
      } else if (targetId === "alternatingHollowSolidOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingHollowSolidCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
