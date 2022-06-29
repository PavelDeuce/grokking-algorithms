export default (items, size) => {
  const matrix = Array(items.length + 1)
    .fill(0)
    .map(() => Array(size + 1).fill(0));

  for (let i = 1; i <= items.length; i += 1) {
    for (let j = 1; j <= size; j += 1) {
      if (items[i - 1].weight > j) {
        matrix[i][j] = matrix[i - 1][j];
      } else {
        const prev = matrix[i - 1][j];
        const byFormula = items[i - 1].cost + matrix[i - 1][j - items[i - 1].weight];
        matrix[i][j] = Math.max(prev, byFormula);
      }
    }
  }

  return matrix[items.length][size];
};
