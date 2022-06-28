const mergeArrays = (leftArray, rightArray) => {
  const merge = (leftIndex, rightIndex, result) => {
    const leftElement = leftArray[leftIndex];
    const rightElement = rightArray[rightIndex];

    if (!(leftIndex < leftArray.length && rightIndex < rightArray.length))
      return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));

    if (leftElement < rightElement)
      return merge(leftIndex + 1, rightIndex, [...result, leftElement]);

    return merge(leftIndex, rightIndex + 1, [...result, rightElement]);
  };

  return merge(0, 0, []);
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex, array.length);

  const leftSorted = mergeSort(leftArray);
  const rightSorted = mergeSort(rightArray);

  return mergeArrays(leftSorted, rightSorted);
};

export default mergeSort;
