import Clubmenu from "../../components/clubmenu"
import Logo from "../../components/logo";
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