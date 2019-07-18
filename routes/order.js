const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');

const auth = require('../configs/auth');

router.get('/', auth.verifyToken, orderController.getOrder);

router.post('/',  orderController.postOrder);

module.exports = router;