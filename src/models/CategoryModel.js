const sequelize = require('sequelize');
const conn = require('../../DbConn');

const Category = conn.define('category', {
    id: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    categoryName: {
        type: sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'category',
    paranoid: true,
});

module.exports = Category;