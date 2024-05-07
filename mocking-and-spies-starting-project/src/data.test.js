import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", async () => {
    const logFn = jest.fn();
    await generateReportData(logFn);
    expect(logFn).toHaveBeenCalled();
  });
});
