import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return(
        
        <footer className = "g-Footer" >
            
            <Container fluid={true}>
                <Col className = "p-5">
                    <Row className = "justify-content-center  font-weight-bolder g-Footer-title">
                            Let's talk
                    </Row>
                    <Row className = "justify-content-center g-Footer-body">
                            Wanna get in touch or talk about a project? 
                            
                    </Row>
                    <Row className = "justify-content-center g-Footer-body">
                            Feel free to contact me via email at 
                            <a className= "g-word-link font-weight-bold"href="mailto:leninj09@gmail.com">&nbsp;leninj09@gmail.com</a>
                    </Row>
                    {/* <Row className = "justify-content-center g-Footer-body">
                            or drop a line in the form at the
                            <a className= "g-word-link font-weight-bold" href="/contact">&nbsp;Contact Page</a>
                    </Row>
                     */}

                </Col>
            </Container>
            
        </footer>
        
    );

}

export default Footer; 