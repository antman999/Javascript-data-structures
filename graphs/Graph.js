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
    return visited
  }

}