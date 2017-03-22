var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);

var db = require(libs + 'db/mongoose');
var Customer = require(libs + 'model/customer');

// router.get('/', passport.authenticate('bearer', { session: false }), function(req, res) {
router.get('/', function(req, res) {
	Customer.find(function (err, Customers) {
		if (!err) {
			return res.json(Customers);
		} else {
			res.statusCode = 500;

			log.error('Internal error(%d): %s',res.statusCode,err.message);

			return res.json({
				error: 'Server error'
			});
		}
	});
});

router.post('/', function(req, res) {

	var Customer = new Customer({
		name: req.body.name,
		tel: req.body.telephone,
		title: req.body.title,
		company: req.body.company
	});

	Customer.save(function (err) {
		if (!err) {
			log.info("New Customer created with id: %s", Customer.id);
			console.log('New cusomer created : %s', Customer.id);
			return res.json({
				status: 'OK',
				Customer:Customer
			});
		} else {
			if(err.name === 'ValidationError') {
				res.statusCode = 400;
				res.json({
					error: 'Validation error'
				});
			} else {
				res.statusCode = 500;

				log.error('Internal error(%d): %s', res.statusCode, err.message);

				res.json({
					error: 'Server error'
				});
			}
		}
	});
});

router.get('/:id', function(req, res) {

	Customer.findById(req.params.id, function (err, Customer) {

		if(!Customer) {
			res.statusCode = 404;

			return res.json({
				error: 'Not found'
			});
		}

		if (!err) {
			return res.json({
				status: 'OK',
				Customer:Customer
			});
		} else {
			res.statusCode = 500;
			log.error('Internal error(%d): %s',res.statusCode,err.message);

			return res.json({
				error: 'Server error'
			});
		}
	});
});

router.put('/:id', function (req, res){
	var CustomerId = req.params.id;

	Customer.findById(CustomerId, function (err, Customer) {
		if(!Customer) {
			res.statusCode = 404;
			log.error('Customer with id: %s Not Found', CustomerId);
			return res.json({
				error: 'Not found'
			});
		}

		Customer.name = req.body.name;
		Customer.title = req.body.title;
		Customer.tel = req.body.telephone;
		Customer.company = req.body.company;

		Customer.save(function (err) {
			if (!err) {
				log.info("Customer with id: %s updated", Customer.id);
				return res.json({
					status: 'OK',
					Customer:Customer
				});
			} else {
				if(err.name === 'ValidationError') {
					res.statusCode = 400;
					return res.json({
						error: 'Validation error'
					});
				} else {
					res.statusCode = 500;

					return res.json({
						error: 'Server error'
					});
				}
				log.error('Internal error (%d): %s', res.statusCode, err.message);
			}
		});
	});
});

module.exports = router;
