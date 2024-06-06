// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const NavBar = styled.nav`
  margin-top: 20px;
`;

const NavLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ photo, name }) => {
  return (
    <HeaderContainer>
      <Photo src={photo} alt={name} />
      <Name>{name}</Name>
      <NavBar>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Professional Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
