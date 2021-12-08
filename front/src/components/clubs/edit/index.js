
import React from "react";
import './styles.css';
/**
 <div className="row justify-content-center">
				<Editclub></Editclub>
			</div>
 */

const Editclub = () => {

	return(
		<div class="row justify-content-center mt-3 mb-5">
			<div class="col-md-6">
				<form>
					<div class="mb-3">
					<label class="form-label">Nombre</label>
					<input type="text" class="form-control" id="club_name" value="Club de Padel Madrid" aria-describedby="emailHelp"></input>
					</div>
					<div class="mb-3">
						<label class="form-label">Dirección</label>
						<input type="text" class="form-control" id="club_address" value="Calle Principal 16" aria-describedby="emailHelp"></input>
					</div>
					<div class="mb-3">
						<label class="form-label">Ciudad</label>
						<input type="text" class="form-control" id="club-city" value="Madrid" aria-describedby="emailHelp"></input>
					</div>
					<div class="mb-3">
						<label class="form-label">Código Postal</label>
						<input type="text" class="form-control" id="club-cp" value="28001" aria-describedby="emailHelp"></input>
					</div>
					<div class="mb-3">
						<label class="form-label">Teléfono</label>
						<input type="text" class="form-control" id="club-phone" value="619909996" aria-describedby="emailHelp"></input>
					</div>
					<div class="mb-3">
						<label class="form-label">Correo Electrónico</label>
						<input type="text" class="form-control" id="club-email" value="clubpadelmadrid@madrid.com" aria-describedby="emailHelp"></input>
					</div>
					<button type="submit" class="btn btn-outline-info">Guardar</button>
				</form>
			</div>
		</div>	
	)

}

export default Editclub;