module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/*.(spec|test).(ts|svelte)'],
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: ['node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{js,ts,svelte}',
    '!src/index.ts',
    '!src/setupTests.ts',
    '!src/react-app-env.d.ts',
    '!**/*.stories.tsx',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: 'reports',
  coverageReporters: ['lcov', 'text', 'cobertura'],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'reports', outputName: 'TEST-RESULTS.xml' }
    ]
  ]
}
