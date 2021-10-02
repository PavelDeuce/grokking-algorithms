const recursiveCounter = (array) => {
  if (array.length === 0) return 0;
  const [, ...rest] = array;
  return 1 + recursiveCounter(rest);
};

export default recursiveCounter;
