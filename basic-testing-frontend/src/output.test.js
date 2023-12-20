import { generateResultText, outputResult } from "./output.js";

describe("generateResultText", () => {
  it("should return a string regardless of the argument", () => {
    const val1 = "invalid";
    const val2 = 2;
    const val3 = true;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(typeof result1).toBe("string");
    expect(typeof result2).toBe("string");
    expect(typeof result3).toBe("string");
  });

  it("should return a string which contains the argument value when it is numeric", () => {
    const input = 22;

    const result = generateResultText(input);

    expect(result).toMatch(new RegExp(input));
  });

  it ("should return an empty string when 'no-calc' is provided as an argument", () => {
    const input = 'no-calc';

    const result = generateResultText(input);

    expect(result).toBe('');
  });

  it ("should a string containing 'Please enter two numbers.' if 'invalid' is provided as an argument", () => {
    const input = 'invalid';

    const result = generateResultText(input);

    expect(result).toBe('Please enter two numbers.');
  });
});

describe("outputResult", () => {
  it("should throw an error if the input is not a number", () => {});
});
