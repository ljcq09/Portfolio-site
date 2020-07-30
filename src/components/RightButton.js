import React from 'react';
import {OverlayTrigger, Button, Tooltip} from 'react-bootstrap'


function RightButton(props){

        return(
                <OverlayTrigger
                  key={props.GoRight}
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-${props.GoRight}`}>
                      <strong>{`${props.GoRight}`}</strong>.
                    </Tooltip>
                  }
                >
                  {/* var a= {props.GoRight}.toLowerCase()
                  <Button href= {this.a} variant="outline-light" size="lg">&gt;</Button> */}
                  <Button href= {`/${props.GoRight}`} variant="outline-light" size="lg">&gt;</Button>
                </OverlayTrigger>
        )
}
export default RightButton