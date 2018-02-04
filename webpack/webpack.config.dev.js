const path = require('path');

module.exports = {

    devtool: 'inline-sourcemap',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            Components: path.resolve(__dirname, '../src/components/'),
            Constants: path.resolve(__dirname, '../src/constants/')
        }
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: "/node_modules",
                loader: "babel-loader",
                options: {
                    presets: ["env", "react", "stage-0"],
                    code: true,
                    comments: true,
                    cacheDirectory: true,
                    babelrc: false
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        host: "0.0.0.0",
        historyApiFallback: true,
        port: 9000,
        noInfo: true
    }
}
