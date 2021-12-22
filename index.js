const net = require('net');
const nodejs = require('@hai2007/nodejs');
const crypto = require('crypto');
const watch = require('watch');

const headersToJSON = require('./tool/headersToJSON');
const decodeWsFrame = require('./tool/decodeWsFrame');
const encodeWsFrame = require('./tool/encodeWsFrame');

module.exports = function (config) {

    const port = config.port || 8080; // 端口号
    const suffix = config.suffix || [];// 缺省后缀
    const contentBase = config.contentBase || process.cwd();// 请求上下文

    nodejs.server({
        port,
        contentBase,
        suffix,
        handler: config.handler
    });

    const server = net.createServer(socket => {

        socket.on('error', (error) => {
            // console.log('Connection error:', error.message);
        });

        socket.once('data', buffer => {

            // 把请求头变成容易操作的json
            const headers = headersToJSON(buffer.toString());

            // 如果是ws请求
            // 就需要建立连接
            if (headers.Upgrade == 'websocket') {

                if (headers['Sec-WebSocket-Version'] !== '13') {
                    nodejs.error('\r\n警告：当前WebSocket版本为' + headers['Sec-WebSocket-Version'] + "，可能存在兼容问题~\r\n");
                }

                // 开始连接
                /*
                    协议中规定的校验用GUID，可参考如下链接：
                    https://tools.ietf.org/html/rfc6455#section-5.5.2
                    https://stackoverflow.com/questions/13456017/what-does-258eafa5-e914-47da-95ca-c5ab0dc85b11-means-in-websocket-protocol
                */
                const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
                const key = headers['Sec-WebSocket-Key'];
                const hash = crypto.createHash('sha1');  // 创建一个签名算法为sha1的哈希对象

                hash.update(`${key}${GUID}`)  // 将key和GUID连接后，更新到hash
                const result = hash.digest('base64') // 生成base64字符串
                const header = `HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-Websocket-Accept: ${result}\r\n\r\n` // 生成供前端校验用的请求头

                socket.write(header)  // 返回HTTP头，告知客户端校验结果，HTTP状态码101表示切换协议：https://httpstatuses.com/101。
                // 若客户端校验结果正确，在控制台的Network模块可以看到HTTP请求的状态码变为101 Switching Protocols，同时客户端的ws.onopen事件被触发。

                watch.watchTree(contentBase, {
                    interval: 1,
                    ignoreDirectoryPattern: /node_modules/
                }, () => {
                    socket.write(encodeWsFrame({ payloadData: "可以刷新页面了" }));
                });

            }

            // 否则就普通的，
            // 普通的由http服务器提供支持
            else {
                socket.end();

            }
        });
    });

    // 启动
    server.listen(port + 1);
};
