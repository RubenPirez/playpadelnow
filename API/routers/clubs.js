// import express
const express = require("express");
//create router call function Router
const router = express.Router();
const authtoken = require('../config/authtoken');
const authrole_god = require('../config/authrole');
const db = require("../config/db");

// ONLY ADMIN
// add new club
	router.post('/add', [authtoken, authrole_god], async(req, resp) => {
		const result = await db('clubs').insert({
			"ID_user": req.body.id_user,
			"name"	: req.body.nombre,
			"phone"	: req.body.telefono,
			"email"	: req.body.email,
			"city"	: req.body.ciudad,	
			"address": req.body.direccion,
			"state"	: req.body.provincia,
			"CP": req.body.CP,
			"country": req.body.pais
		});
		console.log(result);
		return resp.json({'status': true, 'data':result[0]});
	});
	
// club data
	router.get('/get/:id', async(req, resp) => {
		const result = await db.select('clubs.*')
							.from('clubs')
							.where('clubs.ID', req.params.id)
							.leftJoin('courts', 'clubs.ID', 'courts.ID_club');
		
		if (result == 0 ){
			return resp.json({'status': false, 'error': "No se ha encontrado ningún club con el ID seleccionado"});
		} else {
			return resp.json({'status': true, 'data': result[0]});
		}
	});

// list clubs
	router.get('/list', async(req, resp) => {
		const result = await db.select('*').from('clubs');
		return resp.json({'status': true, 'data': result});	
	});

// edit club
	router.post('/edit/:id', [authtoken] , async(req, resp) => {
		const allow_data = ["name", "phone", "address", "gps"];
		var obj = {};

		allow_data.forEach(element => {
			if ( req.body[element] !== undefined ){
				obj[element] = req.body[element];
			}
		});

		await db('clubs').where('ID', req.params.id).update(obj);
		//console.log(req.body);
		return resp.json({'status': true});	
	});

// remove club
	router.post('/remove/:id', [authtoken, authrole_god], async(req, resp) => {
		await db('clubs').where('ID', req.params.id).del();
		return resp.json({'status': true});
	});

module.exports = router;

