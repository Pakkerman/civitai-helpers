const domain = "https://civitai.com";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`\naction: ${message.action} received\n`);
  switch (message.action) {
    case "run":
      break;

    case "generate":
      break;

    case "download":
      console.log("download clicked");
      download();
      break;

    case "createProject":
      break;

    default:
      console.log("hello");
      return;
  }
});

const set = new Set();

function download() {
  console.log(set);
}

function run() {}
