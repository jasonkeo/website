import React from 'react';
import Typing from './Typing';

export default function Left() {
 
  
  return (
    <div className="left">
      <div className="profile round">
        <div id="top-prof">
          <img src="Capture.JPG" alt="" />
        </div>

        <div id="bottom-prof">

          <div id="inner">
            <h1 id="myText"><Typing></Typing></h1>
            <p> Software Engineering Student</p>
          </div>

        </div>

      </div>

      <div id="infomation" className="round padding">
        <h1>Infomation</h1>


        <div id="infobox">
          <h3>Location </h3>
          <p>Perth</p>
        </div>
        <div id="infobox">
          <h3>Experience</h3>
          <p>N/A</p>
        </div>
        <div id="infobox">
          <h3>Availability</h3>
          <p>1-2 weeks</p>
        </div>

      </div>

      <div id="skills" className="round padding">
        <h1>Skills</h1>

        <div className="skills-grid">
        
          <div><p>Python</p></div>
          <div><p>HTML</p></div>
          <div><p>CSS</p></div>
          <div><p>Javascript</p></div>
          <div><p>React</p></div>
          <div><p>Django</p></div>
        </div>
     


      </div>

    </div>
  );
}

;
