document.addEventListener("DOMContentLoaded", function () {
  const toolsAndUtensils = [
  { letter: "🔨", unicode: "🔨", name: "Hammer", id: "hammer" },
  { letter: "🔧", unicode: "🔧", name: "Wrench", id: "wrench" },
  { letter: "🔩", unicode: "🔩", name: "Bolt", id: "bolt" },
  { letter: "🔪", unicode: "🔪", name: "Knife", id: "knife" },
  { letter: "🪓", unicode: "🪓", name: "Axe", id: "axe" },
  { letter: "🪚", unicode: "🪚", name: "Saw", id: "saw" },
  { letter: "🛠", unicode: "🛠", name: "Tools", id: "tools" },
  { letter: "🪛", unicode: "🪛", name: "Screwdriver", id: "screwdriver" },
  { letter: "🗡", unicode: "🗡", name: "Dagger", id: "dagger" },
  { letter: "🔗", unicode: "🔗", name: "Link", id: "link" },
  { letter: "🔒", unicode: "🔒", name: "Lock", id: "lock" },
  { letter: "🔓", unicode: "🔓", name: "Unlock", id: "unlock" },
  { letter: "🔑", unicode: "🔑", name: "Key", id: "key" },
  { letter: "🪙", unicode: "🪙", name: "Coin", id: "coin" },
  { letter: "🔏", unicode: "🔏", name: "Locked", id: "locked" },
  { letter: "🔐", unicode: "🔐", name: "Secured", id: "secured" },
  { letter: "🔒", unicode: "🔒", name: "Closed Lock", id: "closed-lock" },
  { letter: "🔓", unicode: "🔓", name: "Open Lock", id: "open-lock" },
  { letter: "🔖", unicode: "🔖", name: "Bookmark", id: "bookmark" },
  { letter: "📍", unicode: "📍", name: "Pin", id: "pin" },
  { letter: "📌", unicode: "📌", name: "Pushpin", id: "pushpin" },
  { letter: "🔦", unicode: "🔦", name: "Flashlight", id: "flashlight" },
  { letter: "🔦", unicode: "🔦", name: "Light", id: "light" },
  { letter: "🪛", unicode: "🪛", name: "Drill", id: "drill" },
  { letter: "🛠", unicode: "🛠", name: "Builder", id: "builder" },
    ];
    
    const electronicsEmojis = [
  { letter: "💻", unicode: "💻", name: "Laptop", id: "laptop" },
  { letter: "🖥️", unicode: "🖥️", name: "Desktop Computer", id: "desktop-computer" },
  { letter: "🖨️", unicode: "🖨️", name: "Printer", id: "printer" },
  { letter: "🖱️", unicode: "🖱️", name: "Computer Mouse", id: "computer-mouse" },
  { letter: "🖲️", unicode: "🖲️", name: "Trackball", id: "trackball" },
  { letter: "💾", unicode: "💾", name: "Floppy Disk", id: "floppy-disk" },
  { letter: "💿", unicode: "💿", name: "Optical Disk", id: "optical-disk" },
  { letter: "📀", unicode: "📀", name: "DVD", id: "dvd" },
  { letter: "📱", unicode: "📱", name: "Mobile Phone", id: "mobile-phone" },
  { letter: "📲", unicode: "📲", name: "Mobile Phone with Arrow", id: "mobile-phone-with-arrow" },
  { letter: "☎️", unicode: "☎️", name: "Telephone", id: "telephone" },
  { letter: "📞", unicode: "📞", name: "Telephone Receiver", id: "telephone-receiver" },
  { letter: "📟", unicode: "📟", name: "Pager", id: "pager" },
  { letter: "📠", unicode: "📠", name: "Fax Machine", id: "fax-machine" },
  { letter: "📺", unicode: "📺", name: "Television", id: "television" },
  { letter: "📷", unicode: "📷", name: "Camera", id: "camera" },
  { letter: "📹", unicode: "📹", name: "Video Camera", id: "video-camera" },
  { letter: "🎥", unicode: "🎥", name: "Movie Camera", id: "movie-camera" },
  { letter: "📽️", unicode: "📽️", name: "Film Projector", id: "film-projector" },
  { letter: "🔋", unicode: "🔋", name: "Battery", id: "battery" }
    ];
    
const householdItemsEmojis = [
  { letter: "🛋️", unicode: "🛋️", name: "Couch", id: "couch" },
  { letter: "🛏️", unicode: "🛏️", name: "Bed", id: "bed" },
  { letter: "🛁", unicode: "🛁", name: "Bathtub", id: "bathtub" },
  { letter: "🚽", unicode: "🚽", name: "Toilet", id: "toilet" },
  { letter: "🚪", unicode: "🚪", name: "Door", id: "door" },
  { letter: "🪑", unicode: "🪑", name: "Chair", id: "chair" },
  { letter: "🛒", unicode: "🛒", name: "Shopping Cart", id: "shopping-cart" },
  { letter: "🧹", unicode: "🧹", name: "Broom", id: "broom" },
  { letter: "🧺", unicode: "🧺", name: "Basket", id: "basket" },
  { letter: "🧻", unicode: "🧻", name: "Toilet Paper", id: "toilet-paper" },
  { letter: "🧼", unicode: "🧼", name: "Soap", id: "soap" },
  { letter: "🧽", unicode: "🧽", name: "Sponge", id: "sponge" },
  { letter: "🪠", unicode: "🪠", name: "Plunger", id: "plunger" },
  { letter: "🪣", unicode: "🪣", name: "Bucket", id: "bucket" },
  { letter: "🛒", unicode: "🛒", name: "Shopping Trolley", id: "shopping-trolley" },
  { letter: "🍽️", unicode: "🍽️", name: "Plate", id: "plate" },
  { letter: "🛠️", unicode: "🛠️", name: "Toolbox", id: "toolbox" },
  { letter: "🧯", unicode: "🧯", name: "Fire Extinguisher", id: "fire-extinguisher" },
  { letter: "🪣", unicode: "🪣", name: "Water Bucket", id: "water-bucket" },
  { letter: "🧺", unicode: "🧺", name: "Laundry Basket", id: "laundry-basket" },
  { letter: "🧵", unicode: "🧵", name: "Sewing Thread", id: "sewing-thread" },
  { letter: "🧶", unicode: "🧶", name: "Yarn", id: "yarn" },
  { letter: "🛠️", unicode: "🛠️", name: "Tools", id: "tools" },
  { letter: "🧥", unicode: "🧥", name: "Coat", id: "coat" },
  { letter: "🧣", unicode: "🧣", name: "Scarf", id: "scarf" },
  { letter: "🪟", unicode: "🪟", name: "Window", id: "window" }
];

    const officeSuppliesEmojis = [
  { letter: "✏️", unicode: "✏️", name: "Pencil", id: "pencil" },
  { letter: "🖊️", unicode: "🖊️", name: "Pen", id: "pen" },
  { letter: "🖋️", unicode: "🖋️", name: "Fountain Pen", id: "fountain-pen" },
  { letter: "🖌️", unicode: "🖌️", name: "Paintbrush", id: "paintbrush" },
  { letter: "🖍️", unicode: "🖍️", name: "Crayon", id: "crayon" },
  { letter: "📐", unicode: "📐", name: "Triangular Ruler", id: "triangular-ruler" },
  { letter: "📏", unicode: "📏", name: "Straight Ruler", id: "straight-ruler" },
  { letter: "📝", unicode: "📝", name: "Memo", id: "memo" },
  { letter: "📒", unicode: "📒", name: "Ledger", id: "ledger" },
  { letter: "📔", unicode: "📔", name: "Notebook", id: "notebook" },
  { letter: "📕", unicode: "📕", name: "Closed Book", id: "closed-book" },
  { letter: "📗", unicode: "📗", name: "Green Book", id: "green-book" },
  { letter: "📘", unicode: "📘", name: "Blue Book", id: "blue-book" },
  { letter: "📙", unicode: "📙", name: "Orange Book", id: "orange-book" },
  { letter: "📚", unicode: "📚", name: "Books", id: "books" },
  { letter: "📓", unicode: "📓", name: "Notebook", id: "notebook-closed" },
  { letter: "📆", unicode: "📆", name: "Calendar", id: "calendar" },
  { letter: "📅", unicode: "📅", name: "Date", id: "date" },
  { letter: "📇", unicode: "📇", name: "Card Index", id: "card-index" },
  { letter: "📈", unicode: "📈", name: "Chart Rising", id: "chart-rising" },
  { letter: "📉", unicode: "📉", name: "Chart Falling", id: "chart-falling" },
  { letter: "📊", unicode: "📊", name: "Bar Chart", id: "bar-chart" },
  { letter: "📋", unicode: "📋", name: "Clipboard", id: "clipboard" },
  { letter: "📂", unicode: "📂", name: "Folder", id: "folder" },
  { letter: "📁", unicode: "📁", name: "Open Folder", id: "open-folder" }
];

const symbolsSignsEmojis = [
  { letter: "⚠️", unicode: "⚠️", name: "Warning", id: "warning" },
  { letter: "🚸", unicode: "🚸", name: "Children Crossing", id: "children-crossing" },
  { letter: "🚦", unicode: "🚦", name: "Traffic Light", id: "traffic-light" },
  { letter: "🚥", unicode: "🚥", name: "Horizontal Traffic Light", id: "horizontal-traffic-light" },
  { letter: "🚧", unicode: "🚧", name: "Construction", id: "construction" },
  { letter: "⛔", unicode: "⛔", name: "No Entry", id: "no-entry" },
  { letter: "🚫", unicode: "🚫", name: "Prohibited", id: "prohibited" },
  { letter: "❗", unicode: "❗", name: "Exclamation Mark", id: "exclamation-mark" },
  { letter: "❌", unicode: "❌", name: "Cross Mark", id: "cross-mark" },
  { letter: "✅", unicode: "✅", name: "Check Mark", id: "check-mark" },
  { letter: "❎", unicode: "❎", name: "Negative Squared Cross Mark", id: "negative-squared-cross-mark" },
  { letter: "🛑", unicode: "🛑", name: "Stop Sign", id: "stop-sign" },
  { letter: "🛂", unicode: "🛂", name: "Passport Control", id: "passport-control" },
  { letter: "🛃", unicode: "🛃", name: "Customs", id: "customs" },
  { letter: "🛄", unicode: "🛄", name: "Baggage Claim", id: "baggage-claim" },
  { letter: "🛅", unicode: "🛅", name: "Left Luggage", id: "left-luggage" },
  { letter: "♿", unicode: "♿", name: "Wheelchair Symbol", id: "wheelchair-symbol" },
  { letter: "🚻", unicode: "🚻", name: "Restroom", id: "restroom" },
  { letter: "🚹", unicode: "🚹", name: "Mens Room", id: "mens-room" },
  { letter: "🚺", unicode: "🚺", name: "Womens Room", id: "womens-room" },
  { letter: "🚼", unicode: "🚼", name: "Baby Symbol", id: "baby-symbol" },
  { letter: "🚭", unicode: "🚭", name: "No Smoking", id: "no-smoking" },
  { letter: "🚯", unicode: "🚯", name: "No Littering", id: "no-littering" },
  { letter: "🚱", unicode: "🚱", name: "Non-Potable Water", id: "non-potable-water" },
  { letter: "🚳", unicode: "🚳", name: "No Bicycles", id: "no-bicycles" },
  { letter: "🚷", unicode: "🚷", name: "No Pedestrians", id: "no-pedestrians" },
  { letter: "🚷", unicode: "🚷", name: "No Pedestrians", id: "no-pedestrians" },
  { letter: "🚸", unicode: "🚸", name: "Children Crossing", id: "children-crossing" },
  { letter: "🚾", unicode: "🚾", name: "Water Closet", id: "water-closet" },
  { letter: "🅿️", unicode: "🅿️", name: "Parking", id: "parking" },
  { letter: "🛂", unicode: "🛂", name: "Passport Control", id: "passport-control" },
  { letter: "🛃", unicode: "🛃", name: "Customs", id: "customs" },
  { letter: "🛄", unicode: "🛄", name: "Baggage Claim", id: "baggage-claim" },
  { letter: "🛅", unicode: "🛅", name: "Left Luggage", id: "left-luggage" },
  { letter: "🆖", unicode: "🆖", name: "NG Button", id: "ng-button" },
  { letter: "🆗", unicode: "🆗", name: "OK Button", id: "ok-button" },
  { letter: "🆙", unicode: "🆙", name: "UP! Button", id: "up-button" },
  { letter: "🆒", unicode: "🆒", name: "COOL Button", id: "cool-button" },
  { letter: "🆕", unicode: "🆕", name: "NEW Button", id: "new-button" },
  { letter: "🆓", unicode: "🆓", name: "FREE Button", id: "free-button" },
  { letter: "🅰️", unicode: "🅰️", name: "A Button (Blood Type)", id: "a-button" },
  { letter: "🅱️", unicode: "🅱️", name: "B Button (Blood Type)", id: "b-button" },
  { letter: "🆎", unicode: "🆎", name: "AB Button (Blood Type)", id: "ab-button" },
  { letter: "🅾️", unicode: "🅾️", name: "O Button (Blood Type)", id: "o-button" },
  { letter: "🆘", unicode: "🆘", name: "SOS Button", id: "sos-button" },
  { letter: "❕", unicode: "❕", name: "Exclamation Mark", id: "exclamation-mark" },
  { letter: "❔", unicode: "❔", name: "Question Mark", id: "question-mark" },
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
    createKeys("tools-utensils-container", toolsAndUtensils);
    createKeys("electronics-emojis-container", electronicsEmojis);
    createKeys("household-items-emojis-container", householdItemsEmojis);
    createKeys("office-supplies-emojis-container", officeSuppliesEmojis);
    createKeys("symbols-signs-emojis-container", symbolsSignsEmojis);
});
