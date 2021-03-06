import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo.png'
import './Menubar.css'
const Menubar = () => {
      const {user, logOut} = useAuth();
      return (
            <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                  <Container>
                        <Navbar.Brand href="/home"><img className="logo__img" src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                              <Nav.Link className="nav__design" as={HashLink} to="/home#home">Home</Nav.Link>
                              <Nav.Link className="nav__design" as={HashLink} to="/home#services">Services</Nav.Link>
                              <Nav.Link className="nav__design" as={HashLink} to="/home#instructors">Instructors</Nav.Link>
                              <Nav.Link className="nav__design" as={HashLink} to="/home#training">Supervision</Nav.Link>
                              <Nav.Link className="nav__design" as={Link} to="/health">Health</Nav.Link>
                              <Nav.Link className="nav__design" as={Link} to="/about">About</Nav.Link>
                             { 
                             user.displayName ?
                             <Button onClick={logOut} variant="danger" className="rounded-pill px-2 py-1 me-2">Sign out</Button>:

                             <Nav.Link className="nav__design" as={Link} to="/login">Login</Nav.Link>
                             
                             }
                              <Navbar.Text>
                                    <a className="logged__user" href="#login">{user.displayName}</a>
                              </Navbar.Text>
                        </Navbar.Collapse>
      
                  </Container>
            </Navbar>

      </>
      );
};

export default Menubar;