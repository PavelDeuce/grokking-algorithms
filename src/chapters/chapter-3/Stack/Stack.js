import LinkedList from '../../chapter-2/LinkedList/LinkedList.js';

export default class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return !this.list.head;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.list.head.value;
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.list.deleteHead().value;
  }
}
