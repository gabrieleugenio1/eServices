const {Sequelize, Conexao} = require('../database/Conexao');

const Usuarios = Conexao.define("usuarios", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    celular:{
        type: Sequelize.STRING(14),
        allowNull:false
    },
    email:{
        type: Sequelize.STRING(100),
        validate:{isEmail:{
            args:true,
            msg:'Email invalido'
        } },       
        allowNull:false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull:false
    },
    tipoUsuario:{
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    }

});

Usuarios.sync({force:false});
module.exports = Usuarios;