class SinglyLinkedList {
  constructor(head = null, tail = null, length =0) {
    this.head = head,
    this.tail = tail,
    this.length = length;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }

  pop() {
    let c = this.head;
    let poppedElement = null;
    if(this.length === 0){
      return undefined;
    }else if(this.length === 1){
        poppedElement = c;
        this.head = null;
        this.tail = null
        this.length--
        return poppedElement;
    }else{
      while(c.next !== null){
        if(c.next.next === null){
          poppedElement = c.next;
          this.tail = c;
          c.next = null;
          this.length --;
          return poppedElement
          }
            c = c.next;
          }
        }
      }
  }

class Node {
  constructor(val, next = null) {
    this.val = val,
    this.next = next;
  }
}







