import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../config/api";
import './styles.css';

const Listcourt = (props) =>{

	//console.log('PISTAS', props.id);

	const [state, setState] = useState({data:[], error:false});

	useEffect(() => {
		API.get("/courts/list/"+props.id).then(response => {
			//console.log('DATACOURTS', response.data);
			if (response.status === false ) {
				setState({...state, error:response.error})
			} else {
				setState({...state, data:response.data})
			}

		})
	},[])
	

	return(
		<React.Fragment>
			<div className="row  row-cols-md-4 g-4 justify-content-center courtlist">

			{ (state.error!=false ? <div className="row h4 mt-5">{state.error}</div> : "") }
					{
						state.data.map((element) => {
							console.log('ELEMENT', element);
							if ( element === undefined ){
								return "";
							}
							return(
								<div className="col">
									<div className="card h-100 mt-5 text-center">
										<Link to={"/app/courts/get/" + element.ID}><img src={element.photo} className="card-img-top" alt="..."></img></Link>
										<div className="card-body">
											<h5 className="card-title">{element.name}</h5>
											<ul className="list-group list-group-flush">
												<li className="list-group-item">{'Pista Número: ' + element.court_number}</li>
												<li className="list-group-item">{element.type}</li>
												<li className="list-group-item">{element.size}</li>
												<li className="list-group-item">{element.estructure}</li>
												<li className="list-group-item">
													<Link to="" className="btn btn-success">18:00</Link>
													<Link to="" className="btn btn-success">18:30</Link>
													<Link to="" className="btn btn-success">19:00</Link>
												</li>
												<li className="list-group-item">
													<Link to="" className="btn btn-success">19:30</Link>
													<Link to="" className="btn btn-success">20:00</Link>
													<Link to="" className="btn btn-success">20:30</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							)
						})
					}
			</div>
		</React.Fragment>
	)

}

export default Listcourt;