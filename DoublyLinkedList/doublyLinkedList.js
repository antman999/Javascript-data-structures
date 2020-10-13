const { threadId } = require("worker_threads");

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) {
			return null;
    }
    
		let newTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = newTail.previous;
      this.tail.next = null;
      newTail.previous = null 
		}
		this.length--;
		return newTail;
  }
  
  shift() {
    if (this.length === 0) return undefined 
    
    let olderHead = this.head
   
    if (this.length === 1) {
      this.head = null 
      this.tail = null
    } else {
      this.head = olderHead.next
      this.head.previous = null 
      olderHead.next = null 
    }
    this.length--; 
    return olderHead
  }

}
