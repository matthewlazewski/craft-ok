import React, { Component } from 'react';
import MainImg from '../images/HomeBackground.png';
import { Container } from 'react-bootstrap';
import Header from './Header.js'


class Home extends React.Component {
    render(){
        return(
            <Container fluid  style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div class="header">
                    <Header />
                </div>
                <div class="home-page">

                </div>
            </Container>
        )
    }
}

export default Home;