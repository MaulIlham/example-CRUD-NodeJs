const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sysUser = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const { APP_ERROR } = require('../enum/ErrorEnum');

dotenv.config();
class AuthService {
    async authenticate(user) {
        const { username, password } = user;
        let authUser;
        try {
            authUser = await sysUser.findOne({
                where: {
                    username: username,
                }
            });
            const matchPassword = bcrypt.compareSync(password, authUser.password);
            if (matchPassword) {
                const expireMs = 10000;
                const accessToken = jwt.sign({ id: '444' }, process.env.SECRET_KEY,
                    {
                        expiresIn: expireMs
                    });
                authUser = {
                    username: authUser.username,
                    // user: {
                    //     userId: authUser.id,
                    //     userName: authUser.username,
                    //     fullName: authUser.fullName,
                    //     password: authUser.password,
                    //     email: authUser.email
                    // }, 
                    token: accessToken,
                };
            } else {
                authUser = null;
            }
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'AUTH-SERVICE-ERROR',
                logMessage: e
            });
            throw new Error(e);
        }
        return authUser;
    }
}

module.exports = AuthService;