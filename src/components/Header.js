import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';


const Header = (props) => {
    return(
        <Container fluid className="header text-center w-100" >
            
            <div className="d-flex justify-content-around text-center w-100">
                <NavBar/>
            </div>
        </Container>
    )
}

export default Header;