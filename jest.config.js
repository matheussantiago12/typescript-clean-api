module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'app'],
    moduleNameMapper: {
        '@app/(.*)': '<rootDir>/app/$1'
    }
}
