const findLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(costs).forEach((node) => {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });

  return lowestCostNode;
};

export default findLowestCostNode;
