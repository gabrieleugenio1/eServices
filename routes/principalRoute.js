//Definindo os principais módulos
const express = require('express');
const PrincipalController = require('../controllers/PrincipalController');
const { autorizacao } = require('../middleware/Autentication');
const router = express.Router();

//Rota na pagina principal
router
    .get("/", PrincipalController.principal)
    
//Visualizar os post criado pelos usuários
    .get("/servico/:id", PrincipalController.servico)

//Criar novo serviço
    .post("/criarservico", autorizacao, PrincipalController.criarServico)
    .get("/logout", PrincipalController.logout);

module.exports = router;