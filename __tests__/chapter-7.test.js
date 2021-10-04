import dijkstrasAlgorithm from '../src/chapters/chapter-7/dijkstrasAlgorithm.js';
import iterDijkstrasAlgorithm from '../src/chapters/chapter-7/iterDijkstrasAlgorithm.js';

test.each([
  ['dijkstrasAlgorithm', dijkstrasAlgorithm],
  ['iterDijkstrasAlgorithm', iterDijkstrasAlgorithm],
])('%s', (name, dijkstrasAlgorithmFunction) => {
  const graph = {
    a: {
      b: 4,
      result: 2,
    },
    b: {
      a: 3,
      result: 7,
    },
    result: {},
  };
  const costs = {
    a: 6,
    b: 2,
    result: Infinity,
  };
  const parents = {
    a: 'begin',
    b: 'begin',
    result: null,
  };
  expect(dijkstrasAlgorithmFunction({ graph, costs, parents }, 'result')).toEqual(7);
});
