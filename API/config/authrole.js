// check user role
	const authrole_god = async (req, resp, next) => {

		if ( req.tokendata.user_rol !== 'god' ){
			return resp.status(403).json({'status': false, 'error': 'No tiene permisos para esta tarea'});
		} 
		
		next();
	}

	module.exports = authrole_god;