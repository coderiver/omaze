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
// app.use(flash());
// app.use(multer());

// 

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'index', extname: '.hbs'}));

// app.set('views', __dirname + '/apps/made/views');

app.set('view engine', '.hbs');

app.use('/assets', express.static(__dirname + '/assets'));

var app_port = 8888;
console.log("Starting Made Application ");
app.listen(app_port, function() {
    console.warn("Listening on " + app_port, '/n to shut down press CTRL + C');
});

rootRequire('routes')(app);