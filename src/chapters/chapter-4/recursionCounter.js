const recursionCounter = (array) => {
  if (array.length === 0) return 0;
  const [, ...rest] = array;
  return 1 + recursionCounter(rest);
};

export default recursionCounter;
