//index js untuk relasi dari table di models
const category = require('./CategoryModel');
const product = require('./ProductModel');

const dbAssociation = function dbAssociation() {
    //relasi one-to-many
    category.hasMany(product);
    product.belongsTo(category);
    //
};

module.exports = dbAssociation;