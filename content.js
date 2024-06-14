chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`\naction: ${message.action} received\n`);
  switch (message.action) {
    case "run":
      break;

    case "generate":
      break;

    case "download":
      console.log("download clicked");
      break;

    case "createProject":
      break;

    default:
      console.log("hello");
      return;
  }
});

function download() {}

function run() {}
