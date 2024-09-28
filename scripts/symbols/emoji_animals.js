document.addEventListener("DOMContentLoaded", function () {
  const mammalEmojis = [
  { letter: "🐶", unicode: "🐶", name: "Dog Face", id: "dog-face" },
  { letter: "🐕", unicode: "🐕", name: "Dog", id: "dog" },
  { letter: "🐩", unicode: "🐩", name: "Poodle", id: "poodle" },
  { letter: "🐺", unicode: "🐺", name: "Wolf", id: "wolf" },
  { letter: "🦊", unicode: "🦊", name: "Fox", id: "fox" },
  { letter: "🦝", unicode: "🦝", name: "Raccoon", id: "raccoon" },
  { letter: "🐱", unicode: "🐱", name: "Cat Face", id: "cat-face" },
  { letter: "🐈", unicode: "🐈", name: "Cat", id: "cat" },
  { letter: "🐅", unicode: "🐅", name: "Tiger", id: "tiger" },
  { letter: "🐆", unicode: "🐆", name: "Leopard", id: "leopard" },
  { letter: "🐯", unicode: "🐯", name: "Tiger Face", id: "tiger-face" },
  { letter: "🦁", unicode: "🦁", name: "Lion", id: "lion" },
  { letter: "🐴", unicode: "🐴", name: "Horse", id: "horse" },
  { letter: "🐎", unicode: "🐎", name: "Horse Running", id: "horse-running" },
  { letter: "🦄", unicode: "🦄", name: "Unicorn", id: "unicorn" },
  { letter: "🦓", unicode: "🦓", name: "Zebra", id: "zebra" },
  { letter: "🦌", unicode: "🦌", name: "Deer", id: "deer" },
  { letter: "🐮", unicode: "🐮", name: "Cow Face", id: "cow-face" },
  { letter: "🐄", unicode: "🐄", name: "Cow", id: "cow" },
  { letter: "🐂", unicode: "🐂", name: "Ox", id: "ox" },
  { letter: "🐃", unicode: "🐃", name: "Water Buffalo", id: "water-buffalo" },
  { letter: "🐘", unicode: "🐘", name: "Elephant", id: "elephant" },
  { letter: "🦏", unicode: "🦏", name: "Rhinoceros", id: "rhinoceros" },
  { letter: "🦛", unicode: "🦛", name: "Hippopotamus", id: "hippopotamus" },
  { letter: "🐪", unicode: "🐪", name: "Dromedary Camel", id: "dromedary-camel" },
  { letter: "🐫", unicode: "🐫", name: "Camel", id: "camel" },
  { letter: "🦒", unicode: "🦒", name: "Giraffe", id: "giraffe" },
  { letter: "🐷", unicode: "🐷", name: "Pig Face", id: "pig-face" },
  { letter: "🐖", unicode: "🐖", name: "Pig", id: "pig" },
  { letter: "🐗", unicode: "🐗", name: "Boar", id: "boar" },
  { letter: "🐭", unicode: "🐭", name: "Mouse Face", id: "mouse-face" },
  { letter: "🐁", unicode: "🐁", name: "Mouse", id: "mouse" },
  { letter: "🐀", unicode: "🐀", name: "Rat", id: "rat" },
  { letter: "🐹", unicode: "🐹", name: "Hamster", id: "hamster" },
  { letter: "🐰", unicode: "🐰", name: "Rabbit Face", id: "rabbit-face" },
  { letter: "🐇", unicode: "🐇", name: "Rabbit", id: "rabbit" },
  { letter: "🐿️", unicode: "🐿️", name: "Chipmunk", id: "chipmunk" },
  { letter: "🦔", unicode: "🦔", name: "Hedgehog", id: "hedgehog" },
  { letter: "🦇", unicode: "🦇", name: "Bat", id: "bat" },
  { letter: "🐻", unicode: "🐻", name: "Bear", id: "bear" },
  { letter: "🐼", unicode: "🐼", name: "Panda", id: "panda" },
  { letter: "🐨", unicode: "🐨", name: "Koala", id: "koala" },
  { letter: "🦦", unicode: "🦦", name: "Otter", id: "otter" },
  { letter: "🦥", unicode: "🦥", name: "Sloth", id: "sloth" },
  { letter: "🐵", unicode: "🐵", name: "Monkey Face", id: "monkey-face" },
  { letter: "🐒", unicode: "🐒", name: "Monkey", id: "monkey" },
  { letter: "🦍", unicode: "🦍", name: "Gorilla", id: "gorilla" },
  { letter: "🦧", unicode: "🦧", name: "Orangutan", id: "orangutan" },
  { letter: "🐶", unicode: "🐶", name: "Dog Face", id: "dog-face" },
  { letter: "🐕", unicode: "🐕", name: "Dog", id: "dog" },
  { letter: "🐩", unicode: "🐩", name: "Poodle", id: "poodle" },
  { letter: "🐺", unicode: "🐺", name: "Wolf", id: "wolf" },
  { letter: "🦊", unicode: "🦊", name: "Fox", id: "fox" },
  { letter: "🦝", unicode: "🦝", name: "Raccoon", id: "raccoon" },
  { letter: "🐱", unicode: "🐱", name: "Cat Face", id: "cat-face" },
  { letter: "🐈", unicode: "🐈", name: "Cat", id: "cat" },
  { letter: "🐅", unicode: "🐅", name: "Tiger", id: "tiger" },
  { letter: "🐆", unicode: "🐆", name: "Leopard", id: "leopard" },
  { letter: "🐯", unicode: "🐯", name: "Tiger Face", id: "tiger-face" },
  { letter: "🦁", unicode: "🦁", name: "Lion", id: "lion" },
  { letter: "🐴", unicode: "🐴", name: "Horse", id: "horse" },
  { letter: "🐎", unicode: "🐎", name: "Horse Running", id: "horse-running" },
  { letter: "🦄", unicode: "🦄", name: "Unicorn", id: "unicorn" },
  { letter: "🦓", unicode: "🦓", name: "Zebra", id: "zebra" },
  { letter: "🦌", unicode: "🦌", name: "Deer", id: "deer" },
  { letter: "🐮", unicode: "🐮", name: "Cow Face", id: "cow-face" },
  { letter: "🐄", unicode: "🐄", name: "Cow", id: "cow" },
  { letter: "🐂", unicode: "🐂", name: "Ox", id: "ox" },
  { letter: "🐃", unicode: "🐃", name: "Water Buffalo", id: "water-buffalo" },
  { letter: "🐘", unicode: "🐘", name: "Elephant", id: "elephant" },
  { letter: "🦏", unicode: "🦏", name: "Rhinoceros", id: "rhinoceros" },
  { letter: "🦛", unicode: "🦛", name: "Hippopotamus", id: "hippopotamus" },
  { letter: "🐪", unicode: "🐪", name: "Dromedary Camel", id: "dromedary-camel" },
  { letter: "🐫", unicode: "🐫", name: "Camel", id: "camel" },
  { letter: "🦒", unicode: "🦒", name: "Giraffe", id: "giraffe" },
  { letter: "🐷", unicode: "🐷", name: "Pig Face", id: "pig-face" },
  { letter: "🐖", unicode: "🐖", name: "Pig", id: "pig" },
  { letter: "🐗", unicode: "🐗", name: "Boar", id: "boar" },
  { letter: "🐭", unicode: "🐭", name: "Mouse Face", id: "mouse-face" },
  { letter: "🐁", unicode: "🐁", name: "Mouse", id: "mouse" },
  { letter: "🐀", unicode: "🐀", name: "Rat", id: "rat" },
  { letter: "🐹", unicode: "🐹", name: "Hamster", id: "hamster" },
  { letter: "🐰", unicode: "🐰", name: "Rabbit Face", id: "rabbit-face" },
  { letter: "🐇", unicode: "🐇", name: "Rabbit", id: "rabbit" },
  { letter: "🐿️", unicode: "🐿️", name: "Chipmunk", id: "chipmunk" },
  { letter: "🦔", unicode: "🦔", name: "Hedgehog", id: "hedgehog" },
  { letter: "🦇", unicode: "🦇", name: "Bat", id: "bat" },
  { letter: "🐻", unicode: "🐻", name: "Bear", id: "bear" },
  { letter: "🐼", unicode: "🐼", name: "Panda", id: "panda" },
  { letter: "🐨", unicode: "🐨", name: "Koala", id: "koala" },
  { letter: "🦦", unicode: "🦦", name: "Otter", id: "otter" },
  { letter: "🦥", unicode: "🦥", name: "Sloth", id: "sloth" },
  { letter: "🐵", unicode: "🐵", name: "Monkey Face", id: "monkey-face" },
  { letter: "🐒", unicode: "🐒", name: "Monkey", id: "monkey" },
  { letter: "🦍", unicode: "🦍", name: "Gorilla", id: "gorilla" },
  { letter: "🦧", unicode: "🦧", name: "Orangutan", id: "orangutan" },
    ];
    
const birdEmojis = [
  { letter: "🐦", unicode: "🐦", name: "Bird", id: "bird" },
  { letter: "🕊️", unicode: "🕊️", name: "Dove of Peace", id: "dove-of-peace" },
  { letter: "🦅", unicode: "🦅", name: "Eagle", id: "eagle" },
  { letter: "🦆", unicode: "🦆", name: "Duck", id: "duck" },
  { letter: "🦢", unicode: "🦢", name: "Swan", id: "swan" },
  { letter: "🦉", unicode: "🦉", name: "Owl", id: "owl" },
  { letter: "🦜", unicode: "🦜", name: "Parrot", id: "parrot" },
  { letter: "🦩", unicode: "🦩", name: "Flamingo", id: "flamingo" },
  { letter: "🦚", unicode: "🦚", name: "Peacock", id: "peacock" },
  { letter: "🦃", unicode: "🦃", name: "Turkey", id: "turkey" },
  { letter: "🐔", unicode: "🐔", name: "Chicken", id: "chicken" },
  { letter: "🐣", unicode: "🐣", name: "Baby Chick", id: "baby-chick" },
  { letter: "🐥", unicode: "🐥", name: "Chick", id: "chick" },
  { letter: "🐧", unicode: "🐧", name: "Penguin", id: "penguin" },
  { letter: "🐦", unicode: "🐦", name: "Bird", id: "bird" },
  { letter: "🕊️", unicode: "🕊️", name: "Dove of Peace", id: "dove-of-peace" },
  { letter: "🦅", unicode: "🦅", name: "Eagle", id: "eagle" },
  { letter: "🦆", unicode: "🦆", name: "Duck", id: "duck" },
  { letter: "🦢", unicode: "🦢", name: "Swan", id: "swan" },
  { letter: "🦉", unicode: "🦉", name: "Owl", id: "owl" },
  { letter: "🦜", unicode: "🦜", name: "Parrot", id: "parrot" },
  { letter: "🦩", unicode: "🦩", name: "Flamingo", id: "flamingo" },
  { letter: "🦚", unicode: "🦚", name: "Peacock", id: "peacock" },
  { letter: "🦃", unicode: "🦃", name: "Turkey", id: "turkey" },
  { letter: "🐔", unicode: "🐔", name: "Chicken", id: "chicken" },
  { letter: "🐣", unicode: "🐣", name: "Baby Chick", id: "baby-chick" },
  { letter: "🐥", unicode: "🐥", name: "Chick", id: "chick" },
  { letter: "🐧", unicode: "🐧", name: "Penguin", id: "penguin" },
    ];
    
    const fishEmojis = [
      { letter: "🐟", unicode: "🐟", name: "Fish", id: "fish" },
      {
        letter: "🐠",
        unicode: "🐠",
        name: "Tropical Fish",
        id: "tropical-fish",
      },
      { letter: "🐡", unicode: "🐡", name: "Blowfish", id: "blowfish" },
      { letter: "🐬", unicode: "🐬", name: "Dolphin", id: "dolphin" },
      { letter: "🐳", unicode: "🐳", name: "Whale", id: "whale" },
      { letter: "🦈", unicode: "🦈", name: "Shark", id: "shark" },
      { letter: "🐙", unicode: "🐙", name: "Octopus", id: "octopus" },
      { letter: "🦑", unicode: "🦑", name: "Squid", id: "squid" },
      { letter: "🦐", unicode: "🦐", name: "Shrimp", id: "shrimp" },
      { letter: "🦀", unicode: "🦀", name: "Crab", id: "crab" },
      { letter: "🦞", unicode: "🦞", name: "Lobster", id: "lobster" },
      { letter: "🐟", unicode: "🐟", name: "Fish", id: "fish" },
      {
        letter: "🐠",
        unicode: "🐠",
        name: "Tropical Fish",
        id: "tropical-fish",
      },
      { letter: "🐡", unicode: "🐡", name: "Blowfish", id: "blowfish" },
      { letter: "🐬", unicode: "🐬", name: "Dolphin", id: "dolphin" },
      { letter: "🐳", unicode: "🐳", name: "Whale", id: "whale" },
      { letter: "🦈", unicode: "🦈", name: "Shark", id: "shark" },
      { letter: "🐙", unicode: "🐙", name: "Octopus", id: "octopus" },
      { letter: "🦑", unicode: "🦑", name: "Squid", id: "squid" },
      { letter: "🦐", unicode: "🦐", name: "Shrimp", id: "shrimp" },
      { letter: "🦀", unicode: "🦀", name: "Crab", id: "crab" },
      { letter: "🦞", unicode: "🦞", name: "Lobster", id: "lobster" },
    ];
    
    const reptileEmojis = [
      { letter: "🐊", unicode: "🐊", name: "Crocodile", id: "crocodile" },
      { letter: "🐢", unicode: "🐢", name: "Turtle", id: "turtle" },
      { letter: "🦎", unicode: "🦎", name: "Lizard", id: "lizard" },
      { letter: "🐍", unicode: "🐍", name: "Snake", id: "snake" },
      {
        letter: "🦖",
        unicode: "🦖",
        name: "Tyrannosaurus Rex",
        id: "tyrannosaurus-rex",
      },
      { letter: "🦕", unicode: "🦕", name: "Sauropod", id: "sauropod" },
      { letter: "🐊", unicode: "🐊", name: "Crocodile", id: "crocodile" },
      { letter: "🐢", unicode: "🐢", name: "Turtle", id: "turtle" },
      { letter: "🦎", unicode: "🦎", name: "Lizard", id: "lizard" },
      { letter: "🐍", unicode: "🐍", name: "Snake", id: "snake" },
      {
        letter: "🦖",
        unicode: "🦖",
        name: "Tyrannosaurus Rex",
        id: "tyrannosaurus-rex",
      },
      { letter: "🦕", unicode: "🦕", name: "Sauropod", id: "sauropod" },
    ];

    const mythicalCreatureEmojis = [
      { letter: "🦄", unicode: "🦄", name: "Unicorn", id: "unicorn" },
      { letter: "🐉", unicode: "🐉", name: "Dragon", id: "dragon" },
      {
        letter: "🐲",
        unicode: "🐲",
        name: "Chinese Dragon",
        id: "chinese-dragon",
      },
      { letter: "👹", unicode: "👹", name: "Ogre", id: "ogre" },
      { letter: "👺", unicode: "👺", name: "Goblin", id: "goblin" },
      { letter: "👻", unicode: "👻", name: "Ghost", id: "ghost" },
      { letter: "💀", unicode: "💀", name: "Skull", id: "skull" },
      { letter: "👽", unicode: "👽", name: "Alien", id: "alien" },
      {
        letter: "👾",
        unicode: "👾",
        name: "Alien Monster",
        id: "alien-monster",
      },
      { letter: "🤖", unicode: "🤖", name: "Robot", id: "robot" },
      { letter: "🧚‍♀️", unicode: "🧚‍♀️", name: "Female Fairy", id: "female-fairy" },
      { letter: "🧚‍♂️", unicode: "🧚‍♂️", name: "Male Fairy", id: "male-fairy" },
      { letter: "🧜‍♀️", unicode: "🧜‍♀️", name: "Mermaid", id: "mermaid" },
      { letter: "🧜‍♂️", unicode: "🧜‍♂️", name: "Merman", id: "merman" },
      { letter: "🦄", unicode: "🦄", name: "Unicorn", id: "unicorn" },
      { letter: "🐉", unicode: "🐉", name: "Dragon", id: "dragon" },
      {
        letter: "🐲",
        unicode: "🐲",
        name: "Chinese Dragon",
        id: "chinese-dragon",
      },
      { letter: "👹", unicode: "👹", name: "Ogre", id: "ogre" },
      { letter: "👺", unicode: "👺", name: "Goblin", id: "goblin" },
      { letter: "👻", unicode: "👻", name: "Ghost", id: "ghost" },
      { letter: "💀", unicode: "💀", name: "Skull", id: "skull" },
      { letter: "👽", unicode: "👽", name: "Alien", id: "alien" },
      {
        letter: "👾",
        unicode: "👾",
        name: "Alien Monster",
        id: "alien-monster",
      },
      { letter: "🤖", unicode: "🤖", name: "Robot", id: "robot" },
      { letter: "🧚‍♀️", unicode: "🧚‍♀️", name: "Female Fairy", id: "female-fairy" },
      { letter: "🧚‍♂️", unicode: "🧚‍♂️", name: "Male Fairy", id: "male-fairy" },
      { letter: "🧜‍♀️", unicode: "🧜‍♀️", name: "Mermaid", id: "mermaid" },
      { letter: "🧜‍♂️", unicode: "🧜‍♂️", name: "Merman", id: "merman" },
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
    createKeys("mammal-emojis-container", mammalEmojis);
    createKeys("bird-emojis-container", birdEmojis);
    createKeys("fish-emojis-container", fishEmojis);
    createKeys("fish-emojis-container", reptileEmojis);
    createKeys("mythical-emojis-container", mythicalCreatureEmojis);

});
