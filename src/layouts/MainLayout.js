import React from "react";
import styled from "styled-components";
import iphoneMockup from "../assets/iphone.svg";
import githubLogo from "../assets/github-logo.svg";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #BCF6C5;
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
  overflow: hidden;
`;

const GithubLink = styled.a`
  position: absolute;
  right: 1.5px; top: 5px;
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
      <GithubIcon src={githubLogo} alt="github" />
    </GithubLink>
    <AppSection>
      <img src={iphoneMockup} alt="iphone" />
      <AppContainer>{children}</AppContainer>
    </AppSection>
  </Main>;

export default MainLayout;
