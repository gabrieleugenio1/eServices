const {Sequelize, Conexao} = require('../database/Conexao');
const Usuarios = require('./Usuarios');

const Post = Conexao.define("posts", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull:false
    },
    descricao: {
        type: Sequelize.TEXT,
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