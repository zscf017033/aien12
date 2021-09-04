var express = require('express');
var router = express.Router();

router.route('/login').get(function (req, res) {
    res.render('pages/account/login');
}).post(function (req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
})

module.exports = router;