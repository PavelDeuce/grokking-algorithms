import factorial from '../src/chapters/chapter-3/factorial.js';
import iterFactorial from '../src/chapters/chapter-3/iterFactorial.js';
import Stack from '../src/chapters/chapter-3/Stack/Stack.js';

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

describe('Stack', () => {
  it('Empty', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
  });

  it('Peek', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push('Sword');

    expect(stack.peek()).toBe('Sword');

    stack.push('Crossbow');

    expect(stack.peek()).toBe('Crossbow');
    expect(stack.peek()).toBe('Crossbow');
  });

  it('isEmpty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push('Mana potion');

    expect(stack.isEmpty()).toBe(false);
  });

  it('Pop', () => {
    const stack = new Stack();

    stack.push('Sword');
    stack.push('Crossbow');
    stack.push('Fireball scroll');

    expect(stack.pop()).toBe('Fireball scroll');
    expect(stack.pop()).toBe('Crossbow');
    expect(stack.pop()).toBe('Sword');
    expect(stack.pop()).toBeNull();
  });
});
