import styled from 'styled-components';

export const ItemsListContainer = styled.ul`
  height:  ${props => props.size ? props.size : '380px'};
  margin-top: 2rem;
  overflow-y: auto;
`;