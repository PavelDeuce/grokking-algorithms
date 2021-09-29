import findSmallestIndex from './findSmallestIndex.js';

const iterSelectionSort = (array) => {
  const sortArray = (sortedArray, currentArray) => {
    if (!currentArray.length) return sortedArray;

    const smallestIndex = findSmallestIndex(currentArray);
    const newCurrentArray = currentArray.filter((item, i) => i !== smallestIndex);
    return sortArray([...sortedArray, currentArray[smallestIndex]], newCurrentArray);
  };

  return sortArray([], array);
};

export default iterSelectionSort;
