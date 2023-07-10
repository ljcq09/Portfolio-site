import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {Container, Badge} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MoreAboutPage from './pages/MoreAboutPage';
import LandingPage from './pages/LandingPage';

import BuggyPage from './projectpages/BuggyPage';
import ClockAlarmPage from './projectpages/ClockAlarmPage';
import DemoCarPage from './projectpages/DemoCarPage';
import ParPage from './projectpages/ParPage';
import JWBAPage from './projectpages/JWBAPage';
import WebsitePage from './projectpages/WebsitePage';


import facebook_icon from './assets/images/sidebar/facebook_icon.png';
import instagram_icon from './assets/images/sidebar/instagram_icon.jpg';
import github_icon from './assets/images/sidebar/github_icon.jpg';
import linkedin_icon from './assets/images/sidebar/linkedin_icon.png';

import CVButton from './components/CVButton'
import HomeButton from './components/HomeButton'
import SpotifyButton from './components/SpotifyButton'


import me from './assets/images/about/me.jpg';


class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          title: 'Lenin Cruz',
         
          headerLinks: [
              { title: 'Home', path: '/projects' },
              { title: 'About', path: '/about' },
              { title: 'Contact', path: '/contact'},
 
          ],
          landing: {
              title:'Hello I\'m Lenin',
              lklogo: linkedin_icon,
              gtlogo: github_icon,
              fblogo: facebook_icon,
              iglogo: instagram_icon
          },

          home: {
              title: <p> HELLO WORLD! 👋🌍 </p>,
              subTitle: <p>Engineering Pojects Portfolio 👨‍💻</p>,
              text: 'Here\'s some of my work as a Mechatronic Engineering student',
          },
          about: {
              title: 'Who\'s this guy?',
              subTitle: 'A short glimpse into my life:',
              photo: me
          },
          contact: {
              title: 'Get in touch'
          },
          moreabout:{
              title: 'More About Me'
          },


          
          website: {
              title: 'Personal Portfolio',
              explanation: <p>Built with ReactJS Web Components, this website is a showcase of 
                              my recent projects as a student of Mechatronic Engineering</p>,
          },
          democar: {
              title: 'DemoCar2 GUI',
              explanation: 'GUI build with the PyQt5 library for Python 3',
          },
          par: {
              title: 'Processing and Reporting (PAR) Tool',
              explanation: 'Automated Reporting with MATLAB and VBA(Visual Basic for Applications',
          },
          jwba: {
              title: 'James Webb Bizarre Adventure (JWBA)',
              explanation: 'Mini-game developed for the NASA Space Apps Challenges 2019',
          },
          buggy: {
              title: 'Buggy Project',
              explanation: 'Microcontroller-based robot buggy Team Project',
          },
          clockalarm: {
              title: 'Clock Alarm Interface',
              explanation: 'Clock alarm prototype built on Nucleo Board/Application Shield and developed with C++',
          }            
      }
  }

  render() {
    return(  
      <Router>
        <Container className ="p-0 g-resp-ipad" fluid={true}>
          <Navbar className = "color-nav "  variant="dark" expand = "lg" sticky="top">
              <Navbar.Brand>
                  <HomeButton/>
              </Navbar.Brand>
              <CVButton/>
              <SpotifyButton/>        
              <Navbar.Toggle className = "border-0" aria-controls="navbar-toggle"/>

              <Navbar.Collapse id="navbar-toggle">
                <Nav className= "ml-auto">
                    <Link className="nav-link" to ="/projects"><Badge variant="outline-secondary">Portfolio</Badge></Link>
                    <Link className="nav-link" to ="/about"><Badge variant="outline-secondary">About</Badge></Link>
                    <Link className="nav-link" to ="/contact"><Badge variant="outline-secondary">Contact</Badge></Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render ={() => <LandingPage   gtlogo= {this.state.landing.gtlogo} 
                                                              lklogo= {this.state.landing.lklogo}
                                                              fblogo= {this.state.landing.fblogo}
                                                              iglogo= {this.state.landing.iglogo}
                                                              />} />
          
          <Route path="/projects" exact render ={() => <HomePage  title= {this.state.home.title} 
                                                                  subTitle={this.state.home.subTitle} 
                                                                  text={this.state.home.text} />} />
                                                          
          <Route path="/about" exact render ={() => <AboutPage  title= {this.state.about.title}
                                                                subTitle={this.state.about.subTitle} 
                                                                photo= {this.state.about.photo}  />} />
          <Route path="/contact" exact render ={() => <ContactPage title= {this.state.contact.title}  />} />
          <Route path="/moreabout" exact render ={() => <MoreAboutPage title= {this.state.moreabout.title}  />} />


          <Route path="/website" exact render ={() => <WebsitePage  title= {this.state.website.title}
                                                                    explanation= {this.state.website.explanation}
                                                                    youtubelink= {this.state.website.youtubelink}
                                                                    githublink= {this.state.website.githublink}/>} />

          <Route path="/democar" exact render ={() => <DemoCarPage  title= {this.state.democar.title}
                                                                    explanation= {this.state.democar.explanation}
                                                                    youtubelink= {this.state.democar.youtubelink}
                                                                    githublink= {this.state.democar.githublink}/>} />
          <Route path="/par" exact render ={() => <ParPage  title= {this.state.par.title}
                                                            explanation= {this.state.par.explanation}
                                                            youtubelink= {this.state.par.youtubelink}
                                                            githublink= {this.state.par.githublink}  />} />
          <Route path="/jwba" exact render ={() => <JWBAPage  title= {this.state.jwba.title}  
                                                                          explanation= {this.state.jwba.explanation}
                                                                          youtubelink= {this.state.jwba.youtubelink}
                                                                          githublink= {this.state.jwba.githublink}/>} />                                                        
          <Route path="/buggy" exact render ={() => <BuggyPage  title= {this.state.buggy.title}
                                                                explanation= {this.state.buggy.explanation}
                                                                youtubelink= {this.state.buggy.youtubelink}
                                                                githublink= {this.state.buggy.githublink}  />} />
          <Route path="/clockalarm" exact render ={() => <ClockAlarmPage  title= {this.state.clockalarm.title}  
                                                                          explanation= {this.state.clockalarm.explanation}
                                                                          youtubelink= {this.state.clockalarm.youtubelink}
                                                                          githublink= {this.state.clockalarm.githublink}/>} />
          {/* <Redirect from='/' to='/lc'/> */}
          {/* <Route path={new RegExp('^(?!.*(\\/lc)).*$')} exact render={() => <Footer className="g-Footer" />} /> */}
          <Route path={new RegExp('.*(?!(/)).((/\\w+)+|/?)$')} exact render={() => <Footer className="g-Footer" />} />

        </Container>  
      </Router>  
    );
  }
}

export default App;
