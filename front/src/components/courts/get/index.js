import './styles.css';
import { Link } from 'react-router-dom';

const Getcourts = () => {

	return(
		<div className="row justify-content-center getcourt">
			<div className="card mt-5 text-center">
				<div className="row g-0">
					<div className="col-md-4 align-self-center">
						<img src="/media/pista_1.jpg" className="img-fluid rounded-start" alt="..."></img>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Pista Mapfre</h5>
							<ul className="list-group list-group-flush">
							<li className="list-group-item">Pista 1</li>
							<li className="list-group-item">Indoor</li>
							<li className="list-group-item">Dobles</li>
							<li className="list-group-item">Panorámica</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row justify-content-around p-2">
					<div className="col-md-6">
						<Link to="/app/courts/edit" href="./edit.html" className="btn btn-outline-info">Editar</Link>
					</div>
					<div className="col-md-6">
						<Link to="#" className="btn btn-outline-info">Eliminar</Link>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Getcourts