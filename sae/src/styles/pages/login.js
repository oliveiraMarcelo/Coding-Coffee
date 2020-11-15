import styled from 'styled-components';
import {
  Button as ButtonMaterial, MenuItem, Select as SelectMaterial, TextField,
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
  width: 45vh;
  padding: 10rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-family: 'Saira';
`;

export const Input = styled(TextField)``;

export const Select = styled(SelectMaterial)``;

export const Item = styled(MenuItem)``;

export const Button = styled(ButtonMaterial)`
  background-color: #6d74c1 !important;
  width: 50%;
  span {
    color: white;
  }
`;
