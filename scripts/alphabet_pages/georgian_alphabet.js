document.addEventListener("DOMContentLoaded", function () {
  const georgianMkhedruli = [
    { letter: "ა", unicode: "ა", name: "A", id: "geo-mkh-a" },
    { letter: "ბ", unicode: "ბ", name: "B", id: "geo-mkh-b" },
    { letter: "გ", unicode: "გ", name: "G", id: "geo-mkh-g" },
    { letter: "დ", unicode: "დ", name: "D", id: "geo-mkh-d" },
    { letter: "ე", unicode: "ე", name: "E", id: "geo-mkh-e" },
    { letter: "ვ", unicode: "ვ", name: "V", id: "geo-mkh-v" },
    { letter: "ზ", unicode: "ზ", name: "Z", id: "geo-mkh-z" },
    { letter: "თ", unicode: "თ", name: "T", id: "geo-mkh-t" },
    { letter: "ი", unicode: "ი", name: "I", id: "geo-mkh-i" },
    { letter: "კ", unicode: "კ", name: "K'", id: "geo-mkh-k-ejective" },
    { letter: "ლ", unicode: "ლ", name: "L", id: "geo-mkh-l" },
    { letter: "მ", unicode: "მ", name: "M", id: "geo-mkh-m" },
    { letter: "ნ", unicode: "ნ", name: "N", id: "geo-mkh-n" },
    { letter: "ო", unicode: "ო", name: "O", id: "geo-mkh-o" },
    { letter: "პ", unicode: "პ", name: "P'", id: "geo-mkh-p-ejective" },
    { letter: "ჟ", unicode: "ჟ", name: "Zh", id: "geo-mkh-zh" },
    { letter: "რ", unicode: "რ", name: "R", id: "geo-mkh-r" },
    { letter: "ს", unicode: "ს", name: "S", id: "geo-mkh-s" },
    { letter: "ტ", unicode: "ტ", name: "T'", id: "geo-mkh-t-ejective" },
    { letter: "უ", unicode: "უ", name: "U", id: "geo-mkh-u" },
    { letter: "ფ", unicode: "ფ", name: "P", id: "geo-mkh-p" },
    { letter: "ქ", unicode: "ქ", name: "K", id: "geo-mkh-k" },
    { letter: "ღ", unicode: "ღ", name: "Gh", id: "geo-mkh-gh" },
    { letter: "ყ", unicode: "ყ", name: "Q'", id: "geo-mkh-q-ejective" },
    { letter: "შ", unicode: "შ", name: "Sh", id: "geo-mkh-sh" },
    { letter: "ჩ", unicode: "ჩ", name: "Ch", id: "geo-mkh-ch" },
    { letter: "ც", unicode: "ც", name: "Ts", id: "geo-mkh-ts" },
    { letter: "ძ", unicode: "ძ", name: "Dz", id: "geo-mkh-dz" },
    { letter: "წ", unicode: "წ", name: "Ts'", id: "geo-mkh-ts-ejective" },
    { letter: "ჭ", unicode: "ჭ", name: "Ch'", id: "geo-mkh-ch-ejective" },
    { letter: "ხ", unicode: "ხ", name: "Kh", id: "geo-mkh-kh" },
    { letter: "ჯ", unicode: "ჯ", name: "J", id: "geo-mkh-j" },
    { letter: "ჰ", unicode: "ჰ", name: "H", id: "geo-mkh-h" },
  ];

  const georgianMtavruli = [
    { letter: "Ა", unicode: "Ა", name: "A", id: "geo-mta-a" },
    { letter: "Ბ", unicode: "Ბ", name: "B", id: "geo-mta-b" },
    { letter: "Გ", unicode: "Გ", name: "G", id: "geo-mta-g" },
    { letter: "Დ", unicode: "Დ", name: "D", id: "geo-mta-d" },
    { letter: "Ე", unicode: "Ე", name: "E", id: "geo-mta-e" },
    { letter: "Ვ", unicode: "Ვ", name: "V", id: "geo-mta-v" },
    { letter: "Ზ", unicode: "Ზ", name: "Z", id: "geo-mta-z" },
    { letter: "Თ", unicode: "Თ", name: "T", id: "geo-mta-t" },
    { letter: "Ი", unicode: "Ი", name: "I", id: "geo-mta-i" },
    { letter: "Კ", unicode: "Კ", name: "K'", id: "geo-mta-k-ejective" },
    { letter: "Ლ", unicode: "Ლ", name: "L", id: "geo-mta-l" },
    { letter: "Მ", unicode: "Მ", name: "M", id: "geo-mta-m" },
    { letter: "Ნ", unicode: "Ნ", name: "N", id: "geo-mta-n" },
    { letter: "Ო", unicode: "Ო", name: "O", id: "geo-mta-o" },
    { letter: "Პ", unicode: "Პ", name: "P'", id: "geo-mta-p-ejective" },
    { letter: "Ჟ", unicode: "Ჟ", name: "Zh", id: "geo-mta-zh" },
    { letter: "Რ", unicode: "Რ", name: "R", id: "geo-mta-r" },
    { letter: "Ს", unicode: "Ს", name: "S", id: "geo-mta-s" },
    { letter: "Ტ", unicode: "Ტ", name: "T'", id: "geo-mta-t-ejective" },
    { letter: "Უ", unicode: "Უ", name: "U", id: "geo-mta-u" },
    { letter: "Ფ", unicode: "Ფ", name: "P", id: "geo-mta-p" },
    { letter: "Ქ", unicode: "Ქ", name: "K", id: "geo-mta-k" },
    { letter: "Ღ", unicode: "Ღ", name: "Gh", id: "geo-mta-gh" },
    { letter: "Ყ", unicode: "Ყ", name: "Q'", id: "geo-mta-q-ejective" },
    { letter: "Შ", unicode: "Შ", name: "Sh", id: "geo-mta-sh" },
    { letter: "Ჩ", unicode: "Ჩ", name: "Ch", id: "geo-mta-ch" },
    { letter: "Ც", unicode: "Ც", name: "Ts", id: "geo-mta-ts" },
    { letter: "Ძ", unicode: "Ძ", name: "Dz", id: "geo-mta-dz" },
    { letter: "Წ", unicode: "Წ", name: "Ts'", id: "geo-mta-ts-ejective" },
    { letter: "Ჭ", unicode: "Ჭ", name: "Ch'", id: "geo-mta-ch-ejective" },
    { letter: "Ხ", unicode: "Ხ", name: "Kh", id: "geo-mta-kh" },
    { letter: "Ჯ", unicode: "Ჯ", name: "J", id: "geo-mta-j" },
    { letter: "Ჰ", unicode: "Ჰ", name: "H", id: "geo-mta-h" },
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

  createKeys("georgian-mkhedruli-container", georgianMkhedruli);
  createKeys("georgian-mtavruli-container", georgianMtavruli);
});
