module.exports = {
    preset: 'react-native',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    ],
    setupFiles: [
        '<rootDir>/jest/setup.js',
        './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
}
