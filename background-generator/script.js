// Import
var _ = require('lodash');

console.log(_);

// Lodash test - didn't work because we are now using bundle.js instead of script.js
array = [1,2,3,4,5,6,7,8,9,0];
console.log(array);
console.log(_.without(array,5));

// Variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Testing
console.log(body);

// Functions
function setColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent =  body.style.background;
}

setColor();

// Event Listeners
color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);