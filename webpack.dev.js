const path = require("path")
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', // 3.  inputs the commonJs into the DOM under a style tag. 
                    'css-loader',  // 2. changes css file to a CommonJs 
                    'sass-loader'  // 1. changes sass to a css 
                ], // note that the array executes in a reverse order before sytle can run the css must be loaded
            },
        ]
    }


})