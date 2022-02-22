
var aba_de_serviço = require('../messages/inicial/agendamento.js');
var TesT = require('../Rotina');

exports.decisao1 = function(client, message) {

    if(message.body === 'test' && message.isGroupMsg === false){
        TesT.cron(client,message);
    }  else
    
    if(message.body === "📆 Agendar um serviço" && message.isGroupMsg === false ) {
        aba_de_serviço.Resposta2(client, message);
    }
};  