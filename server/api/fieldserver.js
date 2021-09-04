var express = require('express');
var apirouter = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "172.17.0.2",
    user: "root",
    password: "123456",
    database:"fileds",
    port:"3306"
})

// search
apirouter.route("/allfield").get(function (req, res) {

    con.query("SELECT * FROM fileds.followingfields", function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(result);
            // console.log(result)
        }
    })

});

//select
apirouter.route("/select/:value").get(function (req, res) {
    var sql = "SELECT "+req.params.value+" FROM fileds.followingfields;"
    // console.log(req.params.value)
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(result);
            // console.log(result)
        }
    })

});



module.exports = apirouter;
