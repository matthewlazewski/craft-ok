import { height } from '@mui/system';
import React, { Component } from 'react';
import {Navbar, NavItem, NavDropdown, Nav, Container, MenuItem} from 'react-bootstrap'
import Logo from '../images/LogoMain.png';

export default class NavBar extends React.Component {
    
    render(){
        return (
           

                <Navbar collapseOnSelect fixed="top" bg="light" expand="sm" className='color-navbar w-100 d-flex justify-content-around text-light'>
                    <Container  style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div>
                            <img style={{height: "50px"}} src={Logo} />
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                                <Nav.Link className="navItem" href="/">Home</Nav.Link>
                                <Nav.Link className="navItem" href="/about">About</Nav.Link>
                                <Nav.Link className="navItem" href="/advertise">Advertise</Nav.Link>          
                                <Nav.Link className="navItem" href="/magazine">Craft Magazine</Nav.Link>
                                <Nav.Link className="navItem" href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        )
    }
}