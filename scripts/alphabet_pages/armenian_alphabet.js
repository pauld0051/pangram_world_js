document.addEventListener("DOMContentLoaded", function () {
  const armenianCapitals = [
    { letter: "Ա", unicode: "Ա", name: "Ayb", id: "cap-ayb" },
    { letter: "Բ", unicode: "Բ", name: "Ben", id: "cap-ben" },
    { letter: "Գ", unicode: "Գ", name: "Gim", id: "cap-gim" },
    { letter: "Դ", unicode: "Դ", name: "Da", id: "cap-da" },
    { letter: "Ե", unicode: "Ե", name: "Ech", id: "cap-ech" },
    { letter: "Զ", unicode: "Զ", name: "Za", id: "cap-za" },
    { letter: "Է", unicode: "Է", name: "Eh", id: "cap-eh" },
    { letter: "Ը", unicode: "Ը", name: "Et", id: "cap-et" },
    { letter: "Թ", unicode: "Թ", name: "To", id: "cap-to" },
    { letter: "Ժ", unicode: "Ժ", name: "Zhe", id: "cap-zhe" },
    { letter: "Ի", unicode: "Ի", name: "Ini", id: "cap-ini" },
    { letter: "Լ", unicode: "Լ", name: "Liwn", id: "cap-liwn" },
    { letter: "Խ", unicode: "Խ", name: "Xeh", id: "cap-xeh" },
    { letter: "Ծ", unicode: "Ծ", name: "Ca", id: "cap-ca" },
    { letter: "Կ", unicode: "Կ", name: "Ken", id: "cap-ken" },
    { letter: "Հ", unicode: "Հ", name: "Ho", id: "cap-ho" },
    { letter: "Ձ", unicode: "Ձ", name: "Ja", id: "cap-ja" },
    { letter: "Ղ", unicode: "Ղ", name: "Ghad", id: "cap-ghad" },
    { letter: "Ճ", unicode: "Ճ", name: "Cheh", id: "cap-cheh" },
    { letter: "Մ", unicode: "Մ", name: "Men", id: "cap-men" },
    { letter: "Յ", unicode: "Յ", name: "Yi", id: "cap-yi" },
    { letter: "Ն", unicode: "Ն", name: "Now", id: "cap-now" },
    { letter: "Շ", unicode: "Շ", name: "Sha", id: "cap-sha" },
    { letter: "Ո", unicode: "Ո", name: "Vo", id: "cap-vo" },
    { letter: "Չ", unicode: "Չ", name: "Cha", id: "cap-cha" },
    { letter: "Պ", unicode: "Պ", name: "Peh", id: "cap-peh" },
    { letter: "Ջ", unicode: "Ջ", name: "Jheh", id: "cap-jheh" },
    { letter: "Ռ", unicode: "Ռ", name: "Ra", id: "cap-ra" },
    { letter: "Ս", unicode: "Ս", name: "Seh", id: "cap-seh" },
    { letter: "Վ", unicode: "Վ", name: "Vew", id: "cap-vew" },
    { letter: "Տ", unicode: "Տ", name: "Tiwn", id: "cap-tiwn" },
    { letter: "Ր", unicode: "Ր", name: "Reh", id: "cap-reh" },
    { letter: "Ց", unicode: "Ց", name: "Co", id: "cap-co" },
    { letter: "Ւ", unicode: "Ւ", name: "Yiwn", id: "cap-yiwn" },
    { letter: "Փ", unicode: "Փ", name: "Piwr", id: "cap-piwr" },
    { letter: "Ք", unicode: "Ք", name: "Keh", id: "cap-keh" },
    { letter: "Օ", unicode: "Օ", name: "Oh", id: "cap-oh" },
    { letter: "Ֆ", unicode: "Ֆ", name: "Feh", id: "cap-feh" },
  ];

  const armenianLowercase = [
    { letter: "ա", unicode: "ա", name: "Ayb", id: "low-ayb" },
    { letter: "բ", unicode: "բ", name: "Ben", id: "low-ben" },
    { letter: "գ", unicode: "գ", name: "Gim", id: "low-gim" },
    { letter: "դ", unicode: "դ", name: "Da", id: "low-da" },
    { letter: "ե", unicode: "ե", name: "Ech", id: "low-ech" },
    { letter: "զ", unicode: "զ", name: "Za", id: "low-za" },
    { letter: "է", unicode: "է", name: "Eh", id: "low-eh" },
    { letter: "ը", unicode: "ը", name: "Et", id: "low-et" },
    { letter: "թ", unicode: "թ", name: "To", id: "low-to" },
    { letter: "ժ", unicode: "ժ", name: "Zhe", id: "low-zhe" },
    { letter: "ի", unicode: "ի", name: "Ini", id: "low-ini" },
    { letter: "լ", unicode: "լ", name: "Liwn", id: "low-liwn" },
    { letter: "խ", unicode: "խ", name: "Xeh", id: "low-xeh" },
    { letter: "ծ", unicode: "ծ", name: "Ca", id: "low-ca" },
    { letter: "կ", unicode: "կ", name: "Ken", id: "low-ken" },
    { letter: "հ", unicode: "հ", name: "Ho", id: "low-ho" },
    { letter: "ձ", unicode: "ձ", name: "Ja", id: "low-ja" },
    { letter: "ղ", unicode: "ղ", name: "Ghad", id: "low-ghad" },
    { letter: "ճ", unicode: "ճ", name: "Cheh", id: "low-cheh" },
    { letter: "մ", unicode: "մ", name: "Men", id: "low-men" },
    { letter: "յ", unicode: "յ", name: "Yi", id: "low-yi" },
    { letter: "ն", unicode: "ն", name: "Now", id: "low-now" },
    { letter: "շ", unicode: "շ", name: "Sha", id: "low-sha" },
    { letter: "ո", unicode: "ո", name: "Vo", id: "low-vo" },
    { letter: "չ", unicode: "չ", name: "Cha", id: "low-cha" },
    { letter: "պ", unicode: "պ", name: "Peh", id: "low-peh" },
    { letter: "ջ", unicode: "ջ", name: "Jheh", id: "low-jheh" },
    { letter: "ռ", unicode: "ռ", name: "Ra", id: "low-ra" },
    { letter: "ս", unicode: "ս", name: "Seh", id: "low-seh" },
    { letter: "վ", unicode: "վ", name: "Vew", id: "low-vew" },
    { letter: "տ", unicode: "տ", name: "Tiwn", id: "low-tiwn" },
    { letter: "ր", unicode: "ր", name: "Reh", id: "low-reh" },
    { letter: "ց", unicode: "ց", name: "Co", id: "low-co" },
    { letter: "ւ", unicode: "ւ", name: "Yiwn", id: "low-yiwn" },
    { letter: "փ", unicode: "փ", name: "Piwr", id: "low-piwr" },
    { letter: "ք", unicode: "ք", name: "Keh", id: "low-keh" },
    { letter: "օ", unicode: "օ", name: "Oh", id: "low-oh" },
    { letter: "ֆ", unicode: "ֆ", name: "Feh", id: "low-feh" },
  ];

  const armenianExtras = [
    {
      letter: "և",
      unicode: "և",
      name: "Ligature Ech Yiwn",
      id: "ligature-ech-yiwn",
    },
  ];

  function createKeys(containerId, alphabet) {
    const container = document.getElementById(containerId);

    alphabet.forEach((item) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

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

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
  }

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
    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`;

    setTimeout(() => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    }, 1500);
  }

  function removeExistingTooltips() {
    const tooltips = document.querySelectorAll(".copy-tooltip");
    tooltips.forEach((tooltip) => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    });
  }

  createKeys("armenian-capitals-container", armenianCapitals);
  createKeys("armenian-lowercase-container", armenianLowercase);
  createKeys("armenian-extras-container", armenianExtras);
});
