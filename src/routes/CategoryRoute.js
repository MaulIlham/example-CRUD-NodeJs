const express = require('express');
const router = express.Router();
const categorySerices = require('../services/CategotyService');
const { getCategoryList, getCategoryId, saveDataCategory, updateDataCategory, deleteDataCategory } = require('../controllers/CategoryController');
const tokenValidation = require('../middleware/TokenValidation');

const categoryService = new categorySerices();

router.use(tokenValidation);
router.get("/", (req, res, next) => getCategoryList(req, res, categoryService));
router.get('/:id_category', (req, res, next) => getCategoryId(req, res, categoryService));
router.post("/", (req, res, next) => saveDataCategory(req, res, categoryService));
router.put("/", (req, res, next) => updateDataCategory(req, res, categoryService));
router.delete('/:id_category', (req, res, next) => deleteDataCategory(req, res, categoryService));
module.exports = router;