import React from 'react';
import {Row, Col } from 'react-bootstrap';


function MoreAboutTags(props) {
    return(
        <div>
            <Row fluid={true}>
                <Col className="text-lg-left" xs="3">
                    <img className="g-more-about-logo" src={props.brand} alt="logo"></img>
                </Col>
                <Col xs="auto" fluid={true}>
                    <h3 className="g-more-about-tag-company">
                        <a className="g-a"target="_blank" rel="noopener noreferrer" href={props.complink}>     
                        {props.company}</a></h3>
                    <h3 className="g-more-about-tag-jobtitle"><strong> {props.jobtitle}, </strong>
                        <span className="g-more-about-tag-period" ><strong>{props.period}</strong></span>
                    </h3>
                    <h3 className="g-more-about-tag-location"><strong>{props.location}</strong></h3>
                    <br/>
                    <h3 className="g-about-text">{props.description}</h3>
                    
                </Col>
            </Row>
        </div>
    )


}

export default MoreAboutTags;