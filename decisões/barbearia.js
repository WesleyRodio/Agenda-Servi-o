//Variáveis da barbearia
var barba_h = require("../messages/barber_messages/barbearia_hours");

exports.decisao3 = function(client,message) {

    if(message.body === "💈 Barbearia" && message.isGroupMsg === false) {
        barba_h.barber_horario(client, message);
    } 
};
