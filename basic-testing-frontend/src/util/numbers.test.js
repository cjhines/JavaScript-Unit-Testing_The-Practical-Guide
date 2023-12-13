import { transformToNumber } from "./numbers.js";

it("should transform a string number to a number of type number", () => {
  // Arrange
  const input = '2';
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
