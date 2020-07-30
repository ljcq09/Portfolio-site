import React from 'react';

import Content from '../components/Content';
import {Row} from 'react-bootstrap';

import MoreAboutTags from '../components/MoreAboutTags'

import avl_logo from '../assets/images/about/avllogo.png'
import umes_logo from '../assets/images/about/umes_logo.jpg'
import uni_logo from '../assets/images/about/uni_logo.png'
import ling_logo from '../assets/images/about/ling_logo.jpg'
import into_logo from '../assets/images/about/into_logo.jpg'
import museum_logo from '../assets/images/about/museum_logo.jpg'
import senescyt_logo from '../assets/images/about/senescyt_logo.jpg'


class  MoreAboutPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            avltag: {
                company: 'AVL Powertrain UK ltd',
                jobtitle: 'Engineering Intern',
                period: 'Jul 2019 - Jun 2020',
                location: 'Coventry, United Kingdom',
                description:<p> Supported automotive software activities with strong focus on MATLAB and Simulink <br/>
                            Activites Included:<ul className="g-more-about-list"> 
                                                    <li>Sensors Data Analysis and Sotware testing</li>
                                                    <li>GUI development with Python</li>
                                                    <li>Report Automation with Word VBA and MATLAB</li>
                                                </ul>
                            </p>,
                brand: avl_logo,
                complink: "https://www.avl.com/web/avl-uk/home"
            },
            callingtag: {
                company: 'The University of Manchester International Office',
                jobtitle: 'Manchester Calling Campaign',
                period: 'Mar 2018 - Jun 2018',
                location: 'Manchester, United Kingdom',
                description:<p className="g-more-about-list"> The role here was to have an informal conversation with prospective students across<br/>
                            the world providing them with information about studying and living in Manchester<br/> 
                            </p>,
                brand: uni_logo,
                complink: "https://www.manchester.ac.uk/study/international/contact-international-team/"
            },


            uomtag: {
                company: 'The University of Manchester',
                jobtitle: 'BEng Mechatronic Engineering with Industrial Experience',
                period: 'Sep 2017 - Jul 2021',
                location: 'Manchester, United Kingdom',
                description:<p className="g-more-about-list">Coursework focused on electronics, mathematics for robotics, embedded software<br/>
                                and microcontrollers, CAD design and control systems<br/><br/> 
                                First year courses include: <ul className="g-more-about-list">
                                                                <li>C Programming (83%)</li>
                                                                <li>Mathematics (84%)</li>
                                                                <li>Microcontroller Engineering (77%), </li>
                                                                <li>Electronics Project (77%)</li>
                                                            </ul><br/>
                                Second year courses include:<ul className="g-more-about-list"> 
                                                                <li>Embedded Systems Project (76%)</li>
                                                                <li>Control Systems I (83%)</li>
                                                                <li>Applied Mechanics & Industrial Robotics (66%)</li>
                                                                <li>Microcontroller Engineering II (68%)</li>
                                                            </ul>
                            </p>,
                brand: uni_logo,
                complink: "https://www.manchester.ac.uk/study/undergraduate/courses/2020/03394/beng-mechatronic-engineering/#course-profile"
            },

            intotag: {
                company: 'INTO Manchester',
                jobtitle: 'International Foundation in Science and Engineering',
                period: 'Sep 2016 - Jul 2017',
                location: 'Manchester, United Kingdom',
                description:<p>International Foundation Year Program  <br/>
                                A-levels:   <ul className="g-more-about-list">
                                                <li>Further Mathematics (A*)</li>
                                                <li>Mathematics (A*)</li>
                                                <li>Physics (A*)</li>
                                            </ul>
                            </p>,
                brand: into_logo,
                complink: "https://www.intostudy.com/en/universities/into-manchester/courses/international-foundation-in-science-and-engineering"
            },

            ecusoctag: {
                company: 'University of Manchester Ecuadorian Society (UMES)',
                jobtitle: 'Treasurer',
                period: 'Sep 2020 - Jun 2021',
                location: 'Manchester, United Kingdom',
                description:<p className="g-more-about-list">Responsible for the finantial planning and budgeting of this Society for the 2020-2021<br/> 
                                academic year</p>,
                brand: umes_logo,
                complink: "https://manchesterstudentsunion.com/groups/ecuadorian-society"
            },
            museumtag: {
                company: 'The Museum of Science and Industry',
                jobtitle: 'Visitor Engagement Volunteer',
                period: 'Oct 2018 - Apr 2019',
                location: 'Manchester, United Kingdom',
                description:<p className="g-more-about-list">Assisting the Electricity exhibition of the museum with the objective of engaging as<br/>
                                many visitors as possible by provide excellent service by manteining general <br/>
                                knowledge of the events</p>,
                brand: museum_logo,
                complink: "https://www.scienceandindustrymuseum.org.uk/"
            },
            passtag: {
                company: 'Department of Electrical and Electronic Engineering',
                jobtitle: 'Peer Assisted Study Session (PASS) Leader',
                period: 'Sept 2018 - Apr 2019',
                location: 'Manchester, United Kingdom',
                description:<p><p className="g-more-about-list">The role was to support a group of 20 first year students to adapt to University life<br/>
                                by providing them with information about living in the city and offering mentorship<br/>
                                for their coursework.</p><br/>
                                
                            <p className="g-more-about-list">Weekly mentoring sessions were hold for the students to express their concerns about<br/> 
                                their tutorials and extra sessions were offered to review any specific topic<br/>
                                </p></p>,
                brand: uni_logo,
                complink: "http://www.peersupport.manchester.ac.uk/how-do-i-get-involved/how-do-i-become-a-pass-leader/pass-leader-role-profile/"
            },
            spanishtag: {
                company: 'The University of Manchester Linguistic Society',
                jobtitle: 'Spanish tutor',
                period: 'Sept 2018 - Apr 2019',
                location: 'Manchester, United Kingdom',
                description:<p className="g-more-about-list">The task was to run weekly small sessions for a group of seven people to help them<br/> 
                                to adquire basic Spanish language skills in a way they are able to survive a day in a<br/>
                                Hispanic country</p>,
                brand: ling_logo,
                complink: "https://manchesterstudentsunion.com/groups/linguistics-society-5251"
            },

            schotag: {
                company: <p>
                            Secretariat of Higher Education, Science,Technology<br/>
                            and Innovation (Senescyt) of Ecuador</p>,
                jobtitle: '"High Performance for Technical and Third level Careers" Scholarship',
                period: <p className="g-align-right">awarded Jul 2016</p>,
                location: 'Quito, Ecuador',
                description:<p className="g-more-about-list">Scholarship awarded for outstanding perfomance in the National exam for Higher<br/>
                                Education of the Government of Ecuador to continue my education in the world's <br/>
                                top Universities</p>,
                brand: senescyt_logo,
                complink: "https://www.educacionsuperior.gob.ec/la-secretaria/"
            },
        }
    }

    render(){
    return(
        <div >
        <Content >
            <Row className="g-more-about-line">
                <h2>Experience</h2><br/>
            </Row><br/>
            <MoreAboutTags  company={this.state.avltag.company} 
                            jobtitle={this.state.avltag.jobtitle}
                            period={this.state.avltag.period}
                            location={this.state.avltag.location}
                            description={this.state.avltag.description}
                            brand={this.state.avltag.brand}
                            complink={this.state.avltag.complink}
                            />
            <br/><br/><br/>
            <MoreAboutTags  company={this.state.callingtag.company} 
                            jobtitle={this.state.callingtag.jobtitle}
                            period={this.state.callingtag.period}
                            location={this.state.callingtag.location}
                            description={this.state.callingtag.description}
                            brand={this.state.callingtag.brand}
                            complink={this.state.callingtag.complink}
                            />


            <br/><br/><br/>
            <Row className="g-more-about-line">
                <h2>Education</h2><br/>
            </Row><br/>
            
            <MoreAboutTags  company={this.state.uomtag.company} 
                            jobtitle={this.state.uomtag.jobtitle}
                            period={this.state.uomtag.period}
                            location={this.state.uomtag.location}
                            description={this.state.uomtag.description}
                            brand={this.state.uomtag.brand}
                            complink={this.state.uomtag.complink}
                            />
            <br/><br/><br/>
            <MoreAboutTags  company={this.state.intotag.company} 
                            jobtitle={this.state.intotag.jobtitle}
                            period={this.state.intotag.period}
                            location={this.state.intotag.location}
                            description={this.state.intotag.description}
                            brand={this.state.intotag.brand}
                            complink={this.state.intotag.complink}
                            />

            <br/><br/><br/>
            <Row className="g-more-about-line">
                <h2>Volunteering</h2><br/>
            </Row><br/>
            
            <MoreAboutTags  company={this.state.ecusoctag.company} 
                            jobtitle={this.state.ecusoctag.jobtitle}
                            period={this.state.ecusoctag.period}
                            location={this.state.ecusoctag.location}
                            description={this.state.ecusoctag.description}
                            brand={this.state.ecusoctag.brand}
                            complink={this.state.ecusoctag.complink}
                            />
            <br/><br/><br/>
            <MoreAboutTags  company={this.state.museumtag.company} 
                            jobtitle={this.state.museumtag.jobtitle}
                            period={this.state.museumtag.period}
                            location={this.state.museumtag.location}
                            description={this.state.museumtag.description}
                            brand={this.state.museumtag.brand}
                            complink={this.state.museumtag.complink}
                            />
            <br/><br/><br/>
            <MoreAboutTags  company={this.state.passtag.company} 
                            jobtitle={this.state.passtag.jobtitle}
                            period={this.state.passtag.period}
                            location={this.state.passtag.location}
                            description={this.state.passtag.description}
                            brand={this.state.passtag.brand}
                            complink={this.state.passtag.complink}
                            />
            <br/><br/><br/>
            <MoreAboutTags  company={this.state.spanishtag.company} 
                            jobtitle={this.state.spanishtag.jobtitle}
                            period={this.state.spanishtag.period}
                            location={this.state.spanishtag.location}
                            description={this.state.spanishtag.description}
                            brand={this.state.spanishtag.brand}
                            complink={this.state.spanishtag.complink}
                            />
            <br/><br/><br/>
            <Row className="g-more-about-line">
                <h2>Awards</h2><br/>
            </Row><br/>
            <MoreAboutTags  company={this.state.schotag.company} 
                            jobtitle={this.state.schotag.jobtitle}
                            period={this.state.schotag.period}
                            location={this.state.schotag.location}
                            description={this.state.schotag.description}
                            brand={this.state.schotag.brand}
                            complink={this.state.schotag.complink}
                            />
            <br/><br/>
        </Content>
        </div>
    );
}

}

export default MoreAboutPage;