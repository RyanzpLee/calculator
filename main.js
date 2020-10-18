const operators = ['+', '-', '*', '/'];
let op = '';
let num1 = 0;
let num2 = 0;

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
