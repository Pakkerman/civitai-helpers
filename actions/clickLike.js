function clickLike() {
  setTimeout(() => {
    const buttons = [
      ...document.querySelectorAll(
        ".mantine-UnstyledButton-root.mantine-Button-root",
      ),
    ];

    buttons
      .filter((item) => item.querySelector("span").textContent.includes("❤️"))
      .forEach((item) => item.click());

    buttons
      .filter((item) => item.querySelector("span").textContent.includes("👍"))
      .forEach((item) => item.click());
  }, 300);

  toast("action/clickLike");
}
