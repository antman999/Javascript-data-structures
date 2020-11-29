class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    this.adjacencyList[key] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push(v2)
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push(v1)
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacencyVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacencyVertex)
    }
    delete this.adjacencyList[vertex]
  }

  //Graph traversal 

  DFSRecursive(node) {
    let results = [];
    let visited = {};
    const adjacencyList = this.adjacencyList

    const helper = vertex => {
      if (vertex === null) return null
      visited[vertex] = true
      results.push(vertex)
      adjacencyList[vertex].forEach(next => {
        if (!visited[next]) return helper(next)
      });
    }
    helper(node);
    return results
  }

  DFSIterative(node) {
    let stack = []
    let results = []
    let visited = {}
    let vertex;
    stack.push(node)
    while (node.length) {
      vertex = stack.pop()
      results.push(vertex)
      this.adjacencyList[vertex].forEach(nb => {
        if (!visited[nb]) {
          visited[nb] = true
          stack.push(nb)
        }
      })
    }
    return results 
  }

  BFS(vertex) {
    let queue = [vertex]
    let results = []
    let visited = {}
    let node;
    while (queue.length) {
      node = queue.shift()
      results.push(node)
      this.adjacencyList[node].forEach(nb => {
        if (!visited[nb]) {
         visited[nb] = true
        queue.push(nb)
        } 
      })
    }
    return results
  }
}