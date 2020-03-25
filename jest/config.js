module.exports = {
  rootDir: '../',
  testMatch: ['<rootDir>/**/*.test.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    './node_modules',
    '<rootDir>/../../node_modules',
    '<rootDir>/jest'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest/setupForEach.js'],
  transformIgnorePatterns: ['node_modules'],
  verbose: true,
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/jest/'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95
    }
  }
};
