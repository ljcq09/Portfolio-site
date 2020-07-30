import React from 'react';
import {Col,Container} from  'react-bootstrap';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

import RightButton from '../components/RightButton'


const GoRight="about"



function HomePage(props) {
    return(
        <div className="g-background-pages">
            
            <Hero title={props.title} subTitle= {props.subTitle} text= {props.text}/>

            <div className="g-right-button g-right-home"><RightButton GoRight={GoRight}/></div>
         
            <br/><br/>

            <Container className="align-text-center" >
                <Col  width="100%" fluid={true}>
                    <div className= "g-borders-pages ">           
                        <Carousel />
                    </div>
                </Col>
            </Container>
            <br/><br/><br/>

        </div>
    );

}

export default HomePage;