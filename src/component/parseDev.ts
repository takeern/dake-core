// interface
import { IConfig } from '../interface/mainConfig';

// webpack
const webpack = require('webpack');

export default function parseDev(config: IConfig) {
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
            // contentBase: path.join(__dirname, '../dist'),
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
