import React from 'react';
import Modal from '@material-ui/core/Modal';
import Link from 'next/link';
import {
  Container, Form, Input, ButtonPrimary, Title, ContainerButtons, ButtonSecondary, ContainerModal,
} from '../styles/pages/forgot_password';
import ForgotImg from '../assets/forgot-img.svg';
import OkImg from '../assets/ok-img.png';
import Navbar from './_navbar';

export default function ForgotPassword() {
  const [open, setOpen] = React.useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const modalBody = (
    <ContainerModal>
      <Title>Enviado!</Title>
      <img src={OkImg} alt="ok" />
      <p>Verifique seu email e siga as instruções</p>
      <ButtonPrimary type="submit" onClick={handleModal}>Ok</ButtonPrimary>
    </ContainerModal>
  );
  return (
    <>
      <Navbar />
      <Container>
        <ForgotImg style={{ marginTop: '-10em' }} />
        <div>
          <Form>
            <Title>Esqueceu sua senha?</Title>
            <p>
              Entre com o seu email cadastrado para enviarmos as instruções para
              acessar o SAE com uma nova senha
            </p>
            <Input label="Email" required />
            <ContainerButtons>
              <ButtonPrimary type="submit" onClick={handleModal}>Enviar</ButtonPrimary>
              <ButtonSecondary type="submit">
                <Link href="/">Voltar</Link>
              </ButtonSecondary>
            </ContainerButtons>
          </Form>
        </div>
        <Modal
          open={open}
          onClose={handleModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {modalBody}
        </Modal>

      </Container>
    </>
  );
}
