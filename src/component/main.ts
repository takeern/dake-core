// 声明
import { IConfig } from '../interface/mainConfig';

// 工具函数
import { merge } from '../ulit/index';

// component
import parseCommon from './parseCommon';
import parseDev from './parseDev';
import parseProd from './parseProd';

const initConfig: Object = {
    entryScript: '../../src/index',
    entryHtml: '../../src/index.html',
    output: '../dist',
    port: 8888,
    host: 'localhost',
    isTs: false,
    outPutName: 'index.js',
};

function parseConfig(config: IConfig) {
    const mergeConfig = {...initConfig, ...config};
    config.entryScript += config.isTs ? '.js' : '.ts';

    const commonConfig = parseCommon(mergeConfig);
    const devConfig = merge(parseDev(mergeConfig), commonConfig);
    const prodConfig = merge(parseProd(mergeConfig), commonConfig);

    return { devConfig, prodConfig };
}

export default parseConfig;
