var fs = require('fs');

function readJSON(url, cb) {
    var jsonData;
    fs.readFile(url, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        jsonData = JSON.parse(data);
        cb(jsonData);
    });
}

module.exports = function(app){
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/campaign', function(req, res) {
        readJSON('data/full.json', function(data) {
            res.render('campaign', data);
        });
    });

    app.get('/campaigns', function(req, res) {
        readJSON('data/campaigns.json', function(data) {
            res.render('campaigns', data);
        });
    });

    app.get('/thank', function(req, res) {
        readJSON('data/thank.json', function(data) {
            res.render('thank', data);
        });
    });
};
