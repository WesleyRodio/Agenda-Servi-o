
    const fs = require('fs')
    var bd = require('../../banco_dados/bd.agenda2');
    con2 = bd.BDAgenda2();
    const dadosdata = require('./dados.json');

    var sql = 'SELECT * FROM perfil WHERE status = ?'

    con2.query(sql, [1], function(err, result){
        if(err) throw err;

        result.forEach(element => {
            var saudacao = element['saudacao'];
            var descricao = element['descricao'];
            
            dadosdata.bem_vindo = {
                "saudacao": saudacao,
                "descricao": descricao,
                "suporte":{
                    "saudacao":"outro"
                }
            }
            console.log(dadosdata)
            const dadosJSON = JSON.stringify(dadosdata);
            fs.writeFileSync('messages/mais_options/dados.json', dadosJSON)
        })
    })
