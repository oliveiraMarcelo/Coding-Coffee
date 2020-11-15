import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ChildContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  h1,h3,h4 {
    color: white;
  }

  h4 > bold {
    font-family: 'Saira';
    font-size: 4em;
    font-weight: normal;
  }
  
  h3 {
    padding-top: 1.8em; 
    cursor: pointer;
  }
`;
