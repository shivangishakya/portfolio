// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 60px 20px;
  background-color: #e0e0e0;
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

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title>Skills</Title>
      <SkillsList>
        <Skill>Programming Languages: JavaScript, Python, SQL, HTML, CSS, C/C++, Django, Node.js, React, Flask, Vue.js, Java</Skill>
        <Skill>OS/Platforms: Windows 7/10, macOS (UNIX), NI TestStand, Docker</Skill>
        <Skill>Source Version Control & Standards: Git, SVN, IBM Synergy CM/CR, DO178B, BitBucket, JIRA, Confluence</Skill>
        <Skill>Software Tools: Jupyter Notebook, Eclipse, VS Code, Nginx, Cron, DOORS (DXL), Microsoft Word, Excel 2013, Kubernetes, CI/CD, AWS (EC2, S3, RDS), Azure, JUnit, Pytest, unittest, Kafka, JSON, microservices, Postman, Swagger</Skill>
        <Skill>Database/Project Management: MySQL, PostgreSQL, Redis, MongoDB, NoSQL, PgAdmin, SQLite, Agile, Waterfall</Skill>
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
