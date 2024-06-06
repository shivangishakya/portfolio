// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header photo="path-to-your-photo.jpg" name="Your Name" />
      <section id="about">
        <h2>About Me</h2>
        <p>This is the about section.</p>
      </section>
      <section id="experience">
        <h2>Professional Experience</h2>
        <p>This is the professional experience section.</p>
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
