class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null //First in first Out 
    this.last = null //technically the front 
    this.size = 0 
  }

  push(value) {
    let newNode = new Node(value)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode;
    } else {
      let first = this.first
      this.first = newNode
      this.first.next = first 
    }
    return ++this.size 
  }

  pop() {
    if (!this.first) return null 
    let temp = this.first 
    if (this.size === this.last) {
      this.last = null 
    } else {
      this.first = this.first.next 
      this.size--;
      return temp.value 
    }
  }
  
}