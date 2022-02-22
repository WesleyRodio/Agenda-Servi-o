exports.textoPerso = function(client, message){
    const buttons = [
        {
          "buttonText": {
            "displayText": "🖌️ Personalizar"
            }
          }
        ]
      client.sendButtons(message.from, `Escolha quais as opções que deseja.`, buttons, 'Clique no botão que corresponda a sua escolha:')
}