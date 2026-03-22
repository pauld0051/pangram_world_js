document.addEventListener("DOMContentLoaded", () => {
  const fractionInput = document.getElementById("fractionInput");
  const numeratorInput = document.getElementById("numeratorInput");
  const denominatorInput = document.getElementById("denominatorInput");

  const generateFractionButton = document.getElementById(
    "generateFractionButton",
  );
  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");

  const fractionOutput = document.getElementById("fractionOutput");
  const plainFractionOutput = document.getElementById("plainFractionOutput");

  const fractionCopyNote = document.getElementById("fractionCopyNote");
  const plainFractionCopyNote = document.getElementById(
    "plainFractionCopyNote",
  );
  const fractionError = document.getElementById("fractionError");

  const exampleChips = document.querySelectorAll(".example-chip");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const superscriptMap = {
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
    " ": " ",
  };

  const subscriptMap = {
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
    β: "ᵦ",
    γ: "ᵧ",
    ρ: "ᵨ",
    φ: "ᵩ",
    χ: "ᵪ",
    " ": " ",
  };

  const commonFractions = {
    "1/2": "½",
    "1/3": "⅓",
    "2/3": "⅔",
    "1/4": "¼",
    "3/4": "¾",
    "1/5": "⅕",
    "2/5": "⅖",
    "3/5": "⅗",
    "4/5": "⅘",
    "1/6": "⅙",
    "5/6": "⅚",
    "1/7": "⅐",
    "1/8": "⅛",
    "3/8": "⅜",
    "5/8": "⅝",
    "7/8": "⅞",
    "1/9": "⅑",
    "1/10": "⅒",
  };

  function showMessage(element, message, isError = false) {
    if (!element) return;
    element.textContent = message;
    element.style.color = isError ? "#c0392b" : "";
  }

  function clearMessage(element) {
    if (!element) return;
    element.textContent = "";
    element.style.color = "";
  }

  function sanitiseFractionPart(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function convertWithMap(text, charMap) {
    return [...text].map((char) => charMap[char] || char).join("");
  }

  function buildStyledFraction(numerator, denominator) {
    const superNumerator = convertWithMap(numerator, superscriptMap);
    const subDenominator = convertWithMap(denominator, subscriptMap);
    return `${superNumerator}⁄${subDenominator}`;
  }

  function isNumericOnly(value) {
    return /^[+-]?\d+$/.test(value);
  }

  function getCommonFractionGlyph(numerator, denominator) {
    const key = `${numerator}/${denominator}`;
    return commonFractions[key] || null;
  }

  function parseSlashInput(value) {
    const cleaned = value.trim();

    if (!cleaned) {
      return {
        numerator: "",
        denominator: "",
        error: "Please enter a fraction.",
      };
    }

    const slashMatches = cleaned.match(/\//g);
    if (!slashMatches || slashMatches.length !== 1) {
      return {
        numerator: "",
        denominator: "",
        error: "Use exactly one slash, like 3/4 or a/x.",
      };
    }

    const [rawNumerator, rawDenominator] = cleaned.split("/");

    const numerator = sanitiseFractionPart(rawNumerator);
    const denominator = sanitiseFractionPart(rawDenominator);

    if (!numerator || !denominator) {
      return {
        numerator: "",
        denominator: "",
        error: "Both numerator and denominator need a value.",
      };
    }

    return { numerator, denominator, error: "" };
  }

  function updateOutputs(numerator, denominator) {
    clearMessage(fractionError);
    clearMessage(fractionCopyNote);
    clearMessage(plainFractionCopyNote);

    const plainFraction = `${numerator}/${denominator}`;
    const commonGlyph =
      isNumericOnly(numerator) && isNumericOnly(denominator)
        ? getCommonFractionGlyph(numerator, denominator)
        : null;

    const generatedFraction =
      commonGlyph || buildStyledFraction(numerator, denominator);

    fractionOutput.textContent = generatedFraction;
    plainFractionOutput.textContent = plainFraction;
  }

  function generateFromInputs() {
    const numerator = sanitiseFractionPart(numeratorInput.value);
    const denominator = sanitiseFractionPart(denominatorInput.value);

    clearMessage(fractionCopyNote);
    clearMessage(plainFractionCopyNote);

    if (!numerator || !denominator) {
      fractionOutput.textContent = "";
      plainFractionOutput.textContent = "";
      showMessage(
        fractionError,
        "Please fill in both numerator and denominator.",
        true,
      );
      return;
    }

    fractionInput.value = `${numerator}/${denominator}`;
    updateOutputs(numerator, denominator);
  }

  function generateFromSlashInput() {
    const result = parseSlashInput(fractionInput.value);

    clearMessage(fractionCopyNote);
    clearMessage(plainFractionCopyNote);

    if (result.error) {
      numeratorInput.value = "";
      denominatorInput.value = "";
      fractionOutput.textContent = "";
      plainFractionOutput.textContent = "";
      showMessage(fractionError, result.error, true);
      return;
    }

    numeratorInput.value = result.numerator;
    denominatorInput.value = result.denominator;

    updateOutputs(result.numerator, result.denominator);
  }

  async function copyText(text, noteElement, successMessage) {
    if (!text) {
      showMessage(noteElement, "Nothing to copy yet.", true);
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      showMessage(noteElement, successMessage);
    } catch (error) {
      showMessage(noteElement, "Copy failed. Please copy it manually.", true);
    }
  }

  generateFractionButton?.addEventListener("click", () => {
    const slashValue = fractionInput.value.trim();
    const numeratorValue = numeratorInput.value.trim();
    const denominatorValue = denominatorInput.value.trim();

    if (slashValue) {
      generateFromSlashInput();
      return;
    }

    if (numeratorValue || denominatorValue) {
      generateFromInputs();
      return;
    }

    showMessage(
      fractionError,
      "Enter a fraction like 3/4 or use the boxes below.",
      true,
    );
  });

  clearButton?.addEventListener("click", () => {
    fractionInput.value = "";
    numeratorInput.value = "";
    denominatorInput.value = "";
    fractionOutput.textContent = "";
    plainFractionOutput.textContent = "";
    clearMessage(fractionError);
    clearMessage(fractionCopyNote);
    clearMessage(plainFractionCopyNote);
    fractionInput.focus();
  });

  pasteExampleButton?.addEventListener("click", () => {
    fractionInput.value = "3/4";
    generateFromSlashInput();
  });

  fractionInput?.addEventListener("input", () => {
    clearMessage(fractionError);
    clearMessage(fractionCopyNote);
    clearMessage(plainFractionCopyNote);

    const value = fractionInput.value.trim();

    if (!value) {
      numeratorInput.value = "";
      denominatorInput.value = "";
      fractionOutput.textContent = "";
      plainFractionOutput.textContent = "";
      return;
    }

    if (value.includes("/")) {
      const result = parseSlashInput(value);
      if (!result.error) {
        numeratorInput.value = result.numerator;
        denominatorInput.value = result.denominator;
        updateOutputs(result.numerator, result.denominator);
      }
    }
  });

  numeratorInput?.addEventListener("input", () => {
    clearMessage(fractionError);
    clearMessage(fractionCopyNote);
    clearMessage(plainFractionCopyNote);
  });

  denominatorInput?.addEventListener("input", () => {
    clearMessage(fractionError);
    clearMessage(fractionCopyNote);
    clearMessage(plainFractionCopyNote);
  });

  exampleChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const example = chip.dataset.example || "";
      fractionInput.value = example;
      generateFromSlashInput();
    });
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.target;
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const text = targetElement.textContent.trim();
      const noteElement =
        targetId === "fractionOutput"
          ? fractionCopyNote
          : plainFractionCopyNote;

      await copyText(
        text,
        noteElement,
        targetId === "fractionOutput"
          ? "Fraction copied."
          : "Plain fraction copied.",
      );
    });
  });

  fractionOutput?.addEventListener("click", async () => {
    await copyText(
      fractionOutput.textContent.trim(),
      fractionCopyNote,
      "Fraction copied.",
    );
  });

  plainFractionOutput?.addEventListener("click", async () => {
    await copyText(
      plainFractionOutput.textContent.trim(),
      plainFractionCopyNote,
      "Plain fraction copied.",
    );
  });

  fractionOutput?.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      await copyText(
        fractionOutput.textContent.trim(),
        fractionCopyNote,
        "Fraction copied.",
      );
    }
  });

  plainFractionOutput?.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      await copyText(
        plainFractionOutput.textContent.trim(),
        plainFractionCopyNote,
        "Plain fraction copied.",
      );
    }
  });
});
