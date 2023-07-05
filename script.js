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
