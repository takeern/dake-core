"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ssrRender_1 = require("./control/ssrRender");
const json = {
    'publicPath': '/dist',
    'filename': [
        'index.css',
        'index.js',
        'vendors~index.js'
    ]
};
exports.default = ssrRender_1.default;