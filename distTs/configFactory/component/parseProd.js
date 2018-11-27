"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const _UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _SsrClientList = require('../plugins/ssrClient.js');
const _OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
function parseProd(config) {
    const prodConfig = {
        mode: 'production',
        stats: 'minimal',
        target: 'web',
        output: {
            filename: '[name].js',
            publicPath: '/dist',
            path: path.resolve(config.dirname, '../dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(c|le)ss$/,
                    use: [
                        _MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader',
                    ],
                },
            ],
        },
        plugins: [
            new _UglifyJSPlugin({
                sourceMap: true,
            }),
            new _MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
                hot: false,
                orderWarning: true,
            }),
            new _OptimizeCSSAssetsPlugin({}),
            new _SsrClientList(),
        ],
        optimization: {
            minimize: false,
            splitChunks: {
                chunks: 'all',
            },
        },
    };
    return prodConfig;
}
exports.default = parseProd;
