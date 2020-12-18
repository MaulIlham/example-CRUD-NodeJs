const sequelize = require('sequelize');
const conn = require('../../DbConn');

const User = conn.define('user', {
    id: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: sequelize.STRING,
        allowNull: false,
        min: 6
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        max: 50,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
        min: 6
    },
    fullName: {
        type: sequelize.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    tableName: 'user',
});

module.exports = User;