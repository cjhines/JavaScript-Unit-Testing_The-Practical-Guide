import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided statusCode, messages, and data", () => {
    const testStatus = 404;
    const testMessage = "Not Found";
    const testData = { detail: "Detail info" };

    const testError = new HttpError(testStatus, testMessage, testData);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toEqual(testData);
  });

  it("should contained undefined data if not provided", () => {
    const testStatus = 404;
    const testMessage = "Not Found";

    const testError = new HttpError(testStatus, testMessage);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe("ValidationError", () => {
  it("should contain the provided message", () => {
    const testMessage = "Validation failed";

    const testError = new ValidationError(testMessage);
    expect(testError.message).toBe(testMessage);
  });
});
