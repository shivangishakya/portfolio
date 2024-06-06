// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header photo={`${process.env.PUBLIC_URL}/photo.jpeg`} name="Shivangi Shakya" />
      <section id="about">
        <h2>About Me</h2>
        {/* <p>This is the about section.</p> */}
        <p>Greetings!</p>
        <p>
          I am a highly motivated and results-oriented Software Engineer with over 6 years of hands-on experience in software development, full-stack engineering, and automation. My career has equipped me with a deep understanding of the software development life cycle (SDLC) and best engineering practices.
        </p>
        <p>
          At organizations such as UC San Diego, Alpha Recon, Ingram Micro, Alstom Transport PVT Ltd, and L&T Technology Services, I have successfully contributed to the creation of high-impact software applications and designed robust tests for high-volume businesses. My proficiency in programming languages like Python, C/C++, Java, and JavaScript has enabled me to significantly boost productivity through automation.
        </p>
        <p>
          Currently, I am a Full Stack Developer at UC San Diego, focusing on IoT communication protocols and backend development. I am also delving into Data Analytics and Machine Learning, particularly using K-Means clustering for electricity load data analysis to identify base load and usage spikes.
        </p>
        <p>
          While my expertise lies in backend development and software engineering, I am passionate about expanding my knowledge in full-stack development, cloud infrastructure, DevOps, IoT, and machine learning/AI.
        </p>
        <p>
          I am a collaborative team player, a problem solver, and a creative thinker who approaches challenges with a positive attitude. I am committed to delivering exceptional results and am actively seeking new opportunities to apply my skills and contribute to industry advancements.
        </p>
        <p>
          If you are looking for a dedicated and versatile software professional, I would love to connect and explore potential collaborations. Please feel free to reach out to me for networking, career opportunities, or engaging discussions about the exciting world of software engineering and development.
        </p>
      </section>
      <section id="experience">
        <h2>Professional Experience</h2>
        <p>This is the professional experience section.</p>
      </section>
      <section id="skills">
        <h2>Technical Skills</h2>
        <p>This is the technical skills section.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
};

export default App;
