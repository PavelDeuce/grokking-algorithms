import greedyAlgorithm from '../src/chapters/chapter-8/greedyAlgorithm.js';

test('Greedy algorithm', () => {
  const statesNeeded = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];
  const stations = {
    kone: ['id', 'ut', 'nv'],
    ktwo: ['wa', 'id', 'mt'],
    kthree: ['or', 'nv', 'ca'],
    kfour: ['nv', 'ut'],
    kfive: ['ca', 'az'],
  };
  expect(greedyAlgorithm(statesNeeded, stations)).toEqual(['kone', 'ktwo', 'kthree', 'kfive']);
});
