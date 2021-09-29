const recursionSum = (array) => {
  if (array.length === 0) return 0;
  const [first, ...rest] = array;
  return first + recursionSum(rest);
};

export default recursionSum;
