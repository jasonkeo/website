/*import React, { useState } from 'react';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']; // Replace with your actual tabs
const tabContents = ['Content 1', 'Content 2', 'Content 3']; // Replace with your actual tab contents

function Test() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={tab === activeTab ? 'active' : ''}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}

      {tabs.map((tab, index) => (
        <div
          key={tab}
          className={tab === activeTab ? 'active' : ''}
        >
          {tab === activeTab && tabContents[index]}
        </div>
      ))}
    </div>
  );
}

export default Test; */

import React, { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div>
      <table id="top" className='tabs'>
        <tr>
          <td>
            <button
              onClick={() => setActiveTab('experience')}
              className={activeTab === 'experience' ? 'active tab' : 'tab'}
            >
              Experience
            </button>
          </td>
          <td>
            <button
              onClick={() => setActiveTab('projects')}
              className={activeTab === 'projects' ? 'active tab' : 'tab'}
            >
              Projects
            </button>
          </td>
        </tr>
      </table>

      <div className="tab-content">
        {activeTab === 'experience' && (
          <div id="experience">
            <h1>Experience</h1>
            <div>
              <img src="https://clubs.ecuguild.org.au/wp-content/uploads/2023/08/LOGO_Con_2-2.png" />
              <div id="edtop">
                <a href="https://www.ecu.edu.au/degrees/courses/bachelor-of-computer-science">
                  <h3>Computer and Security Student Association</h3>
                </a>
                <h4>2024-Present</h4>
              </div>
              <div id="edbot">
                <img src="location.png" />
                <h4>Perth</h4>
                <img src="suitcase.png" />
                <h4>Comittee member</h4>
              </div>
              <p>Contributed to the club by making and designing posters as well helping with web dev</p>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div id="projects">
            <h1 className="padding">Projects</h1>
            <p>
              <a href="https://github.com/jasonkeo/signup_email" target="_blank">
                <h3 className="padding">Club Email Signup</h3>
              </a>
              <ul>
                <li>html email sent to new members of club.</li>
              </ul>
            </p>

            <p>
              <a href="https://github.com/jasonkeo/CASSA" target="_blank">
                <h3 className="padding">CASSA theme</h3>
              </a>
              <ul>
                <li>added new features to club website</li>
              </ul>
            </p>
            
            <p>
              <a href="https://showcase-cyan-six.vercel.app" target="_blank">
                <h3 className="padding">Club website (in progress)</h3>
              </a>
              <ul>
                <li>hypothetical website for uni club made with typescript and tailwind css for practice</li>
              </ul>
            </p>

           
          </div>
        )}
      </div>
    </div>
  );
}

