let firstNumber = '';
let operator = '';
let secondNumber = '';

function setOperator(op) {
    operator = op;
    updateDisplay();
}

function appendNumber(num) {
    if (operator === '') {
        firstNumber += num;
    } else {
        secondNumber += num;
    }
    updateDisplay();
}

function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay();
}

function calculate() {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const result = operate(operator, num1, num2);
        firstNumber = result.toString();
        operator = '';
        secondNumber = '';
        updateDisplay();
    }
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                alert('Cannot divide by zero');
                clearDisplay();
            }
            break;
        default:
            return 'Error';
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = operator !== '' ? `${firstNumber} ${operator} ${secondNumber}` : firstNumber || '0';
}
