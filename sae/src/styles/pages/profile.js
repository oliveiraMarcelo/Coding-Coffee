import styled from 'styled-components';
import { Button as ButtonMaterial } from '@material-ui/core';

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const ContentBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
`;

export const MissedClass = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  height: 50vh;
  margin-top: -65px;
  border-radius: 10px;
  z-index: 1;
  padding: 25px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
  
  div {
    /* background-color: #f1a165; */
  }
`;

export const LastUpdates = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  height: 50vh;
  padding: 20px;
  margin-top: -65px;
  border-radius: 10px;
  z-index: 1;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
`;

export const MyClasses = styled.div`
  display: flex;
  flex-direction: column;
  width: 150vh;
  height: 60vh;
  padding: 20px;
  margin-left: 7%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  z-index: 1;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
`;

export const Button = styled(ButtonMaterial)`
  background-color: #6d74c1 !important;
  width: 75%;
  span {
    color: white;
    font-size: 10px;
  }
`;
