import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
 } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      value: 'Menu'
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="Navbar" dark expand="md">
          <NavbarBrand className="Navbar_Brand" href="#">
            <img src="images/fancy-black1.png" alt="brand_pic"/>
          </NavbarBrand>
          <NavbarToggler id="Navbar_Toggler" onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml" navbar>
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/">About us</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/services">Services</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/">News</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
