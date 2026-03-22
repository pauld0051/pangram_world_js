document.addEventListener("DOMContentLoaded", () => {
  const generatePangramButton = document.getElementById(
    "generatePangramButton",
  );
  const generatedPangramOutput = document.getElementById(
    "generatedPangramOutput",
  );
  const copyGeneratedPangramButton = document.getElementById(
    "copyGeneratedPangramButton",
  );
  const generatorStatus = document.getElementById("generatorStatus");
  const generatorCopyNote = document.getElementById("generatorCopyNote");

  const pangramCheckerInput = document.getElementById("pangramCheckerInput");
  const checkPangramButton = document.getElementById("checkPangramButton");
  const clearCheckerButton = document.getElementById("clearCheckerButton");
  const pangramCheckResult = document.getElementById("pangramCheckResult");
  const missingLettersOutput = document.getElementById("missingLettersOutput");

  const pangramLengthSelector = document.getElementById(
    "pangramLengthSelector",
  );
  const pangramLengthButtons = document.querySelectorAll(
    ".pangram-length-button",
  );
  const pangramLengthNote = document.getElementById("pangramLengthNote");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let wordList = [];
  let wordListLoaded = false;

  function normaliseText(text) {
    return text.toLowerCase();
  }

  function extractLetters(text) {
    return [...normaliseText(text)].filter((char) => /[a-z]/.test(char));
  }

  function getUniqueLetters(text) {
    return new Set(extractLetters(text));
  }

  function getMissingLetters(text) {
    const used = getUniqueLetters(text);
    return alphabet.filter((letter) => !used.has(letter));
  }

  function capitaliseFirst(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function chooseRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function shuffleArray(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function scoreWordAgainstMissingLetters(word, missingLetters) {
    const uniqueWordLetters = new Set(extractLetters(word));
    let score = 0;

    missingLetters.forEach((letter) => {
      if (uniqueWordLetters.has(letter)) {
        score += 1;
      }
    });

    return score;
  }

  function buildWeightedCandidates(availableWords, missingLetters, usedWords) {
    const candidates = [];

    availableWords.forEach((word) => {
      if (usedWords.has(word)) return;

      const score = scoreWordAgainstMissingLetters(word, missingLetters);
      if (score <= 0) return;

      candidates.push({ word, score });
    });

    return candidates.sort((a, b) => b.score - a.score);
  }

  function weightedRandomPick(candidates) {
    if (!candidates.length) return null;

    const pool = [];

    candidates.forEach((candidate) => {
      const weight = candidate.score * candidate.score;
      for (let i = 0; i < weight; i += 1) {
        pool.push(candidate.word);
      }
    });

    return chooseRandomItem(pool);
  }

  function tidyGeneratedSentence(words) {
    if (!words.length) return "";
    return `${capitaliseFirst(words.join(" "))}.`;
  }

  function looksUsefulForPangrams(word) {
    if (!/^[a-z]+$/.test(word)) return false;
    if (word.length < 3) return false;
    if (word.length > 12) return false;

    const bannedWords = new Set([
      "ii",
      "iii",
      "iv",
      "vi",
      "vii",
      "viii",
      "ix",
      "xi",
      "xii",
      "xiii",
      "xiv",
      "xv",
      "xvi",
      "xvii",
      "xviii",
      "xix",
      "xx",
      "xxi",
      "xxii",
      "xxiii",
      "xxiv",
      "xxv",
      "xxx",
      "dx",
      "lx",
      "liv",
      "div",
      "dix",
      "mlx",
      "mmmm",
    ]);

    if (bannedWords.has(word)) return false;

    return true;
  }

  function prioritiseUsefulWords(words) {
    const highValueLetters = /[jqxzvk]/;
    const mediumValueLetters = /[bcfghmpuwy]/;

    return [...words].sort((a, b) => {
      const aHigh = highValueLetters.test(a) ? 1 : 0;
      const bHigh = highValueLetters.test(b) ? 1 : 0;
      if (aHigh !== bHigh) return bHigh - aHigh;

      const aMedium = mediumValueLetters.test(a) ? 1 : 0;
      const bMedium = mediumValueLetters.test(b) ? 1 : 0;
      if (aMedium !== bMedium) return bMedium - aMedium;

      return a.length - b.length;
    });
  }

  async function loadWordList() {
    generatorStatus.textContent = "Loading word list...";

    try {
      const response = await fetch("../data/pangram_words.txt", {
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const rawText = await response.text();

      const words = rawText
        .split(/\r?\n/)
        .map((word) => word.trim().toLowerCase())
        .filter(Boolean)
        .filter(looksUsefulForPangrams);

      const uniqueWords = [...new Set(words)];
      wordList = prioritiseUsefulWords(uniqueWords);
      wordListLoaded = true;

      generatorStatus.textContent = `Word list loaded. ${wordList.length.toLocaleString()} usable words ready.`;
      updateLengthNote("random");
    } catch (error) {
      wordListLoaded = false;
      generatorStatus.textContent =
        "Could not load the word list. Check that ../data/pangram_words.txt exists.";
      console.error("Failed to load pangram word list:", error);
    }
  }

  function updateLengthNote(mode) {
    if (!pangramLengthNote) return;

    if (mode === "random") {
      pangramLengthNote.textContent =
        "Random is selected. It will generate between 3 and 15 words.";
      return;
    }

    pangramLengthNote.textContent = `${mode} words selected. Clicked once, generated once. Nice and savage.`;
  }

  function setActiveLengthButton(selectedButton) {
    pangramLengthButtons.forEach((button) => {
      button.classList.remove("active");
    });

    if (selectedButton) {
      selectedButton.classList.add("active");
    }
  }

  function getRandomTargetWordCount() {
    return Math.floor(Math.random() * 13) + 3;
  }

  function getPaddingCandidates(usedWords) {
    const lighterWords = wordList.filter((word) => {
      if (usedWords.has(word)) return false;
      if (word.length < 3 || word.length > 8) return false;

      const uniqueLetters = new Set(extractLetters(word));
      return uniqueLetters.size <= 6;
    });

    return shuffleArray(lighterWords);
  }

  function padWordsToTargetCount(words, targetCount) {
    if (words.length >= targetCount) {
      return words.slice(0, targetCount);
    }

    const paddedWords = [...words];
    const usedWords = new Set(words);
    const paddingCandidates = getPaddingCandidates(usedWords);

    for (const word of paddingCandidates) {
      if (paddedWords.length >= targetCount) break;
      paddedWords.push(word);
      usedWords.add(word);
    }

    return paddedWords;
  }

  function attemptTargetedPangram(targetWords) {
    const usedWords = new Set();
    const chosenWords = [];
    let currentText = "";
    let missingLetters = getMissingLetters(currentText);
    let safety = 0;

    while (
      missingLetters.length > 0 &&
      chosenWords.length < targetWords &&
      safety < 80
    ) {
      safety += 1;

      const wordsRemaining = targetWords - chosenWords.length;
      const candidates = buildWeightedCandidates(
        wordList,
        missingLetters,
        usedWords,
      );

      if (!candidates.length) break;

      let candidatePool = candidates;

      if (wordsRemaining <= 2) {
        candidatePool = candidates.slice(0, Math.min(8, candidates.length));
      } else if (wordsRemaining <= 4) {
        candidatePool = candidates.slice(0, Math.min(14, candidates.length));
      } else {
        candidatePool = candidates.slice(0, Math.min(24, candidates.length));
      }

      const nextWord =
        weightedRandomPick(candidatePool) ||
        chooseRandomItem(candidatePool).word;

      if (!nextWord) break;

      usedWords.add(nextWord);
      chosenWords.push(nextWord);
      currentText = chosenWords.join(" ");
      missingLetters = getMissingLetters(currentText);
    }

    if (missingLetters.length === 0) {
      const paddedWords = padWordsToTargetCount(chosenWords, targetWords);

      if (paddedWords.length === targetWords) {
        return {
          success: true,
          words: shuffleArray(paddedWords),
          missingLetters: [],
        };
      }
    }

    return {
      success: false,
      words: chosenWords,
      missingLetters,
    };
  }

  function generatePangramFromWordList(targetWords, maxPasses = 500) {
    let bestWords = [];
    let bestMissingLetters = alphabet.length;

    for (let pass = 0; pass < maxPasses; pass += 1) {
      const result = attemptTargetedPangram(targetWords);

      if (result.missingLetters.length < bestMissingLetters) {
        bestMissingLetters = result.missingLetters.length;
        bestWords = [...result.words];
      }

      if (result.success) {
        return result;
      }
    }

    const fallbackWords = padWordsToTargetCount(bestWords, targetWords);
    const fallbackMissing = getMissingLetters(fallbackWords.join(" "));

    return {
      success:
        fallbackMissing.length === 0 && fallbackWords.length === targetWords,
      words: fallbackWords,
      missingLetters: fallbackMissing,
    };
  }

  function updateChecker(text) {
    const trimmed = text.trim();

    if (!trimmed) {
      pangramCheckResult.textContent =
        'Enter a sentence and click "Check Pangram".';
      missingLettersOutput.textContent = "None yet.";
      return;
    }

    const missing = getMissingLetters(trimmed);

    if (missing.length === 0) {
      pangramCheckResult.textContent = "Yes, this is a pangram.";
      missingLettersOutput.textContent = "None. Every letter is present.";
    } else {
      pangramCheckResult.textContent = "No, this is not a pangram.";
      missingLettersOutput.textContent = missing.join(", ");
    }
  }

  async function copyTextToClipboard(text, noteElement, successMessage) {
    if (!text.trim()) {
      noteElement.textContent = "Nothing to copy yet.";
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      noteElement.textContent = successMessage;
    } catch (error) {
      noteElement.textContent = "Copy failed. Please copy it manually.";
    }
  }

  function runGeneration(targetWords, sourceLabel, buttonElement = null) {
    generatorCopyNote.textContent = "";

    if (!wordListLoaded || !wordList.length) {
      generatorStatus.textContent = "Word list is not loaded yet.";
      return;
    }

    if (buttonElement) {
      setActiveLengthButton(buttonElement);
    }

    updateLengthNote(sourceLabel === "random" ? "random" : targetWords);

    generatorStatus.textContent = `Generating a ${targetWords}-word pangram...`;

    setTimeout(() => {
      const result = generatePangramFromWordList(targetWords);

      if (result.success) {
        const sentence = tidyGeneratedSentence(result.words);
        generatedPangramOutput.value = sentence;
        generatorStatus.textContent = `Done. ${targetWords} words, all 26 letters covered.`;
      } else {
        generatedPangramOutput.value = tidyGeneratedSentence(result.words);
        generatorStatus.textContent = `Close, but not complete for ${targetWords} words. Missing letters: ${result.missingLetters.join(", ")}.`;
      }
    }, 20);
  }

  pangramLengthSelector?.addEventListener("click", (event) => {
    const button = event.target.closest(".pangram-length-button");
    if (!button) return;

    const wordCount = button.dataset.wordCount;
    if (!wordCount) return;

    if (wordCount === "random") {
      runGeneration(getRandomTargetWordCount(), "random", button);
      return;
    }

    runGeneration(Number(wordCount), Number(wordCount), button);
  });

  generatePangramButton?.addEventListener("click", () => {
    const randomButton = document.getElementById("pangramLengthRandom");
    runGeneration(getRandomTargetWordCount(), "random", randomButton);
  });

  copyGeneratedPangramButton?.addEventListener("click", async () => {
    await copyTextToClipboard(
      generatedPangramOutput.value,
      generatorCopyNote,
      "Pangram copied.",
    );
  });

  generatedPangramOutput?.addEventListener("click", async () => {
    if (generatedPangramOutput.value.trim()) {
      await copyTextToClipboard(
        generatedPangramOutput.value,
        generatorCopyNote,
        "Pangram copied.",
      );
    }
  });

  checkPangramButton?.addEventListener("click", () => {
    updateChecker(pangramCheckerInput.value);
  });

  clearCheckerButton?.addEventListener("click", () => {
    pangramCheckerInput.value = "";
    pangramCheckResult.textContent =
      'Enter a sentence and click "Check Pangram".';
    missingLettersOutput.textContent = "None yet.";
    pangramCheckerInput.focus();
  });

  pangramCheckerInput?.addEventListener("input", () => {
    updateChecker(pangramCheckerInput.value);
  });

  const defaultRandomButton = document.getElementById("pangramLengthRandom");
  if (defaultRandomButton) {
    setActiveLengthButton(defaultRandomButton);
  }
  updateLengthNote("random");
  loadWordList();
});
