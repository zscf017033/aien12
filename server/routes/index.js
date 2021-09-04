'use strict';

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render("pages/Main/index");
    })
    router.get('/field', function (req, res) {
        res.render("pages/Main/field");
    })


};

