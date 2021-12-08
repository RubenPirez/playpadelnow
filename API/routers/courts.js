// import express
const express = require("express");
const authtoken = require("../config/authtoken");
//create router call function Router
const router = express.Router();
// import db
const db = require('../config/db');

// add new court club
	router.post('/add/:idclub', [authtoken] , async(req, resp) => {
		
		const result = await db('courts')
		.insert({
			"ID_club" : req.params.idclub,
			"name" : req.body.nombre,
			"court_number" : req.body.numero_pista,
			"type" : req.body.tipo,
			"size" : req.body.size,
			"estructure" : req.body.material,
			"photo": req.body.foto
		})
		
		return resp.json({'status': true, 'data': result[0]});	
	});

// edit court club
	router.post('/edit/:id', [authtoken] , async(req, resp) => {
		const allow_data = ["name", "court_number", "type", "size", "estructure", "start_hour", "end_hour"];
		var obj = {};

		allow_data.forEach(element => {
			if ( req.body[element] !== undefined ){
				obj[element] = req.body[element];
			}
		});

		await db('courts').update(obj).where('ID', req.params.id);
		//console.log(req.body);
		return resp.json({'status': true});		
	});

// data court club
	router.get('/data/:idCourt', async(req, resp) => {
		const result = await db.select('*').from('courts').where('ID', req.params.idCourt);
		
		if (result == 0 ){
			return resp.json({'status': false, 'error': "No se ha encontado ninguna pista con el ID seleccionado"});
		} else {
			return resp.json({'status': true, 'data': result[0]});
		}
	});	

// list courts club
	router.get('/list/:idClub', async(req, resp) => {
		const result = await db.select('*').from('courts').where('ID_club', req.params.idClub);
		if ( result == 0 ){
			return resp.json({'status': false, 'error': 'No hay datos de pistas para el club seleccionado'});
		} else {
			return resp.json({'status': true, 'data': result});
		}		
	});

// remove court club
	router.post('/remove/:id', [authtoken] , async(req, resp) => {
		await db('courts').where('ID', req.params.id).del();
		return resp.json({'status': true});
	});

	
// list courts schedule
	router.post('/list/:idclub/:day', (req, resp) => {
		console.log(req.body);
		resp.json({'status': true, 'text': 'Eliminar pista número ' + req.params.id});
	});

module.exports = router;