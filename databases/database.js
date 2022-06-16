const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','021329',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
