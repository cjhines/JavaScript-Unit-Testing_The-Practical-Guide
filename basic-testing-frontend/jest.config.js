module.exports = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/$1",
  },
};
