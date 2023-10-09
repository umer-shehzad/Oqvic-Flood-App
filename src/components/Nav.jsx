import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

// icons
import PhoneIcon from '../components/Icon/PhoneIcon';

// images
import LogoImage from '../assets/logo.png';


const Nav = () => {
  return (
    <Navbar expand="lg" className="bkg-tertiary">
      <Container className="logoImage">
        <Navbar.Brand href="" >
          <img
            src={LogoImage}
            width="180"
            height="40"
            alt="logo"
          />
        </Navbar.Brand>
        <div className="justify-content-sm-start justify-content-lg-end">
          <div className='d-grid'>
            <Navbar.Text className='contactText pt-0 pb-1'>
              contact us:
            </Navbar.Text>
            <Navbar.Text className='phoneText p-0'>
              <PhoneIcon /> 201-898-2013
            </Navbar.Text>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default Nav