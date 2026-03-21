document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const scriptOutput = document.getElementById("scriptOutput");
  const boldScriptOutput = document.getElementById("boldScriptOutput");
  const alternatingBoldScriptFirstOutput = document.getElementById(
    "alternatingBoldScriptFirstOutput",
  );
  const alternatingScriptFirstOutput = document.getElementById(
    "alternatingScriptFirstOutput",
  );
  const alternatingCapsOutput = document.getElementById(
    "alternatingCapsOutput",
  );
  const alternatingLowerOutput = document.getElementById(
    "alternatingLowerOutput",
  );

  const legacyScriptOutput = document.getElementById("legacyScriptOutput");
  const legacyBoldScriptOutput = document.getElementById(
    "legacyBoldScriptOutput",
  );

  const scriptCopyNote = document.getElementById("scriptCopyNote");
  const boldScriptCopyNote = document.getElementById("boldScriptCopyNote");
  const alternatingBoldScriptFirstCopyNote = document.getElementById(
    "alternatingBoldScriptFirstCopyNote",
  );
  const alternatingScriptFirstCopyNote = document.getElementById(
    "alternatingScriptFirstCopyNote",
  );
  const alternatingCapsCopyNote = document.getElementById(
    "alternatingCapsCopyNote",
  );
  const alternatingLowerCopyNote = document.getElementById(
    "alternatingLowerCopyNote",
  );

  const legacyScriptCopyNote = document.getElementById("legacyScriptCopyNote");
  const legacyBoldScriptCopyNote = document.getElementById(
    "legacyBoldScriptCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const SCRIPT_UPPER_MAP = {
    A: "𝒜",
    B: "ℬ",
    C: "𝒞",
    D: "𝒟",
    E: "ℰ",
    F: "ℱ",
    G: "𝒢",
    H: "ℋ",
    I: "ℐ",
    J: "𝒥",
    K: "𝒦",
    L: "ℒ",
    M: "ℳ",
    N: "𝒩",
    O: "𝒪",
    P: "𝒫",
    Q: "𝒬",
    R: "ℛ",
    S: "𝒮",
    T: "𝒯",
    U: "𝒰",
    V: "𝒱",
    W: "𝒲",
    X: "𝒳",
    Y: "𝒴",
    Z: "𝒵",
  };

  const SCRIPT_LOWER_MAP = {
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "ℯ",
    f: "𝒻",
    g: "ℊ",
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "ℴ",
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
  };

  const LEGACY_SCRIPT_MAP = {
    B: "ℬ",
    E: "ℰ",
    F: "ℱ",
    H: "ℋ",
    I: "ℐ",
    L: "ℒ",
    M: "ℳ",
    R: "ℛ",
    e: "ℯ",
    g: "ℊ",
    o: "ℴ",
  };

  const BOLD_SCRIPT_UPPER_START = 0x1d4d0; // 𝓐
  const BOLD_SCRIPT_LOWER_START = 0x1d4ea; // 𝓪

  function isUpperLatin(char) {
    const code = char.codePointAt(0);
    return code >= 65 && code <= 90;
  }

  function isLowerLatin(char) {
    const code = char.codePointAt(0);
    return code >= 97 && code <= 122;
  }

  function isLatinLetter(char) {
    return isUpperLatin(char) || isLowerLatin(char);
  }

  function toScriptChar(char) {
    if (isUpperLatin(char)) {
      return SCRIPT_UPPER_MAP[char] || char;
    }

    if (isLowerLatin(char)) {
      return SCRIPT_LOWER_MAP[char] || char;
    }

    return char;
  }

  function toBoldScriptChar(char) {
    if (isUpperLatin(char)) {
      return String.fromCodePoint(
        BOLD_SCRIPT_UPPER_START + (char.codePointAt(0) - 65),
      );
    }

    if (isLowerLatin(char)) {
      return String.fromCodePoint(
        BOLD_SCRIPT_LOWER_START + (char.codePointAt(0) - 97),
      );
    }

    return char;
  }

  function toLegacyScriptChar(char) {
    if (LEGACY_SCRIPT_MAP[char]) {
      return LEGACY_SCRIPT_MAP[char];
    }

    return toScriptChar(char);
  }

  function toLegacyBoldScriptChar(char) {
    // Unicode does not really provide a proper separate legacy bold script subset.
    // Where bold script exists, use it. Otherwise leave the character alone.
    if (isLatinLetter(char)) {
      return toBoldScriptChar(char);
    }

    return char;
  }

  function convertText(text, style) {
    if (style === "script") {
      return Array.from(text)
        .map((char) => toScriptChar(char))
        .join("");
    }

    if (style === "boldScript") {
      return Array.from(text)
        .map((char) => toBoldScriptChar(char))
        .join("");
    }

    if (style === "legacyScript") {
      return Array.from(text)
        .map((char) => toLegacyScriptChar(char))
        .join("");
    }

    if (style === "legacyBoldScript") {
      return Array.from(text)
        .map((char) => toLegacyBoldScriptChar(char))
        .join("");
    }

    return text;
  }

  function convertAlternatingScriptStyles(text, startWithBold) {
    let letterIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (!isLatinLetter(char)) {
          return char;
        }

        const useBold = startWithBold
          ? letterIndex % 2 === 0
          : letterIndex % 2 !== 0;

        letterIndex += 1;
        return useBold ? toBoldScriptChar(char) : toScriptChar(char);
      })
      .join("");
  }

  function convertAlternatingScriptCase(text, startUpper) {
    let letterIndex = 0;

    return Array.from(text)
      .map((char) => {
        if (!isLatinLetter(char)) {
          return char;
        }

        const shouldBeUpper = startUpper
          ? letterIndex % 2 === 0
          : letterIndex % 2 !== 0;

        const plainLetter = shouldBeUpper
          ? char.toUpperCase()
          : char.toLowerCase();

        letterIndex += 1;
        return toScriptChar(plainLetter);
      })
      .join("");
  }

  function clearCopyNotes() {
    if (scriptCopyNote) scriptCopyNote.textContent = "";
    if (boldScriptCopyNote) boldScriptCopyNote.textContent = "";
    if (alternatingBoldScriptFirstCopyNote) {
      alternatingBoldScriptFirstCopyNote.textContent = "";
    }
    if (alternatingScriptFirstCopyNote) {
      alternatingScriptFirstCopyNote.textContent = "";
    }
    if (alternatingCapsCopyNote) alternatingCapsCopyNote.textContent = "";
    if (alternatingLowerCopyNote) alternatingLowerCopyNote.textContent = "";
    if (legacyScriptCopyNote) legacyScriptCopyNote.textContent = "";
    if (legacyBoldScriptCopyNote) legacyBoldScriptCopyNote.textContent = "";

    if (scriptOutput) scriptOutput.classList.remove("copied");
    if (boldScriptOutput) boldScriptOutput.classList.remove("copied");
    if (alternatingBoldScriptFirstOutput) {
      alternatingBoldScriptFirstOutput.classList.remove("copied");
    }
    if (alternatingScriptFirstOutput) {
      alternatingScriptFirstOutput.classList.remove("copied");
    }
    if (alternatingCapsOutput) alternatingCapsOutput.classList.remove("copied");
    if (alternatingLowerOutput) {
      alternatingLowerOutput.classList.remove("copied");
    }
    if (legacyScriptOutput) legacyScriptOutput.classList.remove("copied");
    if (legacyBoldScriptOutput) {
      legacyBoldScriptOutput.classList.remove("copied");
    }
  }

  function updateOutputs() {
    const input =
      typeof normaliseStyledUnicodeToPlain === "function"
        ? normaliseStyledUnicodeToPlain(inputText.value || "")
        : inputText.value || "";

    if (scriptOutput) {
      scriptOutput.textContent = convertText(input, "script");
    }

    if (boldScriptOutput) {
      boldScriptOutput.textContent = convertText(input, "boldScript");
    }

    if (alternatingBoldScriptFirstOutput) {
      alternatingBoldScriptFirstOutput.textContent =
        convertAlternatingScriptStyles(input, true);
    }

    if (alternatingScriptFirstOutput) {
      alternatingScriptFirstOutput.textContent = convertAlternatingScriptStyles(
        input,
        false,
      );
    }

    if (alternatingCapsOutput) {
      alternatingCapsOutput.textContent = convertAlternatingScriptCase(
        input,
        true,
      );
    }

    if (alternatingLowerOutput) {
      alternatingLowerOutput.textContent = convertAlternatingScriptCase(
        input,
        false,
      );
    }

    if (legacyScriptOutput) {
      legacyScriptOutput.textContent = convertText(input, "legacyScript");
    }

    if (legacyBoldScriptOutput) {
      legacyBoldScriptOutput.textContent = convertText(
        input,
        "legacyBoldScript",
      );
    }

    clearCopyNotes();
  }

  async function copyText(text, outputElement, noteElement) {
    if (!text.trim()) {
      if (noteElement) {
        noteElement.textContent = "Nothing to copy yet.";
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(text);

      if (noteElement) {
        noteElement.textContent = "Copied to clipboard.";
      }

      if (outputElement) {
        outputElement.classList.add("copied");
      }

      setTimeout(() => {
        if (noteElement) {
          noteElement.textContent = "";
        }

        if (outputElement) {
          outputElement.classList.remove("copied");
        }
      }, 1500);
    } catch (error) {
      if (noteElement) {
        noteElement.textContent = "Copy failed. Please copy manually.";
      }
    }
  }

  inputText.addEventListener("input", updateOutputs);

  clearButton.addEventListener("click", () => {
    inputText.value = "";
    updateOutputs();
    inputText.focus();
  });

  pasteExampleButton.addEventListener("click", () => {
    inputText.value = "Berg oMega Role";
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

  if (scriptOutput) {
    scriptOutput.addEventListener("click", () => {
      copyText(scriptOutput.textContent, scriptOutput, scriptCopyNote);
    });
  }

  if (boldScriptOutput) {
    boldScriptOutput.addEventListener("click", () => {
      copyText(
        boldScriptOutput.textContent,
        boldScriptOutput,
        boldScriptCopyNote,
      );
    });
  }

  if (alternatingBoldScriptFirstOutput) {
    alternatingBoldScriptFirstOutput.addEventListener("click", () => {
      copyText(
        alternatingBoldScriptFirstOutput.textContent,
        alternatingBoldScriptFirstOutput,
        alternatingBoldScriptFirstCopyNote,
      );
    });
  }

  if (alternatingScriptFirstOutput) {
    alternatingScriptFirstOutput.addEventListener("click", () => {
      copyText(
        alternatingScriptFirstOutput.textContent,
        alternatingScriptFirstOutput,
        alternatingScriptFirstCopyNote,
      );
    });
  }

  if (alternatingCapsOutput) {
    alternatingCapsOutput.addEventListener("click", () => {
      copyText(
        alternatingCapsOutput.textContent,
        alternatingCapsOutput,
        alternatingCapsCopyNote,
      );
    });
  }

  if (alternatingLowerOutput) {
    alternatingLowerOutput.addEventListener("click", () => {
      copyText(
        alternatingLowerOutput.textContent,
        alternatingLowerOutput,
        alternatingLowerCopyNote,
      );
    });
  }

  if (legacyScriptOutput) {
    legacyScriptOutput.addEventListener("click", () => {
      copyText(
        legacyScriptOutput.textContent,
        legacyScriptOutput,
        legacyScriptCopyNote,
      );
    });
  }

  if (legacyBoldScriptOutput) {
    legacyBoldScriptOutput.addEventListener("click", () => {
      copyText(
        legacyBoldScriptOutput.textContent,
        legacyBoldScriptOutput,
        legacyBoldScriptCopyNote,
      );
    });
  }

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "scriptOutput") {
        copyText(outputElement.textContent, outputElement, scriptCopyNote);
      } else if (targetId === "boldScriptOutput") {
        copyText(outputElement.textContent, outputElement, boldScriptCopyNote);
      } else if (targetId === "alternatingBoldScriptFirstOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingBoldScriptFirstCopyNote,
        );
      } else if (targetId === "alternatingScriptFirstOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingScriptFirstCopyNote,
        );
      } else if (targetId === "alternatingCapsOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingCapsCopyNote,
        );
      } else if (targetId === "alternatingLowerOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          alternatingLowerCopyNote,
        );
      } else if (targetId === "legacyScriptOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          legacyScriptCopyNote,
        );
      } else if (targetId === "legacyBoldScriptOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          legacyBoldScriptCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
