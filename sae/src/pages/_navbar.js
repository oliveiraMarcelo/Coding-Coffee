import React from 'react';
import Link from 'next/link';
import UnbLogo from '../assets/unb-logo.svg';
import { ChildContainer, Container } from '../styles/pages/_navbar';

export default function Navbar() {
  return (
    <Container>
      <ChildContainer>
        <h4>
          <UnbLogo />
          <bold>SAE</bold>
          Sistema de Apoio Educacional
        </h4>
      </ChildContainer>
      <ChildContainer>
        <h3>Conheça o SAE</h3>
        <Link href="/new_account"><h3>Nova matrícula</h3></Link>
      </ChildContainer>
    </Container>
  );
}
