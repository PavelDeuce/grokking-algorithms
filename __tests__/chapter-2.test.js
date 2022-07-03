import selectionSort from '../src/chapters/chapter-2/selectionSort.js';
import iterSelectionSort from '../src/chapters/chapter-2/iterSelectionSort.js';
import mergeSort from '../src/chapters/chapter-2/mergeSort.js';
import LinkedList from '../src/chapters/chapter-2/LinkedList/LinkedList.js';
import LinkedListNode from '../src/chapters/chapter-2/LinkedList/LinkedListNode.js';
import DoubleLinkedList from '../src/chapters/chapter-2/DoubleLinkedList/DoubleLinkedList.js';

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

describe('DoubleLinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new DoubleLinkedList();
  });

  it('Create', () => {
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('Append', () => {
    linkedList.append(101);
    linkedList.append(102);

    expect(linkedList.head.next.value).toBe(102);
    expect(linkedList.tail.previous.value).toBe(101);
  });

  it('Prepend', () => {
    linkedList.prepend(102);
    expect(linkedList.head.value).toBe(102);
    expect(linkedList.tail.value).toBe(102);

    linkedList.append(101);
    linkedList.prepend(103);

    expect(linkedList.head.next.next.previous).toBe(linkedList.head.next);
    expect(linkedList.tail.previous.next).toBe(linkedList.tail);
    expect(linkedList.tail.previous.value).toBe(102);
  });

  it('Delete', () => {
    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(5);

    const deletedNode = linkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.tail.previous.previous.value).toBe(2);

    linkedList.delete(3);
    linkedList.delete(1);

    expect(linkedList.head.value).toBe(2);
    expect(linkedList.head.next.next).toBe(linkedList.tail);

    linkedList.delete(4);

    expect(linkedList.head.value).toBe(2);

    linkedList.delete(5);
    linkedList.delete(2);

    expect(linkedList.head).toBeNull();
  });

  it('Find', () => {
    expect(linkedList.find(101)).toBeNull();

    linkedList.append(101);
    expect(linkedList.find(101)).toBeDefined();
    expect(linkedList.find('Simple')).toBeNull();
  });
});
