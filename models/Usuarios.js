const { DataTypes } = require("sequelize");
const Conn = require('../database/Conn');

const Usuarios = Conn.define("usuarios", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    celular:{
        type: DataTypes.STRING(14),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(100),
        validate:{isEmail:{
            args:true,
            msg:'Email invalido'
        } },       
        allowNull:false,
        unique: true
    },
    senha:{
        type: DataTypes.STRING,
        allowNull:false
    },
    tipoUsuario:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }

});

Usuarios.sync({force:false});
module.exports = Usuarios;