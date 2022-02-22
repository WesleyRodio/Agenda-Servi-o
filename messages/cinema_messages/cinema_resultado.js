exports.cine_result = function(client, message) {

    client
        .sendText(message.from, `Você tem *agendado* para ir a barbearia.

📆Dia: *Terça-feira / Quinta-feira / Sábado*
🕦Horário: *17:00 / 18:00 / 19:00* da noite
🛋️Na poltrona: *A25 / J07 / L15* 
                
Te esperamos lá! 👋 `);

};