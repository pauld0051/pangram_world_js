document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const outputText = document.getElementById("outputText");
  const outputCopyNote = document.getElementById("outputCopyNote");

  const subscriptButton = document.getElementById("subscriptButton");
  const superscriptButton = document.getElementById("superscriptButton");
  const normaliseButton = document.getElementById("normaliseButton");
  const clearButton = document.getElementById("clearButton");

  const exampleButtons = document.querySelectorAll("[data-example]");
  const insertButtons = document.querySelectorAll("[data-insert]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const SUPERSCRIPT_MAP = {
    0: "⁰",
    1: "¹",
    2: "²",
    3: "³",
    4: "⁴",
    5: "⁵",
    6: "⁶",
    7: "⁷",
    8: "⁸",
    9: "⁹",
    "+": "⁺",
    "-": "⁻",
    "=": "⁼",
    "(": "⁽",
    ")": "⁾",
    n: "ⁿ",
    i: "ⁱ",
    a: "ᵃ",
    b: "ᵇ",
    c: "ᶜ",
    d: "ᵈ",
    e: "ᵉ",
    f: "ᶠ",
    g: "ᵍ",
    h: "ʰ",
    j: "ʲ",
    k: "ᵏ",
    l: "ˡ",
    m: "ᵐ",
    o: "ᵒ",
    p: "ᵖ",
    r: "ʳ",
    s: "ˢ",
    t: "ᵗ",
    u: "ᵘ",
    v: "ᵛ",
    w: "ʷ",
    x: "ˣ",
    y: "ʸ",
    z: "ᶻ",
    A: "ᴬ",
    B: "ᴮ",
    D: "ᴰ",
    E: "ᴱ",
    G: "ᴳ",
    H: "ᴴ",
    I: "ᴵ",
    J: "ᴶ",
    K: "ᴷ",
    L: "ᴸ",
    M: "ᴹ",
    N: "ᴺ",
    O: "ᴼ",
    P: "ᴾ",
    R: "ᴿ",
    T: "ᵀ",
    U: "ᵁ",
    V: "ⱽ",
    W: "ᵂ",
  };

  const SUBSCRIPT_MAP = {
    0: "₀",
    1: "₁",
    2: "₂",
    3: "₃",
    4: "₄",
    5: "₅",
    6: "₆",
    7: "₇",
    8: "₈",
    9: "₉",
    "+": "₊",
    "-": "₋",
    "=": "₌",
    "(": "₍",
    ")": "₎",
    a: "ₐ",
    e: "ₑ",
    h: "ₕ",
    i: "ᵢ",
    j: "ⱼ",
    k: "ₖ",
    l: "ₗ",
    m: "ₘ",
    n: "ₙ",
    o: "ₒ",
    p: "ₚ",
    r: "ᵣ",
    s: "ₛ",
    t: "ₜ",
    u: "ᵤ",
    v: "ᵥ",
    x: "ₓ",
    schwa: "ₔ",
  };

  const REVERSE_SUPERSCRIPT_MAP = Object.fromEntries(
    Object.entries(SUPERSCRIPT_MAP).map(([plain, styled]) => [styled, plain]),
  );

  const REVERSE_SUBSCRIPT_MAP = Object.fromEntries(
    Object.entries(SUBSCRIPT_MAP).map(([plain, styled]) => [styled, plain]),
  );

  function toSuperscriptChar(char) {
    return SUPERSCRIPT_MAP[char] || char;
  }

  function toSubscriptChar(char) {
    return SUBSCRIPT_MAP[char] || char;
  }

  function toPlainChar(char) {
    if (REVERSE_SUPERSCRIPT_MAP[char]) {
      return REVERSE_SUPERSCRIPT_MAP[char];
    }

    if (REVERSE_SUBSCRIPT_MAP[char]) {
      return REVERSE_SUBSCRIPT_MAP[char];
    }

    if (typeof normaliseStyledUnicodeToPlain === "function") {
      return normaliseStyledUnicodeToPlain(char);
    }

    return char;
  }

  function transformString(text, transformFn) {
    return Array.from(text)
      .map((char) => transformFn(char))
      .join("");
  }

  function replaceSelectedText(transformFn) {
    const value = inputText.value;
    const start = inputText.selectionStart;
    const end = inputText.selectionEnd;

    if (start === end) {
      return false;
    }

    const selectedText = value.slice(start, end);
    const transformed = transformString(selectedText, transformFn);

    inputText.value = value.slice(0, start) + transformed + value.slice(end);

    inputText.focus();
    inputText.setSelectionRange(start, start + transformed.length);
    updateOutput();
    return true;
  }

  function insertAtCursor(insertText) {
    const value = inputText.value;
    const start = inputText.selectionStart;
    const end = inputText.selectionEnd;

    inputText.value = value.slice(0, start) + insertText + value.slice(end);

    inputText.focus();
    inputText.setSelectionRange(
      start + insertText.length,
      start + insertText.length,
    );
    updateOutput();
  }

  function clearCopyNote() {
    outputCopyNote.textContent = "";
    outputText.classList.remove("copied");
  }

  function updateOutput() {
    outputText.textContent = inputText.value || "";
    clearCopyNote();
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

  inputText.addEventListener("input", updateOutput);

  subscriptButton.addEventListener("click", () => {
    const changed = replaceSelectedText(toSubscriptChar);
    if (!changed) {
      outputCopyNote.textContent = "Select text first.";
      inputText.focus();
    }
  });

  superscriptButton.addEventListener("click", () => {
    const changed = replaceSelectedText(toSuperscriptChar);
    if (!changed) {
      outputCopyNote.textContent = "Select text first.";
      inputText.focus();
    }
  });

  normaliseButton.addEventListener("click", () => {
    const changed = replaceSelectedText(toPlainChar);
    if (!changed) {
      outputCopyNote.textContent = "Select text first.";
      inputText.focus();
    }
  });

  clearButton.addEventListener("click", () => {
    inputText.value = "";
    updateOutput();
    inputText.focus();
  });

  exampleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inputText.value = button.dataset.example || "";
      updateOutput();
      inputText.focus();
    });
  });

  insertButtons.forEach((button) => {
    button.addEventListener("click", () => {
      insertAtCursor(button.dataset.insert || "");
    });
  });

  outputText.addEventListener("click", () => {
    copyText(outputText.textContent, outputText, outputCopyNote);
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        copyText(targetElement.textContent, targetElement, outputCopyNote);
      }
    });
  });

  updateOutput();
});
