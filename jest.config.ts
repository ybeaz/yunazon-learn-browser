export default {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '#node-web-compat': './node-web-compat-node.js',
  },
  testMatch: ['<rootDir>/**/(*.)test.(js|jsx|ts|tsx)'],
  testEnvironmentOptions: { url: 'http://127.0.0.1/' },
}
