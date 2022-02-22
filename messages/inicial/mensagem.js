

exports.Resposta = function(client, message, palavra){
    var inicio = require('./mensagens.json');
    var aba_inicial = require('./introducao');
    var chave = 0; 

    inicio.intro1.forEach(function(elemento) {
        if(elemento == palavra){
            chave = 1;
        }
    });

    if(chave == 1 && message.isGroupMsg === false ) {
        aba_inicial.Resposta1(client, message);
    }

}