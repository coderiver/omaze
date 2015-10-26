/*
    Load Global Definitions
*/
require('./define');

/*
    Initialize Application
 */

var path = require('path');
var express = require('express');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var compression = require('compression');
var bodyParser = require('body-parser');

var app = express();
app.use(flash());
app.use(multer());


var app_port = 8888;
console.log("Starting Made Application ");
app.listen(app_port, function() {
    console.warn("Listening on " + app_port, '/n to shut down press CTRL + C');
});

rootRequire('apps/made/routes')(app);