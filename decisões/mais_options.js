
var funcoes = require('../messages/mais_options/funcoes');
exports.decisao5 = function (client, message) {

    if(message.body === "💬 Mais Opções" && message.isGroupMsg === false) {
        funcoes.textoPerso(client, message)
    }
}