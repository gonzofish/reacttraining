var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    entry: './app/index.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};
