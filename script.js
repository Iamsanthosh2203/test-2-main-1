AOS.init({
  duration: 1200,
});
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  if (!emailInput.checkValidity()) {
    event.preventDefault();
    alert("Invalid email address!");
    emailInput.classList.add("invalid");
  }
});

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

let rooms = document.getElementById("rooms-num");
let roomsNumber = rooms.innerHTML;

const roomsIncBtn = document.getElementById("rooms-inc-btn");
const roomsDecBtn = document.getElementById("rooms-dec-btn");

roomsIncBtn.addEventListener("click", () => {
  if (roomsNumber >= 1) {
    roomsNumber++;
    rooms.innerHTML = roomsNumber;
  }
});

roomsDecBtn.addEventListener("click", () => {
  if (!(roomsNumber <= 1)) {
    roomsNumber--;
    rooms.innerHTML = roomsNumber;
  }
});

let guests = document.getElementById("guests-num");
let guestsNumber = guests.innerHTML;

const guestsIncBtn = document.getElementById("guests-inc-btn");
const guestsDecBtn = document.getElementById("guests-dec-btn");

guestsIncBtn.addEventListener("click", () => {
  if (guestsNumber >= 1) {
    guestsNumber++;
    guests.innerHTML = guestsNumber;
  }
});

guestsDecBtn.addEventListener("click", () => {
  if (!(guestsNumber <= 1)) {
    guestsNumber--;
    guests.innerHTML = guestsNumber;
  }
});

let children = document.getElementById("children-num");
let childrenNumber = children.innerHTML;

const childrenIncBtn = document.getElementById("children-inc-btn");
const childrenDecBtn = document.getElementById("children-dec-btn");

childrenIncBtn.addEventListener("click", () => {
  if (childrenNumber >= 1) {
    childrenNumber++;
    children.innerHTML = childrenNumber;
  }
});

childrenDecBtn.addEventListener("click", () => {
  if (!(childrenNumber <= 1)) {
    childrenNumber--;
    children.innerHTML = childrenNumber;
  }
});

const arrival_Date = document.getElementById("arrivalDate");
const arrival_Month = document.getElementById("arrivalMonth");
const arrival = document.getElementById("arrival");

arrival.flatpickr({
  mode: "single",
  disableMobile: true,
  altInput: true,
  altFormat: "d/m/Y",
  dateFormat: "d/m/Y",
  onClose: function (selectedDates, dateStr, instance) {
    var dateStart = instance.formatDate(selectedDates[0], "d/m/Y");

    console.log(dateStart);

    var monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var selectedMonth = parseInt(dateStart.slice(3, 5)) - 1; // Subtracting 1 to match array index

    arrival_Date.innerText = dateStart.slice(0, 2);
    arrival_Month.innerText = monthAbbreviations[selectedMonth];
  },
});

const departure_Date = document.getElementById("departureDate");
const departure_Month = document.getElementById("departureMonth");
const departure = document.getElementById("departure");

departure.flatpickr({
  mode: "single",
  disableMobile: true,
  altInput: true,
  altFormat: "d/m/Y",
  dateFormat: "d/m/Y",
  onClose: function (selectedDates, dateStr, instance) {
    var dateStart = instance.formatDate(selectedDates[0], "d/m/Y");

    console.log(dateStart);

    var monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var selectedMonth = parseInt(dateStart.slice(3, 5)) - 1; // Subtracting 1 to match array index

    departure_Date.innerText = dateStart.slice(0, 2);
    departure_Month.innerText = monthAbbreviations[selectedMonth];
  },
});
function Slider() {
  const carouselSlides = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
  const dotsSlide = document.querySelector(".dots-container");
  let currentSlide = 0;

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };
  activeDot(currentSlide);

  const changeSlide = function (slides) {
    carouselSlides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
  };
  changeSlide(currentSlide);

  btnNext.addEventListener("click", function () {
    currentSlide++;
    if (carouselSlides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });
  btnPrev.addEventListener("click", function () {
    currentSlide--;
    if (0 >= currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsSlide.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const slide = e.target.dataset.slide;
      changeSlide(slide);
      activeDot(slide);
    }
  });
}
Slider();

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
