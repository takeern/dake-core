"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../ulit/index");
const parseCommon_1 = require("./parseCommon");
const parseDev_1 = require("./parseDev");
const parseProd_1 = require("./parseProd");
const initConfig = {
    entryScript: '../../src/index',
    entryHtml: '../../src/index.html',
    output: '../dist',
    port: 8888,
    host: 'localhost',
    isTs: false,
    outPutName: 'index.js',
};
function parseConfig(config) {
    const mergeConfig = Object.assign({}, initConfig, config);
    config.entryScript += config.isTs ? '.js' : '.ts';
    const commonConfig = parseCommon_1.default(mergeConfig);
    const devConfig = index_1.merge(parseDev_1.default(mergeConfig), commonConfig);
    const prodConfig = index_1.merge(parseProd_1.default(mergeConfig), commonConfig);
    const servConfig = index_1.merge(prodConfig, {
        target: 'node'
    });
    return { devConfig, prodConfig, servConfig };
}
exports.default = parseConfig;
