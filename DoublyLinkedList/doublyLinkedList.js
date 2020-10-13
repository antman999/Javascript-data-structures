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

  unshift(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.previous = newNode
      newNode.next = this.head 
      this.head = newNode
    }
    this.length++;
    return this 
  }

  get(index) {
    if (index < 0 || index == this.length) return null 
    if (index <= this.length / 2) {
      let count = 0
      let current = this.head
      while (count !== index) {
        current = current.next
        count ++ 
      }
      return current 
    } else {
      let count = this.length - 1 
      let current = this.tail 
      while (count !== index) {
        current = current.previous 
        count--; 
      }
      return current 
    }
  }

  set(index, value) {
    let foundIndex = this.get(index)
    if (foundIndex) {
      foundIndex.value = value
      return true
    } else {
      return false 
    }
  }


}
