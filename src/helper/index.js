export const checkItem = (selectedItems, item) => {
  const itm = selectedItems.filter(it => it.id === item.id);
  if (itm.length > 0) {
    return true;
  }
  return false;
};
