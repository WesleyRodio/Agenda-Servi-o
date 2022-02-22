//Variáveis do cinema
var cine_h = require("../messages/cinema_messages/cinema_hours");
var cine_d = require("../messages/cinema_messages/cinema_day");
var cine_p = require("../messages/cinema_messages/cinema_poltrona");
var cine_r = require("../messages/cinema_messages/cinema_resultado");


exports.decisao4 = function(client, message) {

    //Cinema

    if(message.body === "🎥 Cinema" && message.isGroupMsg === false) {
        cine_h.cinema_horário(client, message);
    } else

    if(message.body === "🕔 17:00 horas" && message.isGroupMsg === false) {
        cine_d.cinema_dia(client, message);
    } else
    
    if(message.body === "🕕 18:00 horas" && message.isGroupMsg === false) {
        cine_d.cinema_dia(client, message);
    } else

    if(message.body === "🕖 19:00 horas" && message.isGroupMsg === false) {
        cine_d.cinema_dia(client, message);
    } else

    if(message.body === "Terça-feira" && message.isGroupMsg === false) {
        cine_p.cinema_poltrona(client, message);
    } else

    if(message.body === "Quinta-feira" && message.isGroupMsg === false) {
        cine_p.cinema_poltrona(client, message);
    } else

    if(message.body === "Sábado" && message.isGroupMsg === false) {
        cine_p.cinema_poltrona(client, message);
    } else

    if(message.body === "🛋️- A25" && message.isGroupMsg === false) {
        cine_r.cine_result(client, message);
    } else

    if(message.body === "🛋️- J07" && message.isGroupMsg === false) {
        cine_r.cine_result(client, message);
    } else

    if(message.body === "🛋️- L15" && message.isGroupMsg === false) {
        cine_r.cine_result(client, message);
    } 

};