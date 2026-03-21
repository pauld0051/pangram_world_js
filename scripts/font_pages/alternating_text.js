document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const outputConfig = [
    ["standardLowerUpperOutput", "standardLowerUpperCopyNote"],
    ["standardUpperLowerOutput", "standardUpperLowerCopyNote"],
    ["boldLowerUpperOutput", "boldLowerUpperCopyNote"],
    ["boldUpperLowerOutput", "boldUpperLowerCopyNote"],
    ["italicLowerUpperOutput", "italicLowerUpperCopyNote"],
    ["italicUpperLowerOutput", "italicUpperLowerCopyNote"],
    ["monospaceLowerUpperOutput", "monospaceLowerUpperCopyNote"],
    ["monospaceUpperLowerOutput", "monospaceUpperLowerCopyNote"],
    ["wideLowerUpperOutput", "wideLowerUpperCopyNote"],
    ["wideUpperLowerOutput", "wideUpperLowerCopyNote"],
    ["squareLowerUpperOutput", "squareLowerUpperCopyNote"],
    ["squareUpperLowerOutput", "squareUpperLowerCopyNote"],
    ["circleLowerUpperOutput", "circleLowerUpperCopyNote"],
    ["circleUpperLowerOutput", "circleUpperLowerCopyNote"],
    ["scriptLowerUpperOutput", "scriptLowerUpperCopyNote"],
    ["scriptUpperLowerOutput", "scriptUpperLowerCopyNote"],
    ["gothicLowerUpperOutput", "gothicLowerUpperCopyNote"],
    ["gothicUpperLowerOutput", "gothicUpperLowerCopyNote"],
  ];

  const outputs = Object.fromEntries(
    outputConfig.map(([outputId, noteId]) => [
      outputId,
      {
        element: document.getElementById(outputId),
        note: document.getElementById(noteId),
      },
    ]),
  );

  const BOLD_UPPER_START = 0x1d5d4; // 𝗔
  const BOLD_LOWER_START = 0x1d5ee; // 𝗮
  const BOLD_DIGIT_START = 0x1d7ec; // 𝟬

  const ITALIC_UPPER_START = 0x1d434; // 𝐴
  const ITALIC_LOWER_START = 0x1d44e; // 𝑎

  const MONOSPACE_UPPER_START = 0x1d670; // 𝙰
  const MONOSPACE_LOWER_START = 0x1d68a; // 𝚊
  const MONOSPACE_DIGIT_START = 0x1d7f6; // 𝟶

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

  const SQUARED_UPPER_MAP = {
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

  function toFullWidth(char) {
    if (char === " ") {
      return " ";
    }

    const code = char.codePointAt(0);

    if (code >= 33 && code <= 126) {
      return String.fromCodePoint(code + 0xfee0);
    }

    return char;
  }

  function mapBold(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(BOLD_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(BOLD_LOWER_START + (code - 97));
    }

    if (isDigit(char)) {
      return String.fromCodePoint(BOLD_DIGIT_START + (code - 48));
    }

    return char;
  }

  function mapItalic(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(ITALIC_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(ITALIC_LOWER_START + (code - 97));
    }

    return char;
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

  function mapWide(char) {
    return toFullWidth(char);
  }

  function mapSquare(char) {
    if (isAsciiUpper(char)) {
      return SQUARED_UPPER_MAP[char] || char;
    }

    if (isAsciiLower(char)) {
      return SQUARED_UPPER_MAP[char.toUpperCase()] || char;
    }

    return char;
  }

  function mapCircle(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return String.fromCodePoint(CIRCLED_UPPER_START + (code - 65));
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(CIRCLED_LOWER_START + (code - 97));
    }

    if (isDigit(char)) {
      return CIRCLED_DIGIT_MAP[char] || char;
    }

    return char;
  }

  function mapScript(char) {
    if (isAsciiUpper(char)) {
      return SCRIPT_UPPER_MAP[char] || char;
    }

    if (isAsciiLower(char)) {
      return SCRIPT_LOWER_MAP[char] || char;
    }

    return char;
  }

  function mapGothic(char) {
    const code = char.codePointAt(0);

    if (isAsciiUpper(char)) {
      return FRAKTUR_UPPER_MAP[char] || char;
    }

    if (isAsciiLower(char)) {
      return String.fromCodePoint(FRAKTUR_LOWER_START + (code - 97));
    }

    return char;
  }

  function applyStyle(text, style) {
    const chars = Array.from(text);

    if (style === "standard") {
      return text;
    }

    if (style === "bold") {
      return chars.map((char) => mapBold(char)).join("");
    }

    if (style === "italic") {
      return chars.map((char) => mapItalic(char)).join("");
    }

    if (style === "monospace") {
      return chars.map((char) => mapMonospace(char)).join("");
    }

    if (style === "wide") {
      return chars.map((char) => mapWide(char)).join("");
    }

    if (style === "square") {
      return chars.map((char) => mapSquare(char)).join("");
    }

    if (style === "circle") {
      return chars.map((char) => mapCircle(char)).join("");
    }

    if (style === "script") {
      return chars.map((char) => mapScript(char)).join("");
    }

    if (style === "gothic") {
      return chars.map((char) => mapGothic(char)).join("");
    }

    return text;
  }

  function buildAlternatingStyledText(input, style, startLower) {
    const alternated = alternateCase(input, startLower);
    return applyStyle(alternated, style);
  }

  function clearCopyNotes() {
    Object.values(outputs).forEach(({ element, note }) => {
      note.textContent = "";
      element.classList.remove("copied");
    });
  }

  function updateOutputs() {
    const input = normaliseStyledUnicodeToPlain(inputText.value || "");

    outputs.standardLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "standard", true);
    outputs.standardUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "standard", false);

    outputs.boldLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "bold", true);
    outputs.boldUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "bold", false);

    outputs.italicLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "italic", true);
    outputs.italicUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "italic", false);

    outputs.monospaceLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "monospace", true);
    outputs.monospaceUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "monospace", false);

    outputs.wideLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "wide", true);
    outputs.wideUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "wide", false);

    outputs.squareLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "square", true);
    outputs.squareUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "square", false);

    outputs.circleLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "circle", true);
    outputs.circleUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "circle", false);

    outputs.scriptLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "script", true);
    outputs.scriptUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "script", false);

    outputs.gothicLowerUpperOutput.element.textContent =
      buildAlternatingStyledText(input, "gothic", true);
    outputs.gothicUpperLowerOutput.element.textContent =
      buildAlternatingStyledText(input, "gothic", false);

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
    inputText.value = "Pangram World alternating text";
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

  Object.values(outputs).forEach(({ element, note }) => {
    element.addEventListener("click", () => {
      copyText(element.textContent, element, note);
    });
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const target = outputs[targetId];

      if (!target) {
        return;
      }

      copyText(target.element.textContent, target.element, target.note);
    });
  });

  updateOutputs();
});
