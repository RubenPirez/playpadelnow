
const Changepass = () => {

	return(
		<div className="row justify-content-center">
			<div className="col-md-7 border border-secondary mt-5 p-4">
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Contraseña Actual</label>
					<input type="text" className="form-control" id="name"></input>
					</div>
				<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">Nueva Contraseña</label>
				<input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
				</div>
				<div className="mb-3">
				<label for="exampleInputPassword1" className="form-label">Repite la Nueva Contraseña</label>
				<input type="password" className="form-control" id="pass"></input>
				</div>
				<button type="submit" className="btn btn-outline-secondary mt-5">Guardar</button>
			</div>	
		</div>
	)

}

export default Changepass;