export default class DoubleLinkedListNode {
  constructor(value, next, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}
