import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper, ItemCheckMark } from './Item.style';

const Item = ({ name, onSelectItem, selectedItem, bg }) => (
  <ItemWrapper onClick={onSelectItem} selected={selectedItem} bg={bg}>
    {selectedItem && <ItemCheckMark />}
    {name}
  </ItemWrapper>
);

Item.propTypes = {
  selectedItem: PropTypes.bool,
  onSelectItem: PropTypes.func,
  name: PropTypes.string,
  bg: PropTypes.string,
};

export default Item;
