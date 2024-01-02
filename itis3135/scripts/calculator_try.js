window.onload = function() {
    for (let i = 0; i <= 9; i++) {
        document.getElementById(`btn${i}`).addEventListener('click', function() { appendNumber(i.toString()); });
    }

    document.getElementById('btnAdd').addEventListener('click', function() { performOperation('+'); });
    document.getElementById('btnSubtract').addEventListener('click', function() { performOperation('-'); });
    document.getElementById('btnMultiply').addEventListener('click', function() { performOperation('*'); });
    document.getElementById('btnDivide').addEventListener('click', function() { performOperation('/'); });
    document.getElementById('btnEqual').addEventListener('click', calculate);
    document.getElementById('btnClear').addEventListener('click', clearDisplay);
};

let currentInput = "";
let operation = null;
let previousInput = "";

function appendNumber(number) {
    if (operation) {
        if (previousInput === "") {
            previousInput = currentInput;
            currentInput = "";
        }
    }
    currentInput += number;
    updateDisplay();
}

function performOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Division by zero is undefined.");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
