let timeoutId;

function toast(msg) {
  const toast = document.createElement("div");

  // Set the content of the div
  toast.textContent = msg;

  // Apply styling to the toast message
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  toast.style.color = "white";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "5px";
  toast.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
  toast.style.zIndex = "1000";
  toast.style.transition = "opacity 0.5s ease-in-out";
  toast.style.opacity = "1";
  toast.style.fontSize = "2rem";

  // Append the toast message to the body
  document.body.appendChild(toast);

  // Remove the toast message after 3 seconds

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}
