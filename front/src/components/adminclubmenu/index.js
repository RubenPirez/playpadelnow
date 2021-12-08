import { Link } from "react-router-dom";

const Adminclubmenu = () => {

	return(
		<div className="row mt-2">	
			<ul className="nav nav-tabs justify-content-center border-bottom border-3 p-2">
				<li className="nav-item me-5">
					<Link to="/app/clubs/edit/2" className="nav-link text-info">Editar Club</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="/app/courts/add" className="nav-link text-info">Añadir Pista</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="/app/courts/edit/1" className="nav-link text-info">Editar Pista</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="/app/clubs/addservices/2" className="nav-link text-info">Añadir/Borrar Servicios</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="/app" className="nav-link text-info">Volver</Link>
				</li>
			</ul>
		</div>
	)

}

export default Adminclubmenu;