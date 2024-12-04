let total = 0;
let numberOne = "";
let numberTwo = "";
let display = "";
let operator = "";

let displayTotal = document.querySelector(".display-total");
let displayEquation = document.querySelector(".display-equation");

document
  .querySelector(".calculator-buttons")
  .addEventListener("click", displayCalc);

document.querySelector(".clear").addEventListener("click", clear);

// NUMBERS
document.querySelector(".zero").addEventListener("click", zero);
document.querySelector(".one").addEventListener("click", one);
document.querySelector(".two").addEventListener("click", two);
document.querySelector(".three").addEventListener("click", three);
document.querySelector(".four").addEventListener("click", four);
document.querySelector(".five").addEventListener("click", five);
document.querySelector(".six").addEventListener("click", six);
document.querySelector(".seven").addEventListener("click", seven);
document.querySelector(".eight").addEventListener("click", eight);
document.querySelector(".nine").addEventListener("click", nine);

// OPERATORS
document.querySelector(".divide").addEventListener("click", divide);
document.querySelector(".multiply").addEventListener("click", multiply);
document.querySelector(".minus").addEventListener("click", minus);
document.querySelector(".plus").addEventListener("click", plus);
document.querySelector(".equals").addEventListener("click", equals);

// FUNCTIONS
function zero() {
  operator === ""
    ? (numberOne = numberOne + "0")
    : (numberTwo = numberTwo + "0");
}

function one() {
  operator === ""
    ? (numberOne = numberOne + "1")
    : (numberTwo = numberTwo + "1");
}

function two() {
  operator === ""
    ? (numberOne = numberOne + "2")
    : (numberTwo = numberTwo + "2");
}

function three() {
  operator === ""
    ? (numberOne = numberOne + "3")
    : (numberTwo = numberTwo + "3");
}

function four() {
  operator === ""
    ? (numberOne = numberOne + "4")
    : (numberTwo = numberTwo + "4");
}

function five() {
  operator === ""
    ? (numberOne = numberOne + "5")
    : (numberTwo = numberTwo + "5");
}

function six() {
  operator === ""
    ? (numberOne = numberOne + "6")
    : (numberTwo = numberTwo + "6");
}

function seven() {
  operator === ""
    ? (numberOne = numberOne + "7")
    : (numberTwo = numberTwo + "7");
}

function eight() {
  operator === ""
    ? (numberOne = numberOne + "8")
    : (numberTwo = numberTwo + "8");
}

function nine() {
  operator === ""
    ? (numberOne = numberOne + "9")
    : (numberTwo = numberTwo + "9");
}

// OPERATIONS
function divide() {
  operator = "/";
}

function multiply() {
  operator = "*";
}

function minus() {
  operator = "-";
}

function plus() {
  operator = "+";
}

function displayCalc() {
  display = numberOne + operator + numberTwo;
  displayEquation.innerText = display;
}

function equals() {
  // Convert strings to numbers
  numberOne = +numberOne;
  numberTwo = +numberTwo;

  // Calculations based on operator
  operator === "/"
    ? (total = numberOne / numberTwo)
    : operator === "*"
    ? (total = numberOne * numberTwo)
    : operator === "-"
    ? (total = numberOne - numberTwo)
    : operator === "+"
    ? (total = numberOne + numberTwo)
    : "Please enter an operator.";

  displayTotal.innerText = total;
}

// CLEAR DISPLAY
function clear() {
  numberOne = "";
  numberTwo = "";
  operator = "";
  display = "";
  total = 0;
  displayEquation.innerText = "0";
  displayTotal.innerText = "0";
}
