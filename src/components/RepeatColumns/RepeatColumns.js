import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { WrapColumn, SearchInput, ColumnTitle } from '../../styles/Shared';
import ItemList from '../ItemsList/ItemsList';
import useFilter from '../../hooks/useFilter';
import { Context } from '../../Context';

const RepeatColumn = ({ itemList }) => {
  const { onChange, filteredItems } = useFilter(itemList);
  const { selectedRepeatItems, onSelectRepeatItems } = useContext(Context);

  return (
    <WrapColumn>
      <ColumnTitle>Que Columnas se repiten?</ColumnTitle>
      <SearchInput placeholder="Buscar Columna" onChange={onChange} />
      <ItemList
        items={filteredItems}
        selectedItems={selectedRepeatItems}
        onSelectItem={onSelectRepeatItems}
      />
    </WrapColumn>
  );
};

RepeatColumn.propTypes = {
  itemList: PropTypes.array,
};

export default RepeatColumn;
