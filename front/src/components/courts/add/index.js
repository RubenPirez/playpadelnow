
const Addcourt = () => {

	return(
		<div className="row justify-content-center mt-5">
			<div className="col-md-6">
				<div>
					<div className="mb-3">
					<label className="form-label">Club</label>
					<input type="text" className="form-control" id="club_name" value="Club de Padel Madrid" disabled></input>
					</div>
					<div className="mb-3">
						<label className="form-label">Nombre de la Pista</label>
						<input type="text" className="form-control" aria-describedby="emailHelp"></input>
					</div>
					<div className="mb-4">
						<label className="form-label">Número de Pista</label>
						<input type="text" className="form-control" aria-describedby="emailHelp"></input>
					</div>
					<select className="form-select mb-4">
						<option selected>Tipo de Pista</option>
						<option value="1">Indoor</option>
						<option value="2">Outdorr</option>
						<option value="3">Cubierta</option>
					</select>
					<select className="form-select mb-4">
						<option selected>Tamaño</option>
						<option value="1">Individual</option>
						<option value="2">Dobles</option>
					</select>
					<select className="form-select mb-4">
						<option selected>Estructura</option>
						<option value="1">Cristal</option>
						<option value="2">Muro</option>
						<option value="3">Panorámica</option>
					</select>
					<div className="form-label mb-3 mt-3">
						<label className="form-label">Horario de apertura</label>
						<input type="time" name="hora" min="00:00" max="23:30" step="1800" />
						<label className="form-label ms-5">Horario de cierre</label>
						<input type="time" name="hora" min="00:00" max="23:30" step="1800" />
					</div>
					<button type="submit" className="btn btn-outline-info">Guardar</button>
				</div>
			</div>
		</div>
	)

}

export default Addcourt;