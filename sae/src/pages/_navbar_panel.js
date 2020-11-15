import React from 'react';
import Home from '../assets/home.svg';
import Ballon from '../assets/ballon.svg';
import { ChildContainer, Container, ProfileImage } from '../styles/pages/_navbar_panel';

export default function NavbarPanel() {
  return (
    <Container>
      <ChildContainer>
        <h4>
          <bold>SAE</bold>
        </h4>
        <Home />
      </ChildContainer>
      <ChildContainer>
        <Ballon />
        <ProfileImage />
      </ChildContainer>
    </Container>
  );
}
