document.addEventListener("DOMContentLoaded", function () {
  const airTravelEmojis = [
    { letter: "✈️", unicode: "✈️", name: "Airplane", id: "airplane" },
    {
      letter: "🛫",
      unicode: "🛫",
      name: "Airplane Departure",
      id: "airplane-departure",
    },
    {
      letter: "🛬",
      unicode: "🛬",
      name: "Airplane Arrival",
      id: "airplane-arrival",
    },
    {
      letter: "🛩️",
      unicode: "🛩️",
      name: "Small Airplane",
      id: "small-airplane",
    },
    { letter: "🚁", unicode: "🚁", name: "Helicopter", id: "helicopter" },
    { letter: "🚀", unicode: "🚀", name: "Rocket", id: "rocket" },
    { letter: "🛸", unicode: "🛸", name: "Flying Saucer", id: "flying-saucer" },
  ];
  const roadTravelEmojis = [
    { letter: "🚗", unicode: "🚗", name: "Car", id: "car" },
    { letter: "🚕", unicode: "🚕", name: "Taxi", id: "taxi" },
    { letter: "🚙", unicode: "🚙", name: "SUV", id: "suv" },
    { letter: "🚐", unicode: "🚐", name: "Minivan", id: "minivan" },
    { letter: "🛻", unicode: "🛻", name: "Pickup Truck", id: "pickup-truck" },
    {
      letter: "🚚",
      unicode: "🚚",
      name: "Delivery Truck",
      id: "delivery-truck",
    },
    {
      letter: "🚛",
      unicode: "🚛",
      name: "Articulated Truck",
      id: "articulated-truck",
    },
    { letter: "🚜", unicode: "🚜", name: "Tractor", id: "tractor" },
    { letter: "🚑", unicode: "🚑", name: "Ambulance", id: "ambulance" },
    { letter: "🚒", unicode: "🚒", name: "Fire Engine", id: "fire-engine" },
    { letter: "🚓", unicode: "🚓", name: "Police Car", id: "police-car" },
    {
      letter: "🚔",
      unicode: "🚔",
      name: "Police Car with Light",
      id: "police-car-light",
    },
    {
      letter: "🚍",
      unicode: "🚍",
      name: "Double-Decker Bus",
      id: "double-decker-bus",
    },
    { letter: "🚌", unicode: "🚌", name: "Bus", id: "bus" },
    { letter: "🚎", unicode: "🚎", name: "Trolleybus", id: "trolleybus" },
    { letter: "🚐", unicode: "🚐", name: "Minivan", id: "minivan" },
    { letter: "🏎️", unicode: "🏎️", name: "Racing Car", id: "racing-car" },
    { letter: "🏍️", unicode: "🏍️", name: "Motorcycle", id: "motorcycle" },
    {
      letter: "🛵",
      unicode: "🛵",
      name: "Motor Scooter",
      id: "motor-scooter",
    },
    {
      letter: "🦽",
      unicode: "🦽",
      name: "Manual Wheelchair",
      id: "manual-wheelchair",
    },
    {
      letter: "🦼",
      unicode: "🦼",
      name: "Motorized Wheelchair",
      id: "motorized-wheelchair",
    },
    {
      letter: "🛺",
      unicode: "🛺",
      name: "Auto Rickshaw",
      id: "auto-rickshaw",
    },
    { letter: "🚲", unicode: "🚲", name: "Bicycle", id: "bicycle" },
    { letter: "🛴", unicode: "🛴", name: "Kick Scooter", id: "kick-scooter" },
    { letter: "🛹", unicode: "🛹", name: "Skateboard", id: "skateboard" },
    {
      letter: "🛼",
      unicode: "🛼",
      name: "Roller Skates",
      id: "roller-skates",
    },
  ];

  const railTravelEmojis = [
    { letter: "🚂", unicode: "🚂", name: "Locomotive", id: "locomotive" },
    { letter: "🚃", unicode: "🚃", name: "Railway Car", id: "railway-car" },
    {
      letter: "🚄",
      unicode: "🚄",
      name: "High-Speed Train",
      id: "high-speed-train",
    },
    { letter: "🚅", unicode: "🚅", name: "Bullet Train", id: "bullet-train" },
    { letter: "🚆", unicode: "🚆", name: "Train", id: "train" },
    { letter: "🚇", unicode: "🚇", name: "Subway", id: "subway" },
    { letter: "🚈", unicode: "🚈", name: "Light Rail", id: "light-rail" },
    { letter: "🚉", unicode: "🚉", name: "Station", id: "station" },
    { letter: "🚊", unicode: "🚊", name: "Tram", id: "tram" },
    { letter: "🚝", unicode: "🚝", name: "Monorail", id: "monorail" },
    {
      letter: "🚞",
      unicode: "🚞",
      name: "Mountain Railway",
      id: "mountain-railway",
    },
    { letter: "🚋", unicode: "🚋", name: "Streetcar", id: "streetcar" },
    {
      letter: "🚟",
      unicode: "🚟",
      name: "Suspension Railway",
      id: "suspension-railway",
    },
    {
      letter: "🚠",
      unicode: "🚠",
      name: "Mountain Cableway",
      id: "mountain-cableway",
    },
    {
      letter: "🚡",
      unicode: "🚡",
      name: "Aerial Tramway",
      id: "aerial-tramway",
    },
  ];
  const waterTravelEmojis = [
    { letter: "⛵", unicode: "⛵", name: "Sailboat", id: "sailboat" },
    { letter: "🛶", unicode: "🛶", name: "Canoe", id: "canoe" },
    { letter: "🚤", unicode: "🚤", name: "Speedboat", id: "speedboat" },
    { letter: "🛥️", unicode: "🛥️", name: "Motor Boat", id: "motor-boat" },
    {
      letter: "🛳️",
      unicode: "🛳️",
      name: "Passenger Ship",
      id: "passenger-ship",
    },
    { letter: "⛴️", unicode: "⛴️", name: "Ferry", id: "ferry" },
    { letter: "🚢", unicode: "🚢", name: "Ship", id: "ship" },

    // Miscellaneous
    { letter: "🚏", unicode: "🚏", name: "Bus Stop", id: "bus-stop" },
    { letter: "🛣️", unicode: "🛣️", name: "Motorway", id: "motorway" },
    {
      letter: "🛤️",
      unicode: "🛤️",
      name: "Railway Track",
      id: "railway-track",
    },
    { letter: "🛢️", unicode: "🛢️", name: "Oil Drum", id: "oil-drum" },
    { letter: "⛽", unicode: "⛽", name: "Fuel Pump", id: "fuel-pump" },
    { letter: "🚨", unicode: "🚨", name: "Siren", id: "siren" },
    { letter: "🛑", unicode: "🛑", name: "Stop Sign", id: "stop-sign" },
  ];

  const natureEmojis = [
    // Natural Landmarks
    { letter: "🏔️", unicode: "🏔️", name: "Mountain", id: "mountain" },
    {
      letter: "⛰️",
      unicode: "⛰️",
      name: "Mountain with Snow",
      id: "mountain-with-snow",
    },
    { letter: "🌋", unicode: "🌋", name: "Volcano", id: "volcano" },
    { letter: "🏜️", unicode: "🏜️", name: "Desert", id: "desert" },
    {
      letter: "🏝️",
      unicode: "🏝️",
      name: "Deserted Island",
      id: "deserted-island",
    },
    { letter: "🏞️", unicode: "🏞️", name: "National Park", id: "national-park" },
    {
      letter: "🏖️",
      unicode: "🏖️",
      name: "Beach with Umbrella",
      id: "beach-with-umbrella",
    },
    {
      letter: "⛱️",
      unicode: "⛱️",
      name: "Umbrella on Ground",
      id: "umbrella-on-ground",
    },
    { letter: "🏕️", unicode: "🏕️", name: "Camping", id: "camping" },
    {
      letter: "🏡",
      unicode: "🏡",
      name: "House with Garden",
      id: "house-with-garden",
    },
  ];

  const waterBodyEmojis = [
    { letter: "🌊", unicode: "🌊", name: "Water Wave", id: "water-wave" },
    { letter: "🏞️", unicode: "🏞️", name: "River", id: "river" },
    { letter: "🌊", unicode: "🌊", name: "Ocean", id: "ocean" },
  ];

  const floraEmojis = [
    // Flora
    {
      letter: "🌲",
      unicode: "🌲",
      name: "Evergreen Tree",
      id: "evergreen-tree",
    },
    {
      letter: "🌳",
      unicode: "🌳",
      name: "Deciduous Tree",
      id: "deciduous-tree",
    },
    { letter: "🌴", unicode: "🌴", name: "Palm Tree", id: "palm-tree" },
    { letter: "🌱", unicode: "🌱", name: "Seedling", id: "seedling" },
    { letter: "🌿", unicode: "🌿", name: "Herb", id: "herb" },
    {
      letter: "🍃",
      unicode: "🍃",
      name: "Leaf Fluttering in Wind",
      id: "leaf-fluttering",
    },
    { letter: "🌵", unicode: "🌵", name: "Cactus", id: "cactus" },
    {
      letter: "🎋",
      unicode: "🎋",
      name: "Tanabata Tree",
      id: "tanabata-tree",
    },
    {
      letter: "🎍",
      unicode: "🎍",
      name: "Pine Decoration",
      id: "pine-decoration",
    },
  ];

  const flowerEmojis = [
    { letter: "🌷", unicode: "🌷", name: "Tulip", id: "tulip" },
    { letter: "🌹", unicode: "🌹", name: "Rose", id: "rose" },
    { letter: "🌻", unicode: "🌻", name: "Sunflower", id: "sunflower" },
    { letter: "🌼", unicode: "🌼", name: "Blossom", id: "blossom" },
    { letter: "💐", unicode: "💐", name: "Bouquet", id: "bouquet" },
    {
      letter: "🍀",
      unicode: "🍀",
      name: "Four-Leaf Clover",
      id: "four-leaf-clover",
    },
    { letter: "🍁", unicode: "🍁", name: "Maple Leaf", id: "maple-leaf" },
    { letter: "🍂", unicode: "🍂", name: "Falling Leaf", id: "falling-leaf" },
    {
      letter: "🍃",
      unicode: "🍃",
      name: "Leaf Fluttering",
      id: "leaf-fluttering",
    },
  ];
  const inNatureEmojis = [
    { letter: "🐚", unicode: "🐚", name: "Seashell", id: "seashell" },
    { letter: "🪨", unicode: "🪨", name: "Rock", id: "rock" },
    { letter: "💧", unicode: "💧", name: "Droplet", id: "droplet" },
    { letter: "🌪️", unicode: "🌪️", name: "Tornado", id: "tornado" },
    { letter: "🌈", unicode: "🌈", name: "Rainbow", id: "rainbow" },
    { letter: "⛄", unicode: "⛄", name: "Snowman", id: "snowman" },
    { letter: "❄️", unicode: "❄️", name: "Snowflake", id: "snowflake" },
    { letter: "🔥", unicode: "🔥", name: "Fire", id: "fire" },
    { letter: "🌋", unicode: "🌋", name: "Volcano", id: "volcano" },
    { letter: "🌀", unicode: "🌀", name: "Cyclone", id: "cyclone" },
    { letter: "🌕", unicode: "🌕", name: "Full Moon", id: "full-moon" },
    { letter: "🌑", unicode: "🌑", name: "New Moon", id: "new-moon" },
    { letter: "🌙", unicode: "🌙", name: "Crescent Moon", id: "crescent-moon" },
  ];

  const landmarkEmojis = [
    // Iconic Landmarks
    {
      letter: "🗽",
      unicode: "🗽",
      name: "Statue of Liberty",
      id: "statue-of-liberty",
    },
    { letter: "🗼", unicode: "🗼", name: "Eiffel Tower", id: "eiffel-tower" },
    { letter: "🗿", unicode: "🗿", name: "Moai Statue", id: "moai-statue" },
    { letter: "🕍", unicode: "🕍", name: "Synagogue", id: "synagogue" },
    { letter: "🕌", unicode: "🕌", name: "Mosque", id: "mosque" },
    { letter: "🕋", unicode: "🕋", name: "Kaaba", id: "kaaba" },
    { letter: "🛕", unicode: "🛕", name: "Hindu Temple", id: "hindu-temple" },
    { letter: "⛩️", unicode: "⛩️", name: "Shinto Shrine", id: "shinto-shrine" },
    {
      letter: "🏯",
      unicode: "🏯",
      name: "Japanese Castle",
      id: "japanese-castle",
    },
    { letter: "🏰", unicode: "🏰", name: "Castle", id: "castle" },
    { letter: "⛪", unicode: "⛪", name: "Church", id: "church" },
    { letter: "⛩️", unicode: "⛩️", name: "Pagoda", id: "pagoda" },

    // Recreational Landmarks
    { letter: "🏟️", unicode: "🏟️", name: "Stadium", id: "stadium" },
    { letter: "🎡", unicode: "🎡", name: "Ferris Wheel", id: "ferris-wheel" },
    {
      letter: "🎢",
      unicode: "🎢",
      name: "Roller Coaster",
      id: "roller-coaster",
    },
    { letter: "🎠", unicode: "🎠", name: "Carousel", id: "carousel" },
    { letter: "⛲", unicode: "⛲", name: "Fountain", id: "fountain" },

    // Bridges and Towers
    {
      letter: "🌉",
      unicode: "🌉",
      name: "Bridge at Night",
      id: "bridge-at-night",
    },
    { letter: "🌁", unicode: "🌁", name: "Foggy Bridge", id: "foggy-bridge" },
    { letter: "🗼", unicode: "🗼", name: "Tokyo Tower", id: "tokyo-tower" },
    {
      letter: "🌉",
      unicode: "🌉",
      name: "Golden Gate Bridge",
      id: "golden-gate-bridge",
    },

    // Modern and Historical Buildings
    {
      letter: "🏗️",
      unicode: "🏗️",
      name: "Building Construction",
      id: "building-construction",
    },
    {
      letter: "🏢",
      unicode: "🏢",
      name: "Office Building",
      id: "office-building",
    },
    {
      letter: "🏬",
      unicode: "🏬",
      name: "Department Store",
      id: "department-store",
    },
    { letter: "🏦", unicode: "🏦", name: "Bank", id: "bank" },
    {
      letter: "🏪",
      unicode: "🏪",
      name: "Convenience Store",
      id: "convenience-store",
    },
    { letter: "🏭", unicode: "🏭", name: "Factory", id: "factory" },

    // Residential Buildings
    { letter: "🏠", unicode: "🏠", name: "House", id: "house" },
    {
      letter: "🏡",
      unicode: "🏡",
      name: "House with Garden",
      id: "house-with-garden",
    },
    {
      letter: "🏘️",
      unicode: "🏘️",
      name: "Housing Complex",
      id: "housing-complex",
    },
    {
      letter: "🏚️",
      unicode: "🏚️",
      name: "Derelict House",
      id: "derelict-house",
    },

    // Transport-related Landmarks
    { letter: "🚦", unicode: "🚦", name: "Traffic Light", id: "traffic-light" },
    { letter: "🚧", unicode: "🚧", name: "Construction", id: "construction" },
    { letter: "🛤️", unicode: "🛤️", name: "Railway Track", id: "railway-track" },

    // Miscellaneous Landmarks
    { letter: "🏥", unicode: "🏥", name: "Hospital", id: "hospital" },
    {
      letter: "🏛️",
      unicode: "🏛️",
      name: "Classical Building",
      id: "classical-building",
    },
    { letter: "🗾", unicode: "🗾", name: "Map of Japan", id: "map-of-japan" },
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
  createKeys("air-travel-emojis-container", airTravelEmojis);
  createKeys("road-travel-emojis-container", roadTravelEmojis);
  createKeys("rail-travel-emojis-container", railTravelEmojis);
  createKeys("water-travel-emojis-container", waterTravelEmojis);
  createKeys("nature-emojis-container", natureEmojis);
  createKeys("water-body-emojis-container", waterBodyEmojis);
  createKeys("flora-emojis-container", floraEmojis);
  createKeys("flower-emojis-container", flowerEmojis);
  createKeys("in-nature-emojis-container", inNatureEmojis);
  createKeys("landmark-emojis-container", landmarkEmojis);
});
