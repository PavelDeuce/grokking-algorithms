const quicksort = (array) => {
  if (array.length < 2) return array;
  const [supportElement, ...rest] = array;
  const lessArray = rest.filter((i) => i <= supportElement);
  const greaterArray = rest.filter((i) => i > supportElement);
  const sortedLess = quicksort(lessArray);
  const sortedGreater = quicksort(greaterArray);
  return [...sortedLess, supportElement, ...sortedGreater];
};

export default quicksort;
