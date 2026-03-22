document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const upsideDownOutput = document.getElementById("upsideDownOutput");
  const reverseUpsideDownOutput = document.getElementById(
    "reverseUpsideDownOutput",
  );

  const upsideDownCopyNote = document.getElementById("upsideDownCopyNote");
  const reverseUpsideDownCopyNote = document.getElementById(
    "reverseUpsideDownCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const UPSIDE_DOWN_MAP = {
    A: "∀",
    B: "𐐒",
    C: "Ɔ",
    D: "ᗡ",
    E: "Ǝ",
    F: "Ⅎ",
    G: "⅁",
    H: "H",
    I: "I",
    J: "ſ",
    K: "⋊",
    L: "⅂",
    M: "W",
    N: "N",
    O: "O",
    P: "Ԁ",
    Q: "Ό",
    R: "ᴚ",
    S: "S",
    T: "⊥",
    U: "∩",
    V: "Λ",
    W: "M",
    X: "X",
    Y: "⅄",
    Z: "Z",

    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ɓ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",

    0: "0",
    1: "⇂",
    2: "ᄅ",
    3: "Ɛ",
    4: "ㄣ",
    5: "ϛ",
    6: "9",
    7: "ㄥ",
    8: "8",
    9: "6",

    ".": "˙",
    ",": "'",
    "'": ",",
    '"': "„",
    "`": ",",
    "!": "¡",
    "?": "¿",
    "[": "]",
    "]": "[",
    "(": ")",
    ")": "(",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "&": "⅋",
    _: "‾",
    ";": "؛",
  };

  function normaliseInput(text) {
    if (typeof normaliseStyledUnicodeToPlain === "function") {
      return normaliseStyledUnicodeToPlain(text || "");
    }
    return text || "";
  }

  function toUpsideDown(text) {
    return Array.from(text)
      .map((char) => UPSIDE_DOWN_MAP[char] || char)
      .join("");
  }

  function toReverseUpsideDown(text) {
    return Array.from(text)
      .reverse()
      .map((char) => UPSIDE_DOWN_MAP[char] || char)
      .join("");
  }

  function clearCopyNotes() {
    upsideDownCopyNote.textContent = "";
    reverseUpsideDownCopyNote.textContent = "";

    upsideDownOutput.classList.remove("copied");
    reverseUpsideDownOutput.classList.remove("copied");
  }

  function updateOutputs() {
    const input = normaliseInput(inputText.value || "");

    upsideDownOutput.textContent = toUpsideDown(input);
    reverseUpsideDownOutput.textContent = toReverseUpsideDown(input);

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

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      inputText.value = "";
      updateOutputs();
      inputText.focus();
    });
  }

  if (pasteExampleButton) {
    pasteExampleButton.addEventListener("click", () => {
      inputText.value = "Hello world 123!";
      updateOutputs();
      inputText.focus();
    });
  }

  exampleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inputText.value = button.dataset.example || "";
      updateOutputs();
      inputText.focus();
    });
  });

  upsideDownOutput.addEventListener("click", () => {
    copyText(
      upsideDownOutput.textContent,
      upsideDownOutput,
      upsideDownCopyNote,
    );
  });

  reverseUpsideDownOutput.addEventListener("click", () => {
    copyText(
      reverseUpsideDownOutput.textContent,
      reverseUpsideDownOutput,
      reverseUpsideDownCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "upsideDownOutput") {
        copyText(outputElement.textContent, outputElement, upsideDownCopyNote);
      } else if (targetId === "reverseUpsideDownOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          reverseUpsideDownCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
