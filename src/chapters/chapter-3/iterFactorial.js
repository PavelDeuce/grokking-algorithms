const iterFactorial = (number) => {
  if (number === 0) return 1;

  const getFactorialValue = (sum, counter) => {
    if (counter === 1) return sum;
    return getFactorialValue(sum * counter, counter - 1);
  };
  return getFactorialValue(1, number);
};

export default iterFactorial;
