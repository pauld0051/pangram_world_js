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

  const preferredShortWords = new Set([
    "a",
    "i",
    "am",
    "an",
    "as",
    "at",
    "be",
    "by",
    "do",
    "go",
    "he",
    "if",
    "in",
    "is",
    "it",
    "me",
    "my",
    "no",
    "of",
    "on",
    "or",
    "ox",
    "so",
    "to",
    "up",
    "us",
    "we",
    "and",
    "any",
    "are",
    "but",
    "can",
    "day",
    "far",
    "few",
    "for",
    "get",
    "had",
    "has",
    "her",
    "him",
    "his",
    "how",
    "its",
    "may",
    "new",
    "not",
    "now",
    "off",
    "old",
    "one",
    "our",
    "out",
    "own",
    "see",
    "she",
    "ten",
    "the",
    "too",
    "two",
    "way",
    "who",
    "why",
    "you",
  ]);

  const glueWords = new Set([
    "a",
    "i",
    "am",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "by",
    "for",
    "from",
    "if",
    "in",
    "into",
    "is",
    "it",
    "of",
    "on",
    "or",
    "out",
    "over",
    "the",
    "to",
    "under",
    "up",
    "we",
    "with",
    "you",
  ]);

  const friendlyStarters = new Set([
    "a",
    "i",
    "the",
    "we",
    "you",
    "they",
    "this",
    "that",
    "my",
    "our",
  ]);

  const preferredStarterWords = new Set([
    "a",
    "i",
    "the",
    "we",
    "you",
    "my",
    "our",
    "this",
    "that",
  ]);

  const awkwardWords = new Set([
    "zymic",
    "xylic",
    "qanat",
    "qoph",
    "qindar",
    "tzar",
    "czar",
    "jaxie",
    "zax",
    "vexil",
    "xebec",
  ]);

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

  function countRareLetters(word) {
    const matches = word.match(/[jqxz]/g);
    return matches ? matches.length : 0;
  }

  function scoreWordAgainstMissingLetters(
    word,
    missingLetters,
    wordsRemaining,
  ) {
    const uniqueWordLetters = new Set(extractLetters(word));
    let score = 0;

    missingLetters.forEach((letter) => {
      if (uniqueWordLetters.has(letter)) {
        score += 3;
      }
    });

    const uniqueCount = uniqueWordLetters.size;
    score += Math.min(uniqueCount, 6);

    if (preferredShortWords.has(word)) {
      score += wordsRemaining > 2 ? 2 : 4;
    }

    if (glueWords.has(word)) {
      score += wordsRemaining > 2 ? 1 : 3;
    }

    if (preferredStarterWords.has(word) && wordsRemaining >= 3) {
      score += 2;
    }

    if (awkwardWords.has(word)) {
      score -= 8;
    }

    if (word.length >= 10) {
      score -= 2;
    }

    if (word.length <= 2 && wordsRemaining <= 1) {
      score -= 4;
    }

    score -= Math.max(0, countRareLetters(word) - 1) * 2;

    return score;
  }

  function buildWeightedCandidates(
    availableWords,
    missingLetters,
    usedWords,
    wordsRemaining,
  ) {
    const candidates = [];

    availableWords.forEach((word) => {
      if (usedWords.has(word)) return;

      const score = scoreWordAgainstMissingLetters(
        word,
        missingLetters,
        wordsRemaining,
      );

      if (score <= 0) return;

      candidates.push({ word, score });
    });

    return candidates.sort((a, b) => b.score - a.score);
  }

  function weightedRandomPick(candidates) {
    if (!candidates.length) return null;

    const pool = [];

    candidates.forEach((candidate) => {
      const weight = Math.max(1, candidate.score);
      for (let i = 0; i < weight; i += 1) {
        pool.push(candidate.word);
      }
    });

    return chooseRandomItem(pool);
  }

  function tidyGeneratedSentence(words) {
    if (!words.length) return "";

    const formattedWords = words.map((word) => (word === "i" ? "I" : word));
    const sentence = formattedWords.join(" ");

    return `${capitaliseFirst(sentence)}.`;
  }

  function looksUsefulForPangrams(word) {
    if (!/^[a-z]+$/.test(word)) return false;
    if (word.length > 12) return false;
    if (word.length === 1 && word !== "a" && word !== "i") return false;
    if (bannedWords.has(word)) return false;

    return true;
  }

  function prioritiseUsefulWords(words) {
    const highValueLetters = /[jqxzvk]/;
    const mediumValueLetters = /[bcfghmpuwy]/;

    return [...words].sort((a, b) => {
      const aStarter = preferredStarterWords.has(a) ? 1 : 0;
      const bStarter = preferredStarterWords.has(b) ? 1 : 0;
      if (aStarter !== bStarter) return bStarter - aStarter;

      const aPreferredShort = preferredShortWords.has(a) ? 1 : 0;
      const bPreferredShort = preferredShortWords.has(b) ? 1 : 0;
      if (aPreferredShort !== bPreferredShort)
        return bPreferredShort - aPreferredShort;

      const aAwkward = awkwardWords.has(a) ? 1 : 0;
      const bAwkward = awkwardWords.has(b) ? 1 : 0;
      if (aAwkward !== bAwkward) return aAwkward - bAwkward;

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
        "Random is selected. It will generate between 4 and 15 words.";
      return;
    }

    pangramLengthNote.textContent = `${mode} words selected. Click again at any time to generate another ${mode}-word pangram.`;
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
    return Math.floor(Math.random() * 12) + 4;
  }

  function getPaddingCandidates(usedWords) {
    const shortPreferred = [];
    const generalCandidates = [];

    wordList.forEach((word) => {
      if (usedWords.has(word)) return;
      if (word.length < 1 || word.length > 8) return;
      if (word.length === 1 && word !== "a" && word !== "i") return;

      const uniqueLetters = new Set(extractLetters(word));
      if (uniqueLetters.size > 6) return;
      if (awkwardWords.has(word)) return;

      if (preferredShortWords.has(word) || glueWords.has(word)) {
        shortPreferred.push(word);
      } else {
        generalCandidates.push(word);
      }
    });

    return [
      ...shuffleArray(shortPreferred),
      ...shuffleArray(generalCandidates),
    ];
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

  function reorderWordsForReadability(words) {
    if (!words.length) return [];

    const remaining = [...words];
    const ordered = [];

    const firstChoiceIndex = remaining.findIndex((word) =>
      preferredStarterWords.has(word),
    );

    if (firstChoiceIndex >= 0) {
      ordered.push(...remaining.splice(firstChoiceIndex, 1));
    } else {
      ordered.push(...remaining.splice(0, 1));
    }

    while (remaining.length) {
      const lastWord = ordered[ordered.length - 1];
      let bestIndex = 0;
      let bestScore = -Infinity;

      remaining.forEach((word, index) => {
        let score = 0;

        if (glueWords.has(word) && !glueWords.has(lastWord)) {
          score += 3;
        }

        if (!glueWords.has(word) && glueWords.has(lastWord)) {
          score += 2;
        }

        if (preferredShortWords.has(word)) {
          score += 1;
        }

        if (awkwardWords.has(word)) {
          score -= 5;
        }

        if (countRareLetters(lastWord) > 0 && countRareLetters(word) > 0) {
          score -= 4;
        }

        if (lastWord.length <= 2 && word.length <= 2) {
          score -= 3;
        }

        if (lastWord.length >= 9 && word.length >= 9) {
          score -= 3;
        }

        if (score > bestScore) {
          bestScore = score;
          bestIndex = index;
        }
      });

      ordered.push(...remaining.splice(bestIndex, 1));
    }

    return ordered;
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
      safety < 70
    ) {
      safety += 1;

      const wordsRemaining = targetWords - chosenWords.length;
      const candidates = buildWeightedCandidates(
        wordList,
        missingLetters,
        usedWords,
        wordsRemaining,
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
          words: reorderWordsForReadability(shuffleArray(paddedWords)),
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

  function generatePangramFromWordList(targetWords, maxPasses = 220) {
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

    const fallbackWords = reorderWordsForReadability(
      padWordsToTargetCount(bestWords, targetWords),
    );
    const fallbackMissing = getMissingLetters(fallbackWords.join(" "));

    return {
      success:
        fallbackMissing.length === 0 && fallbackWords.length === targetWords,
      words: fallbackWords,
      missingLetters: fallbackMissing,
    };
  }

  function scorePangramPhrase(words) {
    if (!words.length) return -9999;

    let score = 0;

    const shortWords = words.filter((word) => word.length <= 3).length;
    const mediumWords = words.filter(
      (word) => word.length >= 4 && word.length <= 7,
    ).length;
    const longWords = words.filter((word) => word.length >= 10).length;
    const awkwardCount = words.filter((word) => awkwardWords.has(word)).length;
    const glueCount = words.filter((word) => glueWords.has(word)).length;

    words.forEach((word) => {
      if (glueWords.has(word)) score += 4;
      if (preferredShortWords.has(word)) score += 2;
      if (friendlyStarters.has(word) && words.indexOf(word) === 0) score += 5;
      if (awkwardWords.has(word)) score -= 8;
      if (word.length >= 11) score -= 2;
      score -= Math.max(0, countRareLetters(word) - 1) * 2;
    });

    if (shortWords >= 1) score += 3;
    if (shortWords >= 2) score += 2;
    if (mediumWords >= 2) score += 4;
    if (glueCount >= 1) score += 4;
    if (glueCount >= 2) score += 3;
    if (longWords > 2) score -= 4;
    if (awkwardCount > 0) score -= awkwardCount * 6;

    for (let i = 0; i < words.length - 1; i += 1) {
      const current = words[i];
      const next = words[i + 1];

      if (glueWords.has(current) && glueWords.has(next)) {
        score -= 3;
      }

      if (!glueWords.has(current) && !glueWords.has(next)) {
        score += 1;
      }

      if (countRareLetters(current) > 0 && countRareLetters(next) > 0) {
        score -= 4;
      }

      if (current.length <= 2 && next.length <= 2) {
        score -= 3;
      }

      if (current.length >= 9 && next.length >= 9) {
        score -= 3;
      }

      if (current === "the" && next === "quick") score += 2;
      if (current === "over" && next === "the") score += 3;
      if (current === "and" && next === "the") score += 2;
      if (current === "in" && next === "the") score += 2;
      if (current === "of" && next === "the") score += 2;
    }

    return score;
  }

  function generateBestCandidate(targetWords, statusCallback = null) {
    let attemptsToMake = 5;

    if (targetWords <= 4) {
      attemptsToMake = 2;
    } else if (targetWords === 5) {
      attemptsToMake = 3;
    } else if (targetWords >= 6 && targetWords <= 8) {
      attemptsToMake = 4;
    }

    const attempts = [];

    for (let i = 0; i < attemptsToMake; i += 1) {
      if (typeof statusCallback === "function") {
        statusCallback(i + 1, attemptsToMake);
      }

      const result = generatePangramFromWordList(targetWords);

      if (!result.words.length) continue;

      const orderedWords = reorderWordsForReadability(result.words);
      attempts.push({
        success: result.success,
        words: orderedWords,
        missingLetters: result.missingLetters,
        score: scorePangramPhrase(orderedWords),
      });
    }

    if (!attempts.length) {
      return generatePangramFromWordList(targetWords);
    }

    attempts.sort((a, b) => {
      if (a.success !== b.success) {
        return a.success ? -1 : 1;
      }

      if (a.missingLetters.length !== b.missingLetters.length) {
        return a.missingLetters.length - b.missingLetters.length;
      }

      return b.score - a.score;
    });

    return attempts[0];
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
      const result = generateBestCandidate(
        targetWords,
        (currentAttempt, totalAttempts) => {
          generatorStatus.textContent = `Generating a ${targetWords}-word pangram... checking candidate ${currentAttempt} of ${totalAttempts}.`;
        },
      );

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
