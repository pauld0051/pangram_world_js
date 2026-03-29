document.addEventListener("DOMContentLoaded", function () {
  const coreGroups = [
    {
      title: "Pronouns and Core Words",
      items: [
        { letter: "我", unicode: "我", name: "I, me", id: "core-wo" },
        { letter: "你", unicode: "你", name: "you", id: "core-ni" },
        { letter: "他", unicode: "他", name: "he", id: "core-ta-he" },
        { letter: "她", unicode: "她", name: "she", id: "core-ta-she" },
        { letter: "它", unicode: "它", name: "it", id: "core-ta-it" },
        { letter: "们", unicode: "们", name: "plural", id: "core-men" },
        { letter: "的", unicode: "的", name: "possessive", id: "core-de" },
        { letter: "是", unicode: "是", name: "to be", id: "core-shi" },
        { letter: "不", unicode: "不", name: "not", id: "core-bu" },
        { letter: "了", unicode: "了", name: "completed", id: "core-le" },
        { letter: "在", unicode: "在", name: "at, in", id: "core-zai" },
        { letter: "有", unicode: "有", name: "have", id: "core-you" },
      ],
    },
    {
      title: "People and Everyday Life",
      items: [
        { letter: "人", unicode: "人", name: "person", id: "life-ren" },
        { letter: "口", unicode: "口", name: "mouth", id: "life-kou" },
        { letter: "女", unicode: "女", name: "woman", id: "life-nv" },
        { letter: "子", unicode: "子", name: "child", id: "life-zi" },
        { letter: "男", unicode: "男", name: "man", id: "life-nan" },
        { letter: "家", unicode: "家", name: "home", id: "life-jia" },
        { letter: "学", unicode: "学", name: "study", id: "life-xue" },
        { letter: "生", unicode: "生", name: "life", id: "life-sheng" },
        { letter: "老", unicode: "老", name: "old", id: "life-lao" },
        {
          letter: "师",
          unicode: "师",
          name: "teacher",
          id: "life-shi-teacher",
        },
        { letter: "友", unicode: "友", name: "friend", id: "life-you-friend" },
        { letter: "爱", unicode: "爱", name: "love", id: "life-ai" },
      ],
    },
    {
      title: "Nature and Time",
      items: [
        { letter: "日", unicode: "日", name: "sun, day", id: "nature-ri" },
        { letter: "月", unicode: "月", name: "moon", id: "nature-yue" },
        { letter: "山", unicode: "山", name: "mountain", id: "nature-shan" },
        { letter: "水", unicode: "水", name: "water", id: "nature-shui" },
        { letter: "火", unicode: "火", name: "fire", id: "nature-huo" },
        { letter: "木", unicode: "木", name: "wood", id: "nature-mu" },
        { letter: "土", unicode: "土", name: "earth", id: "nature-tu" },
        { letter: "金", unicode: "金", name: "metal", id: "nature-jin" },
        { letter: "天", unicode: "天", name: "sky, day", id: "nature-tian" },
        { letter: "年", unicode: "年", name: "year", id: "nature-nian" },
        { letter: "时", unicode: "时", name: "time", id: "nature-shi-time" },
        { letter: "气", unicode: "气", name: "air, qi", id: "nature-qi" },
      ],
    },
    {
      title: "Places and Actions",
      items: [
        { letter: "中", unicode: "中", name: "middle", id: "action-zhong" },
        { letter: "国", unicode: "国", name: "country", id: "action-guo" },
        { letter: "大", unicode: "大", name: "big", id: "action-da" },
        { letter: "小", unicode: "小", name: "small", id: "action-xiao" },
        { letter: "上", unicode: "上", name: "up", id: "action-shang" },
        { letter: "下", unicode: "下", name: "down", id: "action-xia" },
        { letter: "来", unicode: "来", name: "come", id: "action-lai" },
        { letter: "去", unicode: "去", name: "go", id: "action-qu" },
        { letter: "看", unicode: "看", name: "look", id: "action-kan" },
        { letter: "说", unicode: "说", name: "speak", id: "action-shuo" },
        { letter: "吃", unicode: "吃", name: "eat", id: "action-chi" },
        { letter: "喝", unicode: "喝", name: "drink", id: "action-he" },
      ],
    },
  ];

  const radicals = [
    { letter: "氵", unicode: "氵", name: "water", id: "rad-water" },
    { letter: "亻", unicode: "亻", name: "person", id: "rad-person" },
    { letter: "扌", unicode: "扌", name: "hand", id: "rad-hand" },
    { letter: "艹", unicode: "艹", name: "grass", id: "rad-grass" },
    { letter: "木", unicode: "木", name: "wood", id: "rad-wood" },
    { letter: "口", unicode: "口", name: "mouth", id: "rad-mouth" },
    { letter: "女", unicode: "女", name: "woman", id: "rad-woman" },
    { letter: "心", unicode: "心", name: "heart", id: "rad-heart" },
    { letter: "忄", unicode: "忄", name: "heart side", id: "rad-heart-side" },
    { letter: "讠", unicode: "讠", name: "speech", id: "rad-speech" },
    { letter: "饣", unicode: "饣", name: "eat", id: "rad-eat" },
    { letter: "门", unicode: "门", name: "gate", id: "rad-gate" },
    { letter: "辶", unicode: "辶", name: "walk", id: "rad-walk" },
    { letter: "阝", unicode: "阝", name: "mound", id: "rad-mound" },
    { letter: "宀", unicode: "宀", name: "roof", id: "rad-roof" },
    { letter: "土", unicode: "土", name: "earth", id: "rad-earth" },
    { letter: "火", unicode: "火", name: "fire", id: "rad-fire" },
    { letter: "灬", unicode: "灬", name: "fire base", id: "rad-fire-base" },
    { letter: "虫", unicode: "虫", name: "insect", id: "rad-insect" },
    { letter: "纟", unicode: "纟", name: "silk", id: "rad-silk" },
  ];

  const pinyinToneMarks = [
    { letter: "ā", unicode: "ā", name: "a 1st", id: "py-a1" },
    { letter: "á", unicode: "á", name: "a 2nd", id: "py-a2" },
    { letter: "ǎ", unicode: "ǎ", name: "a 3rd", id: "py-a3" },
    { letter: "à", unicode: "à", name: "a 4th", id: "py-a4" },
    { letter: "ē", unicode: "ē", name: "e 1st", id: "py-e1" },
    { letter: "é", unicode: "é", name: "e 2nd", id: "py-e2" },
    { letter: "ě", unicode: "ě", name: "e 3rd", id: "py-e3" },
    { letter: "è", unicode: "è", name: "e 4th", id: "py-e4" },
    { letter: "ī", unicode: "ī", name: "i 1st", id: "py-i1" },
    { letter: "í", unicode: "í", name: "i 2nd", id: "py-i2" },
    { letter: "ǐ", unicode: "ǐ", name: "i 3rd", id: "py-i3" },
    { letter: "ì", unicode: "ì", name: "i 4th", id: "py-i4" },
    { letter: "ō", unicode: "ō", name: "o 1st", id: "py-o1" },
    { letter: "ó", unicode: "ó", name: "o 2nd", id: "py-o2" },
    { letter: "ǒ", unicode: "ǒ", name: "o 3rd", id: "py-o3" },
    { letter: "ò", unicode: "ò", name: "o 4th", id: "py-o4" },
    { letter: "ū", unicode: "ū", name: "u 1st", id: "py-u1" },
    { letter: "ú", unicode: "ú", name: "u 2nd", id: "py-u2" },
    { letter: "ǔ", unicode: "ǔ", name: "u 3rd", id: "py-u3" },
    { letter: "ù", unicode: "ù", name: "u 4th", id: "py-u4" },
    { letter: "ǖ", unicode: "ǖ", name: "ü 1st", id: "py-v1" },
    { letter: "ǘ", unicode: "ǘ", name: "ü 2nd", id: "py-v2" },
    { letter: "ǚ", unicode: "ǚ", name: "ü 3rd", id: "py-v3" },
    { letter: "ǜ", unicode: "ǜ", name: "ü 4th", id: "py-v4" },
    { letter: "ü", unicode: "ü", name: "plain ü", id: "py-v0" },
  ];

  const punctuationMarks = [
    { letter: "。", unicode: "。", name: "full stop", id: "punct-stop" },
    { letter: "，", unicode: "，", name: "comma", id: "punct-comma" },
    { letter: "、", unicode: "、", name: "enumeration", id: "punct-enum" },
    { letter: "？", unicode: "？", name: "question", id: "punct-question" },
    { letter: "！", unicode: "！", name: "exclamation", id: "punct-exclaim" },
    { letter: "：", unicode: "：", name: "colon", id: "punct-colon" },
    { letter: "；", unicode: "；", name: "semicolon", id: "punct-semicolon" },
    { letter: "《", unicode: "《", name: "title open", id: "punct-title-open" },
    {
      letter: "》",
      unicode: "》",
      name: "title close",
      id: "punct-title-close",
    },
    {
      letter: "「",
      unicode: "「",
      name: "quote open",
      id: "punct-quote-open-1",
    },
    {
      letter: "」",
      unicode: "」",
      name: "quote close",
      id: "punct-quote-close-1",
    },
    {
      letter: "『",
      unicode: "『",
      name: "inner open",
      id: "punct-quote-open-2",
    },
    {
      letter: "』",
      unicode: "』",
      name: "inner close",
      id: "punct-quote-close-2",
    },
    { letter: "（", unicode: "（", name: "paren open", id: "punct-paren-open" },
    {
      letter: "）",
      unicode: "）",
      name: "paren close",
      id: "punct-paren-close",
    },
    {
      letter: "【",
      unicode: "【",
      name: "bracket open",
      id: "punct-bracket-open",
    },
    {
      letter: "】",
      unicode: "】",
      name: "bracket close",
      id: "punct-bracket-close",
    },
    { letter: "“", unicode: "“", name: "double open", id: "punct-double-open" },
    {
      letter: "”",
      unicode: "”",
      name: "double close",
      id: "punct-double-close",
    },
    { letter: "…", unicode: "…", name: "ellipsis", id: "punct-ellipsis" },
  ];

  const numerals = [
    { letter: "零", unicode: "零", name: "zero", id: "num-zero" },
    { letter: "〇", unicode: "〇", name: "zero alt", id: "num-zero-alt" },
    { letter: "一", unicode: "一", name: "one", id: "num-one" },
    { letter: "二", unicode: "二", name: "two", id: "num-two" },
    { letter: "三", unicode: "三", name: "three", id: "num-three" },
    { letter: "四", unicode: "四", name: "four", id: "num-four" },
    { letter: "五", unicode: "五", name: "five", id: "num-five" },
    { letter: "六", unicode: "六", name: "six", id: "num-six" },
    { letter: "七", unicode: "七", name: "seven", id: "num-seven" },
    { letter: "八", unicode: "八", name: "eight", id: "num-eight" },
    { letter: "九", unicode: "九", name: "nine", id: "num-nine" },
    { letter: "十", unicode: "十", name: "ten", id: "num-ten" },
    { letter: "百", unicode: "百", name: "hundred", id: "num-hundred" },
    { letter: "千", unicode: "千", name: "thousand", id: "num-thousand" },
    { letter: "万", unicode: "万", name: "ten thousand", id: "num-wan" },
    { letter: "亿", unicode: "亿", name: "hundred million", id: "num-yi" },
  ];

  function createKey(item) {
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

    return key;
  }

  function createKeys(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach((item) => {
      container.appendChild(createKey(item));
    });
  }

  function createFamilyCards(containerId, groups) {
    const container = document.getElementById(containerId);

    groups.forEach((group) => {
      const col = document.createElement("div");
      col.className = "col-xl-3 col-lg-4 col-md-6";

      const card = document.createElement("div");
      card.className = "card alphabet-card h-100";

      const header = document.createElement("div");
      header.className = "card-header text-center";
      header.innerText = group.title;

      const body = document.createElement("div");
      body.className = "card-body text-center alphabet-grid";

      group.items.forEach((item) => {
        body.appendChild(createKey(item));
      });

      card.appendChild(header);
      card.appendChild(body);
      col.appendChild(card);
      container.appendChild(col);
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

  createFamilyCards("chinese-core-container", coreGroups);
  createKeys("chinese-radicals-container", radicals);
  createKeys("chinese-pinyin-container", pinyinToneMarks);
  createKeys("chinese-punctuation-container", punctuationMarks);
  createKeys("chinese-numerals-container", numerals);
});
