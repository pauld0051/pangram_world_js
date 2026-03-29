document.addEventListener("DOMContentLoaded", function () {
  const vietnameseCore = [
    { letter: "A", unicode: "A", name: "A", id: "core-a-upper" },
    { letter: "a", unicode: "a", name: "a", id: "core-a-lower" },
    { letter: "Ă", unicode: "Ă", name: "A Breve", id: "core-a-breve-upper" },
    { letter: "ă", unicode: "ă", name: "a Breve", id: "core-a-breve-lower" },
    { letter: "Â", unicode: "Â", name: "A Circ", id: "core-a-circ-upper" },
    { letter: "â", unicode: "â", name: "a Circ", id: "core-a-circ-lower" },

    { letter: "E", unicode: "E", name: "E", id: "core-e-upper" },
    { letter: "e", unicode: "e", name: "e", id: "core-e-lower" },
    { letter: "Ê", unicode: "Ê", name: "E Circ", id: "core-e-circ-upper" },
    { letter: "ê", unicode: "ê", name: "e Circ", id: "core-e-circ-lower" },

    { letter: "I", unicode: "I", name: "I", id: "core-i-upper" },
    { letter: "i", unicode: "i", name: "i", id: "core-i-lower" },

    { letter: "O", unicode: "O", name: "O", id: "core-o-upper" },
    { letter: "o", unicode: "o", name: "o", id: "core-o-lower" },
    { letter: "Ô", unicode: "Ô", name: "O Circ", id: "core-o-circ-upper" },
    { letter: "ô", unicode: "ô", name: "o Circ", id: "core-o-circ-lower" },
    { letter: "Ơ", unicode: "Ơ", name: "O Horn", id: "core-o-horn-upper" },
    { letter: "ơ", unicode: "ơ", name: "o Horn", id: "core-o-horn-lower" },

    { letter: "U", unicode: "U", name: "U", id: "core-u-upper" },
    { letter: "u", unicode: "u", name: "u", id: "core-u-lower" },
    { letter: "Ư", unicode: "Ư", name: "U Horn", id: "core-u-horn-upper" },
    { letter: "ư", unicode: "ư", name: "u Horn", id: "core-u-horn-lower" },

    { letter: "Y", unicode: "Y", name: "Y", id: "core-y-upper" },
    { letter: "y", unicode: "y", name: "y", id: "core-y-lower" },

    { letter: "Đ", unicode: "Đ", name: "D Stroke", id: "core-d-stroke-upper" },
    { letter: "đ", unicode: "đ", name: "d Stroke", id: "core-d-stroke-lower" },
  ];

  const vietnameseA = [
    { letter: "À", unicode: "À", name: "A Grave", id: "a-a-grave-upper" },
    { letter: "à", unicode: "à", name: "a Grave", id: "a-a-grave-lower" },
    { letter: "Á", unicode: "Á", name: "A Acute", id: "a-a-acute-upper" },
    { letter: "á", unicode: "á", name: "a Acute", id: "a-a-acute-lower" },
    { letter: "Ả", unicode: "Ả", name: "A Hook", id: "a-a-hook-upper" },
    { letter: "ả", unicode: "ả", name: "a Hook", id: "a-a-hook-lower" },
    { letter: "Ã", unicode: "Ã", name: "A Tilde", id: "a-a-tilde-upper" },
    { letter: "ã", unicode: "ã", name: "a Tilde", id: "a-a-tilde-lower" },
    { letter: "Ạ", unicode: "Ạ", name: "A Dot", id: "a-a-dot-upper" },
    { letter: "ạ", unicode: "ạ", name: "a Dot", id: "a-a-dot-lower" },

    { letter: "Ằ", unicode: "Ằ", name: "Ă Grave", id: "a-ab-grave-upper" },
    { letter: "ằ", unicode: "ằ", name: "ă Grave", id: "a-ab-grave-lower" },
    { letter: "Ắ", unicode: "Ắ", name: "Ă Acute", id: "a-ab-acute-upper" },
    { letter: "ắ", unicode: "ắ", name: "ă Acute", id: "a-ab-acute-lower" },
    { letter: "Ẳ", unicode: "Ẳ", name: "Ă Hook", id: "a-ab-hook-upper" },
    { letter: "ẳ", unicode: "ẳ", name: "ă Hook", id: "a-ab-hook-lower" },
    { letter: "Ẵ", unicode: "Ẵ", name: "Ă Tilde", id: "a-ab-tilde-upper" },
    { letter: "ẵ", unicode: "ẵ", name: "ă Tilde", id: "a-ab-tilde-lower" },
    { letter: "Ặ", unicode: "Ặ", name: "Ă Dot", id: "a-ab-dot-upper" },
    { letter: "ặ", unicode: "ặ", name: "ă Dot", id: "a-ab-dot-lower" },

    { letter: "Ầ", unicode: "Ầ", name: "Â Grave", id: "a-ac-grave-upper" },
    { letter: "ầ", unicode: "ầ", name: "â Grave", id: "a-ac-grave-lower" },
    { letter: "Ấ", unicode: "Ấ", name: "Â Acute", id: "a-ac-acute-upper" },
    { letter: "ấ", unicode: "ấ", name: "â Acute", id: "a-ac-acute-lower" },
    { letter: "Ẩ", unicode: "Ẩ", name: "Â Hook", id: "a-ac-hook-upper" },
    { letter: "ẩ", unicode: "ẩ", name: "â Hook", id: "a-ac-hook-lower" },
    { letter: "Ẫ", unicode: "Ẫ", name: "Â Tilde", id: "a-ac-tilde-upper" },
    { letter: "ẫ", unicode: "ẫ", name: "â Tilde", id: "a-ac-tilde-lower" },
    { letter: "Ậ", unicode: "Ậ", name: "Â Dot", id: "a-ac-dot-upper" },
    { letter: "ậ", unicode: "ậ", name: "â Dot", id: "a-ac-dot-lower" },
  ];

  const vietnameseEI = [
    { letter: "È", unicode: "È", name: "E Grave", id: "ei-e-grave-upper" },
    { letter: "è", unicode: "è", name: "e Grave", id: "ei-e-grave-lower" },
    { letter: "É", unicode: "É", name: "E Acute", id: "ei-e-acute-upper" },
    { letter: "é", unicode: "é", name: "e Acute", id: "ei-e-acute-lower" },
    { letter: "Ẻ", unicode: "Ẻ", name: "E Hook", id: "ei-e-hook-upper" },
    { letter: "ẻ", unicode: "ẻ", name: "e Hook", id: "ei-e-hook-lower" },
    { letter: "Ẽ", unicode: "Ẽ", name: "E Tilde", id: "ei-e-tilde-upper" },
    { letter: "ẽ", unicode: "ẽ", name: "e Tilde", id: "ei-e-tilde-lower" },
    { letter: "Ẹ", unicode: "Ẹ", name: "E Dot", id: "ei-e-dot-upper" },
    { letter: "ẹ", unicode: "ẹ", name: "e Dot", id: "ei-e-dot-lower" },

    { letter: "Ề", unicode: "Ề", name: "Ê Grave", id: "ei-ec-grave-upper" },
    { letter: "ề", unicode: "ề", name: "ê Grave", id: "ei-ec-grave-lower" },
    { letter: "Ế", unicode: "Ế", name: "Ê Acute", id: "ei-ec-acute-upper" },
    { letter: "ế", unicode: "ế", name: "ê Acute", id: "ei-ec-acute-lower" },
    { letter: "Ể", unicode: "Ể", name: "Ê Hook", id: "ei-ec-hook-upper" },
    { letter: "ể", unicode: "ể", name: "ê Hook", id: "ei-ec-hook-lower" },
    { letter: "Ễ", unicode: "Ễ", name: "Ê Tilde", id: "ei-ec-tilde-upper" },
    { letter: "ễ", unicode: "ễ", name: "ê Tilde", id: "ei-ec-tilde-lower" },
    { letter: "Ệ", unicode: "Ệ", name: "Ê Dot", id: "ei-ec-dot-upper" },
    { letter: "ệ", unicode: "ệ", name: "ê Dot", id: "ei-ec-dot-lower" },

    { letter: "Ì", unicode: "Ì", name: "I Grave", id: "ei-i-grave-upper" },
    { letter: "ì", unicode: "ì", name: "i Grave", id: "ei-i-grave-lower" },
    { letter: "Í", unicode: "Í", name: "I Acute", id: "ei-i-acute-upper" },
    { letter: "í", unicode: "í", name: "i Acute", id: "ei-i-acute-lower" },
    { letter: "Ỉ", unicode: "Ỉ", name: "I Hook", id: "ei-i-hook-upper" },
    { letter: "ỉ", unicode: "ỉ", name: "i Hook", id: "ei-i-hook-lower" },
    { letter: "Ĩ", unicode: "Ĩ", name: "I Tilde", id: "ei-i-tilde-upper" },
    { letter: "ĩ", unicode: "ĩ", name: "i Tilde", id: "ei-i-tilde-lower" },
    { letter: "Ị", unicode: "Ị", name: "I Dot", id: "ei-i-dot-upper" },
    { letter: "ị", unicode: "ị", name: "i Dot", id: "ei-i-dot-lower" },
  ];

  const vietnameseO = [
    { letter: "Ò", unicode: "Ò", name: "O Grave", id: "o-o-grave-upper" },
    { letter: "ò", unicode: "ò", name: "o Grave", id: "o-o-grave-lower" },
    { letter: "Ó", unicode: "Ó", name: "O Acute", id: "o-o-acute-upper" },
    { letter: "ó", unicode: "ó", name: "o Acute", id: "o-o-acute-lower" },
    { letter: "Ỏ", unicode: "Ỏ", name: "O Hook", id: "o-o-hook-upper" },
    { letter: "ỏ", unicode: "ỏ", name: "o Hook", id: "o-o-hook-lower" },
    { letter: "Õ", unicode: "Õ", name: "O Tilde", id: "o-o-tilde-upper" },
    { letter: "õ", unicode: "õ", name: "o Tilde", id: "o-o-tilde-lower" },
    { letter: "Ọ", unicode: "Ọ", name: "O Dot", id: "o-o-dot-upper" },
    { letter: "ọ", unicode: "ọ", name: "o Dot", id: "o-o-dot-lower" },

    { letter: "Ồ", unicode: "Ồ", name: "Ô Grave", id: "o-oc-grave-upper" },
    { letter: "ồ", unicode: "ồ", name: "ô Grave", id: "o-oc-grave-lower" },
    { letter: "Ố", unicode: "Ố", name: "Ô Acute", id: "o-oc-acute-upper" },
    { letter: "ố", unicode: "ố", name: "ô Acute", id: "o-oc-acute-lower" },
    { letter: "Ổ", unicode: "Ổ", name: "Ô Hook", id: "o-oc-hook-upper" },
    { letter: "ổ", unicode: "ổ", name: "ô Hook", id: "o-oc-hook-lower" },
    { letter: "Ỗ", unicode: "Ỗ", name: "Ô Tilde", id: "o-oc-tilde-upper" },
    { letter: "ỗ", unicode: "ỗ", name: "ô Tilde", id: "o-oc-tilde-lower" },
    { letter: "Ộ", unicode: "Ộ", name: "Ô Dot", id: "o-oc-dot-upper" },
    { letter: "ộ", unicode: "ộ", name: "ô Dot", id: "o-oc-dot-lower" },

    { letter: "Ờ", unicode: "Ờ", name: "Ơ Grave", id: "o-oh-grave-upper" },
    { letter: "ờ", unicode: "ờ", name: "ơ Grave", id: "o-oh-grave-lower" },
    { letter: "Ớ", unicode: "Ớ", name: "Ơ Acute", id: "o-oh-acute-upper" },
    { letter: "ớ", unicode: "ớ", name: "ơ Acute", id: "o-oh-acute-lower" },
    { letter: "Ở", unicode: "Ở", name: "Ơ Hook", id: "o-oh-hook-upper" },
    { letter: "ở", unicode: "ở", name: "ơ Hook", id: "o-oh-hook-lower" },
    { letter: "Ỡ", unicode: "Ỡ", name: "Ơ Tilde", id: "o-oh-tilde-upper" },
    { letter: "ỡ", unicode: "ỡ", name: "ơ Tilde", id: "o-oh-tilde-lower" },
    { letter: "Ợ", unicode: "Ợ", name: "Ơ Dot", id: "o-oh-dot-upper" },
    { letter: "ợ", unicode: "ợ", name: "ơ Dot", id: "o-oh-dot-lower" },
  ];

  const vietnameseUY = [
    { letter: "Ù", unicode: "Ù", name: "U Grave", id: "uy-u-grave-upper" },
    { letter: "ù", unicode: "ù", name: "u Grave", id: "uy-u-grave-lower" },
    { letter: "Ú", unicode: "Ú", name: "U Acute", id: "uy-u-acute-upper" },
    { letter: "ú", unicode: "ú", name: "u Acute", id: "uy-u-acute-lower" },
    { letter: "Ủ", unicode: "Ủ", name: "U Hook", id: "uy-u-hook-upper" },
    { letter: "ủ", unicode: "ủ", name: "u Hook", id: "uy-u-hook-lower" },
    { letter: "Ũ", unicode: "Ũ", name: "U Tilde", id: "uy-u-tilde-upper" },
    { letter: "ũ", unicode: "ũ", name: "u Tilde", id: "uy-u-tilde-lower" },
    { letter: "Ụ", unicode: "Ụ", name: "U Dot", id: "uy-u-dot-upper" },
    { letter: "ụ", unicode: "ụ", name: "u Dot", id: "uy-u-dot-lower" },

    { letter: "Ừ", unicode: "Ừ", name: "Ư Grave", id: "uy-uh-grave-upper" },
    { letter: "ừ", unicode: "ừ", name: "ư Grave", id: "uy-uh-grave-lower" },
    { letter: "Ứ", unicode: "Ứ", name: "Ư Acute", id: "uy-uh-acute-upper" },
    { letter: "ứ", unicode: "ứ", name: "ư Acute", id: "uy-uh-acute-lower" },
    { letter: "Ử", unicode: "Ử", name: "Ư Hook", id: "uy-uh-hook-upper" },
    { letter: "ử", unicode: "ử", name: "ư Hook", id: "uy-uh-hook-lower" },
    { letter: "Ữ", unicode: "Ữ", name: "Ư Tilde", id: "uy-uh-tilde-upper" },
    { letter: "ữ", unicode: "ữ", name: "ư Tilde", id: "uy-uh-tilde-lower" },
    { letter: "Ự", unicode: "Ự", name: "Ư Dot", id: "uy-uh-dot-upper" },
    { letter: "ự", unicode: "ự", name: "ư Dot", id: "uy-uh-dot-lower" },

    { letter: "Ỳ", unicode: "Ỳ", name: "Y Grave", id: "uy-y-grave-upper" },
    { letter: "ỳ", unicode: "ỳ", name: "y Grave", id: "uy-y-grave-lower" },
    { letter: "Ý", unicode: "Ý", name: "Y Acute", id: "uy-y-acute-upper" },
    { letter: "ý", unicode: "ý", name: "y Acute", id: "uy-y-acute-lower" },
    { letter: "Ỷ", unicode: "Ỷ", name: "Y Hook", id: "uy-y-hook-upper" },
    { letter: "ỷ", unicode: "ỷ", name: "y Hook", id: "uy-y-hook-lower" },
    { letter: "Ỹ", unicode: "Ỹ", name: "Y Tilde", id: "uy-y-tilde-upper" },
    { letter: "ỹ", unicode: "ỹ", name: "y Tilde", id: "uy-y-tilde-lower" },
    { letter: "Ỵ", unicode: "Ỵ", name: "Y Dot", id: "uy-y-dot-upper" },
    { letter: "ỵ", unicode: "ỵ", name: "y Dot", id: "uy-y-dot-lower" },
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

  createKeys("vietnamese-core-container", vietnameseCore);
  createKeys("vietnamese-a-container", vietnameseA);
  createKeys("vietnamese-ei-container", vietnameseEI);
  createKeys("vietnamese-o-container", vietnameseO);
  createKeys("vietnamese-uy-container", vietnameseUY);
});
