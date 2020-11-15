import styled from 'styled-components';

export const ContainerSide = styled.div`
  width: 30vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -65px;
`;

export const ContainerProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: -15px;
    color: rgba(0, 0, 0, 0.31);
  }
`;

export const Dashboard = styled.div`
  height: 100vh;
  width: 30vh;
  background-color: #6d74c1;
  border-radius: 5px;

  div:last-child {
    margin-top: 6em;
  }
`;

export const SideMenuElem = styled.div`
  margin: 15px;
  padding: 5px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
  
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: gray;
`;
