const iterMax = (array) => {
  const findMax = (max, newArray) => {
    if (newArray.length === 0) return max;
    const [first, ...rest] = newArray;
    const newMax = first > max ? first : max;
    return findMax(newMax, rest);
  };
  return findMax(null, array);
};

export default iterMax;
