# WebSocket服务器
为etcpack打包工具提供的WebSocket服务器。

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@etcpack/ws"><img src="https://img.shields.io/npm/dm/@etcpack/ws.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@etcpack/ws"><img src="https://img.shields.io/npm/v/@etcpack/ws.svg" alt="Version"></a>
  <a href="https://github.com/etcpack/ws/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@etcpack/ws.svg" alt="License"></a>
  <a href="https://github.com/etcpack/ws" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/etcpack/ws?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/etcpack/ws/issues)！

## How to use?

```
npm install --save @etcpack/ws
```

安装好了以后，然后引入后就可以使用了：

```js
const WS = require('@etcpack/ws');

WS({

    port:number,// 可选，服务器端口号，比如：8080

    contentBase:string,// 可选，服务器根路径，比如：'./'

    handler:function(request, response){ // 可选，用于拦截请求的自定义处理方法
        // 如果返回true，表示当前请求自定义处理
    },

    suffix:Array, // 可选，用于设置缺省后缀，比如：['.js', '.ts']

});
```

当然，你可能需要监听代码改变后自动刷新页面，那么，请在```index.html```中添加类似下面的代码：

```js
var ws = new WebSocket('ws://localhost:20001/refresh-page');

// 连接成功
ws.addEventListener('open', function (event) {
    ws.send('服务器，你好呀！');
});

// 监听来自服务器的数据
ws.addEventListener('message', function (event) {

    // 如果把该方法的参数设置为 true，那么无论文档的最后修改日期是什么，
    // 它都会绕过缓存，从服务器上重新下载该文档
    window.location.reload(true);

});
```

具体的你可以参考EtcPack中的实现：  https://github.com/etcpack/etcpack/blob/master/bin/client/static.js

## How to debug?

命令行执行下面命令：

```
npm run debug
```

在需要调试的地方提前添加“ debugger ”语句，这和普通的web端调试一样，接着，在chrome浏览器地址栏中输入：

```
chrome://inspect/#devices
```

接着，请点击“ Open dedicated DevTools for Node ”后进入调试界面。

当然，如果你只是想运行一下看看效果，更简单的是执行：

```
npm run test
```

开源协议
---------------------------------------
[MIT](https://github.com/etcpack/ws/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
