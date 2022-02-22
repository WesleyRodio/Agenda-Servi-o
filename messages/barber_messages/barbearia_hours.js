var bd = require('../../banco_dados/bd.agenda');
con = bd.BDAgenda(); 

exports.barber_horario = function(client,message){

  var sql = 'INSERT INTO cliente (id, nome, numero, servico, aceito, horario, data, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  var nome = message.sender.notifyName;
  var telefone = message.from;
  con.query(sql, ['7', nome, telefone, 'Barba', '0', '00:00:00', '0000-00-00', 1], function(err, result){
    if(err) throw err;

    const buttons = [
      {
        "buttonText": {
          "displayText": "🕘09:00 horas"
          }
        },
      {
        "buttonText": {
          "displayText": "🕙10:00 horas"
          }
        },
        {
          "buttonText": {
            "displayText": "🕚11:00 horas"
            }
          }
      ];
      client.sendButtons(message.from, 'Escolha um *horário* para o agendamento', buttons, 'Clique no botão que corresponde a sua escolha:')
  })
};