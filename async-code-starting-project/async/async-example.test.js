import { generateToken } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmailAddress = "test@test.com";

  const token = generateToken(testUserEmailAddress, (error, token) => {
    expect(token).toBeDefined();
    expect(token).not.toBeNull();
    done();
  });
});
