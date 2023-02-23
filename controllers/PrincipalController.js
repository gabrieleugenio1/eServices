const {Usuarios, Post} = require("../models/indexModels");

module.exports = class PrincipalController{

    static async principal(req, res){
        await Post.findAll({ order: ["createdAt"] }).then(Post => {
            res.render("index", { usuario: req.session.usuario, post: Post });
        });
    };

    static async servico(req, res){
        let id = req.params.id;
        let buscarId = await Post.findOne({
          where: {
            id: id
          }
        }).then(dados => {
          return dados;
        });
        if (buscarId) {
          await Post.findByPk(id).then(async resultado => {
            await Usuarios.findByPk(resultado.usuarioId).then(usuarios => {
              res.render("./visualizacao/post", {
                usuario: req.session.usuario,
                post: resultado,
                usuarios: usuarios
              });
            });
          });
        } else {
          res.redirect("/");
        }
    };

    static async criarServico(req, res){
        let usuario = req.session.usuario.id;
        let titulo = req.body.titulo;
        let descricao = req.body.descricao;
        await Post.create({
          titulo: titulo,
          descricao: descricao,
          usuarioId: usuario
        }).then(() => {
          return res.redirect("/");
        });
    };

    static async logout(req, res){
        req.session.usuario = undefined;
        res.redirect("/");
    }
}