const path = require("path")

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset/resource',
                // generator: {
                //     filename: 'assets/[hash][ext][query]'
                // }
            }
        ]
    },
}