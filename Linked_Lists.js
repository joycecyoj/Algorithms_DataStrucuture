// Linked Lists - write methods for `addToTail`, `addToHead`, `removeHead`, `removeTail`, and `search`'

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new Node(value);
    const formerTail = this.tail;
    this.tail = newNode;

    if (formerTail) {
      formerTail.next = newNode;
      newNode.previous = formerTail;
    } else {
      this.head = newNode;
    }
  }

  addToHead(value) {
    const newNode = new Node(value);
    const formerHead = this.head;

    if (formerHead) {
      formerHead.previous = newNode;
      newNode.next = formerHead;
    } else {
      this.tail = newNode;
    }
  }

  removeHead() {
    const formerHead = this.head;

    if (!formerHead) {
      return null;
    }
    if (formerHead.next) {
      this.head = formerHead.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return formerHead.value;
  }

  removeTail() {
    const formerTail = this.tail;

    if (!formerTail) {
      return null;
    }
    if (formerTail.previous) {
      this.tail = formerTail.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return formerTail.value;
  }

  search(comparator) {
    if (typeof comparator === 'string') {
      const comparatorStr = comparator;
      comparator = elementValue => comparatorStr === elementValue;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (comparator(currentNode)) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
}
