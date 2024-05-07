import writeData from "./io";
import { promises as fs } from "fs";

jest.mock("path", () => ({
  join: (...args) => {
    return args[args.length - 1];
  },
}));

jest.mock("fs");

it("should execute the writeFile method", async () => {
  const testData = "test data";
  const testFileName = "test.txt";

  const result = await writeData(testData, testFileName);
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
