async function autofillTags() {
  let ms = 0;

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "Tag")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "woman")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "Tag")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "illustration")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "Tag")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "character")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "Tag")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );

  setTimeout(
    () => {
      [...document.body.querySelectorAll("div")]
        .filter((item) => item.innerText === "fantasy")
        .forEach((item) => item.click());
    },
    (ms += 1000),
  );
}
