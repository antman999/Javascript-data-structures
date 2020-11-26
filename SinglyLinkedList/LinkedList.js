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
		if (!this.head) return undefined;
		let current = this.head;
		let previous = current;
		while (current.next) {
			//Previous will always be behind current which will give us the second to last
			previous = current;
			current = current.next;
		}
		//we said the next of the second to last to null and make it the tail
		this.tail = previous;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return null 
		let head = this.head
		this.head = head.next 
		this.length--;
		if (this.length === 0) this.tail = null 
		return head
	}

	unshift(val) {
		let newValue = new Node(val);
		//add it to the front
		if (!this.head) {
			this.push(newValue);
		} else {
			newValue.next = this.head;
			this.head = newValue;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.value = value;
			return true;
		} else return false;
	}

	insert(index, value) {
		//Insert will insert a new node at a given index rather than replacing it
		if (index < 0 || index > this.length) return null;

		if (this.length === index) { !!this.push(value) }
		if (index === 0) { !!this.unshift(value) }
		//if the index value is at the end or beginning just push or unshift and return a boolean 
		let newNode = new Node(value)
		//Else we create a new node 

		//[10]-->[4]-->[2344]
		//we want to insert at the 1 index which is 4
		let foundIndex = this.get(index - 1)
		//We find the index before it which is 0th index or 10
		let temp = foundIndex.next
		// we place the next of that which is the 1 index or 4
		foundIndex.next = newNode
		//Then we insert the new node to the index listed 
		newNode.next = temp 
		//and we use the next value to attach the temp value 
		//[10]-->[1]-->[4]-->[2344]
		this.length++ 
		return true 
	}

	remove(index) {
		if (index < 0 || index > this.length) return null;
		if (this.length === index) { !!this.pop() }
		if (0 === index) { !!this.shift() }

		let foundIndex = this.get(index - 1)
		let indexToRemove = foundIndex.next 
		foundIndex.next = indexToRemove.next
		this.length--
		return indexToRemove
	}

	reverse() {
		//Swap head and tail
		//[100,1000,200,2000,300,3000]
		let node = this.head;
		//100
		this.head = this.tail;
		//change the head to be tail so 100 is 3000
		this.tail = node;
		//change the tail to be 100
		//now it looks like this
		//[3000,1000,200,2000,300,100]
		let next;
		let previous = null;
		
		//start with this
		//[100, 1000, 200, 2000, 300, 3000];
		// Node
		for (let i = 0; i < this.length; i++) {
			next = node.next; // next is now 1000
			node.next = previous; //next of 100 is null now
			previous = node; //previous null will equal 100
			node = next; // 1000
		}
		return this;
	}


}
