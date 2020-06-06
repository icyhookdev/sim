import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { checkItem } from './helper';

export const Context = createContext();

const Provider = ({ children }) => {
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);
  const [selectedRepeatItems, setSelectedRepeatItems] = useState([]);

  const onSelectOrderItems = item => {
    if (checkItem(selectedOrderItems, item)) {
      const removedItems = selectedOrderItems.filter(itm => itm.id !== item.id);
      setSelectedOrderItems([...removedItems]);
      return;
    }
    setSelectedOrderItems([...selectedOrderItems, item]);
  };

  const onSelectRepeatItems = item => {
    if (checkItem(selectedRepeatItems, item)) {
      const removedItems = selectedRepeatItems.filter(
        itm => itm.id !== item.id
      );
      setSelectedRepeatItems([...removedItems]);
      return;
    }
    setSelectedRepeatItems([...selectedRepeatItems, item]);
  };

  const onSortAs = () => {
    const sortedAs = selectedOrderItems.sort((curr, next) => {
      if (curr.name > next.name) {
        return 1;
      }

      if (curr.name < next.name) {
        return -1;
      }
      return 0;
    });

    setSelectedOrderItems([...sortedAs]);
  };

  const onSortDes = () => {
    const sortedDes = selectedOrderItems.sort((curr, next) => {
      if (curr.name < next.name) {
        return 1;
      }

      if (curr.name > next.name) {
        return -1;
      }
      return 0;
    });

    setSelectedOrderItems([...sortedDes]);
  };

  const onPrintSelectedValues = () =>
    console.log({
      repeatColumn: selectedRepeatItems,
      orderColumn: selectedOrderItems,
    });

  const onCancel = () => {
    setSelectedOrderItems([]);
    setSelectedRepeatItems([]);
  };

  const value = {
    selectedOrderItems,
    selectedRepeatItems,
    onSelectRepeatItems,
    onSelectOrderItems,
    onSortAs,
    onSortDes,
    setSelectedOrderItems,
    onPrintSelectedValues,
    onCancel,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
