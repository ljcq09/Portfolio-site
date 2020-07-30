import React from 'react';

import HeroProj from '../components/HeroProj'

import demogui from '../assets/images/proj/demogui.JPG';


const imgs_labels =[[demogui, "Python GUI Interface"]]

const vids_labels =[["https://www.youtube.com/embed/hRlhEh0SzSU","Python GUI data visualization Demo"]]


const abouttext =   <p> <p>This project was carried out as part of my Internship with AVL. The original idea was to create
                        a Graphical User Interface(GUI) that allowed people/engineers outside the scope of the project to see
                        a simple visualization of what was going on during a demonstration of self-driving features in Real-time.
                        </p>

                        <p>With the lockdown restrictions in place and no access to the vehicle I had to simulate a UDP socket to test
                        my design. I used previous data from our records in .mat format (MATLAB data container format) and created a client
                        side using the Java Interface for MATLAB while on the other side of the network there is an asynchronous Python function
                        server receving the data. </p>

                        <p>With the aid of the PyQT5 library for Python, I created little widgets(spedometer, angle gauges, route-map) 
                        integrated as the Front-End of the Application which are also running asynchronously in the main program.</p>

                    </p>
const techsheet = [ 'UI design',
                    'Python GUI libraries- PyQT5, Numpy, Asyncqt, pyqtgraph, pymap3d',
                    'MATLAB Programming',
                    'MATLAB and Python Interfacing',
                    'Ayncrhonous Functions',
                    'Java Interface for MATLAB',
                    'UDP Sockets',
                    'Data Visualization']

const resources =["References available upon request"]


function DemoCarPage(props) {
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

export default DemoCarPage;