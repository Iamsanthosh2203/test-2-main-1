const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  let value = scrollY;
  if (value > 0) {
    nav.classList.add("blur-back");
  } else {
    nav.classList.remove("blur-back");
  }

  if (value > 100) {
    nav.classList.remove("relative");
    nav.classList.add("fixed");
    console.log("working", value);
  }

  if (value < 100) {
    nav.classList.add("relative");
    nav.classList.remove("fixed");
    console.log("working", value);
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
