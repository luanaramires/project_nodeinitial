const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("Pergunta",{
    titulo:{
        type: Sequelize.STRING,        //TEXTOS CURTOS
        allowNull: false         //IMPEDE QUE O CAMPO FIQUE VAZIO
    },
    descricao:{
        type: Sequelize.TEXT,       //TEXTOS LONGOS
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {});   
//sincroniza com o banco de dados. impede a criacao de outra tabela

module.exports = Pergunta; 
