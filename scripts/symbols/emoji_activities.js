document.addEventListener("DOMContentLoaded", function () {
  // Ball Sports
  const ballSportsEmojis = [
    { letter: "⚽", unicode: "⚽", name: "Soccer Ball", id: "soccer-ball" },
    { letter: "🏀", unicode: "🏀", name: "Basketball", id: "basketball" },
    {
      letter: "🏈",
      unicode: "🏈",
      name: "American Football",
      id: "american-football",
    },
    { letter: "⚾️", unicode: "⚾️", name: "Baseball", id: "baseball" },
    { letter: "🎾", unicode: "🎾", name: "Tennis", id: "tennis" },
    { letter: "🏐", unicode: "🏐", name: "Volleyball", id: "volleyball" },
    {
      letter: "🏉",
      unicode: "🏉",
      name: "Rugby Football",
      id: "rugby-football",
    },
    { letter: "🎱", unicode: "🎱", name: "8 Ball", id: "eight-ball" },
    {
      letter: "🏓",
      unicode: "🏓",
      name: "Ping Pong Paddle",
      id: "ping-pong-paddle",
    },
    { letter: "🎳", unicode: "🎳", name: "Bowling", id: "bowling" },
    { letter: "🎯", unicode: "🎯", name: "Bullseye", id: "bullseye" },
    { letter: "🥎", unicode: "🥎", name: "Softball", id: "softball" },
    { letter: "🥏", unicode: "🥏", name: "Flying Disc", id: "flying-disc" },
    { letter: "🏸", unicode: "🏸", name: "Badminton", id: "badminton" },
  ];

  // Other Sports
  const otherSportsEmojis = [
    { letter: "⛳️", unicode: "⛳️", name: "Flag in Hole", id: "flag-in-hole" },
    {
      letter: "🎣",
      unicode: "🎣",
      name: "Fishing Rod and Fish",
      id: "fishing-rod-and-fish",
    },
    { letter: "🏌️‍♀️", unicode: "🏌️‍♀️", name: "Female Golfer", id: "female-golfer" },
    { letter: "🏌️‍♂️", unicode: "🏌️‍♂️", name: "Male Golfer", id: "male-golfer" },
    { letter: "🏇", unicode: "🏇", name: "Horse Racing", id: "horse-racing" },
    { letter: "⛷️", unicode: "⛷️", name: "Skier", id: "skier" },
    { letter: "🏂", unicode: "🏂", name: "Snowboarder", id: "snowboarder" },
    { letter: "🏄‍♀️", unicode: "🏄‍♀️", name: "Female Surfer", id: "female-surfer" },
    { letter: "🏄‍♂️", unicode: "🏄‍♂️", name: "Male Surfer", id: "male-surfer" },
    {
      letter: "🏊‍♀️",
      unicode: "🏊‍♀️",
      name: "Female Swimmer",
      id: "female-swimmer",
    },
    { letter: "🏊‍♂️", unicode: "🏊‍♂️", name: "Male Swimmer", id: "male-swimmer" },
    {
      letter: "🏋️‍♀️",
      unicode: "🏋️‍♀️",
      name: "Female Weightlifter",
      id: "female-weightlifter",
    },
    {
      letter: "🏋️‍♂️",
      unicode: "🏋️‍♂️",
      name: "Male Weightlifter",
      id: "male-weightlifter",
    },
    {
      letter: "🤸‍♀️",
      unicode: "🤸‍♀️",
      name: "Female Acrobat",
      id: "female-acrobat",
    },
    { letter: "🤸‍♂️", unicode: "🤸‍♂️", name: "Male Acrobat", id: "male-acrobat" },
    { letter: "🧘‍♀️", unicode: "🧘‍♀️", name: "Female Yoga", id: "female-yoga" },
    { letter: "🧘‍♂️", unicode: "🧘‍♂️", name: "Male Yoga", id: "male-yoga" },
    {
      letter: "🚴‍♀️",
      unicode: "🚴‍♀️",
      name: "Female Cyclist",
      id: "female-cyclist",
    },
    { letter: "🚴‍♂️", unicode: "🚴‍♂️", name: "Male Cyclist", id: "male-cyclist" },
    {
      letter: "🏁",
      unicode: "🏁",
      name: "Checkered Flag",
      id: "checkered-flag",
    },
    { letter: "🏆", unicode: "🏆", name: "Trophy", id: "trophy" },
    {
      letter: "🏅",
      unicode: "🏅",
      name: "Third Place Medal",
      id: "third-place-medal",
    },
    {
      letter: "🥈",
      unicode: "🥈",
      name: "Second Place Medal",
      id: "second-place-medal",
    },
    {
      letter: "🥇",
      unicode: "🥇",
      name: "First Place Medal",
      id: "first-place-medal",
    },
    {
      letter: "🤾‍♀️",
      unicode: "🤾‍♀️",
      name: "Female Handball",
      id: "female-handball",
    },
    { letter: "🤾‍♂️", unicode: "🤾‍♂️", name: "Male Handball", id: "male-handball" },
    { letter: "🤺", unicode: "🤺", name: "Fencer", id: "fencer" },
    {
      letter: "🥋",
      unicode: "🥋",
      name: "Martial Arts Uniform",
      id: "martial-arts-uniform",
    },
    {
      letter: "🤼‍♀️",
      unicode: "🤼‍♀️",
      name: "Female Wrestler",
      id: "female-wrestler",
    },
    { letter: "🤼‍♂️", unicode: "🤼‍♂️", name: "Male Wrestler", id: "male-wrestler" },
    {
      letter: "🧗‍♀️",
      unicode: "🧗‍♀️",
      name: "Female Rock Climber",
      id: "female-rock-climber",
    },
    {
      letter: "🧗‍♂️",
      unicode: "🧗‍♂️",
      name: "Male Rock Climber",
      id: "male-rock-climber",
    },
    { letter: "🥊", unicode: "🥊", name: "Boxing Glove", id: "boxing-glove" },
    { letter: "🥌", unicode: "🥌", name: "Curling Stone", id: "curling-stone" },
  ];

  // Other Activities
  const otherActivitiesEmojis = [
    {
      letter: "🎭",
      unicode: "🎭",
      name: "Performing Arts",
      id: "performing-arts",
    },
    { letter: "🎤", unicode: "🎤", name: "Microphone", id: "microphone" },
    { letter: "🎸", unicode: "🎸", name: "Guitar", id: "guitar" },
    { letter: "🎹", unicode: "🎹", name: "Piano", id: "piano" },
    { letter: "🎺", unicode: "🎺", name: "Trumpet", id: "trumpet" },
    { letter: "🎻", unicode: "🎻", name: "Violin", id: "violin" },
    { letter: "🥁", unicode: "🥁", name: "Drum", id: "drum" },
    { letter: "🎵", unicode: "🎵", name: "Musical Note", id: "musical-note" },
    {
      letter: "🎶",
      unicode: "🎶",
      name: "Musical Notes",
      id: "musical-notes",
    },
    { letter: "🎼", unicode: "🎼", name: "Musical Score", id: "musical-score" },
    { letter: "🎨", unicode: "🎨", name: "Art Palette", id: "art-palette" },
    { letter: "🎬", unicode: "🎬", name: "Clapperboard", id: "clapperboard" },
    { letter: "🎥", unicode: "🎥", name: "Movie Camera", id: "movie-camera" },
    { letter: "📺", unicode: "📺", name: "Television", id: "television" },
    { letter: "📻", unicode: "📻", name: "Radio", id: "radio" },
    { letter: "🎧", unicode: "🎧", name: "Headphones", id: "headphones" },
    { letter: "📸", unicode: "📸", name: "Camera", id: "camera" },
    { letter: "📹", unicode: "📹", name: "Video Camera", id: "video-camera" },
    {
      letter: "🎮",
      unicode: "🎮",
      name: "Video Game Controller",
      id: "video-game-controller",
    },
    { letter: "🕹️", unicode: "🕹️", name: "Joystick", id: "joystick" },
    { letter: "🎰", unicode: "🎰", name: "Slot Machine", id: "slot-machine" },
    { letter: "🎲", unicode: "🎲", name: "Dice", id: "dice" },
    { letter: "♟️", unicode: "♟️", name: "Chess Pawn", id: "chess-pawn" },
    { letter: "🃏", unicode: "🃏", name: "Playing Cards", id: "playing-cards" },
    { letter: "🀄", unicode: "🀄", name: "Mahjong Tile", id: "mahjong-tile" },
    { letter: "🔧", unicode: "🔧", name: "Wrench", id: "wrench" },
    { letter: "🔨", unicode: "🔨", name: "Hammer", id: "hammer" },
    { letter: "🪛", unicode: "🪛", name: "Screwdriver", id: "screwdriver" },
    { letter: "🪚", unicode: "🪚", name: "Saw", id: "saw" },
    { letter: "🪜", unicode: "🪜", name: "Ladder", id: "ladder" },
    { letter: "🧱", unicode: "🧱", name: "Brick", id: "brick" },
    {
      letter: "🛠️",
      unicode: "🛠️",
      name: "Hammer and Wrench",
      id: "hammer-and-wrench",
    },
    { letter: "🧰", unicode: "🧰", name: "Toolbox", id: "toolbox" },
    { letter: "📚", unicode: "📚", name: "Books", id: "books" },
    { letter: "✏️", unicode: "✏️", name: "Pencil", id: "pencil" },
    { letter: "🖌️", unicode: "🖌️", name: "Paintbrush", id: "paintbrush" },
    { letter: "🏹", unicode: "🏹", name: "Bow and Arrow", id: "bow-and-arrow" },
    { letter: "🛹", unicode: "🛹", name: "Skateboard", id: "skateboard" },
    { letter: "🤿", unicode: "🤿", name: "Diving Mask", id: "diving-mask" },
    {
      letter: "🏇🏻",
      unicode: "🏇🏻",
      name: "Horse Racing",
      id: "horse-racing",
    },
    {
      letter: "🏇🏽",
      unicode: "🏇🏽",
      name: "Horse Racing",
      id: "horse-racing2",
    },
    {
      letter: "🏇🏿",
      unicode: "🏇🏿",
      name: "Horse Racing",
      id: "horse-racing3",
    },
    ];
    
    const medalEmojis = [
      {
        letter: "🎖️",
        unicode: "🎖️",
        name: "Military Medal",
        id: "military-medal",
      },
      { letter: "🥇", unicode: "🥇", name: "Gold Medal", id: "gold-medal" },
      { letter: "🥈", unicode: "🥈", name: "Silver Medal", id: "silver-medal" },
      { letter: "🥉", unicode: "🥉", name: "Bronze Medal", id: "bronze-medal" },
      { letter: "🏆", unicode: "🏆", name: "Trophy", id: "trophy" },
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
  createKeys("ball-sports-emojis-container", ballSportsEmojis);
  createKeys("other-sports-emojis-container", otherSportsEmojis);
    createKeys("other-activities-emojis-container", otherActivitiesEmojis);
    createKeys("medal-emojis-container", medalEmojis);
});
