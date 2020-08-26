const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        clientLogLevel: 'info',
        port: 8080
    },
    plugins: [
        // This is just going to ensure we create an html file from the
        // necessary
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./html.template"
        })
    ],
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
}