const display = document.querySelector('.display');
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const back = document.querySelector('#backspace');
const clear = document.querySelector('#clear');
const percent = document.querySelector('#percent');
const decimal = document.querySelector('#decimal');

let op1 = '';
let op2 = '';
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

function operate(op1, num1, num2) {
  switch (op1) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
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
  if (value.length < 10) {
    value = value + num;
  }
}

function removeFromValue() {
  if (display.innerHTML.length > 1) {
    value = value.slice(0, -1);
    displayValue(value);
  } else {
    value = '';
    display.innerHTML = '0';
  }
}

function clearValues() {
  op1 = '';
  op2 = '';
  num1 = '';
  num2 = '';
  result = '';
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

// Number input
operand.forEach((op1) =>
  op1.addEventListener('click', (e) => {
    if (op1 === '') {
      if (value === '' || value === '0') {
        // addToValue(e.target.value);
        value = e.target.value;
      } else if (value === num1) {
        value = e.target.value;
      } else {
        addToValue(e.target.value);
      }
    } else {
      if (value === num1) {
        value = e.target.value;
      } else {
        addToValue(e.target.value);
      }
      displayValue();
    }
  })
);

// Operator input
operator.forEach((operator) =>
  operator.addEventListener('click', (e) => {
    // if we have 1st operator
    if (op1 != '' && op2 === '') {
      op2 = e.target.value;
      num2 = value;
      result = operate(op1, Number(num1), Number(num2));
      value = result;
      displayValue();
      num1 = value;
      result = '';
    } else if ((op1 != '') & (op2 != '')) {
      num2 = value;
      result = operate(op2, Number(num1), Number(num2));
      value = result;
      displayValue();
      op2 = e.target.value;
      value = result;
      num1 = value;
      result = '';
      // No operator
    } else {
      op1 = e.target.value;
      num1 = value;
    }
  })
);

equals.addEventListener('click', () => {
  if ((op1 === '')) {
    value = value;
  } else if (op2 != '') {
    num2 = value;
    result = operate(op2, Number(num1), Number(num2));
    value = result;
    displayValue();
    num1 = value;
    num2 = '';
    op1 = '';
    op2 = '';
    result = '';
  } else {
    num2 = value;
    result = operate(op1, Number(num1), Number(num2));
    value = result;
    displayValue();
    num1 = value;
    num2 = '';
    op1 = '';
    op2 = '';
    result = '';
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
  if (display.innerHTML.length > 0) {
    removeFromValue();
  }
});

window.addEventListener('keydown', (e) => {
  const btn = document.querySelector(`button[data-key='${e.keyCode}']`);
  btn.click();
});
