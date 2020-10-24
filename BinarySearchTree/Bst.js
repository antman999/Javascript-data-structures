class Node {
	constructor(value) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newValue = new Node(value);

		if (!this.root) {
			this.root = newValue;
			return this;
    } else {
      var  current = this.root 
      while (true) {
        if (newValue < current.value) {
          if (current.left === null) {
            current.left = newValue
            return this
          } else {
            current = current.left 
          }
        } else if (newValue > current.value) {
          if (current.right === null) {
            current.right = newValue
            return this 
          } else {
            current = current.right
          }
        }
      }
    }
    
   
	}
}
