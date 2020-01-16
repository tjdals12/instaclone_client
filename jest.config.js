module.exports = {
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    testMatch: [
        '<rootDir>/src/**/__tests__/*.{ts,tsx}',
        '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}',
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss|less)$': 'babel-jest',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
