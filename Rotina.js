var bd = require('./banco_dados/bd.agenda2');
con2 = bd.BDAgenda2();
var consul = require('./consulta');

exports.aviso = function(client, message){
    
        var sql = 'SELECT * FROM agendamento_cliente WHERE status = ? AND aviso = ?';
    
        con2.query(sql,[1, 0], function(err, result){
            
            if (err) throw err;
            
            result.forEach(element => {
    
                var mydate = new Date();
                var hora1    = mydate.getHours();
                var hora2 = parseInt(element['horario_inicio'].substring(0,2));
    
                var min1     = mydate.getMinutes();
                var min2 = parseInt(element['horario_inicio'].substring(3,5));
    
                var seg1     = mydate.getSeconds();
                var seg2 = parseInt(element['horario_inicio'].substring(6,8)); 
    
                var pessoa = element['telefone'];
    
                    function comparar(num1, num2, operacao) {
                        if(operacao == '-') {
                            return num1 - num2;
                        }
                    }
    
                var resultx = Math.abs(comparar(hora2, hora1, '-')) + Math.abs(comparar(seg2, seg1, '-'));;
                var resulty = Math.abs(comparar(min2, min1, '-'));
    
                if(resultx == 0 || resultx == 1 && resulty === 30) {
    
                var sql2 = "UPDATE agendamento_cliente SET aviso = ? WHERE telefone = ? AND status = ?";
                var telefone = element['telefone'];
    
                con2.query(sql2,[1, telefone, 1], function(err, result){
                if(err) throw err;
                client.sendText(pessoa, 'Falta meia hora para o seu agendamento das ' + hora2 + ' hora(as).');
                })
    
                }
         
            })
        })
}

/* var sql = "UPDATE cliente SET aceito = ? WHERE numero = ?";

        con.query(sql,[1, '554984169437@c.us'], function(err, result){
            if(err) throw err;

            result.forEach(element => {
            })
        })
    



 Script base de onde foi tirado a ideia:

    function somaSubtracao(num1, num2, somaSubtracao) {
    if (somaSubtracao == "+") {
        return num1 + num2;
    } else if (somaSubtracao == "-") {
        return num1 - num2;
    } else {
        return "nenhuma das opções";
    }
}

console.log(somaSubtracao(3, 6, '+'));
console.log(somaSubtracao(3, 6, '-')); 
console.log(somaSubtracao(3, 6));




 result.forEach(element => {

            var mydate = new Date();
            var hora1    = mydate.getHours();
            var hora2 = parseInt(element['horario'].substring(0,2));

            var min1     = mydate.getMinutes();
            var min2 = parseInt(element['horario'].substring(3,5));

            var seg1     = mydate.getSeconds();
            var seg2 = parseInt(element['horario'].substring(6,8)); 
            
            var pessoa = element['numero'];

                function comparar(num1, num2, operacao) {
                    if(operacao == '-') {
                        return num1 - num2;
                    } else if(element['servico'] == null) {}
                }

                var resultx = Math.abs(comparar(hora2, hora1, '-')) + Math.abs(comparar(seg2, seg1, '-'));;
                var resulty = Math.abs(comparar(min2, min1, '-'));

                if(resultx == 0 || resultx == 1 & resulty == 30) {
                    client.sendText(pessoa, 'Falta meia hora para o seu agendamento das ' + hora1 + ' hora(as).');

                    var sql2 = "UPDATE cliente SET aceito = ? WHERE aceito = ?";

                    con.query(sql2,[1, 0], function (err, result) {
                        if(err) throw err;
                    })
                }
                console.log('Oi');
            }); */