// 声明
import { IConfig } from '../interface/mainConfig';

// 工具函数
const path = require('path');

// webpack
const _UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _SsrClientList = require('../plugins/ssrClient.js');
const _OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

export default function parseProd(config: IConfig) {
    const prodConfig = {
        mode: 'production',
        stats: 'minimal',
        target: 'web',
        output: {
            filename: '[name].js',
            publicPath: '/dist',
            // chunkFilename: '[name].js',
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
              // parallel: true,
              sourceMap: true,
            }),
            new _MiniCssExtractPlugin(
              {
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
                hot: false, // optional as the plugin cannot automatically detect if you are using HOT, not for production use
                orderWarning: true, // Disable to remove warnings about conflicting order between imports
              }
            ),
            new _OptimizeCSSAssetsPlugin({}),
            new _SsrClientList (),
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
