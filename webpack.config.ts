const path = require('path');

module.exports = {
    entry: './app.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
             "node_modules",
             path.resolve(__dirname, "app")
        ],
    },
    module: {
         rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
         ]
    },
    devtool: 'inline-source-map',
    node: {
        fs: 'empty',
        net: 'empty'
    }
};