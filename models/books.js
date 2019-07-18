const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Books extends Sequelize.Model {}

Books.init({
    namabuku: Sequelize.STRING,
    penerbit: Sequelize.STRING,
	kategori: Sequelize.STRING,
    harga: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'books'
});

module.exports = Books;