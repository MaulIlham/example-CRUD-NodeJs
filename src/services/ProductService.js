const conn = require('../../DbConn');
const product = require('../models/ProductModel');
const category = require('../models/CategoryModel');
const { APP_ERROR } = require('../enum/ErrorEnum');
const logEvent = require('../event/MyEmmiter');

class ProductService {

    async getAllProduct(offset, limit) {
        // const productList = new Promise((resolse, reject) => {
        //     conn.query("select * from product",
        //         (err, rows, fields) => {
        //             if (err) {
        //                 reject(err);
        //             } else {
        //                 resolse(rows);
        //             }
        //         });
        // });

        let result;
        try {
            result = await product.findAll({ offset: Number(offset), limit: Number(limit) }, { include: category });
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'GET-PRODUCT-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async getProductId(id) {
        // const product = new Promise((resolve, reject) => {
        //     conn.query('select * from product where id = ?', [id],
        //         (err, rows, fields) => {
        //             if (err) {
        //                 reject(err);
        //             } else {
        //                 resolve(rows);
        //             }
        //         });
        // });

        let result;
        try {
            result = await product.findByPk(id, { include: category });
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'GET-ID-PRODUCT-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async saveProduct(name, description) {
        // const product = new Promise((resolse, reject) => {
        //     conn.query('insert into product(name,description) values(?,?)', [name, description],
        //         (err, rows, fields) => {
        //             if (err) {
        //                 reject(err);
        //             } else {
        //                 resolse(rows);
        //             }
        //         });
        // });

        let result;
        try {
            result = await product.create({ productName: name, productDescription: description });
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'POST-Product-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async updateProduct(id, name, description) {
        // const product = new Promise((resolse, reject) => {
        //     conn.query('update product set name = ?, description = ? where id = ?', [name, description, id],
        //         (err, rows, fields) => {
        //             if (err) {
        //                 reject(err);
        //             } else {
        //                 resolse(rows);
        //             }
        //         });
        // });

        let result;
        try {
            result = await product.findByPk(id, { include: category });
            result.productName = name;
            result.productDescription = description;
            await result.save();
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'UPDATE-PRODUCT-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async deleteProduct(id) {
        // const product = new Promise((resolse, reject) => {
        //     conn.query('delete from product where id = ?', [id],
        //         (err, rows, fields) => {
        //             if (err) {
        //                 reject(err);
        //             } else {
        //                 resolse(rows);
        //             }
        //         });
        // });

        let result;
        try {
            result = await product.findByPk(id);
            await result.destroy();
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'DELETE-PRODUCT-BY-ID-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }
}

module.exports = ProductService;