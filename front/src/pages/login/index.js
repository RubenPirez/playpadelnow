import Logo from "../../components/logo";
import Adduser from "../../components/users/add";
import Userlogin from "../../components/users/login";
import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import API from "../../config/api";
import { Redirect } from "react-router";

const Login = (props) => {

	const [state, setState] = useState({error: false, redirect: false});

	const trylogin = () => {
		
		const user = document.getElementById("user").value;
		const pass = document.getElementById("password").value;
		const obj = {user:user, pass:pass}

		//console.log(obj);
		
		API.post("/users/login", obj).then(response => {
			if ( response.status === false ){
				setState({...state, 'error': response.error} )
			} else {
				API.save_token(response.data.token);
				setState({ ...state, redirect: <Redirect to='/app/favorites'></Redirect> });
				//console.log(response);
			}
		});
	}
	return(

		<React.Fragment>

			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="row justify-content-center">
						<div className="col-md-3">
							<Logo></Logo>
						</div>
					</div>
					<div className="col-md-7 border border-secondary mt-5 p-4">
					<div>
					
						{ (state.error!=false ? <div className="alert alert-danger">{state.error}</div> : "") }
						{ (state.redirect!=false ? state.redirect : "") }
					
						<div className="mb-3">
							<label className="form-label">Correo electrónico</label>
							<input type="email" className="form-control" id="user" aria-describedby="emailHelp"></input>
						</div>
						<div className="mb-3">
							<label className="form-label">Contraseña</label>
							<input type="password" className="form-control" id="password"></input>
						</div>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id=""></input>
							<label className="form-check-label">Recordar</label>
						</div>
						<button className="btn btn-outline-info mt-2" onClick={trylogin}>Entrar</button>
					</div>
					<div className="row">
						<div className="col-md-7 mt-4">
							<p>¿Olvidaste la contraseña? <a href="" className="link-info"> Recuperar Contraseña</a> </p>
						</div>
						<div className="col-md-7">
							<p>¿No tienes cuenta? <Link to="/registro" className="link-primary"> ¡Regístrate! </Link> </p>
						</div>
					</div>	
						
					</div>
				</div>
			</div>

		</React.Fragment>

	)

}

export default Login;