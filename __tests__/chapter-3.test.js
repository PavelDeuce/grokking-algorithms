import factorial from '../src/chapters/chapter-3/factorial.js';
import iterFactorial from '../src/chapters/chapter-3/iterFactorial.js';

test.each([
  ['Factorial', factorial],
  ['Iter factorial', iterFactorial],
])('%s', (name, factorialFunction) => {
  expect(factorialFunction(0)).toBe(1);
  expect(factorialFunction(1)).toBe(1);
  expect(factorialFunction(3)).toBe(6);
  expect(factorialFunction(5)).toBe(120);
  expect(factorialFunction(7)).toBe(5040);
});
