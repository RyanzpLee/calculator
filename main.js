const display = document.querySelector('.display');
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const back = document.querySelector('#backspace');
const clear = document.querySelector('#clear');
const percent = document.querySelector('#percent');
const decimal = document.querySelector('#decimal');

let op = '';
let num1 = '';
let num2 = '';
let result = '';
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
      value = add(num1, num2);
      num1 = value;
      num2 = '';
      break;
    case '-':
      value = subtract(num1, num2);
      num1 = value;
      num2 = '';
      break;
    case '*':
      value = multiply(num1, num2);
      num1 = value;
      num2 = '';
      break;
    case '/':
      value = divide(num1, num2);
      num1 = value;
      num2 = '';
      break;
  }
}

function displayValue() {
  display.innerHTML = value;
  if (display.length > 9) {
    display.innerHTML = value.substring(0, 9);
  }
}

function addToValue(num) {
  if (value.length != 10) {
    value = value + num;
  }
}

function removeFromValue() {
  if (display.innerHTML.length > 1) {
    value = value.slice(0, -1);
  }
}

function clearValues() {
  op = '';
  num1 = '';
  num2 = '';
  value = '';
  display.innerHTML = '0';
}

function addDecimal(dot) {
  if (!value.includes(dot)) {
    value += dot;
  } else if (value === '') {
    value = '0';
    value += dot;
  }
}

operand.forEach((op) =>
  op.addEventListener('click', (e) => {
    addToValue(e.target.value);
    displayValue();
  })
);

operator.forEach((operator) =>
  operator.addEventListener('click', (e) => {
    if (op === '' && num2 === '') {
      op = e.target.value;
      num1 = value;
      value = '';
    } else if (op != '' && num1 != '' && value != '') {
      num2 = value;
      operate(op, Number(num1), Number(num2));

      op = e.target.value;
      num2 = '';
      displayValue();
    }
    op = e.target.value;
  })
);

equals.addEventListener('click', () => {
  if (num1 != '' && op != '' && num2 === '') {
    num2 = value;
    operate(op, Number(num1), Number(num2));
    displayValue();
  }
});

decimal.addEventListener('click', (e) => {
  addDecimal(e.target.value);
  displayValue();
});

clear.addEventListener('click', () => {
  clearValues();
});

back.addEventListener('click', () => {
  if (display.innerHTML.length > 1) {
    removeFromValue();
    displayValue();
  }
});

window.addEventListener('keydown', (e) => {
  const btn = document.querySelector(`button[data-key='${e.keyCode}']`);
  btn.click();
});
