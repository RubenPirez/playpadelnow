import './style.css';
import React, { useState, useEffect } from 'react';
import Api from "../../../config/api";
import { Link } from 'react-router-dom';

const Userdata = (props) => {

	const [state, setState] = useState({data:{}, loaded:false});
	console.log('Hola', props.id);
	useEffect(() => {
		Api.get("/users/get").then(response => {
			setState( {data:response.data, loaded:true} )
		})
	},[])

	return (
		<React.Fragment>
			<div className="row justify-content-center userdata">
				<div className="card mt-5 text-center userdata">
					<img src="/media/avatar.PNG" className="card-img-end text-center" alt="..."></img>
					<div className="card-body">
					<h5 className="card-title">{state.data.name}</h5>
					</div>
					<ul className="list-group list-group-flush">
					<li className="list-group-item">{state.data.email}</li>
					<li className="list-group-item">47021682E</li>
					<li className="list-group-item">619909996</li>
					<li className="list-group-item">Madrid</li>
					<li className="list-group-item">28815</li>
					</ul>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-2">
						<Link to='/app/users/edit' className="btn btn-outline-secondary mt-5">Editar</Link>
					</div>
					<div className="col-md-2">
						<Link to='/app/users/changepass' className="btn btn-outline-secondary mt-5">Cambiar Contraseña</Link>
					</div>
					<div className="col-md-2">
						<Link to='' className="btn btn-outline-secondary mt-5">Métodos de Pago</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)

}

export default Userdata;