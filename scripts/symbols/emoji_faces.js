document.addEventListener("DOMContentLoaded", function () {
  const facesEmojis = [
  { letter: "😀", unicode: "😀", name: "Grinning", id: "grinning-face" },
  { letter: "😁", unicode: "😁", name: "Beaming", id: "beaming-face" },
  { letter: "😂", unicode: "😂", name: "Tears of Joy", id: "tears-of-joy" },
  { letter: "😃", unicode: "😃", name: "Big Grin", id: "big-grin" },
  { letter: "😄", unicode: "😄", name: "Grin Eyes", id: "grin-eyes" },
  { letter: "😅", unicode: "😅", name: "Sweat Grin", id: "sweat-grin" },
  { letter: "😆", unicode: "😆", name: "Squint Grin", id: "squint-grin" },
  { letter: "😉", unicode: "😉", name: "Wink", id: "wink" },
  { letter: "😊", unicode: "😊", name: "Smile Eyes", id: "smile-eyes" },
  { letter: "😋", unicode: "😋", name: "Savouring", id: "savouring" },
  { letter: "😎", unicode: "😎", name: "Sunglasses", id: "sunglasses" },
  { letter: "😍", unicode: "😍", name: "Heart Eyes", id: "heart-eyes" },
  { letter: "😘", unicode: "😘", name: "Blow Kiss", id: "blow-kiss" },
  { letter: "😗", unicode: "😗", name: "Kiss", id: "kiss" },
  { letter: "😙", unicode: "😙", name: "Kiss Smile", id: "kiss-smile" },
  { letter: "😚", unicode: "😚", name: "Kiss Eyes", id: "kiss-eyes" },
  { letter: "🙂", unicode: "🙂", name: "Slight Smile", id: "slight-smile" },
  { letter: "🤗", unicode: "🤗", name: "Hug", id: "hug" },
  { letter: "🤔", unicode: "🤔", name: "Thinking", id: "thinking" },
  { letter: "😐", unicode: "😐", name: "Neutral", id: "neutral" },
  { letter: "😑", unicode: "😑", name: "Expressionless", id: "expressionless" },
  { letter: "😶", unicode: "😶", name: "No Mouth", id: "no-mouth" },
  { letter: "🙄", unicode: "🙄", name: "Eye Roll", id: "eye-roll" },
  { letter: "😏", unicode: "😏", name: "Smirk", id: "smirk" },
  { letter: "😣", unicode: "😣", name: "Persevering", id: "persevering" },
  { letter: "😥", unicode: "😥", name: "Sad Relieved", id: "sad-relieved" },
  { letter: "😮", unicode: "😮", name: "Open Mouth", id: "open-mouth" },
  { letter: "🤐", unicode: "🤐", name: "Zipper Mouth", id: "zipper-mouth" },
  { letter: "😯", unicode: "😯", name: "Hushed", id: "hushed" },
  { letter: "😪", unicode: "😪", name: "Sleepy", id: "sleepy" },
  { letter: "😫", unicode: "😫", name: "Tired", id: "tired" },
  { letter: "😴", unicode: "😴", name: "Sleeping", id: "sleeping" },
  { letter: "😌", unicode: "😌", name: "Relieved", id: "relieved" },
  { letter: "😛", unicode: "😛", name: "Tongue Out", id: "tongue-out" },
  { letter: "😜", unicode: "😜", name: "Wink Tongue", id: "wink-tongue" },
  { letter: "😝", unicode: "😝", name: "Squint Tongue", id: "squint-tongue" },
  { letter: "🤤", unicode: "🤤", name: "Drooling", id: "drooling" },
  { letter: "😒", unicode: "😒", name: "Unamused", id: "unamused" },
  { letter: "😓", unicode: "😓", name: "Sweat", id: "sweat" },
  { letter: "😔", unicode: "😔", name: "Pensive", id: "pensive" },
  { letter: "😕", unicode: "😕", name: "Confused", id: "confused" },
  { letter: "🙃", unicode: "🙃", name: "Upside-Down", id: "upside-down" },
  { letter: "🤑", unicode: "🤑", name: "Money Mouth", id: "money-mouth" },
  { letter: "😲", unicode: "😲", name: "Astonished", id: "astonished" },
  { letter: "☹️", unicode: "☹️", name: "Frown", id: "frown" },
  { letter: "🙁", unicode: "🙁", name: "Slight Frown", id: "slight-frown" },
  { letter: "😖", unicode: "😖", name: "Confounded", id: "confounded" },
  { letter: "😞", unicode: "😞", name: "Disappointed", id: "disappointed" },
  { letter: "😟", unicode: "😟", name: "Worried", id: "worried" },
  { letter: "😤", unicode: "😤", name: "Steam Nose", id: "steam-nose" },
  { letter: "😢", unicode: "😢", name: "Crying", id: "crying" },
  { letter: "😭", unicode: "😭", name: "Loud Crying", id: "loud-crying" },
  { letter: "😦", unicode: "😦", name: "Frown Mouth", id: "frown-mouth" },
  { letter: "😧", unicode: "😧", name: "Anguished", id: "anguished" },
  { letter: "😨", unicode: "😨", name: "Fearful", id: "fearful" },
  { letter: "😩", unicode: "😩", name: "Weary", id: "weary" },
  { letter: "😬", unicode: "😬", name: "Grimacing", id: "grimacing" },
  { letter: "😰", unicode: "😰", name: "Anxious Sweat", id: "anxious-sweat" },
  { letter: "😱", unicode: "😱", name: "Scream Fear", id: "scream-fear" },
  { letter: "😳", unicode: "😳", name: "Flushed", id: "flushed" },
  { letter: "😵", unicode: "😵", name: "Dizzy", id: "dizzy" },
  { letter: "😡", unicode: "😡", name: "Pouting", id: "pouting" },
  { letter: "😠", unicode: "😠", name: "Angry", id: "angry" },
  { letter: "🤬", unicode: "🤬", name: "Cursing", id: "cursing" },
  { letter: "🤯", unicode: "🤯", name: "Exploding", id: "exploding" },
  { letter: "😷", unicode: "😷", name: "Mask", id: "mask" },
  { letter: "🤒", unicode: "🤒", name: "Thermometer", id: "thermometer" },
  { letter: "🤕", unicode: "🤕", name: "Bandage", id: "bandage" },
  { letter: "🤢", unicode: "🤢", name: "Nauseated", id: "nauseated" },
  { letter: "🤮", unicode: "🤮", name: "Vomiting", id: "vomiting" },
  { letter: "🤧", unicode: "🤧", name: "Sneezing", id: "sneezing" },
  { letter: "🥵", unicode: "🥵", name: "Hot", id: "hot" },
  { letter: "🥶", unicode: "🥶", name: "Cold", id: "cold" },
  { letter: "🥴", unicode: "🥴", name: "Woozy", id: "woozy" },
  { letter: "😵‍💫", unicode: "😵‍💫", name: "Spiral Eyes", id: "spiral-eyes" },
  { letter: "🤠", unicode: "🤠", name: "Cowboy", id: "cowboy" },
  { letter: "🥳", unicode: "🥳", name: "Party", id: "party" },
  { letter: "🥸", unicode: "🥸", name: "Disguise", id: "disguise" },
  { letter: "🤓", unicode: "🤓", name: "Nerd", id: "nerd" },
  { letter: "🧐", unicode: "🧐", name: "Monocle", id: "monocle" },
  { letter: "🤭", unicode: "🤭", name: "Hand Over Mouth", id: "hand-over-mouth" },
  { letter: "🤫", unicode: "🤫", name: "Shush", id: "shush" },
  { letter: "🤥", unicode: "🤥", name: "Lying", id: "lying" },
  { letter: "🤨", unicode: "🤨", name: "Raised Brow", id: "raised-brow" },
  { letter: "🥱", unicode: "🥱", name: "Yawning", id: "yawning" },
  { letter: "🥺", unicode: "🥺", name: "Pleading", id: "pleading" },
  { letter: "🤪", unicode: "🤪", name: "Crazy Face", id: "crazy-face" },
  { letter: "🤩", unicode: "🤩", name: "Star-Struck", id: "star-struck" },
  { letter: "🥰", unicode: "🥰", name: "Hearts Smile", id: "hearts-smile" },
  { letter: "🤡", unicode: "🤡", name: "Clown", id: "clown" }
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
  createKeys("faces-emojis-container", facesEmojis);
});
