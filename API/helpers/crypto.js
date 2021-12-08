
function sha1 (string){
	var crypto = require('crypto');
	var shasum = crypto.createHash('sha1');
	// create a string to increase security. this string add it to pass provide for user and hash to sha1
	var SALT = 'playpadelnowsecurity';
	shasum.update(SALT+string);
	return shasum.digest('hex');
}

function generate_token(){
	var string = Math.random()+" "+Math.random() + Date();
	return sha1(string);
}

// exporta un objeto por si se le quieren añadir más métodos más adelante, poder exportarlos todos
module.exports = {sha1 : sha1, generate_token : generate_token};
