const path = require('path')

module.exports = {
    mode: "development",
    entry: './client/src/app.ts',
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist/public'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'client/public/dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /(\.ts$)|(\.js$)/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {}
        }]
    }
}