import React from 'react';

import HeroProj from '../components/HeroProj'

import buggycad from '../assets/images/proj/buggycad.png'
import buggylayout from '../assets/images/proj/buggylayout.jpg'



const imgs_labels =[[buggycad, "Robot Buggy Solidworks CAD model"],
                    [buggylayout, "Hardware layout diagram"]]

const vids_labels =[["https://www.youtube.com/embed/OftnD7udjEw","Buggy project, 'simple line-following' Demo"],
                    ["https://www.youtube.com/embed/YGF73kGF89s","PID for line-following keeping at Low Speeds, Demo"],
                    ["https://www.youtube.com/embed/6VxIJqOCE1E","PID for line-following keeping and Speed, Demo"]]
                    

const abouttext =   <p> <p>This project was carried out as part of my Embedded Systems module at University and was done in a team of four
                        people. The basic aim was to develop a battery-powered robot buggy which with the aid of sensors is able to navigate 
                        autonomously bu following a white line around a track.</p>

                        <p>The team made use of sensors like enconders and optical sensors to implement a PID Controller for direction and speed,
                        while a bluetooth LE module was used to receive commands from a smartphone in order to make a 180 degree turn at the
                        end of the track. In the process, a study about gearboxes and different optical sensors was done to select the most
                        adequate for our design.</p>

                        <p>My main contribution to the project was the creation of the CAD model in Solidworks as well as layout diagrams in DIYLC 
                        for our robot buggy. I also contributed strongly to the design and tunning of the PID controller for speed and direction 
                        which was the core activity for our buggy to work.</p>

                        <p>I also gained some technical experience in PCB design and increased my knowledge in Microcontroller programming by supporting
                        my teammates in their tasks. 
                        In addition, basic project management skills were also required in order to produce risks assesments, gant charts and budget 
                        planning of the team. Finally, teamworking, communication, commitment and a strong sense of colaboration were essential among 
                        the members for the project to succeed.</p>

                    </p>
const techsheet = [ 'Embedded Systems - analysis, design implementation and testing',
                    'Control Theory - PID (proportional–integral-derivative) algorithm',
                    'Microcontroller Interfacing',
                    'C++ for microcontrollers - STM32 Nucleo Board',
                    'Solidworks - Mechanical Design',
                    'Schematic Diagrams and Layouts',
                    'Sensors - reflective optical sensors(TCRT5000), encoders, bluetooth,',
                    'Sensors - characterisation, data collection, analysis and interpretation',
                    'Report Writing']

const resources =["References available upon request"]


function BuggyPage(props) {
    return(
        <div className="g-background-pages">
            <HeroProj   title={props.title} 
                        explanation= {props.explanation}
                        abouttext={abouttext}
                        techsheet={techsheet}
                        resources={resources}
                        vids_labels={vids_labels}
                        imgs_labels={imgs_labels}
                        />
        </div>
    );
}

export default BuggyPage;