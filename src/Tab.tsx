
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import ExperienceCard from "./Experience";
import ProjectCard from "./ProjectCard";

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
          <td>
            <button id="tab">
              <a style={{ textDecoration: "none", color: "black" }} href="/resume.pdf" download="resume.pdf">
                Resume
              </a>
            </button>
          </td>
        </tr>
      </table>

      <div className="tab-content">
        {activeTab === 'experience' && (
          <div id="experience">
            <h1>Volunteer / Work Experience</h1>


            <ExperienceCard
              logo="https://media.licdn.com/dms/image/v2/C510BAQG5R7t4mGxQVw/company-logo_200_200/company-logo_200_200/0/1631355658488?e=2147483647&v=beta&t=S8v4NQ3ubwPN3jr5wbzdijPcSCZQYwkJkyJLYjIw-xo"
              name="Western Australian University Consultant"
              link="https://www.wauc.org.au/"
              date="Feb 2025 – Dec 2025"
              location="Perth"
              role="Student Consultant"
              description={[
                "Worked in a team to assist non-profit in communicating their impact for grants by researching possible KPIs to implement.",
                "Developed a data process map to optimize KPI tracking and presented insights to the director of non-profit, improving decision-making for grant applications.",
              ]}
            />

            <ExperienceCard
              logo="https://clubs.ecuguild.org.au/wp-content/uploads/2023/08/LOGO_Con_2-2.png"
              name="Computer and Security Student Association"
              link="https://cassa.au"
              date="Feb 2024 – Feb 2025"
              location="Perth"
              role="Marketing Coordinator"
              description={[
                "Promoted events such as the Start of Semester Social, Industry Connect, and Linux Workshop by designing posters and social media graphics using Canva.",
                "Helped grow a new Instagram account to over 170+ followers within its first semester.",
              ]}
            />

            <ExperienceCard
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGEBP8cAo-acxoy8tkBLhsD-kB_pUJYJHTA&s"
              name="After School Teacher – Code Camp"
              link="#"
              date="Jul 2024 – Dec 2024"
              location="Perth"
              role="After School Teacher"
              description={[
                "Taught a class of 25 primary school students how to develop simple games using a block-based coding environment, allowing each student to take a finished game home.",
                "Explained foundational programming concepts such as variable types while managing classroom behaviour.",
              ]}
            />


          </div>


        )}

        {activeTab === 'projects' && (
          <div id="projects">
            <h1 className="padding">Projects</h1>
            <div id="experience">
              <ProjectCard
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkv5BWG9YrBQyHShJcaCduRzlUWKBuAIVHKQ&s"
                name="ShouldIFish App"
                link="#"
                techused={["Next.js", "Python", "Firebase"]}
                description={[
                  "Independently developed a full-stack web application that utilises marine API data to predict daily fishing activity using a custom-built algorithm.",
                  "Implemented a Next.js frontend deployed on Vercel and a Python-based backend hosted on Firebase serverless infrastructure.",
                ]}
              />

              <ProjectCard
                logo="https://i.ibb.co/Np6VBHh/dwa.jpg"
                name="Coders for Causes – Winter Volunteer Project"
                link="https://codersforcauses.org/"
                techused={["Django", "Next.js"]}
                description={[
                  "Collaborated with a team of 20 university students to build an event management system for an environmental nonprofit.",
                  "Developed frontend and backend components, including the navigation bar, create-event page, and JWT authentication endpoint.",
                ]}
              />

              <ProjectCard
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkv5BWG9YrBQyHShJcaCduRzlUWKBuAIVHKQ&s"
                name="Financial Market Analyzer"
                link="#"
                techused={["React", "News API", "Stock API", "ChatGPT"]}
                description={[
                  "Individually created a web app that uses News and Stock APIs to generate a market summary via ChatGPT.",
                  "Purchased a custom domain and deployed the application on DigitalOcean.",
                  "Built to better understand financial metrics such as the S&P 500 and explore applications of AI.",
                ]}
              />

            </div>
          </div>




        )}
      </div>
    </div >
  );
}

