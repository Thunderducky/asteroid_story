const path = require('path')

module.exports = {
    mode: "development",
    entry: './client/src/app.js',
    devtool: "inline-srouce-map",
    devServer: {
        contentBase: './dist/public'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'client/public/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {}
        }]
    }
}