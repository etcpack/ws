# WebSockets服务器
为etcpack打包工具提供的WebSockets服务器。

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
import WS from '@etcpack/ws';

WS({
    port:number,// 端口号，可选，默认8080
});
```

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
