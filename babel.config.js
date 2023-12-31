module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                    alias: {
                        '@assets': './src/assets',
                        '@components': './src/components',
                        '@routes': './src/routes',
                        '@screens': './src/screens',
                        '@themes': './src/themes',
                        '@utils': './src/utils',
                    }
                }
            ]
        ]
    };
};
