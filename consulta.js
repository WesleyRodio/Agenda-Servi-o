var bd = require('./banco_dados/bd.agenda2');
con2 = bd.BDAgenda2();

exports.consulta = function(client, message){
var sql = 'SELECT * FROM agendamento_cliente WHERE status = ? AND aceito = ?';
var sql2 = 'SELECT * FROM servico_agendamento_cliente WHERE id_agendamento_cliente = ?';
var sql3 = 'SELECT * FROM servico WHERE id_servico = ?';
var sql4 = 'UPDATE agendamento_cliente SET aceito = ? WHERE aceito = ? AND id_agendamento_cliente = ?';


con2.query(sql,[1, 0], function(err, result){

    if(err) throw err;
        result.forEach(element => {

            var status = element['status'];  
            var id = element['id_agendamento_cliente']
            var telefone = element['telefone'];

            var data_agendamento = element['data_agendamento'];
            var dia = data_agendamento.getDate();
            var mes = data_agendamento.getMonth();
            var ano = data_agendamento.getFullYear();
            
          
            if(dia && mes <= 9) {
              var data_atual = '0' + dia + '/0'+ mes + '/' + ano;
            } else 
            if(dia && mes >= 10) {
                var data_atual =  dia + '/' + mes + '/' + ano;
            }  

            con2.query(sql2,[id], function(err, result2){

                if(err) throw err;
                var id_servico = result2[0]['id_servico'];
        
                con2.query(sql3,[id_servico], function(err, result3){
        
                    if(err) throw err;
                    
                    con2.query(sql4,[1, 0, id], function(err, result){
        
                        if(err) throw err;
                        if(id === null) {
                        } else {
                            client.sendText(telefone, "Você concluiu seu agendamento para o dia " + data_atual);
                        }
                    })
                })
            })

            
    })
})
}

