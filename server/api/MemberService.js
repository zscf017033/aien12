var express = require('express');
var apirouter = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "172.17.0.2",
    user: "root",
    password: "123456",
    database: "fileds",
    port:3306,
})




//=====================

// login
apirouter.route('/login').get(function (req, res) {
    var account = req.query['account'];
    var password = req.query['password'];
    var sql = "SELECT * FROM `member` where member_acc = '" + account + "';";
    con.query(sql, function (err, result) {
        // console.log(sql)
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
})
// account
apirouter.route('/account/:member_acc').get(function (req, res) {
    var sql = "SELECT * FROM `member` where member_acc = '" + req.params.member_acc + "';";
    con.query(sql, function (err, result) {
        // console.log(sql)
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
})


//=====================
module.exports = apirouter;
