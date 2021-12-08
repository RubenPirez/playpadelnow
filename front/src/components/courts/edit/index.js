
const Editcourt = () => {

	return(
		<div className="row justify-content-center mt-3">
			<div className="col-md-6">
				<div className="mb-3">
					<label className="form-label">Club</label>
					<input type="text" className="form-control" id="club_name" value="Club de Padel Madrid" disabled></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Nombre de la Pista</label>
					<input type="text" className="form-control" id="court_name" value="Pista Mapfre" aria-describedby="emailHelp"></input>
				</div>
				<div className="mb-4">
					<label className="form-label">Número de Pista</label>
					<input type="text" className="form-control" id="court_number" value="1" aria-describedby="emailHelp"></input>
				</div>
				<select className="form-select mb-4">
					<option selected value="1">Indoor</option>
					<option value="2">Outdorr</option>
					<option value="3">Cubierta</option>
				</select>
				<select className="form-select mb-4">
					<option value="1">Individual</option>
					<option selected value="2">Dobles</option>
				</select>
				<select className="form-select mb-4">
					<option value="1">Cristal</option>
					<option value="2">Muro</option>
					<option selected value="3">Panorámica</option>
				</select>
				<div className="form-label mb-3 mt-3">
					<label className="form-label">Horario de apertura</label>
					<input type="time" name="open_hour" value="08:00" min="00:00" max="23:30" step="1800" />
					<label className="form-label ms-5">Horario de cierre</label>
					<input type="time" name="close_hour" value="23:00" min="00:00" max="23:30" step="1800" />
				</div>
				<button type="submit" className="btn btn-outline-info">Guardar</button>
			</div>
		</div>
	)

}

export default Editcourt;