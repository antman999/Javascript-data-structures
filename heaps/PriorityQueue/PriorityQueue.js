
class Node{
  constructor(val,priority) {
    this.value = val
    this.priority = priority
  }
}

class PriorityQueue{
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let node = new Node(val, priority)
    this.values.push(node)
    let index = this.values.length - 1;
    let element = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }
  
//   dequeue() {
   
//  }

}