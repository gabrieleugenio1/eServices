const flash = require("connect-flash");
const session = require("express-session");
const routes = require('../routes');
const robots = require('express-robots-txt');
const {Conexao} = require("../database/Conn");

function configExpress(express, app) {
    //Robots
    app.use(robots({
        UserAgent: '*',
        Disallow: '/'
    }));

    //Configurações
    app.use(express.static("public"));
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    app.use(flash());
    app.set("view engine", "ejs");

    //Session
    app.use(session({
        secret: process.env.SECRET_SESSION,
        resave:false,
        saveUninitialized:true    
    })); 

    //Definir as rotas
    routes(app);

    //Página 404
    app.get('*', function(req, res){
        res.status(404).render('404');
    });

};

module.exports = configExpress;