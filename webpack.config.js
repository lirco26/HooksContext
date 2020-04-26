const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: "[local]___[hash:base64:5]"
                            },

                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new LodashModuleReplacementPlugin
    ]
};

module.exports = config;
