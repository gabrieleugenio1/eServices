const { DataTypes } = require('sequelize');
const Conn = require('../database/Conn');
const Usuarios = require('./Usuarios');

const Post = Conn.define("posts", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull:false
    },
});
Usuarios.hasMany(Post, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'     
});
Post.belongsTo(Usuarios);
Post.sync({force:false});

module.exports = Post;