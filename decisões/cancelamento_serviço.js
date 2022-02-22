
var saudacao = require('../messages/inicial/date');
var agend = require('../messages/cancelar_agendamento/serviços');

exports.decisao2 = function(client,message) {

    if(message.body === "Chernous" && message.isGroupMsg === false) {
        client.sendText(message.from, `👋${saudacao.Saudacao()} ${message.sender.notifyName}, seja bem vindo!`);
    } else     
    
    //Cancelamento

    if(message.body === '⛔ Cancelar agendamento' && message.isGroupMsg === false) {
        agend.service(client, message);
    }
};