import React from 'react';
import Typing from './Typing';

export default function Left() {
  return (
    <div className="left">
      <div className="profile round">
        <div id="top-prof">
          <img src="Capture.JPG" alt="Profile Picture" />
        </div>

        <div id="bottom-prof" className="round">

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
        <table>
          <tr>

            <td><p>Python</p></td>
            <td><p>HTML</p></td>
            <td><p>CSS</p></td>
           
          </tr>
        </table>
      </div>

    </div>
  );
}

;
