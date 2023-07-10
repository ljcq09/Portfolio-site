import React from 'react';

import HeroProj from '../components/HeroProj'

import webs from '../assets/images/proj/website.PNG'
import webs1 from '../assets/images/proj/website1.PNG'
import webs3 from '../assets/images/proj/website3.PNG'


// const imgs_labels =[[webs, "Website Landing Page"],
//                     [webs1, "Website Portfolio Page"],
//                     [webs3, "Website About Page"],
//                     [webs2, "Website ContactPage"]]
const imgs_labels =[[webs, "Website Landing Page"],
                    [webs1, "Website Portfolio Page"],
                    [webs3, "Website About Page"],
]

const vids_labels =[]

const abouttext =   <p> <p>The idea to do this project was born of my curiosity about learning something new 
                        and the need of having a space to showcase some of my work as a Mechatronic 
                        Engineering student.</p>

                        <p>I've used the <strong>React</strong> library for JavaScript together with HTML, CSS and
                        Bootstrap to build the Front-End of my Website and I've used NodeJS with ExpressJS to build 
                        a little API that allowed me to implement a Contact Page to send emails to my personal account
                             </p>

                    </p>
const techsheet = [ 'UI design',
                    'Responsive Website Design',
                    'React JS - react-bootstrap, react-responsive-carousel, react-router, react-spring',
                    'CSS- Media query',
                    'HTML',
                    'nodemon',
                    'Node.js - Express.js, cors',
                    '@sendgrid/mail']

const resources =["References available upon request"]

function WebsitePage(props) {
    return(
        <div className="g-background-pages">
            
            <HeroProj   title={props.title} 
                        explanation= {props.explanation}
                        imgs_labels={imgs_labels}
                        vids_labels={vids_labels}
                        abouttext={abouttext}
                        techsheet={techsheet}
                        resources={resources}
                        />
        </div>
    );

}

export default WebsitePage;