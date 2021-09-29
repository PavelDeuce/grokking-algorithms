const recursionMax = (array, max = null) => {
  if (array.length === 0) return max;
  const [first, ...rest] = array;
  const newMax = first > max ? first : max;
  return recursionMax(rest, newMax);
};

export default recursionMax;
