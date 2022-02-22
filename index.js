
const venom = require('venom-bot');

var funcoes = require('./onMessage');
var rotina = require('./Rotina');
var consultar = require('./consulta');

venom
    .create(
        'Agenda Serviço',
        (base64Qr, asciiQR, attempts, urlCode) => {
            console.log(asciiQR); // Optional to log the QR in the terminal
            var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};

            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');

            var imageBuffer = response;
            require('fs').writeFile(
                'messages/QrCode.png',
                imageBuffer['data'],
                'binary',
                function(err) {
                    if (err != null) {
                        console.log(err);
                    }
                }
            );
        },

        undefined, { logQR: false }
    )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {

    funcoes.play(client);
    
    const CronJob = require('cron').CronJob
    const job = new CronJob('*/5 * * * * *', () => {        

        rotina.aviso(client);
        consultar.consulta(client)

    }, null, true, 'America/Sao_Paulo')

    

}
