import React from 'react';
import PropTypes from 'prop-types';
import { ItemsListContainer } from './ItemsLlist.style';
import Item from '../Item/Item';
import { checkItem } from '../../helper';

const ItemsList = ({ items = [], selectedItems, onSelectItem, size }) => (
  <ItemsListContainer size={size}>
    {items.map(item => (
      <Item
        key={item.id}
        name={item.name}
        bg={false || size}
        selectedItem={checkItem(selectedItems, item)}
        onSelectItem={() => onSelectItem(item)}
      />
    ))}
  </ItemsListContainer>
);

ItemsList.propTypes = {
  items: PropTypes.array,
  selectedItems: PropTypes.array,
  onSelectItem: PropTypes.func,
  size: PropTypes.string,
};

export default React.memo(ItemsList, (prevProps, nextProps) => {
  if (
    prevProps.selectedItems.length === nextProps.selectedItems.length &&
    prevProps.items.length === nextProps.items.length
  ) {
    return true;
  }
  return false;
});
