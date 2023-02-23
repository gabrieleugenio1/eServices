const principal = require('./principalRoute');
const geral = require('./geralRoute');
const autenticacoes = require('./autenticacoesRoute');

//Pegando todas as rotas
module.exports = app =>{
    app.use(
        principal,
        geral,
        autenticacoes
        )
}