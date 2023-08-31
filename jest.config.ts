module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  testRunner: 'jest-jasmine2',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['gatsby-plugin-testing'],
};
