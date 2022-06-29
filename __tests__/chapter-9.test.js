import getEditDistance from '../src/chapters/chapter-9/dynamicProgramming.js';
import climbingStaircaseProblem from '../src/chapters/chapter-9/dynamicClimbingStaircaseProblem.js';
import knapsackProblem from '../src/chapters/chapter-9/dynamicKnapsackProblem.js';

test('Dynamic programming (Levenshtein distance)', () => {
  expect(getEditDistance('google', 'notgoogl')).toBe(4);
  expect(getEditDistance('fosh', 'fish')).toBe(1);
});

test('Dynamic programming (Climbing staircase problem)', () => {
  const path = [1, 13, 17, 2, 8, 7, 19, 6];
  expect(climbingStaircaseProblem(path)).toBe(29);

  expect(climbingStaircaseProblem(path.reverse())).toBe(29);

  const path2 = [0, 0, 0, 0];
  expect(climbingStaircaseProblem(path2)).toBe(0);

  const path3 = [92, 92, 93, 92, 92, 92, 93, 93];
  expect(climbingStaircaseProblem(path3)).toBe(461);
});

test('Dynamic programming (Knapsack problem)', () => {
  const items1 = [
    { name: 'diamond', weight: 6, cost: 30 },
    { name: 'gold', weight: 1, cost: 20 },
    { name: 'silver', weight: 4, cost: 20 },
    { name: 'bronze', weight: 3, cost: 15 },
  ];
  expect(knapsackProblem(items1, 9)).toBe(55);
  expect(knapsackProblem(items1, 6)).toBe(40);

  const items2 = [
    { name: 'phone', weight: 4, cost: 10 },
    { name: 'watches', weight: 10, cost: 16 },
    { name: 'necklace', weight: 6, cost: 12 },
    { name: 'ring', weight: 8, cost: 14 },
  ];
  expect(knapsackProblem(items2, 28)).toBe(52);

  const items3 = [
    { name: 'item-1', weight: 4, cost: 4 },
    { name: 'item-2', weight: 1, cost: 1.5 },
    { name: 'item-3', weight: 3, cost: 2 },
  ];
  expect(knapsackProblem(items3, 4)).toBe(4);
  expect(knapsackProblem(items3, 1)).toBe(1.5);
  expect(knapsackProblem(items3, 0)).toBe(0);
});
