import React, { Component }  from 'react';
import { Link } from 'react-router-dom'


class NavBar extends Component {
	
	
	render() {
		return(
			<div>
				<nav>
					<div className="nameTitle">AMANDA GORFINE</div>
					<div className= "routeLinks">
						<div><Link to="/" className="link">HOME</Link></div>
						<div><Link to="/Portfolio" className="link">PORTFOLIO</Link></div>
						<div><Link to="/Aboutme" className="link">ABOUT</Link></div>
						<div><Link to="/Resume" className="link">RESUME</Link></div>
						<div><Link to="/Contact" className="link">CONTACT</Link></div>
					</div>
				</nav>
			</div>	
		)
	}
	
}

export default NavBar;