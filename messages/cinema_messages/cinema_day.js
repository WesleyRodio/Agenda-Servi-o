exports.cinema_dia = function(client,message){
    const buttons = [
        {
          "buttonText": {
            "displayText": "Terça-feira"
            }
          },
        {
          "buttonText": {
            "displayText": "Quinta-feira"
            }
          },
          {
            "buttonText": {
              "displayText": "Sábado"
              }
            }
        ];
        client.sendButtons(message.from, 'Escolha um *dia* para a sessão', buttons, 'Clique no botão que corresponde a sua escolha:');
  };