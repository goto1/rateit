import React from "react";
import styled from "styled-components";
import iphone from "../assets/iphone.svg";
import github from "../assets/github-logo.svg";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  position: relative;
`;

const AppSection = styled.section`
  min-width: 345px;
  position: relative;
`;

const AppContainer = styled.section`
  width: 302px;
  height: 532.5px;
  border: 2px solid black;
  border-radius: 2.5px;
  position: absolute;
  top: 11%; left: 5.5%;
`;

const LinksSection = styled.section`
  position: absolute;
`;

const GithubLink = styled.a`
  position: absolute;
  right: 5px; top: 0;
  background: linear-gradient(#60707A, #242A2E);
  padding: 7.5px 7.5px 3px 7.5px;
  border-radius: 50%;
  margin: 0 5px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: rotate(-50deg);
  }
`;

const GithubIcon = styled.img`
  width: 27.5px;
`;

const MainLayout = ({ children }) =>
  <Main>
    <GithubLink
      href="https://github.com/goto1/rateit"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon src={github} alt="github" />
    </GithubLink>
    <AppSection>
      <img src={iphone} alt="iphone" />
      <AppContainer>{children}</AppContainer>
    </AppSection>
  </Main>;

export default MainLayout;
