// import express
const express = require("express");
//create router call function Router
const router = express.Router();


// list user payments methods
	router.get('/list_user_payments/:id', (req, resp) => {
		resp.json({'status': true, 'text': 'Métodos de pago del usuario ' + req.params.id});
	});
// add new user payment method
	router.post('/add_payment/:id', (req, resp) => {
		console.log(req.body);
		resp.json({'status': true, 'text': 'Añadir método de pago al usuario ' + req.params.id});
	});

module.exports = router;