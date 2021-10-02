const recursiveSum = (array) => {
  if (array.length === 0) return 0;
  const [first, ...rest] = array;
  return first + recursiveSum(rest);
};

export default recursiveSum;
