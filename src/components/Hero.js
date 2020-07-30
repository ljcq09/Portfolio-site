import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';


function Hero(props){

    return(

        <div>
            <Jumbotron className="bg-transparent jumbotron-fluid py-0 g-jumbotron-no-margin g-hero-color" >
                <Container fluid = {true}>
                    <Row className = "justify-content-center pt-5" >
                        <Col md={9} sm={12}>
                            {props.title && <h1 className="display-4 font-weight-bolder">{props.title}</h1>}<br/>
                            {props.subTitle && <h2 className="display-6 font-weight-light ">{props.subTitle}</h2>}
                            {props.text && <h3 className= "lead font weight-light"><br/>{props.text}</h3>}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
        </div>
    )
}

export default Hero