
// declare variables
const path = require('path');
const express = require('express');
const app = express();
const util = require('util');
const mysql = require('mysql');
const { Router } = require('./router/router.js');
const port = 3000;


// connect mysql
var host_database = {
    host: "db4free.net",
    user: "quanlynhankhau",
    password: "quanlynhankhau",
    database: "quanlynhankhau"
};
var host_database_2 = {
    host: "sql.freedb.tech",
    user: "freedb_tranphuc8a",
    password: "c98$vexU5sX9G?m",
    database: "freedb_quanlynhankhau"
};
var local_database = {
    host: "localhost",
    user: "root",
    password: "",
    database: "quanlynhankhau"
};

var connection = mysql.createConnection(host_database);
// var connection = mysql.createConnection(local_database);

console.log("Connecting to mysql host...");
connection.connect(function (err) {
    if (err) {
        console.log("Connect mysql failed!");
        console.log(err);
        return;
    }
    console.log("Connected to mysql on port 3306");

    connection.my_query = util.promisify(connection.query).bind(connection);

    // routes
    var router = new Router(app);
    router.route();

    app.get('/', (req, res) => {
        res.send("Welcome to QUANLYNHANKHAU Nhập môn Công nghệ phần mềm");
    });



    // run server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);

    });
});


module.exports = { app, connection };

