import styled from 'styled-components';

export const Container = styled.div` 
  margin-top: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #fffefd;
  box-shadow: 0px 0px 5px #ccc; 
  border-radius: 10px;
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  color: #272744;
`;

export const Input = styled.input`
  padding: 0 5px;
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 0 5px;
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #7dbefa;
  color: #272744;
  cursor: pointer;

  &:hover {
    background-color: #315dcd;
    color: #fff7e4;
  }
`;