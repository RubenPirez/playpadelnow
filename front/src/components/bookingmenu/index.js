import { Link } from "react-router-dom";

const Bookingmenu = () => {

	return(
		<div className="row mt-5">	
			<ul className="nav nav-tabs justify-content-center border-bottom border-3 p-2">
				<li className="nav-item me-5 text-white">
					<Link to="/app/bookings/list" className="nav-link text-info">Próximas Reservas</Link>
				</li>
				<li className="nav-item me-5">
					<Link to="/app/bookings/historic" className="nav-link text-info">Historial de Reservas</Link>
				</li>
			</ul>
		</div>
	)

}

export default Bookingmenu;