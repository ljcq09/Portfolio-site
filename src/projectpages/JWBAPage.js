import React from 'react';

import HeroProj from '../components/HeroProj'

import jwba from '../assets/images/proj/jwba.png';
import jwba1 from '../assets/images/proj/jwba1.png';
import jwba2 from '../assets/images/proj/jwba2.png';
import jwba3 from '../assets/images/proj/jwba3.png';
import jwba4 from '../assets/images/proj/jwba4.jpg';


const imgs_labels =[[jwba, "JWBA Cover Page"],
                    [jwba1,"JWBA First Level"],
                    [jwba2,"JWBA Second Level"],
                    [jwba3,"JWBA Third Level"],
                    [jwba4,"NASA Space Apps Challenges Certificate of Completion"]]

const vids_labels =[["https://www.youtube.com/embed/KtNU6FWV3gA","JWBA in action"]]

const abouttext =   <p> <p>This project was developed as a team of three for the <strong>Up, Out, and Away!</strong> 
                        challenge proposed by NASA. The challenge consisted to develop a mini game to tell the story
                        of the construction of NASA's most powerful and complex Space Telescope ever, James Webb, and 
                        this had to be done in <strong>a weekend.</strong></p>

                        <p>The team identified nine parts of the telescope in total, so we aimed to produced a mini-game 
                        for each part of the telescope. In the end we developed a mini-game each, three in total.</p>

                        <p>The level I developed (second level) was a very simple platform video game aimed to collect some 
                        'mirror minerals' keys and escape from a door at the end. For this mini project I used basic C# 
                        language and the windows forms (.NET Framework) for game development. This was a very challenging 
                        learning experience for me as it was the first time I ever used C#. However, it was also an enriching 
                        and rewarding experience handled with a lot of enthuasiasm </p>

                        <p>Note: none of us is a graphics designer and given the length of the event (a weekend) we did
                        our best to prototype this project. </p>
                    </p>

const techsheet = [ 'UI design',
                    'Game design',
                    'C# - windows forms(.Net Framework)',
                    'HTML5']

const resources =[<p>Access the project resources on my 
                    <strong><a href="https://github.com/ljcq09/JWBA"> GITHUB </a></strong>Page</p>,
                    
                <p>Checkout the project details and specifications on the&nbsp;
                    <strong><a href="https://2019.spaceappschallenge.org/challenges/stars/and-away/teams/cuysito-emprendedor-1/project"> 
                    Space Apps Challenges 2019 </a></strong> official website</p>]


function JWBAPage(props) {
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

export default JWBAPage;