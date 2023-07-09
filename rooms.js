const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  let value = scrollY;
  if (value > 0) {
    nav.classList.add("blur-back");
  } else {
    nav.classList.remove("blur-back");
  }
});

window.addEventListener("scroll", function () {
  var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
  headerHeight = headerHeight - 90;
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > headerHeight) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
  }
});
AOS.init({
  duration: 1200,
});
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  }
});

closeBtn.addEventListener("click", () => {
  if (menu.classList.contains("flex")) {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
});
