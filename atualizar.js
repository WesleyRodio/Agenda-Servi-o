const fs = require('fs')

var db = require('./banco_dados/bd.agenda2')
con2 = db.BDAgenda2();

const teste1 = require('./id_agendamento.json');
var sql = 'SELECT * FROM perfil WHERE status = ?'
var sql2 = 'SELECT * FROM agendamento_cliente where status = ?'

con2.query(sql, [1], function (err, result){
    if (err) throw err;

    con2.query(sql2, [1], function (err, result2){
        if (err) throw err;

        result2.forEach(element => {
            var nome = element['nome_cliente']
            
            result.forEach(element => {
                
                var saudacao = element['saudacao'];
                var descricao = element['descricao'];
                teste1.demonstracao = {
                    "saudacao": saudacao,
                    "descricao": descricao
                }
            
            
                var stringId = JSON.stringify(teste1)

                console.log(stringId)
            
                /* fs.writeFile('./id_agendamento.json', stringId,{enconding:'utf-8',flag: 'w+'}, function (err) {
                    if (err) throw err;
                    console.log('Arquivo salvo!');
                }); */

                fs.writeFileSync("id_agendamento.json", stringId);
            
            })
        })
        
    })
    

    
})

