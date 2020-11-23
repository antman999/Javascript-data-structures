class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			let current = this.root;
			while (true) {
				if (current.value > newNode.value) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if (current.value < newNode.value) {
					if (current.right === null) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	find(value) {
		if (!this.root) return undefined
		let current = this.root
		let found = false
		while (current && !found) {
			if (current.value > value) {
				current = current.left
			} else if (value > current.value) {
				current = current.right
			} else {
				found = true
			}
		}
		if (!found) return undefined
		return current
	}

	BFS() {
		let queue = [this.root];
		let visited = [];
		let node;
		while (queue.length) {
			node = queue.shift()
			visited.push(node)
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}
		return visited
	}

	DFSPreOrder() {
		let visited = []
		let current = this.root
		const helper = (node) => {
			visited.push(node)
			if (node.left) helper(node.left)
			if (node.right) helper(node.right)
		}
		helper(current)
		return visited
	}

	DFSPostOrder() {
		let visited = []
		let current = this.root
		const helper = (node) => {
			if (node.left) helper(node.left)
			if (node.right) helper(node.right)
			visited.push(node)
		}
		helper(current)
		return visited
	}

	DFSInOrder() {
		let visited = []
		let current = this.root
		const helper = (node) => {
			if (node.left) helper(node.left)
			visited.push(node)
			if (node.right) helper(node.right)
		}
		helper(current)
		return visited;
	}


}