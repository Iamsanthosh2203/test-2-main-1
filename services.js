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
