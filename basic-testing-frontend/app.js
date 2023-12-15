import { calculateResults } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';
import { extractEnteredNumbers } from './src/parser.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numbers = extractEnteredNumbers(form);
  const result = calculateResults(numbers);
  const resultText =  generateResultText(result);
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
