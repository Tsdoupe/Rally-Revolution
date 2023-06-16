import {Navbar, NavbarBrand} from 'reactstrap';
//import NucampLogo from '../app/assets/img/logo.png';
//Change above to Rally Rev logo

const Header = () => {
    return (
        <Navbar dark color="primary" sticky="top" expand="md">
          <NavbarBrand className='ms-5' href="/">
              <h1> Add a logo </h1>
              {/* <img src = {NucampLogo} alt="nucamp logo" />
              Change code to brandon's logo later */}
          </NavbarBrand>
      </Navbar>
    );
};

export default Header;