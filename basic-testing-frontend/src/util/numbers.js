import { validateStringNotEmpty, validateNumber } from './validation.js';

export function transformToNumber(value) {
  return +value;
}

// 'Cleans' the input array to ensure they are numbers
export function cleanNumbers(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}

