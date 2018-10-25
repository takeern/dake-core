"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack = require('webpack');
function parseDev(config) {
    const devConfig = {
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(c|le)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader',
                    ],
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
            disableHostCheck: true,
            host: 'localhost',
            port: config.port,
            hot: true,
            inline: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
    };
    return devConfig;
}
exports.default = parseDev;
