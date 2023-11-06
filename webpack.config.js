const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'], // note that the array executes in a reverse order before sytle can run the css must be loaded
            }
        ]
    },
}