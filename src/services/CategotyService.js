const conn = require('../../DbConn');
const logEvent = require('../event/MyEmmiter');
const category = require('../models/CategoryModel');
const product = require('../models/ProductModel');
const { APP_ERROR } = require('../enum/ErrorEnum');


class CategoryService {



    async getAllCategory(offset, limit) {
        // const categoryList = new Promise((resolve, reject) => {
        //     conn.query("SELECT * FROM category",
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
            result = await category.findAll({ offset: Number(offset), limit: Number(limit) }, { include: product });
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'GET-CATEGORY-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async getCategoryById(id) {
        // const category = new Promise((resolve, reject) => {
        //     conn.query('select * from category where id = ?', [id],
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
            result = await category.findByPk(id, { include: product });
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'GET-ID-CATEGORY-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async saveCategory(name) {
        // const category = new Promise((resolve, reject) => {
        //     conn.query('insert into category(name) values(?)', [name],
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
            result = await category.create({ categoryName: name });
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'POST-CATEGORY-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async updateCategory(id, name) {
        // const category = new Promise((resolve, reject) => {
        //     conn.query('update category set name = ? where id = ?', [name, id],
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
            result = await category.findByPk(id, { include: product });
            result.categoryName = name;
            await result.save();
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'UPDATE-CATEGORY-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }

    async deleteCategory(id) {
        // const category = new Promise((resolve, reject) => {
        //     conn.query('delete from category where id = ?', [id],
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
            result = await category.findByPk(id, { include: product });
            await result.destroy();
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'DELETE-CATEGORY-BY-ID-SERVICE-FAILED',
                logMessage: error
            });
            throw new Error(error);
        }

        return result;
    }
}

module.exports = CategoryService;