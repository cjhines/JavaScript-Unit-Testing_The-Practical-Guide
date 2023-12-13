import { validateStringNotEmpty, validateNumber } from "./validation.js";

describe("validateNumber", () => {
  it("should throw an error if the input is not a number", () => {
    const input = "not a number";
    const input2 = true;
    const input3 = null;
    const input4 = undefined;
    const input5 = {};
    const input6 = NaN;

    const resultFn1 = () => {
      validateNumber(input);
    };
    const resultFn2 = () => {
      validateNumber(input2);
    };
    const resultFn3 = () => {
      validateNumber(input3);
    };
    const resultFn4 = () => {
      validateNumber(input4);
    };
    const resultFn5 = () => {
      validateNumber(input5);
    };
    const resultFn6 = () => {
      validateNumber(input6);
    };

    const errorRegex = /Invalid number input./;
    expect(resultFn1).toThrow(errorRegex);
    expect(resultFn2).toThrow(errorRegex);
    expect(resultFn3).toThrow(errorRegex);
    expect(resultFn4).toThrow(errorRegex);
    expect(resultFn5).toThrow(errorRegex);
    expect(resultFn6).toThrow(errorRegex);
  });

  it("should not throw an error if the input is a number", () => {
    const input = 1;

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).not.toThrow();
  });
});

describe("validateStringNotEmpty", () => {
  it("should throw an error if the input is an empty string", () => {
    const input = "";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should throw an error if the input is a string with only spaces", () => {
    const input = "    ";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should not throw an error if the input is a string with non-space characters", () => {
    const input = "a";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).not.toThrow();
  });

  it("should not throw an error if the input is not a string", () => {
    const input = 1;
    const input2 = true;
    const input3 = null;
    const input4 = undefined;
    const input5 = {};
    const input6 = NaN;

    const resultFn1 = () => {
      validateStringNotEmpty(input);
    };
    const resultFn2 = () => {
      validateStringNotEmpty(input2);
    };
    const resultFn3 = () => {
      validateStringNotEmpty(input3);
    };
    const resultFn4 = () => {
      validateStringNotEmpty(input4);
    };
    const resultFn5 = () => {
      validateStringNotEmpty(input5);
    };
    const resultFn6 = () => {
      validateStringNotEmpty(input6);
    };

    expect(resultFn1).toThrow();
    expect(resultFn2).toThrow();
    expect(resultFn3).toThrow();
    expect(resultFn4).toThrow();
    expect(resultFn5).toThrow();
    expect(resultFn6).toThrow();
  });
});
