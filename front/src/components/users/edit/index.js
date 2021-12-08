
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../config/api";

const Edituser = () => {

	const [state, setState] = useState({data:{}, edit:false});

	useEffect(() => {
		API.get("/users/get").then(response => {
			setState( {data: response.data, edit:false} )
		})
	},[])

	const updateData = () => {
		const name = document.getElementById("name").value;
		const surname = document.getElementById("surname").value;
		const email = document.getElementById("email").value;
		const DNI = document.getElementById("DNI").value;
		const phone = document.getElementById("phone").value;
		const city = document.getElementById("city").value;
		const CP = document.getElementById("CP").value;
		const obj = {
			name: name,
			first_name: surname,
			email: email,
			DNI: DNI,
			phone: phone,
			city: city,
			CP: CP
		}

		console.log(obj);
		API.post("/users/edit", obj).then(response => {
			if ( response.status === true ){
				setState({data: response.data, edit:true} )
			}
		})
	}
	 

	return (
		<div className="row justify-content-center">
		
			<div className="col-md-2 mt-5 p-4">
				<img src="/media/avatar.PNG" className="img-thumbnail" alt="..."></img>
				<p> <a href="" className="link-success"> Cambiar Avatar </a></p>
			</div>
			<div className="col-md-6 mt-5 p-4">
			{ (state.edit != false ? <div className="alert text-center col-md-5 alert-success">Editado correctamente</div>:"") }
				<div className="mb-3">
					<label className="form-label">Nombre</label>
					<input type="text" className="form-control" id="name"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Apellidos</label>
					<input type="text" className="form-control" id="surname"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Correo electrónico</label>
					<input type="email" className="form-control" id="email"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">DNI</label>
					<input type="text" className="form-control" id="DNI"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Teléfono</label>
					<input type="tel" className="form-control" id="phone"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Ciudad</label>
					<input type="text" className="form-control" id="city"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">CP</label>
					<input type="text" className="form-control" id="CP"></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Fecha alta</label>
					<input type="datetime" className="form-control" id="created" disabled></input>
				</div>
				<div className="row">
					<div className="col-md-3">
					{ (state.edit != false ? 
						<Link to="/users/get" className="btn btn-outline-secondary mt-5">Volver</Link>:
						<button className="btn btn-outline-secondary mt-5" onClick={updateData}>Guardar</button>) }
						
					</div>
					<div className="col-md-4">
						<Link to='/app/users/changepass' className="btn btn-outline-secondary mt-5">Cambiar Contraseña</Link>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Edituser;