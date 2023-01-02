"use strict";

const dateBoard = document.querySelector(".showArea"); // an area where the Date and Time is gonna be displayed
const datefinder = document.querySelector(".date"); // the button to be clicked to see date and time
const closeDate = document.querySelector(".closeDate"); // the butto to be clicked to hide the showArea
datefinder.addEventListener("click", function () {
  dateBoard.classList.remove("hidden");
  dateBoard.querySelector(".date_and_time").textContent = `Now it is ${Date()}`;
});

closeDate.addEventListener("click", function () {
  dateBoard.classList.add("hidden");
});
