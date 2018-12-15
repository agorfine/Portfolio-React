import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class MobileNav extends Component {
	  constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      dropdownOpen: false
	    };
	  }

	  toggle() {
	    this.setState({
	      dropdownOpen: !this.state.dropdownOpen
	    });
	  }
	
	render() {
		return(
			<div>
				<nav>
					<div className="nameTitle">AMANDA GORFINE</div>
					<ButtonDropdown className= 'dropButton' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				        <DropdownToggle caret className='dropToggle'>
				          MENU
				        </DropdownToggle>
				        <DropdownMenu className='dropDownMenu'>
				          <DropdownItem><Link to="/" className='smallLink'>HOME</Link></DropdownItem>
				          <DropdownItem divider />
				          <DropdownItem><Link to="/Portfolio" className='smallLink'>PORTFOLIO</Link></DropdownItem>
				          <DropdownItem divider />
				          <DropdownItem><Link to="/Aboutme" className='smallLink'>ABOUT</Link></DropdownItem>
				          <DropdownItem divider />
				          <DropdownItem><Link to="/Resume" className='smallLink'>RESUME</Link></DropdownItem>
				          <DropdownItem divider />
				          <DropdownItem><Link to="/Contact" className='smallLink'>CONTACT</Link></DropdownItem>
				        </DropdownMenu>
				      </ButtonDropdown>	
				</nav>
			</div>	
		)
	}
	
}


export default MobileNav;