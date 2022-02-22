exports.BDAgenda = function(){

    var mysql = require('mysql');

    var connect = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "",
        database: "agenda"

    });

    return connect;

};