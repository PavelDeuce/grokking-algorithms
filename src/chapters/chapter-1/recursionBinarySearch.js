const recursionBinarySearch = (list, value, low = 0, high = list.length - 1) => {
  if (low > high) return -1;

  const mid = Math.ceil((low + high) / 2);
  const guess = list[mid];

  if (value > guess) return recursionBinarySearch(list, value, mid + 1, high);
  if (value < guess) return recursionBinarySearch(list, value, low, mid - 1);
  return mid;
};

export default recursionBinarySearch;
