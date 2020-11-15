import styled from 'styled-components';
import {
  Button as ButtonMaterial, TextField,
} from '@material-ui/core';

export const Container = styled.div`
  max-height: 80vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  `;

export const Form = styled.div`
  min-height: 100vh;
  width: 60vh;
  padding: 10rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: #656565;
    font-size: 12px;
  }
`;

export const Title = styled.h1`
  font-family: 'Saira';
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled(TextField)``;

export const ButtonPrimary = styled(ButtonMaterial)`
  background-color: #6d74c1 !important;
  width: 30%;
  span {
    color: white;
  }
`;

export const ButtonSecondary = styled(ButtonMaterial)`
  background-color: #0000 !important;
  width: 30%;
`;

export const ContainerModal = styled.div`
  max-height: 50vh;
  width: 65vh;
  margin: auto;
  margin-top: 25vh !important;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;

  p {
    color: #656565;
    font-size: 12px;
  }
`;
