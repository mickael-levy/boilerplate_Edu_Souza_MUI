module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.stories.tsx'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-sumary', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
