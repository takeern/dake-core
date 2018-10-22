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

parseConfig(config);
// need pathname
