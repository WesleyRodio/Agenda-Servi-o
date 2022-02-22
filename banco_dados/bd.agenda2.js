exports.BDAgenda2 = function(){

    var mysql = require('mysql');

    var connect = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "",
        database: "agenda2"

    });

    return connect;

};