import styled from 'styled-components';
import dragIcon from '../../assets/reorder.svg';
import orderAsIcon from '../../assets/orderAs.svg';
import orderDesIcon from '../../assets/orderDes.svg';

export const DragIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url(${dragIcon});
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
`;
export const OrderAs = styled.div`
  width: 20px;
  height: 20px;
  background: url(${orderAsIcon});
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
  cursor: pointer;
`;
export const OrderDes = styled.div`
  width: 20px;
  height: 20px;
  background: url(${orderDesIcon});
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
  cursor: pointer;
`;

export const DragItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: grab;
  padding: 1rem;
  justify-content: space-between;
  ${props =>
    props.isDraggin
      ? `
    opacity: 0;
    cursor: grabbing;
  `
      : `opacity: 1; cursor: grab;`}
`;

export const ItemsContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
`;
