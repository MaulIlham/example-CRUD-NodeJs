const express = require('express');
const router = express.Router();
const productServices = require('../services/ProductService');
const { getProductList, getProductById, saveDataProduct, updateDataProduct, deleteDataProduct } = require('../controllers/ProductController');
const tokenValidation = require('../middleware/TokenValidation');

const productService = new productServices();

router.use(tokenValidation);
router.get("/", (req, res, next) => getProductList(req, res, productService));
router.get('/:id_product', (req, res, next) => getProductById(req, res, productService));
router.post("/", (req, res, next) => saveDataProduct(req, res, productService));
router.put("/", (req, res, next) => updateDataProduct(req, res, productService));
router.delete('/:id_product', (req, res, next) => deleteDataProduct(req, res, productService));
module.exports = router;