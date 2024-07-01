// if (window.location.href.includes("generate")) {
//   void init();
// }
const URL_PATTERN = "https://orchestration.civitai.com/v1/consumer/images/";
const imageURLs = new Set();

init();

async function init() {
  initActions();

  const observer = new MutationObserver(() => {
    console.log("observer fired");
    selectImgs();
  });
  observer.observe(document.querySelector("div[role='tabpanel']"), {
    childList: true,
    subtree: true,
  });
}

function initActions() {
  document.addEventListener("keydown", (e) => {
    const { key, shiftKey, ctrlKey, metaKey } = e;

    if (!shiftKey && !ctrlKey && !metaKey) return;

    switch (key) {
      case "D":
        toast("action/download");
        download(imageURLs);
        break;

      case "S":
        toast("action/scan");
        scan();
        break;

      case "L":
        toast("action/clickLike");
        clickLike();
        break;

      default:
        break;
    }
  });
}

function scan() {
  console.log("scan action");

  document.querySelectorAll("img").forEach((item) => {
    if (item.src.includes(URL_PATTERN)) imageURLs.add(item.src);
  });

  selectImgs();
}

function selectImgs() {
  const arr = [...imageURLs];
  document.querySelectorAll("img").forEach((item) => {
    if (!arr.includes(item.src)) return;

    item.setAttribute("style", "border: 4px solid #FB923C");
  });
}
