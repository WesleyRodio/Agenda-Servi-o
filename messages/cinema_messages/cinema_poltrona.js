exports.cinema_poltrona = function(client,message){
    const buttons = [
        {
          "buttonText": {
            "displayText": "🛋️- A25"
            }
          },
        {
          "buttonText": {
            "displayText": "🛋️ - J07"
            }
          },
          {
            "buttonText": {
              "displayText": "🛋️- L15"
              }
            }
        ];
        client.sendButtons(message.from, 'Escolha uma *poltrona* para a sessão', buttons, 'Clique no botão que corresponde a sua escolha:');
  };