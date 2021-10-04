import findLowestCostNode from './findLowestCostNode.js';

const iterDijkstrasAlgorithm = (graphData, finalKey) => {
  const { graph, costs, parents } = graphData;
  const processed = [];

  const checkNode = (node) => {
    if (!node) return costs[finalKey];

    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];
      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    });

    processed.push(node);
    return checkNode(findLowestCostNode(costs, processed));
  };

  return checkNode(findLowestCostNode(costs, processed));
};

export default iterDijkstrasAlgorithm;
