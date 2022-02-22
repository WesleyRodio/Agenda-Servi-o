
var bd = require('../../banco_dados/bd.agenda');
con = bd.BDAgenda();

exports.id_horab = function(client, message, palavra){
    var id_hour = require('../../json/horario_barbearia.json');
    var chave = 0; 
    var sql1 = 'SELECT * FROM cliente WHERE numero = ?'
    var sql2 = "UPDATE cliente SET horario = ? WHERE numero = ? AND status = ?";
    var nmr = message.from;

    id_hour.hora.forEach(function(elemento) {
        if(elemento == palavra){
            chave = 1;
           console.log("aqui")
        }
    });

    con.query(sql1,[nmr], function(err, result ){
        if(err) throw err;

        result.forEach(element => {


            if(chave == 1 && message.isGroupMsg === false ) {
                con.query(sql2,[palavra.substring(2, 7), nmr, 1], function(err, result){
                    if(err) throw err;
                    client.sendText(message.from, "Seu agendamento foi marcado para as  " + palavra.substring(2, 7) + " horas")
                console.log(palavra.substring(2, 7))
                })
            } 
        })
    })
}