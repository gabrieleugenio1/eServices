//Configuração inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//Ativar dotenv
require("dotenv").config();

//Ativar configurações
const configExpress = require("./config/express")(express, app);

app.listen(port, () =>{
    console.log("Aplicação executada na porta " + port);
});

