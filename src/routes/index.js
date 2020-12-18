const express = require('express');
const router = express.Router();

const categoryRoutes = require('./CategoryRoute');
const productRoutes = require('./ProductRoute');
const userRoutes = require('./AuthRoute');
const noRoute = require('./NoRoute');
const logRoute = require('./LogRouter');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./../../Swagger.json');

router.use(logRoute);
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
router.use('/auth', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use(noRoute);

module.exports = router;