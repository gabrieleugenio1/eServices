//Ativar dotenv
require("dotenv").config();

//Configuração inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Conn = require("./database/Conn")

//Ativar configurações
const configExpress = require("./config/express")(express, app);

//Sincronizar com o banco e abrir server
Conn.sync().then(()=>{
    app.listen(port, () =>{
        console.log("Aplicação executada na porta " + port);
    });    
}).catch((error) => console.log(error));
