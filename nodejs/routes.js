var fs = require('fs');

module.exports = function(app){
    app.get('/', function(req, res) {
        // res.send("Hello World")
        res.render('index');
    });
    app.get('/campaign', function(req, res) {
    	var data = fs.readFile('data/full.json', 'utf8', function(err, data) {
    		if (err) throw err;
	        res.render('campaign', JSON.parse(data));
    	});
    });
};
