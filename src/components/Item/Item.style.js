import styled from 'styled-components';
import checkMark from '../../assets/checkMark.svg';

export const ItemWrapper = styled.li`
  width: 100%;
  margin: .5rem 0;
  padding: .5rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 100;
  display:flex;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  ${props => props.selected && 'background: #F0F2FF;'}
  ${props => props.selected && props.bg && 'background: #fff;'}
`;

export const ItemCheckMark = styled.div`
  background: url(${checkMark});
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-right: 2rem;
`;