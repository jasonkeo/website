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

            <div>
            <img src="https://i0.wp.com/tang.com.au/wp-content/uploads/2024/02/Website-logo-512-x-512.jpg?fit=512%2C512&ssl=1" />
            <div id="edtop">
              <a href="https://tang.com.au/" target="_blank">
                <h3>Tang Technology</h3>
              </a>
              <h4>05/2024-Present</h4>
            </div>
            <div id="edbot">
              <img src="location.png" />
              <h4>Perth</h4>
              <img src="suitcase.png" />
              <h4>IT Intern</h4>
            </div>
            <ul>
              <li><p> Helped troubleshoot computer problems and assist in the installation and configuration of computers.</p></li>

            </ul>
            </div>


              <img src="https://clubs.ecuguild.org.au/wp-content/uploads/2023/08/LOGO_Con_2-2.png" />
              <div id="edtop">
                <a href="https://cassa.au" target="_blank">
                  <h3>Computer and Security Student Association</h3>
                </a>
                <h4>02/2024-Present</h4>
              </div>
              <div id="edbot">
                <img src="location.png" />
                <h4>Perth</h4>
                <img src="suitcase.png" />
                <h4>Comittee member</h4>
              </div>
              <ul>
                <li><p>Contributed to the club by making and designing posters as well helping with web dev</p></li>
              </ul>
            </div>
          

            
            </div>


        )}

      {activeTab === 'projects' && (
        <div id="projects">
          <h1 className="padding">Projects</h1>
          <div id="experience">
          <div>
            <img src="https://i.ibb.co/Np6VBHh/dwa.jpg" />
            <div id="edtop">
              <a href="" target="_blank">
                <h3>Winter Project 2024 (Co-Exist)</h3>
              </a>
              <h4>06/2024-07/2024</h4>
            </div>
            <div id="edbot">
              <img src="location.png" />
              <h4>Perth</h4>
              <img src="suitcase.png" />
              <h4>Volunteer Developer</h4>
            </div>
            <ul>
              

            </ul>
            </div>
          </div>
          <p>
            <a href="https://cassa.au" target="_blank">
              <h3 className="padding">➜ CASSA website revamp</h3>
            </a>
            <ul>
              <li>improved club website by adding new content using html and css
              
              <ul><li>new about us, sponsors and join our comittee sections on homepage</li>
              <li>discord and join membership buttons</li>
              <li>undlerline hover effect on tabs</li>
              </ul>
              </li>

            </ul>
          </p>

          <p>
            <a href="https://showcase-cyan-six.vercel.app" target="_blank">
              <h3 className="padding">➜ Murdoch badminton club website</h3>
            </a>
            <ul>
              <li>hypothetical website for uni club made with typescript and tailwind css for practice</li>
            </ul>
          </p>

          


        </div>
      )}
    </div>
    </div >
  );
}

