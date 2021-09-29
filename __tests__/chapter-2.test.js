import selectionSort from '../src/chapters/chapter-2/selectionSort.js';
import iterSelectionSort from '../src/chapters/chapter-2/iterSelectionSort.js';

test.each([
  ['Selection sort', selectionSort],
  ['Iter selection sort', iterSelectionSort],
])('%s', (name, selectionSortFunction) => {
  expect(selectionSortFunction([])).toEqual([]);
  expect(selectionSortFunction([1, 2, 3])).toEqual([1, 2, 3]);
  expect(selectionSortFunction([10, 6, 2, 7, 15, 1, 32])).toEqual([1, 2, 6, 7, 10, 15, 32]);
});
