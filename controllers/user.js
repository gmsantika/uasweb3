const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/user');

//test comment
module.exports.postRegister = (req, res) => {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(req.body.password, salt);
	
	User
		.findOrCreate({
			where: { email: req.body.email },
			defaults: {
				username: req.body.username,
				email: req.body.email,
				password: hash,
				roles:  req.body.roles
			}
		})
		.then((user) => {
			res.json(user);
		})
		.catch((error) => {
			console.log(error);
		})
}

//post login
module.exports.postLogin = (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(user => {
		if (!user) {
			res.status(400).send('username tidak ditemukan');
		}
		
		bcrypt.compare(req.body.password, user.get('password'), function (err, isMatch) {
			if (err){
				res.status(400).send('Password error')
			}
			
			if (isMatch){
				jwt.sign({ id: user.get('username')}, process.env.SECRETKEY, (error, token) => {
					res.json({ token })
				})
			} else {
				res.status(400).send('password salah')
			}
		})
	})
}

