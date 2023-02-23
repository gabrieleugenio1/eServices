const {Usuarios} = require("../models/indexModels");
const bcrypt = require("bcryptjs");

module.exports = class AutenticacoesController{
    static async login(req, res){
        res.render("login", {
            resposta: req.flash("mensagem"),
            usuario: req.session.usuario
          });
    };
    
    static async criarConta(req, res){
        res.render("criarconta", {
            resposta: req.flash("mensagem"),
            usuario: req.session.usuario,
            erros: ""
          });
    };

    static async logar(req, res){
        let emailR = req.body.email;
        let senhaR = req.body.senha;
        
        await Usuarios.findOne({ where: { email: emailR } }).then(usuario => {
          {
            if (usuario != undefined) {
              if (bcrypt.compareSync(senhaR, usuario.senha)) {
                req.session.usuario = {
                  id: usuario.id,
                  nome: usuario.nome,
                  email: usuario.email,
                  celular: usuario.celular,
                  tipoUsuario: usuario.tipoUsuario
                };
                res.redirect("/home");
              } else {
                req.flash("mensagem", "Email ou senha invalidos.");
                res.redirect("/");
              };
            } else {
              req.flash("mensagem", "Email ou senha invalidos.");
              res.redirect("/");
            };
          };
        });
    };

    static async cricaoConta(req, res){
        let erros = [];
        let nome = req.body.nome;
        nome = nome.trim();
        let email = req.body.email;
        email = email.trim();
        email = email.toLowerCase();
        let senha = req.body.senha;
      
        let numeroCel = req.body.celular;
        let salt = bcrypt.genSaltSync(10);
        let senhaCriptografada = bcrypt.hashSync(senha, salt);
      
        let buscaCadastro = await Usuarios.findAll({
          where: {
            email: email
          }
        }).then(dados => {
          return dados;
        });
      
        if (!nome || typeof nome == undefined || nome == "") {
          erros.push({ mensagem: "Nome não pode ser vazio!" });
        }
      
        if (nome.length > 0 && nome.length < 3) {
          erros.push({ mensagem: "Nome muito curto." });
        }
        if (buscaCadastro.length > 0) {
          erros.push({ mensagem: "E-mail já está em uso." });
        }
      
        if (senha.length < 6) {
          erros.push({ mensagem: "Senha muito curta!" });
        }
        if (!numeroCel || typeof numeroCel == undefined || numeroCel == "") {
          erros.push({ mensagem: "Celular não pode ser vazio!" });
        }
        if (numeroCel.length < 14) {
          erros.push({ mensagem: "Número de celular inválido" });
        }
        if (
          !email ||
          typeof email == undefined ||
          email == "" ||
          !/\S+@\S+\.\S+/.test(email)
        ) {
          erros.push({ mensagem: "E-mail inválido!" });
        }
      
        if (erros.length > 0) {
          return res.status(200).render("criarconta", {
            erros: erros,
            usuario: req.session.usuario,
            resposta: ""
          });
        }
      
        await Usuarios.create({
          nome: nome,
          email: email,
          senha: senhaCriptografada,
          celular: numeroCel
        })
          .then(
            req.flash("mensagem", "Conta criada com sucesso."),
            res.redirect("/criarconta")
          )
          .catch(err => {
            console.log(err);
          });
    }


}