import LinkedListNode from './LinkedListNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;

    return this;
  }

  find(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  deleteHead() {
    const { head } = this;

    this.head = head.next;
    this.tail = this.head?.next;

    return head;
  }
}
