/**
 * @jest-environment jsdom
 */

import fs from "fs";
import path from "path";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath, "utf-8").toString();

beforeEach(() => {
  document.body.innerHTML = htmlDocumentContent;
});

describe("showError", () => {
  it('should add error text to the id="errors" element', () => {
    showError("Test");

    const errorsElement = document.getElementById("errors");
    const errorMessageElement = errorsElement.querySelector("p");

    expect(errorMessageElement.textContent).not.toBeNull();
  });

  it("should not contain an error initially", () => {
    const errorsElement = document.getElementById("errors");
    const errorMessageElement = errorsElement.querySelector("p");

    expect(errorMessageElement).toBeNull();
  });

  it("should output the provided message in the error paragraph", () => {
    const testErrorMessage = "Test Error Message";

    showError(testErrorMessage);

    const errorsElement = document.getElementById("errors");
    const errorMessageElement = errorsElement.querySelector("p");

    expect(errorMessageElement.textContent).toBe(testErrorMessage);
  });
});
