'use strict';

var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
var router = express.Router();
var MemberService = require('./api/MemberService.js');
var fieldserver = require('./api/fieldserver.js');
var routes = require('./routes/index.js');
var account = require('./routes/account.js');

var port = process.env.PORT || 1337;

var app = express();
//app.use(cookieParser());
// app.use(session({ secret: 'test', name: "user", cookie: { maxAge: 6000 } }));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// =====================
routes(router);
app.use('/api', MemberService);
app.use('/field',fieldserver);
app.use('/',router);
app.use('/account', account);
app.use('/login',account)


// =====================




app.listen(port);
console.log(`server listening on: ${port}`);
