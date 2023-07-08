AOS.init({
  duration: 1200,
});
const windowSwimming = document.getElementById("windowSwimming");
const btn = document.getElementById("btn");
const swimming = document.getElementById("swimming");

swimming.addEventListener("click", () => {
  windowSwimming.classList.remove("none");
});
btn.addEventListener("click", () => {
  windowSwimming.classList.add("none");
});
