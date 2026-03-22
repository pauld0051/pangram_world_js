document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");

  const smallCapsOutput = document.getElementById("smallCapsOutput");
  const smallCapsSpacedOutput = document.getElementById(
    "smallCapsSpacedOutput",
  );
  const smallCapsFirstNormalOutput = document.getElementById(
    "smallCapsFirstNormalOutput",
  );

  const smallCapsCopyNote = document.getElementById("smallCapsCopyNote");
  const smallCapsSpacedCopyNote = document.getElementById(
    "smallCapsSpacedCopyNote",
  );
  const smallCapsFirstNormalCopyNote = document.getElementById(
    "smallCapsFirstNormalCopyNote",
  );

  const clearButton = document.getElementById("clearButton");
  const pasteExampleButton = document.getElementById("pasteExampleButton");
  const exampleButtons = document.querySelectorAll("[data-example]");
  const copyButtons = document.querySelectorAll(".copy-btn");

  const SMALL_CAPS_MAP = {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ꜰ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "s",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ",
  };

  function normaliseInput(text) {
    if (typeof normaliseStyledUnicodeToPlain === "function") {
      return normaliseStyledUnicodeToPlain(text || "");
    }
    return text || "";
  }

  function toSmallCaps(text) {
    return Array.from(text)
      .map((char) => {
        const lower = char.toLowerCase();
        return SMALL_CAPS_MAP[lower] || char;
      })
      .join("");
  }

  function toSmallCapsSpaced(text) {
    const converted = toSmallCaps(text);
    return Array.from(converted)
      .map((char) => (char === " " ? "   " : char))
      .join(" ");
  }

  function toSmallCapsFirstNormal(text) {
    let firstLetterHandled = false;

    return Array.from(text)
      .map((char) => {
        const isLetter = /\p{L}/u.test(char);

        if (!isLetter) {
          return char;
        }

        if (!firstLetterHandled) {
          firstLetterHandled = true;
          return char;
        }

        const lower = char.toLowerCase();
        return SMALL_CAPS_MAP[lower] || char;
      })
      .join("");
  }

  function clearCopyNotes() {
    smallCapsCopyNote.textContent = "";
    smallCapsSpacedCopyNote.textContent = "";
    smallCapsFirstNormalCopyNote.textContent = "";

    smallCapsOutput.classList.remove("copied");
    smallCapsSpacedOutput.classList.remove("copied");
    smallCapsFirstNormalOutput.classList.remove("copied");
  }

  function updateOutputs() {
    const input = normaliseInput(inputText.value || "");

    smallCapsOutput.textContent = toSmallCaps(input);
    smallCapsSpacedOutput.textContent = toSmallCapsSpaced(input);
    smallCapsFirstNormalOutput.textContent = toSmallCapsFirstNormal(input);

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
      inputText.value = "Small caps look elegant";
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

  smallCapsOutput.addEventListener("click", () => {
    copyText(smallCapsOutput.textContent, smallCapsOutput, smallCapsCopyNote);
  });

  smallCapsSpacedOutput.addEventListener("click", () => {
    copyText(
      smallCapsSpacedOutput.textContent,
      smallCapsSpacedOutput,
      smallCapsSpacedCopyNote,
    );
  });

  smallCapsFirstNormalOutput.addEventListener("click", () => {
    copyText(
      smallCapsFirstNormalOutput.textContent,
      smallCapsFirstNormalOutput,
      smallCapsFirstNormalCopyNote,
    );
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const outputElement = document.getElementById(targetId);

      if (targetId === "smallCapsOutput") {
        copyText(outputElement.textContent, outputElement, smallCapsCopyNote);
      } else if (targetId === "smallCapsSpacedOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          smallCapsSpacedCopyNote,
        );
      } else if (targetId === "smallCapsFirstNormalOutput") {
        copyText(
          outputElement.textContent,
          outputElement,
          smallCapsFirstNormalCopyNote,
        );
      }
    });
  });

  updateOutputs();
});
