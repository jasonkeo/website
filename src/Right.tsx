import React from 'react';
import Tabs from './Tab';

export function Right() {

    return (
        <div className="right">

            <div className="round padding about">
                <h1> About me </h1>
                <p> Software engineering student from Perth, WA.
                    Currently completing a bachelors of Computer science at <a href="https://www.ecu.edu.au/">Edith Cowan University. </a>
                     In my free time I also enjoy playing games and watching movies.</p>

                <div className="about-img">
                
                <a target="_blank" href="https://www.linkedin.com/in/jason-keo-0b33ba224/"><img src="linkedin.png" /></a>
                <a target="_blank" href="https://instagram.com/jpanda0/"><img src="instagram.png" /></a>
                <a target="_blank" href="https://github.com/jasonkeo/"><img src="github.png" /></a>
                

                <a href="mailto:jasonkeo047@gmail.com"><img src="mail.png" /></a>
                
                </div>
            </div>



            <div id="body" className="round">


                <Tabs></Tabs>
            </div>



            <div id="education" className="round padding">
                <h1>Education</h1>

                <div>
                    <img src="ecu.png" />


                    <div id="edtop">
                        <h3> ECU (Bachelors of Computer Science)</h3>
                        <h4>02/2024-2026</h4>
                    </div>



                    <div id="edbot"> <img src="location.png" /> <h4> Perth </h4> <img src="suitcase.png" /> <h4> Full time </h4> </div>
                    <p></p>

                </div>


            </div>
        </div>







    );
};



