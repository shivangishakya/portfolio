// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 60px 20px;
  background-color: #f0f0f0;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2.2em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5em;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Skill = styled.li`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 5px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Title>About Me</Title>
      <Paragraph>Greetings!</Paragraph>
      <Paragraph>
        I am a highly motivated and results-oriented Software Engineer with over 6 years of hands-on experience in software development, full-stack engineering, and automation. My career has equipped me with a deep understanding of the software development life cycle (SDLC) and best engineering practices.
      </Paragraph>
      <Paragraph>
        At organizations such as UC San Diego, Alpha Recon, Ingram Micro, Alstom Transport PVT Ltd, and L&T Technology Services, I have successfully contributed to the creation of high-impact software applications and designed robust tests for high-volume businesses. My proficiency in programming languages like Python, C/C++, Java, and JavaScript has enabled me to significantly boost productivity through automation.
      </Paragraph>
      <Paragraph>
        Currently, I am a Full Stack Developer at UC San Diego, focusing on IoT communication protocols and backend development. I am also delving into Data Analytics and Machine Learning, particularly using K-Means clustering for electricity load data analysis to identify base load and usage spikes.
      </Paragraph>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsList>
        <Skill>Programming Languages: JavaScript, Python, SQL, HTML, CSS, C/C++, Django, Node.js, React, Flask, Vue.js, Java</Skill>
        <Skill>OS/Platforms: Windows 7/10, macOS (UNIX), NI TestStand, Docker</Skill>
        <Skill>Source Version Control & Standards: Git, SVN, IBM Synergy CM/CR, DO178B, BitBucket, JIRA, Confluence</Skill>
        <Skill>Software Tools: Jupyter Notebook, Eclipse, VS Code, Nginx, Cron, DOORS (DXL), Microsoft Word, Excel 2013, Kubernetes, CI/CD, AWS (EC2, S3, RDS), Azure, JUnit, Pytest, unittest, Kafka, JSON, microservices, Postman, Swagger</Skill>
        <Skill>Database/Project Management: MySQL, PostgreSQL, Redis, MongoDB, NoSQL, PgAdmin, SQLite, Agile, Waterfall</Skill>
      </SkillsList>
      <Paragraph>
        While my expertise lies in backend development and software engineering, I am passionate about expanding my knowledge in full-stack development, cloud infrastructure, DevOps, IoT, and machine learning/AI.
      </Paragraph>
      <Paragraph>
        I am a collaborative team player, a problem solver, and a creative thinker who approaches challenges with a positive attitude. I am committed to delivering exceptional results and am actively seeking new opportunities to apply my skills and contribute to industry advancements.
      </Paragraph>
      <Paragraph>
        If you are looking for a dedicated and versatile software professional, I would love to connect and explore potential collaborations. Please feel free to reach out to me for networking, career opportunities, or engaging discussions about the exciting world of software engineering and development.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
