const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss/i,
                use: [
                    'style-loader', // 3.  inputs the commonJs into the DOM under a style tag. 
                    'css-loader',  // 2. changes css file to a CommonJs 
                    'sass-loader'  // 1. changes sass to a css 
                ], // note that the array executes in a reverse order before sytle can run the css must be loaded
            }
        ]
    },
}