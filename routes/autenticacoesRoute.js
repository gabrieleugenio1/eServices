//Definindo os principais módulos
const express = require('express');
const router = express.Router();
const AutenticacoesController = require('../controllers/AutenticacoesController');
const autenticado = require("../authentication/autenticado");

//Página de login
router
    .get("/login", autenticado, AutenticacoesController.login)
//Página de criar conta
    .get("/criarconta", autenticado, AutenticacoesController.criarConta)
//Logar
    .post("/logar", autenticado, AutenticacoesController.logar)
//Salvar novo usuario
    .post("/criarconta", autenticado,  AutenticacoesController.cricaoConta);

module.exports = router;