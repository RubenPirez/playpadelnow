
import Bookingmenu from "../../components/bookingmenu";
import Listbookings from "../../components/bookings/list";
import Listhistoricbooking from "../../components/bookings/listhistoric";
import Clubmenu from "../../components/clubmenu"
import Addclub from "../../components/clubs/add";
import Editclub from "../../components/clubs/edit";
import Getclub from "../../components/clubs/get";
import Listclub from "../../components/clubs/list";
import Addcourt from "../../components/courts/add";
import Editcourt from "../../components/courts/edit";
import Getcourts from "../../components/courts/get";
import Listcourt from "../../components/courts/list";
import Logo from "../../components/logo";
import Mainmenu from "../../components/mainmenu";
import Userlog from "../../components/userlog";

const Panelclub = () => {

	return(
		<div className="row justify-content-md-center">	
			<div className="row justify-content-between">
				<div className="col-md-3">
					<Logo/>
				</div>
				<div className="col-md-4 align-self-center p-1">
					<Userlog/>
				</div>
			</div>
			<div  className="row mt-5">
				<Clubmenu></Clubmenu>
			</div>
			
		</div>
	)

}

export default Panelclub;