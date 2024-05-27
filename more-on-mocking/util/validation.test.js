import { validateNotEmpty } from './validation';
import { ValidationError } from './errors';

describe('validateNotEmpty', () => {
  it('should throw ValidationError for empty string', () => {
    const testInput = '';

    const validationFunction = () => validateNotEmpty(testInput);
    expect(validationFunction).toThrow(ValidationError);
  });

  it('should throw ValidationError for string with only whitespace', () => {
    const testInput = '   ';

    const validationFunction = () => validateNotEmpty(testInput);
    expect(validationFunction).toThrow(ValidationError);
  });

  it('should throw an error with the provided message', () => {
    const testInput = '   ';
    const testErrorMessage = 'Custom error message';

    const validationFunction = () => validateNotEmpty(testInput, testErrorMessage);
    expect(validationFunction).toThrow(testErrorMessage);
  });
});