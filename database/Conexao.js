const Sequelize = require("sequelize");

const Conexao = new Sequelize({
  dialect: "sqlite", 
  storage: "./database/eservices.sqlite"
});

module.exports = {Conexao, Sequelize};
