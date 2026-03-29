document.addEventListener("DOMContentLoaded", function () {
  function makeGroup(title, idPrefix, items) {
    return {
      title,
      idPrefix,
      items: items.map((item, index) => ({
        letter: item.letter,
        unicode: item.letter,
        name: item.name,
        id: `${idPrefix}-${index + 1}`,
      })),
    };
  }

  const coreGroups = [
    makeGroup("Nature and World", "nature", [
      { letter: "日", name: "sun, day" },
      { letter: "月", name: "moon, month" },
      { letter: "火", name: "fire" },
      { letter: "水", name: "water" },
      { letter: "木", name: "tree, wood" },
      { letter: "金", name: "gold, money" },
      { letter: "土", name: "earth" },
      { letter: "山", name: "mountain" },
      { letter: "川", name: "river" },
      { letter: "天", name: "sky, heaven" },
      { letter: "空", name: "sky, empty" },
      { letter: "気", name: "spirit, air" },
    ]),
    makeGroup("People and Life", "people", [
      { letter: "人", name: "person" },
      { letter: "子", name: "child" },
      { letter: "女", name: "woman" },
      { letter: "男", name: "man" },
      { letter: "父", name: "father" },
      { letter: "母", name: "mother" },
      { letter: "友", name: "friend" },
      { letter: "先", name: "previous, ahead" },
      { letter: "生", name: "life, birth" },
      { letter: "学", name: "study" },
      { letter: "校", name: "school" },
      { letter: "名", name: "name" },
    ]),
    makeGroup("Places and Direction", "places", [
      { letter: "本", name: "book, origin" },
      { letter: "国", name: "country" },
      { letter: "外", name: "outside" },
      { letter: "中", name: "middle" },
      { letter: "上", name: "up, above" },
      { letter: "下", name: "down, below" },
      { letter: "左", name: "left" },
      { letter: "右", name: "right" },
      { letter: "東", name: "east" },
      { letter: "西", name: "west" },
      { letter: "南", name: "south" },
      { letter: "北", name: "north" },
    ]),
    makeGroup("Actions and Everyday Words", "actions", [
      { letter: "見", name: "see" },
      { letter: "聞", name: "hear, ask" },
      { letter: "言", name: "say" },
      { letter: "話", name: "talk" },
      { letter: "行", name: "go" },
      { letter: "来", name: "come" },
      { letter: "食", name: "eat" },
      { letter: "飲", name: "drink" },
      { letter: "読", name: "read" },
      { letter: "書", name: "write" },
      { letter: "買", name: "buy" },
      { letter: "休", name: "rest" },
    ]),
    makeGroup("Useful Common Kanji", "common", [
      { letter: "大", name: "big" },
      { letter: "小", name: "small" },
      { letter: "新", name: "new" },
      { letter: "古", name: "old" },
      { letter: "長", name: "long, leader" },
      { letter: "高", name: "high, expensive" },
      { letter: "安", name: "cheap, safe" },
      { letter: "多", name: "many" },
      { letter: "少", name: "few" },
      { letter: "白", name: "white" },
      { letter: "黒", name: "black" },
      { letter: "語", name: "language, word" },
    ]),
  ];

  const radicals = [
    { letter: "亻", unicode: "亻", name: "person", id: "rad-person" },
    { letter: "氵", unicode: "氵", name: "water", id: "rad-water" },
    { letter: "扌", unicode: "扌", name: "hand", id: "rad-hand" },
    { letter: "艹", unicode: "艹", name: "grass", id: "rad-grass" },
    { letter: "木", unicode: "木", name: "tree", id: "rad-tree" },
    { letter: "口", unicode: "口", name: "mouth", id: "rad-mouth" },
    { letter: "心", unicode: "心", name: "heart", id: "rad-heart" },
    { letter: "忄", unicode: "忄", name: "heart side", id: "rad-heart-side" },
    { letter: "言", unicode: "言", name: "speech", id: "rad-speech" },
    { letter: "訁", unicode: "訁", name: "speech side", id: "rad-speech-side" },
    { letter: "女", unicode: "女", name: "woman", id: "rad-woman" },
    { letter: "子", unicode: "子", name: "child", id: "rad-child" },
    { letter: "糸", unicode: "糸", name: "thread", id: "rad-thread" },
    { letter: "車", unicode: "車", name: "vehicle", id: "rad-vehicle" },
    { letter: "辶", unicode: "辶", name: "walk", id: "rad-walk" },
    { letter: "阝", unicode: "阝", name: "mound", id: "rad-mound" },
    { letter: "門", unicode: "門", name: "gate", id: "rad-gate" },
    { letter: "雨", unicode: "雨", name: "rain", id: "rad-rain" },
    { letter: "火", unicode: "火", name: "fire", id: "rad-fire" },
    { letter: "灬", unicode: "灬", name: "fire base", id: "rad-fire-base" },
  ];

  const numberAndTimeKanji = [
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
    {
      letter: "万",
      unicode: "万",
      name: "ten thousand",
      id: "num-ten-thousand",
    },
    { letter: "円", unicode: "円", name: "yen, circle", id: "num-yen" },
    { letter: "時", unicode: "時", name: "time, hour", id: "time-hour" },
    { letter: "分", unicode: "分", name: "minute, part", id: "time-minute" },
    { letter: "半", unicode: "半", name: "half", id: "time-half" },
    { letter: "今", unicode: "今", name: "now", id: "time-now" },
    { letter: "午", unicode: "午", name: "noon", id: "time-noon" },
    { letter: "前", unicode: "前", name: "before", id: "time-before" },
    { letter: "後", unicode: "後", name: "after", id: "time-after" },
    { letter: "毎", unicode: "毎", name: "every", id: "time-every" },
    { letter: "週", unicode: "週", name: "week", id: "time-week" },
    { letter: "年", unicode: "年", name: "year", id: "time-year" },
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
      body.classList.add("alphabet-grid");
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

  createFamilyCards("kanji-core-container", coreGroups);
  createKeys("kanji-radicals-container", radicals);
  createKeys("kanji-numbers-container", numberAndTimeKanji);
});
