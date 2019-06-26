const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './client/src/app.ts',
    plugins: [
      new CleanWebpackPlugin()
    ],
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
