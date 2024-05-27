import { sendDataRequest } from "./http";

const testResponseData = { testKey: 'testData'};
const testFetch = jest.fn((url, option) => {
  return new Promise((resolve) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

global.fetch = testFetch;

describe("sendDataRequest", () => {
  it("should return any available response data", async  () => {
    const testData = { testData: "testData" };
    await expect(sendDataRequest(testData)).resolves.toBe(testResponseData);
  });
});
