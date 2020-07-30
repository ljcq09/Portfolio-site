import React from 'react';
import {OverlayTrigger, Image, Tooltip, Dropdown} from 'react-bootstrap';      


import spotify from '../assets/images/spotify.png'
                
function SpotifyButton(props) {
    return(    
        <OverlayTrigger className="g-spotify-dropdown "
                        key="spoty"
                        placement="right"
                        overlay={
                                <Tooltip id={`tooltip-${"spoty"}`}>
                                <p className='g-over-responsive'><strong>Enjoy some cool music while on my website</strong></p>
                                </Tooltip>}>
                                <Dropdown className="ml-3">
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-custom-1" >
                                                <Image  src={spotify} 
                                                        width="40px" 
                                                        height="40px">
                                                </Image>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="g-spotify-dropdown-container">
                                        <Dropdown.Item href="#" variant="outline-secondary"  bsPrefix="g-spotify-dropdown">
                                        <iframe src="https://open.spotify.com/embed/playlist/6qGGf3F8TxvBLGAUrBDbBO" 
                                                
                                                frameborder="0" 
                                                allowtransparency="true" 
                                                allow="encrypted-media"
                                                title="spoty"
                                                className="g-spotify-dropdown">
                                        </iframe></Dropdown.Item>
                                        
                                </Dropdown.Menu>
                                </Dropdown>
        </OverlayTrigger>
        )
    
    }


export default SpotifyButton;