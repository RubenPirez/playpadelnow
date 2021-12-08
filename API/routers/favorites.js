// import express
const express = require("express");
//create router call function Router
const router = express.Router();
const authtoken = require('../config/authtoken');

const db = require("../config/db");

// add favorite
router.post('/add', [authtoken], async(req, resp) =>{

	const result = await db('favorites').insert({'ID_club' : req.body.club, 'ID_user': req.idUser});
	return resp.json({'status': true, 'data': result[0]});
});

// list favorites
router.get('/list', [authtoken], async(req, resp) => {

	//const result = await db.select('*').where('ID_user', req.idUser).from('favorites');

	const result = await db.select(['favorites.*','clubs.name','clubs.address','clubs.city','clubs.phone'])
					.where('favorites.ID_user', req.idUser)
					.from('favorites')
					.leftJoin('clubs', 'favorites.ID_club', 'clubs.ID');



	if ( result == 0 ){
		return resp.json({'status': false, 'error': 'No se han encontrado clubs favoritos'});
	} else {
		return resp.json({'status': true, 'data': result})
	}
})

// remove favorite
router.post('/remove/:id', [authtoken], async(req, resp) => {

	await db('favorites').where('ID', req.params.id).del();
	return resp.json({'status': true});
});

module.exports = router;