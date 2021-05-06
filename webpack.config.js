const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/app.ts',
    module: {
        rules: [{
            test: /\.ts$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'ts-loader',
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        publicPath: 'public',
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
    },
};