let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function performOperation(operation) {
    currentInput += ` ${operation} `;
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
