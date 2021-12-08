import Logo from "../../components/logo";
import Adduser from "../../components/users/add";
import Userlogin from "../../components/users/login";
import { BrowserRouter, Link, Route } from "react-router-dom";
import React from "react";

const Login = () => {

	return(

		<React.Fragment>

			<div class="container p-5">
				<div class="row justify-content-center mt-5">
					<div class="row justify-content-center">
						<div class="col-md-3">
							<Logo></Logo>
						</div>
					</div>
					<div className="col-md-7 border border-secondary mt-5 p-4">
					<div>
						<div>
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">Nombre</label>
								<input type="text" className="form-control" id="name"></input>
								</div>
							<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
							<input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
							</div>
							<div className="mb-3">
							<label for="exampleInputPassword1" className="form-label">Contraseña</label>
							<input type="password" className="form-control" id="pass"></input>
							</div>
							<button type="submit" className="btn btn-outline-info mt-5"><Link to="/app">Crear Cuenta</Link></button>
						</div>	
					</div>
					</div>
				</div>
			</div>

		</React.Fragment>

	)

}

export default Login;