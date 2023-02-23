//Definindo os principais módulos
const express = require('express');
const GeralController = require('../controllers/GeralController');
const router = express.Router();


//Página de servicos
router
    .get("/topicos/servicos", GeralController.topicosServicos)
//Página de como funciona
    .get("/topicos/comofunciona", GeralController.topicosComoFunciona)
//Página sobre o Senac
    .get("/topicos/senac", GeralController.topicosSobre);

module.exports = router;