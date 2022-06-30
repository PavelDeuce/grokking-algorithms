import selectionSort from '../src/chapters/chapter-2/selectionSort.js';
import iterSelectionSort from '../src/chapters/chapter-2/iterSelectionSort.js';
import mergeSort from '../src/chapters/chapter-2/mergeSort.js';
import LinkedList from '../src/chapters/chapter-2/LinkedList/LinkedList.js';
import LinkedListNode from '../src/chapters/chapter-2/LinkedList/LinkedListNode.js';

test.each([
  ['Selection sort', selectionSort],
  ['Iter selection sort', iterSelectionSort],
  ['Merge sort', mergeSort],
])('%s', (name, selectionSortFunction) => {
  expect(selectionSortFunction([])).toEqual([]);
  expect(selectionSortFunction([1, 2, 3])).toEqual([1, 2, 3]);
  expect(selectionSortFunction([10, 6, 2, 7, 15, 1, 32])).toEqual([1, 2, 6, 7, 10, 15, 32]);
});

describe('Linked list', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('Empty', () => {
    expect(linkedList instanceof LinkedList).toBe(true);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('Append', () => {
    linkedList.append(1).append(2);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next instanceof LinkedListNode).toBe(true);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.tail.next).toBeNull();
  });

  it('Prepend', () => {
    linkedList.prepend(77);

    expect(linkedList.head.value).toBe(77);
    expect(linkedList.tail.value).toBe(77);

    linkedList.append(102);
    linkedList.prepend(101);

    expect(linkedList.head.value).toBe(101);
    expect(linkedList.tail.value).toBe(102);
  });

  it('Find', () => {
    expect(linkedList.find(101)).toBeNull();

    linkedList.append(101);

    expect(linkedList.find(1)).toBeNull();
    expect(linkedList.find(101)).toBeDefined();
  });

  it('Delete', () => {
    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(101).delete(101);

    expect(linkedList.find(101)).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1).append(1).append(1).append(2).append(3).append(4);

    const deletedNode = linkedList.delete(1);
    expect(deletedNode.value).toBe(1);

    expect(linkedList.delete(1)).toBe(null);
    expect(linkedList.head.value).toBe(2);

    linkedList.delete(4);
    linkedList.delete(4);

    expect(linkedList.tail.next).toBeNull();
  });

  it('Delete head', () => {
    linkedList.append(5).append(4).append(3);
    linkedList.deleteHead();

    expect(linkedList.head.value).toBe(4);
  });
});
