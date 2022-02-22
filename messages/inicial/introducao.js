
exports.Resposta1 = function(client,message){
  
var bd = require('../../banco_dados/bd.agenda2');
con2 = bd.BDAgenda2();


var sql = 'SELECT * FROM agendamento_cliente WHERE telefone = ?';
var sql2 = 'SELECT * FROM perfil WHERE id = ? AND status = ?';
var telefone = message.from;

  con2.query(sql, [telefone], function (err, result1){
    if (err) throw err;

    result1.forEach(element => {
    console.log('entrei aqui 1')
    var id = element['id_agendamento_cliente']
    var status = element['status']
    var nome = element['nome_cliente']

    console.log("o id " + id + " do status " + status + " se chama " + nome)
    
      con2.query(sql2, [id, status], function (err, result2){
        if(err) throw err;
      
        result2.forEach(element2 => {

        var saudacao = element2['saudacao'];
        var descricao = element2['descricao'];

        if(saudacao.indexOf('{Nome do Cliente') !== -1) {
          saudacao = saudacao.replace('{Nome do Cliente}', nome)
        }

        if(saudacao.indexOf('{Quebra de Linha}') !== -1) {
          saudacao = saudacao.replace('{Quebra de Linha}', '\n')
        }
        const buttons = [
          {
            "buttonText": {
              "displayText": "📆 Agendar um serviço"
              }
            },
          {
            "buttonText": {
              "displayText": "⛔ Cancelar agendamento"
              }
            },
            {
              "buttonText": {
                "displayText": "💬 Mais Opções"
              }
            }
          ]
        client.sendButtons(message.from, saudacao, buttons, descricao)  
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
        })
      })
    })
  })
};



