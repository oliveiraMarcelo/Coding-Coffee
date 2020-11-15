import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 20vh;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  background-color: #6d74c1;
`;

export const ChildContainer = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  div {
    margin: 5px;
  }

  svg {
    margin: 5px;
  }

  h1,h3,h4 {
    color: white;
    margin: 5px;
  }

  h4 > bold {
    font-family: 'Saira';
    font-size: 2em;
    font-weight: bold;
    cursor: pointer;
  }

  h3 {
    padding-top: 1.8em; 
  }
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gray;
`;
