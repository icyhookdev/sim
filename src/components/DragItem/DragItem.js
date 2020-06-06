import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {
  DragItemWrapper,
  DragIcon,
  OrderAs,
  OrderDes,
  ItemsContainer,
} from './DragItem.style';
import ITEM_TYPE from '../../DnD/types';
import { Context } from '../../Context';

const DragItem = ({ name, id, index, moveItem }) => {
  const { onSortAs, onSortDes } = useContext(Context);
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <DragItemWrapper ref={ref} isDraggin={isDragging}>
      <ItemsContainer>
        <DragIcon /> {name}
      </ItemsContainer>
      <ItemsContainer>
        <OrderAs onClick={onSortAs} />
        <OrderDes onClick={onSortDes} />
      </ItemsContainer>
    </DragItemWrapper>
  );
};

export default DragItem;
