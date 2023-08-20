autenticado = (req,res,next) =>{
    if(req.session.usuario){
        res.redirect("/");
    }else{
        next();
    };
 };

autorizacao = (req,res,next) =>{
    if(req.session.usuario != undefined){
        next();
    }else{
        res.redirect("/");
    }
}

module.exports = {
    autenticado, autorizacao
}