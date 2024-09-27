document.addEventListener("DOMContentLoaded", function () {
  // Common Units and Symbols
  const commonUnits = [
    { letter: "°", unicode: "°", name: "Degree" },
    { letter: "℃", unicode: "℃", name: "Degree Celsius" },
    { letter: "℉", unicode: "℉", name: "Degree Fahrenheit" },
    { letter: "∞", unicode: "∞", name: "Infinity" },
    { letter: "∝", unicode: "∝", name: "Proportional To" },
    { letter: "≈", unicode: "≈", name: "Approximately Equal" },
    { letter: "≠", unicode: "≠", name: "Not Equal" },
    { letter: "≡", unicode: "≡", name: "Identically Equal" },
  ];

  // Common Fractions
  const commonFractions = [
    { letter: "½", unicode: "½", name: "One Half" },
    { letter: "⅓", unicode: "⅓", name: "One Third" },
    { letter: "⅔", unicode: "⅔", name: "Two Thirds" },
    { letter: "¼", unicode: "¼", name: "One Quarter" },
    { letter: "¾", unicode: "¾", name: "Three Quarters" },
    { letter: "⅕", unicode: "⅕", name: "One Fifth" },
    { letter: "⅖", unicode: "⅖", name: "Two Fifths" },
    { letter: "⅗", unicode: "⅗", name: "Three Fifths" },
    { letter: "⅘", unicode: "⅘", name: "Four Fifths" },
    { letter: "⅙", unicode: "⅙", name: "One Sixth" },
    { letter: "⅚", unicode: "⅚", name: "Five Sixths" },
    { letter: "⅐", unicode: "⅐", name: "One Seventh" },
    { letter: "⅛", unicode: "⅛", name: "One Eighth" },
    { letter: "⅜", unicode: "⅜", name: "Three Eighths" },
    { letter: "⅝", unicode: "⅝", name: "Five Eighths" },
    { letter: "⅞", unicode: "⅞", name: "Seven Eighths" },
    { letter: "⅑", unicode: "⅑", name: "One Ninth" },
    { letter: "⅒", unicode: "⅒", name: "One Tenth" },
  ];

  // Less Common Fractions (Without Duplicates)
  const lessCommonFractions = [
    { letter: "¹³⁄₁₀", unicode: "¹³⁄₁₀", name: "Thirteen Tenths" }, // 1.3
    { letter: "⁴⁄₃", unicode: "⁴⁄₃", name: "Four Thirds" }, // Improper fraction
    { letter: "¹¹⁄₄", unicode: "¹¹⁄₄", name: "Eleven Quarters" }, // Improper fraction
  ];

  // Basic Arithmetic Operators
  const basicArithmeticOperators = [
    { letter: "+", unicode: "+", name: "Plus" },
    { letter: "−", unicode: "−", name: "Minus" },
    { letter: "±", unicode: "±", name: "Plus-Minus" },
    { letter: "×", unicode: "×", name: "Multiplication" },
    { letter: "÷", unicode: "÷", name: "Division" },
    { letter: "∗", unicode: "∗", name: "Asterisk Operator" },
    { letter: "∕", unicode: "∕", name: "Division Slash" },
  ];

  // Advanced Arithmetic Operators
  const advancedArithmeticOperators = [
    { letter: "√", unicode: "√", name: "Square Root" },
    { letter: "∛", unicode: "∛", name: "Cube Root" },
    { letter: "∜", unicode: "∜", name: "Fourth Root" },
    { letter: "∑", unicode: "∑", name: "Summation" },
    { letter: "∏", unicode: "∏", name: "Product" },
    { letter: "∫", unicode: "∫", name: "Integral" },
    { letter: "∬", unicode: "∬", name: "Double Integral" },
    { letter: "∂", unicode: "∂", name: "Partial Differential" },
  ];

  // Equality and Inequality Symbols
  const equalityInequalitySymbols = [
    { letter: "=", unicode: "=", name: "Equals" },
    { letter: "≠", unicode: "≠", name: "Not Equal To" },
    { letter: "≡", unicode: "≡", name: "Identical To" },
    { letter: "≢", unicode: "≢", name: "Not Identical To" },
    { letter: "≤", unicode: "≤", name: "Less Than or Equal To" },
    { letter: "≥", unicode: "≥", name: "Greater Than or Equal To" },
    { letter: "≈", unicode: "≈", name: "Approximately Equal To" },
    { letter: "≲", unicode: "≲", name: "Less Than or Equivalent To" },
  ];

  // Set Theory Symbols
  const setTheorySymbols = [
    { letter: "∈", unicode: "∈", name: "Element Of" },
    { letter: "∉", unicode: "∉", name: "Not an Element Of" },
    { letter: "∋", unicode: "∋", name: "Contains As Member" },
    { letter: "∅", unicode: "∅", name: "Empty Set" },
    { letter: "∩", unicode: "∩", name: "Intersection" },
    { letter: "∪", unicode: "∪", name: "Union" },
    { letter: "⊂", unicode: "⊂", name: "Subset Of" },
    { letter: "⊃", unicode: "⊃", name: "Superset Of" },
  ];

  // Logical and Conditional Symbols
  const logicalConditionalSymbols = [
    { letter: "∧", unicode: "∧", name: "Logical And" },
    { letter: "∨", unicode: "∨", name: "Logical Or" },
    { letter: "¬", unicode: "¬", name: "Not" },
    { letter: "⇒", unicode: "⇒", name: "Implies" },
    { letter: "⇔", unicode: "⇔", name: "If and Only If" },
    { letter: "∀", unicode: "∀", name: "For All" },
    { letter: "∃", unicode: "∃", name: "There Exists" },
    { letter: "∴", unicode: "∴", name: "Therefore" },
    { letter: "∵", unicode: "∵", name: "Because" },
  ];

  // Miscellaneous Math Symbols (Removed duplicates)
  const miscellaneousMathSymbols = [
    { letter: "⊕", unicode: "⊕", name: "Direct Sum" },
    { letter: "⊗", unicode: "⊗", name: "Tensor Product" },
    { letter: "⊥", unicode: "⊥", name: "Perpendicular" },
    { letter: "∮", unicode: "∮", name: "Contour Integral" },
    { letter: "∅", unicode: "∅", name: "Empty Set" },
    { letter: "ℕ", unicode: "ℕ", name: "Set of Natural Numbers" },
    { letter: "ℤ", unicode: "ℤ", name: "Set of Integers" },
    {
      letter: "ℚ",
      unicode: "ℚ",
      name: "Set of Rational Numbers",
      id: "rational-number-key",
    },
    { letter: "ℝ", unicode: "ℝ", name: "Set of Real Numbers" },
    {
      letter: "ℂ",
      unicode: "ℂ",
      name: "Set of Complex Numbers",
      id: "complex-number-key",
    },
    { letter: "π", unicode: "π", name: "Pi" },
    { letter: "ℵ", unicode: "ℵ", name: "Aleph" },
    { letter: "⊖", unicode: "⊖", name: "Circled Minus" },
    { letter: "⊙", unicode: "⊙", name: "Circled Dot Operator" },
    { letter: "⊚", unicode: "⊚", name: "Circled Ring Operator" },
    { letter: "⊨", unicode: "⊨", name: "Entails" },
  ];

  // Algebraic Symbols
  const algebraicSymbols = [
    { letter: "𝑥", unicode: "𝑥", name: "Variable x" },
    { letter: "𝑎", unicode: "𝑎", name: "Variable a" },
    { letter: "𝑏", unicode: "𝑏", name: "Variable b" },
    { letter: "𝑦", unicode: "𝑦", name: "Variable y" },
    { letter: "𝑧", unicode: "𝑧", name: "Variable z" },
    { letter: "𝑐", unicode: "𝑐", name: "Variable c" },
    { letter: "𝑑", unicode: "𝑑", name: "Variable d" },
    { letter: "𝑒", unicode: "𝑒", name: "Variable e" },
    { letter: "𝛼", unicode: "𝛼", name: "Alpha" },
    { letter: "𝛽", unicode: "𝛽", name: "Beta" },
    { letter: "𝛾", unicode: "𝛾", name: "Gamma" },
    { letter: "𝜆", unicode: "𝜆", name: "Lambda" },
    { letter: "𝜇", unicode: "𝜇", name: "Mu" },
    { letter: "𝜎", unicode: "𝜎", name: "Sigma" },
    { letter: "𝜃", unicode: "𝜃", name: "Theta" },
    { letter: "𝑛", unicode: "𝑛", name: "Variable n" },
    { letter: "𝑚", unicode: "𝑚", name: "Variable m (Slope)" },
    { letter: "𝑘", unicode: "𝑘", name: "Variable k (Constant)" },
    { letter: "𝑓", unicode: "𝑓", name: "Function f" },
    { letter: "𝑔", unicode: "𝑔", name: "Function g" },
    { letter: "𝜋", unicode: "𝜋", name: "Pi" },
    { letter: "𝑒", unicode: "𝑒", name: "Euler's Number (e)" },
    { letter: "𝑖", unicode: "𝑖", name: "Imaginary Unit (i)" },
  ];

  // Geometry Symbols
  const geometrySymbols = [
    { letter: "∠", unicode: "∠", name: "Angle" },
    { letter: "∥", unicode: "∥", name: "Parallel" },
    { letter: "⊥", unicode: "⊥", name: "Perpendicular" },
    { letter: "⊿", unicode: "⊿", name: "Right Triangle" },
    { letter: "△", unicode: "△", name: "Triangle" },
    { letter: "◯", unicode: "◯", name: "Circle" },
    { letter: "∟", unicode: "∟", name: "Right Angle" },
    { letter: "⊓", unicode: "⊓", name: "Square Cap" },
    { letter: "⊔", unicode: "⊔", name: "Square Cup" },
    { letter: "∢", unicode: "∢", name: "Acute Angle" },
    { letter: "∣", unicode: "∣", name: "Divides" },
    { letter: "≡", unicode: "≡", name: "Identical To" },
    { letter: "≠", unicode: "≠", name: "Not Equal To" },
    { letter: "≅", unicode: "≅", name: "Approximately" },
    { letter: "⊂", unicode: "⊂", name: "Proper Subset" },
    { letter: "⊃", unicode: "⊃", name: "Proper Superset" },
    { letter: "⊆", unicode: "⊆", name: "Subset or Equal" },
  ];

  // Calculus and Analysis Symbols
  const calculusSymbols = [
    { letter: "∂", unicode: "∂", name: "Partial Derivative" },
    { letter: "∇", unicode: "∇", name: "Nabla" },
    { letter: "∫", unicode: "∫", name: "Integral" },
    { letter: "∬", unicode: "∬", name: "Double Integral" },
    { letter: "∭", unicode: "∭", name: "Triple Integral" },
    { letter: "∮", unicode: "∮", name: "Contour Integral" },
    { letter: "∯", unicode: "∯", name: "Surface Integral" },
    { letter: "∰", unicode: "∰", name: "Volume Integral" },
    { letter: "∞", unicode: "∞", name: "Infinity" },
    { letter: "𝑓", unicode: "𝑓", name: "Function" },
    { letter: "′", unicode: "′", name: "Prime" },
    { letter: "″", unicode: "″", name: "Double Prime" },
    { letter: "∏", unicode: "∏", name: "Product" },
    { letter: "Σ", unicode: "Σ", name: "Summation" },
    { letter: "∆", unicode: "∆", name: "Change or Delta" },
  ];

  // Ordinal Number Superscripts
  const ordinalSuperscripts = [
    { letter: "1ˢᵗ", unicode: "1\u02E2\u1D57", name: "First" }, // Unicode for 'st'
    { letter: "2ⁿᵈ", unicode: "2\u207F\u1D48", name: "Second" }, // Unicode for 'nd'
    { letter: "3ʳᵈ", unicode: "3\u02B3\u1D48", name: "Third" }, // Unicode for 'rd'
    { letter: "4ᵗʰ", unicode: "4\u1D57\u02B0", name: "Fourth" }, // Unicode for 'th'
    { letter: "5ᵗʰ", unicode: "5\u1D57\u02B0", name: "Fifth" },
    { letter: "6ᵗʰ", unicode: "6\u1D57\u02B0", name: "Sixth" },
    { letter: "7ᵗʰ", unicode: "7\u1D57\u02B0", name: "Seventh" },
    { letter: "8ᵗʰ", unicode: "8\u1D57\u02B0", name: "Eighth" },
    { letter: "9ᵗʰ", unicode: "9\u1D57\u02B0", name: "Ninth" },
    { letter: "10ᵗʰ", unicode: "10\u1D57\u02B0", name: "Tenth" },
    { letter: "0ᵗʰ", unicode: "0\u1D57\u02B0", name: "Zeroth" },
    { letter: "ˢᵗ", unicode: "\u02E2\u1D57", name: "Superscript st" },
    { letter: "ⁿᵈ", unicode: "\u207F\u1D48", name: "Superscript nd" },
    { letter: "ʳᵈ", unicode: "\u02B3\u1D48", name: "Superscript rd" },
    { letter: "ᵗʰ", unicode: "\u1D57\u02B0", name: "Superscript th" },
  ];

  function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    symbols.forEach((item) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

      // Add the unique id if provided (for Acetate key)
      if (item.id) {
        key.id = item.id;
      }

      const letterSpan = document.createElement("span");
      letterSpan.className = "letter";
      letterSpan.innerText = item.letter;

      const nameSpan = document.createElement("span");
      nameSpan.className = "name";
      nameSpan.innerText = item.name;

      key.appendChild(letterSpan);
      key.appendChild(nameSpan);

      key.dataset.unicode = item.unicode;

      key.onclick = function (event) {
        copyToClipboard(item.unicode);
        showTooltip("Copied", event);
      };

      container.appendChild(key);
    });
  }

  // Function to copy to clipboard
  function copyToClipboard(symbol) {
    const tempInput = document.createElement("textarea"); // Use textarea instead of input for better support
    tempInput.value = symbol;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  // Function to show tooltip
  function showTooltip(message, event) {
    // Remove existing tooltips first
    removeExistingTooltips();

    // Create a new tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "copy-tooltip";
    tooltip.innerText = message;
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "1000";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none"; // Tooltip shouldn't block interaction

    document.body.appendChild(tooltip);

    // Position the tooltip at the click location
    const x = event.pageX;
    const y = event.pageY;
    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`; // Center horizontally
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`; // Position above the click

    // Automatically remove the tooltip after a delay
    setTimeout(() => {
      if (tooltip.parentElement) {
        document.body.removeChild(tooltip);
      }
    }, 1500); // Show tooltip for 1.5 seconds
  }

  // Function to remove existing tooltips
  function removeExistingTooltips() {
    const tooltips = document.querySelectorAll(".copy-tooltip");
    tooltips.forEach((tooltip) => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    });
  }

  // Create keys for the different mathematical symbol groups
  createKeys("common-units-container", commonUnits);
  createKeys("common-fractions-container", commonFractions);
  createKeys("less-common-fractions-container", lessCommonFractions);
  createKeys("basic-arithmetic-container", basicArithmeticOperators);
  createKeys("advanced-arithmetic-container", advancedArithmeticOperators);
  createKeys("equality-inequality-container", equalityInequalitySymbols);
  createKeys("set-theory-container", setTheorySymbols);
  createKeys("logical-conditional-container", logicalConditionalSymbols);
  createKeys("miscellaneous-math-container", miscellaneousMathSymbols);
  createKeys("algebraic-symbols-container", algebraicSymbols);
  createKeys("geometry-symbols-container", geometrySymbols);
  createKeys("calculus-symbols-container", calculusSymbols);
  createKeys("ordinal-superscripts-container", ordinalSuperscripts);
});
