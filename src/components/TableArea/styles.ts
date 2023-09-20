import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  min-height: 250px;
  background-color: #fffefd;
  box-shadow: 0px 0px 5px #ccc; 
  border-radius: 10px;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 15px;
  text-align: left;
  color: #272744;
`;