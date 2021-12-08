import { Link } from "react-router-dom";

const Clubmenu = (props) => {
	console.log('CLUBMENU', props.id);
	return(
		<div className="row mt-2">	
			<ul className="nav nav-tabs justify-content-center border-bottom border-3 p-2">
				<li className="nav-item me-5">
					<Link to={"/app/clubs/get/" + props.id} className="nav-link text-info">Datos del Club</Link>
				</li>
				<li className="nav-item me-5">
					<Link to={"/app/courts/list/" + props.id} className="nav-link text-info">Instalaciones</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="/app/clubs/services/2" className="nav-link text-info">Servicios</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="#" className="nav-link text-info">Fotos</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="/app" className="nav-link text-info">Volver</Link>
				</li>
			</ul>
		</div>
	)

}

export default Clubmenu;