import writeData from "./io";
import { promises as fs } from "fs";

jest.mock("fs", () => ({
  promises: {
    writeFile: jest.fn(),
  },
}));

jest.mock("path", () => ({
  join: (...args) => {
    return args[args.length - 1];
  },
}));

it("should execute the writeFile method", async () => {
  const testData = "test data";
  const testFileName = "test.txt";

  const result = await writeData(testData, testFileName);
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
