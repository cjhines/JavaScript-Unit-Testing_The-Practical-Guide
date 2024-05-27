import { HttpError, ValidationError } from './errors';

describe('HttpError', () => {
  it('should correctly set properties', () => {
    const error = new HttpError(404, 'Not Found', { detail: 'Detail info' });
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe('Not Found');
    expect(error.data).toEqual({ detail: 'Detail info' });
  });
});

describe('ValidationError', () => {
  it('should correctly set message property', () => {
    const error = new ValidationError('Validation failed');
    expect(error.message).toBe('Validation failed');
  });
});