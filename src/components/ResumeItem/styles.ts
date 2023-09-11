import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  margin: 0 0 0 5px;
  text-align: center;
  font-weight: bold;
  color: #494d7e;
`;

export const Info = styled.div<{ color?: string }>`
  text-align: center;
  font-weight: bold;
  color: ${props => props.color ?? '#272744'};
`;