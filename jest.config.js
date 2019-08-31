module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  cacheDirectory: ".jest/cache",
};

// module.exports = {
//   jest: {
//     preset: "react-native",
//     testEnvironment: "node",
//     transform: {
//       "^.+\\.js$": "./node_modules/react-native/jest/preprocessor.js",
//       "\\.(ts|tsx)$": "ts-jest",
//     },
//     globals: {
//       "ts-jest": {
//         tsConfig: "tsconfig.json",
//       },
//     },
//     moduleFileExtensions: ["ts", "tsx", "js"],
//     testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
//   },
// };
