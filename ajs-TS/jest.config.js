module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
    moduleFileExtensions: ['ts', 'js'],
    roots: ['<rootDir>/src']
};