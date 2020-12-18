const logEvent = require('../event/MyEmmiter');

const logRouter = (req, res, next) => {
    console.log("Router Track ",
        `${req.originalUrl} was requested`);
    next();
};

module.exports = logRouter;