import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';


const Header = (props) => {
    return(
        <Container fluid className="header text-center w-100 p-0" >
            
            <div className="header d-flex justify-content-between flex-wrap align-items-center w-100">
            
            
            </div>
            <div className="d-flex justify-content-around text-center w-100">
                <NavBar/>
            </div>
        </Container>
    )
}

export default Header;