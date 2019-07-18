const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');

const auth = require('../configs/auth');

router.post('/',  orderController.postOrder);

//router.get('/', auth.verifyToken, orderController.getOrder);

module.exports = router;