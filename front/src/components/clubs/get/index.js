
import React, { useEffect, useState } from "react";
import Api from "../../../config/api";
import './styles.css';

const Getclub = (props) => {
	
	const [state, setState] = useState({data:{}, loaded:false, error:false});
	const [stateB, setStateB] = useState({data:[], loaded:false, error:false});

	useEffect(() => {
		Api.get("/clubs/get/" + props.id).then(response => {
			setState( {data:response.data, loaded:true} )
		//	console.log(state.data);
		})
	},[])

	useEffect(() => {
		Api.get("/courts/list/" + props.id).then(response => {
			if ( response.status === false ){
				setStateB( {...stateB, error:response.error})
			//	console.log(stateB.error);
			} else {
				setStateB( {...stateB, data:response.data, loaded:true})
			//	console.log(stateB.data);
			}	
		})
	},[])

	if ( state.loaded == false ){ return (<h3>Cargando datos...</h3>);}

	return(
		<React.Fragment>
			<div className="row justify-content-center getclub">
				<div className="row justify-content-around">
					<div className="col-md-7 card text-center mt-5">
						<div className="card-body">
						<h5 className="card-title fs-2"><img src= {state.data.logo}></img>{state.data.name}</h5>
					</div>
					<ul className="list-group list-group-flush">
					<li className="list-group-item">{state.data.address + ' - ' + state.data.city}</li>
					<li className="list-group-item">{state.data.CP + ' - ' + state.data.state}</li>
					<li className="list-group-item">{state.data.phone}</li>
					<li className="list-group-item fw-bold">{state.data.email}</li>
					</ul>
				</div>

				<div className="col-md-4 getclub">
					<div className="text-center mt-5">
						<h3> Servicios </h3>
						<i title="Parking Gratuito" className="fas fa-parking"></i>
						<i title="Taquillas" className="fas fa-key"></i>
						<i title="Vestuarios" className="fas fa-shower"></i>
						<i title="Tienda" className="fas fa-store"></i>
						<i title="Cafetería" className="fas fa-coffee"></i>
						<i title="Acceso Minusválidos" className="fas fa-wheelchair"></i>
						<i title="Restaurante" className="fas fa-utensils"></i>
						<i title="Alquiler de Material" className="fas fa-quidditch"></i>
						<i title="Parking de pago" className="fas fa-coins"></i>
						<i title="Wifi" className="fas fa-wifi"></i>
						<i title="Fisioterapia" className="fas fa-notes-medical"></i>
						<i title="Vending" className="fas fa-cookie"></i>
					</div>
					
				</div>
				</div>
				<div className="row justify-content-center mt-5">
					<div className="tg-wrap">
						<table className="tg table table-striped">
							<thead>
								<tr>
									<th className="tg-j1i3"></th>
									<th className="tg-j1i3">07</th>
									<th className="tg-j1i3">08</th>
									<th className="tg-j1i3">09</th>
									<th className="tg-j1i3">10</th>
									<th className="tg-j1i3">11</th>
									<th className="tg-j1i3">12</th>
									<th className="tg-j1i3">13</th>
									<th className="tg-j1i3">14</th>
									<th className="tg-j1i3">15</th>
									<th className="tg-j1i3">16</th>
									<th className="tg-j1i3">17</th>
									<th className="tg-j1i3">18</th>
									<th className="tg-j1i3">19</th>
									<th className="tg-j1i3">20</th>
									<th className="tg-j1i3">21</th>
									<th className="tg-j1i3">22</th>
									<th className="tg-j1i3">23</th>
								</tr>
							</thead>
							<tbody>
							{ (stateB.error != false ? <div className="row h4 justify-content-center mt-5">{stateB.error}</div> : "") }
							{
								stateB.data.map((element) => {
									if ( element === undefined ){
										return "";
									}
									//console.log(element.name);
									return(
										<tr>
											<td className="tg-0pky">{element.name}</td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
											<td className="tg-0pky"></td>
										</tr>
									)
								})
							}	
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</React.Fragment>
	)

}

export default Getclub;