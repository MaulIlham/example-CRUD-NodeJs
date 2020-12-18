const jwt = require('jsonwebtoken');

const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        if (authorization.startsWith('Bearer ')) {
            const token = authorization.slice(7, authorization.length);
            jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
                if (err) {
                    res.sendStatus(401);
                } else {
                    const decodeToken = decode;
                    const id = '444';
                    if (id == decodeToken.id) {
                        if (Date.now() >= decodeToken.exp * 1000) {
                            res.sendStatus(401);
                        } else {
                            next();
                        }
                    } else {
                        res.sendStatus(401);
                    }
                }
            });
        }
    } else {
        res.sendStatus(401);
    }
};

module.exports = tokenValidation;