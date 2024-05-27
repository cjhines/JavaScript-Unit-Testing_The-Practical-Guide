import { validateNotEmpty } from './validation';
import { ValidationError } from './errors';

describe('validateNotEmpty', () => {
  it('should throw ValidationError for empty string', () => {
    expect(() => validateNotEmpty('', 'Empty input')).toThrow(ValidationError);
  });

  it('should throw ValidationError for string with only whitespace', () => {
    expect(() => validateNotEmpty('   ', 'Whitespace only')).toThrow(ValidationError);
  });

  it('should not throw ValidationError for non-empty string', () => {
    expect(() => validateNotEmpty('Hello', 'Should not throw')).not.toThrow();
  });
});