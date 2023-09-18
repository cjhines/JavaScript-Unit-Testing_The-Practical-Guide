module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/$1",
  },
};