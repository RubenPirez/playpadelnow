import { Link } from "react-router-dom";

const Listhistoricbooking = () =>{

	return(
		<div className="row mt-5">
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col">Fecha</th>
						<th scope="col">Club</th>
						<th scope="col">Dirección</th>
						<th scope="col">Pista</th>
						<th scope="col">Hora Inicio</th>
						<th scope="col">Hora Finalización</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">18/10/2021</th>
						<td>Club de Pádel Madrid</td>
						<td>Calle Principal 16</td>
						<td>Pista Mapfre</td>
						<td><p className="btn btn-danger"> 20:30</p></td>
						<td><p className="btn btn-danger"> 22:00</p></td>
						<td><Link to="/app/clubs/get" className="btn btn-outline-info">Ficha del Club</Link></td>
						<td><Link to=""  className="btn btn-outline-info">Factura</Link></td>
					</tr>
					<tr>
						<th scope="row">20/10/2021</th>
						<td>Club de Pádel Madrid</td>
						<td>Calle Principal 16</td>
						<td>Pista Mutua Madrileña</td>
						<td> <p className="btn btn-danger"> 20:30</p></td>
						<td> <p className="btn btn-danger"> 22:00</p></td>
						<td><Link to="/app/clubs/get" className="btn btn-outline-info">Ficha del Club</Link></td>
						<td><Link to=""  className="btn btn-outline-info">Factura</Link></td>
					</tr>
				</tbody>
			</table>
		</div>
	)

}

export default Listhistoricbooking;