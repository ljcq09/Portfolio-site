import React from 'react';
import {OverlayTrigger, Button,Tooltip} from 'react-bootstrap'


function LeftButton(props){

    return(
        <OverlayTrigger
          key={props.GoLeft}
          placement="right"
          overlay={
            <Tooltip id={`tooltip-${props.GoLeft}`}>
              <strong>{`${props.GoLeft}`}</strong>.
            </Tooltip>
          }
        >
          <Button href= {`/${props.GoLeft}`} variant="outline-light" size="lg">&lt;</Button>
        </OverlayTrigger>
    )
}

export default LeftButton