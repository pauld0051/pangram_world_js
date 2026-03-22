document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const mirrorOutput = document.getElementById("mirrorOutput");
  const reverseMirrorOutput = document.getElementById("reverseMirrorOutput");
  const mirrorBoldOutput = document.getElementById("mirrorBoldOutput");
  const mirrorItalicOutput = document.getElementById("mirrorItalicOutput");
  const mirrorBoldItalicOutput = document.getElementById(
    "mirrorBoldItalicOutput",
  );
  const reverseOutput = document.getElementById("reverseOutput");

  const mirrorCopyNote = document.getElementById("mirrorCopyNote");
  const reverseMirrorCopyNote = document.getElementById(
    "reverseMirrorCopyNote",
  );
  const mirrorBoldCopyNote = document.getElementById("mirrorBoldCopyNote");
  const mirrorItalicCopyNote = document.getElementById("mirrorItalicCopyNote");
  const mirrorBoldItalicCopyNote = document.getElementById(
    "mirrorBoldItalicCopyNote",
  );
  const reverseCopyNote = document.getElementById("reverseCopyNote");

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const BOLD_UPPER_START = 0x1d5d4; // 𝗔
  const BOLD_LOWER_START = 0x1d5ee; // 𝗮
  const BOLD_DIGIT_START = 0x1d7ec; // 𝟬

  const ITALIC_UPPER_START = 0x1d608; // 𝘈
  const ITALIC_LOWER_START = 0x1d622; // 𝘢

  const BOLD_ITALIC_UPPER_START = 0x1d63c; // 𝘼
  const BOLD_ITALIC_LOWER_START = 0x1d656; // 𝙖
  const BOLD_ITALIC_DIGIT_START = 0x1d7ec; // 𝟬

  const MIRROR_MAP = {
    A: "A",
    B: "ᙠ",
    C: "Ↄ",
    D: "ᗡ",
    E: "Ǝ",
    F: "ꟻ",
    G: "Ꭾ",
    H: "H",
    I: "I",
    J: "Ⴑ",
    K: "⋊",
    L: "⅃",
    M: "M",
    N: "И",
    O: "O",
    P: "ꟼ",
    Q: "Ọ",
    R: "Я",
    S: "Ꙅ",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "⅄",
    Z: "Ƹ",

    a: "ɒ",
    b: "d",
    c: "ɔ",
    d: "b",
    e: "ɘ",
    f: "Ꮈ",
    g: "ǫ",
    h: "ʜ",
    i: "i",
    j: "ꞁ",
    k: "ʞ",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "q",
    q: "p",
    r: "ɿ",
    s: "ꙅ",
    t: "ƚ",
    u: "υ",
    v: "v",
    w: "w",
    x: "x",
    y: "γ",
    z: "z",

    0: "0",
    1: "1",
    2: "2",
    3: "Ɛ",
    4: "4",
    5: "5",
    6: "9",
    7: "7",
    8: "8",
    9: "6",

    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "«": "»",
    "»": "«",
    "/": "\\",
    "\\": "/",
  };

  const MIRROR_BOLD_MAP = {
    A: "𝗔",
    B: "ᗺ",
    C: "Ↄ",
    D: "ᗡ",
    E: "Ǝ",
    F: "ꟻ",
    G: "𝗚",
    H: "𝗛",
    I: "𝗜",
    J: "𝗝",
    K: "⋊",
    L: "⅃",
    M: "𝗠",
    N: "И",
    O: "𝗢",
    P: "ꟼ",
    Q: "𝗤",
    R: "Я",
    S: "Ꙅ",
    T: "𝗧",
    U: "𝗨",
    V: "𝗩",
    W: "𝗪",
    X: "𝗫",
    Y: "⅄",
    Z: "Ƹ",

    a: "𝗮",
    b: "𝗱",
    c: "ɔ",
    d: "𝗯",
    e: "ɘ",
    f: "𝗳",
    g: "𝗴",
    h: "𝗵",
    i: "𝗶",
    j: "𝗷",
    k: "ʞ",
    l: "𝗹",
    m: "𝗺",
    n: "𝗻",
    o: "𝗼",
    p: "𝗾",
    q: "𝗽",
    r: "ɿ",
    s: "ꙅ",
    t: "ƚ",
    u: "𝘂",
    v: "𝘃",
    w: "𝘄",
    x: "𝘅",
    y: "γ",
    z: "𝘇",

    0: "𝟬",
    1: "𝟭",
    2: "𝟮",
    3: "Ɛ",
    4: "𝟰",
    5: "𝟱",
    6: "𝟵",
    7: "𝟳",
    8: "𝟴",
    9: "𝟲",

    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "«": "»",
    "»": "«",
    "/": "\\",
    "\\": "/",
  };

  const MIRROR_ITALIC_MAP = {
    A: "𝘈",
    B: "ᗺ",
    C: "Ↄ",
    D: "ᗡ",
    E: "Ǝ",
    F: "ꟻ",
    G: "𝘎",
    H: "𝘏",
    I: "𝘐",
    J: "𝘑",
    K: "⋊",
    L: "⅃",
    M: "𝘔",
    N: "И",
    O: "𝘖",
    P: "ꟼ",
    Q: "𝘘",
    R: "Я",
    S: "Ꙅ",
    T: "𝘛",
    U: "𝘜",
    V: "𝘝",
    W: "𝘞",
    X: "𝘟",
    Y: "⅄",
    Z: "Ƹ",

    a: "𝘢",
    b: "𝘥",
    c: "ɔ",
    d: "𝘣",
    e: "ɘ",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "ʞ",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘲",
    q: "𝘱",
    r: "ɿ",
    s: "ꙅ",
    t: "ƚ",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "γ",
    z: "𝘻",

    0: "0",
    1: "1",
    2: "2",
    3: "Ɛ",
    4: "4",
    5: "5",
    6: "9",
    7: "7",
    8: "8",
    9: "6",

    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "«": "»",
    "»": "«",
    "/": "\\",
    "\\": "/",
  };

  const MIRROR_BOLD_ITALIC_MAP = {
    A: "𝘼",
    B: "ᗺ",
    C: "Ↄ",
    D: "ᗡ",
    E: "Ǝ",
    F: "ꟻ",
    G: "𝙂",
    H: "𝙃",
    I: "𝙄",
    J: "𝙅",
    K: "⋊",
    L: "⅃",
    M: "𝙈",
    N: "И",
    O: "𝙊",
    P: "ꟼ",
    Q: "𝙌",
    R: "Я",
    S: "Ꙅ",
    T: "𝙏",
    U: "𝙐",
    V: "𝙑",
    W: "𝙒",
    X: "𝙓",
    Y: "⅄",
    Z: "Ƹ",

    a: "𝙖",
    b: "𝙙",
    c: "ɔ",
    d: "𝙗",
    e: "ɘ",
    f: "𝙛",
    g: "𝙜",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "ʞ",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "𝙤",
    p: "𝙦",
    q: "𝙥",
    r: "ɿ",
    s: "ꙅ",
    t: "ƚ",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝙭",
    y: "γ",
    z: "𝙯",

    0: "𝟬",
    1: "𝟭",
    2: "𝟮",
    3: "Ɛ",
    4: "𝟰",
    5: "𝟱",
    6: "𝟵",
    7: "𝟳",
    8: "𝟴",
    9: "𝟲",

    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "«": "»",
    "»": "«",
    "/": "\\",
    "\\": "/",
  };

  function mapLatinOrDigit(char, style) {
    const code = char.codePointAt(0);

    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;
    const isDigit = code >= 48 && code <= 57;

    if (style === "bold") {
      if (isUpper) return String.fromCodePoint(BOLD_UPPER_START + (code - 65));
      if (isLower) return String.fromCodePoint(BOLD_LOWER_START + (code - 97));
      if (isDigit) return String.fromCodePoint(BOLD_DIGIT_START + (code - 48));
    }

    if (style === "italic") {
      if (isUpper)
        return String.fromCodePoint(ITALIC_UPPER_START + (code - 65));
      if (isLower)
        return String.fromCodePoint(ITALIC_LOWER_START + (code - 97));
    }

    if (style === "boldItalic") {
      if (isUpper)
        return String.fromCodePoint(BOLD_ITALIC_UPPER_START + (code - 65));
      if (isLower)
        return String.fromCodePoint(BOLD_ITALIC_LOWER_START + (code - 97));
      if (isDigit)
        return String.fromCodePoint(BOLD_ITALIC_DIGIT_START + (code - 48));
    }

    return null;
  }

  function convertText(text, style) {
    return Array.from(text)
      .map((char) => mapLatinOrDigit(char, style) || char)
      .join("");
  }

  function mirrorText(text, map) {
    return Array.from(text)
      .map((char) => map[char] || char)
      .join("");
  }

  function reverseText(text) {
    return Array.from(text).reverse().join("");
  }

  function reverseMirrorText(text, map) {
    return Array.from(text)
      .reverse()
      .map((char) => map[char] || char)
      .join("");
  }

  function normaliseInput(text) {
    if (typeof normaliseStyledUnicodeToPlain === "function") {
      return normaliseStyledUnicodeToPlain(text || "");
    }
    return text || "";
  }

  function updateOutputs() {
    const input = normaliseInput(inputText.value || "");

    mirrorOutput.textContent = mirrorText(input, MIRROR_MAP);
    reverseMirrorOutput.textContent = reverseMirrorText(input, MIRROR_MAP);
    mirrorBoldOutput.textContent = mirrorText(
      convertText(input, "bold"),
      MIRROR_BOLD_MAP,
    );
    mirrorItalicOutput.textContent = mirrorText(
      convertText(input, "italic"),
      MIRROR_ITALIC_MAP,
    );
    mirrorBoldItalicOutput.textContent = mirrorText(
      convertText(input, "boldItalic"),
      MIRROR_BOLD_ITALIC_MAP,
    );
    reverseOutput.textContent = reverseText(input);

    clearCopyNotes();
  }

  function clearCopyNotes() {
    mirrorCopyNote.textContent = "";
    reverseMirrorCopyNote.textContent = "";
    mirrorBoldCopyNote.textContent = "";
    mirrorItalicCopyNote.textContent = "";
    mirrorBoldItalicCopyNote.textContent = "";
    reverseCopyNote.textContent = "";

    mirrorOutput.classList.remove("copied");
    reverseMirrorOutput.classList.remove("copied");
    mirrorBoldOutput.classList.remove("copied");
    mirrorItalicOutput.classList.remove("copied");
    mirrorBoldItalicOutput.classList.remove("copied");
    reverseOutput.classList.remove("copied");
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
    inputText.value = "Mirror this text";
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

  mirrorOutput.addEventListener("click", () => {
    copyText(mirrorOutput.textContent, mirrorOutput, mirrorCopyNote);
  });

  reverseMirrorOutput.addEventListener("click", () => {
    copyText(
      reverseMirrorOutput.textContent,
      reverseMirrorOutput,
      reverseMirrorCopyNote,
    );
  });

  mirrorBoldOutput.addEventListener("click", () => {
    copyText(
      mirrorBoldOutput.textContent,
      mirrorBoldOutput,
      mirrorBoldCopyNote,
    );
  });

  mirrorItalicOutput.addEventListener("click", () => {
    copyText(
      mirrorItalicOutput.textContent,
      mirrorItalicOutput,
      mirrorItalicCopyNote,
    );
  });

  mirrorBoldItalicOutput.addEventListener("click", () => {
    copyText(
      mirrorBoldItalicOutput.textContent,
      mirrorBoldItalicOutput,
      mirrorBoldItalicCopyNote,
    );
  });

  reverseOutput.addEventListener("click", () => {
    copyText(reverseOutput.textContent, reverseOutput, reverseCopyNote);
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "mirrorOutput") {
        copyText(outputElement.textContent, outputElement, mirrorCopyNote);
      } else if (targetId === "reverseMirrorOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          reverseMirrorOutput,
          reverseMirrorCopyNote,
        );
      } else if (targetId === "mirrorBoldOutput") {
        copyText(outputElement.textContent, outputElement, mirrorBoldCopyNote);
      } else if (targetId === "mirrorItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          mirrorItalicCopyNote,
        );
      } else if (targetId === "mirrorBoldItalicOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          mirrorBoldItalicCopyNote,
        );
      } else if (targetId === "reverseOutput") {
        copyText(outputElement.textContent, outputElement, reverseCopyNote);
      }
    });
  });

  updateOutputs();
});
