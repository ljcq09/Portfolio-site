import React from 'react';

import { Container, Row } from 'react-bootstrap';

import Card from '../components/Card';

import website from '../assets/images/proj/website.JPG'
import demogui from '../assets/images/proj/demogui.JPG';
import par from '../assets/images/proj/par.png';
import jwba from '../assets/images/proj/jwba.png';
import buggy from '../assets/images/proj/buggy.png';
import clocka from '../assets/images/proj/clocka.jpg';


class Carousel extends React.Component{

    constructor(props){
        super(props);
            this.state ={
                items: [
                    {
                        id: 0,
                        title: 'Personal Website',
                        subTitle: 'ReactJS based webpage',
                        imgSrc: website,
                        link: '/website',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'DemoCar2 GUI',
                        subTitle: 'GUI for data visualization',
                        imgSrc: demogui,
                        link: '/democar',
                        selected: false
                    },
                    {
                        id: 2,
                        title: 'PAR Tool',
                        subTitle: 'Automated Report Generator',
                        imgSrc: par,
                        link: '/par',
                        selected: false
                    },
                    {
                        id: 3,
                        title: 'James Webb Bizarre Adventure',
                        subTitle: 'Mini-game for the NASA Space Apps Challenge',
                        imgSrc: jwba,
                        link: '/jwba',
                        selected: false
                    },
                    {
                        id: 4,
                        title: 'Buggy Project',
                        subTitle: 'Autonomous line-following robot',
                        imgSrc: buggy,
                        link: '/buggy',
                        selected: false
                    },
                    {
                        id: 5,
                        title: 'Clock Alarm',
                        subTitle: 'Microcontroller Interface',
                        imgSrc: clocka,
                        link: '/clockalarm',
                        selected: false
                    }

                ]
        }
    }
    handleCardClick = (id) => {
 
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))}></Card>
        
        })
    }


    render(){
        return(
            <Container className="mx-auto" fluid={true}>
                <Row className="justify-content-center " fluid={true} > 
                    
                    {this.makeItems(this.state.items)}
                    
                </Row>
            </Container>
        )
    }
}

export default Carousel