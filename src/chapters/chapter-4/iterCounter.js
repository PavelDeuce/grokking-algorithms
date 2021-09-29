const iterCounter = (array) => {
  const calculateCount = (count, newArray) => {
    if (newArray.length === 0) return count;
    const [, ...rest] = newArray;
    return calculateCount(1 + count, rest);
  };
  return calculateCount(0, array);
};

export default iterCounter;
