import React from 'react';

import {Jumbotron, Container} from 'react-bootstrap';
import SideBar from '../components/SideBar'


function LandingPage(props) {
    return(
        <Jumbotron className="g-vertical-center-jumbotron  jumbotron-fluid" >
                <Container>
                        <SideBar lklogo={props.lklogo} gtlogo={props.gtlogo} fblogo={props.fblogo} iglogo={props.iglogo} />
                    <div className="g-all-text">
                        <h3 className="g-landing-title">
                            Hello, my Name is <strong>Lenin Cruz&#128516;</strong>
                            
                        </h3>
                        <h3 className="g-landing-text">
                            I am a future Mechatronic Engineer and a computer programming enthusiast
                        </h3>
                        <h3 className="g-landing-text">
                           I am keen to gain more experience in the fields of software development, technology and data where
                        </h3>
                        <h3 className="g-landing-text">
                            I can apply my strong numeracy, analytical and technical skills gained from my degree.
                        </h3>
                        <h3 className="g-landing-text">
                            Feel free to checkout some of my 
                            <a className= "g-word-link font-weight-bold"href="/projects">&nbsp;projects </a>
                            or get in touch at
                        </h3>
                        <h3 className="g-landing-text">
                            <a className= "g-word-link font-weight-bold"href="mailto:leninj09@gmail.com">&nbsp;leninj09@gmail.com</a>
                        </h3>
                        </div>

                </Container>              
        </Jumbotron>
        
    );

}

export default LandingPage;