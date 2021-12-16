const WS = require('../index.js');

WS({
    port: 20000,
    contentBase: "./test/",
    suffix: [],
    handler: function (request, response) {
        // console.log(request.url);
    }
});

