import { Link } from "react-router-dom";

const Mainmenu = (props) => {
	console.log('PROPS', props);

	return (
		<div>	
			<ul className="nav nav-tabs justify-content-center border-bottom border-3 p-2">
				<li className="nav-item me-5 text-white">
					<Link to='/app/users/get/' className="nav-link text-info">Mi Perfil</Link>
				</li>
				<li className="nav-item me-5">
					<Link to='/app/bookings/list/' className="nav-link text-info">Mis Reservas</Link>
				</li>
				<li className="nav-item me-5">
					<Link to='/app/favorites/get/' className="nav-link text-info">Clubs Favoritos</Link>
				</li>
				<li className="nav-item me-5">
					<Link to='/app/clubs/list' className="nav-link text-info">Clubs</Link>
				</li>
				<li className="nav-item me-5">
					<Link to='/app/clubs/edit/' className="nav-link text-info">Gestionar Club</Link>
				</li>
				<div className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Club, dirección, ciudad..." aria-label="Search"></input>
					<button className="btn btn-outline-info" type="submit">Buscar</button>
				</div>
			</ul>
		</div>	
	)
}

export default Mainmenu;