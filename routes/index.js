var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var number = req.query.number;
	console.log(req.query);
	
	if (typeof number !== 'undefined') {
		req.session.lastNumber = number;
	}
	
	res.render('index', { title: 'Express', number: req.session.lastNumber });
});

module.exports = router;
