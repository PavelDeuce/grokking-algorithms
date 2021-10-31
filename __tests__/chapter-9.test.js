import getEditDistance from '../src/chapters/chapter-9/dynamicProgramming.js';

test('Dymamic programming (Levenshtein distance)', () => {
  expect(getEditDistance('google', 'notgoogl')).toBe(4);
  expect(getEditDistance('fosh', 'fish')).toBe(1);
});
