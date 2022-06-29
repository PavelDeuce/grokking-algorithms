export default (stairs) => {
  const getNewCost = (index, currentCost) => {
    if (!stairs[index + 1]) {
      return currentCost;
    }

    if (!stairs[index + 2]) {
      return currentCost + stairs[index + 1];
    }

    if (stairs[index + 1] < stairs[index + 2]) {
      return getNewCost(index + 1, currentCost + stairs[index + 1]);
    }

    return getNewCost(index + 2, currentCost + stairs[index + 2]);
  };

  const [first] = stairs;
  return getNewCost(0, first);
};
