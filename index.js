const net = require('net');

const headersToJSON = require('./tool/headersToJSON');

module.exports = function (config) {

    const port = config.port || 8080; // 端口号

    const server = net.createServer(socket => {

        socket.once('data', buffer => {

            // 把请求头变成容易操作的json
            let headers = headersToJSON(buffer.toString());
            console.log(headers);

            // 如果是ws请求
            // 就需要建立连接
            if (headers.upgrade == 'websocket') {

            }

            // 否则
            // 就普通的返回数据即可
            else {



            }

        });

    });

    // 启动
    server.listen(port);
};
