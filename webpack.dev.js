const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.ts"
    },
    module: {
        rules: [
            {
                // test the file, if passes->run 'use' loader
                test: /\.ts$/,
                use: "ts-loader",
                //    These are the folders to check for a rule pass
                include: [path.resolve(__dirname, "src")]
            }
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./template.html"
        })
    ],
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        clientLogLevel: 'info',
        port: 8080
    },
}