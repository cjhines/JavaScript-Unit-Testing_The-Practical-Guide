export function generateResultText(calculationResult) {
    let resultText = '';

    if (calculationResult === 'invalid') {
        resultText = 'Please enter two numbers.';
    } else if (calculationResult !== 'no-calc') {
        resultText = 'Result: ' + calculationResult;
    }

    return resultText;
}

export function outputResult(resultText) {
    const outputElement = document.getElementById('result');
    outputElement.textContent = resultText;
}