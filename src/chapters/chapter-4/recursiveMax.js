const recursiveMax = (array, max = null) => {
  if (array.length === 0) return max;
  const [first, ...rest] = array;
  const newMax = first > max ? first : max;
  return recursiveMax(rest, newMax);
};

export default recursiveMax;
