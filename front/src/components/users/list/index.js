
/*
	<div  className="row mt-5">
				<Userlist/>
			</div>
	*/

const Userlist = () => {

	return(
			<div>
				<table className="table table-striped table-hover">
					<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellidos</th>
						<th scope="col">DNI</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Rubén</td>
						<td>Pírez Fernández</td>
						<td>47021682E</td>
						<td className="text-info">Dar de Baja</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Lucía</td>
						<td>Aimar López</td>
						<td>32546981L</td>
						<td className="text-info">Dar de Baja</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Antonio</td>
						<td>García Luz</td>
						<td>02543698K</td>
						<td className="text-info">Dar de Baja</td>
					</tr>
					</tbody>
				</table>
			</div>
	)

}

export default Userlist;