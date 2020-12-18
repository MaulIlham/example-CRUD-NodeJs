const sequelize = require('sequelize');
const conn = require('../../DbConn');

const Product = conn.define('product', {
    //spesifikasi field
    id: {
        type: sequelize.UUID,
        // type: sequelize.INTEGER,
        // autoicrement: true,
        defaultValue: sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    productName: {
        type: sequelize.STRING
    },
    productDescription: {
        type: sequelize.STRING
    },
}, {
    freezeTableName: true,
    tableName: 'product',
    paranoid: true,
});

module.exports = Product;