const display = document.querySelector('.display');
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const back = document.querySelector('#backspace');
const clear = document.querySelector('#clear');
const percent = document.querySelector('#percent');
const decimal = document.querySelector('#decimal');

let op = '';
let num1 = 0;
let num2 = 0;

let value = '';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate(op, num1, num2) {
  switch (op) {
    case '+':
      console.log(add(num1, num2));
      break;
    case '-':
      console.log(substract(num1, num2));
      break;
    case '*':
      console.log(multiply(num1, num2));
      break;
    case '/':
      console.log(divide(num1, num2));
      break;
  }
}

function displayValue() {
  display.innerHTML = value;
}

function addToValue(num) {
  if (value.length != 10) {
    value = value + num;
  }
}

operand.forEach((op) =>
  op.addEventListener('click', (e) => {
    addToValue(e.target.value);
    displayValue();
  })
);
