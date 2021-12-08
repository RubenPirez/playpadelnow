// import express
const express = require("express");
const authtoken = require("../config/authtoken");
//create router call function Router
const router = express.Router();
// call db
const db = require('../config/db')

// user court reserve
	router.post('/new', [authtoken], async(req, resp) => {

		const result = await db('bookings').insert({
			"ID_user" :req.idUser,
			"ID_court" : req.body.pista,
			"start_time" : req.body.inicio,
			"end_time" : req.body.fin
		});
		resp.json({'status': true, 'data': result[0]});
	});

// delete court reserve
	router.post('/delete/:id', [authtoken], async(req, resp) => {
		await db('bookings').where('ID', req.params.id).del();
		return resp.json({'status': true});
	});

// list next user reserve
	router.get('/list_user_reserve', [authtoken], async(req, resp) => {

		var reserva = await db.select('start_time').from('bookings');
		
		var tmp = reserva.map(function(element) {
			let today = new Date();
			let fecha = new Date(element.start_time);
			if ( Date.parse(today) < Date.parse(fecha) ){
				return element;
			}
		});

		var result = tmp.filter(function (el) {
			return el != null;
		  });
		
		//console.log(tmp);
		return resp.json({'status': true, 'data': result});
});


// list historic user reserve
router.get('/list_historic_reserve', [authtoken], async(req, resp) => {

	var reserva = await db.select('start_time').from('bookings');
	
	var tmp = reserva.map(function(element) {
		let today = new Date();
		let fecha = new Date(element.start_time);
		if ( Date.parse(today) >= Date.parse(fecha) ){
			return element;
		}
	});

	var result = tmp.filter(function (el) {
		return el != null;
	  });
	
	//console.log(tmp);
	return resp.json({'status': true, 'data': result});
});

module.exports = router;