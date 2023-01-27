const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // {
            //     test: /\.(PNG|JPG|GIF|SVG)$/,
            //     loader:['url-loader', 'file-loader'],
            //     options: {
            //       limit: 12 * 1024
            //     }
            // }
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {},
                  },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
};