const Product = require('../models/product');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.getIndexProduct = (req, res) => {
}
//materi api create
module.exports.postProduct = (req, res) => {
	let values = {
		name: req.body.name,
		price: req.body.price
	}
	
	Product
		.create(values)
		.then((product)=>{
			res.json(product);
		})
		.catch((error)=>{
			console.log(error);
		})
}

//materi api update
module.exports.putProduct = (req, res) => {
	let values = {
		name: req.body.name,
		price: req.body.price
	}
	
	let conditions = {
		where: {
			id: req.params.id
		}
	}
	
	Product
		.update(values, conditions)
		.then((product)=>{
			res.json(product);
		})
		.catch((error)=>{
			console.log(error);
		})
}

//lat api delete
module.exports.deleteProduct = (req, res) => {
	
	let conditions = {
		where: {
			id: req.params.id
		}
	}
	
	Product
		.destroy(conditions)
		.then((product)=>{
			res.json(product);
		})
		.catch((error)=>{
			console.log(error);
		})
}

module.exports.getIndexProduct = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error){
			res.sendStatus(403);
		} else {
			res.json({
				message: "OK",
				authData: authData
			})
		}
	})
}