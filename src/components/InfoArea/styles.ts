import styled from 'styled-components';

export const Container = styled.div`
  margin: -40px 0 0 0;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #fffefd;
  box-shadow: 0px 0px 5px #ccc; 
  border-radius: 10px;
`;

export const DateArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const DateArrow = styled.div`
  width: 40px;
  text-align: center;
  color: #272744;
  font-size: 23px;
  cursor: pointer;
`;

export const DateTitle = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #272744;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;