import React from 'react';
          
                
function SideBar(props) {
    return(    
        <div className="g-follow-me">
            <ul className="g-follow-me-icons">
                <li className="g-follow-me-text">
                    <small>Follow me </small>
                </li>

                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lenin-jhoan-cruz-quishpe/" >
                        <img src= {props.lklogo} 
                            className="d-inline-block align-top g-follow-me-tags" 
                            alt="logo">
                        </img>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ljcq09">
                        <img src= {props.gtlogo} 
                            className="d-inline-block align-top g-follow-me-tags" 
                            alt="logo">
                        </img>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lenin.cruz2/">
                        <img src= {props.fblogo} 
                            className="d-inline-block align-top g-follow-me-tags" 
                            alt="logo">
                        </img>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leninj09/">
                        <img src= {props.iglogo} 
                            className="d-inline-block align-top g-follow-me-tags" 
                            alt="logo">
                        </img>
                    </a>

                </li>
            </ul>
            </div>

);

}

export default SideBar;