const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],

        alias: {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",     // Must be below test-utils
            "react/jsx-runtime": "preact/jsx-runtime"
        },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            h: ['preact', 'h'],
        })],
};