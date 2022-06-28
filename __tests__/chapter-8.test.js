import greedyAlgorithm from '../src/chapters/chapter-8/greedyAlgorithm.js';
import knapsack from '../src/chapters/chapter-8/knapsackProblem.js';

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

describe('knapsack-problem', () => {
  it('knapsack empty collection', () => {
    expect(knapsack([], 0)).toEqual([]);
  });

  it('knapsack 1', () => {
    const items = [
      { name: 'backpack', weight: 30, cost: 30 },
      { name: 'book', weight: 20, cost: 20 },
      { name: 'phone', weight: 15, cost: 15 },
    ];
    expect(knapsack(items, 35)).toEqual(['backpack']);
    expect(knapsack(items, 30)).toEqual(['backpack']);
    expect(knapsack(items, 22)).toEqual(['book']);
  });

  it('knapsack 2', () => {
    const items = [
      { name: 'pack', weight: 30, cost: 30 },
      { name: 'phone', weight: 33, cost: 25 },
      { name: 'book', weight: 20, cost: 22 },
      { name: 'auto', weight: 10, cost: 20 },
      { name: 'pony', weight: 8, cost: 17 },
      { name: 'horse', weight: 15, cost: 15 },
      { name: 'toy', weight: 5, cost: 12 },
    ];
    expect(knapsack(items, 35)).toMatchObject(['pack', 'toy']);
    expect(knapsack(items, 68)).toMatchObject(['pack', 'phone', 'toy']);
    expect(knapsack(items, 121)).toMatchObject([
      'auto',
      'book',
      'horse',
      'pack',
      'phone',
      'pony',
      'toy',
    ]);
    expect(knapsack(items, 29)).toMatchObject(['book', 'pony']);
    expect(knapsack(items, 19)).toMatchObject(['auto', 'pony']);
    expect(knapsack(items, 6)).toMatchObject(['toy']);
  });
});
