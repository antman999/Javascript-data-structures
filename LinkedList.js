class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

  push(value) {
    //We create a new node 
    let newNode = new Node(value);
    //if theres no head make the node the head and the tail aswell
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
    } else {
    //Other wise make the next item of the tail the new node and make it the tail
			this.tail.next = newNode;
			this.tail = newNode;
    }
    //Increase length by one
		this.length++;
		return this;
  }
  
  pop() {
    //This requires a loop to the second to last item 
    //You cant ask for the previous node in a Singly linked list
    if (!this.head) return undefined
    let current = this.head
    let previous = current
    while (current.next) {
      //Previous will always be behind current which will give us the second to last 
      previous = current
      current = current.next
    }
    //we said the next of the second to last to null and make it the tail
    this.tail = previous 
    this.tail.next = null 
    this.length--; 
    if (this.length === 0) {
      this.head = null
      this.tail = null 
    }
    return current 
  }

  shift() {
   //We take the current head and remove it 
    if(!this.head) return undefined 
    let head = this.head 
    this.head = head.next
    this.length-- 
    if (this.length === 0) {
      this.tail = null 
    }
    return head
  }
}
