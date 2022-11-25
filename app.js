// get header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header.classList.contains("menu-opened") && !header.classList.contains("other-page")) {
    if (window.scrollY >= 130) {
      header.classList.add("scrolled");
      header.dataset.mode = "dark";
    } else {
      header.classList.remove("scrolled");
      header.dataset.mode = "light";
    }
  }
})

header.querySelector(".menu-burger-container button").addEventListener("click", () => {
  if (!header.classList.contains("other-page")) {
    if (header.classList.contains("menu-opened")) {
      header.dataset.mode = "light";
    } else {
      header.dataset.mode = "dark";
    }
  }
  
  header.classList.toggle("menu-opened");
  document.body.classList.toggle("stop-scrolling")
})