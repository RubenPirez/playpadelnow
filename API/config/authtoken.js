const db = require('./db');

// verify token to verify user capabilities

	const authtoken = async (req, resp, next) => {

		if ( req.headers.token !== undefined ){
	// token is sended on the header (method get haven't body)
			var token = req.headers.token;
		} else {
	// if there is no token
			return resp.status(401).json({'status' : false, 'error' : 'No hay token'});
		}
	// query to db
		const result = await db.select('ID', 'email', 'token', 'user_rol', 'name', 'first_name', 'DNI', 'phone', 'city', 'CP', 'avatar', 'created')
								.from('users')
								.where('token', token);
	// if token exists but it does not match with token in db
		if ( result.length == 0 ){
			return resp.status(401).json({'status' : false, 'error' : 'token caducado'});
		}
	// create request to send all data and another one to send user ID	
		req.tokendata = result[0];
		req.idUser = result[0].ID;

		next();
	}

module.exports = authtoken;