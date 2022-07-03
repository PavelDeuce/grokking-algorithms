import DoubleLinkedListNode from './DoubleLinkedListNode.js';

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new DoubleLinkedListNode(value, this.head);

    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new DoubleLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          this.head = deletedNode.next;

          if (this.head) {
            this.head.previous = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  find(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}
