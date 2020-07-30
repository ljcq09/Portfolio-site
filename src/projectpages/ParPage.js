import React from 'react';

import HeroProj from '../components/HeroProj'


const imgs_labels =[]

const vids_labels =[["https://www.youtube.com/embed/sY-bf9Dl2e4","Automated Reporting Demo"]]


const abouttext =   <p> <p>The idea of this project was to create a tool to analyse the data of the software components in .mat format
                        of a self-driving car and compare it to a list of metrics to measure performance.</p>

                        <p>I worked with three other people on this project, and there were four software components to inspect. My 
                        contribution here was to help with the metrics definition for one of the components and to develop a report 
                        generator function with the challenge of using MATLAB with no toolboxes. The solution I found was to create 
                        an Automation server for MS Word so I can use VBA(Visual Basic for Applications) commands.</p> <br/>

                        <p>The report generator function I created is able to generate a 115 pages report in under eight minutes as 
                        seen in the demo above. I created functions for: 
                            <ul>
                                <li>Formatting</li>
                                <li>Table generation</li> 
                                <li>MATLAB figures embedding into MS Word</li> 
                                <li>A Raw hyperlinking and bookmarking algorithm which will also generates a table of 
                                contents from scratch</li>
                            </ul>
                        </p><br/>

                        <p>It should be noted that For demonstration purposes I made MS word to be visible in my video. 
                        The time taken to generate a report will halve if MS word is set to work in the background.</p>

                        <p>The time taken to generate a report will also depend on the size of the DataLog.mat given 
                        and the number of metrics to analyse it with. </p>

                    </p>
                    
const techsheet = [ 'Report Automation',
                    'MATLAB progamming',
                    'MS Word Visual Basic for applications (VBA)',
                    'Data Analysis - Data cleaning and formatting',
                    'Software component testing',
                    'Software Metrics definition']

const resources =["References available upon request"]


function ParPage(props) {
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

export default ParPage;