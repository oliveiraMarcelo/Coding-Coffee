import { FormControl, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Container, Form, Input, Select, Item, Button, Title,
} from '../styles/pages/login';
import LoginImg from '../assets/login-img.svg';
import Navbar from './_navbar';

export default function Login() {
  const profiles = ['perfil 1', 'perfil 2'];

  const [profileSelected, setProfile] = useState('');

  const handleChangeProfile = (event) => {
    setProfile(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <LoginImg />
        <div>
          <Form>
            <Title>LOGIN</Title>
            <Input label="Usuário" />
            <Input label="Senha" type="password" />
            <FormControl>
              <InputLabel>Perfil</InputLabel>
              <Select
                label="Perfil"
                value={profileSelected}
                onChange={handleChangeProfile}
              >
                <Item value="" key="none">Nenhum</Item>
                {profiles.map((profile) => <Item value={profile} key={profile}>{profile}</Item>)}
              </Select>
            </FormControl>
            <p style={{ textAlign: 'right' }}>
              <Link href="/forgot_password">Esqueci minha senha</Link>
            </p>
            <Button type="submit">Entrar</Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
