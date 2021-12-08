const Api = {

	endpoint: 'http://localhost:3000',

	save_token: function(token){
		localStorage.setItem('token', token);
	},

	get_token: function(){
		if ( localStorage.getItem('token') === null ){
			return false;
		} else {
			return localStorage.getItem('token');
		}
	},

	remove_token: function(){
		localStorage.removeItem('token');
	},

	post: async function(uri, obj={}, method='POST'){

		// URL
			const url_endpoint = this.endpoint + uri;

		// QUERY
			var response = await fetch(url_endpoint, {
				method: method,
				headers: {
					'Content-Type' : 'application/json',
					'token': this.get_token()
				},
				redirect: 'follow',
				body: JSON.stringify(obj)
			});

		return response.json();
	},

	get: async function(uri, obj={}){

		// URL
			const query = Object.keys(obj).map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])).join('&');
			const url_endpoint = this.endpoint+uri+'?'+query;

		// QUERY
			var response = await fetch(url_endpoint, {
				method: 'GET',
				headers: {
					'Content-Type' : 'application/json',
					'token': this.get_token()
				},
				redirect: 'follow',
			});

		// CONTROLAR RESPUESTA ( SI ES 200 OK, 401, 403, 404...)

		return response.json();

	},

	delete: function(uri, obj={}){
		return this.post(uri, obj, 'delete');
	}

}

export default Api;