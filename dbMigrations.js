const conn = require('./DbConn');
const bcrypt = require('bcryptjs');
const user = require('./src/models/UserModel');
const product = require('./src/models/ProductModel');
const category = require('./src/models/CategoryModel');
const dbAssociation = require('./src/models/index');


async function migration() {
    //create table
    dbAssociation();
    await conn.sync({ force: true });

    //untuk insert ke database
    let category1 = await category.create({ categoryName: 'Makanan' });

    let prod1 = await product.create(
        { productName: 'Aqua', productDescription: 'Air Mineral' }
    );
    prod1.setCategory(category1);

    var passwordHash = bcrypt.hashSync('schiffers', 9);
    await user.create({ username: 'maul', email: 'maul@gail.com', password: passwordHash, fullName: 'schiffers' });
}

migration();