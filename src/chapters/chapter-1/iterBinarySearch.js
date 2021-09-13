const iterBinarySearch = (list, value) => {
  const calculateNextMid = (low, high) => {
    if (low > high) return -1;

    const mid = Math.ceil((low + high) / 2);
    const guess = list[mid];

    if (guess < value) return calculateNextMid(mid + 1, high);
    if (guess > value) return calculateNextMid(low, mid - 1);
    return mid;
  };
  return calculateNextMid(0, list.length - 1);
};

export default iterBinarySearch;
