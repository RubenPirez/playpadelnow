
/**
 * PAGE -> login-register
  <div className="row justify-content-center">
				<Addclub></Addclub>
				</div>
 */

const Addclub = () => {

	return(
		<div class="col-md-7 border border-secondary mt-5 p-4">
			<div>
				<div class="mb-3">
					<label  class="form-label">Nombre del Club</label>
					<input type="text" class="form-control" id="name"></input>
					</div>
				<div class="mb-3">
					<label  class="form-label">Correo electrónico</label>
					<input type="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
				</div>
				<div class="mb-3">
					<label  class="form-label">Dirección</label>
					<input type="text" class="form-control" id="address"></input>
				</div>
				<div class="mb-3">
					<label  class="form-label">Ciudad</label>
					<input type="text" class="form-control" id="city"></input>
				</div>
				<div class="mb-3">
					<label  class="form-label">Código Postal</label>
					<input type="text" class="form-control" id="CP"></input>
				</div>
				<button type="submit" class="btn btn-outline-info mt-5">Crear Cuenta</button>
			</div>	
		</div>
	)

}

export default Addclub;