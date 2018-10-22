"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseConfig(config) {
    config.entryScript += config.isTs ? '.js' : '.ts';
    let { port } = config;
}
exports.default = parseConfig;
//# sourceMappingURL=main.js.map