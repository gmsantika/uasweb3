const Books = require('../models/books');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.getIndexBooks = (req, res) => {
}

module.exports.getOneBook = (req, res) => {
	
		Books.findOne({
			where: {
				id: req.params.id
			}
		})
		.then((books) => {
			res.json(books);
		})
		.catch((error) => {
			console.log(error);
		})
	
}

module.exports.postBooks = (req, res) => {
    let values = {
        namabuku: req.body.namabuku,
        penerbit: req.body.penerbit,
		kategori: req.body.kategori,
        harga: req.body.harga
    }
    
	Books
		.create(values)
		.then((books)=>{
			res.json(books);
		})
		.catch((error)=>{
			console.log(error);
		})
}

module.exports.putBooks = (req, res) => {
    let values = {
        namabuku: req.body.namabuku,
        penerbit: req.body.penerbit,
		kategori: req.body.kategori,
        harga: req.body.harga
    }

    let conditions = {
        where: {
            id: req.params.id
        }
    }
	
    Books
		.update(values, conditions)
		.then((books)=>{
			res.json(books);
		})
		.catch((error)=>{
			console.log(error);
		})
}

module.exports.deleteBooks = (req, res) => {
    let conditions = {
		where: {
			id: req.params.id
		}
	}
	
	Books
		.destroy(conditions)
		.then((books)=>{
			res.json(books);
		})
		.catch((error)=>{
			console.log(error);
		})
}

module.exports.getIndexBooks = (req, res) => {
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