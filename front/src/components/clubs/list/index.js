
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../config/api";
import './styles.css';

const Listclub = () => {

	const [state, setState] = useState({data:[]});
	/*const [prueba, setPrueba] = useState({status:false});

	const addFavorite = (ID) => {
			API.post("/favorites/add", {ID_club:ID})
			setPrueba({...prueba, status:true})
			console.log(prueba.status);
	}*/

	useEffect(() =>{
		API.get("/clubs/list").then(response => {
			setState({...state, data:response.data})
			console.log(state.data);
		})
	},[])

	

	return(
		<div className="row mt-5 listclub">
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col">Club</th>
						<th scope="col">Dirección</th>
						<th scope="col">Ciudad</th>
						<th scope="col">Disponibilidad</th>
					</tr>
				</thead>
				<tbody>
				{
					state.data.map((element) => {
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
								<td><Link to={"/app/clubs/get/" + element.ID} className="btn btn-outline-info">Ficha del Club</Link></td>
								<td><button className="btn btn-outline-info" /*onClick={addFavorite(element.ID)}*/>Añadir a favoritos</button></td>
							</tr>
						)
					})
				}
				</tbody>
			</table>
		</div>
	)

}

export default Listclub;