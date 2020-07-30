import React from 'react';
import {OverlayTrigger, Button,Tooltip,Image} from 'react-bootstrap'

import logoo from '../assets/images/robologo2.png';


function HomeButton(props){

    return(
        <OverlayTrigger
          key={props.GoHome}
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-${props.GoHome}`}>
              <strong>Home</strong>
            </Tooltip>
          }
        >
            <Button href= '/' variant="outline-secondary" size="sm">
                <Image  src={logoo}
                        width="50" 
                        height="50" 
                        className="d-inline-block align-top" >
                </Image>
            </Button>
        </OverlayTrigger>
    )
}

export default HomeButton