const iterSum = (array) => {
  const calculateSum = (sum, newArray) => {
    if (newArray.length === 0) return sum;
    const [first, ...rest] = newArray;
    return calculateSum(sum + first, rest);
  };
  return calculateSum(0, array);
};

export default iterSum;
