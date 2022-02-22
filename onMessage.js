var intro1 = require('./decisões/introducao2');
var intro2 = require('./decisões/cancelamento_serviço');
var intro3 = require('./decisões/barbearia');
var intro4 = require('./decisões/cinema');
var intro5 = require('./decisões/mais_options');
var intro6 = require('./messages/inicial/mensagem');
var intro7 = require('./messages/cancelar_agendamento/id_servico');
var intro8 = require('./messages/barber_messages/id_hora');

exports.play = function(client) {
    client.onMessage((message) => {
        var palavra = message.body;
        intro1.decisao1(client,message);
        intro2.decisao2(client,message);
        intro3.decisao3(client,message);
        intro4.decisao4(client,message);
        intro5.decisao5(client,message);
        intro6.Resposta(client,message,palavra);
        intro7.id_service(client,message,palavra);
        intro8.id_horab(client,message,palavra);
    });
}