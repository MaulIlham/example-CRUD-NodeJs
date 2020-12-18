const getCategoryList = async (req, res, service) => {
    try {
        let categories;
        const page = req.query.page;
        const size = req.query.size;

        categories = await service.getAllCategory(page, size);
        res.send(categories);
    } catch (error) {
        res.sendStatus(500);
    }
};

const getCategoryId = async (req, res, service) => {
    try {
        const id = req.params.id_category;
        let category;
        category = await service.getCategoryById(id);
        res.send(category);
    } catch (error) {
        res.sendStatus(500);
    }

};

const saveDataCategory = async (req, res, service) => {
    try {
        const name = req.body.name;
        await service.saveCategory(name);
        res.send("Save Data category Success");
    } catch (error) {
        res.sendStatus(500);
    }
}

const updateDataCategory = async (req, res, service) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        await service.updateCategory(id, name);
        res.send("Update Data Success");
    } catch (error) {
        res.sendStatus(500);
    }
}

const deleteDataCategory = async (req, res, service) => {
    try {
        const id = req.params.id_category;
        await service.deleteCategory(id);
        res.send("Delete Data Success");
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = { getCategoryList, getCategoryId, saveDataCategory, updateDataCategory, deleteDataCategory, };