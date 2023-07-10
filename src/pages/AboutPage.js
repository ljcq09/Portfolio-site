import React from 'react';

import Hero from '../components/Hero'
import Content from '../components/Content';
import {Button, Row, Col,Jumbotron} from 'react-bootstrap';

import MoreAboutPage from '../pages/MoreAboutPage'
import LeftButton from '../components/LeftButton'

import ecuflag from '../assets/images/emoji/ecuflag.jpeg'
import ukflag from '../assets/images/emoji/ukflag.jpg'
import avllogo from '../assets/images/about/avllogo.png'


const GoLeft="projects"


class AboutPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    render(){
        return(

            <div className="g-background-pages g-hero-color">
                <Hero title={this.props.title} subTitle={this.props.subTitle}/>
                <br/><br/><br/>
                <div className="g-left-button"><LeftButton GoLeft={GoLeft}/></div>
                
                <Content >
                    <Row className="py-0">                   
                        <Col fluid = {true}>
                            <p className="g-about-text">
                               I am an Ecuadorian-born<img src={ecuflag} alt="ManUni" width="27" height="23" className="g-image-emoji"></img> mechatronic 
                               engineering student at The University of Manchester in the United Kingdom 
                               <img src={ukflag} alt="ManUni" width="28" height="21" className="g-image-emoji"></img>.
                               My background is at the intersection of computer science 💻 and electronic and electrical 
                               engineering 💡 which have allowed me to gain a diverse range of interests and skills
                               and have technical knowledge spanning a variety of engineering areas ⚙️.
                            </p>
                            <br/>
                            <p className="g-about-text">
                               My last experience was as an Engineering Intern at AVL Powertrain UK 
                               <img src={avllogo} alt="ManUni" width="25" height="25" className="g-image-emoji"></img> where I had the opportunity
                               to support the Software&Tools team in middle stages of the development of a self-driving car &#128663;
                            </p>
                            <br/>
                            <p className="g-about-text">
                                But life's not all about work, is it? In my downtime you'll find me craving food &#127829;&#127790;, 
                                dancing Salsa and Bachata &#128378;&#128131;, obsessing over the Champions league &#x26BD;, attempting to 
                                learn to play guitar  &#127928; or lost in my thoughts on a walk &#128694;.
                            </p>
                            
                        </Col >
                        <Col className="g-align-right" fluid = {true}>
                            <img className ="g-me-image" src= {this.props.photo} alt= "me" />
                        </Col>
                    </Row>
                    <br/><br/>
                    
                    

                </Content>
                
                <Jumbotron className="g-background-pages p-0">
                
                    <div className="g-button-wrapper "> 
                        {
                            this.state.show? <div><MoreAboutPage/></div> : null
                        }
                    <Button  active size="lg" variant="outline-secondary" onClick={()=>{this.setState({show:!this.state.show})}}>
                        { this.state.show? 'Enough about me!' : 'More about me?'}
                        
                    </Button>
                    </div>
                
                </Jumbotron>
                


                <br/><br/><br/>
            </div>
            
        );

    }
}

export default AboutPage;