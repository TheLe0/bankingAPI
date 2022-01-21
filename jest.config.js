/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [
    'dotenv/config'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts','!src/*/filesToExclude.ts'],
  coveragePathIgnorePatterns : [
    'src/app.ts',
    'src/controller/*.ts',
    'src/server/*.ts' 
  ]
};