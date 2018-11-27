"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../ulit/index");
const parseCommon_1 = require("./parseCommon");
const parseDev_1 = require("./parseDev");
const parseProd_1 = require("./parseProd");
const portfinder = require('portfinder');
const initConfig = {
    entryScript: '../../src/index',
    entryHtml: '../../src/index.html',
    output: '../dist',
    port: 8080,
    host: 'localhost',
    isTs: false,
    outPutName: 'index.js',
};
function parseConfig(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const mergeConfig = Object.assign({}, initConfig, config);
        config.entryScript += config.isTs ? '.js' : '.ts';
        portfinder.basePort = mergeConfig.port;
        mergeConfig.port = yield portfinder.getPortPromise();
        const commonConfig = parseCommon_1.default(mergeConfig);
        const devConfig = index_1.merge(parseDev_1.default(mergeConfig), commonConfig);
        const prodConfig = index_1.merge(parseProd_1.default(mergeConfig), commonConfig);
        const servConfig = index_1.merge(prodConfig, {
            target: 'node'
        });
        return { devConfig, prodConfig, servConfig };
    });
}
exports.default = parseConfig;
