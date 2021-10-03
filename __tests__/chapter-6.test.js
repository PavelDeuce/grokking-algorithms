import breadthFirstSearch from '../src/chapters/chapter-6/breadthFirstSearch.js';
import iterBreadthFirstSearch from '../src/chapters/chapter-6/iterBreadthFirstSearch.js';

test.each([
  ['Breadth-first search', breadthFirstSearch],
  ['Iter Breadth-first search', iterBreadthFirstSearch],
])('%s', (name, breadthFirstSearchFunction) => {
  const callback = (item, searchedItem) => item === searchedItem;
  const graph = {
    jack: ['kate', 'john', 'james', 'kate'],
    john: ['hugo', 'said', 'james'],
    james: ['desmond', 'charly'],
    charly: ['john', 'hugo'],
    kate: ['said'],
    hugo: ['james'],
    desmond: ['said'],
    said: [],
  };

  expect(breadthFirstSearchFunction(graph, 'jack', 'charly', callback)).toBe(true);
  expect(breadthFirstSearchFunction(graph, 'jack', 'benjamin', callback)).toBe(false);
});
