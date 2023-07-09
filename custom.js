// Custom Slider

function CustomSlider() {
  const customSlides = document.querySelectorAll(".custom-slide");
  const customPrevBtn = document.querySelector(".custom-prev");
  const customNextBtn = document.querySelector(".custom-next");
  const customDotsContainer = document.querySelector(".custom-dots-container");
  let currentSlide1 = 0;

  const activateDot = function (slide) {
    document
      .querySelectorAll(".custom-dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.custom-dot[data-slide="${slide}"]`)
      .classList.add("active");
  };
  activateDot(currentSlide1);

  const changeSlide = function (slides) {
    customSlides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
  };
  changeSlide(currentSlide1);

  customNextBtn.addEventListener("click", function () {
    currentSlide1++;
    if (customSlides.length - 1 < currentSlide1) {
      currentSlide1 = 0;
    }
    changeSlide(currentSlide1);
    activateDot(currentSlide1);
  });

  customPrevBtn.addEventListener("click", function () {
    currentSlide1--;
    if (currentSlide1 < 0) {
      currentSlide1 = customSlides.length - 1;
    }
    changeSlide(currentSlide1);
    activateDot(currentSlide1);
  });

  customDotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("custom-dot")) {
      const slide = e.target.dataset.slide;
      changeSlide(slide);
      activateDot(slide);
    }
  });
}

CustomSlider();
