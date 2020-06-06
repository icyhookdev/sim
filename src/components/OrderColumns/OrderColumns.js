import React, { useContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import {
  WrapColumn,
  SearchInput,
  ColumnTitle,
  WrapFlexBetween,
  AltButton,
  PrimaryButton,
} from '../../styles/Shared';
import ItemList from '../ItemsList/ItemsList';
import useFilter from '../../hooks/useFilter';
import DragArea from '../DragArea/DragArea';
import { Context } from '../../Context';

const OrderColumns = ({ itemList }) => {
  const {
    selectedOrderItems,
    onSelectOrderItems,
    setSelectedOrderItems,
    onPrintSelectedValues,
    onCancel,
  } = useContext(Context);
  const { onChange, filteredItems } = useFilter(itemList);

  return (
    <WrapColumn bg="alt">
      <ColumnTitle>Como quieres ordenarlos?</ColumnTitle>
      <DndProvider backend={HTML5Backend}>
        <DragArea
          selectedItems={selectedOrderItems}
          setSelectedItems={setSelectedOrderItems}
        />
      </DndProvider>
      <SearchInput placeholder="Buscar Columna" onChange={onChange} bg="#fff" />
      <ItemList
        size="190px"
        items={filteredItems}
        selectedItems={selectedOrderItems}
        onSelectItem={onSelectOrderItems}
      />
      <WrapFlexBetween>
        <AltButton onClick={onCancel}>Cancelar</AltButton>
        <PrimaryButton onClick={onPrintSelectedValues}>Ok</PrimaryButton>
      </WrapFlexBetween>
    </WrapColumn>
  );
};

OrderColumns.propTypes = {
  itemList: PropTypes.array,
};

export default React.memo(OrderColumns);
