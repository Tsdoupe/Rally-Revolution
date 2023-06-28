import { useState } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import NucampLogo from '../app/assets/img/logo.png';
//Change above to Rally Rev logo

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color="primary" sticky="top" expand="md">
            <NavbarBrand className='ms-5' href="/">
                <h1 className='float-start'> RR </h1>
                {/* <img src = {NucampLogo} alt="nucamp logo" />
                Change code to brandon's logo later */}
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>               
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/mens'>
                            Mens
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/womens'>
                            Womens
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/newreleases'>
                            New Releases
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>   
        </Navbar>
    );
};

export default Header;