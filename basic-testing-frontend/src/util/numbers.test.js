import { transformToNumber, cleanNumbers } from "./numbers.js";

describe("transformToNumber", () => {
  it("should transform a string number to a number of type number", () => {
    // Arrange
    const input = "2";
    const output = 2;
    // Act
    const result = transformToNumber(input);
    // Assert
    expect(typeof result).toBe("number");
    expect(result).toBe(output);
  });

  it("should return NaN for an invalid value", () => {
    const invalid = "not a number";

    const result = transformToNumber(invalid);

    expect(result).toBeNaN();
  });

  it("should return NaN for an invalid value", () => {
    const invalid = "not a number";
    const invalid2 = {};

    const result = transformToNumber(invalid);
    const result2 = transformToNumber(invalid2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2", "3"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(typeof cleanedNumbers[0]).toBe("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ['', 1, 2];

    const cleanFunction = () => cleanNumbers(numberValues);

    expect(cleanFunction).toThrow(/Invalid input - must not be empty/);
  });

  it("should return an empty array if an empty array is provided", () => {
    const numberValues = [];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers.length).toBe(0);
  });
});
