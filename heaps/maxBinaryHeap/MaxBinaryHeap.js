class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val)
    let index = this.values.length - 1
    let element = this.values[index]
   
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (element > parent) {
        this.values[parentIndex] = element
        this.values[index] = parent
        index = parentIndex
      } else {
        break;
      }
    }
  }

  extractMax() {
    let max = this.values[0]
    let end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

  sinkDown() {
    let index = 0
    let length = this.values.length 
    let element = this.values[0]
    while (true) {
     let leftChildIndex = 2 * (index + 1)
      let rightChildIndex = 2 * (index + 2)
      let leftChild;
      let rightChild;
      let swap = null
      if (leftChildIndex < length) {
         leftChild = this.values[leftChildIndex]
        if (leftChild > element) {
          swap = leftChildIndex
        }
        if (rightChildIndex < length) {
         rightChild = this.values[rightChildIndex]
          if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
            swap = rightChildIndex
          }
        }
        if (swap === null) break 
        this.values[index] = this.values[swap]
        index = swap 
      }
    }
  }

}