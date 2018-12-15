import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive';
import MobileNav from './MobileNav'


class NavBar extends Component {
	
	
	render() {
		return(
			<div>
				<MediaQuery query="(min-device-width: 850px)">
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
				</MediaQuery>
				<MediaQuery query="(max-device-width: 500px)">
					<MobileNav/>
				</MediaQuery>
			</div>	
		)
	}
	
}

export default NavBar;