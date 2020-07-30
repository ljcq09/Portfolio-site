import React from 'react';

import HeroProj from '../components/HeroProj'




const imgs_labels =[]

const vids_labels =[["https://www.youtube.com/embed/WPol5VOMRMg","Clock Alarm Functionality Demo"],
                    ["https://www.youtube.com/embed/NPmPaVKEni0","Mario Tune PWM Demo"]]

const abouttext =   <p> <p> This project was carried out as part of my Microcontroller Engineering module
                            at University. The basic aim was to build a prototype alarm clock on the
                            STM32 Nucleo Board and the Mbed appication shield. I've used C programming and C++ OOP 
                            features to develop software around a finite state machine.
                        </p>

                        <p> To add functionality to my design, I used the peripherals included in the application shield: 
                            LCD, Potentiometers, 5-Way Joystick and a Speaker(PWM-Connected) </p>
                        
                        <p> <br/>This clock alarm interface contain the following features:
                            <ul><br/>
                                <li>Sets and displays time(h,m,s)</li>
                                <li>Sets and displays date(d,m,y)</li>
                                <li>Settable alarm(h,m,s) including Mario-theme tune</li>
                                <li>Counter in Seconds since the device is started running in the background</li>
                                </ul> 
                        </p>

                    </p>
const techsheet = [ 'Microcontroller Engineering',
                    'Embedded Systems',
                    'Digital I/O devices',
                    'C++ and C programming',
                    'STM32 Nucleo Board, Mbed application shield',
                    'Finite State Machines',
                    'Object oriented programming',
                    ]

const resources =[  <p>Check out the project soruce code on my&nbsp;
                        <strong><a href="https://github.com/ljcq09/Clock-Alarm-Interface">GITHUB </a></strong>Page
                    </p>]

function ClockAlarmPage(props) {
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

export default ClockAlarmPage;