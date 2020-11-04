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
			var current = this.root;
			while (true) {
				if (newValue < current.value) {
					if (current.left === null) {
						current.left = newValue;
						return this;
					} else {
						current = current.left;
					}
				} else if (newValue > current.value) {
					if (current.right === null) {
						current.right = newValue;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	BFS() {
		let queue = [];
		let visited = [];
		let node;
		queue.push(this.root);
		while (queue.length) {
			node = queue.shift();
			visited.push(node);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return visited;
	}

	DFSPreOrder() {
		let visited = [];
		let current = this.root;
		const helperFunction = node => {
			visited.push(node);
			if (node.left) helperFunction(node.left);
			if (node.right) helperFunction(node.right);
		};
		helperFunction(current);
		return visited;
	}

	DFSPostOrder() {
		let visited = []
		let current = this.root; 
		const helper = node => {
			if(node.left) helper(node.left)
			if (node.right) helper(node.right)
			visited.push(node.value)
		}
		helper(current)
		return visited
	}
}
