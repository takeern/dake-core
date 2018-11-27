"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require('net');
const merge = require('webpack-merge');
exports.merge = merge;
function portIsOccupied(port) {
    const server = net.createServer().listen(port);
    return new Promise((resolve) => {
        server.on('listening', function () {
            server.close();
            resolve(true);
        });
        server.on('error', function (err) {
            if (err.code === 'EADDRINUSE') {
                resolve(false);
            }
        });
    });
}
exports.portIsOccupied = portIsOccupied;