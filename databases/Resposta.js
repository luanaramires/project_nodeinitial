const Sequelize = require("sequelize");
const connection = require("./database");   //conexao com banco de dados
// criando a pasta no banco de dados
const Resposta = connection.define("respostas", {
corpo: {
    type: Sequelize.TEXT,
    allowNull: false 
},
perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false
}
});

Resposta.sync({force: false});

module.exports = Resposta;

