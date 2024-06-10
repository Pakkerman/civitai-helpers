// init the page

if (window.location.href.includes("generate")) {
  void init();
}

const images = new Set();
async function init() {
  initActions();
}

function initActions() {
  document.addEventListener("keydown", (e) => {
    const { key, shiftKey, ctrlKey, metaKey } = e;

    if (!shiftKey && !ctrlKey && !metaKey) return;

    switch (key) {
      case "D":
        download();
        break;

      case "S":
        scan();

      default:
        break;
    }
  });
}

function download() {
  console.log("download action");

  [...images].forEach((item, idx) => {
    setTimeout(() => {
      downloadFn(item);
      console.log(`\rdownloading: ${idx}`);
    }, idx * 100);
  });

  async function downloadFn(url) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = url.split("/")[6];
      link.click();

      URL.revokeObjectURL(link.href);
    } catch {
      console.log("this blew up");
    }
  }
}
function scan() {
  console.log("scan action");

  document.querySelectorAll("img").forEach((item) => {
    if (!item.src.includes("images")) return;

    images.add(item.src);
    item.setAttribute("style", "border: 4px solid #FB923C");
  });

  console.log(images.size);
}
