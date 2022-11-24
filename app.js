const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 130) {
    header.classList.add("scrolled");
    header.dataset.mode = "dark";
  } else {
    header.classList.remove("scrolled");
    header.dataset.mode = "light";
  }
})