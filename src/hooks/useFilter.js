import { useState } from 'react';

const useFilter = items => {
  const [filteredItems, setFilteredItems] = useState(items);
  const filterItems = input => {
    const newfilteredItems = items.filter(item =>
      item.name.toLowerCase().includes(input)
    );

    setFilteredItems(newfilteredItems);
  };

  const onChange = e => {
    const { value } = e.target;
    if (!value) {
      setFilteredItems(items);
      return;
    }
    filterItems(value);
  };

  return {
    onChange,
    filteredItems,
  };
};

export default useFilter;
