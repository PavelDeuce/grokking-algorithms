const iterMax = (array) => {
  const findMax = (max, newArray) => {
    if (!newArray.length) return max;
    const [first, ...rest] = newArray;
    const newMax = first < max ? max : first;
    return findMax(newMax, rest);
  };
  return findMax(null, array);
};

export default iterMax;
