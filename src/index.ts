import parseConfig from './component/main';

const config = {
    entryScript: '../../src/index',
    entryHtml: '../../src/index.html',
    output: '../dist',
    port: 8888,
    host: 'localhost',
    isTs: false,
    outPutName: 'index.js',
};

// console.log(parseConfig());

export default parseConfig;
// need pathname

// 如何从异步跳回到同步
