	
import { Link } from 'react-router-dom';
import img from '../../media/PlayNowPadel-Logo-transparente.png';

const Logo = (props) => {
	
	return(
		<div>
			<Link to="/app"><img src={img}></img></Link>
		</div>
	)
}

export default Logo;