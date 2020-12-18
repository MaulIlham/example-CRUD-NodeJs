const logEvent = require('../event/MyEmmiter');
const { APP_ERROR } = require('../enum/ErrorEnum');

const noRoute = (req, res) => {
    // console.log("Route Failed ",
    //     `${req.originalUrl} was requested`);
    logEvent.emit(APP_ERROR, {
        logTitle: 'NOT FOUND',
        logMessage: 'Page Not Found'
    });
    res.status(404);
    res.json({ message: 'Page Not Found.' });

};

module.exports = noRoute;