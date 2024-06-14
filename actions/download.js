function download(imageURLs) {
  console.log("download action");

  [...imageURLs].forEach((item, idx) => {
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
