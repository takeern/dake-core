"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseJson(jsonConfig) {
    let json = {
        css: [],
        js: [],
    };
    jsonConfig.filename.map(item => {
        if (!jsonConfig.isAbsolutePath) {
            item = jsonConfig.publicPath + item;
        }
        if (item.match(/\.(js)$/)) {
            json.js.unshift(item);
        }
        if (item.match(/\.(css)$/)) {
            json.css.unshift(item);
        }
    });
    return json;
}
exports.default = parseJson;
