import { add } from "./math.js";

it("should summarize all number values in an array", () => {
  const result = add([1, 2, 8, 12]);
  expect(result).toBe(23);
});
