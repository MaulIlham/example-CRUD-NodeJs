const dotenv = require('dotenv');
const server = require('./server');
const conn = require('./DbConn');
const logEvent = require('./src/event/MyEmmiter');
const { APP_ERROR, APP_INFO } = require('./src/enum/ErrorEnum');

dotenv.config();
if (process.env.APP_NAME) {
    conn.authenticate().then(() => {
        server.listen(process.env.APP_PORT, '0.0.0.0', function () {
            if (server.listening) {
                logEvent.emit(APP_INFO, {
                    logTitle: 'SERVER',
                    logMessage: `Server Is Listening on ${process.env.APP_PORT}`
                });
            }
        });
    }).catch((err) => {
        logEvent.emit(APP_ERROR, {
            logTitle: 'DB-FAILED',
            logMessage: err
        });
    });
} else {
    process.exit(1);
}