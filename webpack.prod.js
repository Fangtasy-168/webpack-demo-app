const path = require("path")
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // instead of the CleanWebPack Plugin 
        assetModuleFilename: 'assets/[hash][ext]'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 3.  extract css into files
                    'css-loader',  // 2. changes css file to a CommonJs 
                    'sass-loader'  // 1. changes sass to a css 
                ], // note that the array executes in a reverse order before sytle can run the css must be loaded
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), new TerserPlugin()
        ],
    },

})