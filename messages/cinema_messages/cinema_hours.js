exports.cinema_horário = function(client,message){
    const buttons = [
        {
          "buttonText": {
            "displayText": "🕔 17:00 horas"
            }
          },
        {
          "buttonText": {
            "displayText": "🕕 18:00 horas"
            }
          },
          {
            "buttonText": {
              "displayText": "🕖 19:00 horas"
              }
            }
        ];
        client.sendButtons(message.from, 'Escolha um *horário* para a sessão', buttons, 'Clique no botão que corresponde a sua escolha:');
  };