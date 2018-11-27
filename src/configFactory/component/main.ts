// 声明
import { IConfig } from '../interface/mainConfig';

// 工具函数
import { merge } from '../ulit/index';

// component
import parseCommon from './parseCommon';
import parseDev from './parseDev';
import parseProd from './parseProd';

const portfinder = require('portfinder');

const initConfig: Object = {
    entryScript: '../../src/index',
    entryHtml: '../../src/index.html',
    output: '../dist',
    port: 8080,
    host: 'localhost',
    isTs: false,
    outPutName: 'index.js',
};

async function parseConfig(config: IConfig) {
    const mergeConfig = {...initConfig, ...config};
    config.entryScript += config.isTs ? '.js' : '.ts';
    portfinder.basePort = mergeConfig.port;
    mergeConfig.port = await portfinder.getPortPromise();

    const commonConfig = parseCommon(mergeConfig);
    const devConfig = merge(parseDev(mergeConfig), commonConfig);
    const prodConfig = merge(parseProd(mergeConfig), commonConfig);
    const servConfig = merge(prodConfig, {
        target: 'node'
    })
    return { devConfig, prodConfig, servConfig };
}

export default parseConfig;
