const WS = require('../index.js');

WS({
    port: 20000,
    contentBase: "./",
    suffix: [],
    handler: function (request, response) {
        // console.log(request.url);
    }
});

