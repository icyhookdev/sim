import React, { useCallback } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { DragWrapper } from './DragArea.style';
import DragItem from '../DragItem/DragItem';

const DragArea = ({ selectedItems, setSelectedItems }) => {
  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = selectedItems[dragIndex];
      setSelectedItems(
        update(selectedItems, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragItem],
          ],
        })
      );
    },
    [selectedItems, setSelectedItems]
  );

  return (
    <DragWrapper>
      {selectedItems.map((item, i) => (
        <DragItem
          key={item.id}
          name={item.name}
          id={item.id}
          index={i}
          moveItem={moveItem}
        />
      ))}
    </DragWrapper>
  );
};

DragArea.propTypes = {
  selectedItems: PropTypes.array,
  setSelectedItems: PropTypes.func,
};

export default DragArea;
