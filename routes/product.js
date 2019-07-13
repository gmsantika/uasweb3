const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');

const auth = require('../configs/auth');

router.get('/', auth.verifyToken, productController.getIndexProduct);

router.get('/', productController.getIndexProduct);

router.post('/', productController.postProduct);//materi

router.put('/:id', productController.putProduct);//materi

router.delete('/:id', productController.deleteProduct);//lat

module.exports = router;