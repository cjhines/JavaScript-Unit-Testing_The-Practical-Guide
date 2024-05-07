export const promises = {
  writeFile: jest.fn(() => {
    return new Promise((resolve) => {
      resolve();
    });
  }),
};
