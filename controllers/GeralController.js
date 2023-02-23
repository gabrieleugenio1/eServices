module.exports = class GeralController {
    static async topicosServicos(req, res){
        res.render("./topicos/servicos", {usuario: req.session.usuario});
    };

    static async topicosComoFunciona(req, res){
        res.render("./topicos/comofunciona", {usuario: req.session.usuario});
    };

    static async topicosSobre (req, res){
        res.render("./topicos/osenac", {usuario: req.session.usuario});
    }; 
};