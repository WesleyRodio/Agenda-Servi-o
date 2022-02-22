var bd = require('../../banco_dados/bd.agenda2');
con2 = bd.BDAgenda2();

exports.service = function(client, message){
var sql = "SELECT * FROM agendamento_cliente WHERE telefone = ?";
var sql1 = 'SELECT * FROM agendamento_cliente WHERE telefone = ? AND status = ?';
var sql2 = 'SELECT * FROM servico_agendamento_cliente WHERE id_agendamento_cliente = ?';
var sql3 = 'SELECT * FROM servico WHERE id_servico = ?';
numero = message.from;

con2.query(sql,[numero], function(err, result1){
  if(err) throw err;

  result1.forEach(element2 =>{

    var pedido_cancelado = element2['pedido_cancelado'];

    if(pedido_cancelado === 0) {

      con2.query(sql1,[numero, 1], function(err, result){

        if(err) throw err;
        result.forEach(element =>{
      
        var id_agendamento_cliente = element['id_agendamento_cliente'];
        var nome_cliente = element['nome_cliente'];
        var horario_inicio = element['horario_inicio'];
      
        var data_agendamento = element['data_agendamento'];
        var dia = data_agendamento.getDate();
        var mes = data_agendamento.getMonth();
        var ano = data_agendamento.getFullYear();
      
          if(pedido_cancelado === 1) {
      
            client.sendText(message.from, "Você não possuí nenhum agendamento marcado.")
      
          } else {
            
            if(dia && mes <= 9) {
              var data_atual = '0' + dia + '/0' + mes + '/' + ano;
            } else if (dia && mes >= 10){
              var data_atual = dia + '/' + mes + '/' + ano;
            }
          
            con2.query(sql2,[id_agendamento_cliente], function(err, result2){
      
              if(err) throw err;
              var id_servico = result2[0]['id_servico'];
            
              con2.query(sql3,[id_servico], function(err, result3){
              
                if(err) throw err;
                var nome_servico = result3[0]['nome_servico'];
              
                const buttons = [
                  {
                    "buttonText": {
                      "displayText": id_agendamento_cliente + ' - Sim'
                      }
                    },
                  {
                    "buttonText": {
                      "displayText": 'Não'
                      }
                    }
                ]
                client.sendButtons(message.from, 'Certo ' + nome_cliente + ', verifiquei aqui que você possui ' + nome_servico + ' agendado para o dia ' + data_atual + ' para as ' + horario_inicio.substring(0, 5) + '. Você deseja desmarcar?', buttons, 'Clique no botão que corresponde a sua escolha:')
              
              })
            })
      
          }
        })
      })
    } else {
      client.sendText(message.from, "Você não possui nenhum agendamento.")
    }
  })
})
}





/* var sql = "SELECT * FROM cliente WHERE numero = ? AND status = ?";
var telefone = message.from;

    con.query(sql,[telefone, 1], function(err, result){
    if(err) throw err;

    result.forEach(element => {
      if(element['servico'] === null) {
        client.sendText(message.from, "Você não tem nenhum agendamento.")
    } else {
          const buttons = [
              {
                "buttonText": {
                  "displayText": element['id'] + ' - Sim'
                  }
                },
              {
                "buttonText": {
                  "displayText": 'Não'
                  }
                }
              ]
      console.log(element['id']);
      client.sendButtons(message.from, 'Você tem agendado para as ' + element['horario'].substring(0,5) + ' fazer o(a) ' + element['servico'] + '.', buttons, 'Clique no botão que corresponde a sua escolha:')
      .then((result) => {
          console.log('Result: ', result); //return object success
          })
      .catch((erro) => {
          console.error('erro na botao as : ', erro); //return object error
          });
        };
      }
    );
  }
); */

/*const con = bd.BDAgenda();
var mydate = new Date(year, '-', monthIndex,'-', day);
var myhours = new Date();
var sql = 'INSERT INTO cliente(nome, numero, horario, data, status) VALUES (?, ?, ?, ?, ?)';
        con.query(sql,[
            message.sender.notifyName,
            message.sender.id,
            myhours,
            mydate,
            1
        ])
    }


var sql = 'INSERT INTO cliente (nome, numero, horario, data, status) VALUES (?, ?, ?, ?, ?)';
con.query(sql,['Vanessa', '5549985014526@c.us', '15:50:00', '1986-12-17', 3], function(err, result){
    if(err) throw err;

    console.log(result);
})


var sql1 = "UPDATE cliente SET numero = ?, nome = ? WHERE nome = ?";

con.query(sql1,['554999155176@c.us', 'Maria Mantovani', 'Maria'], function(err, result){
    if(err) throw err;

    console.log(result);
    })

*/


