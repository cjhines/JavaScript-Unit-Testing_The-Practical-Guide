import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };
const testFetch = jest.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      reject("Body is not a string");
    }
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
  it("should return any available response data", async () => {
    const testData = { testData: "testData" };
    await expect(sendDataRequest(testData)).resolves.toBe(testResponseData);
  });

  it("should convert the provided data to JSON before sending the request", async () => {
    const testData = { testData: "testData" };
    let errorMessage;

    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
      expect(error).toBeUndefined();
    }

    expect(errorMessage).not.toBe("string");
  });

  it("should throw an http error if the response is not ok", async () => {
    testFetch.mockImplementationOnce(() => {
      return new Promise((resolve) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve) => {
              resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });
    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError )
  });
});
