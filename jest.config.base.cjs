module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsConfig: "tsconfig.test.json",
      },
    ],
  },
  testRegex: "(/test/.*.(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["(test/.*.mock).(jsx?|tsx?)$"],
  verbose: true,
  projects: ["<rootDir>"],
  coverageDirectory: "<rootDir>/coverage/",
  preset: "ts-jest",
  moduleNameMapper: {
    "@starter/([^/]+)": "<rootDir>../../packages/$1/src",
  },
};
