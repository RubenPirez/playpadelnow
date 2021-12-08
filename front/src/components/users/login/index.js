import React from "react"
import { Link } from "react-router-dom";
const Userlogin = () => {

	return(
		<React.Fragment>
			<div>
				<div className="mb-3">
					<label className="form-label">Correo electrónico</label>
					<input type="email" className="form-control" id="" aria-describedby="emailHelp"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Contraseña</label>
					<input type="password" className="form-control" id=""></input>
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id=""></input>
					<label className="form-check-label">Recordar</label>
				</div>
				<button type="submit" className="btn btn-outline-info mt-2">Entrar</button>
			</div>
			<div className="row">
				<div className="col-md-7 mt-4">
					<p>¿Olvidaste la contraseña? <a href="" className="link-info"> Recuperar Contraseña</a> </p>
				</div>
				<div className="col-md-7">
					<p>¿No tienes cuenta? <Link to="/users/new" className="link-primary"> ¡Regístrate! </Link> </p>
				</div>
			</div>	
		</React.Fragment>
	)

}

export default Userlogin;