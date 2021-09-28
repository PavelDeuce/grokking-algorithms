const findSmallestIndex = (array) => {
  const findIndex = (smallest, index, counter) => {
    if (counter > array.length) return index;
    if (smallest > array[counter]) return findIndex(array[counter], counter, counter + 1);
    return findIndex(smallest, index, counter + 1);
  };
  const [firstItem] = array;
  return findIndex(firstItem, 0, 0);
};

export default findSmallestIndex;
