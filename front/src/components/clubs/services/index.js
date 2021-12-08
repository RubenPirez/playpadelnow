import './styles.css';

const Clubservices = (props) => {

	return(
		<div className="row justify-content-center mt-3 text-center services">
			<div className="col-md-3 mt-5">
				<p title="Parking Gratuito"><i className="fas fa-parking"></i>Parking Gratuito</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Taquillas" className="fas fa-key"> </i>Taquillas</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Vestuarios" className="fas fa-shower"> </i>Vestuarios</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Tienda" className="fas fa-store"> </i>Tienda</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Cafetería" className="fas fa-coffee"> </i>Cafetería</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Acceso Minusválidos" className="fas fa-wheelchair"> </i>Acceso Minusválidos</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Restaurante" className="fas fa-utensils"> </i>Restaurante</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Alquiler de Material" className="fas fa-quidditch"> </i>Alquiler de Material</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Parking de pago" className="fas fa-coins"> </i>Parking de pago</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Wifi" className="fas fa-wifi"> </i>Wifi</p>
			</div>	
			<div className="col-md-3 mt-5">
				<p><i title="Fisioterapia" className="fas fa-notes-medical"> </i>Fisioterapia</p>
			</div>
			<div className="col-md-3 mt-5">
				<p><i title="Vending" className="fas fa-cookie"> </i>Vending</p>
			</div>
		</div>
	)

}

export default Clubservices;