AOS.init({
  duration: 1200,
});
function setupWindow(windowId, btnId, contentId) {
  const windowElement = document.getElementById(windowId);
  const btnElement = document.getElementById(btnId);
  const contentElement = document.getElementById(contentId);

  console.log(windowElement, btnElement, contentElement);

  contentElement.addEventListener("click", () => {
    windowElement.classList.remove("none");
  });

  btnElement.addEventListener("click", () => {
    windowElement.classList.add("none");
  });
}
setupWindow("windowDinner", "btnDinner", "dinner");
setupWindow("windowSwimming", "btnSwimming", "swimming");
setupWindow("windowGrill", "btnGrill", "grill");
setupWindow("windowFishing", "btnFishing", "fishing");
setupWindow("windowSpa", "btnSpa", "spa");
setupWindow("windowBar", "btnBar", "bar");

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
