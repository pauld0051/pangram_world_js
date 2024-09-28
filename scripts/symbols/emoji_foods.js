document.addEventListener("DOMContentLoaded", function () {
  const fruitEmojis = [
    // Fruits
    { letter: "🍏", unicode: "🍏", name: "Green Apple", id: "green-apple" },
    { letter: "🍎", unicode: "🍎", name: "Red Apple", id: "red-apple" },
    { letter: "🍐", unicode: "🍐", name: "Pear", id: "pear" },
    { letter: "🍊", unicode: "🍊", name: "Tangerine", id: "tangerine" },
    { letter: "🍋", unicode: "🍋", name: "Lemon", id: "lemon" },
    { letter: "🍌", unicode: "🍌", name: "Banana", id: "banana" },
    { letter: "🍉", unicode: "🍉", name: "Watermelon", id: "watermelon" },
    { letter: "🍇", unicode: "🍇", name: "Grapes", id: "grapes" },
    { letter: "🍓", unicode: "🍓", name: "Strawberry", id: "strawberry" },
    { letter: "🫐", unicode: "🫐", name: "Blueberry", id: "blueberry" },
    { letter: "🍒", unicode: "🍒", name: "Cherries", id: "cherries" },
    { letter: "🥝", unicode: "🥝", name: "Kiwi Fruit", id: "kiwi-fruit" },
    { letter: "🥑", unicode: "🥑", name: "Avocado", id: "avocado" },
    { letter: "🍍", unicode: "🍍", name: "Pineapple", id: "pineapple" },
    { letter: "🥥", unicode: "🥥", name: "Coconut", id: "coconut" },
    { letter: "🥭", unicode: "🥭", name: "Mango", id: "mango" },
    { letter: "🍑", unicode: "🍑", name: "Peach", id: "peach" },
    { letter: "🍈", unicode: "🍈", name: "Melon", id: "melon" },
  ];
  const vegetableEmojis = [
    { letter: "🍅", unicode: "🍅", name: "Tomato", id: "tomato" },
    { letter: "🍆", unicode: "🍆", name: "Eggplant", id: "eggplant" },
    { letter: "🥒", unicode: "🥒", name: "Cucumber", id: "cucumber" },
    { letter: "🥕", unicode: "🥕", name: "Carrot", id: "carrot" },
    { letter: "🌽", unicode: "🌽", name: "Corn", id: "corn" },
    { letter: "🌶️", unicode: "🌶️", name: "Hot Pepper", id: "hot-pepper" },
    { letter: "🫑", unicode: "🫑", name: "Bell Pepper", id: "bell-pepper" },
    { letter: "🥦", unicode: "🥦", name: "Broccoli", id: "broccoli" },
    { letter: "🥬", unicode: "🥬", name: "Leafy Green", id: "leafy-green" },
    { letter: "🥔", unicode: "🥔", name: "Potato", id: "potato" },
    {
      letter: "🍠",
      unicode: "🍠",
      name: "Roasted Sweet Potato",
      id: "sweet-potato",
    },
    { letter: "🧄", unicode: "🧄", name: "Garlic", id: "garlic" },
    { letter: "🧅", unicode: "🧅", name: "Onion", id: "onion" },
    { letter: "🍄", unicode: "🍄", name: "Mushroom", id: "mushroom" },
  ];

  const nutEmojis = [
    { letter: "🌰", unicode: "🌰", name: "Chestnut", id: "chestnut" },
    { letter: "🥜", unicode: "🥜", name: "Peanuts", id: "peanuts" },
    { letter: "🫘", unicode: "🫘", name: "Beans", id: "beans" },
  ];

  const bakedGoodsEmojis = [
    { letter: "🍞", unicode: "🍞", name: "Bread", id: "bread" },
    { letter: "🥖", unicode: "🥖", name: "Baguette", id: "baguette" },
    { letter: "🥐", unicode: "🥐", name: "Croissant", id: "croissant" },
    { letter: "🥯", unicode: "🥯", name: "Bagel", id: "bagel" },
    { letter: "🥨", unicode: "🥨", name: "Pretzel", id: "pretzel" },
    { letter: "🥞", unicode: "🥞", name: "Pancakes", id: "pancakes" },
    { letter: "🧇", unicode: "🧇", name: "Waffle", id: "waffle" },
  ];

  const sweetsEmojis = [
    { letter: "🍩", unicode: "🍩", name: "Doughnut", id: "doughnut" },
    { letter: "🍪", unicode: "🍪", name: "Cookie", id: "cookie" },
    { letter: "🎂", unicode: "🎂", name: "Birthday Cake", id: "birthday-cake" },
    { letter: "🍰", unicode: "🍰", name: "Shortcake", id: "shortcake" },
    { letter: "🧁", unicode: "🧁", name: "Cupcake", id: "cupcake" },
    { letter: "🥧", unicode: "🥧", name: "Pie", id: "pie" },
    { letter: "🍫", unicode: "🍫", name: "Chocolate Bar", id: "chocolate-bar" },
    { letter: "🍬", unicode: "🍬", name: "Candy", id: "candy" },
    { letter: "🍭", unicode: "🍭", name: "Lollipop", id: "lollipop" },
    {
      letter: "🍦",
      unicode: "🍦",
      name: "Soft Ice Cream",
      id: "soft-ice-cream",
    },
    { letter: "🍨", unicode: "🍨", name: "Ice Cream", id: "ice-cream" },
    { letter: "🍧", unicode: "🍧", name: "Shaved Ice", id: "shaved-ice" },
    { letter: "🍮", unicode: "🍮", name: "Custard", id: "custard" },
    { letter: "🍯", unicode: "🍯", name: "Honey Pot", id: "honey-pot" },
    { letter: "🍿", unicode: "🍿", name: "Popcorn", id: "popcorn" },
  ];
  const fastFoodEmojis = [
    { letter: "🍕", unicode: "🍕", name: "Pizza", id: "pizza" },
    { letter: "🍔", unicode: "🍔", name: "Hamburger", id: "hamburger" },
    { letter: "🍟", unicode: "🍟", name: "French Fries", id: "french-fries" },
    { letter: "🌭", unicode: "🌭", name: "Hotdog", id: "hotdog" },
    { letter: "🥪", unicode: "🥪", name: "Sandwich", id: "sandwich" },
    { letter: "🌮", unicode: "🌮", name: "Taco", id: "taco" },
    { letter: "🌯", unicode: "🌯", name: "Burrito", id: "burrito" },
    {
      letter: "🥙",
      unicode: "🥙",
      name: "Stuffed Flatbread",
      id: "stuffed-flatbread",
    },
    { letter: "🫔", unicode: "🫔", name: "Tamale", id: "tamale" },
    { letter: "🥫", unicode: "🥫", name: "Canned Food", id: "canned-food" },
  ];

  const mealEmojis = [
    // Meals
    { letter: "🍳", unicode: "🍳", name: "Cooking", id: "cooking" },
    {
      letter: "🥘",
      unicode: "🥘",
      name: "Shallow Pan of Food",
      id: "shallow-pan-of-food",
    },
    { letter: "🍲", unicode: "🍲", name: "Pot of Food", id: "pot-of-food" },
    { letter: "🍝", unicode: "🍝", name: "Spaghetti", id: "spaghetti" },
    { letter: "🍜", unicode: "🍜", name: "Ramen", id: "ramen" },
    { letter: "🍛", unicode: "🍛", name: "Curry Rice", id: "curry-rice" },
    { letter: "🍚", unicode: "🍚", name: "Cooked Rice", id: "cooked-rice" },
    { letter: "🍙", unicode: "🍙", name: "Rice Ball", id: "rice-ball" },
    { letter: "🍘", unicode: "🍘", name: "Rice Cracker", id: "rice-cracker" },
    {
      letter: "🥣",
      unicode: "🥣",
      name: "Bowl with Spoon",
      id: "bowl-with-spoon",
    },
    { letter: "🥗", unicode: "🥗", name: "Green Salad", id: "green-salad" },
  ];

  const drinkEmojis = [
    // Alcoholic Beverages
    { letter: "🍷", unicode: "🍷", name: "Wine Glass", id: "wine-glass" },
    {
      letter: "🍸",
      unicode: "🍸",
      name: "Cocktail Glass",
      id: "cocktail-glass",
    },
    {
      letter: "🍹",
      unicode: "🍹",
      name: "Tropical Drink",
      id: "tropical-drink",
    },
    { letter: "🍺", unicode: "🍺", name: "Beer Mug", id: "beer-mug" },
    {
      letter: "🍻",
      unicode: "🍻",
      name: "Clinking Beer Mugs",
      id: "clinking-beer-mugs",
    },
    {
      letter: "🥂",
      unicode: "🥂",
      name: "Clinking Glasses",
      id: "clinking-glasses",
    },
    { letter: "🍶", unicode: "🍶", name: "Sake", id: "sake" },
    {
      letter: "🍾",
      unicode: "🍾",
      name: "Bottle with Popping Cork",
      id: "bottle-with-popping-cork",
    },
    {
      letter: "🥃",
      unicode: "🥃",
      name: "Tumbler Glass",
      id: "tumbler-glass",
    },

    // Non-Alcoholic Beverages
    {
      letter: "🥛",
      unicode: "🥛",
      name: "Glass of Milk",
      id: "glass-of-milk",
    },
    { letter: "☕", unicode: "☕", name: "Hot Beverage", id: "hot-beverage" },
    {
      letter: "🍵",
      unicode: "🍵",
      name: "Teacup Without Handle",
      id: "teacup-without-handle",
    },
    { letter: "🫖", unicode: "🫖", name: "Teapot", id: "teapot" },
    { letter: "🧃", unicode: "🧃", name: "Beverage Box", id: "beverage-box" },
    { letter: "🧋", unicode: "🧋", name: "Bubble Tea", id: "bubble-tea" },
    { letter: "🧉", unicode: "🧉", name: "Mate", id: "mate" },
    {
      letter: "🥤",
      unicode: "🥤",
      name: "Cup with Straw",
      id: "cup-with-straw",
    },
    { letter: "🍼", unicode: "🍼", name: "Baby Bottle", id: "baby-bottle" },

    // Other
    {
      letter: "🫗",
      unicode: "🫗",
      name: "Pouring Liquid",
      id: "pouring-liquid",
    },
    { letter: "🧊", unicode: "🧊", name: "Ice Cube", id: "ice-cube" },
    { letter: "🏺", unicode: "🏺", name: "Amphora", id: "amphora" },
  ];

  const seafoodEmojis = [
    { letter: "🍣", unicode: "🍣", name: "Sushi", id: "sushi" },
    { letter: "🍤", unicode: "🍤", name: "Fried Shrimp", id: "fried-shrimp" },
    { letter: "🦪", unicode: "🦪", name: "Oyster", id: "oyster" },
    { letter: "🦀", unicode: "🦀", name: "Crab", id: "crab" },
    { letter: "🦞", unicode: "🦞", name: "Lobster", id: "lobster" },
    { letter: "🦐", unicode: "🦐", name: "Shrimp", id: "shrimp" },
    { letter: "🦑", unicode: "🦑", name: "Squid", id: "squid" },
    { letter: "🐟", unicode: "🐟", name: "Fish", id: "fish" },
    {
      letter: "🐠",
      unicode: "🐠",
      name: "Tropical Fish",
      id: "tropical-fish",
    },
    { letter: "🐡", unicode: "🐡", name: "Blowfish", id: "blowfish" },
    { letter: "🐙", unicode: "🐙", name: "Octopus", id: "octopus" },
    { letter: "🐚", unicode: "🐚", name: "Spiral Shell", id: "spiral-shell" },
  ];

  const preparedFoodEmojis = [
    { letter: "🥟", unicode: "🥟", name: "Dumpling", id: "dumpling" },
    {
      letter: "🥠",
      unicode: "🥠",
      name: "Fortune Cookie",
      id: "fortune-cookie",
    },
    { letter: "🥡", unicode: "🥡", name: "Takeout Box", id: "takeout-box" },
    { letter: "🍱", unicode: "🍱", name: "Bento Box", id: "bento-box" },
    { letter: "🍘", unicode: "🍘", name: "Rice Cracker", id: "rice-cracker" },
    { letter: "🍙", unicode: "🍙", name: "Rice Ball", id: "rice-ball" },
    { letter: "🍚", unicode: "🍚", name: "Cooked Rice", id: "cooked-rice" },
    { letter: "🍛", unicode: "🍛", name: "Curry Rice", id: "curry-rice" },
    {
      letter: "🍜",
      unicode: "🍜",
      name: "Steaming Bowl",
      id: "steaming-bowl",
    },
    { letter: "🍝", unicode: "🍝", name: "Spaghetti", id: "spaghetti" },
    { letter: "🍲", unicode: "🍲", name: "Pot of Food", id: "pot-of-food" },
    {
      letter: "🥘",
      unicode: "🥘",
      name: "Shallow Pan of Food",
      id: "shallow-pan-of-food",
    },
    { letter: "🍢", unicode: "🍢", name: "Oden", id: "oden" },
    { letter: "🍣", unicode: "🍣", name: "Sushi", id: "sushi" },
    { letter: "🍤", unicode: "🍤", name: "Fried Shrimp", id: "fried-shrimp" },
    {
      letter: "🍥",
      unicode: "🍥",
      name: "Fish Cake with Swirl",
      id: "fish-cake-with-swirl",
    },
    {
      letter: "🍛",
      unicode: "🍛",
      name: "Curry and Rice",
      id: "curry-and-rice",
    },
    { letter: "🍱", unicode: "🍱", name: "Bento Box", id: "bento-box" },
    { letter: "🍝", unicode: "🍝", name: "Spaghetti", id: "spaghetti" },
    { letter: "🍲", unicode: "🍲", name: "Hot Pot", id: "hot-pot" },
  ];

  const condimentsIngredientsEmojis = [
    { letter: "🧂", unicode: "🧂", name: "Salt", id: "salt" },
    { letter: "🧈", unicode: "🧈", name: "Butter", id: "butter" },
    { letter: "🍯", unicode: "🍯", name: "Honey Pot", id: "honey-pot" },
    { letter: "🌶️", unicode: "🌶️", name: "Hot Pepper", id: "hot-pepper" },
    { letter: "🧄", unicode: "🧄", name: "Garlic", id: "garlic" },
    { letter: "🧅", unicode: "🧅", name: "Onion", id: "onion" },
    { letter: "🧆", unicode: "🧆", name: "Falafel", id: "falafel" },
    { letter: "🥫", unicode: "🥫", name: "Canned Food", id: "canned-food" },
    { letter: "🍋", unicode: "🍋", name: "Lemon", id: "lemon" },
    { letter: "🫒", unicode: "🫒", name: "Olive", id: "olive" },
    { letter: "🥜", unicode: "🥜", name: "Peanuts", id: "peanuts" },
    {
      letter: "🍠",
      unicode: "🍠",
      name: "Roasted Sweet Potato",
      id: "roasted-sweet-potato",
    },
    { letter: "🥖", unicode: "🥖", name: "Baguette", id: "baguette" },
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
  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  // Function to show tooltip
  function showTooltip(message, event) {
    removeExistingTooltips();

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
    tooltip.style.pointerEvents = "none";

    document.body.appendChild(tooltip);

    const x = event.pageX;
    const y = event.pageY;
    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`; // Center horizontally
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`; // Position above the click

    setTimeout(() => {
      if (tooltip.parentElement) {
        document.body.removeChild(tooltip);
      }
    }, 1500);
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

  // Create keys for all categories
  createKeys("fruit-emojis-container", fruitEmojis);
  createKeys("vegetable-emojis-container", vegetableEmojis);
  createKeys("nut-emojis-container", nutEmojis);
  createKeys("baked-goods-emojis-container", bakedGoodsEmojis);
  createKeys("sweets-emojis-container", sweetsEmojis);
  createKeys("fast-food-emojis-container", fastFoodEmojis);
  createKeys("meal-emojis-container", mealEmojis);
  createKeys("drink-emojis-container", drinkEmojis);
  createKeys("seafood-emojis-container", seafoodEmojis);
  createKeys("prepared-food-emojis-container", preparedFoodEmojis);
  createKeys("condiments-ingredients-emojis-container", condimentsIngredientsEmojis);
});
