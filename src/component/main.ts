// 声明
import { IConfig } from '../interface/mainConfig';

// 工具函数
import { portIsOccupied, merge } from '../ulit/index';

//component
import parseCommon from './parseCommon';
import parseDev from './parseDev';
import parseProd from './parseProd';

async function parseConfig (config: IConfig) {
    config.entryScript += config.isTs ? '.js' : '.ts';
    let { port } = config;
    
    while(await portIsOccupied(port)) {
        port ++;
    }
    
    const commonConfig = parseCommon(config);
    const devConfig = merge(parseDev(config), commonConfig);
    const prodConfig = merge(parseProd(config), commonConfig);

    console.log(devConfig);
    console.log(prodConfig);
    return { devConfig, prodConfig };
}

export default parseConfig;