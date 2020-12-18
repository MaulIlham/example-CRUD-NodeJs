const http = require("http");
const express = require('express');
const appMiddleware = require('./src/middleware/App-Middleware');
const appRoute = require('./src/routes/index');
const logEvent = require('./src/event/MyEmmiter');
const loggingListener = require('./src/event/LoggingListener');
const { APP_ERROR } = require('./src/enum/ErrorEnum');

loggingListener();
const app = express();
app.use(appMiddleware);
app.use(appRoute);
const server = http.createServer(app);
server.on('error ', function (e) {
    // console.log("App Failed ", e);
    logEvent.emit(APP_ERROR, {
        logTitle: 'APP-FAILED',
        logMessage: e
    });
});

module.exports = server;