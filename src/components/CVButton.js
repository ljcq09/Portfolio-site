import React from 'react';
import {OverlayTrigger, Button,Tooltip,Image} from 'react-bootstrap'

import cvbut from '../assets/images/cvbut.png'
import CV from '../assets/docs/CVLeninCruz.pdf';


function CVButton(props){

    return(
        <OverlayTrigger
          key={props.GoCV}
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-${props.GoCV}`}>
              <strong>Download my CV </strong>
            </Tooltip>
          }
        >
          <Button href= {CV} target="_blank" rel="noopener noreferrer" variant="outline-secondary" size="sm" download="CVLenin.pdf">
              <Image src={cvbut} width="52" className="d-inline-block align-top" ></Image>
              </Button>
        </OverlayTrigger>
    )
}

export default CVButton