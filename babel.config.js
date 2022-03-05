module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        ['inline-dotenv'],
        [
            'module-resolver',
            {
                alias: {
                    '~': './src',
                    '@': '.',
                },
            },
        ],
    ],
}
