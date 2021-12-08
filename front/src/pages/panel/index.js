import './styles.css';
import Logo from "../../components/logo";
import Mainmenu from "../../components/mainmenu";
import Userdata from "../../components/users/data";
import Userlog from "../../components/userlog";
import Edituser from "../../components/users/edit";
import Userlist from "../../components/users/list";
import Getclub from "../../components/clubs/get";
import Favorites from "../../components/favorites";
import Bookingmenu from "../../components/bookingmenu";
import Listclub from "../../components/clubs/list";
import Changepass from "../../components/users/changepass";
import Listbookings from "../../components/bookings/list";
import Listhistoricbooking from "../../components/bookings/listhistoric";
import Clubmenu from "../../components/clubmenu";
import Getcourts from "../../components/courts/get";
import Listcourt from "../../components/courts/list";
import Editcourt from "../../components/courts/edit";
import Editclub from "../../components/clubs/edit";
import Adminclubmenu from "../../components/adminclubmenu";
import Addcourt from "../../components/courts/add";
import Clubservices from "../../components/clubs/services";
import Addclubservices from "../../components/clubs/addservices";


const Panel = (props) => {

	const uri = (props.match.params.category === undefined?"":props.match.params.category)
			+ '/'
			+ (props.match.params.subcategory === undefined?"":props.match.params.subcategory)
			/*+ '/'
			+ (props.match.params.id === undefined?"":props.match.params.id)*/;
	
	//console.log(props);

	var mainmenu = true;
	/*
	if ( props.match.params.category == 'courts' ){
		html += <Clubmenu></Clubmenu>
	}*/

	switch (uri) {
		case '/': var html = <Favorites></Favorites>; break;
		case 'users/get': var html = <Userdata></Userdata>; break;
		case 'users/edit': var html = <Edituser></Edituser>; break;
		case 'users/changepass': var html = <Changepass></Changepass>; break;
		case 'clubs/list': var html = <Listclub></Listclub>; break;
		case 'clubs/get': var html =
			<>
				{mainmenu = false}
				<Clubmenu id={props.match.params.id}></Clubmenu>
				<Getclub id={props.match.params.id}></Getclub> 
			</>	
			break;
		case 'clubs/edit': var html = 
			<>
				{mainmenu = false}
				<Adminclubmenu></Adminclubmenu>
				<Editclub id={props.match.params.id}></Editclub>
			</> 
			break;
		case 'clubs/services': var html = 
			<>
				{mainmenu = false}
				<Clubmenu id={props.match.params.id}></Clubmenu>
				<Clubservices id={props.match.params.id}></Clubservices> 
			</>
	break;
		case 'clubs/addservices': var html =
			<>
				{mainmenu = false}
				<Adminclubmenu></Adminclubmenu>
				<Addclubservices id={props.match.params.id}></Addclubservices>
			</>
			break;
		case 'courts/add': var html = 
			<>
				{mainmenu = false}
				<Adminclubmenu></Adminclubmenu>
				<Addcourt></Addcourt>
			</>
			break;
		case 'courts/list': var html = 
			<>
				{mainmenu = false}
				<Clubmenu id={props.match.params.id}></Clubmenu>
				<Listcourt id={props.match.params.id}></Listcourt> 
			</>
			break;
		case 'courts/get': var html = 
			<>
				{mainmenu = false}
				<Clubmenu id={props.match.params.id}></Clubmenu>
				<Getcourts></Getcourts> 
			</>
			break;
		case 'courts/edit': var html = 
			<>
				{mainmenu = false}
				<Adminclubmenu></Adminclubmenu>
				<Editcourt></Editcourt>
			</>
			break;
		case 'bookings/list': var html =
			<>
				<Bookingmenu></Bookingmenu>
				<Listbookings></Listbookings>
			</>
			break;
		case 'bookings/historic': var html =
			<>
				<Bookingmenu></Bookingmenu>
				<Listhistoricbooking></Listhistoricbooking>
			</>
			break;
		case 'favorites/get': var html = <Favorites></Favorites>; break;
	
		default:
			var html = <Favorites></Favorites>;
			break;
	}

	return (
		<div className="row justify-content-md-center mt-5">
			<div className="row justify-content-between">
				<div className="col-md-3">
					<Logo/>
				</div>
				<div className="col-md-4 align-self-center p-1">
					<Userlog/>
				</div>
			</div>
			<div  className="row mt-5">
				{ (mainmenu?<Mainmenu id={props.match.params.id}></Mainmenu>:"") }
			</div>
			<div>
				{html}
			</div>
		</div>
	)
	
}

export default Panel;