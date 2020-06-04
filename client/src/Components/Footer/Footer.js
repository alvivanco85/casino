import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

function Footer () {

    return (
        <footer className="mt-5">
            <Container fluid={true} className='footer'>
                <Row className="border-top justify-content-center p-3">
                    <Col className="p-0" md={3} sm={12}>
                      Black Jack by Aldo Vibanco and Thanh Ngo, Copyright &copy; 2020
                    </Col>
                </Row>
            </Container>

        </footer>
    )
        
}

export default Footer;