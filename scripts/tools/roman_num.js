document.addEventListener("DOMContentLoaded", () => {
  const universalRomanInput = document.getElementById("universalRomanInput");
  const convertRomanButton = document.getElementById("convertRomanButton");
  const clearRomanButton = document.getElementById("clearRomanButton");

  const arabicOutput = document.getElementById("arabicOutput");
  const romanOutput = document.getElementById("romanOutput");
  const romanStatus = document.getElementById("romanStatus");
  const romanCopyNote = document.getElementById("romanCopyNote");

  const copyArabicButton = document.getElementById("copyArabicButton");
  const copyRomanButton = document.getElementById("copyRomanButton");

  const validRomanPattern =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

  const romanPairs = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  function setStatus(message) {
    romanStatus.textContent = message;
  }

  function setCopyNote(message) {
    romanCopyNote.textContent = message;
  }

  function clearCopyNote() {
    romanCopyNote.textContent = "";
  }

  function clearOutputs() {
    arabicOutput.value = "";
    romanOutput.value = "";
  }

  function arabicToRoman(number) {
    let remaining = number;
    let result = "";

    for (const pair of romanPairs) {
      while (remaining >= pair.value) {
        result += pair.symbol;
        remaining -= pair.value;
      }
    }

    return result;
  }

  function romanToArabic(roman) {
    let total = 0;

    for (let i = 0; i < roman.length; i += 1) {
      const currentValue = romanValues[roman[i]];
      const nextValue = romanValues[roman[i + 1]] || 0;

      if (currentValue < nextValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
    }

    return total;
  }

  function handleArabicInput(rawInput) {
    const numericCandidate = rawInput.replace(/,/g, "");

    if (numericCandidate.includes(".")) {
      clearOutputs();
      setStatus(
        "Decimal points are not supported. Enter a whole number from 1 to 3999.",
      );
      return;
    }

    const number = Number(numericCandidate);

    if (!Number.isFinite(number) || !Number.isInteger(number)) {
      clearOutputs();
      setStatus("Enter a valid whole number from 1 to 3999.");
      return;
    }

    if (number <= 0) {
      clearOutputs();
      setStatus(
        "Roman numerals do not represent zero or negative numbers. Enter a whole number from 1 to 3999.",
      );
      return;
    }

    if (number > 3999) {
      clearOutputs();
      setStatus(
        "Standard Roman numerals on this page stop at 3999. Overline notation for larger values is not supported.",
      );
      return;
    }

    const romanNumeral = arabicToRoman(number);

    arabicOutput.value = String(number);
    romanOutput.value = romanNumeral;
    setStatus(`${number} converts to ${romanNumeral}.`);
  }

  function handleRomanInput(rawInput) {
    const romanCandidate = rawInput.replace(/\s+/g, "").toUpperCase();

    if (!validRomanPattern.test(romanCandidate)) {
      clearOutputs();
      setStatus(
        "That is not a valid standard Roman numeral. Try forms like XIV, XCIX, or MCMXCIX.",
      );
      return;
    }

    const arabicNumber = romanToArabic(romanCandidate);
    const canonicalRoman = arabicToRoman(arabicNumber);

    if (canonicalRoman !== romanCandidate) {
      clearOutputs();
      setStatus(
        "That Roman numeral is not in standard form. Try forms like XIV, XCIX, or MCMXCIX.",
      );
      return;
    }

    arabicOutput.value = String(arabicNumber);
    romanOutput.value = canonicalRoman;
    setStatus(`${canonicalRoman} converts to ${arabicNumber}.`);
  }

  function convertInput() {
    clearCopyNote();

    const rawInput = universalRomanInput.value.trim();

    if (!rawInput) {
      clearOutputs();
      setStatus("Enter a Roman numeral or a whole number from 1 to 3999.");
      return;
    }

    const numericCandidate = rawInput.replace(/,/g, "");

    if (/^[+-]?\d+(\.\d+)?$/.test(numericCandidate)) {
      handleArabicInput(rawInput);
      return;
    }

    const romanCandidate = rawInput.replace(/\s+/g, "");

    if (/^[IVXLCDM]+$/i.test(romanCandidate)) {
      handleRomanInput(rawInput);
      return;
    }

    clearOutputs();
    setStatus("Enter a valid Roman numeral or whole number from 1 to 3999.");
  }

  async function copyText(text, successMessage) {
    if (!text) {
      setCopyNote("Nothing to copy yet.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopyNote(successMessage);
    } catch (error) {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = text;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
      setCopyNote(successMessage);
    }
  }

  function clearAll() {
    universalRomanInput.value = "";
    clearOutputs();
    clearCopyNote();
    setStatus("Enter a Roman numeral or a whole number to convert it.");
    universalRomanInput.focus();
  }

  convertRomanButton.addEventListener("click", convertInput);
  clearRomanButton.addEventListener("click", clearAll);

  copyArabicButton.addEventListener("click", () => {
    copyText(arabicOutput.value, "Arabic number copied.");
  });

  copyRomanButton.addEventListener("click", () => {
    copyText(romanOutput.value, "Roman numeral copied.");
  });

  universalRomanInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      convertInput();
    }
  });

  convertRomanButton.addEventListener("click", convertInput);
  clearRomanButton.addEventListener("click", clearAll);

  copyArabicButton.addEventListener("click", () => {
    copyText(arabicOutput.value, "Arabic number copied.");
  });

  copyRomanButton.addEventListener("click", () => {
    copyText(romanOutput.value, "Roman numeral copied.");
  });

  universalRomanInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      convertInput();
    }
  });

  universalRomanInput.addEventListener("input", () => {
    clearCopyNote();

    if (!universalRomanInput.value.trim()) {
      clearOutputs();
      setStatus("Enter a Roman numeral or a whole number to convert it.");
      return;
    }

    convertInput();
  });
});
