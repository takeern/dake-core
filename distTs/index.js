"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./component/main");
const config = {
    entryScript: '../../src/index',
    entryHtml: '../../src/index.html',
    output: '../dist',
    port: 8888,
    host: 'localhost',
    isTs: false,
    outPutName: 'index.js',
};
exports.default = main_1.default;
