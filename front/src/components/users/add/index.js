
const Adduser = () => {

	return (

		<div className="col-md-7 border border-secondary mt-5 p-4">
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
			<button type="submit" className="btn btn-outline-info mt-5">Crear Cuenta</button>
		</div>

	)

}

export default Adduser;