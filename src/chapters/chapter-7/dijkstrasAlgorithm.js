import findLowestCostNode from './findLowestCostNode.js';

const dijkstrasAlgorithm = (graphData, finalKey) => {
  const { graph, costs, parents } = graphData;
  const processed = [];
  let node = findLowestCostNode(costs, processed);

  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];

    // eslint-disable-next-line
    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];
      if (costs[neighbor] > newCost) {
        parents[neighbor] = node;
        costs[neighbor] = newCost;
      }
    });

    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }

  return costs[finalKey];
};

export default dijkstrasAlgorithm;
