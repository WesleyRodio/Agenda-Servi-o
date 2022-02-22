
var bd = require('../../banco_dados/bd.agenda2');
con2 = bd.BDAgenda2();

exports.id_service = function(client, message, palavra){
    var id_agend = require('../../json/id_agendamentos.json');
    var chave = 0; 
    var sql = "UPDATE agendamento_cliente SET  pedido_cancelado = ? AND status = ?  WHERE telefone = ? AND id_agendamento_cliente = ?";
    var nmr = message.from;
    var palavra1 = palavra.substring(0,1);
    var palavra2 = palavra.substring(0,2);

    id_agend.ids.forEach(function(elemento) {
        if(elemento == palavra){
            chave = 1;
           // break;
        }
    });


    if(chave == 1 && palavra <= palavra1 && message.isGroupMsg === false ) {
        con2.query(sql,[0, nmr, palavra.substring(0,1)], function(err, result1){

            if(err) throw err;

            client.sendText(message.from, 'Prontinho, seu agendamento foi cancelado.')
        })
    } else if(chave == 1 && palavra >= palavra2 && message.isGroupMsg === false ) {
        con2.query(sql,[1, 0, nmr, palavra.substring(0,2)], function(err, result2){

            if(err) throw err;

            client.sendText(message.from, 'Prontinho, seu agendamento foi cancelado.')
        })
    }
}

 