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
