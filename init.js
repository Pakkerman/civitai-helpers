const URL_PATTERN = "https://orchestration.civitai.com/v1/consumer/images/";
const imageURLs = new Set();
const imageElements = new Map();
let currentImageURLinView = "";

window.addEventListener("load", function () {
  console.log("fully loaded document, init helper");
  init();
});

window.addEventListener("keydown", ({ key }) => {
  if (key !== "`") return;
  console.log(currentImageURLinView);

  const generatorQueue = document.querySelector("div#generator-queue");
  const imgs = generatorQueue.querySelectorAll("img");
  imgs.forEach((img) => {
    if (img.src !== currentImageURLinView) return;

    img.parentElement.parentElement.querySelector("input").click();
    console.log("input clicked");
  });
});

async function init() {
  const body = document.body;
  const generatorQueue = body.querySelector("div#generator-queue");

  if (window.location.href === "https://civitai.com/generate") {
    hideElements(body, ["footer", "header"]);
  }

  initActions();
  addDeleteButtonToImages();

  const generatorQueueObserver = new MutationObserver(() => {
    console.log("observer fired");
    updateSelection();
  });

  generatorQueueObserver.observe(generatorQueue, {
    childList: true,
    subtree: true,
  });

  const modalObserver = new MutationObserver(() => {
    const modal = body.querySelector('div[role="presentation"]');
    if (!modal) return;

    console.log("modal:", modal);

    const modalObserver = new IntersectionObserver(handleIntersect, {
      root: modal.querySelector('div[role="dialog"]'), // Defaults to the browser viewport if not specified
      rootMargin: "20px",
    });

    const imgs = modal.querySelectorAll("img");
    console.log(imgs.length);
    imgs.forEach((img) => {
      modalObserver.observe(img);
    });

    function handleIntersect(imgs, observer) {
      imgs.forEach((item) => {
        if (item.isIntersecting) {
          currentImageURLinView = item.target.src;
          // Element is in view
          console.log("Element in view:", item.target);
        }
      });
    }
  });

  modalObserver.observe(body, { childList: true, subtree: true });
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

      case "F":
        toast("action/autofillTags");
        autofillTags();
        break;

      case "E":
        console.log("EEEEEE");
        const generateButton = getGenerateButton();
        generateButton.click();
        function getGenerateButton() {
          const buttons = document.querySelectorAll("button");

          for (const button of buttons) {
            const buttonChildren = button.querySelectorAll("div");
            for (const child of buttonChildren) {
              if (child.textContent === "Generate") {
                return button;
              }
            }
          }
        }

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

  updateSelection();
}

function updateSelection() {
  const arr = [...imageURLs];
  // console.log(arr);
  document.querySelectorAll("img").forEach((item) => {
    if (!arr.includes(item.src)) return;

    item.setAttribute("style", "border: 4px solid #FB923C");
  });
}

function hideElements(element, selectors) {
  selectors.forEach((selector) => {
    element.querySelector(selector).classList.add("hidden");
  });
}

function addDeleteButtonToImages() {
  const imgs = documents.querySelectorAll("img");
}
