
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../config/api";
import './styles.css';

const Favorites = () => {

	const [state, setState] = useState({data:[], error:false});

	useEffect(() => {
		API.get("/favorites/list").then(response => {
			if (response.status === false ) {
				setState({...state, error:response.error})
			} else {
				setState({...state, data:response.data})
			}
		})
	},[]);

	const rmvfavorite = (id) =>{
		API.post("/favorites/remove/" + id).then(response => {
			//console.log(id);
			//setState({...state})
		})
	}

	return(
		<div className="row mt-5">
			
			<table className="table table-striped table-hover favorites">
				<thead>
					<tr>
						<th scope="col">Club</th>
						<th scope="col">Dirección</th>
						<th scope="col">Ciudad</th>
						<th scope="col">Disponibilidad</th>
					</tr>
				</thead>
				<tbody>

				{ (state.error!=false ? <div className="row h4 justify-content-center mt-5">{state.error}</div> : "") }
				{
					state.data.map((element) => {
						//console.log(element);
						if ( element === undefined ){
							return "";
						}
					return(	
						<tr>
							<th scope="row">{element.name}</th>
							<td>{element.address}</td>
							<td>{element.city}</td>
							<td>
								<Link to="#" className="btn btn-success ">18:00</Link>
								<Link to="#" className="btn btn-success ">18:30</Link>
								<Link to="#" className="btn btn-success ">19:00</Link>
								<Link to="#" className="btn btn-success ">19:30</Link>
							</td>
							<td><Link to={'/app/clubs/get/' + element.ID_club} className="btn btn-outline-info">Ficha del Club</Link></td>
							<td><button className="btn btn-outline-info" onClick={rmvfavorite(element.ID_club)}>Eliminar de favoritos</button></td>
							{/* <td><button className="btn btn-outline-info">Eliminar de favoritos</button></td> */}
						</tr> )
					})
				}
					
				</tbody>
			</table>
		</div>
	)

}

export default Favorites;