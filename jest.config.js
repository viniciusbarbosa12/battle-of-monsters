const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  setupFilesAfterEnv: ["<rootDir>/src/test.ts"],
  collectCoverage: false,
  coverageDirectory: 'test_output',
  coverageReporters: ["json", "html", "text-summary"],
  coverageDirectory: "coverage/assessment-cc-angular-sr-01",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: "<rootDir>/",
  }),
};
