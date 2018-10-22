const net = require('net');
const merge = require('webpack-merge');

/**
 * 查看端口是否被占用
 * @param port 端口
 */
function portIsOccupied(port: number) {
    const server = net.createServer().listen(port);
    return new Promise((resolve) => {
        server.on('listening', function() { // 执行这块代码说明端口未被占用
            server.close(); // 关闭服务
            resolve(true);
        });

        server.on('error', function(err: any) {
            if (err.code === 'EADDRINUSE') { // 端口已经被使用
                resolve(false);
            }
        });
    });
}

export {
    portIsOccupied,
    merge,
};
