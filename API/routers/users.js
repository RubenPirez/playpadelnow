// import express
const express = require("express");
//create router call function Router
const router = express.Router();
// import db
const db = require("../config/db");
const authtoken = require('../config/authtoken');
const crypto = require("../helpers/crypto");


// ONLY ADMIN
// user list
router.get('/list', async(req, resp) => {
	const result = await db.select('email', 'user_rol', 'name', 'first_name', 'DNI', 'phone', 'city', 'CP').from('users');
	return resp.json({'status': true, 'data': result});
});

// ONLY ADMIN
// remove user
router.post('/remove', [authtoken], async(req, resp) => {
	await db('users').where('ID', req.idUser).del();
	return resp.json({'status': true});
});


//login
	router.post('/login', async (req, resp) => {

	// check user and password is true 	
		var result = await db.select(['ID','email', 'token', 'user_rol', 'name', 'first_name', 'DNI', 'phone', 'city', 'CP'])
							.where('email', req.body.user)
							.where('pass', crypto.sha1(req.body.pass))
							.from('users');
	// is false 
		if ( result.length == 0 ){
			return resp.json({'status' : false, 'error' : 'Usuario o password incorrectos'})
		}

	// is true generate new token
		var token = crypto.generate_token();

	// save new token en db
		await db('users').where('ID', result[0].ID).update('token', token);

	// return data user
		let resultado = result[0];
			//console.log(resultado.token);
		// token from first query is updated
		resultado.token = token; 
		//console.log(resultado.token);
		return resp.json({'status': true, 'data': resultado});
});

// user data
	router.get('/get', [authtoken], async(req, resp) => {
		const result = await db.select('email', 'user_rol', 'name', 'first_name', 'DNI', 'phone', 'city', 'CP')
								.from('users')
								.where('ID', req.idUser);
	//	console.log(result);
		if (result == 0 ){
			return resp.json({'status': false, 'error': "No se ha encontado ningún usuario con el ID seleccionado"});
		} else {
			return resp.json({'status': true, 'data': result[0]});
		}
});
	
// add new user
	router.post('/add', async(req, resp) => {
	// codify pass to sha1
		var tmp = crypto.sha1(req.body.pass); 
	//	console.log(tmp);

		const result = await db('users').insert({
			"email" : req.body.email,
			"pass"  : tmp,
			"name"  : req.body.name,
			"first_name" : req.body.first_name,
			"DNI"   : req.body.DNI,
			"phone" : req.body.phone,
			"city"  : req.body.city,
			"CP"    : req.body.CP
		});
		
		return resp.json({'status': true, 'data': result[0]}); 
});

// edit user
	router.post('/edit',[authtoken], async(req, resp) => {
		const allow_data = ["email", "name", "first_name", "DNI", "phone", "city", "CP", "avatar"];
		var obj = {};

		allow_data.forEach(element => {
			if ( req.body[element] !== undefined ){
				obj[element] = req.body[element];
			}
		});

		await db('users').update(obj).where('ID', req.idUser);
		//console.log(req.body);
		return resp.json({'status': true});
});

// change user password
	router.post('/change_pass', [authtoken], async(req, resp) => {
		var pass_bd = await db.select('pass').from('users').where('ID', req.idUser);
		var pass = crypto.sha1(req.body.pass);
		var new_pass = crypto.sha1(req.body.new_pass);
		var rpt_new_pass = crypto.sha1(req.body.rpt_new_pass);

		//console.log(pass_bd[0].pass);
		
		if ( pass_bd[0].pass == pass) {
			if ( new_pass == rpt_new_pass ){
				//console.log(new_pass);
				await db('users').update({'pass': new_pass}).where('ID', req.idUser);
				return resp.json({'status': false, 'text': 'Contraseña cambiada correctamente'})
			} else {
				return resp.json({'status': false, 'text': 'Las contraseñas no coinciden'});
			}
		} else {
			return resp.json({'status': false, 'text': 'Contraseña incorrecta'});
		} 

		//tmp = sha("123456");
		//console.log(tmp);
		//resp.json({'status': true});	
});

module.exports = router;