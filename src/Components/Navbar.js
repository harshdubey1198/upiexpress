import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FcHome, FcManager, FcReading, FcViewDetails, FcDocument } from 'react-icons/fc';
// import { IoLogoGithub } from 'react-icons/io';
// import { AiFillStar } from 'react-icons/ai';
import '../style.css'

import logo from '../Images/logoupiexpress.png';

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const updateExpanded = (value) => {
    setExpand(value);
  };

  const scrollHandler = () => {
    window.scrollY >= 20 ? setNavColour(true) : setNavColour(false);
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid navbar-brand logo" alt="brand" />
        </Navbar.Brand>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item style={{textAlign:'right'}}>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <FcHome style={{ fontSize: '1em', marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{textAlign:'right'}}>
              <Nav.Link as={Link} to="/profile" onClick={() => updateExpanded(false)}>
                <FcManager style={{ fontSize: '1em', marginBottom: '2px' }} /> Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{textAlign:'right'}}>
              <Nav.Link as={Link} to="/settings" onClick={() => updateExpanded(false)}>
                <FcReading style={{ fontSize: '1em', marginBottom: '2px' }} /> Settings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{textAlign:'right'}}>
              <Nav.Link as={Link} to="/pay" onClick={() => updateExpanded(false)}>
                <FcViewDetails style={{ fontSize: '1em', marginBottom: '2px' }} /> Pay
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{textAlign:'right'}}>
              <Nav.Link as={Link} to="/transactions" onClick={() => updateExpanded(false)}>
                <FcDocument style={{ fontSize: '1em', marginBottom: '2px' }} /> Transactions
              </Nav.Link>
            </Nav.Item>
            </Nav></Navbar.Collapse></Container></Navbar>
  );
}

export default NavBar;
