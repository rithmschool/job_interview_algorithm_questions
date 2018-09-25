class SLLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  push(val) {
    let newNode = new SLLNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.length++;
    this.tail = newNode;
    return this;
  }

  pop() {
    let current = this.head;
    let poppedElement = null;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      poppedElement = current;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedElement;
    } else {
      while (current.next !== null) {
        if (current.next.next === null) {
          poppedElement = current.next;
          this.tail = c;
          current.next = null;
          this.length--;
          return poppedElement
        }
        current = current.next;
      }
    }
  }
}
