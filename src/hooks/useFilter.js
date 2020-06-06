import { useState } from 'react';

const useFilter = (items) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const filterItems = (input) => {
    const filteredItems = items.filter(item => item.toLowerCase().includes(input));
    setFilteredItems(filteredItems)
  }

  const onChange = (e) => {
    const { value } = e.target;
    if (!value) {
      setFilteredItems(items);
      return;
    }
    filterItems(value);
  }

  return {
    onChange,
    filteredItems
  }

}

export default useFilter;