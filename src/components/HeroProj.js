import React from 'react';
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import pin from '../assets/images/pin.png';


function HeroProj(props){
    
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid g-jumbotron-no-margin pt-4" >
            <Container fluid = {true} className="mx-auto">

                <Row className = "justify-content-center py-5 pt-0" fluid = {true}>
                    <div className="g-projects-container py-0" fluid = {true}>
                        <div className= "g-heroproj-content-container" fluid = {true}>        
                            <Row className="g-pin" >
                                <Col xs={9}>
                                    <br/><br/><br/><br/> <br/>
                                    {props.title && <h1 className="g-projects-title font-weight-bolder">{props.title}</h1>}
                                    
                                </Col>
                                <Col className="g-align-right">
                                    <Image src={pin} width="185" height="185"></Image>
                                </Col>
                            </Row>
                            {props.explanation && <h3 className="g-projects-text font-weight-light">{props.explanation}</h3>}
                            <br/>
                            <Carousel>

                                {props.vids_labels.map((element, index) => 
                                    <div key='vid at ${index}' className=" g-custom-carousel"> 
                                        <iframe src= {element[0]}
                                                frameborder="0" 
                                                className='g-vid'
                                                title='hola'
                                                width="540"
                                                height="540" 
                                                allowfullscreen={true}>
                                        </iframe>
                                            <div> 
                                                <p className="legend">{element[1]}</p>   
                                            </div>                                                     
                                    </div>
                                )}



                                {props.imgs_labels.map((element, index) => 
                                    <div key='img at ${index}' className=" g-custom-carousel"> 
                                        <Image src= {element[0]}/>
                                            <div> 
                                                <p className="legend">{element[1]}</p>   
                                            </div>                                                     
                                    </div>
                                )}


                                {/* {props.imag.map((element, index) => 
                                    <div key='imag at ${index}' className="g-custom-carousel"> 
                                        <Image src= {element} />
                                        {props.imaglabels.map((element2) => 
                                                <div key='imag at ${index}'> 
                                                    <p className="legend">{element2}</p>
                                                </div>)}     

                                        {/* <p className="legend">Probando</p>  
                                    </div>)}         
                                                               */}
                            </Carousel> <br/>
                            
                            <h1 className="g-projects-title font-weight-bolder" >About this project</h1><br/>

                            <h3 className="font-weight-light g-projects-text">
                                {props.abouttext}
                            </h3> <br></br>

                            <h1 className="g-projects-title font-weight-bolder ">Technical sheet</h1>

                            <h3 className="font-weight-light g-projects-text">
                                <ul>
                                    {props.techsheet.map((element, index) => 
                                    <div key='vid at ${index}'> 
                                        <li>{element}</li>    
                                    </div>)}
                                </ul>
                            </h3><br/><br/>
                            
                            <h1 className="g-projects-title font-weight-bolder ">Resources</h1>
                            
                            <h3 className="font-weight-light g-projects-text">
                                <ul>
                                    {props.resources.map((element, index) => 
                                    <div key='res at ${index}'> 
                                        <li>{element}</li>
                                    </div>)}     
                                        {/* <a className= "g-word-link font-weight-bold" href={props.githublink} >&nbsp;GITHUB</a> */}
                                </ul>
                            </h3>
                            <br/><br/><br/>
                        </div>
                    </div>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default HeroProj;