// 声明
import { IConfig } from '../interface/mainConfig';

// 工具函数
const path = require('path');

// webpack
const _HtmlWebpackPlugin = require('html-webpack-plugin');

export default function parseCommon(config: IConfig) {
    const commonConfig = {
        entry: {
            index: path.resolve(config.dirname, config.entryScript),
        },
        resolve: {
            extensions: [ '.webpack.js', '.ts', '.tsx', '.js' ],
            alias: {
              'react': 'react/cjs/react.production.min.js',
              'react-dom': 'react-dom/cjs/react-dom.production.min.js',
              'redux': 'redux/dist/redux.min.js',
              'react-redux': 'react-redux/dist/react-redux.min.js',
            },
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
              template: path.resolve(config.dirname, config.entryHtml),
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
