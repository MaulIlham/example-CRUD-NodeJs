const getProductList = async (req, res, service) => {
    try {
        let products;
        const page = req.query.page;
        const size = req.query.size;
        products = await service.getAllProduct(page, size);
        res.send(products);
    } catch (error) {
        res.sendStatus(500);
    }

};

const getProductById = async (req, res, service) => {
    try {
        const id = req.params.id_product;
        let product;
        product = await service.getProductId(id);
        res.send(product);
    } catch (error) {
        res.sendStatus(500);
    }

};

const saveDataProduct = async (req, res, service) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        await service.saveProduct(name, description);
        res.send("Save Data Product Success");
    } catch (error) {
        res.sendStatus(500);
    }

};

const updateDataProduct = async (req, res, service) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const description = req.body.description;
        let product;
        product = await service.updateProduct(id, name, description);
        res.send(product);
    } catch (error) {
        res.sendStatus(500);
    }

};

const deleteDataProduct = async (req, res, service) => {
    try {
        const id = req.params.id_product;
        await service.deleteProduct(id);
        res.send("Delete Data Success");
    } catch (error) {
        res.sendStatus(500);
    }

};

module.exports = { getProductList, getProductById, saveDataProduct, updateDataProduct, deleteDataProduct, };