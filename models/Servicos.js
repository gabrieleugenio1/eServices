const {Sequelize, Conexao} = require('../database/Conexao');

const Servicos = Conexao.define("servicos", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    descricao: Sequelize.STRING
});

Servicos.sync({force:false});
module.exports = Servicos;