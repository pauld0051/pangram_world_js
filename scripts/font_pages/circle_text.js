document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const circledOutput = document.getElementById("circledOutput");
  const squaredOutput = document.getElementById("squaredOutput");

  const circledCopyNote = document.getElementById("circledCopyNote");
  const squaredCopyNote = document.getElementById("squaredCopyNote");
  
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

  const CIRCLED_UPPER_START = 0x24b6; // Ⓐ
  const CIRCLED_LOWER_START = 0x24d0; // ⓐ

  const CIRCLED_DIGIT_MAP = {
    0: "⓪",
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥",
    7: "⑦",
    8: "⑧",
    9: "⑨",
  };

  const SQUARED_MAP = {
    A: "🅐",
    B: "🅑",
    C: "🅒",
    D: "🅓",
    E: "🅔",
    F: "🅕",
    G: "🅖",
    H: "🅗",
    I: "🅘",
    J: "🅙",
    K: "🅚",
    L: "🅛",
    M: "🅜",
    N: "🅝",
    O: "🅞",
    P: "🅟",
    Q: "🅠",
    R: "🅡",
    S: "🅢",
    T: "🅣",
    U: "🅤",
    V: "🅥",
    W: "🅦",
    X: "🅧",
    Y: "🅨",
    Z: "🅩",
    };
    
    const NEGATIVE_CIRCLED_DIGIT_MAP = {
      1: "❶",
      2: "❷",
      3: "❸",
      4: "❹",
      5: "❺",
      6: "❻",
      7: "❼",
      8: "❽",
      9: "❾",
      10: "❿",
      0: "⓿",
    };

  function mapCircled(char) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;
    const isDigit = code >= 48 && code <= 57;

    if (isUpper) {
      return String.fromCodePoint(CIRCLED_UPPER_START + (code - 65));
    }

    if (isLower) {
      return String.fromCodePoint(CIRCLED_LOWER_START + (code - 97));
    }

    if (isDigit) {
      return CIRCLED_DIGIT_MAP[char] || char;
    }

    return char;
  }

  function mapSquared(char) {
    const upperChar = char.toUpperCase();

    if (SQUARED_MAP[upperChar]) {
      return SQUARED_MAP[upperChar];
    }

    if (NEGATIVE_CIRCLED_DIGIT_MAP[char]) {
      return NEGATIVE_CIRCLED_DIGIT_MAP[char];
    }

    return char;
    }
    
    function mapAlternatingCharacter(char, useSolid) {
      const code = char.codePointAt(0);

      const isUpper = code >= 65 && code <= 90;
      const isLower = code >= 97 && code <= 122;
      const isDigit = code >= 48 && code <= 57;

      if (isUpper || isLower) {
        if (useSolid) {
          return SQUARED_MAP[char.toUpperCase()] || char;
        }
        return mapCircled(char);
      }

      if (isDigit) {
        if (useSolid) {
          return NEGATIVE_CIRCLED_DIGIT_MAP[char] || char;
        }
        return CIRCLED_DIGIT_MAP[char] || char;
      }

      return null;
    }

  function convertText(text, style) {
    return Array.from(text)
      .map((char) => {
        if (style === "circled") return mapCircled(char);
        if (style === "squared") return mapSquared(char);
        return char;
      })
      .join("");
    }
    
    function convertAlternatingSolidHollow(text) {
      let result = "";
      let alternatingIndex = 0;

      for (const char of text) {
        const mapped = mapAlternatingCharacter(
          char,
          alternatingIndex % 2 === 0,
        );

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
        const mapped = mapAlternatingCharacter(
          char,
          alternatingIndex % 2 !== 0,
        );

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
    const input = inputText.value || "";

    circledOutput.textContent = convertText(input, "circled");
    squaredOutput.textContent = convertText(input, "squared");
    alternatingSolidHollowOutput.textContent =
      convertAlternatingSolidHollow(input);
    alternatingHollowSolidOutput.textContent =
      convertAlternatingHollowSolid(input);

    clearCopyNotes();
  }

  function clearCopyNotes() {
    circledCopyNote.textContent = "";
    squaredCopyNote.textContent = "";
    alternatingSolidHollowCopyNote.textContent = "";
    alternatingHollowSolidCopyNote.textContent = "";

    circledOutput.classList.remove("copied");
    squaredOutput.classList.remove("copied");
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
    inputText.value = "I think this is bubble text... but circle text is fine";
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

  circledOutput.addEventListener("click", () => {
    copyText(circledOutput.textContent, circledOutput, circledCopyNote);
  });

  squaredOutput.addEventListener("click", () => {
    copyText(squaredOutput.textContent, squaredOutput, squaredCopyNote);
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

      if (targetId === "circledOutput") {
        copyText(outputElement.textContent, outputElement, circledCopyNote);
      } else if (targetId === "squaredOutput") {
        copyText(outputElement.textContent, outputElement, squaredCopyNote);
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
