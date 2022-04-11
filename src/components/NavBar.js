import React, { Component } from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import Logo from '../images/LogoMain.png';

export default class NavBar extends React.Component {
    
    render(){
        return (
            <div class="head d-flex text-center justify-content-around align-content-center w-100">
                <div>
                    <img src={Logo} />
                </div>
                <Navbar className='navbar w-100 d-flex justify-content-around text-light' expand="lg">
                    <Navbar.Brand className="navItem" href="/">Home</Navbar.Brand>
                    <Navbar.Brand className="navItem" href="/about">About</Navbar.Brand>
                    <Navbar.Brand className="navItem" href="/advertise">Advertise</Navbar.Brand>          
                    <Navbar.Brand className="navItem" href="/magazine">Craft Magazine</Navbar.Brand>
                    <Navbar.Brand className="navItem" href="/contact">Contact</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}