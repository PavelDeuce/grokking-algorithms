import findSmallestIndex from './findSmallestIndex.js';

const selectionSort = (array) => {
  const sortedArray = [];

  while (array.length) {
    const smallestIndex = findSmallestIndex(array);
    sortedArray.push(...array.splice(smallestIndex, 1));
  }

  return sortedArray;
};

export default selectionSort;
