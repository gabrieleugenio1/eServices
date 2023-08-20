const { DataTypes } = require("sequelize");
const Conn = require('../database/Conn');

const Servicos = Conn.define("servicos", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    descricao: DataTypes.STRING
});

Servicos.sync({force:false});
module.exports = Servicos;