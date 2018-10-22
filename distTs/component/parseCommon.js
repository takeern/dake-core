"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
function parseCommon(config) {
    const commonConfig = {
        entry: {
            index: path.resolve(__dirname, config.entryScript),
        },
        resolve: {
            extensions: ['.webpack.js', '.ts', '.tsx', '.js'],
        },
        plugins: [
            new _HtmlWebpackPlugin({
                title: 'development',
                inject: 'body',
                compile: true,
                favicon: false,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    minifyJS: true,
                },
                cache: true,
                showErrors: true,
                chunks: 'all',
                excludeChunks: [],
                chunksSortMode: 'auto',
                template: path.resolve(__dirname, config.entryHtml),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(ts)$/,
                    exclude: /node_modules/,
                    loader: [
                        'ts-loader',
                        'tslint-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        }
                    ],
                }
            ],
        },
    };
    return commonConfig;
}
exports.default = parseCommon;
//# sourceMappingURL=parseCommon.js.map